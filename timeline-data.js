/* =========================================================
   TIME-AND-SPACE — Timeline Data
   Santos Armada · Spanish-language novels × Latin American history
   ========================================================= */

/* ---------------------------------------------------------
   ERA BANDS
   Each band colors a horizontal stretch of the track and
   feeds the dynamic header label + the Butterfly Effect panel.
   --------------------------------------------------------- */
const ERA_BANDS = [
  {
    id: "pre-colonial",
    label: "Antes de 1492",
    startYear: 100,
    endYear: 1491,
    color: "var(--gold)",
    butterfly: {
      prompt: "¿Qué hubiera pasado si los códices mesoamericanos nunca hubieran sido quemados?",
      answer:
        "Tendríamos una biblioteca propia tan vasta como la de cualquier civilización antigua — una Alejandría náhuatl, maya, mixteca. La poesía de Nezahualcóyotl no sería la excepción rescatada, sino una entre miles de voces documentadas. La historia literaria de América habría comenzado mil años antes de Rulfo."
    }
  },
  {
    id: "colonial",
    label: "Colonia",
    startYear: 1492,
    endYear: 1809,
    color: "var(--neon-blue)",
    butterfly: {
      prompt: "¿Qué hubiera pasado si la Inquisición nunca hubiera controlado lo que se imprimía en las Américas?",
      answer:
        "La novela picaresca y el ensayo crítico habrían florecido en suelo americano un siglo antes de la Independencia. Sor Juana no habría sido la rara excepción tolerada, sino la primera de muchas voces críticas publicadas sin miedo a la censura eclesiástica."
    }
  },
  {
    id: "independence",
    label: "Independencia",
    startYear: 1810,
    endYear: 1899,
    color: "var(--neon-pink)",
    butterfly: {
      prompt: "¿Qué hubiera pasado si las nuevas repúblicas hubieran invertido en imprentas en vez de ejércitos?",
      answer:
        "La alfabetización masiva habría llegado generaciones antes. La literatura de la Revolución Mexicana — Azuela, Campobello — no habría tenido que esperar hasta el siglo XX para encontrar lectores fuera de la élite."
    }
  },
  {
    id: "revolution-dictatorship",
    label: "Revolución y Dictadura",
    startYear: 1900,
    endYear: 1989,
    color: "var(--neon-green)",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Tlatelolco no hubiera ocurrido la noche del 2 de octubre de 1968?",
      answer:
        "Poniatowska no habría tenido que convertirse en cronista del duelo nacional. Pero es precisamente esa noche la que generó una de las crónicas testimoniales más importantes de la lengua española — el libro existe porque la herida existe."
    }
  },
  {
    id: "contemporary",
    label: "Contemporáneo",
    startYear: 1990,
    endYear: 2026,
    color: "#ff7a3d",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Latinoamérica no hubiera vivido la ola de comisiones de verdad y reconciliación de los 90?",
      answer:
        "Obras como La muerte y la doncella de Dorfman no habrían encontrado el lenguaje público para procesar la dictadura. La literatura del trauma postdictatorial habría quedado privada, sin la estructura institucional que la obligó a volverse pública."
    }
  }
];

/* ---------------------------------------------------------
   GLYPH MARKERS
   Reserved for entries tied to religious/ecclesiastical power,
   per the original spec — own lane above the main track.
   --------------------------------------------------------- */
const GLYPH = {
  PERSONAL_FAITH: "✝",   // pre-100 AD personal faith entries
  ECCLESIASTICAL: "☩"    // institutional Catholic power, from 711 AD on
};

/* ---------------------------------------------------------
   EVENT-TYPE ICONS
   Borrowed concept from InteractiveHistory.space, reimplemented
   in plain SVG/unicode — no new dependencies.
   --------------------------------------------------------- */
const ICON_TYPE = {
  LITERATURE: "literature", // quill / book — gold
  CONFLICT: "conflict",     // crossed lines — neon-pink
  HISTORY: "history"        // circle / monument — neon-blue
};

/* ---------------------------------------------------------
   TIMELINE ENTRIES
   year: integer, used for proportional positioning
   endYear (optional): for works that reference a historical
     event predating their publication (e.g. Oficio de tinieblas)
   --------------------------------------------------------- */
const TIMELINE_ENTRIES = [

  // ---- PRE-COLONIAL ----
  {
    id: "nezahualcoyotl",
    year: 1402,
    endYear: 1472,
    title: "Nezahualcóyotl: vida y obra",
    author: "José Luis Martínez",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    pubYear: 1972,
    description:
      "Biografía intelectual del rey-poeta de Texcoco, construida a partir de testimonios históricos verosímiles, sin adornos novelescos."
  },

  // ---- COLONIAL ----
  {
    id: "lazarillo",
    year: 1554,
    title: "Lazarillo de Tormes",
    author: "Anónimo",
    country: "España",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Novela picaresca anónima fundacional. Incluida como antecedente formal de la picaresca que después cruzaría el Atlántico."
  },

  // ---- INDEPENDENCE / 19th c ----
  {
    id: "benito-juarez-bio",
    year: 1906,
    title: "Benito Juárez: su vida, su obra",
    author: "Rafael de Zayas Enríquez",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "Biografía ganadora del concurso abierto por la Comisión Nacional del Centenario de Juárez en 1906."
  },
  {
    id: "estacion-del-pantano",
    year: 1853,
    endYear: 1855,
    title: "La estación del pantano",
    author: "Yuri Herrera",
    country: "México",
    type: ICON_TYPE.HISTORY,
    pubYear: 2023,
    description:
      "Reconstruye el exilio de Benito Juárez en Nueva Orleans, casi dieciocho meses documentados por el propio Juárez en apenas dos líneas de su autobiografía. La ciudad, no el político, es la verdadera protagonista.",
    anchor: true,
    personalNote: "Mi novela número uno. Tuve el honor de interpretar en persona para Yuri Herrera en CSULB, abril 2026.",
    authorPageSlug: "yuri-herrera"
  },
  {
    id: "seleccion-poetica-dario",
    year: 2001,
    title: "Selección poética",
    author: "Rubén Darío",
    country: "Nicaragua",
    type: ICON_TYPE.LITERATURE,
    description:
      "Antología poética de Rubén Darío, padre del Modernismo hispanoamericano. Edición de Editores Mexicanos Unidos, 2001."
  },

  // ---- REVOLUTION & DICTATORSHIP (1900–1989) ----
  {
    id: "cartucho",
    year: 1931,
    title: "Cartucho",
    author: "Nellie Campobello",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Viñetas semiautobiográficas de la Revolución Mexicana en Chihuahua, narradas desde la voz de una niña."
  },
  {
    id: "los-de-abajo",
    year: 1915,
    title: "Los de Abajo",
    author: "Mariano Azuela",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description: "La novela fundacional del ciclo narrativo de la Revolución Mexicana."
  },
  {
    id: "el-senor-presidente",
    year: 1946,
    title: "El señor presidente",
    author: "Miguel Ángel Asturias",
    country: "Guatemala",
    type: ICON_TYPE.CONFLICT,
    description: "Retrato de la dictadura latinoamericana a través de un realismo onírico y pesadillesco."
  },
  {
    id: "el-reino-de-este-mundo",
    year: 1949,
    title: "El reino de este mundo",
    author: "Alejo Carpentier",
    country: "Cuba",
    type: ICON_TYPE.HISTORY,
    description: "Texto fundacional del realismo mágico, ambientado en la Revolución Haitiana."
  },
  {
    id: "laberinto-de-la-soledad",
    year: 1950,
    title: "El laberinto de la soledad",
    author: "Octavio Paz",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    flag: "essay-not-novel",
    description: "Ensayo seminal sobre la identidad mexicana."
  },
  {
    id: "pedro-paramo",
    year: 1955,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Comala y los ecos de la Revolución Mexicana narrados desde la voz de los muertos."
  },
  {
    id: "ciudad-real",
    year: 1960,
    title: "Ciudad Real",
    author: "Rosario Castellanos",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Cuentos del Ciclo de Chiapas; Premio Xavier Villaurrutia."
  },
  {
    id: "oficio-de-tinieblas",
    year: 1962,
    endYear: 1867,
    title: "Oficio de tinieblas",
    author: "Rosario Castellanos",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Superpone una rebelión chamula de 1867 sobre el Chiapas de comienzos del siglo XX; Premio Sor Juana Inés de la Cruz."
  },
  {
    id: "muerte-artemio-cruz",
    year: 1962,
    title: "La muerte de Artemio Cruz",
    author: "Carlos Fuentes",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description: "Examen fragmentado de la Revolución Mexicana a través de la vida de un solo hombre."
  },
  {
    id: "sabina",
    year: 1974,
    title: "Tiene los cabellos rojizos y se llama Sabina",
    author: "Julieta Campos",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Novela-ensayo sobre el acto narrativo mismo; Premio Xavier Villaurrutia."
  },
  {
    id: "eterno-femenino",
    year: 1975,
    title: "El eterno femenino",
    author: "Rosario Castellanos",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Única obra teatral de Castellanos; farsa feminista sobre el rol de la mujer mexicana."
  },
  {
    id: "boquitas-pintadas",
    year: 1969,
    title: "Boquitas Pintadas",
    author: "Manuel Puig",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description: "Folletín polifónico sobre el pueblo argentino y sus pasiones reprimidas."
  },
  {
    id: "noche-de-tlatelolco",
    year: 1971,
    title: "La noche de Tlatelolco",
    author: "Elena Poniatowska",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Crónica testimonial coral sobre la masacre estudiantil del 2 de octubre de 1968 en la Plaza de las Tres Culturas.",
    anchor: true
  },
  {
    id: "pubis-angelical",
    year: 1979,
    title: "Pubis angelical",
    author: "Manuel Puig",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description: "Tres líneas narrativas entrelazadas sobre el deseo y el poder."
  },
  {
    id: "muerte-y-doncella",
    year: 1990,
    title: "La muerte y la doncella",
    author: "Ariel Dorfman",
    country: "Chile",
    type: ICON_TYPE.HISTORY,
    description:
      "Obra de teatro escrita tras la Comisión de Verdad y Reconciliación chilena, sobre la transición post-Pinochet."
  },
  {
    id: "sangre-de-amor",
    year: 1982,
    title: "Sangre de amor correspondido",
    author: "Manuel Puig",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description: "Novela construida a partir de grabaciones reales, ambientada en Brasil."
  },
  {
    id: "y-apenas-era-miercoles",
    year: 1993,
    title: "Y apenas era miércoles",
    author: "Martha Cerda",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Novela mexicana publicada por Joaquín Mortiz."
  },
  {
    id: "obsceno-pajaro",
    year: 1970,
    title: "El obsceno pájaro de la noche",
    author: "José Donoso",
    country: "Chile",
    type: ICON_TYPE.LITERATURE,
    description: "Pesadilla gótica sobre la decadencia de la aristocracia chilena."
  },
  {
    id: "negocios-drown",
    year: 1996,
    title: "Negocios (Drown)",
    author: "Junot Díaz",
    country: "República Dominicana",
    type: ICON_TYPE.LITERATURE,
    description:
      "Colección de cuentos sobre la diáspora dominicana entre Santo Domingo y Nueva Jersey. Título de la edición en español."
  },
  {
    id: "estrella-distante",
    year: 1996,
    title: "Estrella Distante",
    author: "Roberto Bolaño",
    country: "Chile",
    type: ICON_TYPE.CONFLICT,
    description: "Novela sobre el arte y el horror bajo la dictadura chilena."
  },
  {
    id: "beso-mujer-arana",
    year: 1976,
    title: "El Beso de la mujer araña",
    author: "Manuel Puig",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description: "Dos presos políticos y la película que uno narra para sobrevivir la dictadura argentina."
  },
  {
    id: "gringo-viejo",
    year: 1985,
    title: "Gringo Viejo",
    author: "Carlos Fuentes",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description: "Un viejo estadounidense busca la muerte en la Revolución Mexicana."
  },
  {
    id: "cien-anos-soledad",
    year: 1967,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    country: "Colombia",
    type: ICON_TYPE.LITERATURE,
    description: "Macondo y siete generaciones de la familia Buendía."
  },
  {
    id: "cronica-muerte-anunciada",
    year: 1981,
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    country: "Colombia",
    type: ICON_TYPE.CONFLICT,
    description: "Reconstrucción coral de un asesinato anunciado y nunca evitado."
  },

  // ---- CONTEMPORARY (1990–present) ----
  {
    id: "del-amor-otros-demonios",
    year: 1994,
    title: "Del amor y otros demonios",
    author: "Gabriel García Márquez",
    country: "Colombia",
    type: ICON_TYPE.LITERATURE,
    description: "Amor y exorcismo en el Cartagena colonial, narrado desde la memoria."
  },
  {
    id: "sombra-del-viento",
    year: 2001,
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    country: "España",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description: "Misterio literario ambientado en la Barcelona de posguerra, 1945."
  },
  {
    id: "memoria-putas-tristes",
    year: 2004,
    title: "Memoria de mis putas tristes",
    author: "Gabriel García Márquez",
    country: "Colombia",
    type: ICON_TYPE.LITERATURE,
    description: "Última novela de García Márquez; meditación sobre la vejez y el deseo."
  },
  {
    id: "destinos-consulares",
    year: 2011,
    title: "Diversos Destinos Consulares",
    author: "Antonio Rómar",
    country: "España",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description: "Poemario de compromiso político y crítica social, primera obra del autor."
  },
  {
    id: "invencible-verano",
    year: 2021,
    title: "El invencible verano de Liliana",
    author: "Cristina Rivera Garza",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Documenta el feminicidio real de la hermana de la autora en 1990. Tratamiento factual y sensible — sin dramatización.",
    sensitive: true
  },
  {
    id: "otra-julia",
    year: 2024,
    title: "La otra Julia",
    author: "Mayra Santos-Febres",
    country: "Puerto Rico",
    type: ICON_TYPE.LITERATURE,
    description: "Narrativa doble entre la poeta Julia de Burgos y una escritora contemporánea."
  }
];

/* Sort chronologically once, at load time, so the engine never has to re-sort */
TIMELINE_ENTRIES.sort((a, b) => a.year - b.year);

/* Exported as plain globals (no bundler in this stack) */
window.ERA_BANDS = ERA_BANDS;
window.GLYPH = GLYPH;
window.ICON_TYPE = ICON_TYPE;
window.TIMELINE_ENTRIES = TIMELINE_ENTRIES;