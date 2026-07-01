import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/loaders/FontLoader.js';

(function () {
    const container = document.getElementById('three-container');
    if (!container) return;

    // ── Scene ────────────────────────────────────────────────────
    const scene    = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 2000);

    function resize() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Load font and build geometry ─────────────────────────────
    const loader = new FontLoader();
    loader.load(
        'https://cdn.jsdelivr.net/npm/three@0.170.0/examples/fonts/droid/droid_sans_bold.typeface.json',
        function (font) {

            const textGeo = new TextGeometry('SANTOS ARMADA', {
                font:           font,
                size:           8,
                depth:          0.5,
                bevelEnabled:   true,
                bevelSize:      0.15,
                bevelThickness: 0.1,
            });

            // Center, then measure for camera fit
            textGeo.computeBoundingBox();
            textGeo.center();
            const textW   = textGeo.boundingBox.max.x - textGeo.boundingBox.min.x;
            const fovRad  = THREE.MathUtils.degToRad(camera.fov / 2);
            const aspect  = container.clientWidth / container.clientHeight;
            camera.position.z = (textW / 2) / (Math.tan(fovRad) * aspect) / 0.82;
            camera.updateProjectionMatrix();

            // Non-indexed: every 3 consecutive vertices = 1 independent face
            const geo  = textGeo.toNonIndexed();
            const N    = geo.attributes.position.count;  // total vertices
            const F    = N / 3;                           // total faces

            // Copy target (assembled) positions
            const target  = new Float32Array(geo.attributes.position.array);

            // Scatter and delay arrays (per face)
            const scatter = new Float32Array(N * 3);
            const delay   = new Float32Array(F);

            function buildScatter() {
                for (let f = 0; f < F; f++) {
                    const b  = f * 9;
                    // Face centroid
                    const cx = (target[b]   + target[b+3] + target[b+6]) / 3;
                    const cy = (target[b+1] + target[b+4] + target[b+7]) / 3;
                    const d  = Math.sqrt(cx*cx + cy*cy) + 0.1;
                    // Scatter outward from centre with randomness
                    const sx = (cx/d) * (15 + Math.random()*60) + (Math.random()-0.5)*30;
                    const sy = (cy/d) * (15 + Math.random()*60) + (Math.random()-0.5)*30;
                    const sz = (Math.random()-0.5) * 50;
                    for (let v = 0; v < 3; v++) {
                        scatter[b+v*3]   = target[b+v*3]   + sx;
                        scatter[b+v*3+1] = target[b+v*3+1] + sy;
                        scatter[b+v*3+2] = target[b+v*3+2] + sz;
                    }
                    // Stagger: faces farther from centre arrive later
                    delay[f] = (d / textW) * 0.5 + Math.random() * 0.4;
                }
            }
            buildScatter();

            // Start at scatter positions
            const cur = new Float32Array(scatter);
            geo.setAttribute('position', new THREE.BufferAttribute(cur, 3));

            const mat = new THREE.MeshBasicMaterial({
                color: 0xffb347,        // bright amber
                side:  THREE.DoubleSide,
            });
            scene.add(new THREE.Mesh(geo, mat));

            // ── Animation phases ──────────────────────────────────
            const GATHER = 3.0, HOLD = 2.5, SCAT = 2.0, PAUSE = 0.5;
            let phase = 'gather', t = 0;

            function ease(x) {
                return x < 0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2, 3)/2;
            }

            const clock = new THREE.Clock();

            (function animate() {
                requestAnimationFrame(animate);
                t += clock.getDelta();
                const pos = geo.attributes.position.array;

                if (phase === 'gather') {
                    for (let f = 0; f < F; f++) {
                        const b = f * 9;
                        const p = ease(Math.min(Math.max(0, t - delay[f]) / GATHER, 1));
                        for (let v = 0; v < 3; v++) {
                            const i = b + v*3;
                            pos[i]   = scatter[i]   + (target[i]   - scatter[i])   * p;
                            pos[i+1] = scatter[i+1] + (target[i+1] - scatter[i+1]) * p;
                            pos[i+2] = scatter[i+2] + (target[i+2] - scatter[i+2]) * p;
                        }
                    }
                    if (t >= GATHER + 0.8) { phase = 'hold'; t = 0; }

                } else if (phase === 'hold') {
                    if (t >= HOLD) { phase = 'scatter'; t = 0; buildScatter(); }

                } else if (phase === 'scatter') {
                    for (let f = 0; f < F; f++) {
                        const b = f * 9;
                        const p = ease(Math.min(Math.max(0, t - delay[f]*0.3) / SCAT, 1));
                        for (let v = 0; v < 3; v++) {
                            const i = b + v*3;
                            pos[i]   = target[i]   + (scatter[i]   - target[i])   * p;
                            pos[i+1] = target[i+1] + (scatter[i+1] - target[i+1]) * p;
                            pos[i+2] = target[i+2] + (scatter[i+2] - target[i+2]) * p;
                        }
                    }
                    if (t >= SCAT + 0.5) { phase = 'pause'; t = 0; }

                } else {
                    if (t >= PAUSE) { phase = 'gather'; t = 0; }
                }

                geo.attributes.position.needsUpdate = true;
                renderer.render(scene, camera);
            })();
        }
    );
})();