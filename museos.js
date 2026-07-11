/* ================================================================
   MUSEOS — Santos Armada
   An explorable 3D museum building (RedGL2), drag to look around,
   scroll to zoom exactly like the original build. Click the building
   / door to step closer. "MUSEOS" hovers over the top of the scene,
   always visible, as a fluid ripple fed live by the world itself
   (like the Authors page title, but higher up and liquid).
================================================================= */

import * as ogl from "https://cdn.jsdelivr.net/npm/ogl@1.0.3/+esm";

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
    var maskEl = document.getElementById("museosMask");
    var hintEl = document.getElementById("museosHint");

    if (!sphereCanvas || !worldSection || !maskEl) return;

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
        subRing.scaleX = subRing.scaleY = subRing.scaleZ = 0.72;
        subRing.rotationX = subRing.rotationY = subRing.rotationZ = Math.random() * 360;

        tScene.addChild(mainRing);
        tScene.addChild(subRing);
        spinGroups.push(mainRing, subRing);

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

        // World is alive — start the fluid title band on top of it.
        startTitleRipple(sphereCanvas);
    });

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
        var wingsSection = document.getElementById("museosWings");
        if (scrollCue && wingsSection) {
            scrollCue.addEventListener("click", function () {
                wingsSection.scrollIntoView({ behavior: "smooth" });
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
    // OGL fluid flowmap — "MUSEOS" title band, fed live by the museum
    // canvas itself. Sits just under the navbar, always visible, like
    // the Authors page title but liquid and higher up than center.
    // =================================================================
    function startTitleRipple(sourceCanvas) {
        var vertex = "attribute vec2 uv;attribute vec2 position;varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,0,1);}";
        var fragment = [
            "precision highp float;",
            "precision highp int;",
            "uniform sampler2D tWater;",
            "uniform sampler2D tFlow;",
            "uniform float uTime;",
            "varying vec2 vUv;",
            "uniform vec4 res;",
            "void main() {",
            "  vec3 flow = texture2D(tFlow, vUv).rgb;",
            "  vec2 uv = .5 * gl_FragCoord.xy / res.xy;",
            "  vec2 myUV = (uv - vec2(0.5)) * res.zw + vec2(0.5);",
            "  myUV -= flow.xy * (0.15 * 1.2);",
            "  vec2 myUV2 = (uv - vec2(0.5)) * res.zw + vec2(0.5);",
            "  myUV2 -= flow.xy * (0.125 * 1.2);",
            "  vec2 myUV3 = (uv - vec2(0.5)) * res.zw + vec2(0.5);",
            "  myUV3 -= flow.xy * (0.10 * 1.4);",
            "  vec3 tex = texture2D(tWater, myUV).rgb;",
            "  vec3 tex2 = texture2D(tWater, myUV2).rgb;",
            "  vec3 tex3 = texture2D(tWater, myUV3).rgb;",
            "  gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);",
            "}"
        ].join("\n");

        // dpr capped at 1: this canvas is a thin decorative band, not a
        // full hero — retina sharpness here isn't worth the extra fill cost.
        var renderer = new ogl.Renderer({ dpr: 1, alpha: true });
        var gl = renderer.gl;
        gl.canvas.className = "museos-ogl-canvas";
        worldSection.appendChild(gl.canvas);

        var aspect = 1;
        var mouse = new ogl.Vec2(-1);
        var velocity = new ogl.Vec2();

        var flowmap = new ogl.Flowmap(gl, { falloff: 0.3, dissipation: 0.92, alpha: 0.5 });

        var geometry = new ogl.Geometry(gl, {
            position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
            uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
        });

        var texture = new ogl.Texture(gl, { minFilter: gl.LINEAR, magFilter: gl.LINEAR });
        texture.image = sourceCanvas;

        var program = new ogl.Program(gl, {
            vertex: vertex,
            fragment: fragment,
            uniforms: {
                uTime: { value: 0 },
                tWater: { value: texture },
                res: { value: new ogl.Vec4(1, 1, 1, 1) },
                tFlow: flowmap.uniform
            }
        });

        var mesh = new ogl.Mesh(gl, { geometry: geometry, program: program });

        function bandSize() {
            var band = worldSection.querySelector(".museos-title-band");
            var rect = band ? band.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight * 0.3 };
            return { w: Math.max(1, Math.round(rect.width)), h: Math.max(1, Math.round(rect.height)) };
        }

        function resize() {
            var size = bandSize();
            renderer.setSize(size.w, size.h);

            var srcW = sourceCanvas.width || window.innerWidth;
            var srcH = sourceCanvas.height || window.innerHeight;
            var imageAspect = srcH / srcW;
            var a1, a2;
            if (size.h / size.w < imageAspect) {
                a1 = 1;
                a2 = (size.h / size.w) / imageAspect;
            } else {
                a1 = (size.w / size.h) * imageAspect;
                a2 = 1;
            }
            program.uniforms.res.value = new ogl.Vec4(size.w, size.h, a1, a2);
            aspect = size.w / size.h;
        }

        window.addEventListener("resize", resize);
        resize();

        var isTouchCapable = "ontouchstart" in window;
        var lastTime;
        var lastMouse = new ogl.Vec2();

        function updateMouse(e) {
            if (e.changedTouches && e.changedTouches.length) {
                e.x = e.changedTouches[0].pageX;
                e.y = e.changedTouches[0].pageY;
            }
            if (e.x === undefined) {
                e.x = e.pageX;
                e.y = e.pageY;
            }
            var rect = gl.canvas.getBoundingClientRect();
            mouse.set((e.x - rect.left) / rect.width, 1 - (e.y - rect.top) / rect.height);
            if (!lastTime) {
                lastTime = performance.now();
                lastMouse.set(e.x, e.y);
            }
            var deltaX = e.x - lastMouse.x;
            var deltaY = e.y - lastMouse.y;
            lastMouse.set(e.x, e.y);
            var time = performance.now();
            var delta = Math.max(10.4, time - lastTime);
            lastTime = time;
            velocity.x = deltaX / delta;
            velocity.y = deltaY / delta;
            velocity.needsUpdate = true;
        }

        if (isTouchCapable) {
            window.addEventListener("touchstart", updateMouse, false);
            window.addEventListener("touchmove", updateMouse, { passive: true });
        } else {
            window.addEventListener("mousemove", updateMouse, false);
        }

        // Capturing the live RedGL canvas into this texture means a full
        // re-upload of its pixels every time we flag needsUpdate — doing
        // that on every single animation frame was the main tax on the
        // museum's own drag/zoom smoothness. The ripple band doesn't need
        // 60fps freshness to read as "fluid", so we only recapture every
        // 3rd frame and let the flowmap distortion carry the motion between.
        var frameCount = 0;
        var CAPTURE_EVERY = 3;

        function update(t) {
            requestAnimationFrame(update);
            if (!velocity.needsUpdate) {
                mouse.set(-1);
                velocity.set(0);
            }
            velocity.needsUpdate = false;
            flowmap.aspect = aspect;
            flowmap.mouse.copy(mouse);
            flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
            flowmap.update();
            frameCount++;
            if (frameCount % CAPTURE_EVERY === 0) {
                texture.needsUpdate = true;
            }
            program.uniforms.uTime.value = t * 0.001;
            renderer.render({ scene: mesh });
        }
        requestAnimationFrame(update);
    }
})();
