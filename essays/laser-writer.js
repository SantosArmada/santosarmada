(() => {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const essayBody = document.querySelector(".essay-body");
  const consoleEl = document.getElementById("laserConsole");
  const statusEl = document.getElementById("laserStatusText");
  const replayBtn = document.getElementById("laserReplay");
  const revealBtn = document.getElementById("laserReveal");
  const soundBtn = document.getElementById("laserSound");
  const nav = document.querySelector("nav");
  const bottomBanner = document.querySelector(".essays-banner-bottom");

  if (!essayBody || !consoleEl || !statusEl || !replayBtn || !revealBtn || !soundBtn) return;

  const FRAME_ON_TWOS = 1000 / 30;
  const MAX_LINES_PER_PASS = 7;
  const PARTICLE_COUNT = 24;
  const paragraphs = [...essayBody.querySelectorAll("p")].filter((p) => p.textContent.trim());
  const characterMap = new WeakMap();

  let animationFrame = 0;
  let scanTimer = 0;
  let runVersion = 0;
  let activeRun = null;
  let userRevealed = false;
  let soundEnabled = false;
  let audioContext = null;
  let soundEngine = null;
  let humVoice = null;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const lerp = (from, to, amount) => from + (to - from) * amount;
  const easeInOutMass = (t) => {
    const smooth = t * t * (3 - 2 * t);
    return clamp(smooth + Math.sin(t * Math.PI * 3) * 0.012 * (1 - t), 0, 1);
  };
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInCubic = (t) => t * t * t;
  const pointBetween = (from, to, amount) => ({
    x:lerp(from.x, to.x, amount),
    y:lerp(from.y, to.y, amount)
  });
  const quadraticPoint = (from, control, to, amount) => {
    const inverse = 1 - amount;
    return {
      x:inverse * inverse * from.x + 2 * inverse * amount * control.x + amount * amount * to.x,
      y:inverse * inverse * from.y + 2 * inverse * amount * control.y + amount * amount * to.y
    };
  };

  const setStatus = (state, message) => {
    consoleEl.dataset.state = state;
    statusEl.textContent = message;
  };

  const wrapCharacters = (paragraph) => {
    if (characterMap.has(paragraph)) return;

    const originalText = paragraph.textContent;
    paragraph.setAttribute("aria-label", originalText);
    const textNodes = [];
    const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    const characters = [];
    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      [...node.textContent].forEach((character) => {
        const span = document.createElement("span");
        span.className = "laser-char";
        span.textContent = character;
        span.setAttribute("aria-hidden", "true");
        fragment.appendChild(span);
        characters.push(span);
      });
      node.replaceWith(fragment);
    });
    characterMap.set(paragraph, characters);
  };

  paragraphs.forEach(wrapCharacters);

  const atmosphere = document.createElement("span");
  atmosphere.className = "anime-laser-atmosphere";
  atmosphere.setAttribute("aria-hidden", "true");

  const head = document.createElement("span");
  head.className = "anime-laser-head";
  head.setAttribute("aria-hidden", "true");
  head.innerHTML = '<span class="anime-laser-chassis"></span><span class="anime-laser-aperture"></span>';

  const beam = document.createElement("span");
  beam.className = "anime-laser-beam";
  beam.setAttribute("aria-hidden", "true");

  const contact = document.createElement("span");
  contact.className = "anime-laser-contact";
  contact.setAttribute("aria-hidden", "true");

  document.body.append(atmosphere, head, beam, contact);

  const particles = Array.from({ length:PARTICLE_COUNT }, () => {
    const element = document.createElement("span");
    element.className = "anime-laser-particle";
    element.setAttribute("aria-hidden", "true");
    document.body.appendChild(element);
    return {
      element,
      active:false,
      x:0,
      y:0,
      vx:0,
      vy:0,
      gravity:0,
      life:0,
      duration:1
    };
  });

  const hardware = {
    offsetX:0,
    offsetY:0,
    velocityX:0,
    velocityY:0,
    tipX:window.innerWidth * 0.5,
    tipY:120,
    originX:window.innerWidth * 0.5,
    originY:120
  };

  const getViewportGeometry = () => {
    const navBottom = nav ? nav.getBoundingClientRect().bottom : 76;
    const bannerHeight = bottomBanner ? bottomBanner.getBoundingClientRect().height : 0;
    const pivot = {
      x:window.innerWidth * 0.5,
      y:Math.max(navBottom + 26, Math.min(window.innerHeight * 0.2, 148))
    };
    return {
      pivot,
      safeTop:pivot.y + (window.innerWidth <= 768 ? 48 : 58),
      safeBottom:window.innerHeight - bannerHeight - 16,
      headWidth:window.innerWidth <= 768 ? 78 : 94,
      headHeight:window.innerWidth <= 768 ? 30 : 34
    };
  };

  const updatePresence = () => {
    const section = essayBody.closest(".essay-section") || essayBody;
    const rect = section.getBoundingClientRect();
    const present = rect.top < window.innerHeight && rect.bottom > 0;
    atmosphere.classList.toggle("is-present", present);
    head.classList.toggle("is-present", present);
    return present;
  };

  const setHardwareActive = (active, carriage = false) => {
    atmosphere.classList.toggle("is-active", active);
    head.classList.toggle("is-active", active);
    beam.classList.toggle("is-live", active);
    contact.classList.toggle("is-live", active);
    beam.classList.toggle("is-carriage", carriage);
    contact.classList.toggle("is-carriage", carriage);
    if (!active) {
      beam.style.opacity = "";
      contact.style.opacity = "";
    }
  };

  const renderHardware = (tip, geometry, intensity, carriage, tick) => {
    const desiredOffsetX = clamp((tip.x - geometry.pivot.x) * 0.038, -12, 12);
    const desiredOffsetY = clamp((tip.y - geometry.pivot.y) * 0.012, 0, 8);

    hardware.velocityX += (desiredOffsetX - hardware.offsetX) * 0.085;
    hardware.velocityY += (desiredOffsetY - hardware.offsetY) * 0.07;
    hardware.velocityX *= 0.7;
    hardware.velocityY *= 0.72;
    hardware.offsetX += hardware.velocityX;
    hardware.offsetY += hardware.velocityY;

    const vibrationX = Math.sin(tick * 0.037) * 0.55 + Math.sin(tick * 0.011) * 0.28;
    const vibrationY = Math.cos(tick * 0.031) * 0.38;
    const originX = geometry.pivot.x + hardware.offsetX + vibrationX;
    const originY = geometry.pivot.y + hardware.offsetY + vibrationY;
    const contactJitterX = Math.sin(tick * 0.053) * (carriage ? 0.2 : 0.62);
    const contactJitterY = Math.cos(tick * 0.047) * (carriage ? 0.18 : 0.48);
    const tipX = tip.x + contactJitterX;
    const tipY = tip.y + contactJitterY;
    const deltaX = tipX - originX;
    const deltaY = tipY - originY;
    const length = Math.max(1, Math.hypot(deltaX, deltaY));
    const angle = Math.atan2(deltaY, deltaX);
    const headTilt = clamp(deltaX / Math.max(1, Math.abs(deltaY)) * 2.2, -5, 5);
    const flicker = carriage ? 0.22 : intensity * (0.9 + ((tick / FRAME_ON_TWOS) % 3) * 0.035);

    hardware.tipX = tipX;
    hardware.tipY = tipY;
    hardware.originX = originX;
    hardware.originY = originY;

    head.style.transform = `translate3d(${originX - geometry.headWidth / 2}px, ${originY - geometry.headHeight + 5}px, 0) rotate(${headTilt}deg)`;
    beam.style.transform = `translate3d(${originX}px, ${originY}px, 0) rotate(${angle}rad) scaleX(${length / 100})`;
    beam.style.opacity = String(clamp(flicker, 0.12, 1));
    contact.style.transform = `translate3d(${tipX}px, ${tipY}px, 0)`;
    contact.style.opacity = String(carriage ? 0.3 : clamp(intensity, 0.45, 1));
  };

  const hideParticles = () => {
    particles.forEach((particle) => {
      particle.active = false;
      particle.element.style.opacity = "0";
    });
  };

  const spawnParticles = (x, y, dramatic = false) => {
    const amount = dramatic ? 4 : (Math.random() < 0.32 ? 2 : 1);
    let emitted = 0;
    for (const particle of particles) {
      if (particle.active) continue;
      const angle = -Math.PI * (0.12 + Math.random() * 0.76);
      const speed = (dramatic ? 1.8 : 1.15) + Math.random() * 1.5;
      particle.active = true;
      particle.x = x;
      particle.y = y;
      particle.vx = Math.cos(angle) * speed + (Math.random() - 0.5) * 0.8;
      particle.vy = Math.sin(angle) * speed - Math.random() * 0.65;
      particle.gravity = 0.055 + Math.random() * 0.035;
      particle.life = 0;
      particle.duration = 230 + Math.random() * 260;
      particle.element.style.opacity = "1";
      emitted++;
      if (emitted >= amount) break;
    }
  };

  const updateParticles = (deltaMs) => {
    const frameScale = deltaMs / FRAME_ON_TWOS;
    particles.forEach((particle) => {
      if (!particle.active) return;
      particle.life += deltaMs;
      if (particle.life >= particle.duration) {
        particle.active = false;
        particle.element.style.opacity = "0";
        return;
      }
      particle.vy += particle.gravity * frameScale;
      particle.x += particle.vx * frameScale;
      particle.y += particle.vy * frameScale;
      const remaining = 1 - particle.life / particle.duration;
      const scale = 0.45 + remaining * 0.85;
      particle.element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) scale(${scale})`;
      particle.element.style.opacity = String(remaining * 0.92);
    });
  };

  const ensureSoundEngine = () => {
    if (soundEngine) return soundEngine;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioContext ||= new AudioContextClass();

    const master = audioContext.createGain();
    const compressor = audioContext.createDynamicsCompressor();
    const delay = audioContext.createDelay(0.22);
    const feedback = audioContext.createGain();
    const wet = audioContext.createGain();
    master.gain.value = 0.4;
    compressor.threshold.value = -22;
    compressor.knee.value = 12;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.18;
    delay.delayTime.value = 0.062;
    feedback.gain.value = 0.12;
    wet.gain.value = 0.1;
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(compressor);
    master.connect(compressor);
    compressor.connect(audioContext.destination);

    const noiseBuffer = audioContext.createBuffer(1, Math.ceil(audioContext.sampleRate * 0.5), audioContext.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let index = 0; index < noiseData.length; index++) noiseData[index] = Math.random() * 2 - 1;

    soundEngine = { master, delay, noiseBuffer };
    return soundEngine;
  };

  const startHum = () => {
    if (!soundEnabled || humVoice) return;
    const engine = ensureSoundEngine();
    if (!engine || !audioContext) return;
    const now = audioContext.currentTime;
    const carrierA = audioContext.createOscillator();
    const carrierB = audioContext.createOscillator();
    const overtone = audioContext.createOscillator();
    const lfo = audioContext.createOscillator();
    const noise = audioContext.createBufferSource();
    const carrierBMix = audioContext.createGain();
    const overtoneMix = audioContext.createGain();
    const noiseMix = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const tremolo = audioContext.createGain();
    const lfoDepth = audioContext.createGain();
    const envelope = audioContext.createGain();
    const send = audioContext.createGain();

    carrierA.type = "sawtooth";
    carrierB.type = "sawtooth";
    overtone.type = "square";
    carrierA.frequency.setValueAtTime(72, now);
    carrierA.frequency.exponentialRampToValueAtTime(92, now + 0.2);
    carrierB.frequency.setValueAtTime(71.4, now);
    carrierB.frequency.exponentialRampToValueAtTime(91.2, now + 0.23);
    overtone.frequency.setValueAtTime(184, now);
    carrierBMix.gain.value = 0.46;
    overtoneMix.gain.value = 0.13;
    noise.buffer = engine.noiseBuffer;
    noise.loop = true;
    noiseMix.gain.value = 0.03;
    filter.type = "lowpass";
    filter.Q.value = 2.4;
    filter.frequency.setValueAtTime(320, now);
    filter.frequency.exponentialRampToValueAtTime(790, now + 0.22);
    tremolo.gain.value = 0.79;
    lfo.type = "sine";
    lfo.frequency.value = 7.1;
    lfoDepth.gain.value = 0.17;
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(0.045, now + 0.18);
    send.gain.value = 0.025;

    carrierA.connect(filter);
    carrierB.connect(carrierBMix).connect(filter);
    overtone.connect(overtoneMix).connect(filter);
    noise.connect(noiseMix).connect(filter);
    filter.connect(tremolo).connect(envelope);
    lfo.connect(lfoDepth).connect(tremolo.gain);
    envelope.connect(engine.master);
    envelope.connect(send).connect(engine.delay);
    [carrierA, carrierB, overtone, lfo, noise].forEach((node) => node.start(now));
    humVoice = { envelope, nodes:[carrierA, carrierB, overtone, lfo, noise] };
  };

  const stopHum = () => {
    if (!humVoice || !audioContext) return;
    const voice = humVoice;
    const now = audioContext.currentTime;
    humVoice = null;
    voice.envelope.gain.cancelScheduledValues(now);
    voice.envelope.gain.setValueAtTime(Math.max(0.0001, voice.envelope.gain.value), now);
    voice.envelope.gain.exponentialRampToValueAtTime(0.0001, now + 0.17);
    voice.nodes.forEach((node) => node.stop(now + 0.21));
  };

  const collectVisibleRun = () => {
    const geometry = getViewportGeometry();
    updatePresence();

    for (let paragraphIndex = 0; paragraphIndex < paragraphs.length; paragraphIndex++) {
      const paragraph = paragraphs[paragraphIndex];
      const paragraphRect = paragraph.getBoundingClientRect();
      if (paragraphRect.bottom < geometry.safeTop || paragraphRect.top > geometry.safeBottom) continue;

      const unwritten = characterMap.get(paragraph).filter((character) => !character.classList.contains("is-etched"));
      if (!unwritten.length) {
        paragraph.classList.add("laser-complete");
        continue;
      }

      const lines = [];
      unwritten.forEach((character) => {
        const rect = character.getBoundingClientRect();
        if (rect.bottom < geometry.safeTop || rect.top > geometry.safeBottom) return;
        const y = rect.top + rect.height * 0.72;
        let line = lines[lines.length - 1];
        if (!line || Math.abs(line.y - y) > 3) {
          line = { y, points:[] };
          lines.push(line);
        }
        line.points.push({
          character,
          x:rect.left + rect.width,
          y
        });
      });

      const usableLines = lines.filter((line) => line.points.length).slice(0, MAX_LINES_PER_PASS);
      if (usableLines.length) return { paragraph, paragraphIndex, lines:usableLines, geometry };
    }
    return null;
  };

  const revealPoint = (point, pointIndex, lineIndex) => {
    if (point.character.classList.contains("is-etched")) return;
    point.character.classList.add("is-etched", "is-fresh");
    const glyph = point.character.textContent;
    if (glyph.trim() && ((pointIndex + lineIndex * 3) % 11 === 0 || Math.random() < 0.025)) {
      spawnParticles(point.x, point.y, false);
    }
  };

  const revealThrough = (run, line, targetIndex) => {
    for (let index = run.lastReveal + 1; index <= targetIndex; index++) {
      const point = line.points[index];
      if (point) revealPoint(point, index, run.lineIndex);
    }
    run.lastReveal = Math.max(run.lastReveal, targetIndex);
  };

  const setPhase = (run, phase, now) => {
    run.phase = phase;
    run.phaseStarted = now;
    run.phaseSeed = Math.random();
    atmosphere.dataset.phase = phase;
    atmosphere.dataset.line = String(run.lineIndex + 1);
    if (phase === "anticipate") {
      run.lastReveal = -1;
      run.writeProgress = 0;
    }
  };

  const finishRun = () => {
    if (!activeRun) return;
    const completedParagraph = activeRun.paragraph;
    const allWritten = characterMap.get(completedParagraph).every((character) => character.classList.contains("is-etched"));
    if (allWritten) completedParagraph.classList.add("laser-complete");
    activeRun = null;
    stopHum();
    setHardwareActive(false);
    hideParticles();
    setStatus("standby", "Escritor láser // listo");
    clearTimeout(scanTimer);
    scanTimer = window.setTimeout(scanForWork, 110);
  };

  const stepAnimation = (now) => {
    const run = activeRun;
    if (!run || run.version !== runVersion) return;
    animationFrame = requestAnimationFrame(stepAnimation);

    const quantizedNow = Math.floor(now / FRAME_ON_TWOS) * FRAME_ON_TWOS;
    if (quantizedNow === run.lastTick) return;
    const deltaMs = run.lastTick < 0 ? FRAME_ON_TWOS : Math.min(66, quantizedNow - run.lastTick);
    run.lastTick = quantizedNow;
    updateParticles(deltaMs);

    const line = run.lines[run.lineIndex];
    const first = line.points[0];
    const last = line.points[line.points.length - 1];
    const elapsed = quantizedNow - run.phaseStarted;
    let amount;
    let tip;

    switch (run.phase) {
      case "deploy": {
        amount = clamp(elapsed / 280, 0, 1);
        tip = pointBetween(run.geometry.pivot, first, easeOutCubic(amount));
        renderHardware(tip, run.geometry, 0.58 + amount * 0.42, false, quantizedNow);
        if (amount >= 1) setPhase(run, "anticipate", quantizedNow);
        break;
      }

      case "anticipate": {
        const duration = 100 + run.phaseSeed * 70;
        amount = clamp(elapsed / duration, 0, 1);
        tip = {
          x:first.x - (1 - amount) * 5 + Math.sin(quantizedNow * 0.045) * 0.5,
          y:first.y + Math.cos(quantizedNow * 0.039) * 0.38
        };
        renderHardware(tip, run.geometry, 0.74, false, quantizedNow);
        if (amount >= 1) {
          revealThrough(run, line, 0);
          setPhase(run, "write", quantizedNow);
        }
        break;
      }

      case "write": {
        const duration = clamp(430 + line.points.length * 7.2, 520, 1220);
        amount = clamp(elapsed / duration, 0, 1);
        const mechanicalProgress = easeInOutMass(amount);
        run.writeProgress = Math.max(run.writeProgress, mechanicalProgress);
        const scaledIndex = run.writeProgress * Math.max(0, line.points.length - 1);
        const pointIndex = Math.min(line.points.length - 1, Math.floor(scaledIndex));
        const nextIndex = Math.min(line.points.length - 1, pointIndex + 1);
        const fraction = scaledIndex - pointIndex;
        tip = pointBetween(line.points[pointIndex], line.points[nextIndex], fraction);
        tip.y += Math.sin(quantizedNow * 0.022 + run.lineIndex) * 0.52;
        tip.x += Math.sin(quantizedNow * 0.008) * 0.34;
        revealThrough(run, line, pointIndex);
        renderHardware(tip, run.geometry, 1, false, quantizedNow);
        if (amount >= 1) {
          revealThrough(run, line, line.points.length - 1);
          const direction = Math.sign(last.x - first.x) || 1;
          run.overshoot = {
            x:last.x + direction * (10 + run.phaseSeed * 5),
            y:last.y + (run.phaseSeed - 0.5) * 2.6
          };
          spawnParticles(last.x, last.y, true);
          setPhase(run, "overshoot", quantizedNow);
        }
        break;
      }

      case "overshoot": {
        amount = clamp(elapsed / 110, 0, 1);
        tip = pointBetween(last, run.overshoot, easeOutCubic(amount));
        renderHardware(tip, run.geometry, 0.92, false, quantizedNow);
        if (amount >= 1) setPhase(run, "correction", quantizedNow);
        break;
      }

      case "correction": {
        amount = clamp(elapsed / 145, 0, 1);
        const correction = easeInOutMass(amount);
        tip = pointBetween(run.overshoot, last, correction);
        tip.x += Math.sin(amount * Math.PI) * -2.4;
        renderHardware(tip, run.geometry, 0.86, false, quantizedNow);
        if (amount >= 1) setPhase(run, "settle", quantizedNow);
        break;
      }

      case "settle": {
        amount = clamp(elapsed / 105, 0, 1);
        tip = {
          x:last.x + Math.sin(quantizedNow * 0.052) * (1 - amount) * 0.9,
          y:last.y + Math.cos(quantizedNow * 0.047) * (1 - amount) * 0.6
        };
        renderHardware(tip, run.geometry, 0.78, false, quantizedNow);
        if (amount >= 1) {
          if (run.lineIndex < run.lines.length - 1) {
            run.carriageStart = last;
            run.carriageEnd = run.lines[run.lineIndex + 1].points[0];
            const horizontalDirection = Math.sign(run.carriageEnd.x - last.x) || -1;
            run.carriageControl = {
              x:last.x + horizontalDirection * Math.min(70, Math.abs(run.carriageEnd.x - last.x) * 0.28),
              y:lerp(last.y, run.carriageEnd.y, 0.38) - 8
            };
            setPhase(run, "carriage", quantizedNow);
          } else {
            run.retractStart = last;
            setPhase(run, "retract", quantizedNow);
          }
        }
        break;
      }

      case "carriage": {
        amount = clamp(elapsed / 300, 0, 1);
        const movement = easeInOutMass(amount);
        tip = quadraticPoint(run.carriageStart, run.carriageControl, run.carriageEnd, movement);
        tip.x += Math.sin(amount * Math.PI) * -5;
        renderHardware(tip, run.geometry, 0.35, true, quantizedNow);
        if (amount >= 1) {
          run.lineIndex++;
          setPhase(run, "anticipate", quantizedNow);
        }
        break;
      }

      case "retract": {
        amount = clamp(elapsed / 230, 0, 1);
        tip = pointBetween(run.retractStart, run.geometry.pivot, easeInCubic(amount));
        renderHardware(tip, run.geometry, 1 - amount * 0.74, true, quantizedNow);
        if (amount >= 1) {
          cancelAnimationFrame(animationFrame);
          finishRun();
        }
        break;
      }
    }
  };

  const startRun = (work) => {
    runVersion++;
    activeRun = {
      ...work,
      version:runVersion,
      lineIndex:0,
      phase:"deploy",
      phaseStarted:Math.floor(performance.now() / FRAME_ON_TWOS) * FRAME_ON_TWOS,
      phaseSeed:Math.random(),
      lastTick:-1,
      lastReveal:-1,
      writeProgress:0
    };
    head.classList.add("is-present");
    atmosphere.classList.add("is-present");
    setHardwareActive(true, false);
    setStatus("writing", `Grabando bloque ${work.paragraphIndex + 1} / ${paragraphs.length}`);
    startHum();
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(stepAnimation);
  };

  function scanForWork() {
    clearTimeout(scanTimer);
    if (activeRun || userRevealed || document.hidden) return;
    const work = collectVisibleRun();
    if (work) {
      startRun(work);
    } else if (!userRevealed) {
      setStatus("standby", "Escritor láser // listo");
    }
  }

  const cancelActiveRun = (message = "Escritor láser // recalibrando") => {
    if (!activeRun) return;
    runVersion++;
    activeRun = null;
    cancelAnimationFrame(animationFrame);
    stopHum();
    setHardwareActive(false);
    hideParticles();
    setStatus("standby", message);
  };

  const scheduleScan = (delay = 130) => {
    clearTimeout(scanTimer);
    scanTimer = window.setTimeout(scanForWork, delay);
  };

  const revealAll = () => {
    userRevealed = true;
    cancelActiveRun("Transmisión completa");
    stopHum();
    paragraphs.forEach((paragraph) => {
      characterMap.get(paragraph).forEach((character) => {
        character.classList.add("is-etched");
        character.classList.remove("is-fresh");
      });
      paragraph.classList.add("laser-complete");
    });
    setHardwareActive(false);
    setStatus("standby", "Transmisión completa");
  };

  const replay = () => {
    userRevealed = false;
    cancelActiveRun("Escritor láser // calibrando");
    stopHum();
    paragraphs.forEach((paragraph) => {
      paragraph.classList.remove("laser-complete", "laser-done", "laser-active", "as");
      characterMap.get(paragraph).forEach((character) => character.classList.remove("is-etched", "is-fresh"));
    });
    const geometry = getViewportGeometry();
    const firstRect = paragraphs[0].getBoundingClientRect();
    window.scrollTo({
      top:window.scrollY + firstRect.top - geometry.safeTop - 12,
      behavior:"auto"
    });
    setStatus("standby", "Escritor láser // calibrando");
    scheduleScan(90);
  };

  replayBtn.addEventListener("click", replay);
  revealBtn.addEventListener("click", revealAll);
  soundBtn.addEventListener("click", async () => {
    soundEnabled = !soundEnabled;
    soundBtn.setAttribute("aria-pressed", String(soundEnabled));
    soundBtn.textContent = `Zumbido: ${soundEnabled ? "sí" : "no"}`;
    if (soundEnabled) {
      const engine = ensureSoundEngine();
      if (!engine || !audioContext) {
        soundEnabled = false;
        soundBtn.setAttribute("aria-pressed", "false");
        soundBtn.textContent = "Zumbido: no disponible";
        soundBtn.disabled = true;
        return;
      }
      await audioContext.resume();
      startHum();
      if (!activeRun) {
        window.setTimeout(() => {
          if (!activeRun) stopHum();
        }, 560);
      }
    } else {
      stopHum();
    }
  });

  window.addEventListener("scroll", () => {
    if (activeRun) cancelActiveRun();
    updatePresence();
    scheduleScan(150);
  }, { passive:true });

  window.addEventListener("resize", () => {
    cancelActiveRun();
    scheduleScan(180);
  }, { passive:true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelActiveRun("Escritor láser // suspendido");
    } else {
      scheduleScan(120);
    }
  });

  window.addEventListener("pagehide", () => {
    cancelActiveRun();
    stopHum();
  });

  window.__laserWriterDebug = () => ({
    active:!!activeRun,
    phase:activeRun?.phase || "idle",
    line:activeRun ? activeRun.lineIndex + 1 : 0,
    lines:activeRun?.lines.length || 0,
    paragraph:activeRun ? activeRun.paragraphIndex + 1 : 0,
    soundEnabled,
    humActive:!!humVoice,
    particles:particles.filter((particle) => particle.active).length,
    etched:document.querySelectorAll(".laser-char.is-etched").length,
    characters:document.querySelectorAll(".laser-char").length
  });

  setStatus("standby", "Escritor láser // listo");
  updatePresence();
  const fontsReady = document.fonts?.ready || Promise.resolve();
  fontsReady.then(() => requestAnimationFrame(scanForWork));
})();
