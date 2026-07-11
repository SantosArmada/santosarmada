(function () {
  var enterBtn = document.getElementById("enterBtn");
  var prompt = document.getElementById("enterPrompt");
  var logo = document.getElementById("finalLogo");
  var label = document.querySelector(".hero-label");
  var backLink = document.querySelector(".back-link");
  var flash = document.getElementById("flash");
  var sound = document.getElementById("transformSound");
  var canvas = document.getElementById("growthCanvas");
  var ctx = canvas.getContext("2d");

  var w = 0;
  var h = 0;
  var dpr = 1;

  var rafId = null;
  var startTime = null;
  var running = false;

  var AUDIO_LENGTH = 4.324;
  var BEATS = [0.69, 1.67, 2.19, 2.72, 3.84];
  var LOGO_Y_OFFSET = -32;

  var tendrils = [];
  var droplets = [];

  var logoSilhouette = {
    r: [140,141,145,135,134,134,133,134,133,134,133,133,133,133,133,134,134,134,134,134,135,135,134,135,155,135,135,135,135,135,135,135,135,135,135,135,135,134,134,134,134,134,134,135,136,136,146,142,142,143,145,150,138,138,139,139,140,141,141,141,142,142,143,143,143,144,144,145,145,145,145,145,159,145,145,145,145,145,144,144,143,143,142,141,140,140,140,139,139,138,138,137,137,149,144,142]
  };

  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener("resize", resize);

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function progress(t, start, end) {
    return clamp((t - start) / (end - start), 0, 1);
  }

  function beatPulse(t, width) {
    var pulse = 0;

    for (var i = 0; i < BEATS.length; i++) {
      var d = Math.abs(t - BEATS[i]);

      if (d < width) {
        pulse = Math.max(pulse, 1 - d / width);
      }
    }

    return pulse;
  }

  function resetSymbiote() {
    tendrils = [];
    droplets = [];

    for (var i = 0; i < 16; i++) {
      tendrils.push({
        angle: (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.45,
        length: 140 + Math.random() * 270,
        width: 14 + Math.random() * 34,
        curl: (Math.random() - 0.5) * 1.9,
        phase: Math.random() * Math.PI * 2,
        speed: 0.8 + Math.random() * 1.6
      });
    }

    for (var j = 0; j < 52; j++) {
      droplets.push({
        angle: Math.random() * Math.PI * 2,
        dist: 60 + Math.random() * 380,
        size: 3 + Math.random() * 18,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function drawTriangle(cx, cy, radius, rotation, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#000";
    ctx.beginPath();

    for (var i = 0; i < 3; i++) {
      var a = rotation + (i * Math.PI * 2) / 3;
      var x = cx + Math.cos(a) * radius;
      var y = cy + Math.sin(a) * radius;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawTendril(cx, cy, item, t, strength, retract) {
    var pulse = beatPulse(t, 0.16);
    var angle = item.angle + Math.sin(t * item.speed + item.phase) * 0.2;

    var len = item.length * strength;
    len *= 1 - retract * 0.78;
    len *= 1 + pulse * 0.32;

    var thick = item.width * strength * (1 - retract * 0.55);

    if (len < 5 || thick < 1) return;

    var sx = cx + Math.cos(angle) * 34;
    var sy = cy + Math.sin(angle) * 34;

    var ex = cx + Math.cos(angle) * len;
    var ey = cy + Math.sin(angle) * len;

    var c1x = cx + Math.cos(angle + item.curl) * len * 0.42;
    var c1y = cy + Math.sin(angle + item.curl) * len * 0.42;

    var c2x = cx + Math.cos(angle - item.curl * 0.45) * len * 0.78;
    var c2y = cy + Math.sin(angle - item.curl * 0.45) * len * 0.78;

    ctx.save();
    ctx.strokeStyle = "#000";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.globalAlpha = 0.96;
    ctx.lineWidth = thick;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.bezierCurveTo(c1x, c1y, c2x, c2y, ex, ey);
    ctx.stroke();

    ctx.globalAlpha = 0.38;
    ctx.lineWidth = thick * 0.42;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.bezierCurveTo(c1x, c1y, c2x, c2y, ex, ey);
    ctx.stroke();

    ctx.restore();
  }

  function drawDroplets(cx, cy, t, strength, retract) {
    ctx.save();
    ctx.fillStyle = "#000";

    droplets.forEach(function (d) {
      var pulse = beatPulse(t, 0.18);
      var pullBack = 1 - retract * 0.88;

      var dist = d.dist * strength * pullBack * (1 + pulse * 0.18);
      var angle = d.angle + Math.sin(t * 2 + d.phase) * 0.25;

      var x = cx + Math.cos(angle) * dist;
      var y = cy + Math.sin(angle) * dist;
      var size = d.size * strength * (1 - retract * 0.55);

      if (size < 0.6) return;

      ctx.globalAlpha = 0.5 * strength;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  function organicRadius(angle, base, t, pulse) {
    var n1 = Math.sin(angle * 3 + t * 5.0) * 0.13;
    var n2 = Math.sin(angle * 7 - t * 4.2) * 0.08;
    var n3 = Math.sin(angle * 13 + t * 6.5) * 0.045;

    return base * (1 + n1 + n2 + n3 + pulse * 0.13);
  }

  function drawOrganicMass(cx, cy, base, t, alpha, spikeAmount) {
    var pulse = beatPulse(t, 0.18);
    var points = 190;

    ctx.save();
    ctx.fillStyle = "#000";
    ctx.globalAlpha = alpha;

    ctx.beginPath();

    for (var i = 0; i <= points; i++) {
      var a = (i / points) * Math.PI * 2;

      var spike =
        Math.pow(Math.max(0, Math.cos(a * 9 + t * 0.8)), 18) *
        spikeAmount *
        base;

      var r = organicRadius(a, base, t, pulse) + spike;

      var x = cx + Math.cos(a) * r;
      var y = cy + Math.sin(a) * r;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();

    ctx.globalAlpha = alpha * 0.28;
    ctx.beginPath();

    for (var j = 0; j <= points; j++) {
      var aa = (j / points) * Math.PI * 2;
      var rr = organicRadius(aa, base * 0.68, t + 0.5, pulse);

      var xx = cx + Math.cos(aa) * rr;
      var yy = cy + Math.sin(aa) * rr;

      if (j === 0) ctx.moveTo(xx, yy);
      else ctx.lineTo(xx, yy);
    }

    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  function drawSpikyCircle(cx, cy, t, alpha) {
    var base = Math.min(w, h) * 0.185;
    var pulse = beatPulse(t, 0.18);
    var points = 220;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#000";
    ctx.beginPath();

    for (var i = 0; i <= points; i++) {
      var a = (i / points) * Math.PI * 2;

      var spikes = Math.pow(Math.max(0, Math.cos(a * 12 - t * 2)), 12);

      var r = base;
      r += Math.sin(a * 5 + t * 5) * base * 0.035;
      r += spikes * base * 0.46;
      r += pulse * base * 0.075;

      var x = cx + Math.cos(a) * r;
      var y = cy + Math.sin(a) * r;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function sampleLogoRadius(index, total) {
    var raw = logoSilhouette.r;
    var pos = (index / total) * raw.length;
    var i0 = Math.floor(pos) % raw.length;
    var i1 = (i0 + 1) % raw.length;
    var f = pos - Math.floor(pos);

    return raw[i0] + (raw[i1] - raw[i0]) * f;
  }

  function drawLogoMorph(cx, cy, t, amount) {
    var total = 144;
    var logoWidth = Math.min(window.innerWidth * 0.78, 760);
    var targetBase = logoWidth * 0.5;

    var raw = logoSilhouette.r;
    var mean =
      raw.reduce(function (sum, value) {
        return sum + value;
      }, 0) / raw.length;

    var circleBase = Math.min(w, h) * 0.185;

    ctx.save();
    ctx.fillStyle = "#000";
    ctx.globalAlpha = 1;
    ctx.beginPath();

    for (var i = 0; i <= total; i++) {
      var idx = i % total;
      var a = (idx / total) * Math.PI * 2;

      var spike =
        Math.pow(Math.max(0, Math.cos(a * 8 - t)), 14) *
        circleBase *
        0.42;

      var fromR =
        circleBase +
        spike +
        Math.sin(a * 5 + t * 4) * circleBase * 0.035;

      var toR = (sampleLogoRadius(idx, total) / mean) * targetBase;

      var eased = easeInOutCubic(amount);
      var r = fromR + (toR - fromR) * eased;

      var x = cx + Math.cos(a) * r;
      var y = cy + Math.sin(a) * r;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawFrame(now) {
    if (!running) return;

    if (startTime === null) startTime = now;

    var t = (now - startTime) / 1000;
    var cx = w / 2;
    var cy = h / 2;

    ctx.clearRect(0, 0, w, h);

    var intro = progress(t, 0.0, 0.42);
    var spread = progress(t, 0.32, 1.55);
    var lash = progress(t, 1.0, 2.72);
    var retract = progress(t, 2.35, 3.45);
    var spike = progress(t, 3.05, 3.84);
    var morph = progress(t, 3.84, AUDIO_LENGTH);

    if (t < 0.5) {
      drawTriangle(
        cx,
        cy,
        26 + easeOutCubic(intro) * 86,
        -Math.PI / 2 + t * 1.35,
        easeOutCubic(intro)
      );
    }

    var massBase = 38 + easeOutCubic(spread) * Math.min(w, h) * 0.2;
    massBase *= 1 - retract * 0.34;

    var tendrilStrength = easeOutCubic(spread) * (1 - retract * 0.82);
    var dropletStrength = clamp(lash * 1.25, 0, 1) * (1 - retract * 0.95);

    tendrils.forEach(function (item) {
      drawTendril(cx, cy, item, t, tendrilStrength, retract);
    });

    drawDroplets(cx, cy, t, dropletStrength, retract);

    if (t < 3.84) {
      drawOrganicMass(cx, cy, massBase, t, 1, spike * 0.55);
    }

    if (t >= 3.05 && t < 4.04) {
      drawSpikyCircle(cx, cy, t, spike);
    }

    if (t >= 3.84) {
      drawLogoMorph(cx, cy + LOGO_Y_OFFSET * morph, t, morph);
    }

    if (t < AUDIO_LENGTH) {
      rafId = requestAnimationFrame(drawFrame);
    } else {
      finishTransition();
    }
  }

  function fadeOutAudio(audio, duration) {
    if (!audio) return;

    var startVolume = audio.volume;
    var start = null;

    function step(now) {
      if (start === null) start = now;

      var t = Math.min((now - start) / duration, 1);
      audio.volume = startVolume * (1 - t);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = startVolume;
      }
    }

    requestAnimationFrame(step);
  }

  function finishTransition() {
    running = false;

    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    if (flash) {
      flash.classList.remove("hit");
      void flash.offsetWidth;
      flash.classList.add("hit");
    }

    if (canvas) canvas.classList.add("done");
    if (logo) logo.classList.add("show");
    if (label) label.classList.add("show");
    if (backLink) backLink.classList.add("show");

    fadeOutAudio(sound, 180);
  }

  if (enterBtn) {
    setTimeout(function () {
      enterBtn.classList.add("grown");
    }, 250);

    enterBtn.addEventListener("click", function (e) {
      e.preventDefault();

      enterBtn.classList.add("btn--clicked");

      document.querySelectorAll(".color").forEach(function (el) {
        el.classList.add("expanded");
      });

      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(function () {});
      }

      if (canvas) canvas.classList.remove("done");
      if (logo) logo.classList.remove("show");
      if (label) label.classList.remove("show");
      if (backLink) backLink.classList.remove("show");

      resetSymbiote();

      startTime = null;
      running = true;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(drawFrame);

      setTimeout(function () {
        prompt.classList.add("hide");
      }, 400);

      setTimeout(function () {
        enterBtn.classList.remove("btn--clicked");
      }, 3500);

      setTimeout(function () {
        document.querySelectorAll(".color").forEach(function (el) {
          el.classList.remove("expanded");
        });
      }, 1700);
    });
  }
})();