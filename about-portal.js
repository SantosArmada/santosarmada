/* ============================================================
   ABOUT PORTAL — animated galactic vortex inside the
   "Por Qué Santos Armada" doorway opening.
   Namespaced so it cannot collide with globe.js / interpreter-z.js

   Stripped to the accretion-disk comet arcs only:
   star core/corona, planet glows, book/cathedral glyphs,
   twinkling stars, and dust field have all been removed.
   ============================================================ */
(function () {
  "use strict";

  const mount = document.getElementById("about-portal-canvas");
  if (!mount || typeof THREE === "undefined") return;

  // ---- Palette pulled from the about-portal.png mosaic art ----
  const PALETTE = {
    bg: 0x05060c,
    gold: 0xd9a441,
    red: 0xb8313a,
    blue: 0x2f5d9c,
    cream: 0xe8e0c8,
  };

  // Anchor point read off the doorway artwork itself (fraction of the
  // doorway opening, 0..1 left-to-right / top-to-bottom)
  const PLANET_ANCHOR = { x: 0.62, y: 0.53 }; // ringed planet, center
  const PLANET_TILT_DEG = -15; // matches the painted rings' downward-right tilt

  let scene, camera, renderer, clock;
  let disk;
  let raf = null;
  let visible = true;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Convert a 0..1 anchor (in image space) to world-space X/Y at z=0,
  // matching the camera's view frustum at the current aspect ratio.
  function anchorToWorld(anchor, aspect) {
    const camDist = 9;
    const vFOV = (50 * Math.PI) / 180;
    const viewHeight = 2 * Math.tan(vFOV / 2) * camDist;
    const viewWidth = viewHeight * aspect;
    const x = (anchor.x - 0.5) * viewWidth;
    const y = (0.5 - anchor.y) * viewHeight;
    return { x, y };
  }

  function init() {
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    scene = new THREE.Scene();
    scene.background = null; // transparent, image shows through edges

    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    buildAccretionDisk(width / height);

    window.addEventListener("resize", onResize);

    // Pause the render loop when off-screen to save battery/CPU
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (visible = e.isIntersecting));
      },
      { threshold: 0.05 }
    );
    io.observe(mount);

    animate();
  }

  // ---- Swirling accretion vortex: short curved arc lines that trace the
  // orbit direction (reads as actual flow/motion, not a static dot-cloud),
  // plus a sparse layer of sparkle particles riding along for texture ----
  function buildAccretionDisk(aspect) {
    const center = anchorToWorld(PLANET_ANCHOR, aspect);
    const ARC_COUNT = 90;
    const tilt = 0.34; // flattens the ring to echo the planet's own rings
    const palette = [PALETTE.gold, PALETTE.red, PALETTE.blue, PALETTE.cream];

    const arcs = [];
    const arcGroup = new THREE.Group();

    for (let i = 0; i < ARC_COUNT; i++) {
      const r = 0.6 + Math.pow(Math.random(), 0.55) * 3.3;
      const startAngle = Math.random() * Math.PI * 2;
      const arcLength = 0.35 + Math.random() * 0.5; // radians of sweep
      const segments = 14;

      const pts = [];
      for (let s = 0; s <= segments; s++) {
        const a = startAngle + (arcLength * s) / segments;
        pts.push(
          new THREE.Vector3(
            Math.cos(a) * r,
            Math.sin(a) * r * tilt,
            Math.sin(a) * r * 0.12
          )
        );
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const col = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
      const fade = 1 - Math.min(r / 4, 1) * 0.4;
      col.multiplyScalar(fade);

      const mat = new THREE.LineBasicMaterial({
        color: col,
        transparent: true,
        opacity: 0.55 + Math.random() * 0.25,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const line = new THREE.Line(geo, mat);
      arcGroup.add(line);

      arcs.push({
        line,
        radius: r,
        angle: startAngle,
        arcLength,
        speed: (0.45 + 1.0 / Math.sqrt(r)) * (reduceMotion ? 0 : 1),
        segments,
      });
    }

    arcGroup.position.set(center.x, center.y, 0);
    arcGroup.rotation.z = (PLANET_TILT_DEG * Math.PI) / 180;
    scene.add(arcGroup);

    // sparse sparkle dust riding on the same orbits, for texture/depth
    const SPARK_COUNT = 380;
    const positions = new Float32Array(SPARK_COUNT * 3);
    const colors = new Float32Array(SPARK_COUNT * 3);
    const orbitRadius = new Float32Array(SPARK_COUNT);
    const orbitAngle = new Float32Array(SPARK_COUNT);
    const orbitSpeed = new Float32Array(SPARK_COUNT);

    for (let i = 0; i < SPARK_COUNT; i++) {
      const r = 0.6 + Math.pow(Math.random(), 0.55) * 3.4;
      const a = Math.random() * Math.PI * 2;
      orbitRadius[i] = r;
      orbitAngle[i] = a;
      orbitSpeed[i] = (0.45 + 1.0 / Math.sqrt(r)) * (reduceMotion ? 0 : 1);

      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = Math.sin(a) * r * tilt;
      positions[i * 3 + 2] = Math.sin(a) * r * 0.12;

      const col = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    sparkGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const sparkMat = new THREE.PointsMaterial({
      size: 0.16,
      map: makeSoftDotTexture(),
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const sparks = new THREE.Points(sparkGeo, sparkMat);
    sparks.position.set(center.x, center.y, 0);
    sparks.rotation.z = (PLANET_TILT_DEG * Math.PI) / 180;
    scene.add(sparks);

    disk = {
      arcGroup,
      arcs,
      sparks,
      tilt,
      sparkData: { orbitRadius, orbitAngle, orbitSpeed },
    };
  }

  function makeSoftDotTexture() {
    const size = 64;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.5, "rgba(255,255,255,0.6)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
  }

  function onResize() {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animate() {
    raf = requestAnimationFrame(animate);
    if (!visible) return;

    const t = clock.getElapsedTime();
    const speed = reduceMotion ? 0 : 1;

    // advance each swirl arc along its orbit
    for (let i = 0; i < disk.arcs.length; i++) {
      const arc = disk.arcs[i];
      arc.angle += arc.speed * 0.01 * speed;
      const posAttr = arc.line.geometry.attributes.position;
      for (let s = 0; s <= arc.segments; s++) {
        const a = arc.angle + (arc.arcLength * s) / arc.segments;
        posAttr.array[s * 3] = Math.cos(a) * arc.radius;
        posAttr.array[s * 3 + 1] = Math.sin(a) * arc.radius * disk.tilt;
        posAttr.array[s * 3 + 2] = Math.sin(a) * arc.radius * 0.12;
      }
      posAttr.needsUpdate = true;
    }

    // advance sparkle dust along the same swirl
    const { orbitRadius, orbitAngle, orbitSpeed } = disk.sparkData;
    const sparkPos = disk.sparks.geometry.attributes.position;
    for (let i = 0; i < orbitRadius.length; i++) {
      orbitAngle[i] += orbitSpeed[i] * 0.01 * speed;
      const r = orbitRadius[i];
      const a = orbitAngle[i];
      sparkPos.array[i * 3] = Math.cos(a) * r;
      sparkPos.array[i * 3 + 1] = Math.sin(a) * r * disk.tilt;
      sparkPos.array[i * 3 + 2] = Math.sin(a) * r * 0.12;
    }
    sparkPos.needsUpdate = true;

    renderer.render(scene, camera);
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();