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
        { file: "Los-de-abajo.jpg", title: "Los de abajo", slug: "los-de-abajo" },
        { file: "Martin-fierro.jpg", title: "Martín Fierro", slug: "martin-fierro" },
        { file: "brevisima.jpg", title: "Brevísima relación de la destrucción de las Indias", slug: "brevisima-relacion-de-la-destruccion-de-las-indias" },
        { file: "buen-amor.jpg", title: "Libro de buen amor", slug: "libro-de-buen-amor" },
        { file: "cartas-de-jamaica.jpg", title: "Cartas de Jamaica", slug: "cartas-de-jamaica" },
        { file: "celestina.jpg", title: "La Celestina", slug: "la-celestina" },
        { file: "comentarios.jpg", title: "Comentarios Reales de los Incas", slug: "comentarios-reales-de-los-incas" },
        { file: "conde-lucanor.jpg", title: "El Conde Lucanor", slug: "el-conde-lucanor" },
        { file: "duelo-virgen.jpg", title: "Duelo de la Virgen", slug: "duelo-de-la-virgen" },
        { file: "facundo.jpg", title: "Facundo o Civilización y Barbarie", slug: "facundo-o-civilizacion-y-barbarie" },
        { file: "fontana-de-oro.jpg", title: "La Fontana de Oro", slug: "la-fontana-de-oro" },
        { file: "la-flor-de-la-playa.jpg", title: "La flor de la playa", slug: "la-flor-de-la-playa" },
        { file: "la-gallina-degollada.jpg", title: "La gallina degollada", slug: "la-gallina-degollada" },
        { file: "ladron-devoto.jpg", title: "El Ladrón Devoto", slug: "el-ladron-devoto" },
        { file: "lazarillo.jpg", title: "Lazarillo de Tormes", slug: "lazarillo-de-tormes" },
        { file: "lenguas-diamante.jpg", title: "Las lenguas de diamante", slug: "las-lenguas-de-diamante" },
        { file: "los-cuatro-viajes.jpg", title: "Los cuatro viajes del almirante y su testamento", slug: "los-cuatro-viajes-del-almirante-y-su-testamento" },
        { file: "mio-cid.jpg", title: "Cantar de mio Cid", slug: "cantar-de-mio-cid" },
        { file: "misericordia.jpg", title: "Misericordia", slug: "misericordia" },
        { file: "monja-alferez.jpg", title: "Historia de la Monja Alférez", slug: "historia-de-la-monja-alferez" },
        { file: "naufragios.jpg", title: "Naufragios", slug: "naufragios" },
        { file: "nezahualcoyotl.jpg", title: "Nezahualcóyotl", slug: "nezahualcoyotl" },
        { file: "niebla.jpg", title: "Niebla", slug: "niebla" },
        { file: "pedro-paramo.jpg", title: "Pedro Páramo", slug: "pedro-paramo" },
        { file: "popol-vuh.jpg", title: "Popol Vuh", slug: "popol-vuh" },
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

    function init() {
        const ring = document.querySelector(".book-catalog-3d");
        if (!ring) return;

        const sample = pickRandomSample(BOOKS, SAMPLE_SIZE);

        // Set on the scene (not the ring) so both the ring and every
        // card inherit the same --n for the shared --radius formula.
        ring.parentElement.style.setProperty("--n", sample.length);

        sample.forEach((book, i) => {
            const link = document.createElement("a");
            link.className = "book-catalog-card";
            link.href = `book-reviews/${book.slug}.html`;
            link.style.setProperty("--i", i);

            const img = document.createElement("img");
            img.src = `book_covers/${book.file}`;
            img.alt = book.title;
            link.appendChild(img);

            ring.appendChild(link);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
