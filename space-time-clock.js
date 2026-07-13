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

        if (reduceMotion) {
            // still a functional clock — just update once a second
            // instead of animating every frame.
            paint();
            setInterval(paint, 1000);
        } else {
            (function loop() {
                paint();
                requestAnimationFrame(loop);
            })();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
