/* ============================================
   SPACE & TIME — LIVE CLOCK
   Real-time analog clock. Hands sweep smoothly
   via requestAnimationFrame; caption shows the
   visitor's local timezone.
   ============================================ */

(function () {
    // IANA timezone IDs are plain ASCII, so Spanish-named cities lose
    // their accents (e.g. "Los_Angeles"). Correct the ones most likely
    // to show up for this site's audience.
    var TZ_NAME_OVERRIDES = {
        'America/Los_Angeles': 'Los Ángeles',
        'America/Mexico_City': 'Ciudad de México',
        'America/Bogota': 'Bogotá',
        'America/Sao_Paulo': 'São Paulo',
        'America/Asuncion': 'Asunción',
        'America/Yucatan': 'Yucatán'
    };

    // Timezones whose city name is already geotagged on the globe (see
    // REGION_CENTER in globe.js) — these get a clickable caption that
    // flies the globe there, same mechanism as the inline geolinks in
    // timeline.js. Cities above without an entry here just render as
    // plain text.
    var TZ_GLOBE_TARGET = {
        'America/Los_Angeles': { region: 'Los Ángeles, California', country: 'Estados Unidos' },
        'America/Mexico_City': { region: 'Ciudad de México', country: 'México' },
        'America/Bogota': { region: 'Bogotá', country: 'Colombia' }
    };

    function init() {
        var hourHand = document.getElementById('stcHour');
        var minuteHand = document.getElementById('stcMinute');
        var secondHand = document.getElementById('stcSecond');
        var tzLabel = document.getElementById('stcTimezone');

        if (!hourHand || !minuteHand || !secondHand) return;

        var reduceMotion = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (tzLabel) {
            try {
                var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
                var pretty = TZ_NAME_OVERRIDES[tz] || tz.split('/').pop().replace(/_/g, ' ');
                tzLabel.textContent = pretty || 'Local Time';

                var target = TZ_GLOBE_TARGET[tz];
                if (target) {
                    tzLabel.classList.add('is-linked');
                    tzLabel.setAttribute('role', 'button');
                    tzLabel.setAttribute('tabindex', '0');
                    tzLabel.setAttribute('aria-label', 'Ver ' + pretty + ' en el globo');
                    var activate = function () {
                        if (typeof window.focusGlobeOnRegion !== 'function') return;
                        window.focusGlobeOnRegion(target.region, target.country);
                        var globeEl = document.getElementById('globeViz');
                        if (globeEl) globeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    };
                    tzLabel.addEventListener('click', activate);
                    tzLabel.addEventListener('keydown', function (e) {
                        if (e.key !== 'Enter' && e.key !== ' ') return;
                        e.preventDefault();
                        activate();
                    });
                }
            } catch (e) {
                tzLabel.textContent = 'Local Time';
            }
        }

        function paint() {
            var now = new Date();
            var h = now.getHours() % 12;
            var m = now.getMinutes();
            var s = now.getSeconds();
            var ms = now.getMilliseconds();

            var secDeg = ((s + ms / 1000) / 60) * 360;
            var minDeg = ((m + s / 60) / 60) * 360;
            var hourDeg = ((h + m / 60) / 12) * 360;

            hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
            minuteHand.style.transform = 'rotate(' + minDeg + 'deg)';
            secondHand.style.transform = 'rotate(' + secDeg + 'deg)';
        }

        var clockSection = document.querySelector('.space-time-clock-section');
        var clockInView = false;
        var frameId = null;
        var intervalId = null;

        function frameLoop() {
            frameId = null;
            if (!clockInView || document.hidden) return;
            paint();
            frameId = requestAnimationFrame(frameLoop);
        }

        function syncClockActivity() {
            var shouldRun = clockInView && !document.hidden;
            if (clockSection) clockSection.classList.toggle('is-paused', !shouldRun);

            if (!shouldRun) {
                if (frameId !== null) cancelAnimationFrame(frameId);
                if (intervalId !== null) clearInterval(intervalId);
                frameId = null;
                intervalId = null;
                return;
            }

            paint();
            if (reduceMotion) {
                if (intervalId === null) intervalId = setInterval(paint, 1000);
            } else if (frameId === null) {
                frameId = requestAnimationFrame(frameLoop);
            }
        }

        if (clockSection && 'IntersectionObserver' in window) {
            new IntersectionObserver(function (entries) {
                clockInView = entries[0].isIntersecting;
                syncClockActivity();
            }, { rootMargin: '100px 0px' }).observe(clockSection);
        } else {
            clockInView = true;
        }
        document.addEventListener('visibilitychange', syncClockActivity);
        syncClockActivity();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
