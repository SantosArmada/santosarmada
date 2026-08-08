/* Book Reviews — animated shelf.
   Spines are generated from real ratings pulled off the Audiolibros
   title pages, sorted best-to-worst so the shelf reads as a visible
   sage → terracotta color gradient. Height comes from the full title
   text set in vertical writing-mode, not a fixed box. */
(() => {
    // slug matches its Audiolibros/titulos/<slug>.html page. Most
    // titles already have that page built; newly added covers won't
    // until their detail page is built out (same pattern as the
    // book-reviews carousel links) — expect 404s on those until then.
    const BOOKS = [
        { title: "Popol Vuh", rating: 3.9, slug: "popol-vuh" },
        { title: "Cantar de mio Cid", rating: 3.2, slug: "cantar-de-mio-cid" },
        { title: "Nezahualcóyotl", rating: 3.9, slug: "nezahualcoyotl" },
        { title: "Libro de buen amor", rating: 4.0, slug: "libro-de-buen-amor" },
        { title: "Duelo de la Virgen", rating: 5.0, slug: "duelo-de-la-virgen" },
        { title: "Coplas por la muerte de su padre", rating: 4.5, slug: "coplas-por-la-muerte-de-su-padre" },
        { title: "El Ladrón Devoto", rating: 4.8, slug: "el-ladron-devoto" },
        { title: "El señor de Bembibre", rating: 3.9, slug: "el-senor-de-bembibre" },
        { title: "Peribáñez y el comendador de Ocaña", rating: 4.3, slug: "peribanez-y-el-comendador-de-ocana" },
        { title: "El trovador", rating: 4.1, slug: "el-trovador" },
        { title: "Fuente Ovejuna", rating: 4.7, slug: "fuente-ovejuna" },
        { title: "Cuentos de Decamerón", rating: 4.4, slug: "cuentos-de-decameron" },
        { title: "Fin de loores de santos", rating: 3.3, slug: "fin-de-loores-de-santos" },
        { title: "La Celestina", rating: 5.0, slug: "la-celestina" },
        { title: "Naufragios", rating: 4.9, slug: "naufragios" },
        { title: "Lazarillo de Tormes", rating: 5.0, slug: "lazarillo-de-tormes" },
        { title: "Comentarios Reales de los Incas", rating: 4.6, slug: "comentarios-reales-de-los-incas" },
        { title: "Historia de la Monja Alférez", rating: 4.4, slug: "historia-de-la-monja-alferez" },
        { title: "Novelas ejemplares", rating: 4.8, slug: "novelas-ejemplares" },
        { title: "El perro del hortelano", rating: 4.6, slug: "el-perro-del-hortelano" },
        { title: "Romances", rating: 4.0, slug: "romances-de-gongora" },
        { title: "Carta a Luis de Santángel", rating: 4.2, slug: "carta-a-luis-de-santangel" },
        { title: "Cosante", rating: 3.4, slug: "cosante" },
        { title: "Vivo sin vivir en mí", rating: 4.7, slug: "vivo-sin-vivir-en-mi" },
        { title: "Cuento X", rating: 3.6, slug: "cuento-x" },
        { title: "Don Quijote", rating: 5.0, slug: "don-quijote" },
        { title: "Cantinela a Lesbia", rating: 3.2, slug: "cantinela-a-lesbia" },
        { title: "A un jilguero", rating: 3.7, slug: "a-un-jilguero" },
        { title: "Al que leyere", rating: 4.1, slug: "al-que-leyere" },
        { title: "Segadores, afuera, afuera", rating: 3.3, slug: "segadores-afuera-afuera" },
        { title: "Amar después de la muerte", rating: 4.3, slug: "amar-despues-de-la-muerte" },
        { title: "Redondillas", rating: 4.9, slug: "redondillas" },
        { title: "A la esperanza", rating: 3.8, slug: "a-la-esperanza" },
        { title: "Carta atenagórica", rating: 4.2, slug: "carta-atenagorica" },
        { title: "Primer sueño", rating: 4.6, slug: "primer-sueno" },
        { title: "Respuesta a Sor Filotea", rating: 4.8, slug: "respuesta-a-sor-filotea" },
        { title: "Cartas de Jamaica", rating: 3.7, slug: "cartas-de-jamaica" },
        { title: "Facundo o Civilización y Barbarie", rating: 4.6, slug: "facundo-o-civilizacion-y-barbarie" },
        { title: "La Fontana de Oro", rating: 4.7, slug: "la-fontana-de-oro" },
        { title: "Martín Fierro", rating: 5.0, slug: "martin-fierro" },
        { title: "Misericordia", rating: 5.0, slug: "misericordia" },
        { title: "Mariana Pineda", rating: 4.4, slug: "mariana-pineda" },
        { title: "Doña Perfecta", rating: 4.6, slug: "dona-perfecta" },
        { title: "Lucía Jerez", rating: 3.8, slug: "lucia-jerez" },
        { title: "Niebla", rating: 5.0, slug: "niebla" },
        { title: "Los de abajo", rating: 5.0, slug: "los-de-abajo" },
        { title: "Las lenguas de diamante", rating: 4.3, slug: "las-lenguas-de-diamante" },
        { title: "La flor de la playa", rating: 4.2, slug: "la-flor-de-la-playa" },
        { title: "La gallina degollada", rating: 5.0, slug: "la-gallina-degollada" },
        { title: "Soledades, galerías y otros poemas", rating: 4.5, slug: "soledades-galerias-y-otros-poemas" },
    ];

    const TERRACOTTA = [206, 140, 120];
    const SAGE = [132, 165, 157];

    function lerpColor(a, b, t) {
        const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
        return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
    }

    function init() {
        const rail = document.querySelector(".book-shelf-rail");
        if (!rail) return;

        const ratings = BOOKS.map((b) => b.rating);
        const min = Math.min(...ratings);
        const max = Math.max(...ratings);

        const sorted = [...BOOKS].sort((a, b) => b.rating - a.rating);

        sorted.forEach((book, i) => {
            const t = max === min ? 1 : (book.rating - min) / (max - min);
            const width = 16 + Math.round(Math.random() * 10);

            const spine = document.createElement("a");
            spine.className = "book-spine";
            spine.href = `Audiolibros/titulos/${book.slug}.html`;
            spine.style.background = lerpColor(TERRACOTTA, SAGE, t);
            spine.style.width = width + "px";
            spine.style.transitionDelay = i * 45 + "ms";
            spine.title = `${book.title} — ${book.rating.toFixed(1)}`;

            const label = document.createElement("span");
            label.className = "book-spine-label";
            label.textContent = book.title;
            spine.appendChild(label);

            rail.appendChild(spine);
        });

        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                            io.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.2 }
            );
            io.observe(rail);
        } else {
            rail.classList.add("is-visible");
        }

        // Mobile-only swipe hint (see .book-shelf-hint in CSS) — fades
        // out the moment the user actually scrolls the shelf, since at
        // that point it's done its job.
        const hint = document.querySelector(".book-shelf-hint");
        if (hint) {
            rail.addEventListener(
                "scroll",
                () => hint.classList.add("is-hidden"),
                { once: true, passive: true }
            );
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
