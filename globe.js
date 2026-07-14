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
      "\"La flor de la playa\" (Carmen de Burgos, 1920) — Enrique y su amante deciden pasar su escapada de verano precisamente en Portugal: un viaje corto, \"tan corto como ir a un pueblo de España\", pero ya al extranjero, a \"una nación más libre\" donde podían vivir juntos sin la vigilancia de las patronas españolas y ella podía hacerse pasar por su esposa."
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
  }
};

const world = Globe()
       (document.getElementById('globeViz'))
       .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
       .backgroundColor('rgba(0,0,0,0)')
       .showAtmosphere(true)
       .atmosphereColor('#4da6ff')
       .atmosphereAltitude(0.18)
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

                const special = SPECIAL_PANELS[name];
                if (special) {
                    document.getElementById('infoPanel').innerHTML =
                        '<p class="globe-info-label">' + name + '</p>' +
                        '<h3 class="globe-info-title">' + special.title + '</h3>' +
                        '<p class="globe-info-body">' + special.body + '</p>';
                } else {
                    document.getElementById('infoPanel').innerHTML =
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

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.4;

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
