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
    'China': '#ff3b3b',
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
  },
  'China': {
    title: 'Pandemia Global',
    body:
      'A finales de 2019 aparecen en <button type="button" class="globe-info-geolink" data-region="Wuhan" data-country="China">Wuhan</button> los primeros casos de una neumonía viral desconocida —un nuevo coronavirus— que en marzo de 2020 la Organización Mundial de la Salud (<button type="button" class="globe-info-geolink" data-region="Ginebra" data-country="Suiza">OMS</button>) declara pandemia global. El golpe fue desigual pero brutal: <button type="button" class="globe-info-geolink" data-country="México">México</button>, con un gobierno que minimizó el virus, cerró 2020 con 200,256 muertes por COVID-19 según el conteo definitivo del INEGI; <button type="button" class="globe-info-geolink" data-country="España">España</button> impuso un confinamiento draconiano mientras cerca de 20,000 mayores de 65 años morían solo en 2020 en residencias colapsadas; <button type="button" class="globe-info-geolink" data-country="Colombia">Colombia</button> decretó una de las cuarentenas más largas del planeta, casi cinco meses en Bogotá; <button type="button" class="globe-info-geolink" data-country="Argentina">Argentina</button> lanzó, ya en marzo, una de las cuarentenas más tempranas y prolongadas del mundo; <button type="button" class="globe-info-geolink" data-country="El Salvador">El Salvador</button>, bajo Bukele, encerró a miles en centros de contención forzosa; <button type="button" class="globe-info-geolink" data-country="Cuba">Cuba</button> desarrolló sus propias vacunas pese al embargo estadounidense; <button type="button" class="globe-info-geolink" data-country="Perú">Perú</button> sufrió la tasa de mortalidad per cápita más alta del mundo —37,621 muertes oficiales, más de 91,000 según el registro civil de decesos—; <button type="button" class="globe-info-geolink" data-country="Nicaragua">Nicaragua</button>, bajo Ortega, negó la gravedad del virus; <button type="button" class="globe-info-geolink" data-country="Venezuela">Venezuela</button> enfrentó la crisis con hospitales que ya carecían de agua y luz; <button type="button" class="globe-info-geolink" data-country="Guatemala">Guatemala</button> vio en los migrantes deportados desde Estados Unidos sus primeros focos de contagio; <button type="button" class="globe-info-geolink" data-country="Panamá">Panamá</button> cerró el Canal y selló fronteras en cuestión de días; <button type="button" class="globe-info-geolink" data-country="Costa Rica">Costa Rica</button> se apoyó en la Caja, su sistema público de salud; y <button type="button" class="globe-info-geolink" data-country="Puerto Rico">Puerto Rico</button>, todavía roto por el huracán María, sumó un toque de queda a una isla ya agotada. En <button type="button" class="globe-info-geolink" data-region="Bahía de San Francisco" data-country="Estados Unidos">Estados Unidos</button> el drama se concentró frente a la bahía de San Francisco: el crucero Grand Princess, con un brote de COVID a bordo, fue retenido varios días en altamar sin poder atracar mientras Washington decidía qué hacer con sus más de 3,500 pasajeros y tripulantes, hasta que finalmente fue autorizado a desembarcar bajo cuarentena en el puerto de Oakland.',
    linkedEntryId: 'pandemia-covid19-2020'
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
    'Japan': 'Japón',
    'China': 'China'
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
const GEOLINK_SELECTOR = '.globe-info-geolink[data-country]';

function handleInfoContentActivation(e) {
    const jumpEl = e.target.closest(JUMPABLE_SELECTOR);
    if (jumpEl) {
        goToTimelineEntry(jumpEl.getAttribute('data-id'));
        return;
    }
    const geoEl = e.target.closest(GEOLINK_SELECTOR);
    if (geoEl && typeof window.focusGlobeOnRegion === 'function') {
        window.focusGlobeOnRegion(geoEl.getAttribute('data-region') || '', geoEl.getAttribute('data-country'));
    }
}

if (infoContentEl) {
    infoContentEl.addEventListener('click', handleInfoContentActivation);
    infoContentEl.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        if (!e.target.closest(JUMPABLE_SELECTOR + ', ' + GEOLINK_SELECTOR)) return;
        e.preventDefault();
        handleInfoContentActivation(e);
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
       per lap) is fixed for every viewport. Radius is capped by
       viewport width (see getOrbitRadiusX below) so the moon still
       reads as visible on a phone-width screen instead of spending
       most of its lap swung off both edges. */
    const ORBIT_PERIOD_S = 6.5;
    // Widened 1.8x, same aspect ratio as before (260:95 -> 468:171)
    // so the ellipse's proportions -- and therefore how convincingly
    // it reads as a tilted circular orbit -- don't change, just its
    // overall scale. These are the desktop/wide-viewport maximums.
    const ORBIT_RADIUS_X_MAX = 468;
    const ORBIT_RADIUS_Y_MAX = 171;
    const ORBIT_ASPECT = ORBIT_RADIUS_Y_MAX / ORBIT_RADIUS_X_MAX;
    const reduceMotionQuery = window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;

    // Scales down toward narrow viewports, capped at the desktop max;
    // window.innerWidth is cheap to read every frame (no reflow).
    function getOrbitRadiusX() {
        return Math.min(ORBIT_RADIUS_X_MAX, window.innerWidth * 0.4);
    }

    let angle = 0;
    let lastFrameTime = null;
    let lastIsBehind = null;

    function orbitTick(now) {
        if (lastFrameTime === null) lastFrameTime = now;
        const dtSeconds = (now - lastFrameTime) / 1000;
        lastFrameTime = now;

        const reduceMotion = reduceMotionQuery && reduceMotionQuery.matches;
        if (!reduceMotion) {
            angle += (2 * Math.PI / ORBIT_PERIOD_S) * dtSeconds;
        }

        const orbitRadiusX = getOrbitRadiusX();
        const orbitRadiusY = orbitRadiusX * ORBIT_ASPECT;
        const x = Math.cos(angle) * orbitRadiusX;
        const y = Math.sin(angle) * orbitRadiusY;

        // Depth as a continuous 0 (farthest/top) -> 1 (nearest/bottom)
        // factor instead of a hard behind/in-front switch, so scale and
        // opacity ease across the whole orbit rather than snapping at
        // the midpoint -- that snap (particularly on scale, which has
        // no CSS transition) was the main source of the choppy look.
        const depthFactor = (y / orbitRadiusY + 1) / 2;
        const depthScale = 0.6 + depthFactor * 0.4;
        const depthOpacity = 0.5 + depthFactor * 0.5;

        // z-index can't be eased (it's a discrete stacking property),
        // so it still flips at the midpoint -- but only written when it
        // actually changes, instead of every frame regardless.
        const isBehind = y < 0;
        if (isBehind !== lastIsBehind) {
            moonMarkerEl.style.zIndex = isBehind ? '0' : '3';
            lastIsBehind = isBehind;
        }

        moonMarkerEl.style.transform =
            'translate(-50%, -50%) translate(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px) scale(' + depthScale.toFixed(3) + ')';
        moonMarkerEl.style.opacity = depthOpacity.toFixed(3);

        requestAnimationFrame(orbitTick);
    }

    requestAnimationFrame(orbitTick);
}

/* Mirrors the #globeViz / .moon-orbit-wrapper max-width:768px CSS
   override in globe.css exactly (80vh there, 0.8 here) -- keeping the
   WebGL canvas's actual render resolution in sync with its CSS box
   size so it doesn't stretch or crop on mobile. */
const GLOBE_MOBILE_BREAKPOINT_PX = 768;
const GLOBE_MOBILE_HEIGHT_FRACTION = 0.8;

function getGlobeHeight() {
    return window.innerWidth <= GLOBE_MOBILE_BREAKPOINT_PX
        ? window.innerHeight * GLOBE_MOBILE_HEIGHT_FRACTION
        : window.innerHeight;
}

const world = Globe()
       (document.getElementById('globeViz'))
       .globeImageUrl('vendor/textures/earth-dark.jpg')
       .backgroundColor('rgba(0,0,0,0)')
       .showAtmosphere(true)
       .atmosphereColor('#4da6ff')
       .atmosphereAltitude(0.18)
       .ringColor(() => '#D6FCFF')
       .ringMaxRadius(22)
       .ringPropagationSpeed(9)
       .ringRepeatPeriod(0)
       .width(window.innerWidth)
       .height(getGlobeHeight());

fetch('vendor/textures/countries-110m.json')
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
   North Pole marker — small dot, same neon yellow as
   Antarctica. Longitude is meaningless exactly at the pole,
   so 0 is as good as any.

   Shares the same pointsData layer with the region "blip" dot
   (see focusGlobeOnRegion below), so both are tagged with a
   `kind` field and styled per-kind via accessor functions.
   --------------------------------------------------------- */
const POLE_POINT = { lat: 90, lng: 0, kind: 'pole' };

world
    .pointsData([POLE_POINT])
    .pointColor((d) => (d.kind === 'region' ? '#D6FCFF' : '#faff00'))
    .pointRadius((d) => (d.kind === 'region' ? 0.45 : 0.3))
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
    'Japón': { lat: 36.2, lng: 138.3 },
    'Haití': { lat: 19.0, lng: -72.4 },
    'Venezuela': { lat: 8.0, lng: -66.0 },
    'Ecuador': { lat: -1.5, lng: -78.5 },
    'China': { lat: 35.86, lng: 104.2 },
    'Panamá': { lat: 8.5, lng: -80.0 },
    'Costa Rica': { lat: 9.9, lng: -84.1 },
    'Suiza': { lat: 46.8, lng: 8.2 },
    'Honduras': { lat: 14.6, lng: -86.8 },
    'Bolivia': { lat: -16.5, lng: -64.7 },
    'San Vicente y las Granadinas': { lat: 13.25, lng: -61.20 },
    'Sudáfrica': { lat: -30.5, lng: 25.0 }
};

/* City/region-level centroids, keyed by timeline-data.js's `region`
   field exactly. Covers every distinct region value in use as of
   this writing. Approximate by eye, same spirit as COUNTRY_CENTER. */
const REGION_CENTER = {
    'Almería': { lat: 36.83, lng: -2.46 },
    'Balliceaux': { lat: 13.01, lng: -61.19 },
    'Barcelona': { lat: 41.39, lng: 2.17 },
    'Bilbao': { lat: 43.26, lng: -2.94 },
    'Cádiz': { lat: 36.53, lng: -6.30 },
    'Covadonga': { lat: 43.31, lng: -4.99 },
    'Cusco': { lat: -13.53, lng: -71.97 },
    'Córdoba': { lat: 37.89, lng: -4.78 },
    'Estoril': { lat: 38.70, lng: -9.40 },
    'Figueres': { lat: 42.27, lng: 2.96 },
    'Guadalajara': { lat: 40.63, lng: -3.17 },
    'Iguala, Guerrero': { lat: 18.35, lng: -99.54 },
    'Kingston': { lat: 17.97, lng: -76.79 },
    'La Rioja': { lat: 42.47, lng: -2.45 },
    'Los Ángeles, California': { lat: 34.05, lng: -118.24 },
    'Madrid': { lat: 40.42, lng: -3.70 },
    'Málaga': { lat: 36.72, lng: -4.42 },
    'Roatán': { lat: 16.32, lng: -86.53 },
    'Salamanca': { lat: 40.97, lng: -5.66 },
    'San Vicente': { lat: 13.25, lng: -61.20 },
    'Santiago de Compostela': { lat: 42.88, lng: -8.54 },
    'Sevilla': { lat: 37.39, lng: -5.99 },
    'Soria': { lat: 41.76, lng: -2.47 },
    'Sucre': { lat: -19.03, lng: -65.26 },
    'Tepatitlán, Jalisco': { lat: 20.82, lng: -102.73 },
    'Tlatelolco, Ciudad de México': { lat: 19.44, lng: -99.14 },
    'Wuhan': { lat: 30.59, lng: 114.31 },
    'Bahía de San Francisco': { lat: 37.78, lng: -122.42 },
    'Ginebra': { lat: 46.20, lng: 6.14 },
    'Toledo': { lat: 39.86, lng: -4.02 },
    'Valencia': { lat: 39.47, lng: -0.38 },
    'San José Villanueva': { lat: 13.56, lng: -89.26 },
    'Zaragoza': { lat: 41.65, lng: -0.88 },
    // Abolition-of-slavery arc (added together, see timeline-data.js
    // "ABOLICIÓN DE LA ESCLAVITUD EN AMÉRICA" section)
    'Cap-Haïtien': { lat: 19.76, lng: -72.20 },
    'Gonaïves': { lat: 19.45, lng: -72.68 },
    'Santiago': { lat: -33.45, lng: -70.65 },
    'Ciudad de Guatemala': { lat: 14.63, lng: -90.51 },
    'Ciudad de México': { lat: 19.43, lng: -99.13 },
    'Buenos Aires': { lat: -34.61, lng: -58.38 },
    'Santa Fe': { lat: -31.63, lng: -60.70 },
    'Bogotá': { lat: 4.71, lng: -74.07 },
    'Quito': { lat: -0.18, lng: -78.47 },
    'Montevideo': { lat: -34.90, lng: -56.16 },
    'Caracas': { lat: 10.48, lng: -66.90 },
    'Lima': { lat: -12.05, lng: -77.04 },
    'San Juan': { lat: 18.47, lng: -66.11 },
    'La Habana': { lat: 23.13, lng: -82.38 },
    // Música arc (added together, see timeline-data.js "MÚSICA" section)
    'Corpus Christi': { lat: 27.80, lng: -97.40 },
    'Monterrey': { lat: 25.67, lng: -100.31 },
    'Guadalajara, Jalisco': { lat: 20.68, lng: -103.35 },
    'Ciudad Juárez': { lat: 31.69, lng: -106.42 },
    'Parácuaro': { lat: 19.10, lng: -102.28 },
    'Miami': { lat: 25.76, lng: -80.19 },
    'Barranquilla': { lat: 10.96, lng: -74.80 },
    'Zapopan': { lat: 20.72, lng: -103.40 },
    'Santiago del Estero': { lat: -27.80, lng: -64.26 },
    'Paramount, California': { lat: 33.89, lng: -118.16 },
    'Huntington Park, California': { lat: 33.98, lng: -118.22 },
    'Culiacán': { lat: 24.79, lng: -107.38 },
    'Santa Clara, California': { lat: 37.35, lng: -121.95 },
    'Vega Baja': { lat: 18.44, lng: -66.39 },
    'Lake Jackson': { lat: 29.03, lng: -95.43 },
    'Santa Mónica, California': { lat: 34.02, lng: -118.50 },
    'Nueva York': { lat: 40.71, lng: -74.01 },
    'Fort Lee, Nueva Jersey': { lat: 40.85, lng: -73.97 }
};

let regionRippleTimeoutIds = [];
let regionBlipClearTimeoutId = null;
const regionBlipSound = new Audio('sounds/positive-blip-effect.wav');

// How long after the first ring each follow-up ripple fires. Staggered
// well before the ~2.4s single-ring animation (ringMaxRadius /
// ringPropagationSpeed) fully fades, so the ripples cascade outward
// overlapping each other instead of playing one at a time.
const REGION_RIPPLE_STAGGER_MS = 700;
const REGION_RIPPLE_EXTRA_COUNT = 2;

window.focusGlobeOnRegion = function (regionName, countryName) {
    // Prefer the precise city/region centroid; fall back to the
    // country-level centroid for entries with no region-specific entry.
    const center = REGION_CENTER[regionName] || COUNTRY_CENTER[countryName];
    if (!center) return false;
    world.controls().autoRotate = false;
    world.pointOfView({ lat: center.lat, lng: center.lng, altitude: 1.7 }, 1200);

    // Cancel any ripples -- and any delayed dot-clear from a card that
    // was just closed -- still pending from a previous click, so they
    // don't fire late at the wrong (or now-current) location.
    regionRippleTimeoutIds.forEach(clearTimeout);
    regionRippleTimeoutIds = [];
    if (regionBlipClearTimeoutId) {
        clearTimeout(regionBlipClearTimeoutId);
        regionBlipClearTimeoutId = null;
    }

    // Fresh array/object each call so the ring re-triggers even when
    // clicking the same location's entries back to back, then two more
    // staggered ripples from the same point for a cascading radar-ping
    // look instead of a single pulse.
    world.ringsData([{ lat: center.lat, lng: center.lng }]);
    for (let i = 1; i <= REGION_RIPPLE_EXTRA_COUNT; i++) {
        regionRippleTimeoutIds.push(
            setTimeout(() => {
                world.ringsData([{ lat: center.lat, lng: center.lng }]);
            }, REGION_RIPPLE_STAGGER_MS * i)
        );
    }

    // Radar-ping blip: a solid dot marks the exact point and stays
    // there for as long as the card is open, plus a few seconds after
    // it closes (see clearGlobeRegionBlipDelayed, called from
    // timeline.js's closeDetailPanel) -- not cleared on a fixed timer
    // tied to when it first appeared.
    world.pointsData([POLE_POINT, { lat: center.lat, lng: center.lng, kind: 'region' }]);

    // Restart from the top on every call so rapid clicks between
    // different regions don't stack overlapping playback.
    regionBlipSound.currentTime = 0;
    regionBlipSound.play().catch(function () {});

    return true;
};

window.clearGlobeRegionBlip = function () {
    if (regionBlipClearTimeoutId) {
        clearTimeout(regionBlipClearTimeoutId);
        regionBlipClearTimeoutId = null;
    }
    world.pointsData([POLE_POINT]);
};

// Same as clearGlobeRegionBlip, but waits delayMs first -- lets the dot
// linger a moment after the card closes instead of vanishing instantly.
window.clearGlobeRegionBlipDelayed = function (delayMs) {
    if (regionBlipClearTimeoutId) clearTimeout(regionBlipClearTimeoutId);
    regionBlipClearTimeoutId = setTimeout(() => {
        world.pointsData([POLE_POINT]);
        regionBlipClearTimeoutId = null;
    }, delayMs);
};

// window 'resize' alone can leave this canvas's actual render resolution
// stale relative to its CSS box -- #globeViz/.moon-orbit-wrapper are plain
// CSS %/vh, so they always relayout on any viewport change regardless of
// whether a 'resize' event fires, but this canvas's WebGL resolution only
// updates inside that event handler. Same class of bug already fixed this
// way for the Singularity orb and the About page portal canvas:
// ResizeObserver on the actual container catches the box's real size
// changing regardless of what triggered it, instead of depending on a
// 'resize' event that isn't guaranteed to fire for every resize.
function syncGlobeSize() {
    world.width(window.innerWidth);
    world.height(getGlobeHeight());
}
window.addEventListener('resize', syncGlobeSize);
if ('ResizeObserver' in window) {
    new ResizeObserver(syncGlobeSize).observe(document.getElementById('globeViz'));
}

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
