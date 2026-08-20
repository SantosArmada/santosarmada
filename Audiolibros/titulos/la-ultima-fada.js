var Framer = {

    countTicks: 360,
    frequencyData: [],
    tickSize: 10,
    PI: 360,
    index: 0,
    loadingAngle: 0,

    init: function (scene) {
        this.canvas = document.querySelector('canvas');
        this.scene = scene;
        this.context = scene.context;
        this.configure();
    },

    configure: function () {
        this.maxTickSize = this.tickSize * 9 * this.scene.scaleCoef;
        this.countTicks = 360 * Scene.scaleCoef;
    },

    draw: function () {
        this.drawTicks();
        this.drawEdging();
    },

    drawTicks: function () {
        this.context.save();
        this.context.beginPath();
        this.context.lineWidth = 1;
        this.ticks = this.getTicks(this.countTicks, this.tickSize, [0, 90]);
        for (var i = 0, len = this.ticks.length; i < len; ++i) {
            var tick = this.ticks[i];
            this.drawTick(tick.x1, tick.y1, tick.x2, tick.y2);
        }
        this.context.restore();
    },

    drawTick: function (x1, y1, x2, y2) {
        var dx1 = parseInt(this.scene.cx + x1);
        var dy1 = parseInt(this.scene.cy + y1);
        var dx2 = parseInt(this.scene.cx + x2);
        var dy2 = parseInt(this.scene.cy + y2);

        var gradient = this.context.createLinearGradient(dx1, dy1, dx2, dy2);
        gradient.addColorStop(0, '#2A8CD4');
        gradient.addColorStop(0.6, '#2A8CD4');
        gradient.addColorStop(1, '#ECDFC0');
        this.context.beginPath();
        this.context.strokeStyle = gradient;
        this.context.lineWidth = 2;
        this.context.moveTo(this.scene.cx + x1, this.scene.cx + y1);
        this.context.lineTo(this.scene.cx + x2, this.scene.cx + y2);
        this.context.stroke();
    },

    setLoadingPercent: function (percent) {
        this.loadingAngle = percent * 2 * Math.PI;
    },

    drawEdging: function () {
        this.context.save();
        this.context.beginPath();
        this.context.strokeStyle = 'rgba(42, 140, 212, 0.5)';
        this.context.lineWidth = 1;

        var offset = Tracker.lineWidth / 2;
        this.context.moveTo(this.scene.padding + 2 * this.scene.radius - Tracker.innerDelta - offset, this.scene.padding + this.scene.radius);
        this.context.arc(this.scene.cx, this.scene.cy, this.scene.radius - Tracker.innerDelta - offset, 0, this.loadingAngle, false);

        this.context.stroke();
        this.context.restore();
    },

    getTicks: function (count, size, animationParams) {
        size = 10;
        var ticks = this.getTickPoitns(count);
        var x1, y1, x2, y2, m = [], tick, k;
        var lesser = 160;
        var allScales = [];
        for (var i = 0, len = ticks.length; i < len; ++i) {
            var coef = 1 - i / (len * 2.5);
            var delta = ((this.frequencyData[i] || 0) - lesser * coef) * this.scene.scaleCoef;
            if (delta < 0) { delta = 0; }
            tick = ticks[i];
            if (animationParams[0] <= tick.angle && tick.angle <= animationParams[1]) {
                k = this.scene.radius / (this.scene.radius - this.getSize(tick.angle, animationParams[0], animationParams[1]) - delta);
            } else {
                k = this.scene.radius / (this.scene.radius - (size + delta));
            }
            x1 = tick.x * (this.scene.radius - size);
            y1 = tick.y * (this.scene.radius - size);
            x2 = x1 * k;
            y2 = y1 * k;
            m.push({ x1: x1, y1: y1, x2: x2, y2: y2 });
            if (i < 20) {
                var scale = delta / 50;
                scale = scale < 1 ? 1 : scale;
                allScales.push(scale);
            }
        }
        var sum = allScales.reduce(function (pv, cv) { return pv + cv; }, 0) / allScales.length;
        this.canvas.style.transform = 'scale(' + sum + ')';
        return m;
    },

    getSize: function (angle, l, r) {
        var m = (r - l) / 2;
        var x = (angle - l);
        var h;
        if (x == m) { return this.maxTickSize; }
        var d = Math.abs(m - x);
        var v = 70 * Math.sqrt(1 / d);
        if (v > this.maxTickSize) {
            h = this.maxTickSize - d;
        } else {
            h = Math.max(this.tickSize, v);
        }
        if (this.index > this.count) { this.index = 0; }
        return h;
    },

    getTickPoitns: function (count) {
        var coords = [], step = this.PI / count;
        for (var deg = 0; deg < this.PI; deg += step) {
            var rad = deg * Math.PI / (this.PI / 2);
            coords.push({ x: Math.cos(rad), y: -Math.sin(rad), angle: deg });
        }
        return coords;
    }
};

var Tracker = {

    innerDelta: 20,
    lineWidth: 7,
    prevAngle: 0.5,
    angle: 0,
    animationCount: 10,
    pressButton: false,

    init: function (scene) {
        this.scene = scene;
        this.context = scene.context;
        this.initHandlers();
    },

    initHandlers: function () {
        var that = this;

        this.scene.canvas.addEventListener('mousedown', function (e) {
            if (that.isInsideOfSmallCircle(e) || that.isOusideOfBigCircle(e)) { return; }
            that.prevAngle = that.angle;
            that.pressButton = true;
            that.stopAnimation();
            that.calculateAngle(e, true);
        });

        window.addEventListener('mouseup', function () {
            if (!that.pressButton) { return; }
            var id = setInterval(function () {
                if (!that.animatedInProgress) {
                    that.pressButton = false;
                    if (Player.audio && Player.audio.duration) {
                        Player.audio.currentTime = that.angle / (2 * Math.PI) * Player.audio.duration;
                    }
                    clearInterval(id);
                }
            }, 100);
        });

        window.addEventListener('mousemove', function (e) {
            if (that.animatedInProgress) { return; }
            if (that.pressButton && that.scene.inProcess()) {
                that.calculateAngle(e);
            }
        });
    },

    isInsideOfSmallCircle: function (e) {
        var x = Math.abs(e.pageX - this.scene.cx - this.scene.coord.left);
        var y = Math.abs(e.pageY - this.scene.cy - this.scene.coord.top);
        return Math.sqrt(x * x + y * y) < this.scene.radius - 3 * this.innerDelta;
    },

    isOusideOfBigCircle: function (e) {
        return Math.abs(e.pageX - this.scene.cx - this.scene.coord.left) > this.scene.radius ||
            Math.abs(e.pageY - this.scene.cy - this.scene.coord.top) > this.scene.radius;
    },

    draw: function () {
        if (!Player.audio || !Player.audio.duration || isNaN(Player.audio.duration)) { return; }
        if (!this.pressButton) {
            this.angle = (Player.audio.currentTime / Player.audio.duration) * 2 * Math.PI || 0;
        }
        this.drawArc();
    },

    drawArc: function () {
        this.context.save();
        this.context.strokeStyle = 'rgba(42, 140, 212, 0.8)';
        this.context.beginPath();
        this.context.lineWidth = this.lineWidth;

        this.r = this.scene.radius - (this.innerDelta + this.lineWidth / 2);
        this.context.arc(
            this.scene.radius + this.scene.padding,
            this.scene.radius + this.scene.padding,
            this.r, 0, this.angle, false
        );
        this.context.stroke();
        this.context.restore();
    },

    calculateAngle: function (e, animatedInProgress) {
        this.animatedInProgress = animatedInProgress;
        this.mx = e.pageX;
        this.my = e.pageY;
        this.angle = Math.atan((this.my - this.scene.cy - this.scene.coord.top) / (this.mx - this.scene.cx - this.scene.coord.left));
        if (this.mx < this.scene.cx + this.scene.coord.left) { this.angle = Math.PI + this.angle; }
        if (this.angle < 0) { this.angle += 2 * Math.PI; }
        if (animatedInProgress) {
            this.startAnimation();
        } else {
            this.prevAngle = this.angle;
        }
    },

    startAnimation: function () {
        var that = this;
        var angle = this.angle;
        var l = Math.abs(this.angle) - Math.abs(this.prevAngle);
        var step = l / this.animationCount, i = 0;
        var f = function () {
            that.angle += step;
            if (++i == that.animationCount) {
                that.angle = angle;
                that.prevAngle = angle;
                that.animatedInProgress = false;
            } else {
                that.animateId = setTimeout(f, 20);
            }
        };
        this.angle = this.prevAngle;
        this.animateId = setTimeout(f, 20);
    },

    stopAnimation: function () {
        clearTimeout(this.animateId);
        this.animatedInProgress = false;
    }
};

var Scene = {

    padding: 120,
    minSize: 740,
    optimiseHeight: 982,
    _inProcess: false,

    init: function () {
        this.canvasConfigure();
        this.initHandlers();
        Framer.init(this);
        Tracker.init(this);
        Controls.init(this);
        this.startRender();
    },

    canvasConfigure: function () {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.context.strokeStyle = '#2A8CD4';
        this.calculateSize();
    },

    calculateSize: function () {
        this.scaleCoef = Math.max(0.5, 740 / this.optimiseHeight);
        var size = Math.max(this.minSize, 1);
        this.canvas.setAttribute('width', size);
        this.canvas.setAttribute('height', size);
        this.width = size;
        this.height = size;
        this.radius = (size - this.padding * 2) / 2;
        this.cx = this.radius + this.padding;
        this.cy = this.radius + this.padding;
        this.coord = this.canvas.getBoundingClientRect();
    },

    initHandlers: function () {
        var that = this;
        window.onresize = function () {
            that.canvasConfigure();
            Framer.configure();
            that.render();
        };
    },

    render: function () {
        var that = this;
        requestAnimationFrame(function () {
            that.clear();
            that.draw();
            if (that._inProcess) { that.render(); }
        });
    },

    clear: function () { this.context.clearRect(0, 0, this.width, this.height); },

    draw: function () {
        Framer.draw();
        Tracker.draw();
        Controls.draw();
    },

    startRender: function () { this._inProcess = true; this.render(); },
    stopRender: function () { this._inProcess = false; },
    inProcess: function () { return this._inProcess; }
};

var Controls = {

    playing: false,

    init: function (scene) {
        this.scene = scene;
        this.context = scene.context;
        this.initHandlers();
        this.timeControl = document.querySelector('.time');
    },

    initHandlers: function () {
        this.initPlayButton();
        this.initPauseButton();
        this.initSoundButton();
        this.initPrevSongButton();
        this.initNextSongButton();
        this.initTimeHandler();
    },

    initPlayButton: function () {
        var that = this;
        this.playButton = document.querySelector('.play');
        this.playButton.addEventListener('mouseup', function () {
            that.playButton.style.display = 'none';
            that.pauseButton.style.display = 'inline-block';
            Player.play();
            that.playing = true;
        });
    },

    initPauseButton: function () {
        var that = this;
        this.pauseButton = document.querySelector('.pause');
        this.pauseButton.addEventListener('mouseup', function () {
            that.playButton.style.display = 'inline-block';
            that.pauseButton.style.display = 'none';
            Player.pause();
            that.playing = false;
        });
    },

    initSoundButton: function () {
        var that = this;
        this.soundButton = document.querySelector('.soundControl');
        this.soundButton.addEventListener('mouseup', function () {
            if (that.soundButton.classList.contains('disable')) {
                Player.unmute();
            } else {
                Player.mute();
            }
        });
    },

    initPrevSongButton: function () {
        var that = this;
        this.prevSongButton = document.querySelector('.prevSong');
        this.prevSongButton.addEventListener('mouseup', function () {
            Chapters.prev();
            that.playing && Player.play();
        });
    },

    initNextSongButton: function () {
        var that = this;
        this.nextSongButton = document.querySelector('.nextSong');
        this.nextSongButton.addEventListener('mouseup', function () {
            Chapters.next();
            that.playing && Player.play();
        });
    },

    initTimeHandler: function () {
        var that = this;
        setTimeout(function () {
            var rawTime = parseInt((Player.audio && Player.audio.currentTime) || 0);
            var secondsInMin = 60;
            var min = parseInt(rawTime / secondsInMin);
            var seconds = rawTime - min * secondsInMin;
            if (min < 10) { min = '0' + min; }
            if (seconds < 10) { seconds = '0' + seconds; }
            that.timeControl.textContent = min + ':' + seconds;
            that.initTimeHandler();
        }, 300);
    },

    draw: function () { this.drawPic(); },

    drawPic: function () {
        this.context.save();
        this.context.beginPath();
        this.context.fillStyle = 'rgba(42, 140, 212, 0.9)';
        this.context.lineWidth = 1;
        var x = Tracker.r / Math.sqrt(Math.pow(Math.tan(Tracker.angle), 2) + 1);
        var y = Math.sqrt(Tracker.r * Tracker.r - x * x);
        if (this.getQuadrant() == 2) { x = -x; }
        if (this.getQuadrant() == 3) { x = -x; y = -y; }
        if (this.getQuadrant() == 4) { y = -y; }
        this.context.arc(this.scene.radius + this.scene.padding + x, this.scene.radius + this.scene.padding + y, 10, 0, Math.PI * 2, false);
        this.context.fill();
        this.context.restore();
    },

    getQuadrant: function () {
        if (0 <= Tracker.angle && Tracker.angle < Math.PI / 2) { return 1; }
        if (Math.PI / 2 <= Tracker.angle && Tracker.angle < Math.PI) { return 2; }
        if (Math.PI < Tracker.angle && Tracker.angle < Math.PI * 3 / 2) { return 3; }
        if (Math.PI * 3 / 2 <= Tracker.angle && Tracker.angle <= Math.PI * 2) { return 4; }
    }
};

/* ---------------------------------------------------------
   PLAYER — built on top of a real <audio> element so the
   scrubber works. Swap audio.src per chapter once each one
   is recorded.
--------------------------------------------------------- */
var Player = {

    audio: null,
    context: null,

    init: function () {
        this.audio = document.getElementById('chapterAudio');
        window.AudioContext = window.AudioContext || window.webkitAudioContext;

        try {
            this.context = new AudioContext();
            this.source = this.context.createMediaElementSource(this.audio);
            this.analyser = this.context.createAnalyser();
            this.analyser.smoothingTimeConstant = 0.6;
            this.analyser.fftSize = 2048;
            this.gainNode = this.context.createGain();

            this.javascriptNode = this.context.createScriptProcessor(2048, 1, 1);
            this.javascriptNode.connect(this.context.destination);
            this.analyser.connect(this.javascriptNode);

            this.source.connect(this.gainNode);
            this.gainNode.connect(this.analyser);
            this.gainNode.connect(this.context.destination);

            this.javascriptNode.onaudioprocess = function () {
                Framer.frequencyData = new Uint8Array(Player.analyser.frequencyBinCount);
                Player.analyser.getByteFrequencyData(Framer.frequencyData);
            };
        } catch (e) {
            /* Visualizer bars just won't react to frequency data; playback still works. */
        }

        Framer.setLoadingPercent(1);
        Scene.init();
    },

    play: function () {
        this.context && this.context.resume && this.context.resume();
        this.audio.play();
    },

    pause: function () {
        this.audio.pause();
    },

    mute: function () {
        this._lastVol = (window.VolumeDial ? VolumeDial.vol : 1) || 1;
        if (window.VolumeDial) { VolumeDial.setVol(0); }
        else { this.setVolume(0); }
    },

    unmute: function () {
        if (window.VolumeDial) { VolumeDial.setVol(this._lastVol || 1); }
        else { this.setVolume(1); }
    },

    setVolume: function (v) {
        v = Math.max(0, Math.min(1, v));
        if (this.gainNode) { this.gainNode.gain.value = v; }
        this.audio.muted = (v <= 0);
        var soundBtn = document.querySelector('.soundControl');
        if (soundBtn) { soundBtn.classList.toggle('disable', v <= 0); }
    },

    seek: function (seconds) {
        this.audio.currentTime = seconds;
    }
};

/* ---------------------------------------------------------
   VOLUME DIAL — vanilla-JS rotary dial. Drag the knob (or use
   arrow keys once it has focus) to set volume; wired straight
   into Player.setVolume.
--------------------------------------------------------- */
var VolumeDial = {

    minAngle: -135,
    maxAngle: 135,
    ticks: 20,
    vol: 1,
    dragging: false,

    init: function () {
        this.el = document.getElementById('volumeDial');
        if (!this.el) { return; }
        this.knob = this.el.querySelector('.volume-dial__knob');
        this.wrap = this.el.querySelector('.volume-dial__wrap');
        this.dotsWrap = this.el.querySelector('.volume-dial__control');
        this.buildDots();
        this.render();
        this.bindDrag();
        this.bindKeys();
    },

    buildDots: function () {
        var span = this.maxAngle - this.minAngle;
        var sector = span / this.ticks;
        var offset = -span / 2 + sector / 2;
        var frag = document.createDocumentFragment();
        this.dots = [];
        for (var i = 0; i < this.ticks; i++) {
            var d = document.createElement('div');
            d.className = 'volume-dial__dot';
            d.style.transform = 'rotate(' + (sector * i + offset) + 'deg)';
            frag.appendChild(d);
            this.dots.push(d);
        }
        this.dotsWrap.insertBefore(frag, this.wrap);
    },

    angleFromVol: function (v) { return this.minAngle + v * (this.maxAngle - this.minAngle); },
    volFromAngle: function (a) { return (a - this.minAngle) / (this.maxAngle - this.minAngle); },

    setVol: function (v, propagate) {
        this.vol = Math.max(0, Math.min(1, v));
        this.render();
        if (propagate !== false) { Player.setVolume(this.vol); }
    },

    render: function () {
        var angle = this.angleFromVol(this.vol);
        this.knob.style.transform = 'rotate(' + angle + 'deg)';
        var tick = this.vol * this.ticks;
        this.dots.forEach(function (d, i) {
            d.classList.toggle('volume-dial__dot--filled', i < tick - 0.5);
        });
    },

    bindDrag: function () {
        var that = this;
        function angleFromEvent(e) {
            var rect = that.wrap.getBoundingClientRect();
            var cx = rect.left + rect.width / 2;
            var cy = rect.top + rect.height / 2;
            var deg = Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI + 90;
            if (deg > 180) { deg -= 360; }
            if (deg < -180) { deg += 360; }
            return Math.max(that.minAngle, Math.min(that.maxAngle, deg));
        }
        this.knob.addEventListener('pointerdown', function (e) {
            that.dragging = true;
            that.knob.setPointerCapture(e.pointerId);
        });
        this.knob.addEventListener('pointermove', function (e) {
            if (!that.dragging) { return; }
            that.setVol(that.volFromAngle(angleFromEvent(e)));
        });
        ['pointerup', 'pointercancel'].forEach(function (evt) {
            that.knob.addEventListener(evt, function () { that.dragging = false; });
        });
    },

    bindKeys: function () {
        var that = this;
        this.knob.addEventListener('keydown', function (e) {
            var step = 1 / that.ticks;
            if (e.code === 'ArrowUp' || e.code === 'ArrowRight') {
                e.preventDefault();
                that.setVol(that.vol + step);
            } else if (e.code === 'ArrowDown' || e.code === 'ArrowLeft') {
                e.preventDefault();
                that.setVol(that.vol - step);
            }
        });
    }
};

/* ---------------------------------------------------------
   POWER BUTTON — on/off toggle. Turns the player (and the
   volume dial) off: pauses playback and dims/disables both
   until switched back on.
--------------------------------------------------------- */
var PlayerPower = {

    on: true,

    init: function () {
        this.btn = document.getElementById('powerBtn');
        if (!this.btn) { return; }
        var that = this;
        this.btn.addEventListener('click', function () { that.set(!that.on); });
    },

    set: function (on) {
        this.on = on;
        this.btn.setAttribute('aria-pressed', on ? 'true' : 'false');

        var playerEl = document.querySelector('.player');
        if (playerEl) { playerEl.classList.toggle('powered-off', !on); }

        var dial = document.getElementById('volumeDial');
        if (dial) { dial.classList.toggle('powered-off', !on); }

        if (!on) {
            Player.pause();
            document.querySelector('.play').style.display = 'inline-block';
            document.querySelector('.pause').style.display = 'none';
            Controls.playing = false;
        }
    }
};

/* ---------------------------------------------------------
   CHAPTERS — reads every .chapter element's data-time, wires
   clicks + prev/next transport buttons to seek the audio and
   updates the "now playing" label. Timestamps default to 0
   until you fill in the real ones per chapter.
--------------------------------------------------------- */
var Chapters = {

    list: [],
    index: 0,

    init: function () {
        var that = this;
        this.list = Array.prototype.slice.call(document.querySelectorAll('.chapter'));
        this.list.forEach(function (el, i) {
            el.addEventListener('click', function () {
                that.goTo(i);
            });
        });
    },

    goTo: function (i) {
        if (!this.list.length) { return; }
        this.index = ((i % this.list.length) + this.list.length) % this.list.length;
        var el = this.list[this.index];
        var time = parseFloat(el.getAttribute('data-time') || '0');
        Player.seek(time);
        Player.play();
        document.querySelector('.play').style.display = 'none';
        document.querySelector('.pause').style.display = 'inline-block';
        Controls.playing = true;
        document.querySelector('.song .name').textContent = el.textContent;
        this.highlight(this.index);
    },

    next: function () { this.goTo(this.index + 1); },
    prev: function () { this.goTo(this.index - 1); },

    highlight: function (i) {
        this.list.forEach(function (el, idx) {
            el.classList.toggle('active', idx === i);
        });
    }
};

/* ---------------------------------------------------------
   PANEL COLLAPSE — the little "x" on the cover toggles the
   synopsis/chapters/reviews text so the reader can focus on
   just the artwork + player if they want.
--------------------------------------------------------- */
function initPanelToggle() {
    var closeBtn = document.querySelector('.x');
    var panel = document.querySelector('.panel');
    if (!closeBtn || !panel) { return; }
    closeBtn.addEventListener('click', function () {
        panel.classList.toggle('collapsed');
    });
}

/* "ESCUCHA AHORA" ribbon under the cover jumps down to the player */
function initListenNowRibbon() {
    var box = document.querySelector('.controls .box');
    var playerSection = document.querySelector('.player-section');
    if (!box || !playerSection) { return; }
    box.addEventListener('click', function () {
        playerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

/* ---------------------------------------------------------
   READ-PROGRESS SCROLL — fill along the side rail tracks how
   far down the page you've scrolled.
--------------------------------------------------------- */
function initProgressScroll() {
    var fill = document.querySelector('.progress-fill');
    if (!fill) { return; }
    function update() {
        var doc = document.documentElement;
        var scrollTop = window.pageYOffset || doc.scrollTop || document.body.scrollTop;
        var scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
        var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        fill.style.height = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
}

/* ---------------------------------------------------------
   MOBILE NAV
--------------------------------------------------------- */
function initMobileNav() {
    var hamburger = document.getElementById('siteHamburger');
    var menu = document.getElementById('siteMobileMenu');
    if (!hamburger || !menu) { return; }
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            hamburger.classList.remove('open');
            menu.classList.remove('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    Player.init();
    VolumeDial.init();
    PlayerPower.init();
    Chapters.init();
    initPanelToggle();
    initListenNowRibbon();
    initProgressScroll();
    initMobileNav();
});
