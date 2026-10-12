var Framer = {

    countTicks: 360,
    frequencyData: [],
    tickSize: 10,
    PI: 360,
    index: 0,
    loadingAngle: 0,

    init: function (scene) {
        this.canvas = document.querySelector('.player canvas');
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
        gradient.addColorStop(0, '#B7E52D');
        gradient.addColorStop(0.6, '#B7E52D');
        gradient.addColorStop(1, '#EAF2CC');
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
        this.context.strokeStyle = 'rgba(220, 185, 105, 0.5)';
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

        this.scene.canvas.addEventListener('pointerdown', function (e) {
            if (that.isInsideOfSmallCircle(e) || that.isOusideOfBigCircle(e)) { return; }
            e.preventDefault();
            that.scene.canvas.setPointerCapture(e.pointerId);
            that.prevAngle = that.angle;
            that.pressButton = true;
            that.stopAnimation();
            that.calculateAngle(e, true);
        });

        function finishSeek() {
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
        }
        this.scene.canvas.addEventListener('pointerup', finishSeek);
        this.scene.canvas.addEventListener('pointercancel', finishSeek);

        this.scene.canvas.addEventListener('pointermove', function (e) {
            if (that.animatedInProgress) { return; }
            if (that.pressButton && that.scene.inProcess()) {
                that.calculateAngle(e);
            }
        });
    },

    pointerPosition: function (e) {
        var rect = this.scene.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * (this.scene.canvas.width / rect.width),
            y: (e.clientY - rect.top) * (this.scene.canvas.height / rect.height)
        };
    },

    isInsideOfSmallCircle: function (e) {
        var point = this.pointerPosition(e);
        var x = Math.abs(point.x - this.scene.cx);
        var y = Math.abs(point.y - this.scene.cy);
        return Math.sqrt(x * x + y * y) < this.scene.radius - 3 * this.innerDelta;
    },

    isOusideOfBigCircle: function (e) {
        var point = this.pointerPosition(e);
        return Math.abs(point.x - this.scene.cx) > this.scene.radius ||
            Math.abs(point.y - this.scene.cy) > this.scene.radius;
    },

    draw: function () {
        var hasTrack = Player.audio && Player.audio.duration && !isNaN(Player.audio.duration);
        if (hasTrack && !this.pressButton) {
            this.angle = (Player.audio.currentTime / Player.audio.duration) * 2 * Math.PI || 0;
        }
        this.drawArc();
    },

    drawArc: function () {
        this.context.save();
        this.context.beginPath();
        this.context.lineWidth = this.lineWidth;

        this.r = this.scene.radius - (this.innerDelta + this.lineWidth / 2);
        this.context.strokeStyle = 'rgba(220, 185, 105, 0.3)';
        this.context.arc(
            this.scene.radius + this.scene.padding,
            this.scene.radius + this.scene.padding,
            this.r, 0, Math.PI * 2, false
        );
        this.context.stroke();
        this.context.beginPath();
        this.context.strokeStyle = 'rgba(220, 185, 105, 0.8)';
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
        var point = this.pointerPosition(e);
        this.mx = point.x;
        this.my = point.y;
        this.angle = Math.atan((this.my - this.scene.cy) / (this.mx - this.scene.cx));
        if (this.mx < this.scene.cx) { this.angle = Math.PI + this.angle; }
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
        this.canvas = document.querySelector('.player canvas');
        this.context = this.canvas.getContext('2d');
        this.context.strokeStyle = '#B7E52D';
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
            if (!that.inProcess()) { that.render(); }
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

    bindAction: function (element, action) {
        element.addEventListener('click', action);
        element.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                action();
            }
        });
    },

    initPlayButton: function () {
        var that = this;
        this.playButton = document.querySelector('.play');
        this.bindAction(this.playButton, function () {
            that.playButton.style.display = 'none';
            that.pauseButton.style.display = 'inline-block';
            Player.play();
            that.playing = true;
        });
    },

    initPauseButton: function () {
        var that = this;
        this.pauseButton = document.querySelector('.pause');
        this.bindAction(this.pauseButton, function () {
            that.playButton.style.display = 'inline-block';
            that.pauseButton.style.display = 'none';
            Player.pause();
            that.playing = false;
        });
    },

    initSoundButton: function () {
        var that = this;
        this.soundButton = document.querySelector('.soundControl');
        this.bindAction(this.soundButton, function () {
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
        this.bindAction(this.prevSongButton, function () {
            Chapters.prev();
            that.playing && Player.play();
        });
    },

    initNextSongButton: function () {
        var that = this;
        this.nextSongButton = document.querySelector('.nextSong');
        this.bindAction(this.nextSongButton, function () {
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
        this.context.fillStyle = 'rgba(220, 185, 105, 0.9)';
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
        this.audio.addEventListener('ended', function () {
            Controls.playing = false;
            document.querySelector('.play').style.display = 'inline-block';
            document.querySelector('.pause').style.display = 'none';
        });
        this.audio.addEventListener('loadedmetadata', function () {
            document.getElementById('audioStatus').textContent = '';
        });
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
        function resetTransport() {
            Controls.playing = false;
            document.querySelector('.play').style.display = 'inline-block';
            document.querySelector('.pause').style.display = 'none';
        }
        if (!PlayerPower.on || !(this.audio.currentSrc || this.audio.getAttribute('src') || this.audio.querySelector('source[src]'))) {
            document.getElementById('audioStatus').textContent = PlayerPower.on ? 'Grabación próximamente' : 'Reproductor apagado';
            Promise.resolve().then(resetTransport);
            return;
        }
        if (this.context && this.context.resume) {
            this.context.resume().catch(function () {});
        }
        var playback = this.audio.play();
        if (playback && playback.catch) {
            playback.catch(function () {
                resetTransport();
                document.getElementById('audioStatus').textContent = 'No se pudo reproducir. Inténtalo de nuevo.';
            });
        }
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
        else { this.audio.volume = v; }
        this.audio.muted = (v <= 0);
        var soundBtn = document.querySelector('.soundControl');
        if (soundBtn) {
            soundBtn.classList.toggle('disable', v <= 0);
            soundBtn.setAttribute('aria-label', v <= 0 ? 'Activar sonido' : 'Silenciar sonido');
        }
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
        this.knob.setAttribute('aria-valuenow', Math.round(this.vol * 100));
        this.knob.setAttribute('aria-valuetext', Math.round(this.vol * 100) + ' %');
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
        if (playerEl) {
            playerEl.classList.toggle('powered-off', !on);
            playerEl.inert = !on;
        }

        var dial = document.getElementById('volumeDial');
        if (dial) {
            dial.classList.toggle('powered-off', !on);
            dial.inert = !on;
        }

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
            el.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    that.goTo(i);
                }
            });
        });
    },

    goTo: function (i) {
        if (!this.list.length) { return; }
        this.index = ((i % this.list.length) + this.list.length) % this.list.length;
        var el = this.list[this.index];
        var time = parseFloat(el.getAttribute('data-time') || '0');
        Player.seek(time);
        if (PlayerPower.on && Player.audio && (Player.audio.currentSrc || Player.audio.getAttribute('src') || Player.audio.querySelector('source[src]'))) {
            Controls.playing = true;
            document.querySelector('.play').style.display = 'none';
            document.querySelector('.pause').style.display = 'inline-block';
            Player.play();
        } else {
            Controls.playing = false;
            document.querySelector('.play').style.display = 'inline-block';
            document.querySelector('.pause').style.display = 'none';
        }
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
    function togglePanel() {
        panel.classList.toggle('collapsed');
        closeBtn.setAttribute('aria-expanded', String(!panel.classList.contains('collapsed')));
        closeBtn.setAttribute('aria-label', panel.classList.contains('collapsed') ? 'Mostrar la ficha del libro' : 'Ocultar la ficha del libro');
    }
    closeBtn.addEventListener('click', togglePanel);
    closeBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePanel(); }
    });
}

/* "ESCUCHA AHORA" ribbon under the cover jumps down to the player */
function initListenNowRibbon() {
    var box = document.querySelector('.controls .box');
    var playerSection = document.querySelector('.player-section');
    if (!box || !playerSection) { return; }
    function focusPlayer() {
        playerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    box.addEventListener('click', focusPlayer);
    box.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); focusPlayer(); }
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
    function setOpen(open) {
        hamburger.classList.toggle('open', open);
        menu.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        hamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }
    hamburger.addEventListener('click', function () { setOpen(!menu.classList.contains('open')); });
    menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            setOpen(false);
        });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            setOpen(false);
            hamburger.focus();
        }
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

(function cityIllumination() {
    var canvas = document.querySelector('.city-lights');
    var art = canvas && canvas.parentElement;
    var image = art && art.querySelector('img');
    var ctx = canvas && canvas.getContext('2d');
    if (!ctx || !image) return;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    var width = 0, height = 0, dpr = 1, frame = 0, visible = false;
    var clock = 0, last = 0, windows = [];
    var glow = document.createElement('canvas');
    glow.width = glow.height = 64;
    var g = glow.getContext('2d');
    var halo = g.createRadialGradient(32,32,0,32,32,32);
    halo.addColorStop(0,'rgba(241,255,165,.9)');
    halo.addColorStop(.18,'rgba(213,244,104,.45)');
    halo.addColorStop(1,'rgba(163,216,68,0)');
    g.fillStyle = halo; g.fillRect(0,0,64,64);
    var steamCanvas = art.querySelector('.boat-steam');
    var steam = steamCanvas.getContext('2d');
    // Cached turbulent density fields: textured billows, not blurred circles.
    function vaporSprite(seed) {
        var tile=document.createElement('canvas');tile.width=tile.height=128;
        var c=tile.getContext('2d'), pixels=c.createImageData(128,128);
        function hash(x,y) { var n=Math.sin(x*127.1+y*311.7+seed*91.3)*43758.5453;return n-Math.floor(n); }
        function noise(x,y) {
            var ix=Math.floor(x),iy=Math.floor(y),fx=x-ix,fy=y-iy;
            fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);
            return (hash(ix,iy)*(1-fx)+hash(ix+1,iy)*fx)*(1-fy)
                +(hash(ix,iy+1)*(1-fx)+hash(ix+1,iy+1)*fx)*fy;
        }
        function density(x,y) {
            var n=noise(x*.035,y*.035)*.55+noise(x*.075,y*.075)*.27+noise(x*.16,y*.16)*.12+noise(x*.33,y*.33)*.06;
            var dx=(x-64)/59,dy=(y-64)/57;
            var envelope=Math.max(0,1-dx*dx-dy*dy);
            return Math.max(0,n-.22)*Math.pow(envelope,1.15);
        }
        for(var y=0;y<128;y++) for(var x=0;x<128;x++) {
            var d=density(x,y), rim=Math.max(-.12,Math.min(.16,d-density(x-4,y-7)));
            var light=57+d*100+rim*290;
            var k=(y*128+x)*4;
            pixels.data[k]=light;pixels.data[k+1]=light+9;pixels.data[k+2]=light-12;
            pixels.data[k+3]=Math.min(230,d*620);
        }
        c.putImageData(pixels,0,0);return tile;
    }
    var billows=[vaporSprite(1),vaporSprite(2),vaporSprite(3),vaporSprite(4)];
    var funnels=[{x:811,y:628,size:1,phase:0},{x:788,y:645,size:.72,phase:2.1},
        {x:496,y:699,size:.24,phase:4},{x:633,y:704,size:.2,phase:1.3},
        {x:578,y:705,size:.16,phase:3.2}];
    function drawSteam(scale) {
        steam.setTransform(dpr,0,0,dpr,0,0);steam.clearRect(0,0,width,height);
        steam.translate(width-1536*scale,(height-1024*scale)/2);steam.scale(scale,scale);
        funnels.forEach(function(f) {
            // Draw older parcels first so fresh exhaust emerges in front.
            var parcels=[];
            for(var i=0;i<38;i++) {
                var age=(clock+9+i*10/38+f.phase)%10;
                parcels.push({age:age,index:i});
            }
            parcels.sort(function(a,b){return b.age-a.age;});
            parcels.forEach(function(p) {
                var age=p.age, born=clock+9-age+f.phase;
                var curl=1-Math.exp(-age*.7);
                var drift=age*25*(1-Math.exp(-age*.65));
                var x=f.x+f.size*(drift+Math.sin(age*1.1+born*.8)*curl*14);
                var y=f.y-f.size*(28*Math.log(1+age*1.5)+age*7+Math.cos(age*1.3+born*.65)*curl*10);
                var size=f.size*(19+age*12)*(1+.12*Math.sin(born*2.3));
                var fade=Math.min(age/.18,1)*Math.pow(1-age/10,1.3);
                steam.save();steam.translate(x,y);
                steam.rotate(Math.sin(born*.8)*.7+age*.13);
                steam.globalAlpha=fade*.78;
                steam.drawImage(billows[p.index%4],-size*.5,-size*.5,size,size);
                // Thin trailing eddies peel away from the main plume.
                if(age>2) {
                    steam.globalAlpha=fade*.18;
                    steam.drawImage(billows[(p.index+1)%4],-size*.65,-size*.8,size*1.3,size*.85);
                }
                steam.restore();
            });
        });
        steam.globalAlpha=1;
    }
    function locateWindows() {
        // Sample only facade interiors, so glints follow actual lit windows.
        var sample = document.createElement('canvas');
        sample.width = 1536; sample.height = 1024;
        var sc = sample.getContext('2d', {willReadFrequently:true});
        sc.drawImage(image,0,0,1536,1024);
        var pixels = sc.getImageData(0,0,1536,1024).data;
        var facades = [[1190,154,1231,469],[1029,342,1110,604],
            [925,363,1007,611],[771,404,812,616],[858,442,905,626],
            [1308,399,1338,559],[1382,340,1459,590],[655,472,691,645]];
        windows = [];
        facades.forEach(function (r) {
            for (var y=r[1];y<r[3];y+=13) for (var x=r[0];x<r[2];x+=11) {
                var best=0,bx=x,by=y;
                for (var dy=0;dy<8;dy++) for(var dx=0;dx<6;dx++) {
                    var k=((y+dy)*1536+x+dx)*4;
                    var light=(pixels[k]+pixels[k+1])*.5;
                    if(light>best && pixels[k+1]>pixels[k+2]*1.15) {best=light;bx=x+dx;by=y+dy;}
                }
                if(best>140) windows.push({x:bx,y:by,phase:bx*.73+by*.37,speed:.22+(bx%7)*.024});
            }
        });
    }
    function resize() {
        var r=art.getBoundingClientRect(); width=r.width;height=r.height;
        dpr=Math.min(devicePixelRatio||1,2);
        canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
        steamCanvas.width=canvas.width;steamCanvas.height=canvas.height;
    }
    function beam(x,y,phase,direction) {
        // Full azimuth rotation at fixed elevation, projected into the artwork.
        // Depth foreshortens the cone on its far pass and opens it toward us.
        var azimuth=clock*(Math.PI*2/30)*direction+phase;
        var depth=Math.cos(azimuth);
        var perspective=1/(1-depth*.28);
        var dx=Math.sin(azimuth)*680*perspective;
        var dy=(-590+depth*135)*perspective;
        var length=Math.hypot(dx,dy);
        var spread=(90+45*(depth+1)*.5)*perspective;
        ctx.save();ctx.translate(x,y);ctx.rotate(Math.atan2(dx,-dy));
        var gradient=ctx.createLinearGradient(0,0,0,-length);
        gradient.addColorStop(0,'rgba(239,255,183,.58)');
        gradient.addColorStop(.15,'rgba(230,255,160,.50)');
        gradient.addColorStop(.65,'rgba(211,250,133,.32)');
        gradient.addColorStop(1,'rgba(190,236,110,0)');
        ctx.fillStyle=gradient;
        // Nested cones feather the edges rather than drawing a hard triangle.
        ctx.globalAlpha=(.85+.15*(depth+1)*.5)/10;
        for(var layer=0;layer<10;layer++) {
            var edge=spread*(1-layer*.065);
            ctx.beginPath();ctx.moveTo(-2,0);ctx.lineTo(-edge,-length);
            ctx.lineTo(edge,-length);ctx.lineTo(2,0);ctx.closePath();ctx.fill();
        }
        ctx.restore();
        var flare=Math.pow(Math.max(0,depth),8);
        ctx.globalAlpha=.3+flare*.65;
        ctx.drawImage(glow,x-12-flare*9,y-12-flare*9,24+flare*18,24+flare*18);
        ctx.globalAlpha=1;
    }
    function draw(now) {
        frame=0;clock+=last?Math.min((now-last)/1000,.05):0;last=now;
        ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,width,height);
        var scale=Math.max(width/1536,height/1024);
        drawSteam(scale);
        ctx.translate(width-1536*scale,(height-1024*scale)/2);ctx.scale(scale,scale);
        ctx.globalCompositeOperation='lighter';
        beam(1140,655,0,1);beam(1440,664,2.7,-1);beam(799,647,4.4,1);
        windows.forEach(function(w) {
            var pulse=.5+.5*Math.sin(clock*w.speed+w.phase);
            ctx.globalAlpha=.13+.65*Math.pow(pulse,3);
            ctx.drawImage(glow,w.x-7,w.y-10,14,20);
            ctx.fillStyle='rgba(236,255,158,.32)';ctx.fillRect(w.x-1,w.y-2,2,4);
        });
        // Broken, low horizontal reflections follow the harbor's ripples.
        for(var i=0;i<55;i++) {
            var phase=i*2.399;
            var y=754+(i*37%256);
            var x=700+(i*137%780)+Math.sin(clock*.35+phase)*8;
            var shimmer=.5+.5*Math.sin(clock*.65+phase);
            ctx.globalAlpha=.025+.07*shimmer;
            ctx.drawImage(glow,x-25,y-2,50+(y-754)*.2,4);
        }
        ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';
        frame=requestAnimationFrame(draw);
    }
    function sync() {
        var run=visible&&!document.hidden&&!reduced.matches;
        if(run&&!frame){last=0;frame=requestAnimationFrame(draw);}
        if(!run&&frame){cancelAnimationFrame(frame);frame=0;last=0;}
    }
    if(image.complete&&image.naturalWidth) locateWindows();
    else image.addEventListener('load',locateWindows,{once:true});
    new ResizeObserver(resize).observe(art);
    new IntersectionObserver(function(entries){visible=entries[0].isIntersecting;sync();}).observe(art);
    document.addEventListener('visibilitychange',sync);
    reduced.addEventListener('change',sync);
    resize();
})();
