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
  const DUR_MIN = 0.9;
  const DUR_MAX = 1.8;

  let w = 0;
  let h = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let running = true;
  const particles = [];

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
    if (!running) return;
    const dt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';

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
    requestAnimationFrame(frame);
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
})();
