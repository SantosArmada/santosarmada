// Quiet, opt-in wing hum. Created only after a deliberate user gesture.
(() => {
  const button = document.getElementById('beeBuzz');
  let context, master, enabled = false;
  function build() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) throw new Error('Audio unavailable');
    context = new AudioContext();
    master = context.createGain(); master.gain.value = 0;
    const filter = context.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 1500;
    filter.connect(master); master.connect(context.destination);
    // Soft harmonics, with small irregular pitch and amplitude variations.
    const carrier = context.createOscillator(); carrier.type = 'sawtooth'; carrier.frequency.value = 185;
    const level = context.createGain(); level.gain.value = .32;
    carrier.connect(level); level.connect(filter);
    const flutter = context.createOscillator(); flutter.frequency.value = 5.7;
    const depth = context.createGain(); depth.gain.value = 7;
    flutter.connect(depth); depth.connect(carrier.frequency);
    const drift = context.createOscillator(); drift.frequency.value = .31;
    const driftDepth = context.createGain(); driftDepth.gain.value = 13;
    drift.connect(driftDepth); driftDepth.connect(carrier.frequency);
    const swell = context.createOscillator(); swell.frequency.value = .43;
    const swellDepth = context.createGain(); swellDepth.gain.value = .065;
    swell.connect(swellDepth); swellDepth.connect(level.gain);
    // A trace of filtered air takes the edge off the otherwise tonal hum.
    const buffer = context.createBuffer(1,context.sampleRate*2,context.sampleRate);
    const samples = buffer.getChannelData(0);
    for(let i=0;i<samples.length;i++) samples[i]=(Math.random()*2-1)*.018;
    const noise = context.createBufferSource(); noise.buffer=buffer; noise.loop=true;
    noise.connect(filter);
    [carrier,flutter,drift,swell,noise].forEach(node=>node.start());
  }
  function volume() {
    if (!context) return;
    master.gain.setTargetAtTime(enabled && !document.hidden ? .035 : 0,context.currentTime,.18);
  }
  button.addEventListener('click',async () => {
    button.disabled=true;
    try {
      if(!context) build();
      await context.resume();
      enabled=!enabled;
      button.setAttribute('aria-pressed',String(enabled));
      button.textContent=enabled?'Zumbido: activado':'Zumbido: apagado';
      volume();
    } catch {
      button.textContent='Zumbido no disponible';
      enabled=false;
      if(master) master.gain.value=0;
    } finally { button.disabled=false; }
  });
  document.addEventListener('visibilitychange',volume);
  window.addEventListener('pagehide',()=>{if(context)context.suspend();});
  window.addEventListener('pageshow',()=>{if(context&&enabled)context.resume().then(volume).catch(()=>{});});
})();
