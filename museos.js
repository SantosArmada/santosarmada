/* ================================================================
   MUSEOS — Santos Armada
   An explorable 3D museum building (RedGL2), drag to look around,
   scroll to zoom exactly like the original build. Click the building
   / door to step closer. "MUSEOS" hovers over the top of the scene,
   always visible, framed by an ember/spark particle effect (the same
   technique as the homepage hero image, adapted to trace the title's
   bounding box instead of a photo).
================================================================= */

(function () {
    "use strict";

    // ---------------------------------------------------------------
    // Nav (shared behavior with the rest of the site)
    // ---------------------------------------------------------------
    window.toggleMenu = function () {
        var nav = document.getElementById("nav-links");
        if (nav) nav.classList.toggle("open");
    };

    var sphereCanvas = document.getElementById("museos-sphere-canvas");
    var worldSection = document.getElementById("museosWorld");
    var hintEl = document.getElementById("museosHint");

    if (!sphereCanvas || !worldSection) return;

    // =================================================================
    // SKYBOX — built from your Museo Santos Armada photography.
    // px/nx: left & right slices of the courtyard panorama (museo-3)
    // py:    the coffered ceiling + chandelier (museo-1, top crop)
    // ny:    the inlaid marble floor medallion (museo-1, bottom crop)
    // pz:    the courtyard-through-the-columns "portal" shot (museo-1)
    // nz:    the arched front door, from the hall panorama (museo-3)
    // =================================================================
    var skyboxUrls = [
        "images/museos-sky/px.jpg",
        "images/museos-sky/nx.jpg",
        "images/museos-sky/py.jpg",
        "images/museos-sky/ny.jpg",
        "images/museos-sky/pz.jpg",
        "images/museos-sky/nz.jpg"
    ];

    // Procedural gold glyph texture (replaces the borrowed demo's
    // hud_001/hud_003 pngs — small decorative detail, not "the building",
    // so this stays generated/on-brand rather than a stock asset).
    // Doubled resolution + a hot white core so it reads crisp and actually
    // crosses the bloom threshold instead of looking like a soft smudge.
    function makeGlyphTexture() {
        var size = 512;
        var c = document.createElement("canvas");
        c.width = c.height = size;
        var ctx = c.getContext("2d");
        var cx = size / 2;
        var cy = size / 2;

        ctx.strokeStyle = "rgba(255,238,205,0.95)";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.36, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(255,238,205,0.6)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.28, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(255,238,205,0.85)";
        ctx.lineWidth = 2;
        for (var i = 0; i < 24; i++) {
            var a = (i / 24) * Math.PI * 2;
            var r1 = size * 0.4;
            var r2 = size * 0.445;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
            ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
            ctx.stroke();
        }

        var glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.24);
        glow.addColorStop(0, "rgba(255,255,255,1)");
        glow.addColorStop(0.35, "rgba(255,238,205,0.95)");
        glow.addColorStop(1, "rgba(255,222,163,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.24, 0, Math.PI * 2);
        ctx.fill();

        return c.toDataURL();
    }

    var glyphUrl = makeGlyphTexture();

    // Fixed 3D positions for the 4 wayfinding hotspots, spread around the
    // constellation at a radius just beyond it (radius ~9, vs the glyph
    // cloud's ~5–6) so they read as distinct points of interest.
    var HOTSPOT_DEFS = [
        { x: 9 * Math.cos(Math.PI / 4), y: 0.8, z: 9 * Math.sin(Math.PI / 4) },
        { x: 9 * Math.cos((3 * Math.PI) / 4), y: -0.6, z: 9 * Math.sin((3 * Math.PI) / 4) },
        { x: 9 * Math.cos((5 * Math.PI) / 4), y: 1.2, z: 9 * Math.sin((5 * Math.PI) / 4) },
        { x: 9 * Math.cos((7 * Math.PI) / 4), y: -0.9, z: 9 * Math.sin((7 * Math.PI) / 4) }
    ];

    // =================================================================
    // RedGL interactive museum world
    // Controller values below are byte-identical to the original build
    // (pan -25 / tilt -25 / distance 15 / speedDistance 0.5) — untouched,
    // per request, so drag-rotate and scroll-zoom feel exactly the same.
    // =================================================================
    var tController; // referenced by the click-to-step-closer handler below

    RedGL(sphereCanvas, function (v) {
        if (!v) {
            console.warn("Museos: WebGL initialization failed.");
            return;
        }

        var tWorld = (this["world"] = RedWorld());
        var tScene = RedScene(this);
        tController = RedObitController(this);
        tController.pan = -25;
        tController.tilt = -25;
        tController.distance = 15;
        tController.speedDistance = 0.5;

        var tRenderer = RedRenderer();
        var tView = RedView(this, tScene, tController);
        tWorld.addView(tView);

        tScene.skyBox = RedSkyBox(this, skyboxUrls);

        var spinGroups = []; // mainRing/subRing pushed in below — kept
        // separate from tScene.children so the wayfinding hotspots (added
        // later) don't get caught in the same spin as the constellation.
        tRenderer.start(this, function () {
            var i = spinGroups.length;
            while (i--) {
                spinGroups[i].rotationX += 0.015;
                spinGroups[i].rotationY += 0.02;
                spinGroups[i].rotationZ += 0.015;
            }
        });

        var bloom = RedPostEffect_Bloom(this);
        // Defaults (threshold 75 / bloomStrength 1.2 / exposure 1) were
        // tuned for a dim castle interior, and blew out our full-daylight
        // courtyard. The skybox photos are already graded darker now, so
        // we can afford to bring the threshold back down closer to the
        // original — enough for the glyph sphere and hotspots to bloom
        // crisp and bright without the environment washing out again.
        bloom.threshold = 150;
        bloom.bloomStrength = 1.1;
        bloom.exposure = 0.98;
        bloom.blur = 18;
        tView["postEffectManager"].addEffect(bloom);

        // Original demo set tMaterial.alpha = 0.7 and left tMaterial2 at
        // its default (effectively full brightness) — my first pass dimmed
        // the secondary sprite layer to 0.45, which is a lot of the
        // structure's visual density going dull. Bringing both back up
        // near the original's brightness distribution.
        var glyphMaterial = RedBitmapMaterial(this, RedBitmapTexture(this, glyphUrl));
        glyphMaterial.alpha = 0.8;
        var glyphMaterial2 = RedBitmapMaterial(this, RedBitmapTexture(this, glyphUrl));
        glyphMaterial2.alpha = 0.9;

        var makeConstellation = function (redGL, material, material2) {
            var rootMesh = RedMesh(redGL);
            var tGeo = RedSphere(redGL, 1, 16, 8, 8);
            var positionList = [];
            var len = tGeo.interleaveBuffer.data.length / 8;
            var i;
            for (i = 0; i < len; i++) {
                positionList.push([
                    tGeo.interleaveBuffer.data[i * 8],
                    tGeo.interleaveBuffer.data[i * 8 + 1],
                    tGeo.interleaveBuffer.data[i * 8 + 2]
                ]);
            }
            var j = positionList.length - 1;
            while (j--) {
                var tMesh = RedMesh(redGL, RedPlane(redGL), material);
                tMesh.scaleX = tMesh.scaleY =
                    Math.sqrt(positionList[j][0] * positionList[j][0] + positionList[j][2] * positionList[j][2]) * 2.7 +
                    Math.random() * 0.2;
                tMesh.useBlendMode = true;
                tMesh.blendDst = redGL.gl.ONE;
                tMesh.useCullFace = false;
                rootMesh.addChild(tMesh);
                tMesh.x = positionList[j][0] * 5;
                tMesh.y = positionList[j][1] * 5;
                tMesh.z = positionList[j][2] * 5;
                tMesh.lookAt(0, 0, 0);
                tMesh.rotationZ = Math.random() * 360;

                var tMesh2 = RedMesh(redGL, RedPlane(redGL), material2);
                tMesh2.scaleX = tMesh2.scaleY = 0.5;
                tMesh2.z = Math.random();
                tMesh2.useCullFace = false;
                tMesh2.useBlendMode = true;
                tMesh2.blendDst = redGL.gl.ONE;
                tMesh.addChild(tMesh2);

                var scaleFactor = Math.random() - 0.5 + 5.5;
                var basePos = [positionList[j][0], positionList[j][1], positionList[j][2]];
                TweenMax.to(tMesh, Math.random() * 3 + 1, {
                    x: basePos[0] * scaleFactor,
                    y: basePos[1] * scaleFactor,
                    z: basePos[2] * scaleFactor,
                    rotationZ: Math.random() * 360,
                    yoyo: true,
                    repeat: -1,
                    ease: Quint.easeInOut
                });
                var tScale = Math.random() * 0.5 - 0.25 + 0.5;
                TweenMax.to(tMesh2, Math.random() * 1 + 1, {
                    scaleX: tScale,
                    scaleY: tScale,
                    z: Math.random(),
                    yoyo: true,
                    repeat: -1,
                    ease: Quint.easeInOut
                });
            }
            return rootMesh;
        };

        var mainRing = makeConstellation(this, glyphMaterial, glyphMaterial2);
        var subRing = makeConstellation(this, glyphMaterial, glyphMaterial2);
        var subRingTargetScale = 0.72;
        subRing.rotationX = subRing.rotationY = subRing.rotationZ = Math.random() * 360;

        tScene.addChild(mainRing);
        tScene.addChild(subRing);
        spinGroups.push(mainRing, subRing);

        // Entrance: the sphere starts noticeably smaller than its resting
        // size and blooms up to full scale on load, instead of appearing
        // at full size the instant the page renders.
        var ENTRANCE_SCALE = 0.4;
        mainRing.scaleX = mainRing.scaleY = mainRing.scaleZ = ENTRANCE_SCALE;
        subRing.scaleX = subRing.scaleY = subRing.scaleZ = ENTRANCE_SCALE * subRingTargetScale;
        TweenMax.to(mainRing, 2.2, {
            scaleX: 1, scaleY: 1, scaleZ: 1,
            ease: Quint.easeOut
        });
        TweenMax.to(subRing, 2.2, {
            scaleX: subRingTargetScale, scaleY: subRingTargetScale, scaleZ: subRingTargetScale,
            ease: Quint.easeOut
        });

        // -------------------------------------------------------------
        // Wayfinding hotspots — 4 bright glowing beacons at fixed points
        // in the museum, each pointing deeper into the site. Real 3D
        // objects (so they sit correctly in the space as you orbit/zoom),
        // projected to screen coordinates every frame to drive the
        // matching HTML buttons that handle the actual click + label.
        // -------------------------------------------------------------
        var redGLInstance = this;
        var hotspotMaterial = RedColorMaterial(redGLInstance, "#fff6df", 1);
        var hotspots = HOTSPOT_DEFS.map(function (def, idx) {
            var hMesh = RedMesh(redGLInstance, RedPlane(redGLInstance), hotspotMaterial);
            hMesh.useBlendMode = true;
            hMesh.blendDst = redGLInstance.gl.ONE;
            hMesh.useCullFace = false;
            hMesh.scaleX = hMesh.scaleY = 0.45;
            hMesh.x = def.x; hMesh.y = def.y; hMesh.z = def.z;
            hMesh.lookAt(0, 0, 0);
            tScene.addChild(hMesh);
            TweenMax.to(hMesh, 1.4 + idx * 0.15, {
                scaleX: 0.62, scaleY: 0.62,
                yoyo: true, repeat: -1, ease: Quint.easeInOut
            });
            return { mesh: hMesh, el: document.getElementById("museosHotspot-" + idx) };
        });

        startHotspotProjection(tController, hotspots, sphereCanvas);
    });

    // World doesn't need to be running for the title to spark — start
    // it independently as soon as the DOM is ready.
    startTitleSparks();

    // =================================================================
    // Click the building / door to step closer.
    // Distinguishes a click from a drag (RedObitController owns drag-
    // rotate on the same canvas), then nudges the controller's own
    // "distance" property — its built-in easing handles the smooth
    // walk-in, same math the original zoom already uses.
    // =================================================================
    (function setupDoorClick() {
        var downX = 0, downY = 0, downT = 0, dragged = false;
        var steppedIn = false;
        var FAR = 15; // matches the original default distance
        var NEAR = 5; // "at the door"

        sphereCanvas.addEventListener("mousedown", function (e) {
            downX = e.clientX; downY = e.clientY; downT = performance.now();
            dragged = false;
        });
        sphereCanvas.addEventListener("mousemove", function (e) {
            if (downT && (Math.abs(e.clientX - downX) > 6 || Math.abs(e.clientY - downY) > 6)) {
                dragged = true;
            }
        });
        sphereCanvas.addEventListener("mouseup", function (e) {
            var elapsed = performance.now() - downT;
            downT = 0;
            if (!dragged && elapsed < 500 && tController) {
                steppedIn = !steppedIn;
                tController.distance = steppedIn ? NEAR : FAR;
                if (hintEl) hintEl.classList.add("is-faded");
            }
        });
    })();

    // =================================================================
    // Hotspot navigation — click a glowing beacon, jump to that page.
    // Positioning happens continuously in startHotspotProjection(); this
    // just wires the actual click behavior and the scroll cue.
    // =================================================================
    (function setupHotspotClicksAndScrollCue() {
        var buttons = document.querySelectorAll(".museos-hotspot");
        for (var i = 0; i < buttons.length; i++) {
            (function (btn) {
                btn.addEventListener("click", function () {
                    var href = btn.getAttribute("data-href");
                    if (href) window.location.href = href;
                });
            })(buttons[i]);
        }

        var scrollCue = document.getElementById("museosScrollCue");
        var missionSection = document.getElementById("museosMission");
        if (scrollCue && missionSection) {
            scrollCue.addEventListener("click", function () {
                missionSection.scrollIntoView({ behavior: "smooth" });
            });
        }
    })();

    // =================================================================
    // Project each hotspot's fixed 3D position to screen coordinates
    // every frame (manual view/perspective projection using the orbit
    // controller's own camera), so the HTML buttons stay glued to the
    // building as the user drags/zooms. Hidden once behind the camera,
    // off-screen, or after scrolling past the hero.
    // =================================================================
    function startHotspotProjection(controller, hotspots, canvasEl) {
        var camera = controller.camera;

        function project(worldX, worldY, worldZ) {
            var m = camera.matrix; // view matrix (gl-matrix mat4, column-major)
            var vx = m[0] * worldX + m[4] * worldY + m[8] * worldZ + m[12];
            var vy = m[1] * worldX + m[5] * worldY + m[9] * worldZ + m[13];
            var vz = m[2] * worldX + m[6] * worldY + m[10] * worldZ + m[14];

            var fovRad = (camera.fov || 60) * Math.PI / 180;
            var w = canvasEl.clientWidth || window.innerWidth;
            var h = canvasEl.clientHeight || window.innerHeight;
            var f = 1 / Math.tan(fovRad / 2);

            var clipX = (f / (w / h)) * vx;
            var clipY = f * vy;
            var clipW = -vz; // points in front of the camera have vz < 0

            if (clipW <= 0.001) return null;

            var ndcX = clipX / clipW;
            var ndcY = clipY / clipW;
            if (Math.abs(ndcX) > 1.15 || Math.abs(ndcY) > 1.15) return null;

            return {
                x: (ndcX * 0.5 + 0.5) * w,
                y: (1 - (ndcY * 0.5 + 0.5)) * h
            };
        }

        function frame() {
            requestAnimationFrame(frame);
            var pastHero = window.scrollY > window.innerHeight * 0.6;
            for (var i = 0; i < hotspots.length; i++) {
                var h = hotspots[i];
                if (!h.el) continue;
                var p = pastHero ? null : project(h.mesh.x, h.mesh.y, h.mesh.z);
                if (!p) {
                    h.el.classList.remove("is-visible");
                    continue;
                }
                h.el.style.left = p.x + "px";
                h.el.style.top = p.y + "px";
                h.el.classList.add("is-visible");
            }
        }
        requestAnimationFrame(frame);
    }

    // =================================================================
    // Ember/spark particle effect for the "MUSEOS" title — the same
    // Canvas2D technique used on the homepage hero image, adapted to
    // trace the title text's bounding box instead of a photo. Sparks
    // spawn along the perimeter of the title and drift outward, giving
    // the persistent top band the same warm, alive feel as the sphere.
    // =================================================================
    function startTitleSparks() {
        var wrap = document.getElementById("museosTitleWrap");
        var canvas = document.getElementById("museosTitleSparks");
        if (!wrap || !canvas) return;

        var ctx = canvas.getContext("2d");

        var PAD = 28;          // px the canvas extends past the title on each side
        var AMOUNT = 90;       // spark count
        var DUR_MIN = 0.9;
        var DUR_MAX = 1.8;

        var w = 0;
        var h = 0;
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var running = true;
        var particles = [];

        function rand(a, b) {
            return a + Math.random() * (b - a);
        }

        function smoothstep(edge0, edge1, x) {
            var t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
            return t * t * (3 - 2 * t);
        }

        function easeOutCubic(k) {
            var d = k - 1;
            return d * d * d + 1;
        }

        function lerpColor(a, b, t) {
            t = Math.min(Math.max(t, 0), 1);
            return [
                Math.round(a[0] + (b[0] - a[0]) * t),
                Math.round(a[1] + (b[1] - a[1]) * t),
                Math.round(a[2] + (b[2] - a[2]) * t)
            ];
        }

        // Picks a random point along the title's border rectangle and the
        // outward-facing normal at that point.
        function spawnAt(p) {
            var perim = 2 * (w + h);
            var t = Math.random() * perim;
            var x, y, nx, ny;
            if (t < w) {
                x = t; y = 0; nx = 0; ny = -1;
            } else if ((t -= w) < h) {
                x = w; y = t; nx = 1; ny = 0;
            } else if ((t -= h) < w) {
                x = w - t; y = h; nx = 0; ny = 1;
            } else {
                t -= w;
                x = 0; y = h - t; nx = -1; ny = 0;
            }
            var jitter = rand(-3, 3);
            if (nx === 0) x += jitter; else y += jitter;

            p.x = x + PAD;
            p.y = y + PAD;
            p.nx = nx;
            p.ny = ny;
            p.duration = rand(DUR_MIN, DUR_MAX);
            p.delay = rand(0, 0.6);
            p.distance = rand(14, 34);
            p.size = Math.pow(Math.random(), 3) * 3.2 + 1.4;
            p.age = 0;
            p.px = NaN;
            p.py = NaN;
        }

        function initParticles() {
            particles.length = 0;
            for (var i = 0; i < AMOUNT; i++) {
                var p = {};
                spawnAt(p);
                // Stagger starting phase so sparks don't all pulse in sync.
                p.age = Math.random() * (p.duration + p.delay);
                particles.push(p);
            }
        }

        function resize() {
            var rect = wrap.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            if (!w || !h) return;

            var cw = w + PAD * 2;
            var ch = h + PAD * 2;

            canvas.style.width = cw + "px";
            canvas.style.height = ch + "px";
            canvas.style.left = -PAD + "px";
            canvas.style.top = -PAD + "px";

            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(cw * dpr);
            canvas.height = Math.round(ch * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            initParticles();
        }

        var lastT = performance.now();

        function frame(now) {
            if (!running) return;
            var dt = Math.min((now - lastT) / 1000, 0.05);
            lastT = now;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "lighter";

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.age += dt;
                if (p.age < p.delay) continue;

                var local = p.age - p.delay;
                if (local > p.duration) {
                    spawnAt(p);
                    continue;
                }

                var k = local / p.duration;
                var dist = easeOutCubic(k) * p.distance;
                var x = p.x + p.nx * dist;
                var y = p.y + p.ny * dist;

                var fade = smoothstep(0, 0.05, k) * (1 - smoothstep(0.95, 1, k));
                if (fade <= 0.01) continue;

                var flash = smoothstep(0.78, 0.85, k) - smoothstep(0.85, 0.95, k);
                var cool = smoothstep(0.25, 0.75, k);

                // hot core shifts peachy -> gold over the spark's life
                var core = lerpColor([255, 190, 120], [255, 205, 70], smoothstep(0, 0.75, k));
                // the rim of each point stays a warm golden-orange
                var edge = [255, 140, 30];

                core = lerpColor(core, [60, 25, 8], cool);
                edge = lerpColor(edge, [60, 25, 8], cool);

                if (flash > 0) {
                    core = lerpColor(core, [255, 250, 200], flash);
                    edge = lerpColor(edge, [255, 250, 200], flash * 0.6);
                }

                if (!Number.isNaN(p.px)) {
                    var tw = Math.max(p.size * 0.9, 0.8);
                    var trail = ctx.createLinearGradient(p.px, p.py, x, y);
                    trail.addColorStop(0, "rgba(" + core[0] + "," + core[1] + "," + core[2] + ",0)");
                    trail.addColorStop(1, "rgba(" + core[0] + "," + core[1] + "," + core[2] + "," + (fade * 0.85) + ")");
                    ctx.strokeStyle = trail;
                    ctx.lineWidth = tw;
                    ctx.lineCap = "round";
                    ctx.beginPath();
                    ctx.moveTo(p.px, p.py);
                    ctx.lineTo(x, y);
                    ctx.stroke();
                }
                p.px = x;
                p.py = y;

                var r = Math.max(p.size * 1.4, 1.1);
                var grad = ctx.createRadialGradient(x, y, 0, x, y, r);
                grad.addColorStop(0, "rgba(" + core[0] + "," + core[1] + "," + core[2] + "," + fade + ")");
                grad.addColorStop(0.45, "rgba(" + core[0] + "," + core[1] + "," + core[2] + "," + fade + ")");
                grad.addColorStop(0.75, "rgba(" + edge[0] + "," + edge[1] + "," + edge[2] + "," + (fade * 0.55) + ")");
                grad.addColorStop(1, "rgba(" + edge[0] + "," + edge[1] + "," + edge[2] + ",0)");
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();

                var hl = Math.max(r * 0.3, 0.55);
                ctx.fillStyle = "rgba(255,245,215," + (fade * (0.7 + flash * 0.3)) + ")";
                ctx.beginPath();
                ctx.arc(x, y, hl, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalCompositeOperation = "source-over";
            requestAnimationFrame(frame);
        }

        window.addEventListener("resize", resize);
        // The title is SVG text, not an <img> — it's laid out and
        // measurable synchronously, so no need to wait for a load event.
        resize();

        // Pause the loop when the hero scrolls out of view.
        if ("IntersectionObserver" in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    running = entry.isIntersecting;
                    if (running) {
                        lastT = performance.now();
                        requestAnimationFrame(frame);
                    }
                });
            }, { threshold: 0 });
            io.observe(wrap);
        } else {
            requestAnimationFrame(frame);
        }
    }
})();
