/* ============================================
   SPACE & TIME — 3D PARTICLE CLOCK
   Progressive enhancement over the SVG/CSS astrolabe
   clock in space-time-clock.js. Same real-time hands,
   rendered as a bloom-lit particle disc, contained
   inside the .stc-stage slot instead of full-viewport.
   Reskinned from the original cyan/purple build to the
   site's gold / neon-pink / neon-blue palette. Falls
   back silently to the SVG clock if WebGL isn't
   available or the visitor prefers reduced motion.
   ============================================ */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

(function () {

    function supportsWebGL() {
        try {
            var canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext &&
                (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }

    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !supportsWebGL()) {
        // Leave the SVG astrolabe clock (space-time-clock.js) as-is.
        return;
    }

    var container = document.getElementById('stc3dContainer');
    var fallback = document.getElementById('spaceTimeClock');
    var transformBtn = document.getElementById('stc3dTransformBtn');
    if (!container) return;

    // Site palette (mirrors the CSS custom properties in globe.css)
    var GOLD = 0xc8a96e;
    var GOLD_LIGHT = 0xe8d5a3;
    var NEON_BLUE = 0x4da6ff;
    var NEON_PINK = 0xff2fb0;
    var BG = 0x04060a;
    var WARM_WHITE = 0xf5e6c8;

    var shapeScaleGLSL = `
        uniform vec3 u_shapeWeights;
        uniform float u_hueShift;

        float getShapeScale(float theta) {
            float scaleCircle = 1.0;

            float cosT = cos(theta);
            float sinT = sin(theta);
            float scaleSquare = 0.85 / max(abs(cosT), abs(sinT));

            float theta_hex = mod(theta + 0.52359877, 1.04719755) - 0.52359877;
            float scaleHex = 0.92 / cos(theta_hex);

            return u_shapeWeights.x * scaleCircle +
                   u_shapeWeights.y * scaleSquare +
                   u_shapeWeights.z * scaleHex;
        }
        vec3 rgb2hsv(vec3 c) {
            vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
            vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
            vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
            float d = q.x - min(q.w, q.y);
            float e = 1.0e-10;
            return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
        }
        vec3 hsv2rgb(vec3 c) {
            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
        vec3 shiftHue(vec3 color, float shift) {
            vec3 hsv = rgb2hsv(color);
            hsv.x = fract(hsv.x + shift);
            return hsv2rgb(hsv);
        }
    `;

    var faceVertexShader = `
        uniform float time;
        uniform float u_secondAngle;
        attribute float size;
        varying vec3 vColor;

        ${shapeScaleGLSL}

        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ; m = m*m ;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g; g.x = a0.x*x0.x + h.x*x0.y; g.yz = a0.yz*x12.xz + h.yz*x12.yw;
            return 130.0 * dot(m, g);
        }
        void main() {
            vec3 pos = position;

            float r = length(pos.xy);
            float theta = atan(pos.x, pos.y);

            float orbitSpeed = 1.0 / (r + 1.0);
            float newTheta = theta - time * 0.1 * orbitSpeed;

            float shapeScale = getShapeScale(newTheta);
            pos.x = r * shapeScale * sin(newTheta);
            pos.y = r * shapeScale * cos(newTheta);

            float angleDiff = mod(u_secondAngle - newTheta + 6.2831853, 6.2831853);

            float trail = exp(-angleDiff * 3.0);
            float crest = exp(-abs(angleDiff) * 15.0);

            float noise = snoise(pos.xy * 0.3 + time * 0.2);

            pos.z += (trail * 0.8) + (crest * 1.5) + (noise * 0.5);

            vec3 shiftedColor = shiftHue(color, u_hueShift);
            // comet trail behind the sweeping second hand — neon pink accent
            vec3 trailColor = shiftHue(vec3(1.0, 0.1843, 0.6902), u_hueShift);
            vec3 baseColor = shiftedColor + trailColor * trail;
            vColor = baseColor + vec3(crest * 0.8);

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            float dynamicSize = size * (1.0 + trail * 1.5 + noise * 0.5);
            gl_PointSize = dynamicSize * (25.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    var markerVertexShader = `
        uniform float time;
        uniform float u_secondAngle;
        attribute float size;
        attribute float a_angle;
        varying vec3 vColor;

        ${shapeScaleGLSL}
        void main() {
            vec3 pos = position;

            float shapeScale = getShapeScale(a_angle);
            pos.xy *= shapeScale;

            float diff = mod(u_secondAngle - a_angle + 6.2831853, 6.2831853);
            float sweepGlow = exp(-diff * 6.0);
            float pulse = sin(time * 2.0 + a_angle * 12.0) * 0.5 + 0.5;

            pos.z += sweepGlow * 1.0;
            vec3 shiftedColor = shiftHue(color, u_hueShift);
            vColor = shiftedColor + shiftedColor * sweepGlow * 2.5 + vec3(pulse * 0.2);
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (1.0 + sweepGlow * 1.5) * (25.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    var handVertexShader = `
        uniform float time;
        uniform float u_handAngle;
        attribute float size;
        attribute float a_progress;
        varying vec3 vColor;

        ${shapeScaleGLSL}
        void main() {
            vec3 pos = position;

            float shapeScale = getShapeScale(u_handAngle);
            pos.xy *= shapeScale;

            float flow = fract(-time * 1.5 + a_progress);
            float highlight = smoothstep(0.0, 0.15, flow) * smoothstep(0.4, 0.15, flow);

            pos.x += sin(a_progress * 15.0 - time * 8.0) * 0.08 * a_progress;
            vec3 shiftedColor = shiftHue(color, u_hueShift);
            vColor = mix(shiftedColor, vec3(1.0, 1.0, 1.0), highlight * 0.8);
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (1.0 + highlight * 1.5) * (30.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    var particleFragmentShader = `
        varying vec3 vColor;
        void main() {
            vec2 uv = gl_PointCoord.xy - vec2(0.5);
            float dist = length(uv);

            if(dist > 0.5) discard;

            float strength = pow(1.0 - (dist * 2.0), 2.0);
            gl_FragColor = vec4(vColor * strength, strength);
        }
    `;

    var scene, camera, renderer, composer;
    var clockGroup;
    var hourHand, minuteHand, secondHand;

    var currentShapeIndex = 0;
    var targetShapeWeights = new THREE.Vector3(1, 0, 0);
    var targetHueShift = 0.0;
    var swayT = 0;

    var uniforms = {
        time: { value: 0 },
        u_secondAngle: { value: 0 },
        u_minuteAngle: { value: 0 },
        u_hourAngle: { value: 0 },
        u_shapeWeights: { value: new THREE.Vector3(1, 0, 0) },
        u_hueShift: { value: 0.0 }
    };

    try {
        init();
        setupInteraction();
        animate();
    } catch (e) {
        // Any WebGL/shader failure — quietly keep the SVG fallback.
        container.style.display = 'none';
        return;
    }

    function size() {
        return {
            w: container.clientWidth || 220,
            h: container.clientHeight || 220
        };
    }

    function init() {
        var s = size();

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(BG, 0.028);

        camera = new THREE.PerspectiveCamera(45, s.w / s.h, 0.1, 1000);
        camera.position.set(0, 0, 14);

        renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
        renderer.setSize(s.w, s.h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(BG, 1);
        container.appendChild(renderer.domElement);

        var renderScene = new RenderPass(scene, camera);
        var bloomPass = new UnrealBloomPass(new THREE.Vector2(s.w, s.h), 1.5, 0.5, 0.82);
        bloomPass.threshold = 0.05;
        bloomPass.strength = 1.7;
        bloomPass.radius = 0.7;

        composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        clockGroup = new THREE.Group();
        clockGroup.rotation.x = -0.18;
        scene.add(clockGroup);

        createClockFace();
        createClockMarkers();
        createHands();

        if (window.ResizeObserver) {
            new ResizeObserver(onContainerResize).observe(container);
        } else {
            window.addEventListener('resize', onContainerResize);
        }

        var loading = container.querySelector('.stc3d-loading');

        // swap in — hide the SVG fallback, reveal the 3D clock
        if (fallback) fallback.style.display = 'none';
        container.style.display = 'block';
        if (transformBtn) transformBtn.style.display = 'inline-flex';

        if (loading) {
            setTimeout(function () {
                loading.style.opacity = '0';
                setTimeout(function () { loading.remove(); }, 500);
            }, 400);
        }
    }

    // Particle counts scaled down from the original full-viewport build —
    // this clock lives in a ~220px slot, not the whole screen, so fewer
    // points read just as dense while staying light on mobile GPUs.
    function createClockFace() {
        var count = 16000;
        var positions = [];
        var colors = [];
        var sizes = [];

        var colorCenter = new THREE.Color(GOLD_LIGHT);
        var colorEdge = new THREE.Color(GOLD);
        var tempColor = new THREE.Color();

        for (var i = 0; i < count; i++) {
            var r = 5.8 * Math.pow(Math.random(), 0.5);
            var theta = Math.random() * 2 * Math.PI;

            positions.push(
                r * Math.sin(theta),
                r * Math.cos(theta),
                (Math.random() - 0.5) * 1.5 - 1.0
            );
            tempColor.lerpColors(colorCenter, colorEdge, r / 5.8);
            tempColor.r += (Math.random() - 0.5) * 0.15;
            tempColor.g += (Math.random() - 0.5) * 0.08;

            colors.push(tempColor.r, tempColor.g, tempColor.b);
            sizes.push(Math.random() * 2.0 + 0.5);
        }

        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

        var material = new THREE.ShaderMaterial({
            vertexShader: faceVertexShader,
            fragmentShader: particleFragmentShader,
            uniforms: uniforms,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true
        });

        clockGroup.add(new THREE.Points(geometry, material));
    }

    function createClockMarkers() {
        var positions = [];
        var colors = [];
        var sizes = [];
        var angles = [];

        for (var i = 0; i < 60; i++) {
            var isHour = i % 5 === 0;
            var pCount = isHour ? 130 : 16;
            var rBase = 5.2;
            var angle = (i / 60) * Math.PI * 2;

            var c = new THREE.Color(isHour ? WARM_WHITE : NEON_BLUE);

            for (var j = 0; j < pCount; j++) {
                var spread = isHour ? 0.18 : 0.05;
                var r = rBase + (Math.random() - 0.5) * spread;
                var a = angle + (Math.random() - 0.5) * (spread / rBase);

                positions.push(
                    r * Math.sin(a),
                    r * Math.cos(a),
                    (Math.random() - 0.5) * 0.2 + 0.2
                );

                colors.push(c.r, c.g, c.b);
                sizes.push(isHour ? Math.random() * 3.0 + 1.5 : Math.random() * 1.5 + 0.5);
                angles.push(angle);
            }
        }

        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        geometry.setAttribute('a_angle', new THREE.Float32BufferAttribute(angles, 1));

        var material = new THREE.ShaderMaterial({
            vertexShader: markerVertexShader,
            fragmentShader: particleFragmentShader,
            uniforms: uniforms,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true
        });

        clockGroup.add(new THREE.Points(geometry, material));
    }

    function createHandGeometry(length, width, count, colorHex, zOffset) {
        var positions = [], colors = [], sizes = [], progress = [];
        var baseColor = new THREE.Color(colorHex);

        for (var i = 0; i < count; i++) {
            var y = Math.pow(Math.random(), 0.6) * length;
            var p = y / length;
            var taper = 1.0 - p * 0.85;
            var x = (Math.random() - 0.5) * width * taper;
            var z = (Math.random() - 0.5) * 0.15 + zOffset;

            positions.push(x, y, z);

            var tipIntensity = 0.3 + 0.7 * p;
            colors.push(
                baseColor.r * tipIntensity + (1 - tipIntensity) * 0.1,
                baseColor.g * tipIntensity + (1 - tipIntensity) * 0.1,
                baseColor.b * tipIntensity + (1 - tipIntensity) * 0.1
            );

            sizes.push(Math.random() * 2.5 + 1.0);
            progress.push(p);
        }

        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        geometry.setAttribute('a_progress', new THREE.Float32BufferAttribute(progress, 1));
        return geometry;
    }

    function createHands() {
        var baseMaterial = new THREE.ShaderMaterial({
            vertexShader: handVertexShader,
            fragmentShader: particleFragmentShader,
            uniforms: uniforms,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true
        });

        function cloneHandMat() {
            var mat = baseMaterial.clone();
            mat.uniforms = Object.assign({}, uniforms, { u_handAngle: { value: 0 } });
            return mat;
        }

        hourHand = new THREE.Points(createHandGeometry(2.5, 0.5, 1200, GOLD, 0.8), cloneHandMat());
        clockGroup.add(hourHand);

        minuteHand = new THREE.Points(createHandGeometry(3.8, 0.35, 1600, NEON_BLUE, 1.2), cloneHandMat());
        clockGroup.add(minuteHand);

        secondHand = new THREE.Points(createHandGeometry(4.6, 0.15, 900, NEON_PINK, 1.6), cloneHandMat());
        var counterGeo = createHandGeometry(1.2, 0.15, 260, NEON_PINK, 1.6);

        var posAttr = counterGeo.attributes.position.array;
        for (var i = 1; i < posAttr.length; i += 3) posAttr[i] *= -1;

        var mGeo = new THREE.BufferGeometry();
        ['position', 'color', 'size', 'a_progress'].forEach(function (attr) {
            var arr1 = secondHand.geometry.attributes[attr].array;
            var arr2 = counterGeo.attributes[attr].array;
            var merged = new Float32Array(arr1.length + arr2.length);
            merged.set(arr1);
            merged.set(arr2, arr1.length);
            mGeo.setAttribute(attr, new THREE.BufferAttribute(merged, (attr === 'position' || attr === 'color') ? 3 : 1));
        });

        secondHand.geometry = mGeo;
        clockGroup.add(secondHand);

        var coreGeo = new THREE.BufferGeometry();
        var corePos = [], coreCol = [], coreSize = [];
        for (var k = 0; k < 150; k++) {
            corePos.push((Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3, 1.8 + Math.random() * 0.2);
            coreCol.push(1.0, 0.96, 0.88);
            coreSize.push(Math.random() * 4.0 + 2.0);
        }
        coreGeo.setAttribute('position', new THREE.Float32BufferAttribute(corePos, 3));
        coreGeo.setAttribute('color', new THREE.Float32BufferAttribute(coreCol, 3));
        coreGeo.setAttribute('size', new THREE.Float32BufferAttribute(coreSize, 1));
        clockGroup.add(new THREE.Points(coreGeo, baseMaterial));
    }

    function setupInteraction() {
        if (!transformBtn) return;
        var nameEl = document.getElementById('stc3dShapeName');
        // weight order is [circle, square, hex] — keep the label in sync
        var shapeNames = ['Circle', 'Square', 'Hexagon'];

        transformBtn.addEventListener('click', function () {
            currentShapeIndex = (currentShapeIndex + 1) % 3;

            if (currentShapeIndex === 0) targetShapeWeights.set(1, 0, 0);
            else if (currentShapeIndex === 1) targetShapeWeights.set(0, 1, 0);
            else targetShapeWeights.set(0, 0, 1);

            targetHueShift += 0.0; // palette stays fixed to the site's gold/pink/blue

            if (nameEl) nameEl.textContent = shapeNames[currentShapeIndex];
        });
    }

    function onContainerResize() {
        var s = size();
        if (!s.w || !s.h) return;
        camera.aspect = s.w / s.h;
        camera.updateProjectionMatrix();
        renderer.setSize(s.w, s.h);
        composer.setSize(s.w, s.h);
    }

    function updateClockHands() {
        var now = new Date();
        var hours = now.getHours() % 12;
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var milliseconds = now.getMilliseconds();

        var hourAngle = ((hours + minutes / 60) / 12) * Math.PI * 2;
        var minuteAngle = ((minutes + seconds / 60) / 60) * Math.PI * 2;
        var secondAngle = ((seconds + milliseconds / 1000) / 60) * Math.PI * 2;

        if (hourHand) hourHand.rotation.z = -hourAngle;
        if (minuteHand) minuteHand.rotation.z = -minuteAngle;
        if (secondHand) secondHand.rotation.z = -secondAngle;

        uniforms.u_hourAngle.value = hourAngle;
        uniforms.u_minuteAngle.value = minuteAngle;
        uniforms.u_secondAngle.value = secondAngle;

        if (hourHand) hourHand.material.uniforms.u_handAngle.value = hourAngle;
        if (minuteHand) minuteHand.material.uniforms.u_handAngle.value = minuteAngle;
        if (secondHand) secondHand.material.uniforms.u_handAngle.value = secondAngle;
    }

    function animate() {
        requestAnimationFrame(animate);

        uniforms.time.value = performance.now() * 0.001;
        uniforms.u_shapeWeights.value.lerp(targetShapeWeights, 0.05);
        uniforms.u_hueShift.value = THREE.MathUtils.lerp(uniforms.u_hueShift.value, targetHueShift, 0.05);

        // gentle ambient sway replaces the original OrbitControls drag —
        // this clock sits inline on the page now, not a free-orbit hero.
        swayT += 0.0035;
        clockGroup.rotation.x = -0.18 + Math.sin(swayT * 0.6) * 0.025;
        clockGroup.rotation.y = Math.sin(swayT * 0.4) * 0.06;

        updateClockHands();
        composer.render();
    }

})();
