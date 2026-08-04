const highlightedCountries = {
    // Charcoal gray — West Asia / Middle East cluster
    'Iraq': '#4a4a52',
    'Iran': '#4a4a52',
    'Palestine': '#4a4a52',
    'Saudi Arabia': '#4a4a52',
    'Armenia': '#4a4a52',
    'United Arab Emirates': '#4a4a52',
    'Jordan': '#4a4a52',
    'Yemen': '#4a4a52',
    'Oman': '#4a4a52',
    'Syria': '#4a4a52',
    'Afghanistan': '#4a4a52',
    'Kyrgyzstan': '#4a4a52',
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
    'Brazil': '#ff6a00',
    'Cuba': '#39ff6a',
    'Dominican Rep.': '#39ff6a',
    'Haiti': '#39ff6a',
    'Spain': '#39ff6a',
    'Portugal': '#ff6a00',
    'Morocco': '#39ff6a',
    'Belgium': '#ff9ecf',
    'Austria': '#ff9ecf',
    'France': '#ff9ecf',
    'Canada': '#ff9ecf',
    'Italy': '#c8a96e',
    'Greece': '#c8a96e',
    'Turkey': '#c8a96e',
    'Bulgaria': '#c8a96e',
    'Georgia': '#c8a96e',
    'Angola': '#ff6a00',
    'Mozambique': '#ff6a00',
    'Guinea-Bissau': '#ff6a00',
    'Timor-Leste': '#ff6a00',
    'Eq. Guinea': '#39ff6a',
    'Philippines': '#39ff6a',
    // Rest of Africa, lit up together in neon purple — Morocco, Angola,
    // Mozambique, Guinea-Bissau and Eq. Guinea keep their own colors above
    // (Romance-language / Lusophone groups) rather than joining this set.
    'Algeria': '#a64dff',
    'Benin': '#a64dff',
    'Botswana': '#a64dff',
    'Burkina Faso': '#a64dff',
    'Burundi': '#a64dff',
    'Cameroon': '#a64dff',
    'Central African Rep.': '#a64dff',
    'Chad': '#a64dff',
    'Congo': '#a64dff',
    "Côte d'Ivoire": '#a64dff',
    'Dem. Rep. Congo': '#a64dff',
    'Djibouti': '#a64dff',
    'Egypt': '#a64dff',
    'Eritrea': '#a64dff',
    'Ethiopia': '#a64dff',
    'Gabon': '#a64dff',
    'Gambia': '#a64dff',
    'Ghana': '#a64dff',
    'Guinea': '#a64dff',
    'Kenya': '#a64dff',
    'Lesotho': '#a64dff',
    'Liberia': '#a64dff',
    'Libya': '#a64dff',
    'Madagascar': '#a64dff',
    'Malawi': '#a64dff',
    'Mali': '#a64dff',
    'Mauritania': '#a64dff',
    'Namibia': '#a64dff',
    'Niger': '#a64dff',
    'Nigeria': '#a64dff',
    'Rwanda': '#a64dff',
    'S. Sudan': '#a64dff',
    'Senegal': '#a64dff',
    'Sierra Leone': '#a64dff',
    'Somalia': '#a64dff',
    'Somaliland': '#a64dff',
    'South Africa': '#a64dff',
    'Sudan': '#a64dff',
    'Tanzania': '#a64dff',
    'Togo': '#a64dff',
    'Tunisia': '#a64dff',
    'Uganda': '#a64dff',
    'W. Sahara': '#a64dff',
    'Zambia': '#a64dff',
    'Zimbabwe': '#a64dff',
    'eSwatini': '#a64dff',
    'United States of America': '#4da6ff',
    'United Kingdom': '#4da6ff',
    'Netherlands': '#4da6ff',
    'Australia': '#4da6ff',
    'Germany': '#4da6ff',
    'Poland': '#4da6ff',
    'Puerto Rico': '#4da6ff',
    'Belize': '#4da6ff',
    'Jamaica': '#4da6ff',
    'India': '#4da6ff',
    'Pakistan': '#4da6ff',
    'Japan': '#ff3b3b',
    'China': '#ff3b3b',
    'Mongolia': '#ff3b3b',
    'Myanmar': '#ff3b3b',
    'Thailand': '#ff3b3b',
    'Vietnam': '#ff3b3b',
    'Taiwan': '#ff3b3b',
    'South Korea': '#ff3b3b',
    'Russia': '#faff00',
    'North Korea': '#faff00',
    'Israel': '#faff00',
    'Nepal': '#4da6ff',
    'Bhutan': '#4da6ff',
    'Antarctica': '#ffffff'
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

  'Canada': {
    title: 'Francofonía',
    body:
      "Canadá es oficialmente bilingüe desde la Ley de Lenguas Oficiales de 1969: el inglés y el francés tienen el mismo estatus ante el gobierno federal. Esa igualdad nace sobre todo de Quebec, la provincia donde casi el 80% de la población habla francés como primera lengua, y donde Montreal se ha convertido en la segunda ciudad francófona más grande del mundo, después de París. Casi 7.7 millones de canadienses tienen el francés como lengua materna, y el país es miembro pleno de la Francofonía internacional. El francés canadiense, además, conserva rasgos propios —el joual quebequense, el acadiense de los Maritimes— que lo distinguen claramente del francés de Francia: prueba de una lengua que echó raíces propias a miles de kilómetros de su origen."
  },

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
    title: 'Partición',
    body:
      "La independencia de la India el 15 de agosto de 1947 llega inseparable de su partición: un solo país colonial se convierte, de la noche a la mañana, en dos estados enfrentados por la línea que el abogado británico Cyril Radcliffe trazó sin haber pisado nunca el subcontinente. Jawaharlal Nehru se convierte en el primer primer ministro de una India independiente pero herida, mientras Mahatma Gandhi —que se había opuesto a la partición y ayunaba para detener la violencia entre hindúes y musulmanes— es asesinado apenas cinco meses y medio después, el 30 de enero de 1948, por Nathuram Godse, un nacionalista hindú que lo consideraba demasiado conciliador con los musulmanes y con Pakistán. La disputa por Cachemira, un estado principesco de mayoría musulmana gobernado por un maharajá hindú que optó por unirse a la India, desata la primera guerra indo-pakistaní ese mismo año y sigue sin resolverse casi ocho décadas después. Catorce años más tarde, en 1962, el poeta mexicano Octavio Paz llega a Nueva Delhi como embajador de México — la mirada más profunda que un escritor latinoamericano dedicaría jamás al subcontinente, todavía habitado por las heridas abiertas de la partición.",
    linkedEntryId: 'octavio-paz-embajador-india-1962'
  },
  'Pakistan': {
    title: 'Partición',
    body:
      "En agosto de 1947, apenas semanas antes de que el Raj británico dejara de existir, el gobierno de Londres encarga al abogado Cyril Radcliffe —que nunca antes había pisado la India— trazar en cinco semanas la frontera que dividiría el subcontinente en dos países independientes: la India de mayoría hindú y Pakistán, de mayoría musulmana, formado además por dos alas separadas por 1,600 kilómetros de territorio indio (Pakistán Occidental y Pakistán Oriental, este último independizado en 1971 como Bangladesh). La llamada 'Línea Radcliffe' cortó de golpe regiones enteras —Punjab y Bengala— sin considerar ríos, ferrocarriles ni comunidades que quedaron divididas de la noche a la mañana. El resultado fue una de las mayores migraciones forzadas de la historia: entre 10 y 20 millones de personas cruzaron la nueva frontera en ambas direcciones, y la violencia comunal que estalló durante la partición dejó entre 200,000 y dos millones de muertos, según distintas estimaciones. Lord Mountbatten, el último virrey británico, adelantó la fecha de independencia casi diez meses, dejando apenas semanas para una tarea que debía tomar años — una salida apresurada cuyas consecuencias el subcontinente sigue procesando casi ocho décadas después."
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
    'Canada': 'Canadá',
    'Italy': 'Italia',
    'Eq. Guinea': 'Guinea Ecuatorial',
    'United States of America': 'Estados Unidos',
    'United Kingdom': 'Reino Unido',
    'Puerto Rico': 'Puerto Rico',
    'Jamaica': 'Jamaica',
    'Japan': 'Japón',
    'China': 'China',
    'Turkey': 'Turquía'
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

const globeContainerEl = document.getElementById('globeViz');
const initialGlobeWidth = Math.max(1, Math.round(globeContainerEl.clientWidth));
const initialGlobeHeight = Math.max(1, Math.round(globeContainerEl.clientHeight));

const world = Globe()
       (globeContainerEl)
       .globeImageUrl('vendor/textures/earth-dark.jpg')
       .backgroundColor('rgba(0,0,0,0)')
       .showAtmosphere(true)
       .atmosphereColor('#4da6ff')
       .atmosphereAltitude(0.18)
       .ringColor(() => '#D6FCFF')
       .ringMaxRadius(22)
       .ringPropagationSpeed(9)
       .ringRepeatPeriod(0)
       .width(initialGlobeWidth)
       .height(initialGlobeHeight);

// U.S. states once claimed/governed as Spanish or Mexican territory —
// the Mexican Cession of 1848 (CA, NV, UT, AZ, NM, CO), the Republic of
// Texas (formerly Coahuila y Tejas), Spanish Florida (ceded 1821), and
// Spanish Louisiana (1762-1800, including the future state of Louisiana).
// Rendered as a second, higher-altitude polygon layer on top of the
// country layer so they read as lit-up regions within the US, same idea
// as highlightedCountries but at state granularity.
const US_HERITAGE_STATES = new Set([
    'California', 'Nevada', 'Utah', 'Arizona', 'New Mexico', 'Colorado',
    'Texas', 'Florida', 'Louisiana'
]);
const US_HERITAGE_COLOR = '#39ff6a';

// U.S. states first claimed/settled as French territory — the Louisiana
// Territory's Great Plains footprint, the Illinois Country and Great
// Lakes fur-trade posts, the Gulf Coast (Mobile, Biloxi, Natchez), and
// the Acadian corner of Maine. Louisiana, Texas, Colorado and New Mexico
// are French-adjacent too (La Salle's claim, then Spanish 1762-1800) but
// stay in US_HERITAGE_STATES above since they're colored for their
// Spanish/Mexican chapter instead — a state only carries one color here.
const US_FRENCH_HERITAGE_STATES = new Set([
    'Arkansas', 'Missouri', 'Iowa', 'Minnesota', 'North Dakota', 'South Dakota',
    'Nebraska', 'Kansas', 'Oklahoma', 'Wyoming', 'Montana',
    'Illinois', 'Indiana', 'Michigan', 'Wisconsin',
    'Alabama', 'Mississippi', 'Maine'
]);
const US_FRENCH_HERITAGE_COLOR = '#ff9ecf';

// U.S. states lit up for a present-day Latin American diaspora rather
// than colonial territorial history — Virginia was never Spanish or
// Mexican land, so it doesn't belong in US_HERITAGE_STATES above. Reuses
// that same green, on purpose, as the visual language for "Latin America
// lives here too." Currently just Virginia (see the 2024 Salvadoran
// diaspora entry, centered on Chirilagua/Arlandria).
const US_DIASPORA_STATES = new Set(['Virginia']);

Promise.all([
    fetch('vendor/textures/countries-110m.json').then(res => res.json()),
    fetch('vendor/textures/us-states-10m.json').then(res => res.json())
])
    .then(([countryTopology, stateTopology]) => {
        const countries = topojson.feature(countryTopology, countryTopology.objects.countries);
        const states = topojson.feature(stateTopology, stateTopology.objects.states);
        const heritageStates = states.features.filter(f =>
            US_HERITAGE_STATES.has(f.properties.name) ||
            US_FRENCH_HERITAGE_STATES.has(f.properties.name) ||
            US_DIASPORA_STATES.has(f.properties.name)
        );
        const combinedFeatures = countries.features.concat(heritageStates);

        const matched = countries.features.filter(f => highlightedCountries[f.properties.name]);
        console.log('Matched:', matched.length, 'of', Object.keys(highlightedCountries).length);

        world
            .polygonsData(combinedFeatures)
            .polygonCapColor(feat => {
                const name = feat.properties.name;
                if (US_HERITAGE_STATES.has(name)) return US_HERITAGE_COLOR;
                if (US_FRENCH_HERITAGE_STATES.has(name)) return US_FRENCH_HERITAGE_COLOR;
                if (US_DIASPORA_STATES.has(name)) return US_HERITAGE_COLOR;
                return highlightedCountries[name] || 'rgba(255,255,255,0.04)';
            })
            .polygonSideColor(() => 'rgba(0,0,0,0)')
            .polygonStrokeColor(() => 'rgba(255,255,255,0.15)')
            .polygonAltitude(feat => {
                const name = feat.properties.name;
                if (US_HERITAGE_STATES.has(name) || US_FRENCH_HERITAGE_STATES.has(name) || US_DIASPORA_STATES.has(name)) return 0.016;
                return highlightedCountries[name] ? 0.01 : 0.005;
            })
            .onPolygonClick(feat => {
                // Clicking one of the lit-up heritage states falls through to
                // the same info panel as clicking anywhere else in the US —
                // the states are a visual overlay, not a separate click target.
                const name = (US_HERITAGE_STATES.has(feat.properties.name) || US_FRENCH_HERITAGE_STATES.has(feat.properties.name) || US_DIASPORA_STATES.has(feat.properties.name))
                    ? 'United States of America'
                    : feat.properties.name;
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
    .pointColor((d) => (d.kind === 'region' ? '#D6FCFF' : '#ffffff'))
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
    'India': { lat: 20.5937, lng: 78.9629 },
    'Israel': { lat: 31.0461, lng: 34.8516 },
    'Filipinas': { lat: 12.8797, lng: 121.7740 },
    'Sri Lanka': { lat: 7.8731, lng: 80.7718 },
    'Indonesia': { lat: -0.7893, lng: 113.9213 },
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
    'Sudáfrica': { lat: -30.5, lng: 25.0 },
    'Brasil': { lat: -14.24, lng: -51.93 },
    'Francia': { lat: 46.6, lng: 2.2 },
    'Rusia': { lat: 61.52, lng: 105.32 },
    'Portugal': { lat: 39.5, lng: -8.0 },
    'Italia': { lat: 42.5, lng: 12.5 },
    'Canadá': { lat: 56.13, lng: -106.35 },
    'Egipto': { lat: 26.8, lng: 30.8 },
    'Marruecos': { lat: 31.8, lng: -7.1 },
    'Reino Unido': { lat: 55.4, lng: -3.4 },
    'Mongolia': { lat: 46.9, lng: 103.8 },
    'Irak': { lat: 33.0, lng: 44.0 },
    'Mauritania': { lat: 20.0, lng: -10.9 },
    'Congo': { lat: -0.4, lng: 15.8 },
    'Angola': { lat: -11.2027, lng: 17.8739 },
    'Turquía': { lat: 38.9637, lng: 35.2433 },
    'Cabo Verde': { lat: 16.5388, lng: -23.0418 },
    'Kirguistán': { lat: 41.20, lng: 74.77 },
    'Ucrania': { lat: 48.38, lng: 31.17 }
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
    'Copán': { lat: 14.83, lng: -89.14 },
    'Chirilagua': { lat: 38.815, lng: -77.061 },
    'Chirilagua, El Salvador': { lat: 13.217, lng: -88.139 },
    'Quiriguá': { lat: 15.27, lng: -89.04 },
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
    'Porto Santo': { lat: 33.07, lng: -16.33 },
    'San Diego': { lat: 32.72, lng: -117.16 },
    'Navidad': { lat: 19.13, lng: -104.68 },
    'Santa Bárbara': { lat: 34.42, lng: -119.70 },
    'Monterey': { lat: 36.60, lng: -121.89 },
    'Point Reyes': { lat: 38.07, lng: -122.94 },
    'Islas del Canal': { lat: 34.00, lng: -119.80 },
    'San Pedro, California': { lat: 33.74, lng: -118.29 },
    'Santa Cruz, California': { lat: 36.97, lng: -122.03 },
    'Coyoacán': { lat: 19.35, lng: -99.16 },
    'Detroit': { lat: 42.33, lng: -83.05 },
    'El Palo Alto': { lat: 37.43, lng: -122.15 },
    'Asís': { lat: 43.07, lng: 12.61 },
    // The Porziuncola/Santa Maria degli Angeli basilica sits in the plain
    // below the Asís hilltop, ~4km away — its own centroid, not reused
    // from 'Asís' above.
    'Porciúncula': { lat: 43.0589, lng: 12.5781 },
    'Napoli': { lat: 40.8518, lng: 14.2681 },
    'Banco de Londres y América del Sur': { lat: -34.6064, lng: -58.3719 },
    'Biblioteca Nacional de la República Argentina': { lat: -34.5844, lng: -58.3981 },
    // Buildings/monuments still standing today, added together — see
    // timeline-data.js entries covering architecture across the region.
    'Mezquita de Córdoba': { lat: 37.8792, lng: -4.7797 },
    'Machu Picchu': { lat: -13.1631, lng: -72.5451 },
    'Casa Museu Cristóvão Colombo': { lat: 33.0667, lng: -16.3333 },
    'Misión San Diego de Alcalá': { lat: 32.7844, lng: -117.1064 },
    'Capitolio de Sacramento': { lat: 38.5767, lng: -121.4934 },
    'Palacio de Bellas Artes': { lat: 19.4352, lng: -99.1412 },
    'Levi\'s Stadium': { lat: 37.4032, lng: -121.9700 },
    'La Giralda': { lat: 37.3858, lng: -5.9926 },
    'Palacio de la Buhayra': { lat: 37.3742, lng: -5.9764 },
    'Catedral de Burgos': { lat: 42.3410, lng: -3.7038 },
    'Catedral de León': { lat: 42.5990, lng: -5.5688 },
    'Catedral de San Isaac': { lat: 59.9340, lng: 30.3061 },
    'Monasterio de San Juan de Duero': { lat: 41.7683, lng: -2.4544 },
    'Colegio Militar Leoncio Prado': { lat: -12.0742, lng: -77.1183 },
    'Casa Azul': { lat: 19.3551, lng: -99.1625 },
    'MoMA': { lat: 40.7614, lng: -73.9776 },
    'Instituto de Artes de Detroit': { lat: 42.3594, lng: -83.0646 },
    'Rockefeller Center': { lat: 40.7587, lng: -73.9787 },
    'Bolsa de Valores de San Francisco': { lat: 37.7925, lng: -122.4013 },
    'Escuela de Bellas Artes de California': { lat: 37.8035, lng: -122.4171 },
    'Louvre': { lat: 48.8606, lng: 2.3376 },
    'American Folk Art Museum': { lat: 40.7732, lng: -73.9815 },
    'Castillo de Joux': { lat: 46.8725, lng: 6.3742 },
    'Castillo San Felipe del Morro': { lat: 18.4708, lng: -66.1242 },
    'Torres del Parque': { lat: 4.6255, lng: -74.0680 },
    'Archivo General de la Nación, Colombia': { lat: 4.5965, lng: -74.0745 },
    'Biblioteca Pública Virgilio Barco': { lat: 4.6600, lng: -74.0900 },
    'Palacio de Gobierno del Perú': { lat: -12.0464, lng: -77.0309 },
    'Palacio Legislativo del Perú': { lat: -12.0480, lng: -77.0253 },
    'Club Nacional': { lat: -12.0517, lng: -77.0358 },
    'Teatro Municipal de Lima': { lat: -12.0505, lng: -77.0350 },
    'Palacio Arzobispal de Lima': { lat: -12.0461, lng: -77.0297 },
    'Biblioteca Sur': { lat: -12.0850, lng: -76.9350 },
    'Museo Nacional de Antropología': { lat: 19.4260, lng: -99.1861 },
    'Estadio Azteca': { lat: 19.3029, lng: -99.1505 },
    'Basílica de Guadalupe': { lat: 19.4841, lng: -99.1176 },
    'Palacio Legislativo de San Lázaro': { lat: 19.4303, lng: -99.1175 },
    'Biblioteca Vasconcelos': { lat: 19.4475, lng: -99.1508 },
    'Centro Cultural Miguel Ángel Asturias': { lat: 14.6086, lng: -90.5232 },
    'Biblioteca Nacional de El Salvador': { lat: 13.6968, lng: -89.1913 },
    'Catedral Metropolitana de San Salvador': { lat: 13.6975, lng: -89.1911 },
    'Palacio Nacional de El Salvador': { lat: 13.6978, lng: -89.1917 },
    'Hospicio Cabañas': { lat: 20.6749, lng: -103.3378 },
    'Cabrillo National Monument': { lat: 32.6722, lng: -117.2417 },
    'Cristo Redentor': { lat: -22.9519, lng: -43.2105 },
    'Catedral de Caracas': { lat: 10.5048, lng: -66.9181 },
    'Florencia': { lat: 43.7696, lng: 11.2558 },
    'Lisboa': { lat: 38.7223, lng: -9.1393 },
    'Cochín': { lat: 9.9312, lng: 76.2673 },
    'Alhambra': { lat: 37.1761, lng: -3.5881 },
    'Lebrija': { lat: 36.9198, lng: -6.0759 },
    'Universidad de Salamanca': { lat: 40.9613, lng: -5.6669 },
    'Universidad de París': { lat: 48.8462, lng: 2.3430 },
    'Universidad de Stanford': { lat: 37.4275, lng: -122.1697 },
    'Universidad Luliana de Palma': { lat: 39.5711, lng: 2.6497 },
    'Canal de Castilla': { lat: 42.2633, lng: -4.3994 },
    // Birthplaces/specific landmarks added together in the 2026
    // re-sweep — see gramatica-castellana-nebrija-1492 for the Lebrija
    // precedent this follows.
    'Odesa': { lat: 46.4857, lng: 30.7438 },
    'Quetzaltenango': { lat: 14.8347, lng: -91.5181 },
    'Puerto de la Cruz': { lat: 28.4105, lng: -16.5462 },
    'Texcoco': { lat: 19.5392, lng: -99.0331 },
    'Cholula': { lat: 19.0641, lng: -98.3035 },
    'Hita': { lat: 40.8261, lng: -3.0483 },
    'Guernica': { lat: 43.3114, lng: -2.6808 },
    'Reims': { lat: 49.2534, lng: 4.0347 },
    'Limoges': { lat: 45.8289, lng: 1.2667 },
    'Rincón de Velázquez': { lat: 20.8167, lng: -102.733 },
    'Corte Culebra': { lat: 9.0730, lng: -79.6718 },
    'Plaza de las Tres Culturas': { lat: 19.4453, lng: -99.1385 },
    'Cerro del Tepeyac': { lat: 19.4859, lng: -99.1177 },
    'Cerro Corcovado': { lat: -22.9520, lng: -43.2106 },
    'Monte Libredón': { lat: 42.8796, lng: -8.5449 },
    'Gujarat': { lat: 22.2587, lng: 71.1924 },
    'Cataluña': { lat: 41.5912, lng: 1.5209 },
    'Comitán': { lat: 16.2300, lng: -92.1156 },
    'Tel Aviv': { lat: 32.0853, lng: 34.7818 },
    'Universidad Hebrea de Jerusalén': { lat: 31.7925, lng: 35.2442 },
    'Museo del Prado': { lat: 40.4137, lng: -3.6921 },
    'Calicut': { lat: 11.2588, lng: 75.7804 },
    'Sonora': { lat: 29.6461, lng: -110.8689 },
    'Sinaloa': { lat: 25.0, lng: -107.5 },
    'Porto Seguro': { lat: -16.4497, lng: -39.0647 },
    'Sanlúcar de Barrameda': { lat: 36.7761, lng: -6.3535 },
    'Estrecho de Magallanes': { lat: -53.4752, lng: -70.7833 },
    'Mactán': { lat: 10.3111, lng: 124.0153 },
    'Ceilán': { lat: 7.8731, lng: 80.7718 },
    'Sumatra': { lat: -0.5, lng: 101.3 },
    'Damieta': { lat: 31.42, lng: 31.82 },
    'Canal de Suez': { lat: 30.60, lng: 32.27 },
    'Marrakech': { lat: 31.63, lng: -7.99 },
    'Oxford': { lat: 51.75, lng: -1.26 },
    'Karakórum': { lat: 47.20, lng: 102.85 },
    'Pekín': { lat: 39.90, lng: 116.41 },
    'Petra, Mallorca': { lat: 39.614, lng: 3.113 },
    'La Paz, Baja California': { lat: 24.142, lng: -110.312 },
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
    'Fort Lee, Nueva Jersey': { lat: 40.85, lng: -73.97 },
    // Música — orígenes de género (added together, see timeline-data.js
    // "MÚSICA: ORÍGENES DE GÉNERO" section)
    'Cartagena de Indias': { lat: 10.39, lng: -75.51 },
    'Cocula, Jalisco': { lat: 20.43, lng: -103.80 },
    'Santiago de los Caballeros': { lat: 19.45, lng: -70.70 },
    'Santo Domingo': { lat: 18.49, lng: -69.89 },
    'Ciudad de Panamá': { lat: 8.98, lng: -79.52 },
    'Hermosillo, Sonora': { lat: 29.07, lng: -110.96 },
    'Nine Mile': { lat: 18.26, lng: -77.21 },
    'Madison Square Garden': { lat: 40.75, lng: -73.99 },
    'Houston': { lat: 29.76, lng: -95.37 },
    'Indio, California': { lat: 33.72, lng: -116.22 },
    'Royce Hall, UCLA': { lat: 34.07, lng: -118.44 },
    'San Luis Potosí': { lat: 22.16, lng: -100.99 },
    'Central Park': { lat: 40.785, lng: -73.968 },
    // Arquitectos e historia natural (added together, see timeline-data.js
    // "ARQUITECTURA E HISTORIA NATURAL" section)
    'Burgos': { lat: 42.34, lng: -3.70 },
    'Río de Janeiro': { lat: -22.91, lng: -43.17 },
    'Nazca': { lat: -14.83, lng: -74.94 },
    'Galápagos': { lat: -0.74, lng: -90.31 },
    'Tenerife': { lat: 28.29, lng: -16.62 },
    'San Salvador': { lat: 13.69, lng: -89.19 },
    'La Molina, Lima': { lat: -12.08, lng: -76.94 },
    'León': { lat: 42.60, lng: -5.57 },
    'París': { lat: 48.86, lng: 2.35 },
    'San Petersburgo': { lat: 59.93, lng: 30.34 },
    'Nueva Delhi': { lat: 28.61, lng: 77.21 },
    // Siglos VII-X (added together — visigoths/Al-Ándalus/maya cluster,
    // see timeline-data.js entries 710-950)
    'Estrecho de Gibraltar': { lat: 35.95, lng: -5.60 },
    'Ceuta': { lat: 35.888, lng: -5.322 },
    'Mérida': { lat: 38.916, lng: -6.343 },
    'Asturias': { lat: 43.36, lng: -5.85 },
    'Cangas de Onís': { lat: 43.35, lng: -5.13 },
    'Granada': { lat: 37.18, lng: -3.60 },
    'Oviedo': { lat: 43.36, lng: -5.84 },
    'Iria Flavia': { lat: 42.73, lng: -8.77 },
    'Tikal': { lat: 17.222, lng: -89.623 },
    'Bagdad': { lat: 33.315, lng: 44.366 },
    'El Cairo': { lat: 30.044, lng: 31.236 },
    'Tula': { lat: 20.058, lng: -99.343 },
    'Roma': { lat: 41.9028, lng: 12.4964 },
    'Lagos': { lat: 37.1017, lng: -8.6754 },
    'San Basilio de Palenque': { lat: 10.0075, lng: -75.1613 },
    'Cabo Branco': { lat: 20.7700, lng: -17.0300 },
    'Mbanza Kongo': { lat: -6.2667, lng: 14.2500 },
    'Luanda': { lat: -8.8390, lng: 13.2894 },
    'Yara': { lat: 20.2967, lng: -76.9578 },
    'Estambul': { lat: 41.0082, lng: 28.9784 },
    'Tordesillas': { lat: 41.5010, lng: -5.0006 },
    'Kumamoto': { lat: 32.8032, lng: 130.7079 },
    'Santos': { lat: -23.9608, lng: -46.3339 },
    'São Paulo': { lat: -23.5505, lng: -46.6333 },
    'Liberdade': { lat: -23.5583, lng: -46.6350 },
    'Issyk-Kul': { lat: 42.60, lng: 77.00 },
    'Caffa': { lat: 45.0333, lng: 35.3833 },
    'Mesina': { lat: 38.1938, lng: 15.5540 }
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

// Resizing a WebGL renderer clears its drawing buffer. ResizeObserver can
// fire more than once for one layout change (and mobile browser chrome can
// generate a burst of viewport changes), so setting the same width/height
// repeatedly produces a visible one-frame flash. Measure the actual CSS box,
// coalesce notifications to one update per frame, and only touch the renderer
// when a rounded pixel dimension really changed.
let renderedGlobeWidth = initialGlobeWidth;
let renderedGlobeHeight = initialGlobeHeight;
let globeResizeFrame = null;

function syncGlobeSize() {
    globeResizeFrame = null;
    const nextWidth = Math.max(1, Math.round(globeContainerEl.clientWidth));
    const nextHeight = Math.max(1, Math.round(globeContainerEl.clientHeight));

    if (nextWidth !== renderedGlobeWidth) {
        renderedGlobeWidth = nextWidth;
        world.width(nextWidth);
    }
    if (nextHeight !== renderedGlobeHeight) {
        renderedGlobeHeight = nextHeight;
        world.height(nextHeight);
    }
}

function scheduleGlobeResize() {
    if (globeResizeFrame !== null) return;
    globeResizeFrame = requestAnimationFrame(syncGlobeSize);
}

window.addEventListener('resize', scheduleGlobeResize, { passive: true });
if ('ResizeObserver' in window) {
    new ResizeObserver(scheduleGlobeResize).observe(globeContainerEl);
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
