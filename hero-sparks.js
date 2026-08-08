/*
 * Ember/spark border effect for the hero image.
 * Adapted from a Three.js particle-emitter shader (fire sparks bursting
 * from cube seams) into a lightweight Canvas2D system that emits sparks
 * along the perimeter of the hero image instead of a 3D surface.
 */
(function () {
  const wrap = document.querySelector('.hero-image-wrap');
  const img = document.querySelector('.hero-image');
  const canvas = document.querySelector('.hero-sparks-canvas');
  if (!wrap || !img || !canvas) return;

  const ctx = canvas.getContext('2d');

  const PAD = 36;          // px the canvas extends past the image on each side
  const AMOUNT = 140;      // spark count
  const ORB_AMOUNT = 58;   // slower motes released by glows inside the artwork
  const DUR_MIN = 0.9;
  const DUR_MAX = 1.8;

  // Normalized positions of luminous details already painted into hero.jpg.
  // Keeping these in percentages makes the emitters follow the responsive image.
  const ORB_SOURCES = [
    { x: 0.518, y: 0.050, dirs: ['n', 'e', 'w'], power: 1.35 }, // solar core
    { x: 0.827, y: 0.198, dirs: ['n', 'e'], power: 1.05 },
    { x: 0.550, y: 0.219, dirs: ['n', 'e', 'w'], power: 0.85 },
    { x: 0.601, y: 0.311, dirs: ['e', 'n'], power: 1.15 },
    { x: 0.540, y: 0.362, dirs: ['s', 'w'], power: 0.9 },
    { x: 0.486, y: 0.335, dirs: ['w', 'n'], power: 0.72 },
    { x: 0.360, y: 0.522, dirs: ['w', 's'], power: 1.1 },
    { x: 0.118, y: 0.469, dirs: ['w', 'n'], power: 0.88 },
    { x: 0.119, y: 0.511, dirs: ['w', 's'], power: 0.82 },
    { x: 0.516, y: 0.758, dirs: ['s', 'e', 'w'], power: 1.25 },
    { x: 0.341, y: 0.773, dirs: ['s', 'w'], power: 1.0 },
    { x: 0.243, y: 0.847, dirs: ['s', 'w'], power: 0.95 },
    { x: 0.454, y: 0.608, dirs: ['s', 'w'], power: 0.7 },
    { x: 0.395, y: 0.049, dirs: ['n', 'w'], power: 0.55 },
    { x: 0.454, y: 0.079, dirs: ['n', 'w'], power: 0.55 },
    { x: 0.576, y: 0.090, dirs: ['n', 'e'], power: 0.55 },
    { x: 0.708, y: 0.105, dirs: ['n', 'e'], power: 0.55 },
    { x: 0.753, y: 0.161, dirs: ['n', 'e'], power: 0.55 },
    { x: 0.910, y: 0.139, dirs: ['n', 'e'], power: 0.6 }
  ];

  let w = 0;
  let h = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let visible = true;
  let rafId = 0;
  const particles = [];
  const orbParticles = [];
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function rand(a, b) {
    return a + Math.random() * (b - a);
  }

  function smoothstep(edge0, edge1, x) {
    const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
    return t * t * (3 - 2 * t);
  }

  function easeOutCubic(k) {
    const d = k - 1;
    return d * d * d + 1;
  }

  function easeInOutCubic(k) {
    return k < 0.5
      ? 4 * k * k * k
      : 1 - Math.pow(-2 * k + 2, 3) / 2;
  }

  function lerpColor(a, b, t) {
    t = Math.min(Math.max(t, 0), 1);
    return [
      Math.round(a[0] + (b[0] - a[0]) * t),
      Math.round(a[1] + (b[1] - a[1]) * t),
      Math.round(a[2] + (b[2] - a[2]) * t)
    ];
  }

  // Picks a random point along the image's border rectangle and the
  // outward-facing normal at that point, mirroring the original
  // "SplitSampler" idea but walking a 2D perimeter instead of a 3D seam.
  function spawnAt(p) {
    const perim = 2 * (w + h);
    let t = Math.random() * perim;
    let x, y, nx, ny;
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
    const jitter = rand(-3, 3);
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
    for (let i = 0; i < AMOUNT; i++) {
      const p = {};
      spawnAt(p);
      // Stagger starting phase so sparks don't all pulse in sync.
      p.age = Math.random() * (p.duration + p.delay);
      particles.push(p);
    }

    orbParticles.length = 0;
    const orbCount = w < 480 ? 34 : (w < 700 ? 46 : ORB_AMOUNT);
    for (let i = 0; i < orbCount; i++) {
      const p = {};
      spawnOrb(p);
      p.age = Math.random() * (p.duration + p.delay);
      orbParticles.push(p);
    }
  }

  function spawnOrb(p) {
    const sourceIndex = Math.floor(Math.random() * ORB_SOURCES.length);
    const source = ORB_SOURCES[sourceIndex];
    const dirName = source.dirs[Math.floor(Math.random() * source.dirs.length)];
    const directions = {
      n: { x: 0, y: -1 },
      s: { x: 0, y: 1 },
      e: { x: 1, y: 0 },
      w: { x: -1, y: 0 }
    };
    const dir = directions[dirName];
    const sx = source.x * w;
    const sy = source.y * h;
    let edgeDistance;

    if (dir.x < 0) edgeDistance = sx;
    else if (dir.x > 0) edgeDistance = w - sx;
    else if (dir.y < 0) edgeDistance = sy;
    else edgeDistance = h - sy;

    p.sourceIndex = sourceIndex;
    p.x = sx + PAD + rand(-2.5, 2.5);
    p.y = sy + PAD + rand(-2.5, 2.5);
    p.dx = dir.x;
    p.dy = dir.y;
    p.distance = edgeDistance + rand(18, PAD + 18);
    p.duration = rand(3.8, 7.2) * Math.max(0.82, edgeDistance / (Math.max(w, h) * 0.48));
    p.delay = rand(0.35, 4.8);
    const responsiveScale = Math.min(1, Math.max(0.55, Math.min(w, h) / 820));
    p.size = rand(1.7, 3.8) * source.power * responsiveScale;
    p.curve = rand(-1, 1) * Math.min(w, h) * rand(0.012, 0.042);
    p.wave = rand(0.8, 1.65);
    p.phase = rand(0, Math.PI * 2);
    p.age = 0;
    p.px = NaN;
    p.py = NaN;
  }

  function drawOrbSources(now) {
    const scale = Math.min(w, h) / 820;

    for (let i = 0; i < ORB_SOURCES.length; i++) {
      const source = ORB_SOURCES[i];
      const pulse = 0.5 + 0.5 * Math.sin(now * 0.00135 + i * 1.73);
      const x = source.x * w + PAD;
      const y = source.y * h + PAD;
      const radius = (3.2 + pulse * 2.8) * source.power * scale;
      const alpha = (0.08 + pulse * 0.13) * Math.min(source.power, 1.2);
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 3.2);

      glow.addColorStop(0, `rgba(255,250,218,${alpha * 1.7})`);
      glow.addColorStop(0.22, `rgba(255,205,85,${alpha})`);
      glow.addColorStop(1, 'rgba(255,135,25,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius * 3.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawOrbParticles(dt) {
    for (let i = 0; i < orbParticles.length; i++) {
      const p = orbParticles[i];
      p.age += dt;
      if (p.age < p.delay) continue;

      const local = p.age - p.delay;
      if (local > p.duration) {
        spawnOrb(p);
        continue;
      }

      const k = local / p.duration;
      const travel = easeInOutCubic(k) * p.distance;
      const bend = Math.sin(k * Math.PI) *
        Math.sin(k * Math.PI * p.wave + p.phase) * p.curve;
      const x = p.x + p.dx * travel - p.dy * bend;
      const y = p.y + p.dy * travel + p.dx * bend;
      const born = smoothstep(0, 0.1, k);
      const fade = born * (1 - smoothstep(0.78, 1, k));
      const edgeBlend = smoothstep(0.68, 1, k);
      const size = p.size * (1 - edgeBlend * 0.46);

      if (!Number.isNaN(p.px)) {
        const trail = ctx.createLinearGradient(p.px, p.py, x, y);
        trail.addColorStop(0, 'rgba(255,155,35,0)');
        trail.addColorStop(1, `rgba(255,205,95,${fade * (0.34 + edgeBlend * 0.42)})`);
        ctx.strokeStyle = trail;
        ctx.lineWidth = Math.max(size * (0.55 + edgeBlend * 0.35), 0.75);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      p.px = x;
      p.py = y;

      const radius = Math.max(size * (2.05 - edgeBlend * 0.65), 1.3);
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 2.4);
      glow.addColorStop(0, `rgba(255,252,225,${fade})`);
      glow.addColorStop(0.2, `rgba(255,215,105,${fade * 0.95})`);
      glow.addColorStop(0.58, `rgba(255,145,30,${fade * 0.42})`);
      glow.addColorStop(1, 'rgba(90,35,6,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius * 2.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255,248,218,${fade * (0.74 + edgeBlend * 0.2)})`;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(radius * 0.28, 0.65), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function resize() {
    const rect = img.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    if (!w || !h) return;

    const cw = w + PAD * 2;
    const ch = h + PAD * 2;

    canvas.style.width = cw + 'px';
    canvas.style.height = ch + 'px';
    canvas.style.left = -PAD + 'px';
    canvas.style.top = -PAD + 'px';

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    initParticles();
  }

  let lastT = performance.now();

  function frame(now) {
    rafId = 0;
    if (!visible || motionQuery.matches) return;
    const dt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';

    drawOrbSources(now);
    drawOrbParticles(dt);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.age += dt;
      if (p.age < p.delay) continue;

      const local = p.age - p.delay;
      if (local > p.duration) {
        spawnAt(p);
        continue;
      }

      const k = local / p.duration;
      const dist = easeOutCubic(k) * p.distance;
      const x = p.x + p.nx * dist;
      const y = p.y + p.ny * dist;

      // entry/exit envelope — mirrors the shader's size ramp-up (0 -> 0.05)
      // and its hard cutoff right at the end of life (0.95 -> 1)
      const fade = smoothstep(0, 0.05, k) * (1 - smoothstep(0.95, 1, k));
      if (fade <= 0.01) continue;

      const flash = smoothstep(0.78, 0.85, k) - smoothstep(0.85, 0.95, k);
      const cool = smoothstep(0.25, 0.75, k);

      // hot core shifts peachy -> gold over the spark's life
      let core = lerpColor([255, 190, 120], [255, 205, 70], smoothstep(0, 0.75, k));
      // the rim of each point stays a warm golden-orange (not red)
      let edge = [255, 140, 30];

      // both cool toward a dark ember as the spark ages
      core = lerpColor(core, [60, 25, 8], cool);
      edge = lerpColor(edge, [60, 25, 8], cool);

      // bright flash right before the spark recycles
      if (flash > 0) {
        core = lerpColor(core, [255, 250, 200], flash);
        edge = lerpColor(edge, [255, 250, 200], flash * 0.6);
      }

      // motion streak: a fading trail from the spark's last drawn position
      // to its current one, so it reads as a moving ember, not a static dot
      if (!Number.isNaN(p.px)) {
        const tw = Math.max(p.size * 0.9, 0.8);
        const trail = ctx.createLinearGradient(p.px, p.py, x, y);
        trail.addColorStop(0, `rgba(${core[0]},${core[1]},${core[2]},0)`);
        trail.addColorStop(1, `rgba(${core[0]},${core[1]},${core[2]},${fade * 0.85})`);
        ctx.strokeStyle = trail;
        ctx.lineWidth = tw;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      p.px = x;
      p.py = y;

      // tight, hard-edged falloff (mirrors 1 - smoothstep(0.5, ~0.8, dist))
      // instead of a soft linear glow across the whole radius
      const r = Math.max(p.size * 1.4, 1.1);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, `rgba(${core[0]},${core[1]},${core[2]},${fade})`);
      grad.addColorStop(0.45, `rgba(${core[0]},${core[1]},${core[2]},${fade})`);
      grad.addColorStop(0.75, `rgba(${edge[0]},${edge[1]},${edge[2]},${fade * 0.55})`);
      grad.addColorStop(1, `rgba(${edge[0]},${edge[1]},${edge[2]},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      // pinpoint hot highlight — the actual bright "spark" tip
      const hl = Math.max(r * 0.3, 0.55);
      ctx.fillStyle = `rgba(255,245,215,${fade * (0.7 + flash * 0.3)})`;
      ctx.beginPath();
      ctx.arc(x, y, hl, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalCompositeOperation = 'source-over';
    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (!visible || motionQuery.matches || rafId) return;
    lastT = performance.now();
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  window.addEventListener('resize', resize);
  if ('ResizeObserver' in window) {
    new ResizeObserver(resize).observe(img);
  }

  if (img.complete && img.naturalWidth) {
    resize();
  } else {
    img.addEventListener('load', resize, { once: true });
  }

  // Pause the loop when the hero scrolls out of view to save battery/CPU.
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      });
    }, { threshold: 0 });
    io.observe(wrap);
  } else {
    start();
  }


  function handleMotionPreference() {
    if (motionQuery.matches) stop();
    else start();
  }

  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', handleMotionPreference);
  } else if (motionQuery.addListener) {
    motionQuery.addListener(handleMotionPreference);
  }
})();
