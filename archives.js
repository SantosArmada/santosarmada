/* ================================================================
   ARCHIVES — Santos Armada
   Chrome "ARCHIVES" lettering with a laser-red rim glow, floating over
   a reflective floor, drag-to-orbit. Built on the reference Water+Text
   scene structure (params object, init/createText/animate, Water floor,
   TTFLoader + Inter variable font, per-character lettering). The
   lil-gui tuning panel used to dial in these values has been removed —
   the params below are the final settings from that session.

   Deliberate departures from the original reference demo, and why:
   - Text geometry has real depth + a bevel (the reference used height:0,
     bevelEnabled:false — flat lettering) so the edges catch light.
   - A PMREM/RoomEnvironment environment map is added so the material has
     something real to reflect.
   - controls.enableZoom is off. The canvas fills the viewport, so a
     wheel-zoom control would swallow every scroll gesture and trap
     visitors on the hero, unable to reach the footer below.
   - A second glow mesh (a scaled-up backside silhouette) produces the
     red rim glow — not part of the reference scene.
================================================================= */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TTFLoader } from 'three/addons/loaders/TTFLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { Water } from 'three/addons/objects/Water.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const world = document.getElementById('archivesWorld');

// Radians/frame for the text's constant turntable spin (~17s per
// revolution at 60fps — a moderate, unhurried rate).
const TURNTABLE_SPEED = 0.006;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let scene, camera, renderer, controls;
let water, textGroup, glowGroup, turntable;

// --- FONTS ---
// Self-hosted: params.fontWeight is fixed to 'Black' (the tuning panel
// that could change it was removed), so only that one weight is ever
// loaded. Kept local instead of fetching from unpkg at runtime so the
// scene doesn't break if that CDN is down.
const fontBaseURL = 'fonts/';
const fontFiles = {
    'Black': 'inter-latin-900-normal.woff'
};

const loadedFonts = {};
const ttfLoader = new TTFLoader();
const fontLoader = new FontLoader();

// --- PARAMETERS (final values, tuned live in the now-removed GUI) ---
const params = {
    // Text
    text: 'ARCHIVES',
    fontWeight: 'Black',
    size: 11,
    letterSpacing: -0.5,
    textColor: '#eef1f3',

    // Material
    metalness: 0,
    roughness: 0.3,
    envMapIntensity: 2.2,

    // Laser rim glow
    glowColor: '#ff1a1a',
    glowOpacity: 1,
    glowScale: 1.1,

    // Water / reflection
    distortionScale: 1,
    speed: 0.4,
    waterColor: '#000000',
    sunColor: '#000000',
    waterOpacity: 1,

    // Background
    bgColor: '#ffffff',

    // Lighting
    ambientColor: '#ffffff',
    ambientIntensity: 0.4,
    dirColor: '#ffffff',
    dirIntensity: 1.6,
    lightX: -20,
    lightY: 30,
    lightZ: 40
};

init();
animate();

function init() {
    // 1. Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(params.bgColor);
    scene.fog = new THREE.FogExp2(params.bgColor, 0.0025);

    // 2. Camera
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 15, 300);

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    world.appendChild(renderer.domElement);

    // Procedural environment so the material has something real to
    // reflect (metal without an env map just reads as flat/black).
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(params.ambientColor, params.ambientIntensity);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(params.dirColor, params.dirIntensity);
    dirLight.position.set(params.lightX, params.lightY, params.lightZ);
    scene.add(dirLight);

    // 5. Water
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    const textureLoader = new THREE.TextureLoader();

    const waterNormals = textureLoader.load('https://threejs.org/examples/textures/water/Water_1_M_Normal.jpg', function (t) {
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
    });

    water = new Water(
        waterGeometry,
        {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: waterNormals,
            sunDirection: dirLight.position.clone().normalize(),
            sunColor: params.sunColor,
            waterColor: params.waterColor,
            distortionScale: params.distortionScale,
            fog: scene.fog !== undefined
        }
    );

    water.material.transparent = true;
    water.material.opacity = params.waterOpacity;

    water.rotation.x = -Math.PI / 2;
    scene.add(water);

    // 6. Text
    // Sits at the world origin so its rotation.y spin pivots around the
    // text's own visual center (createText offsets textGroup by -center.x,
    // which puts that center exactly on this group's local Y-axis).
    turntable = new THREE.Group();
    scene.add(turntable);
    loadFontAndCreateText();

    // 7. Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.minDistance = 20;
    controls.maxDistance = 200;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    // No zoom: the canvas fills the viewport, so wheel-zoom would
    // swallow every scroll gesture and trap visitors on the hero.
    controls.enableZoom = false;

    window.addEventListener('resize', onWindowResize);
}

function loadFontAndCreateText() {
    const weightKey = params.fontWeight;
    const fileName = fontFiles[weightKey];

    if (loadedFonts[weightKey]) {
        createText(loadedFonts[weightKey]);
        return;
    }

    const url = fontBaseURL + fileName;

    ttfLoader.load(url, (json) => {
        const font = fontLoader.parse(json);
        loadedFonts[weightKey] = font;
        createText(font);
    }, undefined, (err) => {
        console.error(err);
    });
}

function createText(font) {
    textGroup = new THREE.Group();
    glowGroup = new THREE.Group();
    if (!params.text) return;

    // Base letter material.
    const material = new THREE.MeshStandardMaterial({
        color: params.textColor,
        roughness: params.roughness,
        metalness: params.metalness,
        envMapIntensity: params.envMapIntensity
    });

    // Laser-red rim glow: a slightly inflated backside silhouette
    // sitting just behind each letter.
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: params.glowColor,
        transparent: true,
        opacity: params.glowOpacity,
        side: THREE.BackSide
    });

    const chars = params.text.split('');
    let xOffset = 0;

    chars.forEach((char) => {
        if (char === ' ') {
            xOffset += params.size / 2 + params.letterSpacing;
            return;
        }
        const geo = new TextGeometry(char, {
            font: font,
            size: params.size,
            depth: params.size * 0.28,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: params.size * 0.04,
            bevelSize: params.size * 0.03,
            bevelSegments: 3
        });
        geo.computeBoundingBox();
        const width = geo.boundingBox.max.x - geo.boundingBox.min.x;

        const mesh = new THREE.Mesh(geo, material);
        mesh.position.x = xOffset;
        textGroup.add(mesh);

        const glowGeo = geo.clone();
        const glowMesh = new THREE.Mesh(glowGeo, glowMaterial);
        glowMesh.position.x = xOffset;
        glowMesh.scale.set(params.glowScale, params.glowScale, params.glowScale * 1.2);
        glowGroup.add(glowMesh);

        xOffset += width + params.letterSpacing;
    });

    const box = new THREE.Box3().setFromObject(textGroup);
    const center = new THREE.Vector3();
    box.getCenter(center);

    textGroup.position.x = -center.x;
    textGroup.position.y = 2;
    textGroup.position.z = 0;
    turntable.add(textGroup);

    glowGroup.position.copy(textGroup.position);
    turntable.add(glowGroup);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    if (water) water.material.uniforms['time'].value += 1.0 / 60.0 * params.speed;
    if (turntable && !reduceMotion) turntable.rotation.y += TURNTABLE_SPEED;
    controls.update();
    renderer.render(scene, camera);
}
