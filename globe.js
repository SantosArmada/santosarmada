const highlightedCountries = {
    'Mexico': '#39ff6a',
    'Guatemala': '#39ff6a',
    'Nicaragua': '#39ff6a',
    'El Salvador': '#39ff6a',
    'Honduras': '#39ff6a',
    'Costa Rica': '#39ff6a',
    'Panama': '#39ff6a',
    'Peru': '#39ff6a',
    'Chile': '#39ff6a',
    'Argentina': '#39ff6a',
    'Uruguay': '#39ff6a',
    'Paraguay': '#39ff6a',
    'Bolivia': '#39ff6a',
    'Ecuador': '#39ff6a',
    'Colombia': '#39ff6a',
    'Venezuela': '#39ff6a',
    'Brazil': '#c8a96e',
    'Cuba': '#39ff6a',
    'Dominican Rep.': '#39ff6a',
    'Haiti': '#39ff6a',
    'Spain': '#c8a96e',
    'Portugal': '#c8a96e',
    'Morocco': '#c8a96e',
    'Belgium': '#c8a96e',
    'France': '#c8a96e',
    'Italy': '#c8a96e',
    'Angola': '#c8a96e',
    'Mozambique': '#c8a96e',
    'Guinea-Bissau': '#c8a96e',
    'Timor-Leste': '#c8a96e',
    'Eq. Guinea': '#c8a96e',
    'Philippines': '#c8a96e',
    'United States of America': '#4da6ff',
    'United Kingdom': '#4da6ff',
    'Puerto Rico': '#4da6ff',
    'Belize': '#4da6ff',
    'Jamaica': '#4da6ff',
    'India': '#4da6ff',
    'Japan': '#a64dff',
    'Antarctica': '#faff00'
};

/* ---------------------------------------------------------
   Special info-panel content
   Overrides the generic "Connected Works" placeholder for
   countries whose real story on this globe is linguistic
   kinship with Spanish, not (yet) a specific author/work.
   --------------------------------------------------------- */
const ROMANCE_LANGUAGE_BODY =
  "El portugués y el español son primos hermanos: ambos descienden del latín vulgar que trajeron los romanos a la península ibérica, y comparten la misma rama iberorromance del árbol de las lenguas latinas. Su gramática, su vocabulario y hasta su historia colonial corren en paralelo — las dos coronas repartieron el Nuevo Mundo con el Tratado de Tordesillas de 1494, y ambas construyeron imperios con instituciones asombrosamente similares. Son, además, mutuamente inteligibles en un grado poco común entre lenguas distintas: quien habla español puede leer un periódico portugués sin demasiado esfuerzo, y viceversa. La lingüista Ofelia García llama a esto \"translanguaging\" — la idea de que quien habla más de una lengua no guarda sistemas separados en compartimentos estancos, sino un solo repertorio lingüístico del que echa mano según lo necesite. Para quien aprende portugués o español, reconocer ese parentesco no es una distracción: es una herramienta. Cada palabra reconocible en la otra lengua es un puente ya construido.";

const SPECIAL_PANELS = {
  'Portugal': {
    title: 'Connected Works',
    body:
      "\"La flor de la playa\" (Carmen de Burgos, 1920) — Enrique y su amante deciden pasar su escapada de verano precisamente en Portugal: un viaje corto, \"tan corto como ir a un pueblo de España\", pero ya al extranjero, a \"una nación más libre\" donde podían vivir juntos sin la vigilancia de las patronas españolas y ella podía hacerse pasar por su esposa.",
    linkedEntryId: 'flor-de-la-playa-burgos-1920'
  },
  'Brazil': { title: 'Romance Language', body: ROMANCE_LANGUAGE_BODY },
  'Angola': { title: 'Romance Language', body: ROMANCE_LANGUAGE_BODY },
  'Mozambique': { title: 'Romance Language', body: ROMANCE_LANGUAGE_BODY },
  'Guinea-Bissau': { title: 'Romance Language', body: ROMANCE_LANGUAGE_BODY },
  'Timor-Leste': { title: 'Romance Language', body: ROMANCE_LANGUAGE_BODY },

  'Belgium': {
    title: 'Entretejidos',
    body:
      "El francés y el español son también ramas del mismo árbol latino — primas menos cercanas que el español y el portugués, pero primas al fin. Bélgica entra además en la historia de España de un modo muy concreto: durante casi siglo y medio, bajo los Habsburgo, los actuales territorios belgas formaron parte de la Corona española como los \"Países Bajos españoles\", y Amberes y Bruselas fueron, políticamente, tan españolas como Madrid o Toledo. Esa doble herencia —lingüística y política— es otro hilo más en el tejido de la Europa románica."
  },
  'Morocco': {
    title: 'Entretejidos',
    body:
      "Marruecos y España están separados por apenas 14 kilómetros de estrecho, y su historia lingüística lleva siglos entretejida. Durante casi ochocientos años, entre 711 y 1492, el árabe conformó buena parte de Al-Ándalus, y cientos de palabras españolas de uso cotidiano —aceite, almohada, alcalde, ojalá— son herencia directa de esa convivencia. Siglos después, entre 1912 y 1956, el norte de Marruecos fue protectorado español, y el español todavía se habla hoy en ciudades como Tetuán y Larache. Pocas fronteras en el mundo comparten una historia lingüística tan larga y tan recíproca."
  },
  'Philippines': {
    title: 'Entretejidos',
    body:
      "Filipinas fue territorio español durante 333 años, de 1565 a 1898 — más tiempo del que España gobernó casi cualquier otra colonia. Esa presencia dejó una huella profunda en las lenguas filipinas: el tagalo y otras lenguas locales conservan cientos de préstamos españoles, desde los números hasta los días de la semana, y en Zamboanga todavía se habla el chabacano, un criollo nacido directamente del contacto entre el español y las lenguas del archipiélago. Hoy el español ya no es lengua oficial, pero su presencia sigue entretejida en el habla diaria de millones de filipinos, muchas veces sin que lo noten."
  },

  'India': {
    title: 'Colonized',
    body:
      "Doscientos años de dominio británico —desde la Compañía Británica de las Indias Orientales hasta el Raj, hasta la independencia en 1947— dejaron al inglés como lengua de la ley, la administración y la educación superior india, un rol que nunca abandonó. En un país con veintidós lenguas oficiales y cientos más, el inglés se convirtió en el idioma que conecta a Bombay con Calcuta, a Delhi con Bangalore. Esa ventaja resultó decisiva tras la liberalización económica de 1991: India se volvió la capital mundial del outsourcing y los servicios de TI —call centers, desarrollo de software, soporte técnico— precisamente por contar con la fuerza laboral angloparlante más grande fuera del mundo angloparlante nativo. Empresas como Infosys, TCS y Wipro construyeron imperios enteros sobre esa herencia colonial reconvertida en ventaja competitiva. El inglés en India no es solo un idioma: es infraestructura económica."
  },
  'Belize': {
    title: 'Colonized',
    body:
      "Belice —la antigua Honduras Británica— es el único país de Centroamérica donde el inglés es lengua oficial, herencia directa de una colonización que terminó apenas en 1981. Pocas historias ilustran esa doble identidad angloparlante y caribeña como la de Jamal Michael Barrow, nacido en Belize City. De niño emigró con su familia a Brooklyn, y bajo el nombre de Shyne se convirtió en una de las promesas del hip hop neoyorquino, firmado por Bad Boy Records de Diddy a fines de los noventa. Un tiroteo en un club de Manhattan en 1999 lo llevó a prisión casi una década; al no tener ciudadanía estadounidense, fue deportado a Belice al salir. Ahí reconstruyó su vida en la política: electo diputado en 2020, llegó a ser Líder de la Oposición y jefe del Partido Democrático Unido, antes de perder la reelección en marzo de 2025. De Bad Boy Records a la Cámara de Representantes de Belice — el inglés fue el hilo que conectó ambos mundos."
  },
  'Jamaica': {
    title: 'Colonized',
    body:
      "Jamaica fue colonia británica durante más de tres siglos, hasta 1962, y de esa herencia angloparlante surgió Bob Marley, quien llevó el reggae y la filosofía rastafari de Kingston al mundo entero cantando en inglés. Canciones como 'One Love' o 'No Woman, No Cry' convirtieron a una isla de menos de tres millones de habitantes en una potencia cultural global, y su influencia sigue viva hoy en el hip hop, el reguetón y la música de protesta en todo el planeta. Pero Jamaica ya era un cruce de caminos histórico mucho antes de Marley: el 6 de septiembre de 1815, exiliado en Kingston tras la caída de la Segunda República de Venezuela, Simón Bolívar escribió ahí la Carta de Jamaica, dirigida al comerciante inglés Henry Cullen — el documento fundacional del pensamiento independentista latinoamericano, redactado en español sobre suelo colonizado por Inglaterra, precisamente porque esa colonia británica era uno de los pocos refugios seguros frente a las fuerzas realistas españolas.",
    linkedEntryId: 'carta-de-jamaica-1815'
  }
};

/* ---------------------------------------------------------
   Connected Works — pulled live from timeline-data.js
   Maps this globe's English country labels (from the
   world-atlas topology) to the Spanish `country` field used
   throughout TIMELINE_ENTRIES, so clicking a country lists
   its real, matching timeline entries instead of a static
   placeholder. timeline-data.js loads after this file, but
   since this only runs inside the click handler (well after
   page load), window.TIMELINE_ENTRIES is always populated by
   the time anyone actually clicks. */
const GLOBE_TO_TIMELINE_COUNTRY = {
    'Mexico': 'México',
    'Guatemala': 'Guatemala',
    'Nicaragua': 'Nicaragua',
    'El Salvador': 'El Salvador',
    'Honduras': 'Honduras',
    'Costa Rica': 'Costa Rica',
    'Panama': 'Panamá',
    'Peru': 'Perú',
    'Chile': 'Chile',
    'Argentina': 'Argentina',
    'Uruguay': 'Uruguay',
    'Paraguay': 'Paraguay',
    'Bolivia': 'Bolivia',
    'Ecuador': 'Ecuador',
    'Colombia': 'Colombia',
    'Venezuela': 'Venezuela',
    'Cuba': 'Cuba',
    'Dominican Rep.': 'República Dominicana',
    'Haiti': 'Haití',
    'Spain': 'España',
    'France': 'Francia',
    'Italy': 'Italia',
    'Eq. Guinea': 'Guinea Ecuatorial',
    'United States of America': 'Estados Unidos',
    'United Kingdom': 'Reino Unido',
    'Puerto Rico': 'Puerto Rico',
    'Jamaica': 'Jamaica',
    'Japan': 'Japón'
};

function escapeHtmlGlobe(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : str;
    return div.innerHTML;
}

function getConnectedWorks(globeName) {
    const entries = window.TIMELINE_ENTRIES || [];
    const spanishName = GLOBE_TO_TIMELINE_COUNTRY[globeName] || globeName;
    return entries
        .filter(function (e) { return e.country === spanishName; })
        .slice()
        .sort(function (a, b) { return a.year - b.year; });
}

function renderWorksList(works) {
    return works.map(function (w) {
        const yearLabel = w.endYear
            ? escapeHtmlGlobe(w.year) + '–' + escapeHtmlGlobe(w.endYear)
            : escapeHtmlGlobe(w.year);
        return (
            '<li class="globe-info-work" data-id="' + escapeHtmlGlobe(w.id) + '" tabindex="0" role="button">' +
            '<p class="globe-info-work-title">' + escapeHtmlGlobe(w.title) + '</p>' +
            '<p class="globe-info-work-meta">' + escapeHtmlGlobe(w.author) + ' · ' + yearLabel + '</p>' +
            '</li>'
        );
    }).join('');
}

/* Jump from a Connected Works list item to its actual point on the
   timeline below: scroll the page down to the timeline section, then
   (once that scroll is underway) select the entry so its detail panel
   and Efecto Mariposa card open, same as clicking it directly there. */
function goToTimelineEntry(id) {
    const section = document.querySelector('.timeline-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(function () {
        if (typeof window.selectTimelineEntryById === 'function') {
            window.selectTimelineEntryById(id);
        }
    }, 550);
}

const infoPanelEl = document.getElementById('infoPanel');
const infoContentEl = document.getElementById('globeInfoContent');
const infoCloseEl = document.getElementById('globeInfoClose');

if (infoCloseEl) {
    infoCloseEl.addEventListener('click', function () {
        infoPanelEl.classList.add('is-hidden');
    });
}

const JUMPABLE_SELECTOR = '.globe-info-work[data-id], .globe-info-jumplink[data-id]';

if (infoContentEl) {
    infoContentEl.addEventListener('click', function (e) {
        const jumpEl = e.target.closest(JUMPABLE_SELECTOR);
        if (!jumpEl) return;
        goToTimelineEntry(jumpEl.getAttribute('data-id'));
    });
    infoContentEl.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const jumpEl = e.target.closest(JUMPABLE_SELECTOR);
        if (!jumpEl) return;
        e.preventDefault();
        goToTimelineEntry(jumpEl.getAttribute('data-id'));
    });
}

/* ---------------------------------------------------------
   The orbiting moon — reuses the same info panel as countries,
   and its connected work is just as clickable/jumpable.
   --------------------------------------------------------- */
const moonMarkerEl = document.getElementById('moonMarker');
if (moonMarkerEl) {
    moonMarkerEl.addEventListener('click', function () {
        infoPanelEl.classList.remove('is-hidden');
        const entries = window.TIMELINE_ENTRIES || [];
        const moonEntry = entries.find(function (e) { return e.id === 'rayo-de-luna-becquer-1862'; });
        infoContentEl.innerHTML =
            '<p class="globe-info-label">La Luna</p>' +
            '<h3 class="globe-info-title">Connected Works</h3>' +
            (moonEntry
                ? '<ul class="globe-info-worklist">' + renderWorksList([moonEntry]) + '</ul>'
                : '<p class="globe-info-body">"El rayo de luna" (Gustavo Adolfo Bécquer, 1862) — Manrique persigue toda una noche a una mujer entre las ruinas de Soria, y descubre al final que solo perseguía un rayo de luna filtrándose entre los árboles: la ilusión que el propio deseo romántico inventa para tener algo a lo cual aferrarse.</p>');
    });

    /* ---------------------------------------------------------
       Orbit driven frame-by-frame instead of a CSS keyframe, so the
       moon can actually pass BEHIND the globe and not just spin in
       a flat circle in front of it. Path is an ellipse (a circular
       orbit viewed at an angle projects as one); whichever half of
       the loop is "far" gets a lower z-index than #globeViz
       (z-index: 1) so the sphere occludes it there, plus a
       scale/opacity dip as a depth cue; the "near" half gets a
       higher z-index and full size, passing in front. Speed (6.5s
       per lap) and radius are fixed for every viewport on purpose --
       if the wrap needs to run wider than a phone screen to look
       convincing, that's fine; it's not being shrunk to fit. */
    const ORBIT_PERIOD_S = 6.5;
    const ORBIT_RADIUS_X = 260;
    const ORBIT_RADIUS_Y = 95;
    const reduceMotionQuery = window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;

    let angle = 0;
    let lastFrameTime = null;

    function orbitTick(now) {
        if (lastFrameTime === null) lastFrameTime = now;
        const dtSeconds = (now - lastFrameTime) / 1000;
        lastFrameTime = now;

        const reduceMotion = reduceMotionQuery && reduceMotionQuery.matches;
        if (!reduceMotion) {
            angle += (2 * Math.PI / ORBIT_PERIOD_S) * dtSeconds;
        }

        const x = Math.cos(angle) * ORBIT_RADIUS_X;
        const y = Math.sin(angle) * ORBIT_RADIUS_Y;

        // Bottom half of the ellipse reads as "nearer" (in front of
        // the globe); top half reads as "farther" (behind it).
        const isBehind = y < 0;
        const depthScale = isBehind ? 0.6 : 1;
        const depthOpacity = isBehind ? 0.5 : 1;

        moonMarkerEl.style.transform =
            'translate(-50%, -50%) translate(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px) scale(' + depthScale + ')';
        moonMarkerEl.style.opacity = String(depthOpacity);
        moonMarkerEl.style.zIndex = isBehind ? '0' : '3';

        requestAnimationFrame(orbitTick);
    }

    requestAnimationFrame(orbitTick);
}

const world = Globe()
       (document.getElementById('globeViz'))
       .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
       .backgroundColor('rgba(0,0,0,0)')
       .showAtmosphere(true)
       .atmosphereColor('#4da6ff')
       .atmosphereAltitude(0.18)
       .ringColor(() => '#c8a96e')
       .ringMaxRadius(22)
       .ringPropagationSpeed(9)
       .ringRepeatPeriod(0)
       .width(window.innerWidth)
       .height(window.innerHeight);

fetch('https://unpkg.com/world-atlas@2/countries-110m.json')
    .then(res => res.json())
    .then(topology => {
        const countries = topojson.feature(topology, topology.objects.countries);

        const matched = countries.features.filter(f => highlightedCountries[f.properties.name]);
        console.log('Matched:', matched.length, 'of', Object.keys(highlightedCountries).length);

        world
            .polygonsData(countries.features)
            .polygonCapColor(feat => {
                const name = feat.properties.name;
                return highlightedCountries[name] || 'rgba(255,255,255,0.04)';
            })
            .polygonSideColor(() => 'rgba(0,0,0,0)')
            .polygonStrokeColor(() => 'rgba(255,255,255,0.15)')
            .polygonAltitude(feat => highlightedCountries[feat.properties.name] ? 0.01 : 0.005)
            .onPolygonClick(feat => {
                const name = feat.properties.name;
                if (!highlightedCountries[name]) return;

                infoPanelEl.classList.remove('is-hidden');

                const special = SPECIAL_PANELS[name];
                if (special) {
                    let html =
                        '<p class="globe-info-label">' + name + '</p>' +
                        '<h3 class="globe-info-title">' + special.title + '</h3>' +
                        '<p class="globe-info-body">' + special.body + '</p>';

                    if (special.linkedEntryId) {
                        const linked = (window.TIMELINE_ENTRIES || []).find(
                            function (e) { return e.id === special.linkedEntryId; }
                        );
                        if (linked) {
                            html +=
                                '<p class="globe-info-jumplink" data-id="' + escapeHtmlGlobe(linked.id) + '" tabindex="0" role="button">' +
                                'Ver “' + escapeHtmlGlobe(linked.title) + '” en la línea de tiempo →</p>';
                        }
                    }

                    infoContentEl.innerHTML = html;
                    return;
                }

                const works = getConnectedWorks(name);
                if (works.length > 0) {
                    infoContentEl.innerHTML =
                        '<p class="globe-info-label">' + name + '</p>' +
                        '<h3 class="globe-info-title">Connected Works</h3>' +
                        '<ul class="globe-info-worklist">' + renderWorksList(works) + '</ul>';
                } else {
                    infoContentEl.innerHTML =
                        '<p class="globe-info-label">' + name + '</p>' +
                        '<h3 class="globe-info-title">Connected Works</h3>' +
                        '<p class="globe-info-body">Authors and history tied to ' + name + ' will appear here as the archive grows.</p>';
                }
            });
    });

/* ---------------------------------------------------------
   Amazon rainforest outline
   Hand-drawn approximation (not sourced from a precise biome
   shapefile — this environment has no access to GIS data
   hosts) tracing the rough extent of the Amazon basin/
   rainforest across Brazil, Peru, Bolivia, Ecuador, Colombia,
   Venezuela, Guyana and French Guiana.
   --------------------------------------------------------- */
const AMAZON_OUTLINE = [
    [7.0, -73.0],
    [8.5, -66.0],
    [6.5, -60.0],
    [4.5, -58.0],
    [2.0, -54.0],
    [2.5, -51.0],
    [0.5, -49.5],
    [-1.5, -48.5],
    [-3.0, -44.5],
    [-7.0, -46.0],
    [-10.0, -50.0],
    [-13.0, -56.0],
    [-15.5, -60.0],
    [-16.0, -65.0],
    [-13.0, -69.0],
    [-10.5, -73.5],
    [-6.0, -76.0],
    [-3.5, -78.0],
    [0.5, -77.0],
    [2.5, -75.5],
    [7.0, -73.0]
];

world
    .pathsData([AMAZON_OUTLINE])
    .pathColor(() => '#ff2b2b')
    .pathStroke(1.6)
    .pathPointAlt(() => 0.03);

/* ---------------------------------------------------------
   North Pole marker — small dot, same neon yellow as
   Antarctica. Longitude is meaningless exactly at the pole,
   so 0 is as good as any.
   --------------------------------------------------------- */
world
    .pointsData([{ lat: 90, lng: 0 }])
    .pointColor(() => '#faff00')
    .pointRadius(0.3)
    .pointAltitude(0.02);

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.4;

/* ---------------------------------------------------------
   Timeline -> Globe hook
   Rough centroid per country name AS USED IN timeline-data.js's
   `country` field (Spanish), so selecting an entry on the
   timeline can rotate the globe to that country — closing the
   loop on the globe -> timeline links built earlier. Approximate
   by eye, not sourced from precise centroid data; good enough to
   bring the right region into view.
   --------------------------------------------------------- */
const COUNTRY_CENTER = {
    'España': { lat: 40.0, lng: -4.0 },
    'Guatemala': { lat: 15.5, lng: -90.3 },
    'México': { lat: 23.6, lng: -102.5 },
    'Bahamas': { lat: 24.25, lng: -76.0 },
    'República Dominicana': { lat: 18.7, lng: -70.2 },
    'Chile': { lat: -35.7, lng: -71.5 },
    'Perú': { lat: -9.2, lng: -75.0 },
    'Jamaica': { lat: 18.1, lng: -77.3 },
    'Nicaragua': { lat: 12.9, lng: -85.2 },
    'Argentina': { lat: -38.4, lng: -63.6 },
    'Uruguay': { lat: -32.5, lng: -55.8 },
    'Cuba': { lat: 21.5, lng: -79.5 },
    'Colombia': { lat: 4.0, lng: -72.0 },
    'Puerto Rico': { lat: 18.2, lng: -66.5 },
    'El Salvador': { lat: 13.8, lng: -88.9 },
    'Estados Unidos': { lat: 39.8, lng: -98.6 },
    'Japón': { lat: 36.2, lng: 138.3 }
};

window.focusGlobeOnCountry = function (countryName) {
    const center = COUNTRY_CENTER[countryName];
    if (!center) return false;
    world.controls().autoRotate = false;
    world.pointOfView({ lat: center.lat, lng: center.lng, altitude: 1.7 }, 1200);
    // Fresh array/object each call so the ring re-triggers even when
    // clicking the same country's entries back to back.
    world.ringsData([{ lat: center.lat, lng: center.lng }]);
    return true;
};

window.addEventListener('resize', () => {
    world.width(window.innerWidth);
    world.height(window.innerHeight);
});

const ZOOM_ZONE_WIDTH_FRACTION = 0.5;

function isInZoomZone(clientX) {
    const zoneHalfWidth = (window.innerWidth * ZOOM_ZONE_WIDTH_FRACTION) / 2;
    const center = window.innerWidth / 2;
    return clientX >= center - zoneHalfWidth && clientX <= center + zoneHalfWidth;
}

const globeEl = document.getElementById('globeViz');

globeEl.addEventListener(
    'wheel',
    (e) => {
        if (!isInZoomZone(e.clientX)) {
            e.stopImmediatePropagation();
        }
    },
    { capture: true, passive: true }
);
