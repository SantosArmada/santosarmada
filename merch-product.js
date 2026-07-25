/* ================================
   MERCH — product detail page
   Two independent pieces of state — which color, which view (front/back)
   — both just drive which src goes into the one <img>. Plain vanilla JS,
   no dependencies, mirrors merch-swatches.js's click-to-select pattern.
================================ */
(function () {
    'use strict';

    var img = document.getElementById('merchProductImage');
    var colorNameEl = document.getElementById('merchProductColorName');
    var swatches = document.querySelectorAll('.merch-product-swatches .merch-swatch');
    var viewBtns = document.querySelectorAll('.merch-product-view-btn');
    if (!img || !swatches.length) return;

    var activeSwatch = document.querySelector('.merch-product-swatches .merch-swatch-active') || swatches[0];
    var activeView = 'front';

    function render() {
        var src = activeView === 'back' ? activeSwatch.getAttribute('data-back') : activeSwatch.getAttribute('data-front');
        img.src = src;
        img.alt = 'Huntington Park Tee — ' + activeView + ', ' + activeSwatch.getAttribute('aria-label').toLowerCase();
    }

    swatches.forEach(function (btn) {
        btn.addEventListener('click', function () {
            activeSwatch = btn;
            swatches.forEach(function (b) { b.classList.remove('merch-swatch-active'); });
            btn.classList.add('merch-swatch-active');
            if (colorNameEl) colorNameEl.textContent = btn.getAttribute('aria-label');
            render();
        });
    });

    viewBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            activeView = btn.getAttribute('data-view');
            viewBtns.forEach(function (b) { b.classList.remove('merch-product-view-active'); });
            btn.classList.add('merch-product-view-active');
            render();
        });
    });
})();
