/* Book Reviews — animated shelf.
   Spines are generated from real ratings pulled off the Audiolibros
   title pages, sorted best-to-worst so the shelf reads as a visible
   sage → terracotta color gradient. Height comes from the full title
   text set in vertical writing-mode, not a fixed box. */
(() => {
    const BOOKS = [
        { title: "Popol Vuh", rating: 3.9 },
        { title: "Cantar de mio Cid", rating: 3.2 },
        { title: "Nezahualcóyotl", rating: 3.9 },
        { title: "Libro de buen amor", rating: 4.0 },
        { title: "Duelo de la Virgen", rating: 5.0 },
        { title: "La Celestina", rating: 5.0 },
        { title: "Los cuatro viajes del almirante y su testamento", rating: 3.0 },
        { title: "Brevísima relación de la destrucción de las Indias", rating: 4.1 },
        { title: "Naufragios", rating: 4.9 },
        { title: "Lazarillo de Tormes", rating: 5.0 },
        { title: "Comentarios Reales de los Incas", rating: 4.6 },
        { title: "Historia de la Monja Alférez", rating: 4.4 },
        { title: "Cartas de Jamaica", rating: 3.7 },
        { title: "Facundo o Civilización y Barbarie", rating: 4.6 },
        { title: "La Fontana de Oro", rating: 4.7 },
        { title: "Martín Fierro", rating: 5.0 },
        { title: "Misericordia", rating: 5.0 },
        { title: "Niebla", rating: 5.0 },
        { title: "Los de abajo", rating: 5.0 },
        { title: "Las lenguas de diamante", rating: 4.3 },
        { title: "La flor de la playa", rating: 4.2 },
        { title: "La gallina degollada", rating: 5.0 },
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

            const spine = document.createElement("div");
            spine.className = "book-spine";
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
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
