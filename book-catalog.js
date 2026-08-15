/* Book Reviews — 3D cover-art carousel.
   Arranged in a ring via the rotateY/translateZ trick (--i = card
   index, --n = card count) and spun slowly around the Y axis. No
   build step — cards are injected here instead of hand-written so
   adding a cover later is a one-line change to BOOKS.

   The ring only ever renders SAMPLE_SIZE cards, picked at random from
   BOOKS on each load — never the full list. The ring's geometry
   (radius) is tuned for a specific card count; since BOOKS is meant to
   keep growing into the hundreds over the years, rendering all of it
   would make the radius balloon and flatten the curve (this happened
   once already going from 12 cards to 25 — see book-reviews.css).
   Capping the visible count keeps the carousel's proportions correct
   forever regardless of how large the full catalog gets. */
(() => {
    const SAMPLE_SIZE = 14;

    // slug is the future review page's filename under book-reviews/
    // (e.g. book-reviews/lazarillo-de-tormes.html). Those pages don't
    // exist yet — links are wired now and will 404 until each review
    // is written and the page built.
    const BOOKS = [
        { file: "Los-de-abajo.png", title: "Los de abajo", slug: "los-de-abajo" },
        { file: "Martin-fierro.png", title: "Martín Fierro", slug: "martin-fierro" },
        { file: "a-la-esperanza.png", title: "A la esperanza", slug: "a-la-esperanza" },
        { file: "al-que-leyere.png", title: "Al que leyere", slug: "al-que-leyere" },
        { file: "amar-despues-de-la-muerte.png", title: "Amar después de la muerte", slug: "amar-despues-de-la-muerte" },
        { file: "brevisima.jpg", title: "Brevísima relación de la destrucción de las Indias", slug: "brevisima-relacion-de-la-destruccion-de-las-indias" },
        { file: "buen-amor.jpg", title: "Libro de buen amor", slug: "libro-de-buen-amor" },
        { file: "cantinela.png", title: "Cantinela a Lesbia", slug: "cantinela-a-lesbia" },
        { file: "carta-a-luis-de-santangel.png", title: "Carta a Luis de Santángel", slug: "carta-a-luis-de-santangel" },
        { file: "carta-atenagorica.png", title: "Carta atenagórica", slug: "carta-atenagorica" },
        { file: "cartas-de-jamaica.png", title: "Cartas de Jamaica", slug: "cartas-de-jamaica" },
        { file: "celestina.jpg", title: "La Celestina", slug: "la-celestina" },
        { file: "comentarios.jpg", title: "Comentarios Reales de los Incas", slug: "comentarios-reales-de-los-incas" },
        { file: "conde-lucanor.jpg", title: "El Conde Lucanor", slug: "el-conde-lucanor" },
        { file: "conquista-de-mexico.jpg", title: "Cartas de relación", slug: "cartas-de-relacion" },
        { file: "coplas.png", title: "Coplas por la muerte de su padre", slug: "coplas-por-la-muerte-de-su-padre" },
        { file: "cosante.png", title: "Cosante", slug: "cosante" },
        { file: "cuento-x.png", title: "Cuento X", slug: "cuento-x" },
        { file: "cuentos-de-decameron.png", title: "Cuentos de Decamerón", slug: "cuentos-de-decameron" },
        { file: "don-quijote.png", title: "Don Quijote", slug: "don-quijote" },
        { file: "doña-perfecta.png", title: "Doña Perfecta", slug: "dona-perfecta" },
        { file: "duelo-virgen.png", title: "Duelo de la Virgen", slug: "duelo-de-la-virgen" },
        { file: "ejemplo-del-hombre.png", title: "Ejemplo del hombre, de su esposa infiel y del papagayo", slug: "ejemplo-del-hombre-de-su-esposa-infiel-y-del-papagayo" },
        { file: "el-perro-del-hortelano.png", title: "El perro del hortelano", slug: "el-perro-del-hortelano" },
        { file: "el-trovador.png", title: "El trovador", slug: "el-trovador" },
        { file: "en-perseguirme-mundo.png", title: "¿En perseguirme, Mundo, qué interesas?", slug: "en-perseguirme-mundo-que-interesas" },
        { file: "facundo.png", title: "Facundo o Civilización y Barbarie", slug: "facundo-o-civilizacion-y-barbarie" },
        { file: "fin-de-loores-de-santos.png", title: "Fin de loores de santos", slug: "fin-de-loores-de-santos" },
        { file: "fontana-de-oro.jpg", title: "La Fontana de Oro", slug: "la-fontana-de-oro" },
        { file: "fuente-ovejuna.png", title: "Fuente Ovejuna", slug: "fuente-ovejuna" },
        { file: "juan-de-mairena-dos.png", title: "Juan de Mairena II", slug: "juan-de-mairena-ii" },
        { file: "juan-de-mairena.png", title: "Juan de Mairena", slug: "juan-de-mairena" },
        { file: "la-flor-de-la-playa.jpg", title: "La flor de la playa", slug: "la-flor-de-la-playa" },
        { file: "la-gallina-degollada.png", title: "La gallina degollada", slug: "la-gallina-degollada" },
        { file: "ladron-devoto.jpg", title: "El Ladrón Devoto", slug: "el-ladron-devoto" },
        { file: "lazarillo.jpg", title: "Lazarillo de Tormes", slug: "lazarillo-de-tormes" },
        { file: "lenguas-diamante.png", title: "Las lenguas de diamante", slug: "las-lenguas-de-diamante" },
        { file: "los-cuatro-viajes.jpg", title: "Los cuatro viajes del almirante y su testamento", slug: "los-cuatro-viajes-del-almirante-y-su-testamento" },
        { file: "lucia-jerez.png", title: "Lucía Jerez", slug: "lucia-jerez" },
        { file: "mariana-pineda.png", title: "Mariana Pineda", slug: "mariana-pineda" },
        { file: "mio-cid.jpg", title: "Cantar de mio Cid", slug: "cantar-de-mio-cid" },
        { file: "misericordia.png", title: "Misericordia", slug: "misericordia" },
        { file: "monja-alferez.jpg", title: "Historia de la Monja Alférez", slug: "historia-de-la-monja-alferez" },
        { file: "natural-historia-de-indias.png", title: "Sumario de la Natural Historia de las Indias", slug: "sumario-de-la-natural-historia-de-las-indias" },
        { file: "naufragios.png", title: "Naufragios", slug: "naufragios" },
        { file: "nezahualcoyotl.jpg", title: "Nezahualcóyotl", slug: "nezahualcoyotl" },
        { file: "niebla.jpg", title: "Niebla", slug: "niebla" },
        { file: "novelas-ejemplares.png", title: "Novelas ejemplares", slug: "novelas-ejemplares" },
        { file: "pedro-paramo.jpg", title: "Pedro Páramo", slug: "pedro-paramo" },
        { file: "peribañez.png", title: "Peribáñez y el comendador de Ocaña", slug: "peribanez-y-el-comendador-de-ocana" },
        { file: "perlimplin.png", title: "Amor de don Perlimplín con Belisa en su jardín", slug: "amor-de-don-perlimplin-con-belisa-en-su-jardin" },
        { file: "popol-vuh.jpg", title: "Popol Vuh", slug: "popol-vuh" },
        { file: "primer-sueño.png", title: "Primer sueño", slug: "primer-sueno" },
        { file: "redondillas.png", title: "Redondillas", slug: "redondillas" },
        { file: "respuesta-a-sor-filotea.png", title: "Respuesta a Sor Filotea", slug: "respuesta-a-sor-filotea" },
        { file: "romances-de-gongora.png", title: "Romances", slug: "romances-de-gongora" },
        { file: "segadores-afuera-afuera.png", title: "Segadores, afuera, afuera", slug: "segadores-afuera-afuera" },
        { file: "señor-de-bembibre.png", title: "El señor de Bembibre", slug: "el-senor-de-bembibre" },
        { file: "soledades-galerias.png", title: "Soledades, galerías y otros poemas", slug: "soledades-galerias-y-otros-poemas" },
        { file: "un-jilguero.png", title: "A un jilguero", slug: "a-un-jilguero" },
        { file: "vivo-sin-vivir-en-mi.png", title: "Vivo sin vivir en mí", slug: "vivo-sin-vivir-en-mi" },
    ];

    function pickRandomSample(list, size) {
        const pool = [...list];
        const sample = [];
        while (pool.length && sample.length < size) {
            const idx = Math.floor(Math.random() * pool.length);
            sample.push(pool.splice(idx, 1)[0]);
        }
        return sample;
    }

    // Drag-to-rotate. Rotation is a single JS-owned value (`angle`)
    // applied every frame via requestAnimationFrame, instead of a CSS
    // animation — that's what lets a user's drag and the ambient
    // auto-spin share state instead of fighting each other. A flick
    // leaves some momentum that eases back to the steady auto-spin
    // rate rather than snapping instantly.
    function initDrag(scene, ring) {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // 360deg / 37000ms matches the auto-spin rate the CSS animation
        // used to have (tuned to the original CodePen's per-card pacing
        // — see book-reviews.css).
        const AUTO_SPIN_RATE = reduceMotion ? 0 : 360 / 37000; // deg/ms
        const DRAG_SENSITIVITY = -0.4; // deg rotated per px dragged (negative = drag right rotates the ring left, and vice versa)
        const CLICK_THRESHOLD = 6; // px of movement before it counts as a drag, not a card click

        let angle = 0;
        let velocity = AUTO_SPIN_RATE; // deg/ms — decays back to AUTO_SPIN_RATE after a flick
        let dragging = false;
        let lastX = 0;
        let lastT = 0;
        let totalMove = 0;
        let suppressClick = false;
        let lastFrameT = null;

        function apply() {
            ring.style.rotate = `y ${angle}deg`;
        }

        function frame(t) {
            if (!dragging) {
                const dt = lastFrameT ? t - lastFrameT : 0;
                angle += velocity * dt;
                // ease any post-flick velocity back toward the steady
                // auto-spin rate over roughly 600ms
                velocity += (AUTO_SPIN_RATE - velocity) * Math.min(1, dt / 600);
                apply();
            }
            lastFrameT = t;
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);

        function onPointerDown(e) {
            dragging = true;
            totalMove = 0;
            lastX = e.clientX;
            lastT = performance.now();
            scene.classList.add("is-dragging");
            scene.setPointerCapture(e.pointerId);
        }

        function onPointerMove(e) {
            if (!dragging) return;
            const now = performance.now();
            const dx = e.clientX - lastX;
            const dt = Math.max(1, now - lastT);
            angle += dx * DRAG_SENSITIVITY;
            velocity = (dx * DRAG_SENSITIVITY) / dt;
            totalMove += Math.abs(dx);
            lastX = e.clientX;
            lastT = now;
            apply();
            if (totalMove > CLICK_THRESHOLD) suppressClick = true;
        }

        function onPointerUp() {
            if (!dragging) return;
            dragging = false;
            scene.classList.remove("is-dragging");
            // a slow/deliberate release shouldn't leave the ring crawling
            // slower than its normal resting speed
            if (reduceMotion || Math.abs(velocity) < Math.abs(AUTO_SPIN_RATE)) {
                velocity = AUTO_SPIN_RATE;
            }
        }

        scene.addEventListener("pointerdown", onPointerDown);
        scene.addEventListener("pointermove", onPointerMove);
        scene.addEventListener("pointerup", onPointerUp);
        scene.addEventListener("pointercancel", onPointerUp);

        // A drag that crossed the click threshold shouldn't also fire
        // the logo badge's navigation if the drag happened to start or
        // end on top of it.
        ring.addEventListener(
            "click",
            (e) => {
                if (suppressClick) {
                    e.preventDefault();
                    e.stopPropagation();
                    suppressClick = false;
                }
            },
            true
        );
    }

    function init() {
        const ring = document.querySelector(".book-catalog-3d");
        if (!ring) return;
        const scene = ring.parentElement;

        const sample = pickRandomSample(BOOKS, SAMPLE_SIZE);

        // Set on the scene (not the ring) so both the ring and every
        // card inherit the same --n for the shared --radius formula.
        scene.style.setProperty("--n", sample.length);

        sample.forEach((book, i) => {
            // The card itself is just a drag surface now — no link, no
            // click-to-navigate. Only the small logo badge overlaid on
            // it is a real <a>, so dragging from anywhere on a cover
            // (including right on top of the art) never gets confused
            // with tapping through to the review.
            const card = document.createElement("div");
            card.className = "book-catalog-card";
            card.style.setProperty("--i", i);

            const cover = document.createElement("img");
            cover.className = "book-catalog-cover";
            cover.src = `book_covers/${book.file}`;
            cover.alt = book.title;
            cover.draggable = false;
            card.appendChild(cover);

            const logoLink = document.createElement("a");
            logoLink.className = "book-catalog-card-logo-link";
            logoLink.href = `book-reviews/${book.slug}.html`;
            logoLink.setAttribute("aria-label", `Ver reseña — ${book.title}`);

            const logo = document.createElement("img");
            logo.className = "book-catalog-card-logo";
            logo.src = "Images/logo.PNG";
            logo.alt = "";
            logo.draggable = false;
            logoLink.appendChild(logo);

            card.appendChild(logoLink);
            ring.appendChild(card);
        });

        initDrag(scene, ring);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
