// ─── El Cubo hero shader ─────────────────────────────────────────────────
// Raymarched fractal-cube tunnel, shader by Matthias Hurrle (@atzedent),
// recolored to the Santos Armada amber/gold palette (see the shader
// source in el-cubo.html for the color edits). Runs as a clean
// autoplaying background — no editor, no on-screen controls — same
// ambient-visual treatment as the homepage's gold-beams canvas: it
// pauses while the tab is hidden and, for reduced-motion users, paints
// a single static frame instead of looping forever.
(function () {
    const canvas = document.getElementById('elCuboCanvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) return; // no WebGL2 support — canvas just stays black under the title

    const reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    // Internal render resolution is deliberately lower than the display
    // size — this shader raymarches up to 800 steps per pixel, and
    // running that at full retina resolution on a permanent hero section
    // (rather than a one-off demo) would burn far more GPU than the
    // visual gain is worth. The canvas is upscaled to full size via CSS.
    const RENDER_SCALE = 0.55;
    let dpr = Math.max(1, RENDER_SCALE * (window.devicePixelRatio || 1));

    const vertexSrc = "#version 300 es\nprecision highp float;\nin vec4 position;\nvoid main(){gl_Position=position;}";
    const fragmentSrc = document.getElementById('elCuboShader').textContent;
    const vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    function compile(shader, source) {
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
        }
    }

    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    compile(vs, vertexSrc);
    compile(fs, fragmentSrc);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'resolution');
    const uTime = gl.getUniformLocation(program, 'time');

    function resize() {
        const { innerWidth: w, innerHeight: h } = window;
        canvas.width = Math.max(1, Math.round(w * dpr));
        canvas.height = Math.max(1, Math.round(h * dpr));
        gl.viewport(0, 0, canvas.width, canvas.height);
    }

    let startTime = performance.now();
    let elapsed = 0;

    function renderFrame() {
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform1f(uTime, elapsed * 1e-3);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    let frame = null;

    function loop(now) {
        elapsed = now - startTime;
        renderFrame();
        frame = requestAnimationFrame(loop);
    }

    function play() {
        if (frame) return;
        startTime = performance.now() - elapsed;
        frame = requestAnimationFrame(loop);
    }

    function stop() {
        if (frame) elapsed = performance.now() - startTime;
        cancelAnimationFrame(frame);
        frame = null;
    }

    resize();
    if (reduceMotion) {
        renderFrame();
    } else {
        play();
    }

    window.addEventListener('resize', resize);
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', resize);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stop();
        } else if (!reduceMotion && canvasInView) {
            play();
        }
    });

    // This shader raymarches up to 800 steps per pixel — expensive enough
    // that it shouldn't keep running once scrolled out of view (e.g. once
    // the visitor is down in the cube gallery). Pause/resume alongside
    // the existing tab-visibility handling above.
    let canvasInView = true;
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            canvasInView = entries[0].isIntersecting;
            if (!canvasInView) {
                stop();
            } else if (!reduceMotion && !document.hidden) {
                play();
            }
        }, { threshold: 0 });
        io.observe(canvas);
    }
})();
