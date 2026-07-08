/*********
 * adapted from a shader by Matthias Hurrle (@atzedent)
 */
(function () {
  const canvas = document.getElementById('authorsHeroCanvas');
  const shaderSource = document.getElementById('authorsHeroShader').textContent;

  const vertexSrc = "#version 300 es\nprecision highp float;\nin vec4 position;\nvoid main(){gl_Position=position;}";
  const vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

  const dpr = Math.max(1, 0.75 * window.devicePixelRatio);
  const gl = canvas.getContext('webgl2');

  let program, buffer, vs, fs;
  let startTime = 0;
  let frameId;

  function compile(shader, source) {
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
    }
  }

  function setup() {
    vs = gl.createShader(gl.VERTEX_SHADER);
    fs = gl.createShader(gl.FRAGMENT_SHADER);
    compile(vs, vertexSrc);
    compile(fs, shaderSource);

    program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }
  }

  function init() {
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    program.resolution = gl.getUniformLocation(program, 'resolution');
    program.time = gl.getUniformLocation(program, 'time');
  }

  function resize() {
    const { innerWidth: width, innerHeight: height } = window;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function render(now) {
    // Slowed to 35% of original speed (65% reduction)
    const time = now * 1e-3 * 0.35;

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.uniform2f(program.resolution, canvas.width, canvas.height);
    gl.uniform1f(program.time, time);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function loop(now) {
    render(now);
    frameId = requestAnimationFrame(loop);
  }

  setup();
  init();
  resize();
  window.addEventListener('resize', resize);
  frameId = requestAnimationFrame(loop);
})();