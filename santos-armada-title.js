import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

(function () {
    const container = document.getElementById('three-container');
    if (!container) return;

    // ── 1. Sample text pixels from an offscreen canvas ────────────
    const CW = 900, CH = 160;
    const offscreen = document.createElement('canvas');
    offscreen.width  = CW;
    offscreen.height = CH;
    const ctx2d = offscreen.getContext('2d');
    ctx2d.fillStyle    = '#fff';
    ctx2d.font         = 'bold 96px "Arial Black", Arial, sans-serif';
    ctx2d.textAlign    = 'center';
    ctx2d.textBaseline = 'middle';
    ctx2d.fillText('SANTOS ARMADA', CW / 2, CH / 2);

    const { data } = ctx2d.getImageData(0, 0, CW, CH);
    const STEP = 5;
    const textPts = [];
    for (let y = 0; y < CH; y += STEP) {
        for (let x = 0; x < CW; x += STEP) {
            if (data[(y * CW + x) * 4 + 3] > 128) {
                textPts.push(x - CW / 2, CH / 2 - y, 0);
            }
        }
    }
    const N = textPts.length / 3;

    // ── 2. Three.js scene ─────────────────────────────────────────
    const scene    = new THREE.Scene();
    const camera   = new THREE.OrthographicCamera(
        -CW / 2, CW / 2, CH / 2, -CH / 2, 0.1, 1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    function resize() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        renderer.setSize(w, h);
        // Keep text filling the width regardless of container size
        const vh = CW / (w / h);
        camera.top    =  vh / 2;
        camera.bottom = -vh / 2;
        camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    // ── 3. Particle buffers ───────────────────────────────────────
    const posArr     = new Float32Array(N * 3);
    const scatterArr = new Float32Array(N * 3);
    const targetArr  = new Float32Array(textPts);
    const delayArr   = new Float32Array(N);

    function resetScatter() {
        for (let i = 0; i < N; i++) {
            scatterArr[i*3]   = (Math.random() - 0.5) * CW * 1.6;
            scatterArr[i*3+1] = (Math.random() - 0.5) * CH * 4;
            scatterArr[i*3+2] = (Math.random() - 0.5) * 80;
            delayArr[i]       = Math.random() * 0.5;
        }
    }
    resetScatter();
    posArr.set(scatterArr); // start scattered

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));

    const mat = new THREE.PointsMaterial({
        color:           0xffb347,   // bright amber
        size:            2.5,        // pixels (sizeAttenuation off)
        sizeAttenuation: false,
        transparent:     true,
        opacity:         0.95,
    });

    scene.add(new THREE.Points(geo, mat));

    // ── 4. Animation phases ───────────────────────────────────────
    // gather → hold → scatter → pause → gather …
    const GATHER_DUR  = 2.8;
    const HOLD_DUR    = 2.5;
    const SCATTER_DUR = 1.8;
    const PAUSE_DUR   = 0.4;

    let phase = 'gather', phaseT = 0;

    function ease(t) {
        // cubic ease-in-out
        return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
    }

    const clock = new THREE.Clock();

    (function animate() {
        requestAnimationFrame(animate);
        phaseT += clock.getDelta();

        const pos = geo.attributes.position.array;

        if (phase === 'gather') {
            for (let i = 0; i < N; i++) {
                const t = ease(Math.min(Math.max(0, phaseT - delayArr[i]) / GATHER_DUR, 1));
                pos[i*3]   = scatterArr[i*3]   + (targetArr[i*3]   - scatterArr[i*3])   * t;
                pos[i*3+1] = scatterArr[i*3+1] + (targetArr[i*3+1] - scatterArr[i*3+1]) * t;
                pos[i*3+2] = scatterArr[i*3+2] + (targetArr[i*3+2] - scatterArr[i*3+2]) * t;
            }
            if (phaseT >= GATHER_DUR + 0.6) { phase = 'hold'; phaseT = 0; }

        } else if (phase === 'hold') {
            if (phaseT >= HOLD_DUR) { phase = 'scatter'; phaseT = 0; resetScatter(); }

        } else if (phase === 'scatter') {
            for (let i = 0; i < N; i++) {
                const t = ease(Math.min(Math.max(0, phaseT - delayArr[i] * 0.4) / SCATTER_DUR, 1));
                pos[i*3]   = targetArr[i*3]   + (scatterArr[i*3]   - targetArr[i*3])   * t;
                pos[i*3+1] = targetArr[i*3+1] + (scatterArr[i*3+1] - targetArr[i*3+1]) * t;
                pos[i*3+2] = targetArr[i*3+2] + (scatterArr[i*3+2] - targetArr[i*3+2]) * t;
            }
            if (phaseT >= SCATTER_DUR + 0.6) { phase = 'pause'; phaseT = 0; }

        } else if (phase === 'pause') {
            if (phaseT >= PAUSE_DUR) { phase = 'gather'; phaseT = 0; }
        }

        geo.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
    })();
})();