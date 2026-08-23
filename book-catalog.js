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
        { file: "Los-de-abajo.webp", title: "Los de abajo", slug: "los-de-abajo" },
        { file: "Martin-fierro.webp", title: "Martín Fierro", slug: "martin-fierro" },
        { file: "a-colon.webp", title: "A Colón", slug: "a-colon" },
        { file: "a-la-deriva.webp", title: "A la deriva", slug: "a-la-deriva" },
        { file: "a-la-esperanza.webp", title: "A la esperanza", slug: "a-la-esperanza" },
        { file: "a-la-sombra-te-sientas-de-las-desnudas-rocas.webp", title: "A la sombra te sientas de las desnudas rocas", slug: "a-la-sombra-te-sientas-de-las-desnudas-rocas" },
        { file: "a-roosevelt.webp", title: "A Roosevelt", slug: "a-roosevelt" },
        { file: "al-que-leyere.webp", title: "Al que leyere", slug: "al-que-leyere" },
        { file: "amar-despues-de-la-muerte.webp", title: "Amar después de la muerte", slug: "amar-despues-de-la-muerte" },
        { file: "brevisima.webp", title: "Brevísima relación de la destrucción de las Indias", slug: "brevisima-relacion-de-la-destruccion-de-las-indias" },
        { file: "buen-amor.webp", title: "Libro de buen amor", slug: "libro-de-buen-amor" },
        { file: "cancion-de-pirata.webp", title: "Canción del pirata", slug: "cancion-de-pirata" },
        { file: "cantar-a-la-virgen-maria.webp", title: "Cantar a la Virgen María", slug: "cantar-a-la-virgen-maria" },
        { file: "cantar-de-los-cantares.webp", title: "Cantar de los cantares", slug: "cantar-de-los-cantares" },
        { file: "cantinela.webp", title: "Cantinela a Lesbia", slug: "cantinela-a-lesbia" },
        { file: "cara-y-cruz-del-cacto.webp", title: "Cara y cruz del cacto", slug: "cara-y-cruz-del-cacto" },
        { file: "caracol.webp", title: "Caracol", slug: "caracol" },
        { file: "carta-a-luis-de-santangel.webp", title: "Carta a Luis de Santángel", slug: "carta-a-luis-de-santangel" },
        { file: "carta-atenagorica.webp", title: "Carta atenagórica", slug: "carta-atenagorica" },
        { file: "cartas-de-jamaica.webp", title: "Cartas de Jamaica", slug: "cartas-de-jamaica" },
        { file: "celestina.webp", title: "La Celestina", slug: "la-celestina" },
        { file: "comentarios.webp", title: "Comentarios Reales de los Incas", slug: "comentarios-reales-de-los-incas" },
        { file: "conde-lucanor.webp", title: "El Conde Lucanor", slug: "el-conde-lucanor" },
        { file: "conquista-de-mexico.webp", title: "Cartas de relación", slug: "cartas-de-relacion" },
        { file: "contemporary_covers/pedro-paramo.webp", title: "Pedro Páramo", slug: "pedro-paramo" },
        { file: "coplas.webp", title: "Coplas por la muerte de su padre", slug: "coplas-por-la-muerte-de-su-padre" },
        { file: "cosante.webp", title: "Cosante", slug: "cosante" },
        { file: "cosas-del-cid.webp?v=2", title: "Cosas del Cid", slug: "cosas-del-cid" },
        { file: "cuento-x.webp", title: "Cuento X", slug: "cuento-x" },
        { file: "cuentos-de-decameron.webp", title: "Cuentos de Decamerón", slug: "cuentos-de-decameron" },
        { file: "del-rumor-cadencioso-de-la-onda.webp", title: "Del rumor cadencioso de la onda", slug: "del-rumor-cadencioso-de-la-onda" },
        { file: "dobla-el-dos-de-nov.webp", title: "Dobla el dos de noviembre", slug: "dobla-el-dos-de-noviembre" },
        { file: "don-quijote.webp", title: "Don Quijote", slug: "don-quijote" },
        { file: "doña-perfecta.webp", title: "Doña Perfecta", slug: "dona-perfecta" },
        { file: "duelo-virgen.webp?v=2", title: "Duelo de la Virgen", slug: "duelo-de-la-virgen" },
        { file: "ejemplo-del-hombre.webp", title: "Ejemplo del hombre, de su esposa infiel y del papagayo", slug: "ejemplo-del-hombre-de-su-esposa-infiel-y-del-papagayo" },
        { file: "ejemplo.webp", title: "Ejemplo", slug: "ejemplo" },
        { file: "el-almohadon-de-plumas.webp", title: "El almohadón de plumas", slug: "el-almohadon-de-plumas" },
        { file: "el-burlador-de-sevilla.webp", title: "El burlador de Sevilla", slug: "el-burlador-de-sevilla" },
        { file: "el-fuerte-lazo.webp", title: "El fuerte lazo", slug: "el-fuerte-lazo" },
        { file: "el-hijo.webp", title: "El hijo", slug: "el-hijo" },
        { file: "el-mendigo.webp", title: "El mendigo", slug: "el-mendigo" },
        { file: "el-ocaso.webp", title: "El ocaso", slug: "el-ocaso" },
        { file: "el-permisionario.webp", title: "El permisionario", slug: "el-permisionario" },
        { file: "el-perro-del-hortelano.webp", title: "El perro del hortelano", slug: "el-perro-del-hortelano" },
        { file: "el-perseguidor.webp", title: "El perseguidor", slug: "el-perseguidor" },
        { file: "el-puritano.webp", title: "El puritano", slug: "el-puritano" },
        { file: "el-rayo-de-luna.webp", title: "El rayo de luna", slug: "el-rayo-de-luna" },
        { file: "el-si-de-las-niñas.webp", title: "El sí de las niñas", slug: "el-si-de-las-ninas" },
        { file: "el-teatro-de-los-humildes.webp", title: "El teatro de los humildes", slug: "el-teatro-de-los-humildes" },
        { file: "el-trovador.webp", title: "El trovador", slug: "el-trovador" },
        { file: "el-ultimo-contrabandista.webp", title: "El último contrabandista", slug: "el-ultimo-contrabandista" },
        { file: "el-vampiro.webp", title: "El vampiro", slug: "el-vampiro" },
        { file: "en-el-teocalli-de-cholula.webp", title: "En el Teocalli de Cholula", slug: "en-el-teocalli-de-cholula" },
        { file: "en-perseguirme-mundo.webp", title: "¿En perseguirme, Mundo, qué interesas?", slug: "en-perseguirme-mundo-que-interesas" },
        { file: "facundo.webp", title: "Facundo o Civilización y Barbarie", slug: "facundo-o-civilizacion-y-barbarie" },
        { file: "fin-de-loores-de-santos.webp", title: "Fin de loores de santos", slug: "fin-de-loores-de-santos" },
        { file: "fontana-de-oro.webp", title: "La Fontana de Oro", slug: "la-fontana-de-oro" },
        { file: "fuente-ovejuna.webp", title: "Fuente Ovejuna", slug: "fuente-ovejuna" },
        { file: "historia-antigua-de-mexico.webp", title: "Historia antigua de México", slug: "historia-antigua-de-mexico" },
        { file: "hortus-conclusus.webp", title: "Hortus conclusus", slug: "hortus-conclusus" },
        { file: "juan-de-mairena-dos.webp", title: "Juan de Mairena II", slug: "juan-de-mairena-ii" },
        { file: "juan-de-mairena.webp", title: "Juan de Mairena", slug: "juan-de-mairena" },
        { file: "junto-a-la-laguna-de-cristo.webp", title: "Junto a la laguna de Cristo", slug: "junto-a-la-laguna-de-cristo" },
        { file: "la-espera.webp", title: "La espera", slug: "la-espera" },
        { file: "la-estatua.webp", title: "La estatua", slug: "la-estatua" },
        { file: "la-flor-de-la-playa.webp", title: "La flor de la playa", slug: "la-flor-de-la-playa" },
        { file: "la-gallina-degollada.webp", title: "La gallina degollada", slug: "la-gallina-degollada" },
        { file: "la-gloria-de-don-ramiro.webp", title: "La gloria de don Ramiro", slug: "la-gloria-de-don-ramiro" },
        { file: "la-gran-cosmopolis.webp", title: "La gran cosmópolis", slug: "la-gran-cosmopolis" },
        { file: "la-ultima-fada.webp", title: "La última fada", slug: "la-ultima-fada" },
        { file: "la-ultima-ilusion-de-don-juan.webp", title: "La última ilusión de Don Juan", slug: "la-ultima-ilusion-de-don-juan" },
        { file: "la-vuelta-de-los-campos.webp", title: "La vuelta de los campos", slug: "la-vuelta-de-los-campos" },
        { file: "ladron-devoto.webp", title: "El Ladrón Devoto", slug: "el-ladron-devoto" },
        { file: "las-cuatro-alas-de-abeja.webp", title: "Las cuatro alas de abeja", slug: "las-cuatro-alas-de-abeja" },
        { file: "lazarillo.webp", title: "Lazarillo de Tormes", slug: "lazarillo-de-tormes" },
        { file: "lenguas-diamante.webp", title: "Las lenguas de diamante", slug: "las-lenguas-de-diamante" },
        { file: "lo-fatal.webp", title: "Lo fatal", slug: "lo-fatal" },
        { file: "lo-que-soy-para-ti.webp", title: "Lo que soy para ti", slug: "lo-que-soy-para-ti" },
        { file: "los-buques-suicidantes.webp", title: "Los buques suicidantes", slug: "los-buques-suicidantes" },
        { file: "los-cuatro-viajes.webp", title: "Los cuatro viajes del almirante y su testamento", slug: "los-cuatro-viajes-del-almirante-y-su-testamento" },
        { file: "los-dados-eternos.webp", title: "Los dados eternos", slug: "los-dados-eternos" },
        { file: "los-heraldos-negros.webp", title: "Los heraldos negros", slug: "los-heraldos-negros" },
        { file: "los-motivos-del-lobo.webp", title: "Los motivos del lobo", slug: "los-motivos-del-lobo" },
        { file: "luces-de-bohemia.webp", title: "Luces de bohemia", slug: "luces-de-bohemia" },
        { file: "lucia-jerez.webp", title: "Lucía Jerez", slug: "lucia-jerez" },
        { file: "mariana-pineda.webp", title: "Mariana Pineda", slug: "mariana-pineda" },
        { file: "mas-alla.webp", title: "Más allá", slug: "mas-alla" },
        { file: "mi-religion.webp", title: "Mi religión", slug: "mi-religion" },
        { file: "mio-cid.webp?v=2", title: "Cantar de mio Cid", slug: "cantar-de-mio-cid" },
        { file: "mira-el-paisaje-inmensidad-abajo.webp", title: "Mira el paisaje, inmensidad abajo", slug: "mira-el-paisaje-inmensidad-abajo" },
        { file: "misericordia.webp", title: "Misericordia", slug: "misericordia" },
        { file: "monja-alferez.webp", title: "Historia de la Monja Alférez", slug: "historia-de-la-monja-alferez" },
        { file: "natural-historia-de-indias.webp", title: "Sumario de la Natural Historia de las Indias", slug: "sumario-de-la-natural-historia-de-las-indias" },
        { file: "naufragios.webp", title: "Naufragios", slug: "naufragios" },
        { file: "nezahualcoyotl.webp?v=2", title: "Nezahualcóyotl", slug: "nezahualcoyotl" },
        { file: "niebla.webp", title: "Niebla", slug: "niebla" },
        { file: "novelas-ejemplares.webp", title: "Novelas ejemplares", slug: "novelas-ejemplares" },
        { file: "nuestro-primer-cigarro.webp", title: "Nuestro primer cigarro", slug: "nuestro-primer-cigarro" },
        { file: "ofrenda.webp", title: "Ofrenda", slug: "ofrenda" },
        { file: "pensativa.webp", title: "Pensativa", slug: "pensativa" },
        { file: "pepita-jimenez.webp", title: "Pepita Jiménez", slug: "pepita-jimenez" },
        { file: "peribañez.webp", title: "Peribáñez y el comendador de Ocaña", slug: "peribanez-y-el-comendador-de-ocana" },
        { file: "perlimplin.webp", title: "Amor de don Perlimplín con Belisa en su jardín", slug: "amor-de-don-perlimplin-con-belisa-en-su-jardin" },
        { file: "popol-vuh.webp", title: "Popol Vuh", slug: "popol-vuh" },
        { file: "por-beber-una-copa-de-oro.webp", title: "Por beber una copa de oro", slug: "por-beber-una-copa-de-oro" },
        { file: "primer-sueño.webp", title: "Primer sueño", slug: "primer-sueno" },
        { file: "rabinal-achi.webp", title: "Rabinal Achí", slug: "rabinal-achi" },
        { file: "redondillas.webp", title: "Redondillas", slug: "redondillas" },
        { file: "respuesta-a-sor-filotea.webp", title: "Respuesta a Sor Filotea", slug: "respuesta-a-sor-filotea" },
        { file: "retorno-malefico.webp", title: "El retorno maléfico", slug: "el-retorno-malefico" },
        { file: "romancero-gitano.webp", title: "Romancero gitano", slug: "romancero-gitano" },
        { file: "romances-de-gongora.webp", title: "Romances", slug: "romances-de-gongora" },
        { file: "segadores-afuera-afuera.webp", title: "Segadores, afuera, afuera", slug: "segadores-afuera-afuera" },
        { file: "señor-de-bembibre.webp", title: "El señor de Bembibre", slug: "el-senor-de-bembibre" },
        { file: "si-ves-un-monte-de-espumas.webp", title: "Si ves un monte de espumas", slug: "si-ves-un-monte-de-espumas" },
        { file: "soledades-galerias.webp", title: "Soledades, galerías y otros poemas", slug: "soledades-galerias-y-otros-poemas" },
        { file: "thanatos.webp", title: "Thanatos", slug: "thanatos" },
        { file: "tres-cosas-me-tienen-preso.webp", title: "Tres cosas me tienen preso", slug: "tres-cosas-me-tienen-preso" },
        { file: "un-jilguero.webp", title: "A un jilguero", slug: "a-un-jilguero" },
        { file: "vivo-sin-vivir-en-mi.webp", title: "Vivo sin vivir en mí", slug: "vivo-sin-vivir-en-mi" },
        { file: "zogoibi.webp", title: "Zogoibi", slug: "zogoibi" },
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
            cover.loading = "lazy";
            cover.decoding = "async";
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
