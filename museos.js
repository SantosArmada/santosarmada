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
        "Images/museos-sky/px.jpg",
        "Images/museos-sky/nx.jpg",
        "Images/museos-sky/py.jpg",
        "Images/museos-sky/ny.jpg",
        "Images/museos-sky/pz.jpg",
        "Images/museos-sky/nz.jpg"
    ];

    // Procedural sci-fi "HUD ring" texture — recreates the broken-ring,
    // tick-mark scale, and dashed-arc look of the reference build's
    // hud_001.png (periwinkle) / hud_003.png (peach) sprites as an
    // on-canvas drawing, stroke-for-stroke rather than pixel-for-pixel,
    // so the sphere has no dependency on the external demo site those
    // pngs are hosted on. Same two-tone color scheme as the reference.
    function makeHudRingTexture(rgb) {
        var size = 1024;
        var c = document.createElement("canvas");
        c.width = c.height = size;
        var ctx = c.getContext("2d");
        var cx = size / 2;
        var cy = size / 2;

        function ring(alpha, width, r, startDeg, endDeg) {
            ctx.strokeStyle = "rgba(" + rgb + "," + alpha + ")";
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.arc(cx, cy, r, (startDeg * Math.PI) / 180, (endDeg * Math.PI) / 180);
            ctx.stroke();
        }

        // Thick outer band, broken into four arcs with small gaps — the
        // reference sprite's "target lock" ring.
        [[-88, -4], [4, 86], [94, 176], [184, 266]].forEach(function (seg) {
            ring(0.85, size * 0.085, size * 0.335, seg[0], seg[1]);
        });

        // Radial tick-mark scale along one arc, like a ruler.
        ctx.strokeStyle = "rgba(" + rgb + ",0.9)";
        ctx.lineWidth = size * 0.006;
        for (var a = 168; a <= 322; a += 4) {
            var rad = (a * Math.PI) / 180;
            var r1 = size * 0.3, r2 = size * 0.345;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(rad) * r1, cy + Math.sin(rad) * r1);
            ctx.lineTo(cx + Math.cos(rad) * r2, cy + Math.sin(rad) * r2);
            ctx.stroke();
        }

        // Segmented dashed mid ring.
        ctx.setLineDash([size * 0.022, size * 0.016]);
        ring(0.6, size * 0.012, size * 0.245, -70, 205);
        ctx.setLineDash([]);

        // Thin inner rings.
        ring(0.9, size * 0.01, size * 0.185, 0, 360);
        ring(0.45, size * 0.006, size * 0.145, 0, 360);

        // Small corner brackets at the outer gaps, like a reticle.
        ctx.strokeStyle = "rgba(" + rgb + ",0.8)";
        ctx.lineWidth = size * 0.006;
        [-88, 4, 86, 94, 176, 184, 266, -4].forEach(function (deg) {
            var rad = (deg * Math.PI) / 180;
            var r1 = size * 0.3, r2 = size * 0.38;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(rad) * r1, cy + Math.sin(rad) * r1);
            ctx.lineTo(cx + Math.cos(rad) * r2, cy + Math.sin(rad) * r2);
            ctx.stroke();
        });

        // Hot core so each sprite still catches the bloom pass.
        var glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.1);
        glow.addColorStop(0, "rgba(255,255,255,0.9)");
        glow.addColorStop(0.5, "rgba(" + rgb + ",0.6)");
        glow.addColorStop(1, "rgba(" + rgb + ",0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.1, 0, Math.PI * 2);
        ctx.fill();

        return c.toDataURL();
    }

    // hud_003 (large background ring, peach) / hud_001 (small accent
    // ring, periwinkle) — same two colors as the reference build.
    var hudRingUrlPeach = makeHudRingTexture("243,177,138");
    var hudRingUrlBlue = makeHudRingTexture("133,142,245");

    // Sphere sizing: it's "born" at 75% of its full expanded size and
    // rests there, then clicking the building/door (setupDoorClick, below)
    // grows it to full size in step with the camera's zoom-in. mainRing
    // and subRing are handed off here once the RedGL world exists so that
    // click handler — defined outside the RedGL callback — can reach them.
    var SUB_RING_SCALE = 0.72; // subRing's scale relative to mainRing at full size
    var BORN_SCALE = 0.75; // resting size, as a fraction of full size
    var sphereRings = {};

    // Fixed 3D positions for the 4 wayfinding hotspots, spread around the
    // constellation at a radius just beyond it (radius ~9, vs the ring
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

    // Hoisted so the visibility-driven pause below (setupWorldVisibilityPause)
    // can stop/restart the whole render+bloom loop from outside this callback.
    var tRenderer, worldRedGL, spinTick;

    RedGL(sphereCanvas, function (v) {
        if (!v) {
            console.warn("Museos: WebGL initialization failed.");
            return;
        }

        var tWorld = (this["world"] = RedWorld());
        var tScene = RedScene(this);
        tController = RedObitController(this);
        // Startup framing chosen by hand (dragged live, values read out
        // of the console). pan 800.9 === 80.9 normalized (mod 360) —
        // left as the raw dragged value since RedObitController
        // accumulates pan rather than wrapping it.
        tController.pan = 800.9;
        tController.tilt = 5.4;
        tController.distance = 15;
        tController.speedDistance = 0.5;

        tRenderer = RedRenderer();
        worldRedGL = this;
        var tView = RedView(this, tScene, tController);
        tWorld.addView(tView);

        tScene.skyBox = RedSkyBox(this, skyboxUrls);

        var spinGroups = []; // mainRing/subRing pushed in below — kept
        // separate from tScene.children so the wayfinding hotspots (added
        // later) don't get caught in the same spin as the constellation.
        // Slowed roughly in half from the original (0.015/0.02/0.015) —
        // the constellation was spinning fast enough on load to feel
        // more like a carousel than an ambient, exploreable backdrop.
        spinTick = function () {
            var i = spinGroups.length;
            while (i--) {
                spinGroups[i].rotationX += 0.007;
                spinGroups[i].rotationY += 0.009;
                spinGroups[i].rotationZ += 0.007;
            }
        };
        tRenderer.start(this, spinTick);

        var bloom = RedPostEffect_Bloom(this);
        // Defaults (threshold 75 / bloomStrength 1.2 / exposure 1) were
        // tuned for a dim castle interior, and blew out our full-daylight
        // courtyard. The skybox photos are already graded darker now, so
        // we can afford to bring the threshold back down closer to the
        // original — enough for the ring sphere and hotspots to bloom
        // crisp and bright without the environment washing out again.
        bloom.threshold = 150;
        bloom.bloomStrength = 1.1;
        bloom.exposure = 0.98;
        // Lower blur radius (was 18) keeps the bloom halo tight around each
        // ring sprite instead of smearing it into a soft, low-detail glow.
        bloom.blur = 12;
        tView["postEffectManager"].addEffect(bloom);

        // Matches the reference build's own material setup: large
        // background ring (peach, alpha 0.7) + small accent ring
        // (periwinkle, full alpha).
        var ringMaterialPeach = RedBitmapMaterial(this, RedBitmapTexture(this, hudRingUrlPeach));
        ringMaterialPeach.alpha = 0.7;
        var ringMaterialBlue = RedBitmapMaterial(this, RedBitmapTexture(this, hudRingUrlBlue));
        ringMaterialBlue.alpha = 1;

        var makeConstellation = function (redGL, material, material2) {
            var rootMesh = RedMesh(redGL);
            // Sphere resolution matches the reference build exactly
            // (16 width segments / 8 height segments) — a sparser, more
            // graphic point cloud rather than a dense smooth sphere.
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
            // Shared point material for the tiny bright accent dot at the
            // center of every ring sprite (reference build's tSphere).
            var pointMaterial = RedColorMaterial(redGL, "#fff", 0.5);
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

                var tPoint = RedMesh(redGL, RedSphere(redGL, 0.1, 4, 4, 4), pointMaterial);
                tPoint.drawMode = redGL.gl.POINTS;
                tMesh.addChild(tPoint);

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

        var mainRing = makeConstellation(this, ringMaterialPeach, ringMaterialBlue);
        var subRing = makeConstellation(this, ringMaterialPeach, ringMaterialBlue);
        subRing.rotationX = subRing.rotationY = subRing.rotationZ = Math.random() * 360;

        tScene.addChild(mainRing);
        tScene.addChild(subRing);
        spinGroups.push(mainRing, subRing);

        // Entrance: a quick bloom-in from tiny up to the sphere's resting
        // "born" size (75% of full) — not all the way to full size. Full
        // size is reserved for the click-to-expand interaction, wired up
        // in setupDoorClick() below via the sphereRings handoff.
        var bornMain = BORN_SCALE;
        var bornSub = SUB_RING_SCALE * BORN_SCALE;
        mainRing.scaleX = mainRing.scaleY = mainRing.scaleZ = bornMain * 0.5;
        subRing.scaleX = subRing.scaleY = subRing.scaleZ = bornSub * 0.5;
        TweenMax.to(mainRing, 1.6, {
            scaleX: bornMain, scaleY: bornMain, scaleZ: bornMain,
            ease: Quint.easeOut
        });
        TweenMax.to(subRing, 1.6, {
            scaleX: bornSub, scaleY: bornSub, scaleZ: bornSub,
            ease: Quint.easeOut
        });

        sphereRings.mainRing = mainRing;
        sphereRings.subRing = subRing;

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
    startEmberTextSweep();

    // =================================================================
    // Stop the WebGL render loop (scene + bloom post-effect) entirely
    // once the museum world scrolls out of view, and resume it when it
    // scrolls back in. Without this, RedGL keeps rendering and running
    // the bloom shader every single frame forever, even behind the
    // Mission/Footer sections further down the page — the single
    // heaviest ongoing cost on this page. tRenderer.stop()/start() is
    // RedGL's own pause API (it just removes/re-adds this renderer from
    // its internal per-frame render list), so this doesn't touch the
    // scene, camera, or any tween state — it picks back up exactly
    // where it left off.
    // =================================================================
    (function setupWorldVisibilityPause() {
        if (!("IntersectionObserver" in window)) return;
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!tRenderer || !worldRedGL) return;
                if (entry.isIntersecting) {
                    tRenderer.start(worldRedGL, spinTick);
                } else {
                    tRenderer.stop();
                }
            });
        }, { threshold: 0 });
        io.observe(worldSection);
    })();

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

                // Sphere grows from its 75%-born resting size to full size
                // in step with the camera stepping toward the door, and
                // shrinks back on the way out.
                if (sphereRings.mainRing && sphereRings.subRing) {
                    var targetMain = steppedIn ? 1 : BORN_SCALE;
                    var targetSub = steppedIn ? SUB_RING_SCALE : SUB_RING_SCALE * BORN_SCALE;
                    TweenMax.to(sphereRings.mainRing, 1.1, {
                        scaleX: targetMain, scaleY: targetMain, scaleZ: targetMain,
                        ease: Quint.easeInOut
                    });
                    TweenMax.to(sphereRings.subRing, 1.1, {
                        scaleX: targetSub, scaleY: targetSub, scaleZ: targetSub,
                        ease: Quint.easeInOut
                    });
                }
            }
        });
    })();

    // =================================================================
    // Touch support — RedObitController (drag-to-look-around, from the
    // RedGL2 library) and the click-to-step-closer handler above only
    // ever listen for mouse events, so on touch devices (iPad/tablet —
    // no mouse at all) none of the drag/click interactivity responded,
    // even though it worked fine on desktop. This proxies single-finger
    // touch into the same mousedown/mousemove/mouseup events so both of
    // those keep working completely unchanged, plus a basic two-finger
    // pinch mapped directly to the controller's zoom distance (the
    // touch equivalent of desktop scroll-to-zoom).
    // =================================================================
    (function enableTouchControls() {
        function fireMouse(type, touch) {
            sphereCanvas.dispatchEvent(new MouseEvent(type, {
                bubbles: true,
                cancelable: true,
                clientX: touch.clientX,
                clientY: touch.clientY,
                button: 0
            }));
        }

        function touchDistance(touches) {
            var dx = touches[0].clientX - touches[1].clientX;
            var dy = touches[0].clientY - touches[1].clientY;
            return Math.sqrt(dx * dx + dy * dy);
        }

        var pinchStartDist = 0;
        var pinchStartDistance = 0;

        sphereCanvas.addEventListener("touchstart", function (e) {
            if (e.touches.length === 1) {
                fireMouse("mousedown", e.touches[0]);
            } else if (e.touches.length === 2 && tController) {
                pinchStartDist = touchDistance(e.touches);
                pinchStartDistance = tController.distance;
            }
            e.preventDefault();
        }, { passive: false });

        sphereCanvas.addEventListener("touchmove", function (e) {
            if (e.touches.length === 1) {
                fireMouse("mousemove", e.touches[0]);
            } else if (e.touches.length === 2 && tController && pinchStartDist) {
                var dist = touchDistance(e.touches);
                var ratio = pinchStartDist / dist; // pinch out (fingers apart) = zoom in
                tController.distance = Math.min(20, Math.max(3, pinchStartDistance * ratio));
            }
            e.preventDefault();
        }, { passive: false });

        sphereCanvas.addEventListener("touchend", function (e) {
            if (e.touches.length === 0 && e.changedTouches.length) {
                fireMouse("mouseup", e.changedTouches[0]);
            }
            pinchStartDist = 0;
        }, { passive: false });
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

        // Pause the loop when the hero scrolls out of view. Watches
        // #museosWorld itself rather than `wrap`: wrap sits inside a
        // position:fixed title band, so its own getBoundingClientRect
        // stays "in the viewport" no matter how far you scroll (it's
        // pinned to the screen) even once museosWorld's own
        // overflow:hidden has clipped it from view — observing it
        // directly never reports not-intersecting.
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
            io.observe(worldSection);
        } else {
            requestAnimationFrame(frame);
        }
    }

    // =================================================================
    // Ember gradient text sweep — same per-letter animated-gradient
    // technique as jeanphilippebelley.com's "Always" demo (split text
    // into letter spans, sweep a linear-gradient across each one's
    // background with background-clip:text, staggered letter by
    // letter). Recolored from that demo's orange/amber/white-gray to
    // this page's molten-gold ember palette (matches the spark colors
    // used in startTitleSparks above) and applied to every element
    // marked .museos-anim-text — currently the "Arrastra..." hint and
    // the "Scroll" label — instead of a single hard-coded headline.
    // =================================================================
    function startEmberTextSweep() {
        var STAGGER = 10, ENTER = 60, HOLD = 50, EXIT = 55, PAUSE = 44;

        function easeInOut(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function cyc(f, offset) {
            if (f < offset) return 0;
            var total = ENTER + HOLD + EXIT + PAUSE;
            var t = (f - offset) % total;
            if (t < ENTER) return easeInOut(t / ENTER);
            if (t < ENTER + HOLD) return 1;
            if (t < ENTER + HOLD + EXIT) return 1 - easeInOut((t - ENTER - HOLD) / EXIT);
            return 0;
        }

        function lerp(a, b, t) { return a + (b - a) * t; }

        function grad(el, css) {
            el.style.background = css;
            el.style.webkitBackgroundClip = "text";
            el.style.backgroundClip = "text";
            el.style.webkitTextFillColor = "transparent";
        }

        function split(el) {
            var raw = el.textContent;
            el.textContent = "";
            return raw.split("").map(function (ch) {
                var s = document.createElement("span");
                s.className = "museos-anim-char";
                s.textContent = ch === " " ? " " : ch;
                el.appendChild(s);
                return s;
            });
        }

        // Both targets (hint + scroll-cue label) live inside the hero's
        // bottom stack, so a single running flag/observer covers them —
        // without this, these per-character loops kept sweeping forever,
        // even scrolled down behind the Mission/Footer sections.
        var running = true;
        var resumeFns = [];

        var targets = document.querySelectorAll(".museos-anim-text");
        for (var t = 0; t < targets.length; t++) {
            (function (el) {
                var chars = split(el);
                var f = 0;
                function frame() {
                    if (!running) return;
                    f++;
                    for (var i = 0; i < chars.length; i++) {
                        var p = cyc(f, i * STAGGER);
                        var angle = lerp(180, 0, p).toFixed(1);
                        grad(chars[i], "linear-gradient(" + angle + "deg, #f97316 0%, #fbbf24 42%, #fff6df 100%)");
                    }
                    requestAnimationFrame(frame);
                }
                resumeFns.push(function () { requestAnimationFrame(frame); });
                frame();
            })(targets[t]);
        }

        // Watch #museosWorld itself, not the fixed-position bottom-stack:
        // the stack is clipped by museosWorld's own overflow:hidden as
        // soon as that section scrolls past the top of the viewport, so
        // its own getBoundingClientRect stays "in the viewport" forever
        // (fixed near the bottom of the screen) even though it's no
        // longer actually visible — observing it directly would never
        // report false.
        if ("IntersectionObserver" in window && targets.length) {
            var anchor = worldSection;
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var wasRunning = running;
                    running = entry.isIntersecting;
                    if (running && !wasRunning) {
                        resumeFns.forEach(function (resume) { resume(); });
                    }
                });
            }, { threshold: 0 });
            io.observe(anchor);
        }
    }
})();
