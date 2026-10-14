/* Projector light and suspended dust, mapped to the artwork's source coordinates. */
(() => {
  const stage = document.querySelector('.vampiro-art');
  const canvas = document.querySelector('.vampiro-cinema');
  const button = document.querySelector('.cinema-toggle');
  if (!stage || !canvas || !button) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = !reduced.matches, visible = true, frame = 0, w = 0, h = 0, elapsed = 0, last = 0;
  const dust = Array.from({length: 65}, (_, i) => ({x: Math.random(), y: Math.random(), speed: .008 + Math.random() * .012, radius: .4 + Math.random() * 1.1, phase: i * 2.399}));
  function size() {
    const box = stage.getBoundingClientRect(); w = box.width; h = box.height;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function render(now) {
    if (!enabled || !visible || document.hidden) { frame = 0; last = 0; return; }
    const dt = last ? Math.min((now-last)/1000, .05) : 0;
    last = now; elapsed += dt;
    ctx.clearRect(0,0,w,h);
    const scale = Math.max(w/1536,h/1024), ox = w-1536*scale;
    const x = ox+1420*scale, y = 393*scale;
    const shimmer = .92 + .055*Math.sin(elapsed*3.1) + .025*Math.sin(elapsed*7.7);
    ctx.save(); ctx.globalCompositeOperation = 'screen';
    const beam = ctx.createLinearGradient(x,y,ox+700*scale,y);
    beam.addColorStop(0,`rgba(204,240,255,${.14*shimmer})`);
    beam.addColorStop(.45,'rgba(160,217,241,.025)'); beam.addColorStop(1,'rgba(160,217,241,0)');
    ctx.fillStyle=beam;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(ox+710*scale,80*scale);ctx.lineTo(ox+660*scale,960*scale);ctx.closePath();ctx.fill();
    const halo = ctx.createRadialGradient(x,y,0,x,y,70*scale);
    halo.addColorStop(0,`rgba(235,250,255,${.25*shimmer})`);halo.addColorStop(.2,'rgba(167,222,255,.12)');halo.addColorStop(1,'rgba(100,180,255,0)');
    ctx.fillStyle=halo;ctx.fillRect(x-70*scale,y-70*scale,140*scale,140*scale);
    for (const p of dust) {
      p.y=(p.y-dt*p.speed+1)%1;
      const px=ox+(690+p.x*730+9*Math.sin(elapsed*.23+p.phase))*scale;
      const py=(120+p.y*800)*scale;
      const alpha=.1+.23*(.5+.5*Math.sin(elapsed*.6+p.phase));
      ctx.fillStyle=`rgba(209,235,244,${alpha})`;ctx.beginPath();ctx.arc(px,py,p.radius*scale,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();frame=requestAnimationFrame(render);
  }
  function sync() {
    stage.classList.toggle('cinema-running',enabled);
    button.setAttribute('aria-pressed',String(enabled));
    button.textContent=enabled?'Pausar la proyección':'Activar la proyección';
    cancelAnimationFrame(frame); frame=0;last=0;
    if (enabled && visible && !document.hidden) frame=requestAnimationFrame(render);
    else ctx.clearRect(0,0,w,h);
  }
  button.addEventListener('click',()=>{enabled=!enabled;sync();});
  reduced.addEventListener('change',()=>{enabled=!reduced.matches;sync();});
  new ResizeObserver(size).observe(stage);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(stage);
  document.addEventListener('visibilitychange',sync);
  size();sync();
})();
