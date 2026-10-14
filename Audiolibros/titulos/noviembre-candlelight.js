/* Candle positions are measured in the 1536 × 1024 hero artwork. */
(() => {
  const art = document.querySelector('.noviembre-art');
  const img = art?.querySelector('img');
  if (!img) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'noviembre-candlelight';
  canvas.setAttribute('aria-hidden', 'true');
  art.append(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const candles = [
    [1297,808,39],[1410,736,38],[1495,637,46],
    [1459,313,20],[1494,343,19],[1522,360,17],[1533,378,12],
    [895,755,26],[805,823,28],[750,861,23],[779,728,19],
    [720,898,17],[778,895,18],[767,906,13],[803,750,12],
    [924,802,13],[847,881,13],[834,888,10],
    [1008,484,13],[1023,478,14],[993,503,12],[976,511,10],
    [968,506,9],[952,515,9],[728,564,10],[728,557,8],
    [800,527,7],[814,522,7],[760,622,10],[773,617,8],
    [697,662,15],[709,665,9],[687,670,8],[653,633,12],
    [665,629,10],[633,653,16],[622,661,14],[611,660,10],
    [597,655,10],[564,690,8],[547,748,7],[519,770,6]
  ];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let width=0, height=0, scale=1, offset=0, frame=0, visible=true;
  function resize() {
    width=art.clientWidth; height=art.clientHeight;
    const dpr=Math.min(devicePixelRatio || 1,2);
    canvas.width=Math.round(width*dpr); canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    // The image uses cover, right top. Keep every wick anchored as it crops.
    scale=Math.max(width/1536,height/1024);
    offset=width-1536*scale;
    draw(0);
  }
  function flame(x,y,h,lean,brightness) {
    const w=h*.22;
    ctx.save(); ctx.translate(x,y);
    const halo=ctx.createRadialGradient(0,-h*.35,0,0,-h*.35,h*1.7);
    halo.addColorStop(0,`rgba(255,181,57,${.22*brightness})`);
    halo.addColorStop(.35,`rgba(255,126,22,${.10*brightness})`);
    halo.addColorStop(1,'rgba(255,98,12,0)');
    ctx.fillStyle=halo;ctx.fillRect(-h*1.7,-h*2.05,h*3.4,h*3.4);
    const fill=ctx.createLinearGradient(0,0,0,-h);
    fill.addColorStop(0,'rgba(92,139,255,.65)');
    fill.addColorStop(.12,'#fff6c5');fill.addColorStop(.45,'#fff9dc');
    fill.addColorStop(.8,'#ffc65a');fill.addColorStop(1,'rgba(255,116,20,0)');
    ctx.fillStyle=fill;ctx.shadowColor='#ffb040';ctx.shadowBlur=h*.22;
    ctx.beginPath();ctx.moveTo(0,1);
    ctx.bezierCurveTo(-w*1.3,-h*.18,-w+lean*.2,-h*.5,lean,-h);
    ctx.bezierCurveTo(lean+w*.1,-h*.64,w*1.8,-h*.24,0,1);ctx.fill();
    ctx.shadowBlur=0;ctx.fillStyle='rgba(255,255,235,.94)';
    ctx.beginPath();ctx.ellipse(0,-h*.21,w*.43,h*.23,lean*.012,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
  function draw(ms) {
    ctx.clearRect(0,0,width,height);
    const t=ms*.001;
    candles.forEach(([x,y,size],i)=>{
      const p=i*2.399;
      const pulse=Math.sin(t*7.2+p)*.09+Math.sin(t*13.1+p*1.7)*.045;
      const h=size*scale*(1+pulse);
      flame(offset+x*scale,y*scale,h,(Math.sin(t*4.3+p)*.13+Math.sin(t*9.7+p)*.05)*h,1+pulse);
    });
  }
  function tick(t) { draw(t);frame=requestAnimationFrame(tick); }
  function sync() {
    cancelAnimationFrame(frame);frame=0;
    if (!reduced.matches && visible && !document.hidden) frame=requestAnimationFrame(tick);
    else draw(0);
  }
  new ResizeObserver(resize).observe(art);
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();}).observe(art);
  reduced.addEventListener('change',sync);
  document.addEventListener('visibilitychange',sync);
  window.addEventListener('pagehide',()=>cancelAnimationFrame(frame));
  window.addEventListener('pageshow',sync);
  resize();sync();
})();
