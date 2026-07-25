/* ================================
   MERCH — product detail page
   Two independent pieces of state — which color, which view (front/back)
   — both just drive which src goes into the one <img>. Plain vanilla JS,
   no dependencies, mirrors merch-swatches.js's click-to-select pattern.
================================ */
(function () {
    'use strict';

    var img = document.getElementById('merchProductImage');
    if (!img) return;

    // Color swatches + front/back toggle: only present on items that have
    // colorway photos (plain single-photo items like the Frida Kahlo
    // Collection skip this whole block and just get the lightbox below).
    var nameEl = document.querySelector('.merch-product-name');
    var colorNameEl = document.getElementById('merchProductColorName');
    var swatches = document.querySelectorAll('.merch-product-swatches .merch-swatch');
    var viewBtns = document.querySelectorAll('.merch-product-view-btn');

    if (swatches.length) {
        var productName = nameEl ? nameEl.textContent + ' Tee' : 'Tee';
        var activeSwatch = document.querySelector('.merch-product-swatches .merch-swatch-active') || swatches[0];
        var activeView = 'front';

        var render = function () {
            var src = activeView === 'back' ? activeSwatch.getAttribute('data-back') : activeSwatch.getAttribute('data-front');
            img.src = src;
            img.alt = productName + ' — ' + activeView + ', ' + activeSwatch.getAttribute('aria-label').toLowerCase();
        };

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
    }

    // Click-to-zoom: opens whatever the main image currently shows
    // (current color + front/back), so it always matches what was clicked.
    var lightbox = document.getElementById('merchLightbox');
    var lightboxImg = document.getElementById('merchLightboxImage');
    var lightboxClose = document.querySelector('.merch-lightbox-close');

    function openLightbox() {
        if (!lightbox) return;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('merch-lightbox-open');
        lightbox.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('merch-lightbox-open');
        lightbox.setAttribute('aria-hidden', 'true');
    }

    if (lightbox) {
        img.addEventListener('click', openLightbox);
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }
})();
