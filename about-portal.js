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

  // ---- Palette pulled from the about-portal.jpg mosaic art ----
  const PALETTE = {
    bg: 0x05060c,
    gold: 0xd9a441,
    red: 0xb8313a,
    blue: 0x2f5d9c,
    cream: 0xe8e0c8,
  };

  // Anchor point read off the doorway artwork itself (fraction of the
  // doorway opening, 0..1 left-to-right / top-to-bottom). Re-measured
  // this alongside the ring angles below -- the old (0.62, 0.53) put
  // the whole orbit noticeably above the actual planet once checked by
  // rendering the exact same projection math in an offline script and
  // overlaying it on the source photo pixel-for-pixel (screenshots of
  // the live canvas were too small/compressed to catch how far off it
  // was). y=0.53 was the main culprit.
  const PLANET_ANCHOR = { x: 0.63, y: 0.595 }; // ringed planet, center

  // Radius (world units, same scale as anchorToWorld) of the painted
  // planet's body -- an invisible occluder this size gets planted at
  // the anchor so the "far" half of each ring (the negative-Z side of
  // the sin-based tilt below) passes behind it instead of always
  // drawing on top. Same depth-occlusion idea as the moon orbiting the
  // globe on the Space and Time page, just done with a real depth-buffer
  // write (colorWrite off, depthWrite on) instead of a DOM z-index flip,
  // since this orbit is a field of arcs/points rather than one marker.
  const PLANET_RADIUS = 1.18;
  // Occluder center, nudged slightly left/up from PLANET_ANCHOR -- measured
  // by rendering the occluder disc opaque (bright magenta) and comparing
  // its position against the painted planet's actual body in a screenshot.
  const OCCLUDER_ANCHOR = { x: 0.60, y: 0.585 };

  // Camera distance, in world units. Increasing this zooms the view OUT
  // (same FOV angle, but the frustum is wider at a greater distance),
  // which makes the same orbit geometry appear smaller/more contained
  // within the rendered frame. Must match the camDist used in init()'s
  // camera.position.set — anchorToWorld() relies on the same value to
  // keep the orbit's center locked to PLANET_ANCHOR.
  const CAM_DIST = 13; // was 9 — increased to pull the dust ring in from the frame edges

  let scene, camera, renderer, clock;
  let rings = [];
  let planetOccluder = null;
  let raf = null;
  let running = true;

  // Two painted rings, each with its own tilt -- they are not coplanar
  // in this artwork the way Saturn's real rings are. Earlier passes at
  // measuring these got fooled by nearby noise: a color-threshold scan
  // over the whole ring blob at once landed between the two real angles,
  // and a second attempt confused the galaxy's dust lane (a completely
  // different, stippled art style) for a second ring. -8/-20 came from
  // eyeballing a gridded crop, which was still off in magnitude for both
  // bands. Nailed down properly by tracking each band's actual pixel
  // centerline (a color-matched walk along the band, not a single guess)
  // across its full visible run, converting every sample to this script's
  // own world-space projection, and fitting the tilt as the slope of that
  // line in world space -- which is exactly what tiltDeg represents here.
  // Confirmed by drawing the resulting ellipses over the source photo.
  const RING_BANDS = [
    { tiltDeg: -16, minR: 1.6, maxR: 2.4, arcCount: 65, sparkCount: 280 }, // front, gold ring
    { tiltDeg: -32, minR: 1.5, maxR: 2.2, arcCount: 55, sparkCount: 240 }, // back, white ring
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Convert a 0..1 anchor (in image space) to world-space X/Y at z=0,
  // matching the camera's view frustum at the current aspect ratio.
  function anchorToWorld(anchor, aspect) {
    const camDist = CAM_DIST;
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
    camera.position.set(0, 0, CAM_DIST);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    planetOccluder = buildPlanetOccluder(width / height);
    rings = RING_BANDS.map((band) => buildRing(width / height, band));

    window.addEventListener("resize", onResize);
    if ("ResizeObserver" in window) {
      new ResizeObserver(onResize).observe(mount);
    }

    // This effect should never appear to stop. Previously it paused via
    // IntersectionObserver whenever scrolled out of view -- removed, it
    // now always keeps orbiting. The real risk to "never stops" is the
    // GPU context dropping (mobile memory pressure, tab backgrounding,
    // driver resets) with nothing to notice or recover -- that leaves
    // the loop spinning against a dead context forever. preventDefault()
    // on the loss event is what tells the browser this context is
    // allowed to come back at all.
    renderer.domElement.addEventListener(
      "webglcontextlost",
      (e) => {
        e.preventDefault();
        running = false;
        if (raf !== null) {
          cancelAnimationFrame(raf);
          raf = null;
        }
      },
      false
    );
    renderer.domElement.addEventListener(
      "webglcontextrestored",
      () => {
        onResize();
        running = true;
        animate();
      },
      false
    );

    animate();
  }

  // ---- Swirling accretion ring: short curved arc lines that trace the
  // orbit direction (reads as actual flow/motion, not a static dot-cloud),
  // plus a sparse layer of sparkle particles riding along for texture.
  // Radii are confined to [minR, maxR] instead of one wide sweep, so this
  // can be called once per painted ring band and each call hugs just
  // that ring's own trail instead of smearing across the whole disk. ----
  function buildRing(aspect, { tiltDeg, minR, maxR, arcCount, sparkCount }) {
    const center = anchorToWorld(PLANET_ANCHOR, aspect);
    const tilt = 0.34; // flattens the ring to echo the planet's own rings
    const palette = [PALETTE.gold, PALETTE.red, PALETTE.blue, PALETTE.cream];
    const rSpan = maxR - minR;

    const arcs = [];
    const arcGroup = new THREE.Group();

    for (let i = 0; i < arcCount; i++) {
      const r = minR + Math.pow(Math.random(), 0.55) * rSpan;
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
    arcGroup.rotation.z = (tiltDeg * Math.PI) / 180;
    scene.add(arcGroup);

    // sparse sparkle dust riding on the same orbits, for texture/depth
    const positions = new Float32Array(sparkCount * 3);
    const colors = new Float32Array(sparkCount * 3);
    const orbitRadius = new Float32Array(sparkCount);
    const orbitAngle = new Float32Array(sparkCount);
    const orbitSpeed = new Float32Array(sparkCount);

    for (let i = 0; i < sparkCount; i++) {
      const r = minR + Math.pow(Math.random(), 0.55) * rSpan;
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
    sparks.rotation.z = (tiltDeg * Math.PI) / 180;
    scene.add(sparks);

    return {
      arcGroup,
      arcs,
      sparks,
      tilt,
      sparkData: { orbitRadius, orbitAngle, orbitSpeed },
    };
  }

  // Invisible depth-only occluder over the painted planet's body: a flat
  // disc facing the camera, opaque so it renders (and writes the depth
  // buffer) before the additive/transparent ring arcs and sparkle points,
  // but colorWrite:false so it never actually paints over the artwork.
  // Ring geometry with world Z < 0 (the far side of each arc's tilt) then
  // fails the depth test right where it should be sliding behind the
  // planet; Z > 0 (the near side) still draws normally in front.
  function buildPlanetOccluder(aspect) {
    const center = anchorToWorld(OCCLUDER_ANCHOR, aspect);
    const geo = new THREE.CircleGeometry(PLANET_RADIUS, 48);
    const mat = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(center.x, center.y, 0);
    scene.add(mesh);
    return mesh;
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

    const center = anchorToWorld(PLANET_ANCHOR, camera.aspect);
    if (planetOccluder) {
      const occCenter = anchorToWorld(OCCLUDER_ANCHOR, camera.aspect);
      planetOccluder.position.set(occCenter.x, occCenter.y, 0);
    }
    for (let i = 0; i < rings.length; i++) {
      rings[i].arcGroup.position.set(center.x, center.y, 0);
      rings[i].sparks.position.set(center.x, center.y, 0);
    }
  }

  function animate() {
    if (!running) return;
    raf = requestAnimationFrame(animate);

    const t = clock.getElapsedTime();
    const speed = reduceMotion ? 0 : 1;

    for (let ri = 0; ri < rings.length; ri++) {
      const disk = rings[ri];

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
    }

    renderer.render(scene, camera);
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();