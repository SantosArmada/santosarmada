/* ================================
   MERCH — color swatches
   Each swatch button stores the colorway's photo in data-image. Click
   swaps the card's main <img src>, no page navigation — there's no
   per-item product page yet, this just previews the color. Plain
   vanilla JS, no dependencies.
================================ */
(function () {
    'use strict';

    document.querySelectorAll('.merch-card-swatches').forEach(function (group) {
        var card = group.closest('.merch-card');
        var img = card && card.querySelector('.merch-card-image');
        var peekImg = card && card.querySelector('.merch-card-image-hover-peek');
        if (!img) return;

        group.querySelectorAll('.merch-swatch').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var next = btn.getAttribute('data-image');
                if (!next) return;
                img.src = next;
                // Also update the hover-peek image: while the card is
                // hovered, the peek is the element on screen (the main
                // image is slid out of view), so without this a swatch
                // click while hovering looked like it did nothing until
                // the cursor left the card.
                if (peekImg) peekImg.src = next;
                group.querySelectorAll('.merch-swatch').forEach(function (b) {
                    b.classList.remove('merch-swatch-active');
                });
                btn.classList.add('merch-swatch-active');
            });
        });
    });
})();
