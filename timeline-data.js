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
    startYear: 500,
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
   Reserved for entries where institutional Catholic power is a
   central historical mechanism — councils, papal authority,
   religious orders, persecution, missions, education, or patronage.
   These markers occupy their own lane above the main track.
   --------------------------------------------------------- */
const GLYPH = {
  PERSONAL_FAITH: "✝",   // pre-100 AD personal faith entries
  ECCLESIASTICAL: "☩"    // institutional Catholic power
};

/* ---------------------------------------------------------
   EVENT-TYPE ICONS
   Borrowed concept from InteractiveHistory.space, reimplemented
   in plain SVG/unicode — no new dependencies.
   --------------------------------------------------------- */
const ICON_TYPE = {
  LITERATURE: "literature", // quill / book — gold
  CONFLICT: "conflict",     // crossed lines — neon-pink
  HISTORY: "history",       // circle / monument — neon-blue
  MUSIC: "music",           // eighth note — neon-purple
  VISION: "vision",         // builders/architects/engineers — Essays-page green
  ROYAL: "royal",           // Spanish royal bloodline — rose
  ECHO: "echo",              // cross-time structures of violence — muted crimson
  ESOTERIC: "esoteric",      // documented esoteric, initiatory, and Masonic networks — emerald
  ECCLESIASTICAL: "ecclesiastical" // institutional Catholic authority — gold cross lane
};

/* ---------------------------------------------------------
   TIMELINE ENTRIES
   year: integer, used for proportional positioning
   endYear (optional): for works that reference a historical
     event predating their publication (e.g. Oficio de tinieblas)
   Editorial limit for new detail descriptions: 95 words maximum.
     Keep the complete thought within the limit; do not truncate it
     in the interface.
   --------------------------------------------------------- */
const TIMELINE_ENTRIES = [

  // ---- PRE-COLONIAL ----
  {
    id: "vouille-giro-hispania-507",
    year: 507,
    title: "507: Vouillé desplaza el reino visigodo hacia Hispania",
    author: "Alarico II y Clodoveo I",
    country: "España",
    region: "Vouillé",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "En 507, los francos de Clodoveo derrotaron a los visigodos cerca de Vouillé y mataron a su rey, Alarico II. La pérdida de Toulouse y de casi todos sus dominios galos —aunque conservaron Septimania— obligó a la monarquía a reconstruir su poder al sur de los Pirineos. No fue el nacimiento instantáneo de España, pero sí el giro que convirtió a Hispania en el centro político duradero del reino visigodo y abrió la secuencia que culminaría con Leovigildo.",
    descriptionHtml:
      'En 507, los francos de Clodoveo derrotaron a los visigodos cerca de <button type="button" class="timeline-detail-geolink" data-region="Vouillé" data-country="Francia">Vouillé</button> y mataron a su rey, Alarico II. La pérdida de <button type="button" class="timeline-detail-geolink" data-region="Toulouse" data-country="Francia">Toulouse</button> y de casi todos sus dominios galos —aunque conservaron <button type="button" class="timeline-detail-geolink" data-region="Septimania" data-country="Francia">Septimania</button>— obligó a la monarquía a reconstruir su poder al sur de los <button type="button" class="timeline-detail-geolink" data-region="Pirineos" data-country="España">Pirineos</button>. No fue el nacimiento instantáneo de España, pero sí el giro que convirtió a Hispania en el centro político duradero del reino visigodo y abrió la secuencia que culminaría con <button type="button" class="timeline-detail-entrylink" data-id="leovigildo-conquista-suevos-585">Leovigildo</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Alarico II hubiera vencido en Vouillé?",
      answer:
        "El reino de Toulouse habría conservado su centro político al norte de los Pirineos y la expansión franca hacia Aquitania se habría frenado. Hispania quizá habría seguido siendo una periferia del poder visigodo, alterando la formación posterior del reino de Toledo."
    }
  },
  {
    id: "leovigildo-conquista-suevos-585",
    year: 585,
    title: "585: Leovigildo conquista el reino suevo",
    author: "Leovigildo y Audeca",
    country: "España",
    region: "Galicia",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "En 585, Leovigildo invadió Gallaecia, depuso al rey suevo Audeca y absorbió su reino, su tesoro y sus territorios. Braga y Porto quedaron incorporadas a la monarquía de Toledo; una última rebelión de Malarico fue sofocada. La conquista reunió gran parte de la península bajo un solo poder, pero no creó una unidad pacífica ni completa: persistían enclaves bizantinos y resistencias regionales. Décadas de campañas, asedios y castigos destruyeron autonomías locales antes de la conversión católica de Recaredo.",
    descriptionHtml:
      'En 585, Leovigildo invadió <button type="button" class="timeline-detail-geolink" data-region="Galicia" data-country="España">Gallaecia</button>, depuso al rey suevo Audeca y absorbió su reino, su tesoro y sus territorios. <button type="button" class="timeline-detail-geolink" data-region="Braga" data-country="Portugal">Braga</button> y <button type="button" class="timeline-detail-geolink" data-region="Porto" data-country="Portugal">Porto</button> quedaron incorporadas a la monarquía de <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">Toledo</button>; una última rebelión de Malarico fue sofocada. La conquista reunió gran parte de la península bajo un solo poder, pero no creó una unidad pacífica ni completa: persistían enclaves bizantinos y resistencias regionales. Décadas de campañas, asedios y castigos destruyeron autonomías locales antes de la <button type="button" class="timeline-detail-entrylink" data-id="tercer-concilio-toledo-589">conversión católica de Recaredo</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si el reino suevo hubiera sobrevivido?",
      answer:
        "Galicia y el norte de Portugal habrían conservado una monarquía propia frente a Toledo. Esa frontera pudo haber producido otra trayectoria política y religiosa en el noroeste, limitando el proyecto territorial de Leovigildo antes de la conversión de Recaredo."
    }
  },
  {
    id: "tercer-concilio-toledo-589",
    year: 589,
    trackYear: 602,
    title: "mayo de 589: el III Concilio de Toledo",
    author: "Recaredo I y los obispos del reino",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "Recaredo había abandonado el cristianismo homoiano o arriano hacia 587. En mayo de 589, el III Concilio de Toledo formalizó públicamente su conversión y la reconciliación de la jerarquía goda con la Iglesia nicena. Antiguos obispos arrianos pudieron conservar rango bajo condiciones, pero su Iglesia dejó de existir como institución separada. La unidad religiosa acercó élites godas e hispanorromanas y convirtió los concilios de Toledo en escenarios de gobierno, abriendo el camino al programa político de 633, sin eliminar conspiraciones, desigualdades ni coerción religiosa.",
    descriptionHtml:
      'Recaredo había abandonado el cristianismo homoiano o arriano hacia 587. En mayo de 589, el <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">III Concilio de Toledo</button> formalizó públicamente su conversión y la reconciliación de la jerarquía goda con la Iglesia nicena. Antiguos obispos arrianos pudieron conservar rango bajo condiciones, pero su Iglesia dejó de existir como institución separada. La unidad religiosa acercó élites godas e hispanorromanas y convirtió los concilios de Toledo en escenarios de gobierno, abriendo el camino al <button type="button" class="timeline-detail-entrylink" data-id="isidoro-cuarto-concilio-toledo-633">programa político de 633</button>, sin eliminar conspiraciones, desigualdades ni coerción religiosa.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Recaredo hubiera mantenido la confesión arriana?",
      answer:
        "La separación religiosa entre la corte goda y la mayoría nicena habría continuado. Los obispos católicos quizá no habrían adquirido el mismo papel en el gobierno, y la monarquía habría enfrentado nuevas rebeliones sostenidas por diferencias políticas y confesionales."
    }
  },
  {
    id: "isidoro-cuarto-concilio-toledo-633",
    year: 633,
    month: 12,
    day: 5,
    title: "5 de diciembre de 633: Isidoro y el IV Concilio",
    author: "Isidoro de Sevilla y Sisenando",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "El IV Concilio de Toledo, presidido por Isidoro de Sevilla, reguló doctrina, liturgia, disciplina eclesiástica y poder político. Su canon 75 protegía al rey y amenazaba con excomunión a quienes conspiraran contra él, enlazando autoridad religiosa y monárquica. Isidoro también compilaba las Etimologías, una enciclopedia de veinte libros sobre lenguaje, ciencias, derecho y mundo natural, casi terminada al morir en 636. El concilio no creó esa obra, pero ambos proyectos ordenaban conocimiento y sociedad desde la Iglesia visigoda y prepararon el mundo del Liber Iudiciorum.",
    descriptionHtml:
      'El <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">IV Concilio de Toledo</button>, presidido por Isidoro de <button type="button" class="timeline-detail-geolink" data-region="Sevilla" data-country="España">Sevilla</button>, reguló doctrina, liturgia, disciplina eclesiástica y poder político. Su canon 75 protegía al rey y amenazaba con excomunión a quienes conspiraran contra él, enlazando autoridad religiosa y monárquica. Isidoro también compilaba las <em>Etimologías</em>, una enciclopedia de veinte libros sobre lenguaje, ciencias, derecho y mundo natural, casi terminada al morir en 636. El concilio no creó esa obra, pero ambos proyectos ordenaban conocimiento y sociedad desde la Iglesia visigoda y prepararon el mundo del <button type="button" class="timeline-detail-entrylink" data-id="liber-iudiciorum-654"><em>Liber Iudiciorum</em></button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si las Etimologías de Isidoro se hubieran perdido?",
      answer:
        "La Europa medieval habría carecido de uno de sus principales puentes hacia el saber antiguo. Gramática, medicina, leyes, astronomía y naturaleza habrían circulado mediante otras compilaciones, pero pocas reunían tal amplitud en una obra tan copiada."
    }
  },
  {
    id: "liber-iudiciorum-654",
    year: 654,
    title: "654: el Liber Iudiciorum organiza el poder mediante la ley",
    author: "Recesvinto y Braulio de Zaragoza",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "En 654, Recesvinto promulgó en Toledo el Liber Iudiciorum, una extensa compilación de doce libros que reunió leyes antiguas y nuevas; Braulio de Zaragoza pudo intervenir en su organización. Tradicionalmente se presentó como un código territorial común para godos e hispanorromanos, aunque los historiadores discuten su alcance real, autoría y aplicación cotidiana. Traducido siglos después como Fuero Juzgo, siguió alimentando el derecho medieval peninsular. La obra enlazó legislación, memoria dinástica y autoridad religiosa antes de la revisión persecutoria de Ervigio.",
    descriptionHtml:
      'En 654, Recesvinto promulgó en <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">Toledo</button> el <em>Liber Iudiciorum</em>, una extensa compilación de doce libros que reunió leyes antiguas y nuevas; Braulio de <button type="button" class="timeline-detail-geolink" data-region="Zaragoza" data-country="España">Zaragoza</button> pudo intervenir en su organización. Tradicionalmente se presentó como un código territorial común para godos e hispanorromanos, aunque los historiadores discuten su alcance real, autoría y aplicación cotidiana. Traducido siglos después como <em>Fuero Juzgo</em>, siguió alimentando el derecho medieval peninsular. La obra enlazó legislación, memoria dinástica y autoridad religiosa antes de la <button type="button" class="timeline-detail-entrylink" data-id="ervigio-leyes-antijudias-681">revisión persecutoria de Ervigio</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si el Liber Iudiciorum no hubiera sobrevivido a 711?",
      answer:
        "Los reinos cristianos medievales habrían dispuesto de un vínculo jurídico mucho más débil con la Hispania visigoda. El Fuero Juzgo no habría servido como fuente de autoridad, y otros derechos locales o romanos habrían ocupado mayor espacio."
    }
  },
  {
    id: "ervigio-leyes-antijudias-681",
    year: 681,
    month: 1,
    day: 27,
    title: "27 de enero de 681: la ley persigue a los judíos",
    author: "Ervigio y el XII Concilio de Toledo",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.ECHO,
    types: [ICON_TYPE.ECHO, ICON_TYPE.HISTORY],
    description:
      "Ervigio incorporó veintiocho leyes antijudías a su revisión del Liber Iudiciorum; el XII Concilio de Toledo las confirmó en enero de 681. El 27 de enero fueron comunicadas a dirigentes judíos reunidos en la iglesia de Santa María. Impusieron bautismo, vigilancia religiosa, restricciones económicas, confiscación, exilio y castigos corporales. Su existencia demuestra una política estatal de coerción, aunque no prueba que cada pena se aplicara uniformemente. Este episodio de Ecos brutales enlaza ley, Iglesia y persecución antes del derrumbe político de 711.",
    descriptionHtml:
      'Ervigio incorporó veintiocho leyes antijudías a su revisión del <button type="button" class="timeline-detail-entrylink" data-id="liber-iudiciorum-654"><em>Liber Iudiciorum</em></button>; el XII Concilio de <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">Toledo</button> las confirmó en enero de 681. El 27 de enero fueron comunicadas a dirigentes judíos reunidos en la <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">iglesia de Santa María</button>. Impusieron bautismo, vigilancia religiosa, restricciones económicas, confiscación, exilio y castigos corporales. Su existencia demuestra una política estatal de coerción, aunque no prueba que cada pena se aplicara uniformemente. Este episodio de <strong>Ecos brutales</strong> enlaza ley, Iglesia y persecución antes del <button type="button" class="timeline-detail-entrylink" data-id="conquista-musulmana-711">derrumbe político de 711</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si el XII Concilio hubiera rechazado las leyes de Ervigio?",
      answer:
        "La Iglesia habría impuesto un límite excepcional a la coerción regia y las comunidades judías habrían conservado mayor espacio legal. El rechazo también habría debilitado a un rey que buscaba legitimar su acceso disputado al trono."
    }
  },
  {
    id: "witiza-crisis-sucesoria-710",
    year: 710,
    title: "710: crisis sucesoria visigoda",
    author: "Hito histórico",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Muere el rey visigodo Witiza, y estalla una disputa sucesoria entre sus partidarios y los de Rodrigo, proclamado rey en su lugar. La fractura interna del reino visigodo — con facciones rivales debilitando la defensa del territorio — crea las condiciones que, un año después, permitirán el rápido avance del ejército musulmán liderado por Tariq ibn Ziyad.",
    descriptionHtml:
      'Muere el rey visigodo Witiza y estalla una disputa sucesoria entre sus partidarios y los de Rodrigo, proclamado rey en su lugar. La fractura interna de la monarquía de <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">Toledo</button> —agravada tras décadas de <button type="button" class="timeline-detail-entrylink" data-id="ervigio-leyes-antijudias-681">coerción y luchas por el trono</button>— crea las condiciones que, un año después, permitirán el rápido avance del ejército dirigido por <button type="button" class="timeline-detail-entrylink" data-id="conquista-musulmana-711">Tariq ibn Ziyad</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Witiza hubiera dejado un heredero indiscutido?",
      answer:
        "Sin la fractura entre partidarios de Witiza y de Rodrigo, el reino visigodo habría enfrentado unido cualquier amenaza externa. La invasión de 711 pudo haber sido rechazada como tantas incursiones anteriores, y la historia de la península ibérica —sin Al-Ándalus, sin Reconquista— sería irreconocible."
    }
  },
  {
    id: "conquista-musulmana-711",
    year: 711,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. 710 and 711 were only 2px apart.
    trackYear: 730.4,
    title: "711: la conquista musulmana de Hispania",
    author: "Hito histórico",
    country: "España",
    region: "Cádiz",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "En 711, Tariq ibn Ziyad cruzó el Estrecho de Gibraltar con una fuerza principalmente bereber mientras Rodrigo disputaba el trono visigodo. Su victoria en el sur abrió el camino hacia Córdoba y Toledo; Musa ibn Nusayr llegó con otro ejército en 712. La fecha y ubicación exactas de la batalla, así como los relatos sobre el conde Julián y una traición organizada, proceden de fuentes tardías y discutidas. La conquista destruyó la monarquía de Toledo y comenzó la formación de Al-Ándalus.",
    descriptionHtml:
      'En 711, Tariq ibn Ziyad cruzó el <button type="button" class="timeline-detail-geolink" data-region="Estrecho de Gibraltar" data-country="España">Estrecho de Gibraltar</button> con una fuerza principalmente bereber mientras Rodrigo disputaba el <button type="button" class="timeline-detail-entrylink" data-id="witiza-crisis-sucesoria-710">trono visigodo</button>. Su victoria en el sur abrió el camino hacia <button type="button" class="timeline-detail-geolink" data-region="Córdoba" data-country="España">Córdoba</button> y <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">Toledo</button>; Musa ibn Nusayr llegó con otro ejército en 712. La fecha y ubicación exactas de la batalla, así como los relatos sobre el conde Julián y una traición organizada, proceden de fuentes tardías y discutidas. La conquista destruyó la monarquía de Toledo y comenzó la <button type="button" class="timeline-detail-entrylink" data-id="consolidacion-al-andalus-718">formación de Al-Ándalus</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Rodrigo hubiera reunido una monarquía sin rivales?",
      answer:
        "Una defensa coordinada habría podido contener aquella expedición o impedir que una victoria inicial destruyera el gobierno central. No sabemos si habría evitado nuevas campañas omeyas, pero la conquista difícilmente habría avanzado con la misma rapidez."
    }
  },
  {
    id: "consolidacion-al-andalus-718",
    year: 718,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. 710/711/718/722/738 sat within 34px of each other and
    // all chain-clustered into a single "5 obras" marker.
    trackYear: 750.7,
    title: "718: la conquista musulmana se consolida",
    author: "Hito histórico",
    country: "España",
    region: "Córdoba",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "Reforzado desde 712 por Musa ibn Nusayr, gobernador omeya del norte de África, el ejército musulmán completa la toma de las principales ciudades visigodas: Córdoba, Toledo, Sevilla y Mérida caen en rápida sucesión. Hacia 718, la mayor parte de la península ibérica está bajo dominio musulmán, dando origen formal a Al-Ándalus y marcando el fin del reino visigodo como entidad política.",
    descriptionHtml:
      'Reforzado desde 712 por Musa ibn Nusayr, gobernador omeya del norte de África, el ejército musulmán completa la toma de las principales ciudades visigodas: <button type="button" class="timeline-detail-geolink" data-region="Córdoba" data-country="España">Córdoba</button>, <button type="button" class="timeline-detail-geolink" data-region="Toledo" data-country="España">Toledo</button>, <button type="button" class="timeline-detail-geolink" data-region="Sevilla" data-country="España">Sevilla</button> y <button type="button" class="timeline-detail-geolink" data-region="Mérida" data-country="España">Mérida</button> caen en rápida sucesión. Hacia 718, la mayor parte de la península ibérica está bajo dominio musulmán, dando origen formal a Al-Ándalus y marcando el fin del reino visigodo como entidad política.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Musa ibn Nusayr no hubiera enviado refuerzos en 712?",
      answer:
        "Sin ese segundo ejército, la conquista pudo haberse detenido como una incursión más, contenida a las provincias del sur. En vez de ocho siglos de dominio musulmán en la península, Al-Ándalus habría sido apenas una nota al pie en la historia de España."
    }
  },
  {
    id: "pelayo-covadonga-722",
    year: 722,
    trackYear: 771.1,
    title: "722: la batalla de Covadonga",
    author: "Hito histórico",
    country: "España",
    region: "Covadonga",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "Pelayo, antiguo espatario —guardia personal— del rey visigodo Witiza, se retira hacia las montañas de Asturias tras la conquista musulmana de 711, la misma fractura sucesoria que once años antes había debilitado al reino visigodo. Ahí reúne a unos trescientos combatientes astures y visigodos refugiados y, el 28 de mayo de 722, los enfrenta a un destacamento musulmán en un estrecho valle junto a Covadonga. La victoria —modesta en términos militares, inmensa en su peso simbólico— le permite proclamarse primer rey de Asturias, con corte en Cangas de Onís. El pequeño reino que funda nunca cae: se expande hacia León y Castilla en los siglos siguientes, y su línea dinástica llega, casi ocho siglos después, hasta los Reyes Católicos que completan la toma de Granada en 1492 — el mismo año en que termina la historia que Covadonga, según la tradición, empezó.",
    descriptionHtml:
      'Pelayo, antiguo espatario —guardia personal— del rey visigodo Witiza, se retira hacia las montañas de <button type="button" class="timeline-detail-geolink" data-region="Asturias" data-country="España">Asturias</button> tras la conquista musulmana de 711, la misma fractura sucesoria que once años antes había debilitado al reino visigodo. Ahí reúne a unos trescientos combatientes astures y visigodos refugiados y, el 28 de mayo de 722, los enfrenta a un destacamento musulmán en un estrecho valle junto a <button type="button" class="timeline-detail-geolink" data-region="Covadonga" data-country="España">Covadonga</button>. La victoria —modesta en términos militares, inmensa en su peso simbólico— le permite proclamarse primer rey de Asturias, con corte en <button type="button" class="timeline-detail-geolink" data-region="Cangas de Onís" data-country="España">Cangas de Onís</button>. El pequeño reino que funda nunca cae: se expande hacia <button type="button" class="timeline-detail-geolink" data-region="León" data-country="España">León</button> y Castilla en los siglos siguientes, y su línea dinástica llega, casi ocho siglos después, hasta los Reyes Católicos que completan la toma de <button type="button" class="timeline-detail-geolink" data-region="Granada" data-country="España">Granada</button> en 1492 — el mismo año en que termina la historia que Covadonga, según la tradición, empezó.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Pelayo hubiera sido derrotado en Covadonga?",
      answer:
        "Sin ese primer reducto cristiano en el norte, la conquista musulmana de la península pudo haberse consolidado sin oposición organizada durante generaciones más. La tradición historiográfica española —resumida en la célebre frase del historiador Claudio Sánchez-Albornoz, 'sin Covadonga no habría Reconquista'— sostiene que este pequeño enfrentamiento en las montañas asturianas fue la semilla de los casi ocho siglos que, en 1492, terminarían con la toma de Granada."
    }
  },
  {
    id: "quirigua-copan-738",
    year: 738,
    trackYear: 791.5,
    title: "738: Quiriguá derrota y decapita a Copán",
    author: "Hito histórico",
    country: "Guatemala",
    region: "Quiriguá",
    type: ICON_TYPE.CONFLICT,
    description:
      "El 27 de abril de 738, el ejército de Quiriguá embosca y captura al gobernante de Copán, Uaxaclajuun Ubʼaah Kʼawiil ('18 Conejo'), tras quemar las efigies de las deidades patronas de la ciudad. El 3 de mayo es decapitado en un ritual público ordenado por su propio vasallo, Kʼakʼ Tiliw Chan Yopaat — la primera ejecución documentada de un señor maya en activo a manos de uno de sus subordinados. Quiriguá gana con ello el control total de la ruta comercial entre el Caribe y el corazón del mundo maya, mientras Copán entra en un silencio de veinte años sin nuevos monumentos.",
    descriptionHtml:
      'El 27 de abril de 738, el ejército de <button type="button" class="timeline-detail-geolink" data-region="Quiriguá" data-country="Guatemala">Quiriguá</button> embosca y captura al gobernante de <button type="button" class="timeline-detail-geolink" data-region="Copán" data-country="Honduras">Copán</button>, Uaxaclajuun Ubʼaah Kʼawiil (\'18 Conejo\'), tras quemar las efigies de las deidades patronas de la ciudad. El 3 de mayo es decapitado en un ritual público ordenado por su propio vasallo, Kʼakʼ Tiliw Chan Yopaat — la primera ejecución documentada de un señor maya en activo a manos de uno de sus subordinados. Quiriguá gana con ello el control total de la ruta comercial entre el Caribe y el corazón del mundo maya, mientras Copán entra en un silencio de veinte años sin nuevos monumentos.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Copán hubiera repelido la emboscada de Quiriguá?",
      answer:
        "Copán habría conservado el control de la ruta comercial del Caribe y probablemente extendido su dominio sobre Quiriguá, no al revés. El propio ritual de decapitación de un señor maya por su vasallo —sin precedente documentado— jamás habría ocurrido, privándonos de una de las ventanas más claras hacia la fragilidad del poder político maya."
    }
  },
  {
    id: "hallazgo-tumba-santiago-813",
    year: 813,
    title: "813: hallazgo de la tumba de Santiago",
    author: "Hito histórico",
    country: "España",
    region: "Santiago de Compostela",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "Un ermitaño, Paio (Pelayo), es guiado por una luz en el monte Libredón — de ahí Compostela, campus stellae, 'campo de la estrella' — hasta un antiguo sepulcro. El obispo Teodomiro de Iria Flavia lo identifica como la tumba del apóstol Santiago y avisa al rey Alfonso II de Asturias, quien viaja desde Oviedo para verificarlo y ordena construir una capilla en el lugar. Aquella ruta de Oviedo a Compostela —el Camino Primitivo— se convierte en el origen del Camino de Santiago, uno de los grandes ejes de peregrinación de la cristiandad y una pieza central en la construcción de una identidad cristiana ibérica que, siglos después, alimentaría la ideología de la Reconquista.",
    descriptionHtml:
      'Un ermitaño, Paio (Pelayo), es guiado por una luz en el <button type="button" class="timeline-detail-geolink" data-region="Monte Libredón" data-country="España">monte Libredón</button> — de ahí <button type="button" class="timeline-detail-geolink" data-region="Santiago de Compostela" data-country="España">Compostela</button>, campus stellae, \'campo de la estrella\' — hasta un antiguo sepulcro. El obispo Teodomiro de <button type="button" class="timeline-detail-geolink" data-region="Iria Flavia" data-country="España">Iria Flavia</button> lo identifica como la tumba del apóstol Santiago y avisa al rey Alfonso II de <button type="button" class="timeline-detail-geolink" data-region="Asturias" data-country="España">Asturias</button>, quien viaja desde <button type="button" class="timeline-detail-geolink" data-region="Oviedo" data-country="España">Oviedo</button> para verificarlo y ordena construir una capilla en el lugar. Aquella ruta de Oviedo a Compostela —el Camino Primitivo— se convierte en el origen del Camino de Santiago, uno de los grandes ejes de peregrinación de la cristiandad y una pieza central en la construcción de una identidad cristiana ibérica que, siglos después, alimentaría la ideología de la Reconquista.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Paio nunca hubiera visto esa luz en el monte Libredón?",
      answer:
        "Sin el hallazgo de la tumba, no existiría Compostela, ni el Camino de Santiago, ni el culto jacobeo que unificaría una identidad cristiana ibérica frente al islam. La Reconquista habría carecido de uno de sus símbolos religiosos y políticos más poderosos."
    }
  },
  {
    id: "tikal-ultima-estela-869",
    year: 869,
    title: "869: la última estela de Tikal",
    author: "Hito histórico",
    country: "Guatemala",
    region: "Tikal",
    type: ICON_TYPE.HISTORY,
    description:
      "La Estela 11 de Tikal, fechada en 869, es el último monumento tallado por una de las dinastías más poderosas del mundo maya, cuya ciudad había dominado gran parte de las tierras bajas mayas durante más de mil años. Entre 830 y 950, Tikal pierde la mayor parte de su población y su autoridad central se desmorona con rapidez, en uno de los episodios más estudiados del llamado colapso maya clásico.",
    descriptionHtml:
      'La Estela 11 de <button type="button" class="timeline-detail-geolink" data-region="Tikal" data-country="Guatemala">Tikal</button>, fechada en 869, es el último monumento tallado por una de las dinastías más poderosas del mundo maya, cuya ciudad había dominado gran parte de las tierras bajas mayas durante más de mil años. Entre 830 y 950, Tikal pierde la mayor parte de su población y su autoridad central se desmorona con rapidez, en uno de los episodios más estudiados del llamado colapso maya clásico.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Tikal hubiera sobrevivido al colapso clásico maya?",
      answer:
        "La dinastía más longeva y poderosa de las tierras bajas mayas habría seguido dejando testimonio en piedra durante siglos más. En vez de ruinas devoradas por la selva, redescubiertas por arqueólogos mil años después, Tikal pudo haber recibido a los conquistadores españoles como una civilización viva e ininterrumpida."
    }
  },
  {
    id: "califato-cordoba-929",
    year: 929,
    title: "929: proclamación del Califato de Córdoba",
    author: "Hito histórico",
    country: "España",
    region: "Córdoba",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "El 16 de enero de 929, Abd al-Rahman III se presenta ante la congregación del viernes en la Mezquita Mayor de Córdoba y se proclama califa — 'Comendador de los Creyentes' —, rompiendo formalmente su lealtad nominal a los abasíes de Bagdad y desafiando al recién fundado califato fatimí de El Cairo. Córdoba se convierte así en la sede de un tercer califato, a la par de Bagdad y El Cairo. La proclamación inaugura la edad de oro de Al-Ándalus: bajo el califato, Córdoba se transforma en una de las ciudades más grandes, ricas y letradas de Europa, con bibliotecas, escuelas de traducción y una vida intelectual que conservaría y expandiría el saber clásico, árabe y judío.",
    descriptionHtml:
      'El 16 de enero de 929, Abd al-Rahman III se presenta ante la congregación del viernes en la <button type="button" class="timeline-detail-geolink" data-region="Mezquita de Córdoba" data-country="España">Mezquita Mayor de Córdoba</button> y se proclama califa — \'Comendador de los Creyentes\' —, rompiendo formalmente su lealtad nominal a los abasíes de <button type="button" class="timeline-detail-geolink" data-region="Bagdad" data-country="Irak">Bagdad</button> y desafiando al recién fundado califato fatimí de <button type="button" class="timeline-detail-geolink" data-region="El Cairo" data-country="Egipto">El Cairo</button>. Córdoba se convierte así en la sede de un tercer califato, a la par de Bagdad y El Cairo. La proclamación inaugura la edad de oro de Al-Ándalus: bajo el califato, Córdoba se transforma en una de las ciudades más grandes, ricas y letradas de Europa, con bibliotecas, escuelas de traducción y una vida intelectual que conservaría y expandiría el saber clásico, árabe y judío.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Abd al-Rahman III nunca hubiera roto con Bagdad?",
      answer:
        "Córdoba habría seguido siendo una provincia periférica de un imperio lejano, no la sede de un califato propio. Sin esa independencia política, es difícil imaginar la edad de oro cultural que convirtió a la ciudad en un faro de saber para toda Europa."
    }
  },
  {
    id: "auge-tula-tolteca-950",
    year: 950,
    title: "950: Tula se consolida como capital tolteca",
    author: "Hito histórico",
    country: "México",
    region: "Tula",
    type: ICON_TYPE.HISTORY,
    description:
      "El asentamiento en Tula, en el actual estado de Hidalgo, había comenzado ya hacia 700–750, pero es entre 950 y 1000 cuando su centro cívico-religioso, Tula Grande, alcanza su máxima expansión y se convierte en la capital del imperio tolteca. Desde ahí, los toltecas dominarán buena parte del centro de México durante los dos siglos siguientes, hasta que la ciudad es incendiada hacia 1179.",
    descriptionHtml:
      'El asentamiento en <button type="button" class="timeline-detail-geolink" data-region="Tula" data-country="México">Tula</button>, en el actual estado de Hidalgo, había comenzado ya hacia 700–750, pero es entre 950 y 1000 cuando su centro cívico-religioso, Tula Grande, alcanza su máxima expansión y se convierte en la capital del imperio tolteca. Desde ahí, los toltecas dominarán buena parte del centro de México durante los dos siglos siguientes, hasta que la ciudad es incendiada hacia 1179.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Tula nunca hubiera consolidado su poder sobre el centro de México?",
      answer:
        "El vacío dejado por Teotihuacan siglos antes habría permanecido fragmentado entre ciudades rivales. Sin un imperio tolteca unificador, la mitología fundacional que después reclamarían los mexicas —descendientes espirituales de Tula— habría carecido de su referencia central."
    }
  },
  {
    id: "ocho-venado-1063",
    year: 1063,
    endYear: 1115,
    title: "1063–1115: Ocho Venado Garra de Jaguar",
    author: "Hito histórico",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Iya Nacuaa, conocido como Ocho Venado Garra de Jaguar, nace el 5 de octubre de 1063 y se convierte en el gobernante mixteco más poderoso de Oaxaca, con una vida documentada en detalle en el Códice Zouche-Nuttall. El manuscrito registra la conquista de 94 ciudades bajo su mando y su alianza con el gobernante tolteca de Cholula, Cuatro Jaguar, quien le otorga una nariguera de turquesa como símbolo de autoridad real tolteca. Es una de las biografías individuales mejor documentadas de todo el mundo prehispánico.",
    descriptionHtml:
      'Iya Nacuaa, conocido como Ocho Venado Garra de Jaguar, nace el 5 de octubre de 1063 y se convierte en el gobernante mixteco más poderoso de Oaxaca, con una vida documentada en detalle en el Códice Zouche-Nuttall. El manuscrito registra la conquista de 94 ciudades bajo su mando y su alianza con el gobernante tolteca de <button type="button" class="timeline-detail-geolink" data-region="Cholula" data-country="México">Cholula</button>, Cuatro Jaguar, quien le otorga una nariguera de turquesa como símbolo de autoridad real tolteca. Es una de las biografías individuales mejor documentadas de todo el mundo prehispánico.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Ocho Venado nunca hubiera forjado su alianza con Cholula?",
      answer:
        "Sin la legitimidad tolteca que le otorgó esa nariguera de turquesa, sus conquistas habrían sido vistas como usurpación regional, no como autoridad real. La historia mixteca —una de las mejor documentadas del mundo prehispánico gracias al Códice Zouche-Nuttall— habría carecido de su protagonista más ambicioso."
    }
  },
  {
    id: "batalla-hastings-conquista-normanda-1066",
    year: 1066,
    month: 10,
    day: 14,
    // Real date; nudged track position only so this point remains selectable
    // beside the long-running Ocho Venado entry that begins in 1063.
    trackYear: 1038,
    title: "14 de octubre de 1066: la batalla de Hastings transforma Inglaterra",
    author: "Hito histórico",
    country: "Reino Unido",
    region: "Battle, Inglaterra",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "Tras derrotar a los invasores noruegos en Stamford Bridge, Harold Godwinson obliga a su ejército agotado a recorrer unos 380 kilómetros hacia el sur para enfrentar a Guillermo, duque de Normandía. El 14 de octubre de 1066, cerca de Hastings, los ingleses forman un sólido muro de escudos sobre la cresta después llamada Senlac Hill y resisten durante casi todo el día. Los arqueros y la caballería normandos, junto con retiradas fingidas que atraen a parte de los defensores fuera de formación, terminan por quebrar la línea. Harold muere en el combate; el célebre relato según el cual una flecha le atravesó el ojo, inspirado por una escena ambigua del Tapiz de Bayeux, sigue siendo discutido. La victoria permite a Guillermo avanzar hacia Londres y ser coronado Guillermo I en la Abadía de Westminster el día de Navidad. La conquista continúa durante años: la Devastación del Norte de 1069–1070 arrasa tierras y agrava una hambruna, mientras la aristocracia anglosajona es sustituida por señores normandos. El Domesday Book de 1086 registra tierras, recursos y obligaciones fiscales del reino. El francés normando se convierte en lengua de la corte, el gobierno, el derecho y gran parte de la Iglesia, mientras el inglés permanece entre la mayoría de la población; su convivencia incorpora miles de palabras francesas y ayuda a transformar el inglés antiguo en inglés medio. La nueva jerarquía territorial refuerza el orden feudal, castillos de piedra y grandes iglesias románicas —como la Torre de Londres y la catedral de Durham— materializan el poder normando, e Inglaterra queda vinculada durante siglos a la política territorial de Francia, una relación que contribuirá al trasfondo de conflictos como la Guerra de los Cien Años.",
    descriptionHtml:
      'Tras derrotar a los invasores noruegos en <button type="button" class="timeline-detail-geolink" data-region="Stamford Bridge" data-country="Reino Unido">Stamford Bridge</button>, Harold Godwinson obliga a su ejército agotado a recorrer unos 380 kilómetros hacia el sur para enfrentar a Guillermo, duque de <button type="button" class="timeline-detail-geolink" data-region="Normandía" data-country="Francia">Normandía</button>. El 14 de octubre de 1066, cerca de <button type="button" class="timeline-detail-geolink" data-region="Battle, Inglaterra" data-country="Reino Unido">Hastings</button>, los ingleses forman un sólido muro de escudos sobre la cresta después llamada Senlac Hill y resisten durante casi todo el día. Los arqueros y la caballería normandos, junto con retiradas fingidas que atraen a parte de los defensores fuera de formación, terminan por quebrar la línea. Harold muere en el combate; el célebre relato según el cual una flecha le atravesó el ojo, inspirado por una escena ambigua del Tapiz de Bayeux, sigue siendo discutido. La victoria permite a Guillermo avanzar hacia <button type="button" class="timeline-detail-geolink" data-region="Londres" data-country="Reino Unido">Londres</button> y ser coronado Guillermo I en la <button type="button" class="timeline-detail-geolink" data-region="Abadía de Westminster" data-country="Reino Unido">Abadía de Westminster</button> el día de Navidad. La conquista continúa durante años: la Devastación del Norte de 1069–1070 arrasa tierras y agrava una hambruna, mientras la aristocracia anglosajona es sustituida por señores normandos. El Domesday Book de 1086 registra tierras, recursos y obligaciones fiscales del reino. El francés normando se convierte en lengua de la corte, el gobierno, el derecho y gran parte de la Iglesia, mientras el inglés permanece entre la mayoría de la población; su convivencia incorpora miles de palabras francesas y ayuda a transformar el inglés antiguo en inglés medio. La nueva jerarquía territorial refuerza el orden feudal, castillos de piedra y grandes iglesias románicas —como la <button type="button" class="timeline-detail-geolink" data-region="Torre de Londres" data-country="Reino Unido">Torre de Londres</button> y la <button type="button" class="timeline-detail-geolink" data-region="Catedral de Durham" data-country="Reino Unido">catedral de Durham</button>— materializan el poder normando, e Inglaterra queda vinculada durante siglos a la política territorial de Francia, una relación que contribuirá al trasfondo de conflictos como la Guerra de los Cien Años.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Harold hubiera descansado a su ejército y esperado refuerzos antes de enfrentar a Guillermo?",
      answer:
        "Una victoria inglesa habría podido conservar por más tiempo a la aristocracia anglosajona y limitar la transformación política impuesta por los normandos. El inglés habría seguido evolucionando, pero con una influencia francesa menos intensa; la red de castillos, la redistribución de tierras y la implicación de Inglaterra en las disputas territoriales francesas también habrían seguido caminos muy distintos."
    }
  },
  {
    id: "toma-toledo-1085",
    year: 1085,
    title: "1085: Alfonso VI conquista Toledo",
    author: "Hito histórico",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "Tras un largo asedio, Toledo —antigua capital visigoda— cae ante Alfonso VI de León y Castilla el 25 de mayo de 1085. El rey se proclama a sí mismo 'victoriosísimo rey de Toledo, y de España y Galicia', la primera vez que un monarca cristiano reclama explícitamente un título ligado a 'España' como conjunto. La pérdida de Toledo empuja a los reyes taifa, temerosos, a pedir ayuda a los almorávides del norte de África, abriendo una nueva fase del conflicto.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Toledo hubiera resistido a Alfonso VI?",
      answer:
        "Los reyes taifa no habrían tenido que pedir auxilio a los almorávides, y la fragmentación política de Al-Ándalus pudo haberse prolongado sin la disciplina militar norteafricana que después la revitalizó. El título de \"rey de España\" —reclamado por primera vez tras esta conquista— habría esperado generaciones más."
    }
  },
  {
    id: "el-cid-valencia-1094",
    year: 1094,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. 1085 and 1094 were only 17px apart in this sparse
    // pre-colonial era (~1.86px/year), under the 34px cluster threshold.
    trackYear: 1108,
    title: "1094: El Cid conquista Valencia",
    author: "Anónimo",
    country: "España",
    region: "Valencia",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "El 15 de junio de 1094, Rodrigo Díaz de Vivar tomó Valencia tras un largo asedio y la gobernó con amplia autonomía hasta su muerte en 1099. El noble castellano exiliado había servido a señores cristianos y musulmanes, una trayectoria fronteriza que desborda relatos simples de “Reconquista”. Hacia 1200, el Cantar de mio Cid transformó esa vida en una epopeya sobre destierro, honra, estrategia y restitución. Su colofón fecha en 1207 un modelo textual perdido; el códice conservado es del siglo XIV. Historia y literatura construyeron juntos al Cid que hoy recordamos.",
    descriptionHtml:
      'El 15 de junio de 1094, Rodrigo Díaz de <button type="button" class="timeline-detail-geolink" data-region="Vivar del Cid" data-country="España">Vivar</button> tomó <button type="button" class="timeline-detail-geolink" data-region="Valencia" data-country="España">Valencia</button> tras un largo asedio y la gobernó con amplia autonomía hasta su muerte en 1099. El noble castellano exiliado había servido a señores cristianos y musulmanes, una trayectoria fronteriza que desborda relatos simples de “Reconquista”. Hacia 1200, el <button type="button" class="timeline-detail-entrylink" data-id="cantar-mio-cid-testimonio-1207"><em>Cantar de mio Cid</em></button> transformó esa vida en una epopeya sobre destierro, honra, estrategia y restitución. Su colofón fecha en 1207 un modelo textual perdido; el códice conservado es del siglo XIV. Historia y literatura construyeron juntos al Cid que hoy recordamos.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Rodrigo Díaz de Vivar nunca hubiera sido desterrado?",
      answer:
        "Sin el destierro que lo convirtió en mercenario itinerante al servicio de cristianos y musulmanes por igual, El Cid habría sido un noble castellano más, leal y olvidable. Su ambigüedad moral —la que fascina en el Cantar de mio Cid— nace precisamente de esa caída y esa reinvención."
    }
  },
  {
    id: "porciuncula-restauracion-1205",
    year: 1205,
    trackYear: 1184,
    endYear: 1209,
    title: "1205–1209: Francisco de Asís restaura la Porciúncula",
    author: "Francisco de Asís",
    country: "Italia",
    region: "Asís",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "La Porziuncola (la Porciúncula) —del latín Portiuncula, 'pequeña porción de tierra', nombre que originalmente designaba la parcela benedictina en un claro de bosque a los pies de Assisi (Asís), antes de pasar a nombrar la capilla misma— ya existía, según la tradición local, desde el siglo IV o antes, varios siglos antes del punto donde arranca esta línea de tiempo. Hacia 1205, ya convertido tras abandonar la fortuna de su familia mercantil, Francesco d'Assisi (Francisco de Asís) —todavía un joven desconocido, no el santo que se volvería después— empieza a reparar con sus propias manos varias iglesias en ruinas alrededor de la ciudad; entre 1205 y 1208 restaura la Porciúncula casi por completo, financiando el trabajo con las limosnas que recogía viviendo como un pobre más. En esos años gobiernan, sin saberlo, sobre el escenario en que esto ocurre: el Sacro Imperio Romano Germánico bajo Otón IV, y en Roma, el papa Innocenzo III (Inocencio III), uno de los pontífices más poderosos de la historia, que pronto aprobaría de palabra la nueva forma de vida que Francisco proponía. En 1209, los monjes benedictinos del Monte Subasio, dueños formales de la capilla, la entregan a Francisco para que se convierta en el hogar de la comunidad religiosa que empezaba a crecer a su alrededor — el mismo año en que esa comunidad se formaliza como la Orden Franciscana. Siglos después, entre 1569 y 1679, se construiría alrededor de la pequeña capilla una basílica entera —Santa Maria degli Angeli (Santa María de los Ángeles)— solo para protegerla y recibir a los peregrinos. Pero la huella más lejana de la Porciúncula no se quedó en Italia: los franciscanos que después cruzaron el Atlántico llevaban consigo la memoria de esa capilla como el lugar fundacional de su orden, dedicada a Nuestra Señora de los Ángeles. El 2 de agosto de 1769 —día de la fiesta de Nuestra Señora de los Ángeles de la Porciúncula en el calendario franciscano— la expedición Portolá acampa junto a un río en el sur de la actual California y lo bautiza El Río de Nuestra Señora la Reina de los Ángeles de Porciúncula. Ese nombre, heredado de una capilla que un joven inquieto reparó con sus propias manos quinientos sesenta años antes, terminaría dándole su nombre a la ciudad que creció junto a ese río: Los Ángeles.",
    descriptionHtml:
      '<button type="button" class="timeline-detail-geolink" data-region="Porciúncula" data-country="Italia">La Porziuncola</button> (la Porciúncula) —del latín Portiuncula, \'pequeña porción de tierra\', nombre que originalmente designaba la parcela benedictina en un claro de bosque a los pies de <button type="button" class="timeline-detail-geolink" data-region="Asís" data-country="Italia">Assisi</button> (Asís), antes de pasar a nombrar la capilla misma— ya existía, según la tradición local, desde el siglo IV o antes, varios siglos antes del punto donde arranca esta línea de tiempo. Hacia 1205, ya convertido tras abandonar la fortuna de su familia mercantil, Francesco d\'Assisi (Francisco de Asís) —todavía un joven desconocido, no el santo que se volvería después— empieza a reparar con sus propias manos varias iglesias en ruinas alrededor de la ciudad; entre 1205 y 1208 restaura la Porciúncula casi por completo, financiando el trabajo con las limosnas que recogía viviendo como un pobre más. En esos años gobiernan, sin saberlo, sobre el escenario en que esto ocurre: el Sacro Imperio Romano Germánico bajo Otón IV, y en <button type="button" class="timeline-detail-geolink" data-region="Roma" data-country="Italia">Roma</button>, el papa Innocenzo III (Inocencio III), uno de los pontífices más poderosos de la historia, que pronto aprobaría de palabra la nueva forma de vida que Francisco proponía. En 1209, los monjes benedictinos del Monte Subasio, dueños formales de la capilla, la entregan a Francisco para que se convierta en el hogar de la comunidad religiosa que empezaba a crecer a su alrededor — el mismo año en que esa comunidad se formaliza como la <button type="button" class="timeline-detail-entrylink" data-id="orden-franciscana-1209">Orden Franciscana</button>. Siglos después, entre 1569 y 1679, se construiría alrededor de la pequeña capilla una basílica entera —<button type="button" class="timeline-detail-geolink" data-region="Porciúncula" data-country="Italia">Santa Maria degli Angeli</button> (Santa María de los Ángeles)— solo para protegerla y recibir a los peregrinos. Pero la huella más lejana de la Porciúncula no se quedó en <button type="button" class="timeline-detail-geolink" data-country="Italia">Italia</button>: los franciscanos que después cruzaron el Atlántico llevaban consigo la memoria de esa capilla como el lugar fundacional de su orden, dedicada a Nuestra Señora de los Ángeles. El 2 de agosto de 1769 —día de la fiesta de Nuestra Señora de los Ángeles de la Porciúncula en el calendario franciscano— la <button type="button" class="timeline-detail-entrylink" data-id="portola-expedicion-san-diego-1769">expedición Portolá</button> acampa junto a un río en el sur de la actual California y lo bautiza El Río de Nuestra Señora la Reina de los Ángeles de Porciúncula. Ese nombre, heredado de una capilla que un joven inquieto reparó con sus propias manos quinientos sesenta años antes, terminaría dándole su nombre a la ciudad que creció junto a ese río: Los Ángeles.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si los benedictinos de Monte Subasio nunca le hubieran entregado la Porciúncula a Francisco en 1209?",
      answer:
        "Francisco y sus primeros seguidores habrían necesitado encontrar otro lugar para asentar su comunidad, y es probable que la orden se hubiera organizado de todos modos —fue la aprobación papal, no la capilla, lo que realmente formalizó el movimiento—. Pero la advocación mariana específica de ese sitio, Nuestra Señora de los Ángeles, no habría quedado grabada en el calendario franciscano del 2 de agosto. Sin esa fecha exacta, es difícil imaginar que un capellán de la expedición Portolá, medio milenio después y a miles de kilómetros de Asís, hubiera bautizado un río californiano con ese nombre preciso — y sin ese río, Los Ángeles probablemente se llamaría de otra manera."
    }
  },
  {
    id: "orden-franciscana-1209",
    year: 1209,
    title: "1209: Francisco de Asís funda la Orden Franciscana",
    author: "Francisco de Asís",
    country: "Italia",
    region: "Asís",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "En 1209, el mercader convertido a fraile Francesco d'Assisi (Francisco de Asís) funda en Assisi (Asís), Italia, la Orden de Hermanos Menores —los franciscanos— tras obtener la aprobación oral del papa Innocenzo III (Inocencio III) para una regla de vida basada en la pobreza absoluta, la predicación itinerante y el servicio a los pobres. Frente a una Iglesia medieval cada vez más rica y jerárquica, Francisco predicaba que los verdaderos seguidores de Cristo debían imitarlo renunciando a toda posesión material. La orden crece con rapidez: en 1219, el propio Francisco cruza a Damieta, Egipto, durante la Quinta Cruzada, y logra una audiencia pacífica con el sultán ayubí al-Malik al-Kamil, buscando el diálogo en vez de la conquista — su episodio más famoso fuera de Europa. Un año después, en 1220, cinco frailes son martirizados en Marrakech, Marruecos —los 'protomártires de Marruecos'—, la primera misión franciscana organizada en África. En 1224 los franciscanos desembarcan en Dover y llegan a Oxford, Inglaterra, que se convierte en uno de los grandes centros intelectuales de la orden, cuna de frailes como Roger Bacon, Duns Escoto y Guillermo de Ockham; casi al mismo tiempo establecen un convento-estudio junto a la Universidad de París, el otro gran polo académico franciscano medieval. La expansión sigue hacia oriente: en 1246, Giovanni da Pian del Carpine llega a Karakórum, Mongolia, por encargo del papa Innocenzo IV (Inocencio IV), la primera embajada europea documentada al imperio mongol, y en 1294 Giovanni da Montecorvino se instala en Khanbaliq —la actual Pekín— y se convierte en el primer arzobispo católico de la ciudad, la misión franciscana más al oriente de toda la Edad Media. Casi tres siglos después de la fundación, en 1524, doce franciscanos encabezados por Martín de Valencia llegan a la Ciudad de México, apenas tres años después de la caída de Tenochtitlan, para iniciar la evangelización de Nueva España — el verdadero punto de entrada franciscano al continente americano, 245 años antes de que fray Junípero Serra y sus hermanos fundaran la cadena de veintiuna misiones de Alta California que da origen a ciudades como San Diego, San Francisco, Santa Bárbara y San José, en la expedición Portolá de 1769. Cinco siglos y medio después de que Francisco renunciara a la riqueza de su padre en las calles de Asís, sus herederos espirituales habían recorrido tres continentes y bautizado medio estado de California.",
    descriptionHtml:
      'En 1209, el mercader convertido a fraile Francesco d\'Assisi (Francisco de Asís) funda en <button type="button" class="timeline-detail-geolink" data-region="Asís" data-country="Italia">Assisi</button> (Asís), Italia, la Orden de Hermanos Menores —los franciscanos— en la recién restaurada <button type="button" class="timeline-detail-entrylink" data-id="porciuncula-restauracion-1205">capilla de la Porciúncula</button>, tras obtener la aprobación oral del papa Innocenzo III (Inocencio III) para una regla de vida basada en la pobreza absoluta, la predicación itinerante y el servicio a los pobres. Frente a una Iglesia medieval cada vez más rica y jerárquica, Francisco predicaba que los verdaderos seguidores de Cristo debían imitarlo renunciando a toda posesión material. La orden crece con rapidez: en 1219, el propio Francisco cruza a <button type="button" class="timeline-detail-geolink" data-region="Damieta" data-country="Egipto">Damieta</button>, Egipto, durante la Quinta Cruzada, y logra una audiencia pacífica con el sultán ayubí al-Malik al-Kamil, buscando el diálogo en vez de la conquista — su episodio más famoso fuera de Europa. Un año después, en 1220, cinco frailes son martirizados en <button type="button" class="timeline-detail-geolink" data-region="Marrakech" data-country="Marruecos">Marrakech</button>, Marruecos —los \'protomártires de Marruecos\'—, la primera misión franciscana organizada en África. En 1224 los franciscanos desembarcan en Dover y llegan a <button type="button" class="timeline-detail-geolink" data-region="Oxford" data-country="Reino Unido">Oxford</button>, Inglaterra, que se convierte en uno de los grandes centros intelectuales de la orden, cuna de frailes como Roger Bacon, Duns Escoto y Guillermo de Ockham; casi al mismo tiempo establecen un convento-estudio junto a la <button type="button" class="timeline-detail-geolink" data-region="Universidad de París" data-country="Francia">Universidad de París</button>, el otro gran polo académico franciscano medieval. La expansión sigue hacia oriente: en 1246, Giovanni da Pian del Carpine llega a <button type="button" class="timeline-detail-geolink" data-region="Karakórum" data-country="Mongolia">Karakórum</button>, Mongolia, por encargo del papa Innocenzo IV (Inocencio IV), la primera embajada europea documentada al imperio mongol, y en 1294 Giovanni da Montecorvino se instala en Khanbaliq —la actual <button type="button" class="timeline-detail-geolink" data-region="Pekín" data-country="China">Pekín</button>— y se convierte en el primer arzobispo católico de la ciudad, la misión franciscana más al oriente de toda la Edad Media. Casi tres siglos después de la fundación, en 1524, doce franciscanos encabezados por Martín de Valencia llegan a la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, apenas tres años después de la caída de Tenochtitlan, para iniciar la evangelización de Nueva España — el verdadero punto de entrada franciscano al continente americano, 245 años antes de que <button type="button" class="timeline-detail-entrylink" data-id="junipero-serra-nace-1713">fray Junípero Serra</button> y sus hermanos fundaran la cadena de veintiuna misiones de Alta California que da origen a ciudades como San Diego, San Francisco, Santa Bárbara y San José, en la <button type="button" class="timeline-detail-entrylink" data-id="portola-expedicion-san-diego-1769">expedición Portolá de 1769</button>. Cinco siglos y medio después de que Francisco renunciara a la riqueza de su padre en las calles de Asís, sus herederos espirituales habían recorrido tres continentes y bautizado medio estado de California.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el papa Inocencio III hubiera rechazado la regla de Francisco de Asís en 1209?",
      answer:
        "Sin la aprobación papal, la comunidad de Francisco habría corrido el riesgo de ser declarada herética, como ocurrió con otros movimientos de pobreza radical de la época. Sin una orden franciscana reconocida por Roma, la Iglesia católica habría llegado a América sin uno de sus brazos misioneros más influyentes, y la historia religiosa de California —sus misiones, sus nombres, su arquitectura— sería irreconocible."
    }
  },
  {
    id: "muerte-francisco-asis-1226",
    year: 1226,
    title: "1226: Muere Francisco de Asís en la Porciúncula",
    author: "Francisco de Asís",
    country: "Italia",
    region: "Porciúncula",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "Entre 1211 y 1212, una joven de familia noble de Assisi (Asís), Chiara Offreduccio (Clara Offreduccio) —conocida después como Chiara d'Assisi (Santa Clara de Asís)—, abandona en secreto la vida acomodada de los suyos y acude de noche a la Porziuncola (la Porciúncula), donde Francisco la recibe en la nueva forma de vida religiosa que predicaba. De ese encuentro nace la Orden de las Damas Pobres, las Clarisas, la rama femenina del movimiento franciscano. En 1216, ya con la orden masculina consolidada, Francisco pide al papa Onorio III (Honorio III) un privilegio poco común: una indulgencia plenaria para todo peregrino que visitara arrepentido la pequeña capilla. El papa lo concede, y la gracia pasa a conocerse como el Perdón de Asís o la Indulgencia de la Porciúncula —una celebración que, ochocientos años después, sigue reuniendo a miles de peregrinos cada 1 y 2 de agosto—. Una década más tarde, el 3 de octubre de 1226, gravemente enfermo y sintiendo cercana la muerte, Francisco pide ser trasladado una última vez a la Porciúncula, el lugar que, según sus primeros biógrafos, más amó en vida; muere esa noche, a los cuarenta y cuatro años, en la misma pequeña capilla que había restaurado con sus propias manos dos décadas antes. Su muerte convierte a la pequeña capilla en uno de los grandes santuarios de peregrinación de la Europa medieval —el mismo lugar que, siglos más tarde, los franciscanos llevarían en la memoria hasta la fundación de Los Ángeles, California.",
    descriptionHtml:
      'Entre 1211 y 1212, una joven de familia noble de <button type="button" class="timeline-detail-geolink" data-region="Asís" data-country="Italia">Assisi</button> (Asís), Chiara Offreduccio (Clara Offreduccio) —conocida después como Chiara d\'Assisi (Santa Clara de Asís)—, abandona en secreto la vida acomodada de los suyos y acude de noche a la <button type="button" class="timeline-detail-geolink" data-region="Porciúncula" data-country="Italia">Porziuncola</button> (la Porciúncula), donde Francisco la recibe en la nueva forma de vida religiosa que predicaba. De ese encuentro nace la Orden de las Damas Pobres, las Clarisas, la rama femenina del movimiento franciscano. En 1216, ya con la <button type="button" class="timeline-detail-entrylink" data-id="orden-franciscana-1209">orden masculina</button> consolidada, Francisco pide al papa Onorio III (Honorio III) un privilegio poco común: una indulgencia plenaria para todo peregrino que visitara arrepentido la pequeña capilla. El papa lo concede, y la gracia pasa a conocerse como el Perdón de Asís o la Indulgencia de la Porciúncula —una celebración que, ochocientos años después, sigue reuniendo a miles de peregrinos cada 1 y 2 de agosto—. Una década más tarde, el 3 de octubre de 1226, gravemente enfermo y sintiendo cercana la muerte, Francisco pide ser trasladado una última vez a la <button type="button" class="timeline-detail-geolink" data-region="Porciúncula" data-country="Italia">Porciúncula</button>, el lugar que, según sus primeros biógrafos, más amó en vida; muere esa noche, a los cuarenta y cuatro años, en la misma <button type="button" class="timeline-detail-entrylink" data-id="porciuncula-restauracion-1205">pequeña capilla</button> que había restaurado con sus propias manos dos décadas antes. Su muerte convierte a la pequeña capilla en uno de los grandes santuarios de peregrinación de la Europa medieval —el mismo lugar que, siglos más tarde, los franciscanos llevarían en la memoria hasta la fundación de <button type="button" class="timeline-detail-entrylink" data-id="portola-expedicion-san-diego-1769">Los Ángeles, California</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el papa Honorio III hubiera negado la indulgencia que Francisco pidió en 1216?",
      answer:
        "El Perdón de Asís es hoy uno de los ritos más antiguos y continuos del calendario franciscano, la misma fiesta que, por pura coincidencia de fecha, terminó bautizando un río al otro lado del mundo. Sin esa indulgencia, la Porciúncula habría seguido siendo venerada como el lugar donde murió Francisco, pero el 2 de agosto no habría quedado grabado en el calendario litúrgico franciscano como día de fiesta particular — y sin esa fecha exacta, la expedición Portolá bien podría haber bautizado el río californiano de otra manera cinco siglos y medio después."
    }
  },
  {
    id: "duelo-virgen-1250",
    year: 1250,
    title: "El duelo de la Virgen",
    author: "Gonzalo de Berceo",
    country: "España",
    region: "La Rioja",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Poema devocional de Gonzalo de Berceo, pionero del mester de clerecía, en el que la Virgen narra en primera persona su dolor al presenciar la Crucifixión de su hijo —un episodio bíblico de casi 1,200 años antes—. Fechado de forma aproximada hacia mediados del siglo XIII, dentro del período de actividad conocida de Berceo, combina el relato bíblico con una intimidad emocional que buscaba conmover directamente a un público medieval devoto.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Gonzalo de Berceo no hubiera dado voz propia a la Virgen?",
      answer:
        "La poesía religiosa medieval habría seguido narrando lo sagrado desde afuera, como testigo, no desde la intimidad del dolor materno. El mester de clerecía habría tardado más en descubrir que la emoción humana, no solo la doctrina, podía mover a un público devoto."
    }
  },
  {
    id: "libro-buen-amor-1330",
    year: 1330,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Pulled left so it, peste-negra-1338, and nezahualcoyotl
    // (fixed by the 1438+ chain) each clear CLUSTER_GAP_PX from the next.
    trackYear: 1313.59,
    endYear: 1343,
    title: "Libro de buen amor",
    author: "Juan Ruiz, Arcipreste de Hita",
    country: "España",
    region: "Guadalajara",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Obra inclasificable del mester de clerecía en la que Juan Ruiz, Arcipreste de Hita, mezcla autobiografía, fábulas, exempla morales y episodios amorosos cómicos, narrados por un yo poético que oscila entre el 'loco amor' y el 'buen amor'. Se conservan dos redacciones, de 1330 y 1343; Trotaconventos, la alcahueta que guía al narrador, se convertiría en antecedente directo de la picaresca española.",
    descriptionHtml:
      'Obra inclasificable del mester de clerecía en la que Juan Ruiz, Arcipreste de <button type="button" class="timeline-detail-geolink" data-region="Hita" data-country="España">Hita</button>, mezcla autobiografía, fábulas, exempla morales y episodios amorosos cómicos, narrados por un yo poético que oscila entre el \'loco amor\' y el \'buen amor\'. Se conservan dos redacciones, de 1330 y 1343; Trotaconventos, la alcahueta que guía al narrador, se convertiría en antecedente directo de la picaresca española.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Juan Ruiz hubiera escrito un tratado moral convencional, sin ironía ni ambigüedad?",
      answer:
        "La picaresca española habría perdido a su antepasado más temprano y más extraño. Trotaconventos —la alcahueta que camina la línea entre pecado y comedia— no habría abierto el camino a Celestina, y la literatura española habría tardado más en aprender a reírse de su propia moral."
    }
  },
  {
    id: "nezahualcoyotl",
    year: 1402,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Pulled slightly left of its real year in 2026 to lend
    // room to the 1438/1441/1442/1478/1479/1487 chain described at
    // inquisicion-espanola-1478. Fixed here — libro-buen-amor-1330 and
    // peste-negra-1338 were nudged further left instead to clear it,
    // since this entry's own leftward slack toward 1330 is now used up.
    trackYear: 1361.75,
    endYear: 1472,
    title: "Nezahualcóyotl: vida y obra",
    author: "José Luis Martínez",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    pubYear: 1972,
    description:
      "Biografía intelectual del rey-poeta de Texcoco, construida a partir de testimonios históricos verosímiles, sin adornos novelescos.",
    descriptionHtml:
      'Biografía intelectual del rey-poeta de <button type="button" class="timeline-detail-geolink" data-region="Texcoco" data-country="México">Texcoco</button>, construida a partir de testimonios históricos verosímiles, sin adornos novelescos.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la obra poética de Nezahualcóyotl se hubiera conservado completa, sin depender de transcripciones posteriores?",
      answer:
        "Tendríamos una voz filosófica prehispánica tan documentada como cualquier poeta europeo de su época, no una reconstrucción parcial hecha por cronistas mestizos generaciones después. El rey-poeta de Texcoco ocuparía en la historia literaria un lugar central, no el de excepción rescatada."
    }
  },
  {
    id: "pachacutec-imperio-inca-1438",
    year: 1438,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the 1438/1441/1442/1478/1479/1487/1492/1492
    // chain-clustered sequence near the pre-colonial/colonial era
    // boundary — see inquisicion-espanola-1478 for the rest of the chain.
    // Re-solved in 2026 when origen-trata-transatlantica-1441 and
    // legado-trata-transatlantica-1442 were inserted into the same gap,
    // and again to give 1441 and 1442 their own standalone points too
    // (see nezahualcoyotl for how room was found).
    trackYear: 1378.04,
    endYear: 1471,
    title: "1438: Pachacútec funda el Imperio Inca",
    author: "Hito histórico",
    country: "Perú",
    region: "Cusco",
    type: ICON_TYPE.HISTORY,
    description:
      "En 1438, con Cusco sitiado y su padre Huiracocha Inca huido de la ciudad, el príncipe Cusi Yupanqui reúne a los pueblos aliados y derrota a los chancas en la llanura de Ichupampa, cerca del río Apurímac. La victoria le gana el trono —y un nuevo nombre: Pachacútec, 'el que transforma la tierra'—. En poco más de tres décadas de reinado convierte el pequeño curacazgo de Cusco en el Tahuantinsuyo, un imperio que llega a extenderse por los Andes desde el actual Ecuador hasta Chile. Rediseña Cusco —según la tradición, con la forma de un puma—, ordena construir Machu Picchu como finca real, formaliza el sistema de trabajo colectivo del mit'a y tiende la red de caminos del Qhapaq Ñan que mantiene unido al imperio. Casi dos siglos después, el cronista mestizo El Inca Garcilaso de la Vega —hijo de una princesa inca y un conquistador español— reconstruiría esta misma historia de memoria en sus Comentarios Reales, entretejiendo la crónica oral incaica con el relato español de la conquista.",
    descriptionHtml:
      'En 1438, con <button type="button" class="timeline-detail-geolink" data-region="Cusco" data-country="Perú">Cusco</button> sitiado y su padre Huiracocha Inca huido de la ciudad, el príncipe Cusi Yupanqui reúne a los pueblos aliados y derrota a los chancas en la llanura de Ichupampa, cerca del río Apurímac. La victoria le gana el trono —y un nuevo nombre: Pachacútec, \'el que transforma la tierra\'—. En poco más de tres décadas de reinado convierte el pequeño curacazgo de Cusco en el Tahuantinsuyo, un imperio que llega a extenderse por los Andes desde el actual Ecuador hasta Chile. Rediseña Cusco —según la tradición, con la forma de un puma—, ordena construir <button type="button" class="timeline-detail-geolink" data-region="Machu Picchu" data-country="Perú">Machu Picchu</button> como finca real, formaliza el sistema de trabajo colectivo del mit\'a y tiende la red de caminos del Qhapaq Ñan que mantiene unido al imperio. Casi dos siglos después, el cronista mestizo El Inca Garcilaso de la Vega —hijo de una princesa inca y un conquistador español— reconstruiría esta misma historia de memoria en sus Comentarios Reales, entretejiendo la crónica oral incaica con el relato español de la conquista.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si los chancas hubieran tomado el Cusco en 1438?",
      answer:
        "El pequeño curacazgo cusqueño habría desaparecido como tantos otros señoríos andinos de la época, absorbido por el imperio chanka en expansión. No existiría el Tahuantinsuyo, ni la red de caminos ni el mit'a que llegaron a unificar los Andes bajo una sola administración —y probablemente tampoco habría existido un imperio lo bastante grande y centralizado como para que, un siglo después, un puñado de conquistadores españoles pudiera tomarlo entero capturando a un solo hombre, el inca Atahualpa."
    }
  },
  {
    id: "origen-trata-transatlantica-1441",
    year: 1441,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1374.28,
    title: "1441: cautivos africanos llegan a Lagos, precedente de la trata transatlántica",
    author: "Antão Gonçalves y Lançarote de Freitas",
    country: "Portugal",
    region: "Lagos",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.ECHO],
    description:
      "En 1441, Antão Gonçalves capturó personas cerca de Cabo Branco, en Mauritania, y llevó cautivos africanos a Lagos, Portugal. Tres años después, Lançarote de Freitas desembarcó allí 235 personas para su venta pública. Estos viajes marcaron una expansión decisiva del tráfico portugués de esclavos por el Atlántico oriental, aunque todavía no fueron una ruta transatlántica directa hacia América. Las bulas Dum Diversas y Romanus Pontifex otorgaron después cobertura religiosa a la conquista y esclavización de pueblos no cristianos. El sistema crecería con plantaciones insulares coloniales y, desde 1518, con licencias directas hacia la América española.",
    descriptionHtml:
      "En 1441, Antão Gonçalves capturó personas cerca de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Cabo Branco\" data-country=\"Mauritania\">Cabo Branco</button>, en <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Mauritania\">Mauritania</button>, y llevó cautivos africanos a <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Lagos\" data-country=\"Portugal\">Lagos</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Portugal\">Portugal</button>. Tres años después, Lançarote de Freitas desembarcó allí 235 personas para su venta pública. Estos viajes marcaron una expansión decisiva del tráfico portugués de esclavos por el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Atlántico oriental\">Atlántico oriental</button>, aunque todavía no fueron una ruta transatlántica directa hacia <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"América española\">América</button>. Las bulas <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"legado-trata-transatlantica-1442\">Dum Diversas y Romanus Pontifex</button> otorgaron después cobertura religiosa a la conquista y esclavización de pueblos no cristianos. El sistema crecería con plantaciones insulares coloniales y, <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"licencia-trata-directa-1518\">desde 1518</button>, con licencias directas hacia la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"América española\">América española</button>.",
    butterfly: {
      prompt: "¿Por qué 1441 es un precedente y 1518 un cambio de escala?",
      answer:
        "En 1441 los cautivos fueron llevados a Portugal dentro del Atlántico oriental. La licencia de 1518 autorizó una gran ruta directa hacia la América española. Leer ambos puntos juntos muestra cómo capturas costeras se convirtieron gradualmente en un sistema transatlántico regulado por coronas, comerciantes y autoridad religiosa."
    }
  },

  {
    id: "legado-trata-transatlantica-1442",
    year: 1442,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the 1438/1441/1442/1478/1479/1487/1492/1492
    // chain-clustered sequence — see inquisicion-espanola-1478 for the
    // rest of the chain. Given its own standalone point (not clustered
    // with origen-trata-transatlantica-1441) by borrowing extra room
    // from nezahualcoyotl.
    trackYear: 1394.33,
    endYear: 2026,
    title: "1442–hoy: el legado de la trata, de San Basilio de Palenque a LaDainian Tomlinson",
    author: "Hito histórico",
    country: "Colombia",
    region: "San Basilio de Palenque",
    type: ICON_TYPE.HISTORY,
    description:
      "La trata transatlántica desarraigó a unos doce millones y medio de africanos, pero también sembró, sin proponérselo, los focos de resistencia y las poblaciones que hoy definen la identidad afrolatina. Cerca de Cartagena de Indias —uno de los puertos de esclavizados más grandes de las Américas—, un grupo de africanos fugados fundó a comienzos del siglo XVII, bajo el liderazgo del rey congolés capturado Benkos Biohó (originario del Reino de Kongo), el palenque de San Basilio: una comunidad cimarrona autogobernada que en 1713 se convirtió, mediante un acuerdo de paz con la Corona española, en el primer pueblo libre reconocido de toda América. Casi cuatro siglos después, San Basilio de Palenque sigue siendo una comunidad casi exclusivamente afrodescendiente, con su propia lengua criolla, el palenquero —mezcla de español y lenguas bantúes—, reconocida por la UNESCO como Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad. Brasil, destino de cerca del cuarenta por ciento de todos los africanos esclavizados embarcados hacia América —unos cinco millones de personas entre los siglos XVI y XIX—, es hoy el país con la mayor población de ascendencia africana fuera de África: según el censo de 2022, el 55.5% de los brasileños se identifican como negros o pardos. Y en Texas, Estados Unidos, la trata dejó una huella que llegó hasta la NFL: el corredor LaDainian Tomlinson (San Diego Chargers), miembro del Salón de la Fama, es tataranieto de George, un hombre esclavizado en la plantación Tomlinson Hill que, como tantos esclavizados, heredó el apellido de la familia que lo poseía. En 2013, el corredor se reunió con Chris Tomlinson, periodista y descendiente directo de esa misma familia de dueños de esclavos, quien había pasado años investigando la historia compartida de ambas familias para su libro Tomlinson Hill. En ese encuentro, Chris le contó a LaDainian todo lo que había descubierto sobre sus antepasados — un cierre de círculo, quinientos setenta y dos años después de Cabo Branco, entre el bisnieto de un dueño de esclavos y el descendiente de uno de sus esclavizados, sentados a la misma mesa como familia.",
    descriptionHtml:
      'La trata transatlántica desarraigó a unos doce millones y medio de africanos, pero también sembró, sin proponérselo, los focos de resistencia y las poblaciones que hoy definen la identidad afrolatina. Cerca de Cartagena de Indias —uno de los puertos de esclavizados más grandes de las Américas—, un grupo de africanos fugados fundó a comienzos del siglo XVII, bajo el liderazgo del rey congolés capturado Benkos Biohó (originario del <button type="button" class="timeline-detail-geolink" data-country="Congo">Reino de Kongo</button>), el palenque de <button type="button" class="timeline-detail-geolink" data-region="San Basilio de Palenque" data-country="Colombia">San Basilio</button>: una comunidad cimarrona autogobernada que en 1713 se convirtió, mediante un acuerdo de paz con la Corona española, en el primer pueblo libre reconocido de toda América. Casi cuatro siglos después, <button type="button" class="timeline-detail-geolink" data-region="San Basilio de Palenque" data-country="Colombia">San Basilio de Palenque</button> sigue siendo una comunidad casi exclusivamente afrodescendiente, con su propia lengua criolla, el palenquero —mezcla de español y lenguas bantúes—, reconocida por la UNESCO como Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad. <button type="button" class="timeline-detail-geolink" data-country="Brasil">Brasil</button>, destino de cerca del cuarenta por ciento de todos los africanos esclavizados embarcados hacia América —unos cinco millones de personas entre los siglos XVI y XIX—, es hoy el país con la mayor población de ascendencia africana fuera de África: según el censo de 2022, el 55.5% de los brasileños se identifican como negros o pardos. Y en <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">Texas, Estados Unidos</button>, la trata dejó una huella que llegó hasta la NFL: el corredor LaDainian Tomlinson (<button type="button" class="timeline-detail-entrylink" data-id="portola-expedicion-san-diego-1769">San Diego Chargers</button>), miembro del Salón de la Fama, es tataranieto de George, un hombre esclavizado en la plantación Tomlinson Hill que, como tantos esclavizados, heredó el apellido de la familia que lo poseía. En 2013, el corredor se reunió con Chris Tomlinson, periodista y descendiente directo de esa misma familia de dueños de esclavos, quien había pasado años investigando la historia compartida de ambas familias para su libro Tomlinson Hill. En ese encuentro, Chris le contó a LaDainian todo lo que había descubierto sobre sus antepasados — un cierre de círculo, quinientos setenta y dos años después de Cabo Branco, entre el bisnieto de un dueño de esclavos y el descendiente de uno de sus esclavizados, sentados a la misma mesa como familia.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Benkos Biohó nunca hubiera liderado la fuga que fundó San Basilio de Palenque?",
      answer:
        "Los africanos esclavizados que escapaban de Cartagena en el siglo XVII habrían seguido formando palenques de todos modos —la fuga y el cimarronaje fueron una respuesta casi universal a la esclavitud en toda América—, pero sin el liderazgo y la capacidad de negociación de Biohó es poco probable que hubieran conseguido un tratado de paz reconocido por la Corona en 1713. Sin ese reconocimiento temprano, San Basilio de Palenque bien podría haber sido disuelto o reabsorbido por la fuerza, como ocurrió con tantos otros palenques del Caribe, y el palenquero —la única lengua criolla de base española y bantú que sobrevive hoy en América— probablemente se habría perdido junto con la comunidad que lo habla."
    }
  },
  {
    id: "colon-porto-santo-1479",
    year: 1479,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the chain described at
    // inquisicion-espanola-1478 — keeps this standalone rather than
    // merging into the corsali-explorador-1487 marker. Re-solved in 2026
    // as part of the wider 1479-1533 chain (see faras-cruz-del-sur-1500),
    // and again later in 2026 to make room for
    // origen-trata-transatlantica-1441 / legado-trata-transatlantica-1442.
    trackYear: 1443.2,
    endYear: 1485,
    title: "1479: Colón se instala en Porto Santo",
    author: "Hito histórico",
    country: "Portugal",
    region: "Porto Santo",
    type: ICON_TYPE.HISTORY,
    description:
      "Hacia 1479, Cristoforo Colombo (Cristóbal Colón) se casa con Filipa Moniz Perestrelo, hija de Bartolomeu Perestrelo, primer capitán-donatario de Porto Santo, pequeña isla del archipiélago portugués de Madeira. Perestrelo ya había muerto, pero a través de su familia política Colón obtiene acceso a sus mapas, diarios de navegación y cartas de marear. Instalado entre Porto Santo y la vecina Madeira, se involucra en el comercio del azúcar y en las rutas atlánticas hacia la costa de África, y absorbe ahí un conocimiento práctico de los vientos y las corrientes del Atlántico que, más de una década después, sustentaría su propuesta de navegar hacia el occidente. Hoy la Casa Museu Cristóvão Colombo, en Vila Baleira, conserva esa memoria isleña como antesala —discutida por los historiadores en sus detalles, pero no en su importancia— del viaje de 1492.",
    descriptionHtml:
      'Hacia 1479, Cristoforo Colombo (Cristóbal Colón) se casa con Filipa Moniz Perestrelo, hija de Bartolomeu Perestrelo, primer capitán-donatario de Porto Santo, pequeña isla del archipiélago portugués de Madeira. Perestrelo ya había muerto, pero a través de su familia política Colón obtiene acceso a sus mapas, diarios de navegación y cartas de marear. Instalado entre Porto Santo y la vecina Madeira, se involucra en el comercio del azúcar y en las rutas atlánticas hacia la costa de África, y absorbe ahí un conocimiento práctico de los vientos y las corrientes del Atlántico que, más de una década después, sustentaría su propuesta de navegar hacia el occidente. Hoy la <button type="button" class="timeline-detail-geolink" data-region="Casa Museu Cristóvão Colombo" data-country="Portugal">Casa Museu Cristóvão Colombo</button>, en Vila Baleira, conserva esa memoria isleña como antesala —discutida por los historiadores en sus detalles, pero no en su importancia— del viaje de 1492.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Colón nunca hubiera tenido acceso a los mapas y diarios de Bartolomeu Perestrelo?",
      answer:
        "Sin esos años isleños de comercio, navegación y estudio de vientos atlánticos, Colón habría llegado a la corte de los Reyes Católicos con una intuición, no con un expediente de navegación. Su propuesta —ya de por sí recibida con escepticismo— pudo haber sido descartada sin la evidencia acumulada en Porto Santo y Madeira, dejando el primer contacto con América en manos de otro marino, bajo otra bandera."
    }
  },
  {
    id: "peste-negra-1338",
    year: 1338,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Sits between libro-buen-amor-1330 and nezahualcoyotl
    // (fixed by the 1438+ chain) — spaced to clear CLUSTER_GAP_PX from both.
    trackYear: 1329.17,
    endYear: 1353,
    title: "1338: la Peste Negra",
    author: "Hito histórico",
    country: "Kirguistán",
    region: "Issyk-Kul",
    type: ICON_TYPE.HISTORY,
    description:
      "La Peste Negra, causada por la bacteria Yersinia pestis, no comienza en Europa: el ADN antiguo extraído de tumbas cerca del lago Issyk-Kul, en las montañas del Tian Shan (actual Kirguistán), y datadas en 1338-1339, revela la cepa ancestral más cercana a la que después arrasaría el continente —el punto de origen genético más preciso que la ciencia ha logrado establecer hasta ahora, más específico que la vaga referencia tradicional a 'Asia Central'. Desde ahí, la peste viaja hacia el oeste junto a las caravanas de la Ruta de la Seda bajo la Pax Mongólica. En 1346, durante el asedio mongol a la ciudad genovesa de Caffa, en Crimea, los sitiadores catapultan cadáveres infectados por encima de las murallas —posiblemente el primer uso documentado de la guerra biológica—; los mercaderes genoveses que huyen por mar llevan la enfermedad consigo. En 1347 llega a Mesina, Sicilia, a bordo de barcos cargados de marineros infectados y ratas, y desde ahí se propaga con rapidez por todo el Mediterráneo y Europa. Entre 1346 y 1353 mata entre 25 y 50 millones de personas —entre el 30% y el 60% de la población europea—, en sus formas bubónica, neumónica y septicémica. Aldeas enteras desaparecen; algunos historiadores calculan que Europa no recuperaría sus niveles de población previos hasta el siglo XVI. La escasez de mano de obra que dejó la peste elevó los salarios de los sobrevivientes y debilitó el sistema feudal, mientras el miedo generalizado alimentaba movimientos flagelantes y acusaciones religiosas —Boccaccio, testigo directo en Florencia, describiría familias enteras abandonando a sus propios enfermos por miedo al contagio—. Pocas catástrofes han remodelado tanto una civilización desde un origen tan preciso y, a la vez, tan lejano.",
    descriptionHtml:
      'La Peste Negra, causada por la bacteria Yersinia pestis, no comienza en Europa: el ADN antiguo extraído de tumbas cerca del <button type="button" class="timeline-detail-geolink" data-region="Issyk-Kul" data-country="Kirguistán">lago Issyk-Kul</button>, en las montañas del Tian Shan (actual Kirguistán), y datadas en 1338-1339, revela la cepa ancestral más cercana a la que después arrasaría el continente —el punto de origen genético más preciso que la ciencia ha logrado establecer hasta ahora, más específico que la vaga referencia tradicional a \'Asia Central\'. Desde ahí, la peste viaja hacia el oeste junto a las caravanas de la <button type="button" class="timeline-detail-entrylink" data-id="caida-constantinopla-1453">Ruta de la Seda</button> bajo la Pax Mongólica. En 1346, durante el asedio mongol a la ciudad genovesa de <button type="button" class="timeline-detail-geolink" data-region="Caffa" data-country="Ucrania">Caffa</button>, en Crimea, los sitiadores catapultan cadáveres infectados por encima de las murallas —posiblemente el primer uso documentado de la guerra biológica—; los mercaderes genoveses que huyen por mar llevan la enfermedad consigo. En 1347 llega a <button type="button" class="timeline-detail-geolink" data-region="Mesina" data-country="Italia">Mesina</button>, Sicilia, a bordo de barcos cargados de marineros infectados y ratas, y desde ahí se propaga con rapidez por todo el Mediterráneo y Europa. Entre 1346 y 1353 mata entre 25 y 50 millones de personas —entre el 30% y el 60% de la población europea—, en sus formas bubónica, neumónica y septicémica. Aldeas enteras desaparecen; algunos historiadores calculan que Europa no recuperaría sus niveles de población previos hasta el siglo XVI. La escasez de mano de obra que dejó la peste elevó los salarios de los sobrevivientes y debilitó el sistema feudal, mientras el miedo generalizado alimentaba movimientos flagelantes y acusaciones religiosas —Boccaccio, testigo directo en Florencia, describiría familias enteras abandonando a sus propios enfermos por miedo al contagio—. Pocas catástrofes han remodelado tanto una civilización desde un origen tan preciso y, a la vez, tan lejano.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la Peste Negra nunca hubiera salido de las montañas del Tian Shan?",
      answer:
        "Sin esa cepa ancestral cruzando la Ruta de la Seda hacia el oeste, Europa habría conservado la estructura feudal muchas décadas más: sin la escasez de mano de obra que empujó los salarios al alza, ni la crisis de autoridad eclesiástica que abrió paso a los movimientos religiosos y, más tarde, al humanismo renacentista. Una bacteria nacida en las montañas de la actual Kirguistán terminó acelerando, sin que nadie lo supiera en 1338, el fin de la Edad Media."
    }
  },
  {
    id: "caida-constantinopla-1453",
    year: 1453,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the 1438/1441/1442/1453/1478/1479/1484/1487/
    // 1492/1492 chain-clustered sequence — see inquisicion-espanola-1478
    // for the rest of the chain. Re-spaced across the board (including
    // nezahualcoyotl) to fit this entry between
    // legado-trata-transatlantica-1442 and inquisicion-espanola-1478.
    trackYear: 1410.62,
    title: "1453: cae Constantinopla y se encarece la Ruta de la Seda",
    author: "Hito histórico",
    country: "Turquía",
    region: "Estambul",
    type: ICON_TYPE.CONFLICT,
    description:
      "Durante más de mil quinientos años, ninguna potencia controló jamás la totalidad de lo que hoy se conoce como la Ruta de la Seda: la mantuvieron a la vez mercaderes y funcionarios del Imperio Han, comerciantes sogdianos de Asia Central, mercaderes partos e indios, comerciantes árabes, pueblos turcos y, más tarde, las autoridades mongolas durante la Pax Mongólica. El nombre mismo —'Ruta de la Seda'— es una invención moderna: lo acuñó en 1877 el geógrafo alemán Ferdinand von Richthofen; nadie en la Antigüedad la llamó así. El 29 de mayo de 1453, el sultán otomano Mehmed II toma Constantinopla tras un asedio de casi dos meses, poniendo fin a mil años de Imperio Bizantino y convirtiendo a los otomanos en la potencia dominante del Mediterráneo oriental y de buena parte de las rutas comerciales que unían Europa con Asia. Contra la narrativa popular, los otomanos no 'cierran' la Ruta de la Seda: el comercio continúa, y mercaderes venecianos y genoveses siguen comprando especias, seda y porcelana asiáticas. Lo que cambia es que las coronas europeas ahora dependen de intermediarios —entre ellos el propio Imperio Otomano— que cobran su parte en cada tramo de la ruta, encareciendo productos ya de por sí costosos: pimienta, canela, clavo, nuez moscada, seda, porcelana. Para monarcas ambiciosos, la pregunta se vuelve inevitable: ¿por qué seguir pagando intermediarios si se puede llegar directamente a Asia? Portugal responde bordeando África —una apuesta que culmina en 1488, cuando Bartolomeu Dias dobla el cabo de Buena Esperanza, y en 1498, cuando Vasco da Gama llega a la India por mar—. España responde con la apuesta de Cristóbal Colón: cruzar el Atlántico hacia el occidente para llegar directamente a China (Catay), Japón (Cipango), la India y las islas de las Especias, evitando de un salto toda la cadena de intermediarios. La caída de Constantinopla no provoca por sí sola el viaje de Colón —es una pieza más de una transformación más amplia—, pero ayuda a convencer a Europa de que necesita rutas alternativas hacia Asia. La ironía final es doble: Colón nunca llega a Asia, y los otomanos, lejos de frenar el comercio euroasiático, terminan empujando a las coronas ibéricas a tejer, sin buscarlo, la primera red comercial verdaderamente global.",
    descriptionHtml:
      'Durante más de mil quinientos años, ninguna potencia controló jamás la totalidad de lo que hoy se conoce como la Ruta de la Seda: la mantuvieron a la vez mercaderes y funcionarios del Imperio Han, comerciantes sogdianos de Asia Central, mercaderes partos e indios, comerciantes árabes, pueblos turcos y, más tarde, las autoridades mongolas durante la Pax Mongólica. El nombre mismo —\'Ruta de la Seda\'— es una invención moderna: lo acuñó en 1877 el geógrafo alemán Ferdinand von Richthofen; nadie en la Antigüedad la llamó así. El 29 de mayo de 1453, el sultán otomano Mehmed II toma <button type="button" class="timeline-detail-geolink" data-region="Estambul" data-country="Turquía">Constantinopla</button> tras un asedio de casi dos meses, poniendo fin a mil años de Imperio Bizantino y convirtiendo a los otomanos en la potencia dominante del Mediterráneo oriental y de buena parte de las rutas comerciales que unían Europa con Asia. Contra la narrativa popular, los otomanos no \'cierran\' la Ruta de la Seda: el comercio continúa, y mercaderes venecianos y genoveses siguen comprando especias, seda y porcelana asiáticas. Lo que cambia es que las coronas europeas ahora dependen de intermediarios —entre ellos el propio Imperio Otomano— que cobran su parte en cada tramo de la ruta, encareciendo productos ya de por sí costosos: pimienta, canela, clavo, nuez moscada, seda, porcelana. Para monarcas ambiciosos, la pregunta se vuelve inevitable: ¿por qué seguir pagando intermediarios si se puede llegar directamente a Asia? Portugal responde bordeando África —una apuesta que culmina en 1488, cuando Bartolomeu Dias dobla el cabo de Buena Esperanza, y en 1498, cuando Vasco da Gama llega a la India por mar—. España responde con <button type="button" class="timeline-detail-entrylink" data-id="colon-joao-ii-1484">la apuesta de Cristóbal Colón</button>: cruzar el Atlántico hacia el occidente para llegar directamente a China (Catay), Japón (Cipango), la India y las islas de las Especias, evitando de un salto toda la cadena de intermediarios. La caída de Constantinopla no provoca por sí sola el viaje de Colón —es una pieza más de una transformación más amplia—, pero ayuda a convencer a Europa de que necesita rutas alternativas hacia Asia. La ironía final es doble: Colón nunca llega a Asia, y los otomanos, lejos de frenar el comercio euroasiático, terminan empujando a las coronas ibéricas a tejer, sin buscarlo, la primera red comercial verdaderamente global.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Constantinopla nunca hubiera caído en manos otomanas en 1453?",
      answer:
        "El comercio euroasiático habría seguido fluyendo por las mismas rutas terrestres de siempre, sin el incentivo añadido de intermediarios otomanos más costosos. Portugal probablemente habría seguido buscando una ruta marítima a la India de todos modos —ya llevaba décadas explorando la costa africana antes de 1453—, pero la urgencia española por encontrar una alternativa habría sido menor, y la ventana en la que Colón logró convencer a Isabel y Fernando en 1492 pudo haberse cerrado sin que nadie la aprovechara."
    }
  },
  {
    id: "matrimonio-isabel-fernando-1469",
    year: 1469,
    month: 10,
    day: 19,
    // Real date; the display position is spread across the crowded
    // 1453–1492 chain so this remains a standalone point.
    trackYear: 1426.91,
    title: "19 de octubre de 1469: Isabel y Fernando se casan en Valladolid",
    author: "Isabel I de Castilla y Fernando II de Aragón",
    country: "España",
    region: "Palacio de los Vivero",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "El 19 de octubre de 1469, Isabel de Castilla y Fernando de Aragón se casan en la Sala Rica del Palacio de los Vivero, en Valladolid, durante una sucesión castellana todavía disputada. La unión no fusionó de inmediato Castilla y Aragón: cada corona conservó sus leyes e instituciones. Sin embargo, creó la alianza dinástica desde la que ambos gobernarían, conquistarían Granada y financiarían el primer viaje de Cristóbal Colón en 1492.",
    descriptionHtml:
      'El 19 de octubre de 1469, Isabel de Castilla y Fernando de Aragón se casan en la Sala Rica del <button type="button" class="timeline-detail-geolink" data-region="Palacio de los Vivero" data-country="España">Palacio de los Vivero</button>, en <button type="button" class="timeline-detail-geolink" data-region="Valladolid" data-country="España">Valladolid</button>, durante una sucesión castellana todavía disputada. La unión no fusionó de inmediato <button type="button" class="timeline-detail-geolink" data-region="Castilla" data-country="España">Castilla</button> y <button type="button" class="timeline-detail-geolink" data-region="Aragón" data-country="España">Aragón</button>: cada corona conservó sus leyes e instituciones. Sin embargo, creó la alianza dinástica desde la que ambos gobernarían, conquistarían <button type="button" class="timeline-detail-entrylink" data-id="rendicion-granada-1492">Granada</button> y financiarían el <button type="button" class="timeline-detail-entrylink" data-id="cuatro-viajes-colon-1492">primer viaje de Cristóbal Colón en 1492</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Isabel y Fernando no se hubieran casado?",
      answer:
        "Castilla y Aragón habrían seguido caminos dinásticos separados. Sin aquella alianza, la conquista de Granada, el patrocinio de Colón y la expansión mediterránea de Aragón habrían dependido de coronas con prioridades distintas; la monarquía compuesta que más tarde gobernó gran parte del mundo hispano quizá nunca habría tomado la misma forma."
    }
  },
  {
    id: "colon-joao-ii-1484",
    year: 1484,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the 1438/1441/1442/1478/1479/1484/1487/1492/1492
    // chain-clustered sequence — see inquisicion-espanola-1478 for the
    // rest of the chain. Re-spaced across the board (including
    // nezahualcoyotl) to fit this entry between colon-porto-santo-1479 and
    // corsali-explorador-1487 without re-breaking any of them.
    trackYear: 1459.49,
    endYear: 1485,
    title: "1484: João II de Portugal rechaza a Colón",
    author: "Hito histórico",
    country: "Portugal",
    region: "Lisboa",
    type: ICON_TYPE.HISTORY,
    description:
      "Antes de convencer a los Reyes Católicos, Cristoforo Colombo (Cristóbal Colón) presenta primero su plan a Portugal. Hacia 1484-1485 expone ante el rey João II su propuesta de alcanzar Asia navegando hacia el occidente a través del Atlántico. João II —heredero de la política atlántica que su tío abuelo, el infante Enrique el Navegante, había iniciado generaciones antes— convoca a una junta de expertos portugueses en navegación, astronomía y matemáticas para evaluar el proyecto. El comité lo rechaza: concluye que Colón ha subestimado gravemente la circunferencia de la Tierra y, con ella, la distancia real hasta Asia navegando hacia el oeste. La decisión no nace de ignorancia, sino de una ventaja real: Portugal lleva décadas cartografiando la costa africana y confía en su propia ruta oriental hacia la India, cuyo avance —bordear el continente por el sur— ya parece cuestión de tiempo, no de apuesta. De hecho, los expertos portugueses están más cerca de la verdad que el propio Colón: subestima tanto la circunferencia terrestre que, de no haber tierra alguna entre Europa y Asia, sus naves habrían agotado agua y víveres mucho antes de tocar costa asiática. Lo que vuelve posible su viaje no es que su cálculo fuera correcto, sino que un continente entero —América— existía donde ningún europeo lo sospechaba. Existe además un rumor persistente, nunca confirmado por evidencia documental sólida, de que João II habría enviado en secreto una carabela hacia el oeste para poner a prueba los cálculos de Colón antes de descartarlo oficialmente; varios cronistas lo repitieron, pero los historiadores modernos lo consideran, en el mejor de los casos, no demostrado. Rechazado, Colón cruza a España, donde —tras otro rechazo inicial— consigue por fin el respaldo de Isabel y Fernando en 1492. Portugal, mientras tanto, confirma que había apostado bien: Bartolomeu Dias dobla el cabo de Buena Esperanza en 1488, y Vasco da Gama llega a la India por mar en 1498, consolidando la ruta oriental que la Corona portuguesa había preferido sobre la occidental de Colón.",
    descriptionHtml:
      'Antes de convencer a los Reyes Católicos, Cristoforo Colombo (Cristóbal Colón) presenta primero su plan a <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button>. Hacia 1484-1485, mientras vive <button type="button" class="timeline-detail-entrylink" data-id="colon-porto-santo-1479">instalado entre Porto Santo y Madeira</button>, expone ante el rey João II su propuesta de alcanzar Asia navegando hacia el occidente a través del Atlántico. João II —heredero de la política atlántica que su tío abuelo, el infante Enrique el Navegante, había iniciado generaciones antes— convoca a una junta de expertos portugueses en navegación, astronomía y matemáticas para evaluar el proyecto. El comité lo rechaza: concluye que Colón ha subestimado gravemente la circunferencia de la Tierra y, con ella, la distancia real hasta Asia navegando hacia el oeste. La decisión no nace de ignorancia, sino de una ventaja real: Portugal lleva décadas cartografiando la costa africana y confía en su propia ruta oriental hacia la India, cuyo avance —bordear el continente por el sur— ya parece cuestión de tiempo, no de apuesta. De hecho, los expertos portugueses están más cerca de la verdad que el propio Colón: subestima tanto la circunferencia terrestre que, de no haber tierra alguna entre Europa y Asia, sus naves habrían agotado agua y víveres mucho antes de tocar costa asiática. Lo que vuelve posible su viaje no es que su cálculo fuera correcto, sino que un continente entero —América— existía donde ningún europeo lo sospechaba. Existe además un rumor persistente, nunca confirmado por evidencia documental sólida, de que João II habría enviado en secreto una carabela hacia el oeste para poner a prueba los cálculos de Colón antes de descartarlo oficialmente; varios cronistas lo repitieron, pero los historiadores modernos lo consideran, en el mejor de los casos, no demostrado. Rechazado, Colón cruza a España, donde —tras otro rechazo inicial— consigue por fin el respaldo de Isabel y Fernando en <button type="button" class="timeline-detail-entrylink" data-id="cuatro-viajes-colon-1492">1492</button>. Portugal, mientras tanto, confirma que había apostado bien: Bartolomeu Dias dobla el cabo de Buena Esperanza en 1488, y Vasco da Gama llega a la India por mar en 1498, consolidando la ruta oriental que la Corona portuguesa había preferido sobre la occidental de Colón.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el comité de expertos portugueses hubiera aprobado la propuesta de Colón en 1484?",
      answer:
        "Portugal habría financiado la expedición hacia el oeste con los mismos recursos que ya invertía en la ruta africana, adelantando quizás años el primer contacto europeo con América — pero bajo bandera portuguesa, no española. El idioma, la religión y las instituciones que llegaron primero al continente habrían sido otras, y el mapa lingüístico de América tal como lo conocemos hoy sería irreconocible: casi el giro simétrico e inverso de lo que habría ocurrido si, en cambio, España hubiera rechazado a Colón en 1492."
    }
  },

  // ---- ESPAÑA MEDIEVAL: REDES, INSTITUCIONES Y RUPTURAS ----
  {
    id: "emirato-independiente-cordoba-756",
    year: 756,
    month: 5,
    day: 14,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 812,
    title: "14 de mayo de 756: un emirato omeya independiente",
    author: "Abd al-Rahman I",
    country: "España",
    region: "Córdoba",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "El 14 de mayo de 756, Abd al-Rahman I, superviviente de la dinastía omeya, derrotó a Yusuf al-Fihri cerca de Córdoba y fundó un emirato políticamente independiente de los abasíes de Bagdad. No se proclamó califa: ese título llegaría con Abd al-Rahman III en 929. El nuevo gobierno dio a al-Ándalus una capital estable y una dinastía propia, aunque nunca eliminó rebeliones ni rivalidades regionales. Treinta años después, Abd al-Rahman comenzó la gran mezquita que convertiría esa autonomía política en una imagen arquitectónica duradera.",
    descriptionHtml:
      "El 14 de mayo de 756, Abd al-Rahman I, superviviente de la dinastía omeya, derrotó a Yusuf al-Fihri cerca de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Córdoba\" data-country=\"España\">Córdoba</button> y fundó un emirato políticamente independiente de los abasíes de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Bagdad\" data-country=\"Irak\">Bagdad</button>. No se proclamó califa: ese título llegaría con <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"califato-cordoba-929\">Abd al-Rahman III en 929</button>. El nuevo gobierno dio a <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Al-Ándalus\" data-country=\"España\">al-Ándalus</button> una capital estable y una dinastía propia, aunque nunca eliminó rebeliones ni rivalidades regionales. Treinta años después, Abd al-Rahman comenzó la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"mezquita-cordoba-786\">gran mezquita</button> que convertiría esa autonomía política en una imagen arquitectónica duradera.",
    butterfly: {
      prompt: "¿Qué separa al emirato de 756 del califato de 929?",
      answer:
        "Abd al-Rahman I conquistó independencia política, pero no adoptó el título de califa. Abd al-Rahman III lo haría en 929 para afirmar otra escala de autoridad religiosa y diplomática."
    }
  },
  {
    id: "mezquita-cordoba-786",
    year: 786,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 833,
    endYear: 788,
    title: "786–788: nace la gran Mezquita de Córdoba",
    author: "Abd al-Rahman I y maestros andalusíes",
    country: "España",
    region: "Mezquita de Córdoba",
    flag: "spain-not-latam",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Entre 786 y 788, Abd al-Rahman I levantó la mezquita aljama fundacional de Córdoba. Sus once naves reutilizaron columnas y capiteles romanos y visigodos; las arcadas superpuestas multiplicaron altura, ritmo y luz. Soberanos posteriores ampliaron el edificio sin borrar su núcleo omeya. Convertida en catedral tras 1236, la Mezquita-Catedral conserva capas islámicas y cristianas dentro de una misma estructura. El monumento permite leer la historia material de la ciudad: poder dinástico, técnicas heredadas, trabajo andalusí, apropiación religiosa y continuidad arquitectónica más allá de cada régimen.",
    descriptionHtml:
      "Entre 786 y 788, Abd al-Rahman I levantó la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Mezquita de Córdoba\" data-country=\"España\">mezquita aljama fundacional de Córdoba</button>. Sus once naves reutilizaron columnas y capiteles romanos y visigodos; las arcadas superpuestas multiplicaron altura, ritmo y luz. Soberanos posteriores ampliaron el edificio sin borrar su núcleo omeya. <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"fernando-iii-cordoba-sevilla-1236\">Convertida en catedral tras 1236</button>, la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Mezquita de Córdoba\" data-country=\"España\">Mezquita-Catedral</button> conserva capas islámicas y cristianas dentro de una misma estructura. El monumento permite leer la historia material de la ciudad: poder dinástico, técnicas heredadas, trabajo andalusí, apropiación religiosa y continuidad arquitectónica más allá de cada régimen.",
    butterfly: {
      prompt: "¿Por qué las arcadas superpuestas fueron tan decisivas?",
      answer:
        "Permitieron ganar altura con columnas reutilizadas de tamaños distintos y crearon el ritmo visual que convirtió al edificio en una de las arquitecturas más reconocibles de al-Ándalus."
    }
  },
  {
    id: "taifas-fin-califato-1031",
    year: 1031,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 989,
    title: "1031: el califato se fragmenta en taifas",
    author: "Hisham III y las cortes de taifas",
    country: "España",
    region: "Córdoba",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "En 1031, tras la guerra civil iniciada en 1009, desapareció formalmente el califato omeya de Córdoba. Al-Ándalus se fragmentó en taifas gobernadas desde ciudades como Sevilla, Zaragoza, Toledo, Badajoz, Valencia y Granada. Su división favoreció alianzas cambiantes y el pago de parias a poderes cristianos, pero no produjo una simple decadencia: varias cortes compitieron por poetas, científicos, artesanos y prestigio monumental. Esa combinación de creatividad y vulnerabilidad definió el siglo XI y preparó el nuevo equilibrio que hizo posible la toma cristiana de Toledo en 1085.",
    descriptionHtml:
      "En 1031, tras la guerra civil iniciada en 1009, desapareció formalmente el <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"califato-cordoba-929\">califato omeya</button> de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Córdoba\" data-country=\"España\">Córdoba</button>. <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Al-Ándalus\" data-country=\"España\">Al-Ándalus</button> se fragmentó en taifas gobernadas desde ciudades como <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sevilla\" data-country=\"España\">Sevilla</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Zaragoza\" data-country=\"España\">Zaragoza</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Toledo\" data-country=\"España\">Toledo</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Badajoz\" data-country=\"España\">Badajoz</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Valencia\" data-country=\"España\">Valencia</button> y <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Granada\" data-country=\"España\">Granada</button>. Su división favoreció alianzas cambiantes y el pago de parias a poderes cristianos, pero no produjo una simple decadencia: varias cortes compitieron por poetas, científicos, artesanos y prestigio monumental. Esa combinación de creatividad y vulnerabilidad definió el siglo XI y preparó el nuevo equilibrio que hizo posible la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"toma-toledo-1085\">toma cristiana</button> de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Toledo\" data-country=\"España\">Toledo</button> en 1085.",
    butterfly: {
      prompt: "¿“Taifas” significa solamente decadencia?",
      answer:
        "No. La fragmentación redujo la fuerza política común, pero la competencia entre cortes sostuvo una extraordinaria producción literaria, científica, artesanal y arquitectónica."
    }
  },
  {
    id: "jarchas-romances-antes-1042",
    year: 1042,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1014,
    title: "antes de 1042: las jarchas hablan entre lenguas",
    author: "Poetas andalusíes anónimos",
    country: "España",
    region: "Al-Ándalus",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "Antes de 1042 ya circulaba al menos una jarcha romance al final de una moaxaja hebrea. Estas breves estrofas, también insertadas en composiciones árabes, suelen presentar una voz femenina que lamenta la ausencia del amado. Conservan formas del romance hablado en al-Ándalus, pero no son poemas autónomos ni pueden llamarse sin reservas “los primeros versos españoles”: su lengua y lectura siguen debatiéndose. Precisamente esa mezcla muestra que la literatura peninsular nació entre lenguas, alfabetos y comunidades, dentro de obras donde lo romance, lo árabe y lo hebreo se escuchaban mutuamente.",
    descriptionHtml:
      "Antes de 1042 ya circulaba al menos una <em>jarcha</em> romance al final de una <em>moaxaja</em> hebrea. Estas breves estrofas, también insertadas en composiciones árabes, suelen presentar una voz femenina que lamenta la ausencia del amado. Conservan formas del <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"cantar-mio-cid-testimonio-1207\">romance hablado</button> en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Al-Ándalus\" data-country=\"España\">al-Ándalus</button>, pero no son poemas autónomos ni pueden llamarse sin reservas “los primeros versos españoles”: su lengua y lectura siguen debatiéndose. Precisamente esa mezcla muestra que la literatura peninsular nació entre lenguas, alfabetos y comunidades, dentro de obras donde lo romance, lo árabe y lo hebreo se escuchaban mutuamente.",
    butterfly: {
      prompt: "¿Dónde sobrevivieron estas voces romances?",
      answer:
        "En el cierre de poemas cultos árabes y hebreos. Esa ubicación material impide aislarlas de las tradiciones que las preservaron y muestra un espacio literario profundamente entrelazado."
    }
  },
  {
    id: "pacto-barbastro-corona-aragon-1137",
    year: 1137,
    month: 8,
    day: 11,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1154,
    title: "11 de agosto de 1137: la base dinástica de la Corona de Aragón",
    author: "Petronila de Aragón y Ramón Berenguer IV",
    country: "España",
    region: "Barbastro",
    flag: "spain-not-latam",
    type: ICON_TYPE.ROYAL,
    types: [ICON_TYPE.ROYAL, ICON_TYPE.HISTORY],
    description:
      "El 11 de agosto de 1137, en Barbastro, Ramiro II acordó el matrimonio de su hija Petronila de Aragón con Ramón Berenguer IV, conde de Barcelona, y le confió el gobierno del reino. La boda se celebró en 1150; Ramón Berenguer gobernó como príncipe, no como rey. Cuando su hijo Alfonso II heredó ambos patrimonios en 1164, se consolidó la unión dinástica llamada Corona de Aragón. No era un Estado uniforme: Aragón y los condados catalanes conservaron leyes e instituciones propias mientras compartían soberano y una creciente proyección mediterránea.",
    descriptionHtml:
      "El 11 de agosto de 1137, en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Barbastro\" data-country=\"España\">Barbastro</button>, Ramiro II acordó el matrimonio de su hija Petronila de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Aragón\" data-country=\"España\">Aragón</button> con Ramón Berenguer IV, conde de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Barcelona\" data-country=\"España\">Barcelona</button>, y le confió el gobierno del reino. La boda se celebró en 1150; Ramón Berenguer gobernó como príncipe, no como rey. Cuando su hijo Alfonso II heredó ambos patrimonios en 1164, se consolidó la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"matrimonio-isabel-fernando-1469\">unión dinástica</button> llamada Corona de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Aragón\" data-country=\"España\">Aragón</button>. No era un Estado uniforme: <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Aragón\" data-country=\"España\">Aragón</button> y los <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Cataluña\" data-country=\"España\">condados catalanes</button> conservaron leyes e instituciones propias mientras compartían soberano y una creciente proyección mediterránea.",
    butterfly: {
      prompt: "¿Nació en 1137 un reino completamente fusionado?",
      answer:
        "No. Nació una unión dinástica; Aragón y los condados catalanes conservaron leyes, instituciones e identidades políticas propias bajo soberanos compartidos."
    }
  },
  {
    id: "decreta-cortes-leon-1188",
    year: 1188,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1175,
    title: "1188: León documenta representación urbana",
    author: "Alfonso IX y las Cortes de León",
    country: "España",
    region: "San Isidoro de León",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "En 1188, Alfonso IX reunió en San Isidoro de León una curia con nobles, clérigos y representantes de ciudades. Los acuerdos llamados Decreta comprometían al rey a consultar decisiones de guerra y paz, respetar procedimientos judiciales y proteger personas y bienes. La UNESCO los reconoce como la manifestación documental más antigua conocida del sistema parlamentario europeo con presencia urbana. No fue una democracia moderna ni otorgó igualdad universal: la sociedad seguía organizada por privilegios. Su novedad fue incorporar formalmente delegados ciudadanos al diálogo político entre corona, Iglesia y aristocracia.",
    descriptionHtml:
      "En 1188, Alfonso IX reunió en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"San Isidoro de León\" data-country=\"España\">San Isidoro de León</button> una curia con nobles, clérigos y representantes de ciudades. Los acuerdos llamados Decreta comprometían al rey a consultar decisiones de guerra y paz, respetar <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"alfonso-x-proyecto-saber-1252\">procedimientos judiciales</button> y proteger personas y bienes. La UNESCO los reconoce como la manifestación documental más antigua conocida del sistema parlamentario europeo con presencia urbana. No fue una democracia moderna ni otorgó igualdad universal: la sociedad seguía organizada por privilegios. Su novedad fue incorporar formalmente delegados ciudadanos al diálogo político entre corona, Iglesia y aristocracia.",
    butterfly: {
      prompt: "¿Por qué los Decreta son excepcionales?",
      answer:
        "Porque documentan la entrada formal de representantes urbanos en una asamblea junto al rey, el clero y la nobleza, con compromisos escritos que también limitaban decisiones regias."
    }
  },
  {
    id: "cantar-mio-cid-testimonio-1207",
    year: 1207,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1196,
    title: "1207: el testimonio textual del Cantar de mio Cid",
    author: "Anónimo; copiado por Per Abbat",
    country: "España",
    region: "Vivar del Cid",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "El colofón atribuido al copista Per Abbat fecha en 1207 el modelo textual perdido del Cantar de mio Cid. El códice conservado en Madrid es una copia del siglo XIV, y la composición y autoría continúan debatidas. El poema transforma a Rodrigo Díaz de Vivar en un héroe literario que pierde su honra, conquista Valencia y la recupera mediante lealtad, estrategia y justicia. Su castellano, fórmulas narrativas y memoria fronteriza unen oralidad y escritura. Leerlo junto al Cid de 1094 permite distinguir personaje histórico, transmisión manuscrita e imaginación épica.",
    descriptionHtml:
      "El colofón atribuido al copista Per Abbat fecha en 1207 el modelo textual perdido del <em>Cantar de mio Cid</em>. El códice conservado en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Madrid\" data-country=\"España\">Madrid</button> es una copia del siglo XIV, y la composición y autoría continúan debatidas. El poema transforma a <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Vivar del Cid\" data-country=\"España\">Rodrigo Díaz de Vivar</button> en un héroe literario que pierde su honra, conquista <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Valencia\" data-country=\"España\">Valencia</button> y la recupera mediante lealtad, estrategia y justicia. Su castellano, fórmulas narrativas y memoria fronteriza unen oralidad y escritura. Leerlo junto al <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"el-cid-valencia-1094\">Cid de 1094</button> permite distinguir personaje histórico, transmisión manuscrita e imaginación épica.",
    butterfly: {
      prompt: "¿Es 1207 la fecha indiscutible de composición?",
      answer:
        "No. Es la fecha transmitida por el colofón de un modelo perdido; la creación del poema y el códice del siglo XIV que hoy conservamos son problemas distintos."
    }
  },
  {
    id: "navas-tolosa-1212",
    year: 1212,
    month: 7,
    day: 16,
    title: "16 de julio de 1212: Las Navas de Tolosa",
    author: "Alfonso VIII, Pedro II, Sancho VII y Muhammad al-Nasir",
    country: "España",
    region: "Las Navas de Tolosa",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El 16 de julio de 1212, cerca de Santa Elena, las fuerzas de Alfonso VIII de Castilla, Pedro II de Aragón y Sancho VII de Navarra derrotaron al ejército almohade de Muhammad al-Nasir en Las Navas de Tolosa. El papa Inocencio III dio dimensión de cruzada a una campaña cuyas alianzas y motivaciones también fueron políticas. La victoria no terminó al-Ándalus: el reino nazarí sobreviviría hasta 1492. Sí debilitó el poder almohade y abrió el equilibrio peninsular a las grandes conquistas castellanas y aragonesas de las décadas siguientes.",
    descriptionHtml:
      "El 16 de julio de 1212, cerca de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Santa Elena\" data-country=\"España\">Santa Elena</button>, las fuerzas de Alfonso VIII de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button>, Pedro II de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Aragón\" data-country=\"España\">Aragón</button> y Sancho VII de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Navarra\" data-country=\"España\">Navarra</button> derrotaron al ejército almohade de Muhammad al-Nasir en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Las Navas de Tolosa\" data-country=\"España\">Las Navas de Tolosa</button>. El papa Inocencio III dio dimensión de cruzada a una campaña cuyas alianzas y motivaciones también fueron políticas. La victoria no terminó <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Al-Ándalus\" data-country=\"España\">al-Ándalus</button>: el <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"rendicion-granada-1492\">reino nazarí sobreviviría hasta 1492</button>. Sí debilitó el poder almohade y abrió el equilibrio peninsular a las <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"fernando-iii-cordoba-sevilla-1236\">grandes conquistas castellanas y aragonesas</button> de las décadas siguientes.",
    butterfly: {
      prompt: "¿Terminó al-Ándalus en Las Navas?",
      answer:
        "No. La derrota debilitó al poder almohade y facilitó conquistas posteriores, pero el reino nazarí de Granada sobrevivió casi tres siglos, hasta 1492."
    }
  },
  {
    id: "universidad-salamanca-1218",
    year: 1218,
    title: "1218–1255: nace la Universidad de Salamanca",
    author: "Alfonso IX, Alfonso X y Alejandro IV",
    country: "España",
    region: "Universidad de Salamanca",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.LITERATURE],
    description:
      "Hacia 1218, Alfonso IX de León creó en Salamanca un Estudio General, antecedente directo de la universidad actual. Su desarrollo fue gradual: Fernando III confirmó privilegios en 1243, Alfonso X reguló cátedras y salarios en 1254, y el papa Alejandro IV reconoció en 1255 la validez universal de sus grados. La institución formó clérigos, juristas y administradores, pero se convirtió también en centro de lenguas, derecho, ciencia y debate político. Allí enseñaría Nebrija antes de publicar su Gramática de 1492. Corona e Iglesia construyeron esta infraestructura, luego ampliada por universidades como la de Sevilla.",
    descriptionHtml:
      "Hacia 1218, Alfonso IX de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"León\" data-country=\"España\">León</button> creó en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Universidad de Salamanca\" data-country=\"España\">Salamanca</button> un Estudio General, antecedente directo de la universidad actual. Su desarrollo fue gradual: Fernando III confirmó privilegios en 1243, <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"alfonso-x-proyecto-saber-1252\">Alfonso X</button> reguló cátedras y salarios en 1254, y el papa Alejandro IV reconoció en 1255 la validez universal de sus grados. La institución formó clérigos, juristas y administradores, pero se convirtió también en centro de lenguas, derecho, ciencia y debate político. Allí enseñaría <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"gramatica-castellana-nebrija-1492\">Nebrija antes de publicar su Gramática de 1492</button>. Corona e Iglesia construyeron <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"colegio-santa-maria-jesus-universidad-sevilla-1502\">esta infraestructura</button>, luego ampliada por universidades como la de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sevilla\" data-country=\"España\">Sevilla</button>.",
    butterfly: {
      prompt: "¿Nació Salamanca mediante un único acto fundacional?",
      answer:
        "No. 1218, 1254 y 1255 representan etapas diferentes: creación del Estudio, organización y financiación regias, y reconocimiento universal de sus grados por el papado."
    }
  },
  {
    id: "fernando-iii-cordoba-sevilla-1236",
    year: 1236,
    month: 6,
    day: 29,
    endYear: 1248,
    title: "1236–1248: Fernando III toma Córdoba y Sevilla",
    author: "Fernando III de Castilla y León",
    country: "España",
    region: "Córdoba",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "Tras el giro militar de 1212, Fernando III tomó Córdoba en 1236 y Sevilla en 1248, desplazando el poder castellano hacia el valle del Guadalquivir. Las mezquitas mayores fueron consagradas como catedrales y los repartimientos distribuyeron casas y tierras entre conquistadores, órdenes e instituciones eclesiásticas. Muchos habitantes musulmanes fueron expulsados o emigraron, aunque persistieron comunidades mudéjares. No fue un simple cambio de bandera: transformó población, propiedad, culto y gobierno; incorporó al dominio cristiano monumentos como la Mezquita de Córdoba y la Giralda, y dejó Granada como último reino islámico peninsular.",
    descriptionHtml:
      "Tras el <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"navas-tolosa-1212\">giro militar de 1212</button>, Fernando III tomó <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Córdoba\" data-country=\"España\">Córdoba</button> en 1236 y <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sevilla\" data-country=\"España\">Sevilla</button> en 1248, desplazando el poder castellano hacia el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Valle del Guadalquivir\" data-country=\"España\">valle del Guadalquivir</button>. Las mezquitas mayores fueron consagradas como catedrales y los repartimientos distribuyeron casas y tierras entre conquistadores, órdenes e instituciones eclesiásticas. Muchos habitantes musulmanes fueron expulsados o emigraron, aunque persistieron comunidades mudéjares. No fue un simple cambio de bandera: transformó población, propiedad, culto y gobierno; incorporó al dominio cristiano monumentos como la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Mezquita de Córdoba\" data-country=\"España\">Mezquita de Córdoba</button> y la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"La Giralda\" data-country=\"España\">Giralda</button>, y dejó <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Granada\" data-country=\"España\">Granada</button> como <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"rendicion-granada-1492\">último reino islámico peninsular</button>.",
    butterfly: {
      prompt: "¿Qué cambió además del soberano?",
      answer:
        "Cambió la propiedad, la composición de la población, el uso de mezquitas y barrios, y las instituciones que gobernaban las ciudades. La conquista reorganizó la vida cotidiana."
    }
  },
  {
    id: "alfonso-x-proyecto-saber-1252",
    year: 1252,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1271,
    endYear: 1284,
    title: "1252–1284: Alfonso X convierte el saber en proyecto real",
    author: "Alfonso X y sus colaboradores",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.LITERATURE, ICON_TYPE.ROYAL],
    description:
      "Durante el reinado de Alfonso X (1252–1284), la corte convirtió el saber en proyecto político. En Toledo y otros centros, colaboradores cristianos, judíos y musulmanes tradujeron y adaptaron obras árabes sobre astronomía, medicina y filosofía; “Escuela de Traductores” es una etiqueta moderna para redes anteriores y dispersas. Las Siete Partidas buscaron ordenar el derecho; la Estoria de España y la General estoria narraron pasado y mundo en castellano. Las Cantigas de Santa María, en galaicoportugués, unieron devoción, música e imagen. Su legado revela cooperación intelectual dentro de una monarquía jerárquica y conflictiva.",
    descriptionHtml:
      "Durante el reinado de Alfonso X (1252–1284), la corte convirtió el saber en proyecto político. En <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Toledo\" data-country=\"España\">Toledo</button> y otros centros, colaboradores cristianos, judíos y musulmanes tradujeron y adaptaron obras árabes sobre astronomía, medicina y filosofía; “Escuela de Traductores” es una etiqueta moderna para redes anteriores y dispersas. Las <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"liber-iudiciorum-654\"><em>Siete Partidas</em></button> buscaron ordenar el derecho; la <em>Estoria de España</em> y la <em>General estoria</em> narraron pasado y mundo en castellano. Las <em>Cantigas de Santa María</em>, en galaicoportugués, unieron devoción, música e imagen. Su legado revela cooperación intelectual dentro de una monarquía jerárquica y conflictiva.",
    butterfly: {
      prompt: "¿Existió una “Escuela de Traductores” como institución moderna?",
      answer:
        "No exactamente. El nombre reúne redes, talleres y prácticas de traducción desarrolladas en distintos momentos. Alfonso X las coordinó dentro de un proyecto regio más amplio."
    }
  },
  {
    id: "mesta-trashumancia-1273",
    year: 1273,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1292,
    title: "1273: la Mesta organiza el paisaje de la lana",
    author: "Alfonso X y el Honrado Concejo de la Mesta",
    country: "España",
    region: "Castilla",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "En 1273, Alfonso X reconoció el Honrado Concejo de la Mesta, que articuló a propietarios de rebaños trashumantes. La Corona protegió sus rutas, las cañadas, y concedió privilegios para mover ovejas entre pastos estacionales de Castilla, León y Extremadura. La lana merina alimentó mercados urbanos y exportaciones; los impuestos ganaderos reforzaron la hacienda real. Ese éxito creó conflictos duraderos: agricultores, concejos y pastores disputaron tierras, agua y jurisdicción. La Mesta revela una Edad Media hecha también de trabajo, paisaje, animales y fiscalidad, no solo de batallas, reyes y religiones.",
    descriptionHtml:
      "En 1273, <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"alfonso-x-proyecto-saber-1252\">Alfonso X</button> reconoció el <em>Honrado Concejo de la Mesta</em>, que articuló a propietarios de rebaños trashumantes. La Corona protegió sus rutas, las cañadas, y concedió privilegios para mover ovejas entre pastos estacionales de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"León\" data-country=\"España\">León</button> y <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Extremadura\" data-country=\"España\">Extremadura</button>. La lana merina alimentó mercados urbanos y exportaciones; los impuestos ganaderos reforzaron la hacienda real. Ese éxito creó conflictos duraderos: agricultores, concejos y pastores disputaron tierras, agua y jurisdicción. La Mesta revela una Edad Media hecha también de trabajo, paisaje, animales y fiscalidad, no solo de batallas, reyes y religiones.",
    butterfly: {
      prompt: "¿Qué conectaban las cañadas?",
      answer:
        "Unían pastos estacionales, economías regionales y rutas de trashumancia protegidas por la Corona; también atravesaban campos y jurisdicciones que generaron conflictos continuos."
    }
  },
  {
    id: "conde-lucanor-1335",
    year: 1335,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1313.59,
    title: "1335: El conde Lucanor convierte el consejo en relato",
    author: "Don Juan Manuel",
    country: "España",
    region: "Peñafiel",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "Entre 1330 y 1335, don Juan Manuel, señor de Villena vinculado a Murcia y Peñafiel, compuso El conde Lucanor, colección de relatos ejemplares en castellano. El conde plantea un problema a Patronio; el consejero responde con una historia, aplica la lección y el autor la condensa en versos finales. Los cuentos reelaboran materiales clásicos, cristianos, árabes y orientales que circulaban por la península. Sobrino de Alfonso X y poderoso noble, don Juan Manuel cuidó de manera inusual su autoría y estilo. La obra convirtió saber compartido en una cumbre temprana de la prosa castellana.",
    descriptionHtml:
      "Entre 1330 y 1335, don Juan Manuel, señor de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Villena\" data-country=\"España\">Villena</button> vinculado a <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Murcia\" data-country=\"España\">Murcia</button> y <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Peñafiel\" data-country=\"España\">Peñafiel</button>, compuso <em>El conde Lucanor</em>, colección de <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"libro-buen-amor-1330\">relatos ejemplares</button> en castellano. El conde plantea un problema a Patronio; el consejero responde con una historia, aplica la lección y el autor la condensa en versos finales. Los cuentos reelaboran materiales clásicos, cristianos, árabes y orientales que circulaban por la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Península ibérica\" data-country=\"España\">península</button>. Sobrino de <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"alfonso-x-proyecto-saber-1252\">Alfonso X</button> y poderoso noble, don Juan Manuel cuidó de manera inusual su autoría y estilo. La obra convirtió saber compartido en una cumbre temprana de la prosa castellana.",
    butterfly: {
      prompt: "¿Cómo construye Patronio cada enseñanza?",
      answer:
        "Responde al dilema del conde con un cuento, extrae una aplicación práctica y la obra cierra el ejemplo con una moraleja condensada en versos."
    }
  },
  {
    id: "sinagoga-samuel-halevi-1361",
    year: 1361,
    // Visual spacing only; the card and detail panel retain the real range.
    trackYear: 1345.46,
    title: "1356–1362: Samuel ha-Leví levanta una sinagoga en Toledo",
    author: "Samuel ha-Leví y la comunidad judía de Toledo",
    country: "España",
    region: "Sinagoga del Tránsito, Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Entre 1356 y 1362, Samuel ha-Leví, oidor, diplomático y tesorero de Pedro I de Castilla, mandó levantar una gran sinagoga en la judería de Toledo. Su sala de oración combina arquitectura mudéjar con inscripciones hebreas y árabes: las palabras labradas construyen un mensaje religioso y político. El edificio muestra una cultura visual compartida entre comunidades sin borrar las desigualdades de la época. Sobrevivió a la violencia de 1391; tras la expulsión de 1492, su culto, propiedad y funciones cambiarían radicalmente. Hoy conserva un testimonio excepcional de la historia hispanojudía medieval.",
    descriptionHtml:
      "Entre 1356 y 1362, Samuel ha-Leví, oidor, diplomático y tesorero de Pedro I de Castilla, mandó levantar una gran sinagoga en la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Judería de Toledo\" data-country=\"España\">judería de Toledo</button>. Su sala de oración combina arquitectura mudéjar con inscripciones hebreas y árabes: las palabras labradas construyen un mensaje religioso y político. El edificio muestra una cultura visual compartida entre comunidades sin borrar las desigualdades de la época. Sobrevivió a la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"ataques-aljamas-1391\">violencia de 1391</button>; tras la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"expulsion-judios-1492\">expulsión de 1492</button>, su culto, propiedad y funciones <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"sinagoga-transito-priorato-1494\">cambiarían radicalmente</button>. Hoy conserva un testimonio excepcional de la historia hispanojudía medieval.",
    butterfly: {
      prompt: "¿Qué cuentan juntas las inscripciones hebreas y árabes?",
      answer:
        "Que lenguas, talleres y formas artísticas cruzaban fronteras religiosas, incluso dentro de una sociedad jerárquica donde convivencia y desigualdad coexistían."
    }
  },
  {
    id: "ataques-aljamas-1391",
    year: 1391,
    title: "junio de 1391: los ataques destruyen las aljamas",
    author: "Comunidades judías de la península",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.ECHO,
    types: [ICON_TYPE.ECHO, ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "En junio de 1391, la violencia antijudía estalló en Sevilla tras años de predicación incendiaria, tensión social y debilitamiento de la autoridad. Los ataques alcanzaron Córdoba, Toledo, Valencia, Barcelona, Palma y otras aljamas. Hubo asesinatos, saqueos, destrucción de sinagogas, huidas y bautismos forzados; las cifras exactas siguen siendo inciertas. Las conversiones masivas ampliaron la población conversa sin terminar la persecución: alimentaron sospechas, la Inquisición de 1478 y las fracturas que desembocaron en la expulsión de 1492. Este Eco brutal fue una ruptura peninsular, no un disturbio local.",
    descriptionHtml:
      "En junio de 1391, la violencia antijudía estalló en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sevilla\" data-country=\"España\">Sevilla</button> tras años de predicación incendiaria, tensión social y debilitamiento de la autoridad. Los ataques alcanzaron <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Córdoba\" data-country=\"España\">Córdoba</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Toledo\" data-country=\"España\">Toledo</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Valencia\" data-country=\"España\">Valencia</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Barcelona\" data-country=\"España\">Barcelona</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Palma\" data-country=\"España\">Palma</button> y otras aljamas. Hubo asesinatos, saqueos, <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"sinagoga-samuel-halevi-1361\">destrucción de sinagogas</button>, huidas y bautismos forzados; las cifras exactas siguen siendo inciertas. Las conversiones masivas ampliaron la población conversa sin terminar la persecución: alimentaron sospechas, la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"inquisicion-espanola-1478\">Inquisición de 1478</button> y las fracturas que desembocaron en la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"expulsion-judios-1492\">expulsión de 1492</button>. Este <strong>Eco brutal</strong> fue una ruptura peninsular, no un disturbio local.",
    butterfly: {
      prompt: "¿Por qué 1391 se conecta con 1478 y 1492?",
      answer:
        "Los bautismos forzados ampliaron la población conversa sin eliminar el prejuicio. Después surgieron nuevas formas de vigilancia, sospecha institucional y expulsión: el Eco brutal cambió de mecanismo."
    }
  },
  {
    id: "rendicion-granada-1492",
    year: 1492,
    month: 1,
    day: 2,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1492.1,
    title: "2 de enero de 1492: la entrega de Granada",
    author: "Muhammad XII, Isabel I y Fernando II",
    country: "España",
    region: "Alhambra",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "El 2 de enero de 1492, Muhammad XII, Boabdil, entregó Granada a Isabel de Castilla y Fernando de Aragón conforme a capitulaciones pactadas el 25 de noviembre anterior. Terminaban la guerra iniciada en 1482 y el último reino islámico independiente de la península. Los acuerdos prometían proteger religión, propiedad, lengua y costumbres musulmanas, pero la política posterior erosionó esas garantías: desde 1499 crecieron la coerción, la rebelión y las conversiones obligatorias. La toma de la Alhambra cerró una dinastía, no una presencia humana; comenzó la historia mudéjar y morisca bajo dominio cristiano.",
    descriptionHtml:
      "El 2 de enero de 1492, Muhammad XII, Boabdil, entregó <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Granada\" data-country=\"España\">Granada</button> a Isabel de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button> y Fernando de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Aragón\" data-country=\"España\">Aragón</button> conforme a capitulaciones pactadas el 25 de noviembre anterior. Terminaban la guerra iniciada en 1482 y el último reino islámico independiente de la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Península ibérica\" data-country=\"España\">península</button>. Los acuerdos prometían proteger religión, propiedad, lengua y costumbres musulmanas, pero la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"alpujarras-expulsion-moriscos-1568\">política posterior</button> erosionó esas garantías: desde 1499 crecieron la coerción, la rebelión y las conversiones obligatorias. La toma de la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Alhambra\" data-country=\"España\">Alhambra</button> cerró una dinastía, no una presencia humana; comenzó la historia mudéjar y morisca bajo dominio cristiano.",
    butterfly: {
      prompt: "¿Garantizaron las capitulaciones una tolerancia duradera?",
      answer:
        "No. Las promesas iniciales fueron erosionadas por medidas coercitivas, rebeliones y conversiones obligatorias. La entrega cerró un reino, pero no borró a su población."
    }
  },

  // ---- COLONIAL ----
  {
    id: "cuatro-viajes-colon-1492",
    year: 1492,
    month: 10,
    day: 12,
    trackYear: 1492.1,
    endYear: 1506,
    title: "Los cuatro viajes del almirante y su testamento",
    author: "Cristóbal Colón",
    country: "Bahamas",
    region: "Guanahaní · Long Bay (sitio tradicional)",
    type: ICON_TYPE.LITERATURE,
    description:
      "Las cartas, diarios de a bordo y el testamento de Cristóbal Colón documentan sus cuatro travesías atlánticas entre 1492 y 1504; el diario original se perdió y se conoce principalmente por el resumen de Bartolomé de las Casas. El relato vincula la empresa a la rendición de Granada y muestra la mirada interesada del almirante. El 12 de octubre de 1492 desembarcó en Guanahaní, isla lucaya tradicionalmente identificada con San Salvador, Bahamas. El punto rojo señala Long Bay, sitio conmemorativo oficial; la identificación de Guanahaní sigue debatida. Sus textos registran encuentro, apropiación y negociación imperial.",
    descriptionHtml:
      'Las cartas, diarios de a bordo y el testamento de Cristóbal Colón documentan sus cuatro travesías atlánticas entre 1492 y 1504; el diario original se perdió y se conoce principalmente por el resumen de Bartolomé de las Casas. El relato vincula la empresa a la <button type="button" class="timeline-detail-entrylink" data-id="rendicion-granada-1492">rendición de Granada</button> y muestra la mirada interesada del almirante. El 12 de octubre de 1492 desembarcó en <button type="button" class="timeline-detail-geolink" data-region="Guanahaní · Long Bay (sitio tradicional)" data-country="Bahamas">Guanahaní, isla lucaya tradicionalmente identificada con San Salvador, Bahamas</button>. El punto rojo señala <button type="button" class="timeline-detail-geolink" data-region="Guanahaní · Long Bay (sitio tradicional)" data-country="Bahamas">Long Bay</button>, sitio conmemorativo oficial; la identificación de Guanahaní sigue debatida. Sus textos registran encuentro, apropiación y negociación imperial.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si los Reyes Católicos hubieran rechazado la propuesta de Colón, como antes lo hizo Portugal?",
      answer:
        "Otro marino, bajo otra bandera, habría tocado tierra americana en años o décadas —el hemisferio no podía permanecer aislado para siempre. Pero el idioma, la religión y las instituciones que llegaron primero habrían sido distintas, y el mapa lingüístico de América tal como lo conocemos no existiría."
    }
  },
  {
    id: "gramatica-castellana-nebrija-1492",
    year: 1492,
    month: 8,
    trackYear: 1492.1,
    title: "Gramática de la lengua castellana",
    author: "Antonio de Nebrija",
    country: "España",
    region: "Salamanca",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "En agosto de 1492, Antonio de Nebrija publicó en Salamanca la primera gramática impresa de una lengua romance. Organizó el castellano en ortografía, prosodia, etimología, sintaxis y enseñanza para extranjeros: un gesto humanista que trasladaba al habla viva métodos antes reservados al latín. Dedicó la obra a Isabel de Castilla y afirmó que la lengua era “compañera del imperio”. Ese mismo año cayeron Granada, se expulsó a los judíos y Colón cruzó el Atlántico. La frase no predijo América, pero permite observar cómo conocimiento, poder y expansión terminaron enlazados en una misma historia atlántica compartida.",
    descriptionHtml:
      "En agosto de 1492, Antonio de Nebrija publicó en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Salamanca\" data-country=\"España\">Salamanca</button> la primera gramática impresa de una lengua romance. Organizó el castellano en ortografía, prosodia, etimología, sintaxis y enseñanza para extranjeros: un gesto humanista que trasladaba al habla viva métodos antes reservados al latín. Dedicó la obra a <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"matrimonio-isabel-fernando-1469\">Isabel</button> de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button> y afirmó que la lengua era “compañera del imperio”. Ese mismo año <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"rendicion-granada-1492\">cayeron</button> <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Granada\" data-country=\"España\">Granada</button>, <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"expulsion-judios-1492\">se expulsó a los judíos</button> y <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"cuatro-viajes-colon-1492\">Colón</button> cruzó el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Atlántico\">Atlántico</button>. La frase no predijo <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"América española\">América</button>, pero permite observar cómo conocimiento, poder y expansión terminaron enlazados en una misma historia atlántica compartida.",
    butterfly: {
      prompt: "¿Creó un solo libro la unidad del español?",
      answer:
        "No. La gramática ofreció una herramienta y un símbolo, pero la historia del español también dependió de imprentas, escuelas, administración, evangelización, migraciones y el contacto con muchas lenguas. Su importancia está en haber convertido una lengua viva en objeto sistemático de estudio justo cuando la monarquía comenzaba a expandirse."
    }
  },

  {
    id: "expulsion-judios-1492",
    year: 1492,
    month: 3,
    trackYear: 1492.1,
    title: "1492: el Decreto de la Alhambra expulsa a los judíos de España",
    author: "Hito histórico",
    country: "España",
    region: "Granada",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "El 31 de marzo de 1492, los Reyes Católicos Fernando de Aragón e Isabel de Castilla firman en la Alhambra de Granada el Decreto de la Alhambra —también llamado Edicto de Granada—, que ordena la expulsión de todos los judíos que no se convirtieran al cristianismo. El decreto les da hasta el 31 de julio para abandonar sus reinos; los últimos en salir lo hacen el 2 de agosto, coincidiendo con el ayuno judío de Tisha B'Av, que conmemora la destrucción de los dos Templos de Jerusalén. Las cifras varían mucho según la fuente —los cálculos tradicionales hablan de hasta 300.000 personas—, pero la investigación histórica moderna sitúa el número de judíos realmente expulsados, los que no se convirtieron, entre 40.000 y 100.000. Muchos cruzan primero a Portugal, donde apenas cinco años después la corona portuguesa también los expulsaría o forzaría a convertirse; otros se instalan en el norte de África o, sobre todo, en el Imperio otomano, cuyo sultán Bayaceto II habría comentado que Fernando de Aragón 'empobrecía su propio reino para enriquecer el mío'. De esa diáspora nace el mundo sefardí, una comunidad que conservaría durante siglos el ladino —una forma arcaica del español— y la memoria de un país que los expulsó. El decreto permanecería vigente, al menos de forma simbólica, hasta que fue revocado formalmente el 16 de diciembre de 1968. Un día después de que se cerrara el plazo final para salir, el 3 de agosto de 1492, Cristóbal Colón zarpó de Palos de la Frontera rumbo a las Indias —según algunos historiadores, retrasando su partida un día para no navegar durante el ayuno judío—.",
    descriptionHtml:
      'El 31 de marzo de 1492, los Reyes Católicos Fernando de Aragón e Isabel de Castilla firman en la <button type="button" class="timeline-detail-geolink" data-region="Alhambra" data-country="España">Alhambra</button> de Granada el Decreto de la Alhambra —también llamado Edicto de Granada—, que ordena la expulsión de todos los judíos que no se convirtieran al cristianismo. El decreto les da hasta el 31 de julio para abandonar sus reinos; los últimos en salir lo hacen el 2 de agosto, coincidiendo con el ayuno judío de Tisha B\'Av, que conmemora la destrucción de los dos Templos de Jerusalén. Las cifras varían mucho según la fuente —los cálculos tradicionales hablan de hasta 300.000 personas—, pero la investigación histórica moderna sitúa el número de judíos realmente expulsados, los que no se convirtieron, entre 40.000 y 100.000. Muchos cruzan primero a <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button>, donde apenas cinco años después la corona portuguesa también los expulsaría o forzaría a convertirse; otros se instalan en el norte de África o, sobre todo, en el Imperio otomano, cuyo sultán Bayaceto II habría comentado que Fernando de Aragón \'empobrecía su propio reino para enriquecer el mío\'. De esa diáspora nace el <button type="button" class="timeline-detail-entrylink" data-id="museo-sefardi-toledo-1964">mundo sefardí</button>, una comunidad que conservaría durante siglos el ladino —una forma arcaica del español— y la memoria de un país que los expulsó. El decreto permanecería vigente, al menos de forma simbólica, hasta que fue revocado formalmente el 16 de diciembre de 1968. Un día después de que se cerrara el plazo final para salir, el 3 de agosto de 1492, <button type="button" class="timeline-detail-entrylink" data-id="cuatro-viajes-colon-1492">Cristóbal Colón</button> zarpó de Palos de la Frontera rumbo a las Indias —según algunos historiadores, retrasando su partida un día para no navegar durante el ayuno judío—.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si los Reyes Católicos nunca hubieran firmado el Decreto de la Alhambra?",
      answer:
        "España habría conservado a una de sus comunidades más antiguas e integradas, con siglos de aportes intelectuales, médicos y comerciales. En cambio, la diáspora sefardí llevó consigo a Portugal, el norte de África y el Imperio otomano una memoria de España —y un español arcaico, el ladino— que sobrevivió durante más de cinco siglos a la corona que la expulsó. Y sin ese éxodo, la posible ascendencia sefardí de figuras como João Faras, huido hacia Portugal apenas unos años después, quedaría sin explicación."
    }
  },
  {
    id: "sinagoga-transito-priorato-1494",
    year: 1494,
    title: "1492–1494: de sinagoga al Priorato de San Benito",
    author: "Reyes Católicos y Orden de Calatrava",
    country: "España",
    region: "Sinagoga del Tránsito, Toledo",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.ECHO,
    types: [ICON_TYPE.ECHO, ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "Después de ordenar la expulsión en 1492, los Reyes Católicos cedieron la Sinagoga de Samuel ha-Leví a la Orden de Calatrava. En 1494 el edificio quedó integrado en el Priorato de San Benito: la sala de oración se convirtió en iglesia y lugar de enterramiento; la escuela rabínica y la galería de mujeres pasaron a hospital y asilo de caballeros. El cambio preservó elementos arquitectónicos, pero desplazó culto, comunidad y significado. Este Eco brutal permite seguir la expulsión en un lugar concreto: no solo salieron personas; también sus espacios fueron apropiados, renombrados y reorganizados.",
    descriptionHtml:
      "Después de ordenar la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"expulsion-judios-1492\">expulsión en 1492</button>, los Reyes Católicos cedieron la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"sinagoga-samuel-halevi-1361\">Sinagoga de Samuel ha-Leví</button> a la Orden de Calatrava. En 1494 el edificio quedó integrado en el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sinagoga del Tránsito, Toledo\" data-country=\"España\">Priorato de San Benito</button>: la sala de oración se convirtió en iglesia y lugar de enterramiento; la escuela rabínica y la galería de mujeres pasaron a hospital y asilo de caballeros. El cambio preservó elementos arquitectónicos, pero desplazó culto, comunidad y significado. Este <strong>Eco brutal</strong> permite seguir la expulsión en un lugar concreto: no solo salieron personas; también sus espacios fueron apropiados, renombrados y reorganizados.",
    butterfly: {
      prompt: "¿Qué revela la transformación de la sinagoga en priorato?",
      answer:
        "Que la expulsión no desplazó únicamente personas: también transfirió propiedad, reorganizó el culto y reescribió la memoria pública de sus espacios."
    }
  },
  {
    id: "muerte-lorenzo-medici-1492",
    year: 1492,
    month: 4,
    trackYear: 1492.1,
    title: "1492: muere Lorenzo de Médici, ‘el Magnífico’",
    author: "Lorenzo de Médici",
    country: "Italia",
    region: "Florencia",
    type: ICON_TYPE.HISTORY,
    description:
      "El 9 de abril de 1492 murió en Florencia Lorenzo de Médici, gobernante y mecenas renacentista florentino. Su hijo Piero heredó la dirección familiar, pero la perdió en 1494 tras capitular ante Carlos VIII de Francia. Otro hijo, Giovanni, se convirtió en el papa León X en 1513; durante su pontificado, Martín Lutero hizo públicas en Wittenberg sus noventa y cinco tesis y comenzó la ruptura protestante. La experiencia política florentina, junto con el ascenso y caída de César Borgia, alimentó la reflexión de Nicolás Maquiavelo en El Príncipe sobre cómo conquistar y conservar poder.",
    descriptionHtml:
      "El 9 de abril de 1492 murió en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Florencia\" data-country=\"Italia\">Florencia</button> Lorenzo de Médici, gobernante y mecenas renacentista florentino. Su hijo Piero heredó la dirección familiar, pero la perdió en 1494 tras capitular ante Carlos VIII de <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Francia\">Francia</button>. Otro hijo, Giovanni, se convirtió en el papa León X en 1513; durante su pontificado, Martín Lutero hizo públicas en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Wittenberg\" data-country=\"Alemania\">Wittenberg</button> sus noventa y cinco tesis y <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"reforma-jesuitas-trento-1517\">comenzó la ruptura protestante</button>. La experiencia política florentina, junto con el ascenso y caída de César Borgia, alimentó la reflexión de Nicolás Maquiavelo en <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"maquiavelo-principe-1513\">El Príncipe</button> sobre cómo conquistar y conservar poder.",
    butterfly: {
      prompt: "¿Por qué la caída política de los Médici importa para El Príncipe?",
      answer:
        "Maquiavelo observó una ciudad donde alianzas, invasiones y fortunas familiares cambiaban con rapidez. La pérdida del poder por Piero y las campañas de César Borgia le ofrecieron casos concretos para pensar cómo se conquista, conserva y pierde un Estado, más allá de los ideales morales tradicionales."
    }
  },

  {
    id: "atentado-fernando-aragon-1492",
    year: 1492,
    month: 12,
    trackYear: 1492.1,
    title: "1492: atentado contra el rey Fernando de Aragón en Barcelona",
    author: "Hito histórico",
    country: "España",
    region: "Barcelona",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "El 7 de diciembre de 1492, mientras el rey Fernando de Aragón bajaba las escalinatas de mármol del Palacio de Justicia de Barcelona, un hombre se abalanzó sobre él por la espalda y le asestó un tajo de espada en el cuello y el hombro. Solo la pesada cadena de oro que llevaba al cuello como símbolo de su cargo real le impidió ser decapitado; aun así, quedó gravemente herido, cayó sobre los escalones en un charco de su propia sangre y, según los cronistas de la época, gritó: '¡Socorro, Santa María! ¡Traición! ¡Traición!'. El agresor, un campesino catalán llamado Juan de Cañamás, fue capturado de inmediato, torturado, ahorcado y después quemado en la hoguera. Fernando sobrevivió y se recuperó por completo en los meses siguientes, pero el atentado ocurrió apenas cuatro meses después de que él mismo, junto a la reina Isabel de Castilla, hubiera aprobado y financiado el primer viaje de Cristóbal Colón hacia las Indias: de haber muerto ese día en Barcelona, la empresa americana recién iniciada habría quedado, desde su primer año, sin uno de los dos monarcas que la hicieron posible.",
    descriptionHtml:
      'El 7 de diciembre de 1492, mientras el rey Fernando de Aragón bajaba las escalinatas de mármol del Palacio de Justicia de <button type="button" class="timeline-detail-geolink" data-region="Barcelona" data-country="España">Barcelona</button>, un hombre se abalanzó sobre él por la espalda y le asestó un tajo de espada en el cuello y el hombro. Solo la pesada cadena de oro que llevaba al cuello como símbolo de su cargo real le impidió ser decapitado; aun así, quedó gravemente herido, cayó sobre los escalones en un charco de su propia sangre y, según los cronistas de la época, gritó: \'¡Socorro, Santa María! ¡Traición! ¡Traición!\'. El agresor, un campesino catalán llamado Juan de Cañamás, fue capturado de inmediato, torturado, ahorcado y después quemado en la hoguera. Fernando sobrevivió y se recuperó por completo en los meses siguientes, pero el atentado ocurrió apenas cuatro meses después de que él mismo, junto a la reina Isabel de Castilla, hubiera aprobado y financiado el <button type="button" class="timeline-detail-entrylink" data-id="cuatro-viajes-colon-1492">primer viaje de Cristóbal Colón</button> hacia las Indias: de haber muerto ese día en Barcelona, la empresa americana recién iniciada habría quedado, desde su primer año, sin uno de los dos monarcas que la hicieron posible.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Juan de Cañamás hubiera logrado matar al rey Fernando en 1492?",
      answer:
        "La Corona de Aragón habría entrado en una crisis sucesoria apenas meses después de la unión efectiva con Castilla y del primer viaje de Colón, con Isabel gobernando sola un proyecto americano que todavía dependía del respaldo político y financiero de ambos reinos. Es imposible saber si la empresa de Indias habría sobrevivido intacta a la muerte repentina de uno de sus dos patrocinadores originales en su primer año de existencia."
    }
  },
  {
    id: "tordesillas-1494",
    year: 1494,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the pre-existing, tightly packed 1492-1592
    // chain (regular ~4.5-4.9 track-year gaps, re-solved repeatedly as
    // afonso-i-kongo-nzinga-mbemba-1509 and hatuey-cuba-1512 were added —
    // see their own trackYear comments). Inserted right after the
    // 1492 cluster and re-spaced the whole chain through
    // monja-alferez-erauso-1592 (itself left untouched as the fixed
    // right anchor) to fit this entry too.
    trackYear: 1496.59,
    title: "1494: el Tratado de Tordesillas divide el mundo",
    author: "Hito histórico",
    country: "España",
    region: "Tordesillas",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "Cuando Cristóbal Colón regresa en 1493 de su primer viaje y reclama nuevas tierras caribeñas para la Corona de Castilla, Portugal se alarma: lleva décadas explorando África y el Atlántico bajo patrocinio real, y considera que bulas papales anteriores ya protegían su propia esfera de influencia. El rey João II argumenta que los nuevos descubrimientos de Colón podrían caer dentro de esa esfera portuguesa — y con España y Portugal como las dos potencias marítimas dominantes de Europa, la disputa amenaza con escalar a una guerra abierta. El papa Alejandro VI (el valenciano Rodrigo Borja), elegido apenas en 1492, media entre ambas coronas: en 1493 emite una serie de bulas, entre ellas Inter Caetera, trazando una línea de demarcación en el Atlántico —las tierras al oeste corresponderían a España, las del este a Portugal—, apoyado en la creencia medieval de que el papado tenía autoridad para arbitrar entre monarcas cristianos sobre territorios no cristianos recién descubiertos. Portugal considera la línea papal demasiado favorable a España, y João II negocia directamente con los Reyes Católicos una revisión. El 7 de junio de 1494, Castilla y Portugal firman en la villa de Tordesillas el tratado que mueve la línea trescientas setenta leguas al oeste de las islas de Cabo Verde: España recibe derechos sobre las tierras al occidente de esa línea, Portugal sobre las del oriente — sin que ninguna de las dos coronas supiera realmente qué había del otro lado del horizonte. La consecuencia más duradera del tratado tardaría solo seis años en manifestarse: en 1500, cuando la expedición portuguesa de Pedro Álvares Cabral toca la costa de lo que hoy es Brasil, esa franja oriental de Sudamérica cae del lado portugués de la línea, y Portugal la reclama — la razón concreta por la que Brasil habla portugués mientras el resto de Hispanoamérica habla español. El propio tratado original todavía existe: la ratificación castellana se conserva en el Archivo General de Indias de Sevilla, y la portuguesa en el Arquivo Nacional da Torre do Tombo de Lisboa; desde 2007, la UNESCO inscribe ambos documentos conjuntamente en su Registro Memoria del Mundo. Ninguna de las dos coronas, por supuesto, consultó jamás a los millones de personas indígenas que ya habitaban esas tierras: los historiadores modernos consideran Tordesillas uno de los primeros y más flagrantes ejemplos de un reparto imperial del mundo trazado a puro pulso de línea recta sobre un mapa.",
    descriptionHtml:
      'Cuando <button type="button" class="timeline-detail-entrylink" data-id="cuatro-viajes-colon-1492">Cristóbal Colón</button> regresa en 1493 de su primer viaje y reclama nuevas tierras caribeñas para la Corona de Castilla, Portugal se alarma: lleva décadas explorando África y el Atlántico bajo patrocinio real, y considera que bulas papales anteriores ya protegían su propia esfera de influencia. El rey João II argumenta que los nuevos descubrimientos de Colón podrían caer dentro de esa esfera portuguesa — y con <button type="button" class="timeline-detail-geolink" data-country="España">España</button> y <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button> como las dos potencias marítimas dominantes de Europa, la disputa amenaza con escalar a una guerra abierta. El papa Alejandro VI (el valenciano Rodrigo Borja), elegido apenas en 1492, media entre ambas coronas: en 1493 emite una serie de bulas, entre ellas Inter Caetera, trazando una línea de demarcación en el Atlántico —las tierras al oeste corresponderían a España, las del este a Portugal—, apoyado en la creencia medieval de que el papado tenía autoridad para arbitrar entre monarcas cristianos sobre territorios no cristianos recién descubiertos. Portugal considera la línea papal demasiado favorable a España, y João II negocia directamente con los Reyes Católicos una revisión. El 7 de junio de 1494, Castilla y Portugal firman en la villa de <button type="button" class="timeline-detail-geolink" data-region="Tordesillas" data-country="España">Tordesillas</button> el tratado que mueve la línea trescientas setenta leguas al oeste de las islas de <button type="button" class="timeline-detail-geolink" data-country="Cabo Verde">Cabo Verde</button>: España recibe derechos sobre las tierras al occidente de esa línea, Portugal sobre las del oriente — sin que ninguna de las dos coronas supiera realmente qué había del otro lado del horizonte. La consecuencia más duradera del tratado tardaría solo seis años en manifestarse: en 1500, cuando <button type="button" class="timeline-detail-entrylink" data-id="faras-cruz-del-sur-1500">la expedición portuguesa de Pedro Álvares Cabral toca la costa de lo que hoy es Brasil</button>, esa franja oriental de Sudamérica cae del lado portugués de la línea, y Portugal la reclama — la razón concreta por la que Brasil habla portugués mientras el resto de Hispanoamérica habla español. El propio tratado original todavía existe: la ratificación castellana se conserva en el <button type="button" class="timeline-detail-geolink" data-region="Sevilla" data-country="España">Archivo General de Indias de Sevilla</button>, y la portuguesa en el <button type="button" class="timeline-detail-geolink" data-region="Lisboa" data-country="Portugal">Arquivo Nacional da Torre do Tombo de Lisboa</button>; desde 2007, la <button type="button" class="timeline-detail-geolink" data-region="París" data-country="Francia">UNESCO</button> inscribe ambos documentos conjuntamente en su Registro Memoria del Mundo. Ninguna de las dos coronas, por supuesto, consultó jamás a los millones de personas indígenas que ya habitaban esas tierras: los historiadores modernos consideran Tordesillas uno de los primeros y más flagrantes ejemplos de un reparto imperial del mundo trazado a puro pulso de línea recta sobre un mapa.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Colón nunca hubiera zarpado en 1492, dejando a España sin reclamos que defender?",
      answer:
        "Portugal habría seguido concentrado en su ruta africana hacia la India sin necesidad de negociar una línea de demarcación con nadie, y el papa Alejandro VI no habría tenido disputa alguna que mediar. Sin el Tratado de Tordesillas, la futura Sudamérica portuguesa —y con ella el idioma que hoy habla Brasil— habría dependido de un reparto completamente distinto, o quizás de ningún reparto en absoluto."
    }
  },
  {
    id: "corsali-explorador-1487",
    year: 1487,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the chain described at
    // inquisicion-espanola-1478 — keeps this standalone rather than
    // merging into either colon-porto-santo-1479 or the 1492 pair.
    // Re-solved in 2026 as part of the wider 1479-1533 chain (see
    // faras-cruz-del-sur-1500), and again later in 2026 to make room for
    // origen-trata-transatlantica-1441 / legado-trata-transatlantica-1442
    // (this marker now sits right at the edge of the 1492 cluster's
    // capture radius — do not nudge it any further right).
    trackYear: 1475.78,
    endYear: 1516,
    title: "1487–1516: Andrea Corsali, el florentino que describió la Cruz del Sur desde la India",
    author: "Andrea Corsali",
    country: "India",
    region: "Cochín",
    flag: "navegando",
    type: ICON_TYPE.HISTORY,
    description:
      "Andrea Corsali nace hacia 1487 en Florencia, al servicio de los Médici —primero de Giuliano de Médici, hijo de Lorenzo el Magnífico, y después de su sobrino Lorenzo II de Médici—. A diferencia de los grandes navegantes de su época, nunca comanda una expedición propia: viaja como observador a bordo de naves portuguesas, aprovechando la red comercial que Portugal ya había tendido desde Lisboa hasta la India. Entre 1515 y 1516 recorre la costa oriental de África, dobla el cabo de Buena Esperanza y llega a la India, Ceilán, Sumatra y el sudeste asiático — y en el camino corrige un error geográfico heredado de la Antigüedad: reconoce que Sumatra y Ceilán son dos islas distintas, no la legendaria Taprobana única con la que los cartógrafos clásicos las habían confundido durante siglos. Desde Cochín, en la costa suroeste de la India, escribe en 1516 una carta a Giuliano de Médici que se convertiría en su legado más duradero: ahí describe y dibuja, por primera vez para un lector europeo, la constelación de la Cruz del Sur, cinco estrellas que señalan el polo celeste austral y que llama extraordinariamente hermosas — la misma referencia que los navegantes del hemisferio sur usarían desde entonces como su Estrella Polar. En esa misma carta, al describir a los habitantes de Guyarat que se negaban a matar animales o comer carne por motivos religiosos, Corsali los compara con 'nuestro Leonardo da Vinci' — una de las pocas evidencias históricas que sugieren que el propio Leonardo evitaba el sacrificio animal. Publicada en Florencia en 1518 y reimpresa después en la Delle navigationi et viaggi de Giovanni Battista Ramusio, la carta también especula sobre una gran masa de tierra al sur de Asia — una intuición temprana de lo que la geografía renacentista llamaría Terra Australis, dos siglos y medio antes de que Europa llegara realmente a Australia.",
    descriptionHtml:
      'Andrea Corsali nace hacia 1487 en <button type="button" class="timeline-detail-geolink" data-region="Florencia" data-country="Italia">Florencia</button>, al servicio de los Médici —primero de Giuliano de Médici, hijo de Lorenzo el Magnífico, y después de su sobrino Lorenzo II de Médici—. A diferencia de los grandes navegantes de su época, nunca comanda una expedición propia: viaja como observador a bordo de naves portuguesas, aprovechando la red comercial que Portugal ya había tendido desde <button type="button" class="timeline-detail-geolink" data-region="Lisboa" data-country="Portugal">Lisboa</button> hasta la India. Entre 1515 y 1516 recorre la costa oriental de África, dobla el cabo de Buena Esperanza y llega a la <button type="button" class="timeline-detail-geolink" data-country="India">India</button>, <button type="button" class="timeline-detail-geolink" data-region="Ceilán" data-country="Sri Lanka">Ceilán</button>, <button type="button" class="timeline-detail-geolink" data-region="Sumatra" data-country="Indonesia">Sumatra</button> y el sudeste asiático — y en el camino corrige un error geográfico heredado de la Antigüedad: reconoce que Sumatra y Ceilán son dos islas distintas, no la legendaria Taprobana única con la que los cartógrafos clásicos las habían confundido durante siglos. Desde <button type="button" class="timeline-detail-geolink" data-region="Cochín" data-country="India">Cochín</button>, en la costa suroeste de la India, escribe en 1516 una carta a Giuliano de Médici que se convertiría en su legado más duradero: ahí describe y dibuja, por primera vez para un lector europeo, la constelación de la Cruz del Sur, cinco estrellas que señalan el polo celeste austral y que llama extraordinariamente hermosas — la misma referencia que los navegantes del hemisferio sur usarían desde entonces como su Estrella Polar. En esa misma carta, al describir a los habitantes de <button type="button" class="timeline-detail-geolink" data-region="Gujarat" data-country="India">Guyarat</button> que se negaban a matar animales o comer carne por motivos religiosos, Corsali los compara con \'nuestro Leonardo da Vinci\' — una de las pocas evidencias históricas que sugieren que el propio Leonardo evitaba el sacrificio animal. Publicada en Florencia en 1518 y reimpresa después en la Delle navigationi et viaggi de Giovanni Battista Ramusio, la carta también especula sobre una gran masa de tierra al sur de Asia — una intuición temprana de lo que la geografía renacentista llamaría Terra Australis, dos siglos y medio antes de que Europa llegara realmente a Australia.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Andrea Corsali nunca hubiera embarcado en una nave portuguesa rumbo a la India en 1515?",
      answer:
        "Alguien más habría terminado describiendo la Cruz del Sur para un público europeo —Portugal ya llevaba más de una década navegando esas rutas—, pero probablemente no antes de 1516, y sin el detalle que hace memorable la carta de Corsali: su comparación de los guyaratíes que evitaban el sacrificio animal con 'nuestro Leonardo da Vinci', una de las pocas pistas históricas sobre las propias convicciones dietéticas del genio florentino. Sin esa carta, esa conexión casual entre dos florentinos —uno viajero, otro genio sedentario— se habría perdido por completo."
    }
  },
  {
    id: "colegio-santa-maria-jesus-universidad-sevilla-1502",
    year: 1502,
    trackYear: 1502,
    endYear: 1551,
    title: "1502–1551: de Maese Rodrigo a la Universidad de Sevilla",
    author: "Rodrigo Fernández de Santaella",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "En junio de 1498, los cabildos municipal y eclesiástico de Sevilla forman una comisión para estudiar la creación de un Estudio General en la ciudad. Entre sus miembros está el canónigo Rodrigo Fernández de Santaella, nacido en Carmona en 1444 y conocido como Maese Rodrigo, quien decide impulsar y financiar un colegio propio. Los Reyes Católicos conceden a Sevilla, mediante la Real Provisión del 22 de enero de 1502, la facultad de fundar un Estudio General con cátedras de teología, cánones, leyes, medicina y artes liberales. Mientras el Ayuntamiento deja esa licencia sin ejecutar, Santaella inicia en 1503 la construcción de su institución cerca de la Puerta de Jerez. El 12 de julio de 1505, el papa Julio II emite la bula que autoriza el Colegio de Santa María de Jesús a enseñar artes, lógica, filosofía, teología y derecho canónico y civil; una nueva bula de 1508 incorpora medicina y acerca su régimen al de la Universidad de Salamanca. Maese Rodrigo muere en 1509 sin ver concluido el proyecto: el colegio comienza a recibir estudiantes en 1516 y sus obras terminan hacia 1520. El paso decisivo llega en 1551, cuando el Concejo sevillano transfiere al colegio la Real Provisión de 1502. La facultad de conferir grados tanto a colegiales como a estudiantes externos convierte al antiguo colegio en el Colegio-Universidad de Santa María de Jesús, llamado también Universidad de Maese Rodrigo: el origen institucional de la actual Universidad de Sevilla.",
    descriptionHtml:
      'En junio de 1498, los cabildos municipal y eclesiástico de <button type="button" class="timeline-detail-geolink" data-region="Sevilla" data-country="España">Sevilla</button> forman una comisión para estudiar la creación de un Estudio General en la ciudad. Entre sus miembros está el canónigo Rodrigo Fernández de Santaella, nacido en <button type="button" class="timeline-detail-geolink" data-region="Carmona" data-country="España">Carmona</button> en 1444 y conocido como Maese Rodrigo, quien decide impulsar y financiar un colegio propio. Los Reyes Católicos conceden a Sevilla, mediante la Real Provisión del 22 de enero de 1502, la facultad de fundar un Estudio General con cátedras de teología, cánones, leyes, medicina y artes liberales. Mientras el Ayuntamiento deja esa licencia sin ejecutar, Santaella inicia en 1503 la construcción de su institución cerca de la <button type="button" class="timeline-detail-geolink" data-region="Puerta de Jerez, Sevilla" data-country="España">Puerta de Jerez</button>. El 12 de julio de 1505, el papa Julio II emite la bula que autoriza el Colegio de Santa María de Jesús a enseñar artes, lógica, filosofía, teología y derecho canónico y civil; una nueva bula de 1508 incorpora medicina y acerca su régimen al de la <button type="button" class="timeline-detail-geolink" data-region="Universidad de Salamanca" data-country="España">Universidad de Salamanca</button>. Maese Rodrigo muere en 1509 sin ver concluido el proyecto: el colegio comienza a recibir estudiantes en 1516 y sus obras terminan hacia 1520. El paso decisivo llega en 1551, cuando el Concejo sevillano transfiere al colegio la Real Provisión de 1502. La facultad de conferir grados tanto a colegiales como a estudiantes externos convierte al antiguo colegio en el Colegio-Universidad de Santa María de Jesús, llamado también Universidad de Maese Rodrigo: el origen institucional de la actual <button type="button" class="timeline-detail-geolink" data-region="Universidad de Sevilla" data-country="España">Universidad de Sevilla</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Maese Rodrigo no hubiera financiado su propio colegio después de la comisión de 1498?",
      answer:
        "La licencia real de 1502 pudo haber quedado durante décadas como una facultad nunca ejercida: el Ayuntamiento de Sevilla no la puso en práctica por sí solo. Maese Rodrigo aportó el edificio, las rentas y la estructura docente que permitieron convertir aquella autorización abstracta en una institución real; cuando el Concejo transfirió la provisión al colegio en 1551, ya existía el organismo capaz de transformarla en universidad."
    }
  },
  {
    id: "la-celestina-1499",
    year: 1499,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1501.07,
    title: "1499: La Celestina",
    author: "Fernando de Rojas",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "La Celestina se conserva en una edición burgalesa tradicionalmente fechada en 1499. La obra convirtió la comedia humanística en tragicomedia radical sobre deseo, dinero y poder. Fernando de Rojas, jurista de familia conversa, continuó un primer acto de autor discutido y dio voz a criados, prostitutas, nobles y a la alcahueta Celestina. Su mundo urbano no responde al orden medieval: cada personaje negocia placer, honor y beneficio hasta que la cadena de engaños termina en muerte. Une cultura universitaria, habla callejera y crisis moral; así abre el Renacimiento literario español sin abandonar su sombra medieval.",
    descriptionHtml:
      "La Celestina se conserva en una edición <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Burgos\" data-country=\"España\">burgalesa</button> tradicionalmente fechada en 1499. La obra convirtió la comedia humanística en tragicomedia radical sobre deseo, dinero y poder. Fernando de Rojas, jurista de familia conversa, continuó un primer acto de autor discutido y dio voz a criados, prostitutas, nobles y a la alcahueta Celestina. Su mundo urbano no responde al orden medieval: cada personaje negocia placer, honor y beneficio hasta que la cadena de engaños termina en muerte. Une <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"gramatica-castellana-nebrija-1492\">cultura universitaria</button>, habla callejera y crisis moral; así abre el <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"lazarillo\">Renacimiento literario español</button> sin abandonar su sombra medieval.",
    butterfly: {
      prompt: "¿Por qué La Celestina parece medieval y moderna al mismo tiempo?",
      answer:
        "Conserva una advertencia moral y un desenlace trágico, pero sus personajes hablan desde intereses individuales, deseo, dinero y movilidad social. Esa tensión explica su lugar de bisagra: no inaugura por sí sola la picaresca, aunque abre posibilidades decisivas para la prosa y el teatro posteriores."
    }
  },

  {
    id: "faras-cruz-del-sur-1500",
    year: 1500,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the 1479-1533 chain-clustered sequence — see
    // inquisicion-espanola-1478 for the earlier links in the same chain.
    trackYear: 1505.56,
    title: "1500: João Faras dibuja el primer boceto europeo de la Cruz del Sur",
    author: "João Faras",
    country: "Brasil",
    region: "Porto Seguro",
    type: ICON_TYPE.HISTORY,
    description:
      "En marzo de 1500, el bachiller João Faras —conocido como Mestre João, astrólogo, astrónomo, médico y cirujano del rey Manuel I de Portugal— zarpa de Lisboa con la segunda armada portuguesa rumbo a Calicut, India, al mando de Pedro Álvares Cabral. Su misión era ante todo científica: probar un nuevo astrolabio náutico y las tablas astronómicas de Abraham Zacuto, y resolver un problema práctico de la navegación austral —la estrella Polar desaparece bajo el horizonte cerca del ecuador, dejando a los pilotos sin referencia fija—. El 22 de abril de 1500 la armada avista la costa de lo que hoy es Brasil; cinco días después, Faras desembarca cerca de la actual Porto Seguro y arma un astrolabio de madera en la playa junto a los pilotos Afonso Lopes y Pedro Escobar, calculando una latitud de 17 grados sur —a menos de 40 minutos de la real—. El 1 de mayo, desde el campamento que los portugueses bautizan Vera Cruz, escribe una carta al rey Manuel I que incluye el boceto europeo más antiguo conocido del cielo austral visto desde América: identifica las cinco estrellas de la constelación que hoy llamamos Cruz del Sur, llamándolas 'las Guardas', y ensaya —sin éxito— identificar una estrella polar sur equivalente a la del hemisferio norte. Según algunos historiadores, Faras era de origen sefardí, posiblemente huido de España tras la expulsión de los judíos en 1492 y convertido al cristianismo hacia 1496 para poder servir a la corona portuguesa. Su carta, redescubierta en los archivos reales portugueses y publicada recién en 1843, antecede en dieciséis años a la descripción más célebre de la Cruz del Sur, la de Andrea Corsali desde la India, y en diecinueve a la del cronista Antonio Pigafetta durante la expedición de Magallanes.",
    descriptionHtml:
      'En marzo de 1500, el bachiller João Faras —conocido como Mestre João, astrólogo, astrónomo, médico y cirujano del rey Manuel I de Portugal— zarpa de <button type="button" class="timeline-detail-geolink" data-region="Lisboa" data-country="Portugal">Lisboa</button> con la segunda armada portuguesa rumbo a <button type="button" class="timeline-detail-geolink" data-region="Calicut" data-country="India">Calicut</button>, India, al mando de Pedro Álvares Cabral. Su misión era ante todo científica: probar un nuevo astrolabio náutico y las tablas astronómicas de Abraham Zacuto, y resolver un problema práctico de la navegación austral —la estrella Polar desaparece bajo el horizonte cerca del ecuador, dejando a los pilotos sin referencia fija—. El 22 de abril de 1500 la armada avista la costa de lo que hoy es Brasil; cinco días después, Faras desembarca cerca de la actual <button type="button" class="timeline-detail-geolink" data-region="Porto Seguro" data-country="Brasil">Porto Seguro</button> y arma un astrolabio de madera en la playa junto a los pilotos Afonso Lopes y Pedro Escobar, calculando una latitud de 17 grados sur —a menos de 40 minutos de la real—. El 1 de mayo, desde el campamento que los portugueses bautizan Vera Cruz, escribe una carta al rey Manuel I que incluye el boceto europeo más antiguo conocido del cielo austral visto desde América: identifica las cinco estrellas de la constelación que hoy llamamos Cruz del Sur, llamándolas \'las Guardas\', y ensaya —sin éxito— identificar una estrella polar sur equivalente a la del hemisferio norte. Según algunos historiadores, Faras era de origen sefardí, posiblemente huido de España tras la <button type="button" class="timeline-detail-entrylink" data-id="expulsion-judios-1492">expulsión de los judíos en 1492</button> y convertido al cristianismo hacia 1496 para poder servir a la corona portuguesa. Su carta, redescubierta en los archivos reales portugueses y publicada recién en 1843, antecede en dieciséis años a la descripción más célebre de la Cruz del Sur, la de <button type="button" class="timeline-detail-entrylink" data-id="corsali-explorador-1487">Andrea Corsali</button> desde la India, y en diecinueve a la del cronista Antonio Pigafetta durante la <button type="button" class="timeline-detail-entrylink" data-id="magallanes-circunnavegacion-1519">expedición de Magallanes</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la carta de Faras nunca hubiera sido redescubierta en los archivos portugueses?",
      answer:
        "La descripción más antigua conocida de la Cruz del Sur habría quedado en manos de Andrea Corsali, dieciséis años después, o incluso del cronista Antonio Pigafetta durante la expedición de Magallanes. La astronomía europea del hemisferio sur no habría perdido la constelación misma, pero sí a su primer testigo documentado: un médico de origen incierto, posiblemente un judío converso huido de la España de 1492, cuya única huella en la historia es una carta que durmió olvidada en un archivo durante más de tres siglos."
    }
  },
  {
    id: "sergas-esplandian-california-1510",
    year: 1510,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the 1479-1533 chain-clustered sequence — see
    // inquisicion-espanola-1478 for the earlier links in the same chain.
    // Re-spaced in 2026 to make room for
    // afonso-i-kongo-nzinga-mbemba-1509 inserted just before it.
    trackYear: 1514.53,
    title: "1510: Las sergas de Esplandián inventa el nombre 'California'",
    author: "Garci Rodríguez de Montalvo",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "En 1510, el regidor sevillano Garci Rodríguez de Montalvo publica en Sevilla Las sergas de Esplandián, quinto libro de la serie de novelas de caballerías que arranca con el Amadís de Gaula. En ella inventa una isla imaginaria: 'Sabed que a la diestra mano de las Indias hubo una isla llamada California, muy llegada a la parte del Paraíso Terrenal...' — un territorio gobernado por la reina Calafia, poblado enteramente por mujeres guerreras 'de valientes cuerpos y esforzados y ardientes corazones', y rebosante de oro. Dos décadas después, expediciones enviadas por Hernán Cortés llegan a la península que hoy es Baja California y, convencidos —erróneamente— de que se trataba de una isla, adoptan para bautizarla el nombre ficticio tomado directamente de la novela de Montalvo. Con el tiempo, el nombre se extiende hacia el norte hasta cubrir también la Alta California que siglos más tarde entraría a Estados Unidos: un estado entero de la Unión Americana lleva el nombre de una isla de fantasía gobernada por amazonas negras en un libro de caballerías español.",
    descriptionHtml:
      'En 1510, el regidor sevillano Garci Rodríguez de Montalvo publica en <button type="button" class="timeline-detail-geolink" data-region="Sevilla" data-country="España">Sevilla</button> Las sergas de Esplandián, quinto libro de la serie de novelas de caballerías que arranca con el Amadís de Gaula. En ella inventa una isla imaginaria: \'Sabed que a la diestra mano de las Indias hubo una isla llamada California, muy llegada a la parte del Paraíso Terrenal...\' — un territorio gobernado por la reina Calafia, poblado enteramente por mujeres guerreras \'de valientes cuerpos y esforzados y ardientes corazones\', y rebosante de oro. Dos décadas después, expediciones enviadas por Hernán Cortés llegan a la península que hoy es Baja California y, convencidos —erróneamente— de que se trataba de una isla, adoptan para bautizarla el nombre ficticio tomado directamente de la novela de Montalvo. Con el tiempo, el nombre se extiende hacia el norte hasta cubrir también la Alta California que siglos más tarde entraría a Estados Unidos: un estado entero de la Unión Americana lleva el nombre de una isla de fantasía gobernada por amazonas negras en un libro de caballerías español — el mismo nombre que, tres siglos después, aparecería en la <button type="button" class="timeline-detail-entrylink" data-id="california-land-act-1851">Ley de Tierras de 1851</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si los exploradores de Cortés no hubieran creído que Baja California era una isla?",
      answer:
        "Sin ese error cartográfico, la península probablemente habría recibido otro nombre —ligado a un santo, como tantos otros territorios novohispanos— y 'California' habría quedado como una isla de papel, olvidada dentro de un libro de caballerías, en vez de convertirse en el nombre del estado más poblado de Estados Unidos."
    }
  },
  {
    id: "magallanes-circunnavegacion-1519",
    year: 1519,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the chain described at
    // inquisicion-espanola-1478. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509. Re-spaced again to make room for
    // maquiavelo-principe-1513, see that entry's trackYear comment.
    trackYear: 1535.17,
    endYear: 1522,
    title: "1519–1522: Fernando de Magallanes y la primera vuelta al mundo",
    author: "Fernando de Magallanes",
    country: "España",
    region: "Estrecho de Magallanes",
    type: ICON_TYPE.HISTORY,
    description:
      "Fernando de Magallanes zarpa de Sanlúcar de Barrameda en septiembre de 1519 al mando de cinco naves —la Trinidad, la San Antonio, la Concepción, la Victoria y la Santiago—, financiado por la misma Corona española que, veintisiete años antes, había financiado a Cristóbal Colón. Como Colón, Magallanes era un navegante extranjero al servicio de España —portugués, no genovés—, y como en 1492, la búsqueda de una ruta occidental terminaría revelando algo que nadie había salido a buscar: no un atajo hacia las islas de las especias, sino la primera vuelta completa al mundo. En 1520 la expedición cruza el estrecho que hoy lleva su nombre, entre la Patagonia continental y Tierra del Fuego, la primera flota europea en navegar del Atlántico al Pacífico bordeando el extremo sur de América. Durante los meses que pasa en el hemisferio sur, el cronista veneciano Antonio Pigafetta registra en su diario la Cruz del Sur y dos manchas difusas en el cielo austral —hoy las Nubes de Magallanes—, aunque ninguna de las dos era, en realidad, un descubrimiento: Andrea Corsali ya las había descrito desde la India cuatro años antes, en 1516. Lo que la expedición de Magallanes aportó no fue la primera observación, sino la fama: un viaje que recorrió el planeta entero terminó bautizando con su nombre algo que otros ya habían visto. Magallanes muere el 27 de abril de 1521 en una batalla en Mactán, Filipinas, sin completar el viaje; es su segundo al mando, Juan Sebastián Elcano, quien trae de vuelta a España en 1522 la única nave superviviente, la Victoria, con apenas 18 de los 270 hombres que habían zarpado tres años antes — la primera vuelta al mundo, completada bajo otro nombre.",
    descriptionHtml:
      'Fernando de Magallanes zarpa de <button type="button" class="timeline-detail-geolink" data-region="Sanlúcar de Barrameda" data-country="España">Sanlúcar de Barrameda</button> en septiembre de 1519 al mando de cinco naves —la Trinidad, la San Antonio, la Concepción, la Victoria y la Santiago—, financiado por la misma Corona española que, veintisiete años antes, había financiado a <button type="button" class="timeline-detail-entrylink" data-id="cuatro-viajes-colon-1492">Cristóbal Colón</button>. Como Colón, Magallanes era un navegante extranjero al servicio de <button type="button" class="timeline-detail-geolink" data-country="España">España</button> —portugués, no genovés—, y como en 1492, la búsqueda de una ruta occidental terminaría revelando algo que nadie había salido a buscar: no un atajo hacia las islas de las especias, sino la primera vuelta completa al mundo. En 1520 la expedición cruza el <button type="button" class="timeline-detail-geolink" data-region="Estrecho de Magallanes" data-country="Chile">estrecho que hoy lleva su nombre</button>, entre la Patagonia continental y Tierra del Fuego, la primera flota europea en navegar del Atlántico al Pacífico bordeando el extremo sur de América. Durante los meses que pasa en el hemisferio sur, el cronista veneciano Antonio Pigafetta registra en su diario la Cruz del Sur y dos manchas difusas en el cielo austral —hoy las Nubes de Magallanes—, aunque ninguna de las dos era, en realidad, un descubrimiento: <button type="button" class="timeline-detail-entrylink" data-id="corsali-explorador-1487">Andrea Corsali</button> ya las había descrito desde la India cuatro años antes, en 1516. Lo que la expedición de Magallanes aportó no fue la primera observación, sino la fama: un viaje que recorrió el planeta entero terminó bautizando con su nombre algo que otros ya habían visto. Magallanes muere el 27 de abril de 1521 en una batalla en <button type="button" class="timeline-detail-geolink" data-region="Mactán" data-country="Filipinas">Mactán, Filipinas</button>, sin completar el viaje; es su segundo al mando, Juan Sebastián Elcano, quien trae de vuelta a España en 1522 la única nave superviviente, la Victoria, con apenas 18 de los 270 hombres que habían zarpado tres años antes — la primera vuelta al mundo, completada bajo otro nombre.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Magallanes hubiera sobrevivido para completar él mismo la vuelta al mundo?",
      answer:
        "El relato heroico llevaría un solo nombre, no dos: hoy hablaríamos únicamente de la expedición de Magallanes, no de la hazaña compartida y algo incómoda de Magallanes y Elcano, un capitán vasco al que el propio Magallanes había encadenado por motín años antes y que terminó completando lo que su antiguo prisionero no pudo. La historia de la primera vuelta al mundo perdería esa ironía final."
    }
  },
  {
    id: "naufragios-cabeza-de-vaca-1528",
    year: 1528,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. 1528/1531/1535/1541 chain-clustered together — also
    // part of the wider 1479-1533 chain described at
    // inquisicion-espanola-1478. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509. Re-spaced again to make room for
    // maquiavelo-principe-1513, see that entry's trackYear comment.
    trackYear: 1539.21,
    endYear: 1536,
    pubYear: 1542,
    title: "Naufragios",
    author: "Álvar Núñez Cabeza de Vaca",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description:
      "Álvar Núñez Cabeza de Vaca narra el desastre de la expedición de Pánfilo de Narváez y los ocho años que pasó vagando desnudo y cautivo por las costas y desiertos de lo que hoy es Florida, Texas y el norte de México, sobreviviendo como esclavo, comerciante y curandero entre los pueblos indígenas antes de reencontrar a los suyos en 1536. Publicada en 1542, es tan crónica de supervivencia como confesión de un hombre transformado por el contacto con un mundo que España apenas comenzaba a comprender.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Cabeza de Vaca hubiera muerto en el primer año de naufragio, como casi toda la expedición de Narváez?",
      answer:
        "No existiría uno de los primeros testimonios europeos capaces de ver a los pueblos indígenas como sujetos —curanderos, comerciantes, familias— y no solo como obstáculos a conquistar. Naufragios sigue siendo excepcional precisamente porque su autor sobrevivió lo suficiente para cambiar de perspectiva."
    }
  },
  {
    id: "vision-guadalupe-1531",
    year: 1531,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509. Re-spaced again to make room for
    // maquiavelo-principe-1513, see that entry's trackYear comment.
    trackYear: 1543.25,
    title: "1531: la aparición de la Virgen de Guadalupe",
    author: "Hito histórico",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "Según la tradición, entre el 9 y el 12 de diciembre de 1531, Juan Diego Cuauhtlatoatzin, un indígena nahua recién convertido, tiene en el cerro del Tepeyac, cerca de la Ciudad de México, varias apariciones de una mujer que se identifica como la Virgen María y le pide que se construya un templo en su honor; como prueba, deja su imagen estampada en la tilma de Juan Diego. El relato más antiguo del suceso, el Nican Mopohua ('Aquí se narra'), fue escrito originalmente en náhuatl —tradicionalmente atribuido al noble nahua Antonio Valeriano— antes de circular en castellano, y la Virgen de Guadalupe se convertiría con el tiempo en el símbolo religioso y de identidad mestiza más poderoso de México.",
    descriptionHtml:
      'Según la tradición, entre el 9 y el 12 de diciembre de 1531, Juan Diego Cuauhtlatoatzin, un indígena nahua recién convertido, tiene en el <button type="button" class="timeline-detail-geolink" data-region="Cerro del Tepeyac" data-country="México">cerro del Tepeyac</button>, cerca de la Ciudad de México, varias apariciones de una mujer que se identifica como la Virgen María y le pide que se construya un templo en su honor; como prueba, deja su imagen estampada en la tilma de Juan Diego. El relato más antiguo del suceso, el Nican Mopohua (\'Aquí se narra\'), fue escrito originalmente en náhuatl —tradicionalmente atribuido al noble nahua Antonio Valeriano— antes de circular en castellano, y la Virgen de Guadalupe se convertiría con el tiempo en el símbolo religioso y de identidad mestiza más poderoso de México.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el relato de las apariciones nunca se hubiera escrito en náhuatl primero?",
      answer:
        "El culto guadalupano pudo haber quedado como una devoción impuesta desde España, sin la voz indígena que lo hizo propio desde el principio. El Nican Mopohua, al narrar el suceso en la lengua de Juan Diego, permitió que la fe mestiza naciera con acento nahua, no solo castellano."
    }
  },
  {
    id: "nicolas-enriquez-guadalupe-1773",
    year: 1773,
    endYear: 1789,
    title: "1773–1789: Nicolás Enríquez y la Virgen tocada al original",
    author: "Nicolás Enríquez",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.HISTORY,
    description:
      "El pintor novohispano Nicolás Enríquez —discípulo de Juan Rodríguez Juárez y cofundador, junto a José de Ibarra, de la Academia de Pintores de Nueva España en 1728— fue uno de los intérpretes más prolíficos de la Virgen de Guadalupe durante el siglo XVIII. En 1773 pinta una versión rodeada por las cuatro escenas clásicas de las apariciones a Juan Diego en el Tepeyac, una composición que repitió muchas veces a lo largo de su carrera. Pero esta copia en particular guarda un dato excepcional, revelado por su propia inscripción: fue 'tocada al original' en 1789 —dieciséis años después de pintada—, es decir, puesta físicamente en contacto con la tilma auténtica que se venera en la Ciudad de México, una práctica documentada desde el siglo XVII mediante la cual un cuadro dejaba de ser una simple copia para convertirse en objeto sagrado por derecho propio, casi una reliquia de segundo grado. El dueño de la pieza ya había regresado a España cuatro años antes, en 1785; la sacralización de 1789 implica que la pintura hizo, de algún modo, el viaje de vuelta cruzando el Atlántico —invirtiendo el flujo habitual de imágenes religiosas, que normalmente viajaban de España hacia las Américas, no al revés.",
    descriptionHtml:
      'El pintor novohispano Nicolás Enríquez —discípulo de Juan Rodríguez Juárez y cofundador, junto a José de Ibarra, de la Academia de Pintores de Nueva España en 1728— fue uno de los intérpretes más prolíficos de la Virgen de Guadalupe durante el siglo XVIII. En 1773 pinta una versión rodeada por las cuatro escenas clásicas de las apariciones a Juan Diego en el <button type="button" class="timeline-detail-geolink" data-region="Cerro del Tepeyac" data-country="México">Tepeyac</button>, una composición que repitió muchas veces a lo largo de su carrera. Pero esta copia en particular guarda un dato excepcional, revelado por su propia inscripción: fue \'tocada al original\' en 1789 —dieciséis años después de pintada—, es decir, puesta físicamente en contacto con la tilma auténtica que se venera en la Ciudad de México, una práctica documentada desde el siglo XVII mediante la cual un cuadro dejaba de ser una simple copia para convertirse en objeto sagrado por derecho propio, casi una reliquia de segundo grado. El dueño de la pieza ya había regresado a España cuatro años antes, en 1785; la sacralización de 1789 implica que la pintura hizo, de algún modo, el viaje de vuelta cruzando el Atlántico —invirtiendo el flujo habitual de imágenes religiosas, que normalmente viajaban de España hacia las Américas, no al revés.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la práctica de 'tocar' copias al original nunca se hubiera formalizado?",
      answer:
        "Las miles de reproducciones de la Virgen de Guadalupe que circularon por Nueva España y Europa durante el siglo XVIII habrían sido, en el mejor de los casos, ilustraciones piadosas más —sin la garantía de autenticidad ni el estatus casi de reliquia que la práctica de 'tocar al original' les otorgaba. Esa costumbre fue, en el fondo, lo que le permitió a México exportar su propia santidad de vuelta al imperio que lo había colonizado, en vez de solo recibir imágenes religiosas desde España."
    }
  },
  {
    id: "fortun-ximenez-baja-california-1533",
    year: 1533,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509. Re-spaced again to make room for
    // maquiavelo-principe-1513, see that entry's trackYear comment.
    trackYear: 1547.29,
    title: "1533: Fortún Ximénez toca Baja California en un motín",
    author: "Fortún Ximénez Bertandoña",
    country: "México",
    region: "La Paz, Baja California",
    type: ICON_TYPE.HISTORY,
    description:
      "En noviembre de 1533, una expedición financiada por Hernán Cortés zarpó de la costa occidental de Nueva España en busca de nuevas rutas comerciales y riquezas. El navegante vasco Fortún Ximénez Bertandoña viajaba como marinero a bordo de la Concepción, capitaneada por Diego de Becerra. Durante la travesía surgieron tensiones que terminaron en motín: Ximénez lideró una rebelión contra Becerra, quien fue asesinado; Ximénez tomó el control del barco y continuó navegando hacia el noroeste. Semanas después llegó a una gran bahía en el extremo sur de la actual península de Baja California, cerca de donde hoy se encuentra La Paz. Los hombres de Ximénez creyeron que habían descubierto una isla, no una península. En la Europa de la época circulaban leyendas sobre la misteriosa e inmensamente rica 'Isla de California', inspiradas por la novela de caballerías Las sergas de Esplandián. Ximénez alimentó esa creencia: sus reportes de bancos de perlas y una tierra separada del continente reforzaron el mito cartográfico que persistiría durante más de un siglo. Pero el encuentro fue violento: al desembarcar, los expedicionarios se enfrentaron con comunidades indígenas kumeyaay que resistieron su presencia. Según los registros, hubo intentos de robo de perlas y abuso de la población local. Durante uno de estos enfrentamientos, Ximénez murió, convirtiéndose en uno de los primeros europeos en perder la vida en Baja California. Algunos de sus hombres escaparon y regresaron a Nueva España con historias que provocarían décadas de expediciones futuras. El descubrimiento de Ximénez fue efímero —no fundó asentamiento alguno, no dejó rastro institucional— pero sus noticias sobre perlas y la supuesta 'isla de California' motivarían a Cortés a financiar nuevas expediciones y marcaría el comienzo del largo proceso que terminaría, dos siglos después, con la colonización española de las Californias.",
    descriptionHtml:
      'En noviembre de 1533, una expedición financiada por Hernán Cortés zarpó de la costa occidental de Nueva España en busca de nuevas rutas comerciales y riquezas. El navegante vasco Fortún Ximénez Bertandoña viajaba como marinero a bordo de la Concepción, capitaneada por Diego de Becerra. Durante la travesía surgieron tensiones que terminaron en motín: Ximénez lideró una rebelión contra Becerra, quien fue asesinado; Ximénez tomó el control del barco y continuó navegando hacia el noroeste. Semanas después llegó a una gran bahía en el extremo sur de la actual península de <button type="button" class="timeline-detail-geolink" data-region="La Paz, Baja California" data-country="México">Baja California</button>, cerca de donde hoy se encuentra La Paz. Los hombres de Ximénez creyeron que habían descubierto una isla, no una península. En la Europa de la época circulaban leyendas sobre la misteriosa e inmensamente rica \'Isla de California\', inspiradas por la <button type="button" class="timeline-detail-entrylink" data-id="sergas-esplandian-california-1510">novela de caballerías Las sergas de Esplandián</button>. Ximénez alimentó esa creencia: sus reportes de bancos de perlas y una tierra separada del continente reforzaron el mito cartográfico que persistiría durante más de un siglo. Pero el encuentro fue violento: al desembarcar, los expedicionarios se enfrentaron con comunidades indígenas kumeyaay que resistieron su presencia. Según los registros, hubo intentos de robo de perlas y abuso de la población local. Durante uno de estos enfrentamientos, Ximénez murió, convirtiéndose en uno de los primeros europeos en perder la vida en Baja California. Algunos de sus hombres escaparon y regresaron a Nueva España con historias que provocarían décadas de expediciones futuras. El descubrimiento de Ximénez fue efímero —no fundó asentamiento alguno, no dejó rastro institucional— pero sus noticias sobre perlas y la supuesta \'isla de California\' motivarían a Cortés a financiar nuevas expediciones y marcaría el comienzo del largo proceso que terminaría, dos siglos después, con la colonización española de las Californias.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Ximénez y su tripulación nunca hubieran alcanzado Baja California, o si sus reportes nunca hubieran llegado a España?",
      answer:
        "El mito de la Isla de California habría persistido, pero sin el 'avistamiento' europeo que le daba credibilidad cartográfica. España probablemente habría posponido aún más la exploración y colonización sistemática de las Californias, permitiendo que otra potencia —Francia, o la propia Inglaterra— se adelantara en reclamar esas costas del Pacífico. La forma de California en los mapas europeos, y por lo tanto la historia de la región, hubiera sido radicalmente distinta."
    }
  },
  {
    id: "cabrillo-california-1542",
    year: 1542,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509 — stays paired with
    // brevisima-relacion-1542. Re-spaced again to make room for
    // maquiavelo-principe-1513, see that entry's trackYear comment.
    trackYear: 1559.4,
    endYear: 1543,
    title: "1542: Juan Rodríguez Cabrillo llega a la costa de California",
    author: "Juan Rodríguez Cabrillo",
    country: "Estados Unidos",
    region: "San Diego",
    type: ICON_TYPE.HISTORY,
    description:
      "Nueve años después del naufragio de Ximénez en Baja California, en septiembre de 1542, el explorador Juan Rodríguez Cabrillo —nacido probablemente en Portugal, aunque España lo reclama como suyo— llega con tres naves, la San Salvador, la Victoria y la San Miguel, a la bahía que hoy ocupa San Diego: la primera expedición europea documentada en tocar la costa de la actual California. Zarpada desde Navidad, en la Nueva España, y al servicio de la Corona española, su misión era encontrar un paso hacia Asia y reclamar nuevas tierras. Desde ahí continúa hacia el norte, pasando frente a Santa Bárbara y la bahía de Monterey, y posiblemente hasta Point Reyes, antes de morir en enero de 1543 por complicaciones de una herida sufrida en una de las islas del Canal. Su segundo al mando, Bartolomé Ferrer, termina el viaje en su nombre. Nada de esto significa que Cabrillo 'descubriera' California: millones de personas indígenas —tongva, chumash, kumeyaay, entre muchos otros pueblos— ya habitaban la región desde hacía milenios. Lo que Cabrillo representa, desde la perspectiva del imperio español, es el primer europeo en documentar y reclamar esa costa para la Corona — treinta y dos años después de que Garci Rodríguez de Montalvo la hubiera bautizado, sin haberla visto jamás, como la isla de la reina Calafia. Su nombre sigue repitiéndose hoy por toda California: la playa de Cabrillo en San Pedro, el Cabrillo National Monument en San Diego, la carretera costera Cabrillo Highway, el Cabrillo College cerca de Santa Cruz, y el Día de Cabrillo, feriado estatal cada 9 de octubre.",
    descriptionHtml:
      'Nueve años después del naufragio de <button type="button" class="timeline-detail-entrylink" data-id="fortun-ximenez-baja-california-1533">Ximénez</button> en Baja California, en septiembre de 1542, el explorador Juan Rodríguez Cabrillo —nacido probablemente en <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button>, aunque <button type="button" class="timeline-detail-geolink" data-country="España">España</button> lo reclama como suyo— llega con tres naves, la San Salvador, la Victoria y la San Miguel, a la bahía que hoy ocupa <button type="button" class="timeline-detail-geolink" data-region="San Diego" data-country="Estados Unidos">San Diego</button>: la primera expedición europea documentada en tocar la costa de la actual California. Zarpada desde <button type="button" class="timeline-detail-geolink" data-region="Navidad" data-country="México">Navidad</button>, en la Nueva España, y al servicio de la Corona española, su misión era encontrar un paso hacia Asia y reclamar nuevas tierras. Desde ahí continúa hacia el norte, pasando frente a <button type="button" class="timeline-detail-geolink" data-region="Santa Bárbara" data-country="Estados Unidos">Santa Bárbara</button> y la bahía de <button type="button" class="timeline-detail-geolink" data-region="Monterey" data-country="Estados Unidos">Monterey</button>, y posiblemente hasta <button type="button" class="timeline-detail-geolink" data-region="Point Reyes" data-country="Estados Unidos">Point Reyes</button>, antes de morir en enero de 1543 por complicaciones de una herida sufrida en una de las <button type="button" class="timeline-detail-geolink" data-region="Islas del Canal" data-country="Estados Unidos">islas del Canal</button>. Su segundo al mando, Bartolomé Ferrer, termina el viaje en su nombre. Nada de esto significa que Cabrillo \'descubriera\' California: millones de personas indígenas —tongva, chumash, kumeyaay, entre muchos otros pueblos— ya habitaban la región desde hacía milenios. Lo que Cabrillo representa, desde la perspectiva del imperio español, es el primer europeo en documentar y reclamar esa costa para la Corona — treinta y dos años después de que Garci Rodríguez de Montalvo la hubiera bautizado, sin haberla visto jamás, como <button type="button" class="timeline-detail-entrylink" data-id="sergas-esplandian-california-1510">la isla de la reina Calafia</button>. Su nombre sigue repitiéndose hoy por toda California: la playa de Cabrillo en <button type="button" class="timeline-detail-geolink" data-region="San Pedro, California" data-country="Estados Unidos">San Pedro</button>, el <button type="button" class="timeline-detail-geolink" data-region="Cabrillo National Monument" data-country="Estados Unidos">Cabrillo National Monument</button> en San Diego, la carretera costera Cabrillo Highway, el Cabrillo College cerca de <button type="button" class="timeline-detail-geolink" data-region="Santa Cruz, California" data-country="Estados Unidos">Santa Cruz</button>, y el Día de Cabrillo, feriado estatal cada 9 de octubre.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Cabrillo no hubiera muerto en las islas del Canal y hubiera terminado él mismo la expedición?",
      answer:
        "Es imposible saberlo con certeza, pero es probable que su nombre —y no el de Bartolomé Ferrer, su segundo al mando— hubiera quedado grabado con más fuerza en la memoria histórica de California. En cambio, es Ferrer quien firma el tramo final del viaje, y Cabrillo muere sin saber que su nombre terminaría bautizando, siglos después, una autopista, una universidad y un día festivo estatal."
    }
  },
  {
    id: "brevisima-relacion-1542",
    year: 1542,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509 — stays paired with
    // cabrillo-california-1542. Re-spaced again to make room for
    // maquiavelo-principe-1513, see that entry's trackYear comment.
    trackYear: 1559.4,
    title: "Brevísima relación de la destrucción de las Indias",
    author: "Bartolomé de las Casas",
    country: "República Dominicana",
    region: "La Española",
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.ECHO],
    sensitive: true,
    description:
      "Escrita en 1542 y publicada en 1552, la Brevísima relación de la destrucción de las Indias denuncia las atrocidades de la conquista. Bartolomé de las Casas relata que colonizadores arrancaban criaturas lactantes de sus madres y les golpeaban la cabeza contra las peñas. Su testimonio buscaba obligar a la Corona española a reformar el trato de los pueblos indígenas, aunque después también alimentó la Leyenda Negra. Este episodio abre un eco brutal sobre autoridades que convierten la separación entre madres racializadas y sus hijos en instrumento de dominio.",
    descriptionHtml:
      'Escrita en 1542 y publicada en 1552, la <em>Brevísima relación de la destrucción de las Indias</em> denuncia las atrocidades de la conquista. Bartolomé de las Casas relata que colonizadores en <button type="button" class="timeline-detail-geolink" data-region="La Española" data-country="República Dominicana">La Española</button> arrancaban criaturas lactantes de sus madres y les golpeaban la cabeza contra las peñas. Su testimonio buscaba obligar a la <button type="button" class="timeline-detail-geolink" data-country="España">Corona española</button> a reformar el trato de los pueblos indígenas, aunque después también alimentó la Leyenda Negra. Este episodio abre un eco brutal sobre autoridades que convierten la separación entre madres racializadas y sus hijos en instrumento de dominio.',
    echo: {
      title: "La separación forzada de madres e hijos",
      pairedEntryId: "paola-clouatre-ice-2025",
      role: "origen",
      comparison:
        "No son hechos históricamente equivalentes. Comparten una lógica de poder: una autoridad se atribuye el derecho de romper por la fuerza el vínculo entre una madre racializada y su criatura."
    },
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bartolomé de las Casas nunca hubiera escrito su denuncia?",
      answer:
        "La Corona española habría carecido de un registro interno, moralmente autorizado, de las atrocidades cometidas en su nombre. La Leyenda Negra que después usarían las potencias rivales de España habría necesitado otras fuentes, quizás menos contundentes que la de un fraile que había presenciado la violencia de cerca."
    }
  },
  {
    id: "afonso-i-kongo-nzinga-mbemba-1509",
    year: 1509,
    // Real date (accession); nudged track position only — see trackYear
    // comment in timeline.js. Inserted into the pre-existing, tightly
    // packed 1492-1559 chain in its correct chronological slot (between
    // faras-cruz-del-sur-1500 and sergas-esplandian-california-1510) by
    // re-spacing every entry from sergas through monja-alferez-erauso-1592
    // slightly tighter — the original ~58-track-year span from
    // faras-cruz-del-sur-1500 to monja-alferez-erauso-1592 had just enough
    // room for one more standalone point. See those entries' own trackYear
    // comments for their part of this re-spacing.
    trackYear: 1510.05,
    endYear: 1543,
    title: "Nzinga Mbemba",
    author: "Nzinga Mbemba (Afonso I de Kongo)",
    country: "Congo",
    region: "Mbanza Kongo",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.CONFLICT,
    description:
      "Nzinga Mbemba nace hacia 1456 en el Reino de Kongo, un extenso y sofisticado estado centroafricano que hoy correspondería a partes de Angola, la República Democrática del Congo y la República del Congo. En 1483, poco después de que el navegante portugués Diogo Cão llegara a la desembocadura del río Congo, Portugal establece relaciones diplomáticas con la corte de Mbanza Kongo, la capital del reino. En julio de 1491, Nzinga Mbemba se bautiza como cristiano y adopta el nombre de Afonso, en honor al entonces príncipe heredero de Portugal. En 1509, tras derrotar a su medio hermano Mpanzu a Kitima en una batalla decisiva por la sucesión, se convierte en el rey Afonso I. Lejos de imaginar una relación colonial, Afonso concibe una alianza cristiana entre iguales: manda construir iglesias, promueve la educación religiosa y envía a jóvenes nobles del reino a estudiar a Portugal — entre ellos a su propio hijo Henrique, quien en 1518 se convierte en el primer obispo católico del África subsahariana. Pero la alianza se resquebraja a medida que crece la demanda portuguesa de mano de obra esclavizada. A partir de 1526, Afonso escribe una serie de veinticuatro cartas al rey João III de Portugal denunciando que comerciantes portugueses secuestraban súbditos libres, nobles y hasta parientes de la propia corte real, más allá de cualquier trata legítima de cautivos de guerra que él mismo toleraba. 'Cada día los mercaderes se llevan a nuestra gente, hijos de la tierra e hijos de nuestros nobles y vasallos', escribe en una de sus cartas más citadas, advirtiendo que el reino se estaba despoblando. Le pide a João III que prohíba a sus comerciantes traer más mercancías destinadas a comprar personas, pues era su voluntad que en su reino no hubiera trata de esclavos ni salida alguna para ellos. Portugal ignora sus súplicas: el comercio continúa y se expande. Afonso muere en 1542 o 1543, todavía rey, sin haber logrado revertir la dinámica que él mismo había sido de los primeros en documentar y denunciar por escrito — casi un siglo antes de que ese mismo reino, ya desestabilizado, siguiera siendo fuente de cautivos como el propio Benkos Biohó, el rey congolés que décadas después fundaría San Basilio de Palenque.",
    descriptionHtml:
      'Nzinga Mbemba nace hacia 1456 en el <button type="button" class="timeline-detail-geolink" data-country="Congo">Reino de Kongo</button>, un extenso y sofisticado estado centroafricano que hoy correspondería a partes de Angola, la República Democrática del Congo y la República del Congo. En 1483, poco después de que el navegante portugués Diogo Cão llegara a la desembocadura del río Congo, Portugal establece relaciones diplomáticas con la corte de <button type="button" class="timeline-detail-geolink" data-region="Mbanza Kongo" data-country="Congo">Mbanza Kongo</button>, la capital del reino. En julio de 1491, Nzinga Mbemba se bautiza como cristiano y adopta el nombre de Afonso, en honor al entonces príncipe heredero de <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button>. En 1509, tras derrotar a su medio hermano Mpanzu a Kitima en una batalla decisiva por la sucesión, se convierte en el rey Afonso I. Lejos de imaginar una relación colonial, Afonso concibe una alianza cristiana entre iguales: manda construir iglesias, promueve la educación religiosa y envía a jóvenes nobles del reino a estudiar a Portugal — entre ellos a su propio hijo Henrique, quien en 1518 se convierte en el primer obispo católico del África subsahariana. Pero la alianza se resquebraja a medida que crece la demanda portuguesa de mano de obra esclavizada. A partir de 1526, Afonso escribe una serie de veinticuatro cartas al rey João III de Portugal denunciando que comerciantes portugueses secuestraban súbditos libres, nobles y hasta parientes de la propia corte real, más allá de cualquier trata legítima de cautivos de guerra que él mismo toleraba. \'Cada día los mercaderes se llevan a nuestra gente, hijos de la tierra e hijos de nuestros nobles y vasallos\', escribe en una de sus cartas más citadas, advirtiendo que el reino se estaba despoblando. Le pide a João III que prohíba a sus comerciantes traer más mercancías destinadas a comprar personas, pues era su voluntad que en su reino no hubiera trata de esclavos ni salida alguna para ellos. Portugal ignora sus súplicas: el comercio continúa y se expande. Afonso muere en 1542 o 1543, todavía rey, sin haber logrado revertir la dinámica que él mismo había sido de los primeros en documentar y denunciar por escrito — casi un siglo antes de que ese mismo reino, ya desestabilizado, siguiera siendo fuente de cautivos como el propio <button type="button" class="timeline-detail-entrylink" data-id="legado-trata-transatlantica-1442">Benkos Biohó, el rey congolés que décadas después fundaría San Basilio de Palenque</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el rey João III de Portugal hubiera atendido las cartas de Afonso I y detenido el comercio de esclavos en Kongo en 1526?",
      answer:
        "El Reino de Kongo probablemente habría conservado su soberanía y su población varias generaciones más, y la alianza cristiana que Afonso imaginó —de igual a igual, no de metrópoli a colonia— podría haber sobrevivido como modelo para otros reinos africanos. Pero la demanda de mano de obra esclavizada en las plantaciones americanas, ya en expansión, probablemente se habría desplazado hacia otras costas africanas de todos modos: las cartas de Afonso son un testimonio extraordinario, pero llegaron a una corona portuguesa para la que el comercio humano ya era demasiado rentable como para detenerlo por la súplica de un solo aliado, por cristiano que fuera."
    }
  },
  {
    id: "hatuey-cuba-1512",
    year: 1512,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Inserted into the pre-existing, tightly packed
    // 1500-1559 chain in its correct chronological slot (between
    // sergas-esplandian-california-1510 and
    // magallanes-circunnavegacion-1519) by re-spacing every entry from
    // afonso-i-kongo-nzinga-mbemba-1509 through monja-alferez-erauso-1592
    // slightly tighter again — see those entries' own trackYear comments
    // for their part of this second re-spacing.
    trackYear: 1519.02,
    title: "1512: la ejecución de Hatuey",
    author: "Hatuey",
    country: "Cuba",
    region: "Yara",
    type: ICON_TYPE.CONFLICT,
    description:
      "Hatuey, cacique taíno de la región de Xaragua, en La Española, escapa en 1503 de la matanza que el gobernador Nicolás de Ovando ordena contra decenas de caciques desarmados —entre ellos la cacica Anacaona—, y pasa casi una década liderando la resistencia armada contra los colonizadores españoles en la isla. En 1511, al enterarse de que Diego Velázquez de Cuéllar se prepara para invadir Cuba, cruza el paso de los Vientos en canoa junto a unos cuatrocientos seguidores para advertir a los taínos cubanos sobre lo que les espera y organizar una resistencia conjunta. Durante meses libra una guerra de guerrillas contra las fuerzas de Velázquez, hasta que es capturado y condenado a morir en la hoguera. El 2 de febrero de 1512, momentos antes de la ejecución en Yara, cerca de Bayamo, un fraile le ofrece el bautismo cristiano y la promesa del cielo. Hatuey pregunta si los españoles también van al cielo; al escuchar que sí, responde que prefiere el infierno antes que pasar la eternidad junto a gente tan cruel. El episodio, registrado décadas después por fray Bartolomé de las Casas en su Brevísima relación de la destrucción de las Indias, se convertiría en uno de los actos de resistencia indígena más citados de la conquista americana, y hoy Hatuey es honrado en Cuba como su primer héroe nacional.",
    descriptionHtml:
      'Hatuey, cacique taíno de la región de Xaragua, en La Española, escapa en 1503 de la matanza que el gobernador Nicolás de Ovando ordena contra decenas de caciques desarmados —entre ellos la cacica Anacaona—, y pasa casi una década liderando la resistencia armada contra los colonizadores españoles en la isla. En 1511, al enterarse de que Diego Velázquez de Cuéllar se prepara para invadir <button type="button" class="timeline-detail-geolink" data-country="Cuba">Cuba</button>, cruza el paso de los Vientos en canoa junto a unos cuatrocientos seguidores para advertir a los taínos cubanos sobre lo que les espera y organizar una resistencia conjunta. Durante meses libra una guerra de guerrillas contra las fuerzas de Velázquez, hasta que es capturado y condenado a morir en la hoguera. El 2 de febrero de 1512, momentos antes de la ejecución en <button type="button" class="timeline-detail-geolink" data-region="Yara" data-country="Cuba">Yara</button>, cerca de Bayamo, un fraile le ofrece el bautismo cristiano y la promesa del cielo. Hatuey pregunta si los españoles también van al cielo; al escuchar que sí, responde que prefiere el infierno antes que pasar la eternidad junto a gente tan cruel. El episodio, registrado décadas después por fray <button type="button" class="timeline-detail-entrylink" data-id="brevisima-relacion-1542">Bartolomé de las Casas en su Brevísima relación de la destrucción de las Indias</button>, se convertiría en uno de los actos de resistencia indígena más citados de la conquista americana, y hoy Hatuey es honrado en Cuba como su primer héroe nacional.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bartolomé de las Casas nunca hubiera registrado por escrito las palabras de Hatuey?",
      answer:
        "El episodio bien pudo haberse perdido como tantos otros actos de resistencia indígena que solo sobrevivieron en la memoria oral de comunidades diezmadas por la conquista, sin cronista español dispuesto a registrarlos. La frase de Hatuey se convirtió en argumento contra la propia colonización solo porque un fraile crítico de la Corona decidió preservarla por escrito décadas después — la misma paradoja que atraviesa buena parte de lo que hoy sabemos sobre la resistencia taína: nos llega casi siempre filtrada por la pluma de sus verdugos o de sus críticos internos, rara vez por la propia voz indígena."
    }
  },
  {
    id: "maquiavelo-principe-1513",
    year: 1513,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Inserted into the pre-existing, tightly packed
    // 1492-1592 chain in its correct chronological slot (between
    // hatuey-cuba-1512 and magallanes-circunnavegacion-1519) by
    // re-spacing every entry from magallanes-circunnavegacion-1519
    // through popol-vuh-1554/lazarillo slightly tighter, keeping both
    // hatuey-cuba-1512 and the fixed right anchor
    // monja-alferez-erauso-1592 untouched. See those entries' own
    // trackYear comments for their part of this re-spacing.
    trackYear: 1523.06,
    pubYear: 1532,
    title: "El Príncipe",
    author: "Nicolás Maquiavelo",
    country: "Italia",
    region: "Florencia",
    type: ICON_TYPE.LITERATURE,
    description:
      "En 1513, recién apartado del poder y encarcelado brevemente tras el regreso de los Médici a Florencia ese mismo año, el diplomático y funcionario florentino Nicolás Maquiavelo escribe El Príncipe, un breve tratado de teoría política que rompe con la tradición medieval de los 'espejos de príncipes' —manuales que enseñaban a gobernar según la virtud cristiana— para describir el poder tal como realmente se ejerce: con amoralidad calculada, engaño, violencia selectiva y el interés propio disfrazado de razón de Estado. Maquiavelo toma como modelo el gobierno que Lorenzo de Médici había ejercido sobre Florencia durante más de dos décadas, y sobre todo la despiadada campaña de César Borgia por dominar el norte de Italia entre 1499 y 1503, a quien había observado de cerca como enviado diplomático de la república florentina. Dedica la obra, sin éxito, a Lorenzo di Piero de Médici —nieto del Magnífico— con la esperanza de recuperar un puesto en el nuevo gobierno mediceo. El Príncipe circula primero en manuscrito y no se publica hasta 1532, cinco años después de la muerte de su autor; se convertiría en uno de los textos fundacionales de la ciencia política moderna, y su propio nombre daría origen al adjetivo 'maquiavélico'.",
    descriptionHtml:
      'En 1513, recién apartado del poder y encarcelado brevemente tras el regreso de los Médici a <button type="button" class="timeline-detail-geolink" data-region="Florencia" data-country="Italia">Florencia</button> ese mismo año, el diplomático y funcionario florentino Nicolás Maquiavelo escribe El Príncipe, un breve tratado de teoría política que rompe con la tradición medieval de los \'espejos de príncipes\' —manuales que enseñaban a gobernar según la virtud cristiana— para describir el poder tal como realmente se ejerce: con amoralidad calculada, engaño, violencia selectiva y el interés propio disfrazado de razón de Estado. Maquiavelo toma como modelo el gobierno que <button type="button" class="timeline-detail-entrylink" data-id="muerte-lorenzo-medici-1492">Lorenzo de Médici</button> había ejercido sobre Florencia durante más de dos décadas, y sobre todo la despiadada campaña de César Borgia por dominar el norte de Italia entre 1499 y 1503, a quien había observado de cerca como enviado diplomático de la república florentina. Dedica la obra, sin éxito, a Lorenzo di Piero de Médici —nieto del Magnífico— con la esperanza de recuperar un puesto en el nuevo gobierno mediceo. El Príncipe circula primero en manuscrito y no se publica hasta 1532, cinco años después de la muerte de su autor; se convertiría en uno de los textos fundacionales de la ciencia política moderna, y su propio nombre daría origen al adjetivo \'maquiavélico\'.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si los Médici nunca hubieran apartado a Maquiavelo del poder en 1512?",
      answer:
        "Maquiavelo probablemente habría seguido su carrera como diplomático y funcionario de la república florentina, sin el tiempo forzado ni la necesidad de congraciarse con el nuevo régimen que lo llevaron a escribir El Príncipe. Uno de los textos más influyentes de la teoría política occidental —y el origen mismo de la palabra 'maquiavélico'— nació, en buena medida, del intento fallido de un funcionario caído en desgracia por recuperar su puesto."
    }
  },
  {
    id: "popol-vuh-1554",
    year: 1554,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509 — stays paired with lazarillo.
    // Re-spaced again to make room for maquiavelo-principe-1513, see that
    // entry's trackYear comment.
    trackYear: 1563.44,
    title: "Popol Vuh",
    author: "Anónimo k'iche'",
    country: "Guatemala",
    type: ICON_TYPE.LITERATURE,
    description:
      "Texto sagrado de los k'iche' que narra la creación del mundo, las aventuras de los Héroes Gemelos Hunahpú e Ixbalanqué en el inframundo de Xibalbá, y las genealogías de los gobernantes k'iche'. Su contenido proviene de una tradición oral y pictórica mucho más antigua, pero la única fecha firme que se conserva es la de su transcripción al alfabeto latino, hacia 1554, obra de nobles k'iche' anónimos ya bajo dominio colonial.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si los nobles k'iche' nunca hubieran transcrito el Popol Vuh al alfabeto latino?",
      answer:
        "La cosmogonía k'iche' —los Héroes Gemelos, Xibalbá, la creación del mundo— habría sobrevivido, si acaso, en fragmentos orales dispersos, vulnerables al olvido bajo el peso de la colonización. En vez de un texto fundacional que hoy se lee junto a cualquier canon literario americano, tendríamos apenas ecos."
    }
  },
  {
    id: "lazarillo",
    year: 1554,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509 — stays paired with popol-vuh-1554.
    // Re-spaced again to make room for maquiavelo-principe-1513, see that
    // entry's trackYear comment.
    trackYear: 1563.44,
    title: "Lazarillo de Tormes",
    author: "Anónimo",
    country: "España",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Novela picaresca anónima fundacional. Incluida como antecedente formal de la picaresca que después cruzaría el Atlántico.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si el autor del Lazarillo hubiera firmado su obra?",
      answer:
        "El anonimato —probablemente una protección ante la censura inquisitorial— es parte de lo que hace del Lazarillo un texto tan subversivo: nadie podía ser castigado por retratar el hambre, la hipocresía clerical y la sobrevivencia picaresca desde dentro. Con autor conocido, la obra probablemente habría sido más comedida, o directamente prohibida."
    }
  },
  {
    id: "monja-alferez-erauso-1592",
    year: 1592,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. 1592/1595/1599 chain-clustered together.
    trackYear: 1559.4,
    endYear: 1650,
    pubYear: 1829,
    title: "Historia de la Monja Alférez",
    author: "Catalina de Erauso",
    country: "Chile",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.LITERATURE,
    description:
      "La autobiografía de Catalina de Erauso, una monja vasca que escapó de su convento a los quince años, se vistió de hombre y cruzó el Atlántico para reinventarse como soldado en las guerras de conquista de Chile y Perú. Mantuvo su identidad oculta durante casi dos décadas, hasta que el Papa mismo le concedió permiso para vivir vestida de hombre el resto de su vida; murió en 1650 cerca de Veracruz, dirigiendo una recua de mulas bajo el nombre de Antonio de Erauso. El manuscrito de sus memorias no se publicó hasta 1829.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Catalina de Erauso hubiera sido descubierta antes, en sus primeros años como soldado?",
      answer:
        "Sin las décadas de vida vivida como Antonio de Erauso, no habría historia que contar —ni la audiencia papal que, sorprendentemente, le concedió permiso de seguir vistiendo de hombre. Su autobiografía sigue siendo notable porque logró sostener esa identidad el tiempo suficiente para convertirla en una vida entera, no un episodio."
    }
  },
  {
    id: "comentarios-reales-incas-1609",
    year: 1609,
    endYear: 1617,
    title: "1609–1617: las dos partes de los Comentarios reales",
    author: "Inca Garcilaso de la Vega",
    country: "Perú",
    region: "Cusco",
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "Publicada en Lisboa en 1609, la primera parte de los Comentarios reales reconstruyó historia, religión, leyes y memoria oral del mundo inca desde la doble formación del Inca Garcilaso, nacido en Cusco y radicado en Córdoba. La conquista y las guerras civiles del Perú pertenecen a la segunda parte, editada póstumamente en 1617 como Historia general del Perú. Ese mismo 1609 comenzó la expulsión de los moriscos de España. La coincidencia enlaza dos movimientos del mundo hispánico: mientras la Monarquía perseguía uniformidad religiosa en la península, una voz mestiza preservaba en imprenta la memoria andina.",
    descriptionHtml:
      "Publicada en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Lisboa\" data-country=\"Portugal\">Lisboa</button> en 1609, la primera parte de los Comentarios reales reconstruyó historia, religión, leyes y memoria oral del mundo inca desde la doble formación del Inca Garcilaso, nacido en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Cusco\" data-country=\"Perú\">Cusco</button> y radicado en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Córdoba\" data-country=\"España\">Córdoba</button>. La conquista y las guerras civiles del <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Perú\">Perú</button> pertenecen a la segunda parte, editada póstumamente en 1617 como Historia general del Perú. Ese mismo 1609 <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"alpujarras-expulsion-moriscos-1568\">comenzó la expulsión de los moriscos</button> de <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"España\">España</button>. La coincidencia enlaza dos movimientos del mundo hispánico: mientras la Monarquía perseguía uniformidad religiosa en la <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Península ibérica\" data-country=\"España\">península</button>, una voz mestiza preservaba en imprenta la memoria andina.",
    butterfly: {
      prompt: "¿Qué se pierde al confundir las dos partes de la obra?",
      answer:
        "Se borra su arquitectura histórica. La primera parte organiza memoria, instituciones y tradiciones incas; la segunda narra conquista y guerras civiles. Distinguir 1609 de 1617 permite ver cómo Garcilaso construyó su relato en dos movimientos y cómo la publicación póstuma completó un proyecto mestizo de larga duración."
    }
  },

  {
    id: "nzinga-ndongo-matamba-1622",
    year: 1622,
    endYear: 1663,
    title: "Nzinga de Ndongo y Matamba",
    author: "Nzinga Mbande (Ana de Sousa)",
    country: "Angola",
    region: "Luanda",
    type: ICON_TYPE.CONFLICT,
    description:
      "Nzinga Mbande nace hacia 1583 en el reino de Ndongo, en el territorio de la actual Angola, hija del ngola (rey) Kiluanji kia Samba. Para cuando llega a la edad adulta, la expansión portuguesa en Angola —impulsada por la creciente demanda de mano de obra esclavizada para las plantaciones azucareras de Brasil— presiona militar y políticamente al reino, un siglo después de que el rey Afonso I de Kongo hubiera denunciado, sin éxito, la misma dinámica en el vecino reino al norte. En 1622, su hermano el rey Ngola Mbande la envía a Luanda a negociar con el gobernador portugués João Correia de Sousa. Según la tradición, los portugueses preparan la sala con una sola silla, dejando a Nzinga de pie durante la reunión para subrayar su inferioridad frente al gobernador sentado; ella ordena entonces a uno de sus sirvientes que se ponga a cuatro patas y se sienta sobre su espalda, quedando así a la misma altura que su interlocutor. El gesto —exacto en sus detalles o no— funciona: Nzinga negocia un tratado que reconoce la soberanía de Ndongo, a cambio de su propio bautismo cristiano bajo el nombre de Ana de Sousa. En 1624, tras la muerte de su hermano en circunstancias nunca aclaradas, Nzinga asume el trono de Ndongo, y en 1631 extiende su autoridad al vecino reino de Matamba. Durante las tres décadas siguientes combina, según lo exige cada momento, la diplomacia y la guerra: negocia con Portugal, lo combate militarmente, se alía con los neerlandeses —rivales de los portugueses en la región— y ayuda a esos aliados a tomar Luanda en 1641, reubica su corte cuando la situación lo obliga, y explota cada rivalidad europea disponible para preservar la soberanía de su pueblo. La realidad, sin embargo, es más compleja que el mito de resistencia pura: el propio reino de Nzinga participa de la trata regional de cautivos, y buena parte de los prisioneros capturados en sus guerras terminan, igual que bajo cualquier otro poder de la región, en los mercados atlánticos. En 1656, ya con más de setenta años, firma finalmente la paz con Portugal, que reconoce su gobierno sobre Matamba. Muere el 17 de diciembre de 1663, y sigue siendo hoy, en Angola y más allá, un símbolo nacional de resistencia y soberanía frente al colonialismo europeo.",
    descriptionHtml:
      'Nzinga Mbande nace hacia 1583 en el reino de Ndongo, en el territorio de la actual <button type="button" class="timeline-detail-geolink" data-country="Angola">Angola</button>, hija del ngola (rey) Kiluanji kia Samba. Para cuando llega a la edad adulta, la expansión portuguesa en Angola —impulsada por la creciente demanda de mano de obra esclavizada para las plantaciones azucareras de Brasil— presiona militar y políticamente al reino, un siglo después de que el rey <button type="button" class="timeline-detail-entrylink" data-id="afonso-i-kongo-nzinga-mbemba-1509">Afonso I de Kongo</button> hubiera denunciado, sin éxito, la misma dinámica en el vecino reino al norte. En 1622, su hermano el rey Ngola Mbande la envía a <button type="button" class="timeline-detail-geolink" data-region="Luanda" data-country="Angola">Luanda</button> a negociar con el gobernador portugués João Correia de Sousa. Según la tradición, los portugueses preparan la sala con una sola silla, dejando a Nzinga de pie durante la reunión para subrayar su inferioridad frente al gobernador sentado; ella ordena entonces a uno de sus sirvientes que se ponga a cuatro patas y se sienta sobre su espalda, quedando así a la misma altura que su interlocutor. El gesto —exacto en sus detalles o no— funciona: Nzinga negocia un tratado que reconoce la soberanía de Ndongo, a cambio de su propio bautismo cristiano bajo el nombre de Ana de Sousa. En 1624, tras la muerte de su hermano en circunstancias nunca aclaradas, Nzinga asume el trono de Ndongo, y en 1631 extiende su autoridad al vecino reino de Matamba. Durante las tres décadas siguientes combina, según lo exige cada momento, la diplomacia y la guerra: negocia con Portugal, lo combate militarmente, se alía con los neerlandeses —rivales de los portugueses en la región— y ayuda a esos aliados a tomar <button type="button" class="timeline-detail-geolink" data-region="Luanda" data-country="Angola">Luanda</button> en 1641, reubica su corte cuando la situación lo obliga, y explota cada rivalidad europea disponible para preservar la soberanía de su pueblo. La realidad, sin embargo, es más compleja que el mito de resistencia pura: el propio reino de Nzinga participa de la trata regional de cautivos, y buena parte de los prisioneros capturados en sus guerras terminan, igual que bajo cualquier otro poder de la región, en los mercados atlánticos. En 1656, ya con más de setenta años, firma finalmente la paz con Portugal, que reconoce su gobierno sobre Matamba. Muere el 17 de diciembre de 1663, y sigue siendo hoy, en Angola y más allá, un símbolo nacional de resistencia y soberanía frente al colonialismo europeo.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Nzinga no se hubiera aliado con los neerlandeses en la toma de Luanda en 1641?",
      answer:
        "Sin el apoyo militar neerlandés, es poco probable que Ndongo y Matamba hubieran logrado expulsar a Portugal de su principal base angoleña, aunque fuera solo temporalmente, entre 1641 y 1648. Nzinga habría tenido que negociar desde una posición mucho más débil, probablemente aceptando términos de vasallaje más duros años antes de 1656 — y el propio imperio neerlandés, que también comerciaba con personas esclavizadas, habría encontrado en ella una aliada conveniente de todos modos, solo que en otro momento y bajo otras condiciones."
    }
  },

  {
    id: "el-burlador-de-sevilla-1630",
    year: 1630,
    title: "1630: El burlador de Sevilla y convidado de piedra",
    author: "Tirso de Molina",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "Publicado en 1630 y atribuido a Tirso de Molina, El burlador de Sevilla fijó la primera gran versión teatral de Don Juan. El noble engaña a Isabela en Nápoles, Tisbea en Tarragona, Ana en Sevilla y Aminta en Dos Hermanas, confiado en que podrá arrepentirse después. Al matar al comendador Gonzalo de Ulloa, desafía también la justicia divina: la estatua del muerto acepta su invitación y lo arrastra al infierno. La trama convierte honor, desigualdad sexual y libre albedrío en espectáculo barroco, dentro de la cultura moral de la Contrarreforma que quiso disciplinar el deseo.",
    descriptionHtml:
      "Publicado en 1630 y atribuido a Tirso de Molina, El burlador de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sevilla\" data-country=\"España\">Sevilla</button> fijó la primera gran versión teatral de Don Juan. El noble engaña a Isabela en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Nápoles\" data-country=\"Italia\">Nápoles</button>, Tisbea en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Tarragona\" data-country=\"España\">Tarragona</button>, Ana en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sevilla\" data-country=\"España\">Sevilla</button> y Aminta en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Dos Hermanas\" data-country=\"España\">Dos Hermanas</button>, confiado en que podrá arrepentirse después. Al matar al comendador Gonzalo de Ulloa, desafía también la justicia divina: la estatua del muerto acepta su invitación y lo arrastra al infierno. La trama convierte honor, desigualdad sexual y libre albedrío en espectáculo barroco, dentro de la cultura moral de la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"reforma-jesuitas-trento-1517\">Contrarreforma</button> que quiso disciplinar el deseo.",
    butterfly: {
      prompt: "¿Por qué Don Juan necesita creer que el arrepentimiento puede esperar?",
      answer:
        "Su libertad depende de convertir el tiempo en excusa: cada abuso parece provisional mientras imagine una confesión futura. La estatua rompe esa ilusión y hace llegar de golpe la consecuencia aplazada. Esa estructura permitió que el personaje sobreviviera como mito mucho más allá del teatro barroco español."
    }
  },

  // ---- RENACIMIENTO Y MONARQUÍA HISPÁNICA ----
  {
    id: "carlos-i-comunidades-villalar-1516",
    year: 1516,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1527.1,
    endYear: 1522,
    title: "1516–1522: Carlos I y la resistencia de las Comunidades",
    author: "Carlos I, Juana I y las Comunidades",
    country: "España",
    region: "Villalar de los Comuneros",
    flag: "spain-not-latam",
    type: ICON_TYPE.ROYAL,
    types: [ICON_TYPE.ROYAL, ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "En 1516, Carlos de Habsburgo se proclamó rey junto con su madre Juana, reina legal de Castilla; nacido en Gante, llegó desde los Países Bajos en 1517. Elegido emperador en 1519, reunió territorios con leyes propias mientras Castilla financiaba su política imperial europea. Ciudades comuneras cuestionaron impuestos, consejeros extranjeros y el gobierno sin consulta. El 23 de abril de 1521, el ejército real las derrotó en Villalar y ejecutó al día siguiente a Padilla, Bravo y Maldonado. La derrota fortaleció a la Corona y la nobleza; Toledo, con María Pacheco, resistió hasta febrero de 1522.",
    descriptionHtml:
      "En 1516, Carlos de Habsburgo se proclamó rey junto con su madre Juana, reina legal de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button>; nacido en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Gante\" data-country=\"Bélgica\">Gante</button>, llegó desde los <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Países Bajos borgoñones\" data-country=\"Bélgica\">Países Bajos</button> en 1517. Elegido emperador en 1519, reunió territorios con leyes propias mientras <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button> financiaba su política imperial europea. Ciudades comuneras cuestionaron impuestos, consejeros extranjeros y el gobierno sin consulta. El 23 de abril de 1521, el ejército real las derrotó en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Villalar de los Comuneros\" data-country=\"España\">Villalar</button> y ejecutó al día siguiente a Padilla, Bravo y Maldonado. La derrota fortaleció a la Corona y la nobleza; <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Toledo\" data-country=\"España\">Toledo</button>, con María Pacheco, resistió hasta febrero de 1522.",
    butterfly: {
      prompt: "¿Qué reclamaban las Comunidades además de rechazar consejeros extranjeros?",
      answer:
        "Defendían una participación política mayor de las ciudades, límites fiscales y una relación distinta entre rey, Cortes y reino. Villalar no cerró todo de inmediato: Toledo resistió con María Pacheco hasta 1522. La derrota redujo el margen urbano y dejó a Castilla sosteniendo gran parte del proyecto imperial."
    }
  },
  {
    id: "reforma-jesuitas-trento-1517",
    year: 1517,
    month: 10,
    day: 31,
    endYear: 1563,
    title: "1517–1563: Reforma, jesuitas y Concilio de Trento",
    author: "Martín Lutero, Ignacio de Loyola y el Concilio de Trento",
    country: "España",
    region: "Trento",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.LITERATURE],
    description:
      "El 31 de octubre de 1517, Martín Lutero hizo públicas en Wittenberg sus noventa y cinco tesis contra las indulgencias; la imprenta amplificó una disputa que fracturó la cristiandad occidental. En 1540, Pablo III aprobó en Roma la Compañía de Jesús, dirigida por Ignacio de Loyola. El Concilio de Trento sesionó entre 1545 y 1563: reafirmó doctrina católica, reformó disciplina clerical y reguló la enseñanza religiosa. En España, esta Reforma católica atravesó colegios, misiones, censura, pintura y teatro. Permite leer a El Greco y Tirso dentro de una transformación europea profunda, no como fenómenos aislados.",
    descriptionHtml:
      "El 31 de octubre de 1517, Martín Lutero hizo públicas en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Wittenberg\" data-country=\"Alemania\">Wittenberg</button> sus noventa y cinco tesis contra las indulgencias; la imprenta amplificó una disputa que fracturó la cristiandad occidental. En 1540, Pablo III aprobó en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Roma\" data-country=\"Italia\">Roma</button> la Compañía de Jesús, dirigida por <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Loyola\" data-country=\"España\">Ignacio de Loyola</button>. El Concilio de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Trento\" data-country=\"Italia\">Trento</button> sesionó entre 1545 y 1563: reafirmó doctrina católica, reformó disciplina clerical y reguló la enseñanza religiosa. En <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"España\">España</button>, esta Reforma católica atravesó colegios, misiones, censura, pintura y teatro. Permite leer a <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"el-greco-1541\">El Greco</button> y <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"el-burlador-de-sevilla-1630\">Tirso</button> dentro de una transformación europea profunda, no como fenómenos aislados.",
    butterfly: {
      prompt: "¿Fundó el Concilio de Trento a los jesuitas?",
      answer:
        "No. Pablo III aprobó la Compañía de Jesús en 1540, cinco años antes de que comenzara el concilio. Ambos procesos convergieron después en la Reforma católica: Trento definió doctrina y disciplina; los jesuitas extendieron educación, misión y redes intelectuales por varios continentes."
    }
  },
  {
    id: "licencia-trata-directa-1518",
    year: 1518,
    month: 8,
    day: 18,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1531.13,
    title: "18 de agosto de 1518: licencia para la trata directa hacia América",
    author: "Carlos I y Lorenzo de Gorrevod",
    country: "España",
    region: "Zaragoza",
    type: ICON_TYPE.ECHO,
    types: [ICON_TYPE.ECHO, ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "El 18 de agosto de 1518, desde Zaragoza, Carlos I autorizó por decreto al cortesano Lorenzo de Gorrevod a transportar hasta 4.000 africanos esclavizados directamente hacia las Indias castellanas. Gorrevod revendió el privilegio a mercaderes genoveses vinculados con Sevilla. La esclavitud africana ya existía en el Caribe, pero la licencia amplió su escala y abrió una ruta autorizada entre África y América sin desembarcar primero en Europa. La Corona convirtió personas cautivas en cupos fiscales y mercancía imperial. El punto conecta Lagos, La Española y las posteriores denuncias de Las Casas contra la violencia conquistadora.",
    descriptionHtml:
      "El 18 de agosto de 1518, desde <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Zaragoza\" data-country=\"España\">Zaragoza</button>, Carlos I autorizó por decreto al cortesano Lorenzo de Gorrevod a transportar hasta 4.000 africanos esclavizados directamente hacia las <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"América española\">Indias castellanas</button>. Gorrevod revendió el privilegio a mercaderes genoveses vinculados con <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sevilla\" data-country=\"España\">Sevilla</button>. La esclavitud africana ya existía en el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Caribe\">Caribe</button>, pero la licencia amplió su escala y abrió una ruta autorizada entre <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"África\">África</button> y <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"América española\">América</button> sin desembarcar primero en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Europa\">Europa</button>. La Corona convirtió personas cautivas en cupos fiscales y mercancía imperial. El punto conecta <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Lagos\" data-country=\"Portugal\">Lagos</button>, <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"La Española\" data-country=\"República Dominicana\">La Española</button> y las posteriores denuncias de <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"brevisima-relacion-1542\">Las Casas</button> contra la violencia conquistadora.",
    butterfly: {
      prompt: "¿Comenzó la esclavitud africana en América con esta licencia?",
      answer:
        "No. Ya había africanos libres y esclavizados en el Caribe. La concesión importa porque autorizó hasta 4.000 traslados directos y amplió la escala comercial bajo control real. Conecta los precedentes portugueses, los intermediarios europeos y las economías coloniales en un sistema cada vez más integrado."
    }
  },
  {
    id: "finanzas-imperiales-plata-1557",
    year: 1557,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1567.48,
    endYear: 1596,
    title: "1557–1596: plata, crédito y suspensiones de pagos",
    author: "Felipe II y los financieros de la Monarquía",
    country: "España",
    region: "Sevilla",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "En 1557, Felipe II suspendió pagos de la Corona a sus acreedores; nuevas reestructuraciones siguieron en 1575 y 1596. No eran quiebras modernas ni significaban una España sin riqueza: mostraban el choque entre ingresos irregulares y guerras costosísimas. La plata americana, especialmente la llegada desde Potosí, sostuvo ejércitos y crédito, pero también amplió la moneda en circulación junto con otros factores de la llamada revolución de los precios. Castilla soportó impuestos crecientes, mientras banqueros genoveses renegociaban la deuda. El imperio más extenso de Europa podía movilizar tesoros globales y, aun así, carecer de liquidez inmediata.",
    descriptionHtml:
      "En 1557, Felipe II suspendió pagos de la Corona a sus acreedores; nuevas reestructuraciones siguieron en 1575 y 1596. No eran quiebras modernas ni significaban una <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"España\">España</button> sin riqueza: mostraban el choque entre ingresos irregulares y guerras costosísimas. La plata americana, especialmente la llegada desde <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Potosí\" data-country=\"Bolivia\">Potosí</button>, sostuvo ejércitos y crédito, pero también amplió la moneda en circulación junto con otros factores de la llamada revolución de los precios. <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button> soportó impuestos crecientes, mientras <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Génova\" data-country=\"Italia\">banqueros genoveses</button> renegociaban la deuda. El imperio más extenso de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Europa\">Europa</button> podía movilizar tesoros globales y, aun así, carecer de liquidez inmediata.",
    butterfly: {
      prompt: "¿Cómo podía una monarquía rica en plata quedarse sin dinero disponible?",
      answer:
        "Los metales llegaban en momentos irregulares, mientras ejércitos, flotas e intereses exigían pagos continuos en lugares distantes. La Corona anticipaba ingresos mediante crédito y renegociaba cuando vencían demasiadas obligaciones. Riqueza, solvencia y liquidez no eran lo mismo; la escala imperial podía multiplicar recursos y deudas simultáneamente."
    }
  },
  {
    id: "madrid-escorial-felipe-ii-1561",
    year: 1561,
    endYear: 1584,
    title: "1561–1584: Madrid y El Escorial organizan el poder",
    author: "Felipe II y Juan Bautista de Toledo",
    country: "España",
    region: "San Lorenzo de El Escorial",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "En 1561, Felipe II fijó su corte en Madrid, transformando una villa central en capital política de una monarquía extendida por varios continentes. Dos años después colocó la primera piedra de San Lorenzo de El Escorial; la última llegó en 1584. El complejo reunía palacio, monasterio jerónimo, basílica, panteón, colegio, seminario y biblioteca. Gobierno, dinastía, saber y religión compartían arquitectura. Madrid concentró archivos, funcionarios y decisiones; El Escorial convirtió el programa de los Habsburgo en piedra. Juntos explican cómo el espacio organizó el poder y cómo la Corona quiso representarse ante sus súbditos en Europa.",
    descriptionHtml:
      "En 1561, Felipe II fijó su corte en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Madrid\" data-country=\"España\">Madrid</button>, transformando una villa central en capital política de una monarquía extendida por varios continentes. Dos años después colocó la primera piedra de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"San Lorenzo de El Escorial\" data-country=\"España\">San Lorenzo de El Escorial</button>; la última llegó en 1584. El complejo reunía palacio, monasterio jerónimo, basílica, panteón, colegio, seminario y biblioteca. Gobierno, dinastía, saber y religión compartían arquitectura. <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Madrid\" data-country=\"España\">Madrid</button> concentró archivos, funcionarios y decisiones; <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"San Lorenzo de El Escorial\" data-country=\"España\">El Escorial</button> convirtió el <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"carlos-i-comunidades-villalar-1516\">programa de los Habsburgo</button> en piedra. Juntos explican cómo el espacio organizó el poder y cómo la Corona quiso representarse ante sus súbditos en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Europa\">Europa</button>.",
    butterfly: {
      prompt: "¿Era El Escorial solamente un palacio real?",
      answer:
        "No. Reunía residencia, monasterio, basílica, panteón, biblioteca, colegio y seminario. Esa mezcla materializó una monarquía que quería gobernar, conservar saber, perpetuar una dinastía y defender la fe desde un mismo complejo. Madrid y El Escorial funcionaron como dos espacios complementarios del poder de Felipe II."
    }
  },
  {
    id: "alpujarras-expulsion-moriscos-1568",
    year: 1568,
    endYear: 1614,
    title: "1568–1614: de las Alpujarras a la expulsión morisca",
    author: "Felipe II, Felipe III y las comunidades moriscas",
    country: "España",
    region: "Béznar",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.ECHO,
    types: [ICON_TYPE.ECHO, ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "En Nochebuena de 1568, comunidades moriscas se rebelaron en Béznar y las Alpujarras contra una pragmática que perseguía su lengua, vestimenta y costumbres. La guerra, brutal para ambos bandos, terminó en 1571 con muerte, esclavización y dispersión forzada de moriscos granadinos por Castilla. Cuatro décadas después, Felipe III ordenó la expulsión general: comenzó en Valencia en 1609 y continuó por distintos reinos hasta 1614. Unas 300.000 personas fueron obligadas a salir. No fue una partida repentina, sino una política escalonada de homogeneización religiosa, desposesión y desplazamiento que transformó España y el Mediterráneo occidental para siempre.",
    descriptionHtml:
      "En Nochebuena de 1568, comunidades moriscas se rebelaron en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Béznar\" data-country=\"España\">Béznar</button> y <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Las Alpujarras\" data-country=\"España\">las Alpujarras</button> contra una pragmática que perseguía su lengua, vestimenta y costumbres. La guerra, brutal para ambos bandos, terminó en 1571 con muerte, esclavización y dispersión forzada de moriscos granadinos por <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button>. Cuatro décadas después, Felipe III ordenó la expulsión general: comenzó en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Valencia\" data-country=\"España\">Valencia</button> en <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"comentarios-reales-incas-1609\">1609</button> y continuó por distintos reinos hasta 1614. Unas 300.000 personas fueron obligadas a salir. No fue una partida repentina, sino una política escalonada de homogeneización religiosa, desposesión y desplazamiento que transformó <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"España\">España</button> y el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Mediterráneo occidental\">Mediterráneo occidental</button> para siempre.",
    butterfly: {
      prompt: "¿Fue la expulsión de los moriscos un solo decreto ejecutado de inmediato?",
      answer:
        "No. La violencia de las Alpujarras precedió a la expulsión general por cuatro décadas. Desde 1609, los bandos y embarques avanzaron de reino en reino hasta 1614. Leer la secuencia completa muestra una política prolongada de coerción cultural, guerra, dispersión interna y expulsión mediterránea."
    }
  },
  {
    id: "lepanto-armada-1571",
    year: 1571,
    month: 10,
    day: 7,
    endYear: 1588,
    title: "1571–1588: de Lepanto a la Gran Armada",
    author: "Juan de Austria, Miguel de Cervantes y Felipe II",
    country: "Grecia",
    region: "Golfo de Patras",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.LITERATURE],
    description:
      "El 7 de octubre de 1571, la Santa Liga dirigida por Juan de Austria derrotó a la flota otomana en el golfo de Patras, cerca de Lepanto. Miguel de Cervantes combatió allí y perdió el uso de la mano izquierda, no el brazo. La victoria fue enorme, pero los otomanos reconstruyeron pronto su armada. En 1588, Felipe II intentó invadir Inglaterra; temporales, fallos logísticos y ataques ingleses dispersaron la Gran Armada, con la pérdida de decenas de naves. El desastre dañó prestigio y recursos españoles, pero no terminó de inmediato su poder marítimo en Europa.",
    descriptionHtml:
      "El 7 de octubre de 1571, la Santa Liga dirigida por Juan de Austria derrotó a la flota otomana en el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Golfo de Patras\" data-country=\"Grecia\">golfo de Patras</button>, cerca de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Lepanto\" data-country=\"Grecia\">Lepanto</button>. Miguel de Cervantes combatió allí y perdió el uso de la mano izquierda, no el brazo. La victoria fue enorme, pero los otomanos reconstruyeron pronto su armada. En 1588, Felipe II intentó invadir <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Reino Unido\">Inglaterra</button>; temporales, fallos logísticos y ataques ingleses dispersaron la Gran Armada, con la pérdida de decenas de naves. El desastre dañó prestigio y recursos españoles, pero no terminó de inmediato su <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"el-morro-san-juan-1595\">poder marítimo</button> en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Europa\">Europa</button>.",
    butterfly: {
      prompt: "¿Decidieron Lepanto y la Armada por sí solos quién dominaría el mar?",
      answer:
        "No. Lepanto fue una gran victoria de coalición, pero la flota otomana se reconstruyó. La expedición de 1588 fracasó, pero España conservó capacidad naval durante décadas. Ambos episodios importan como cambios militares y como relatos simbólicos que cada potencia utilizó para explicar fe, imperio y destino."
    }
  },
  {
    id: "union-iberica-portugal-1580",
    year: 1580,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1571.52,
    endYear: 1668,
    title: "1580–1668: Unión Ibérica, restauración y reconocimiento",
    author: "Felipe II, João IV y Carlos II",
    country: "Portugal",
    region: "Tomar",
    type: ICON_TYPE.ROYAL,
    types: [ICON_TYPE.ROYAL, ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "En 1580, tras una crisis sucesoria, el ejército de Felipe II venció en Alcântara y el monarca fue reconocido como Felipe I de Portugal en las Cortes de Tomar de 1581. Portugal no fue anexado: compartió soberano con la Monarquía Hispánica, pero conservó leyes, moneda, lengua e instituciones. La presión fiscal y militar alimentó el golpe restaurador del 1 de diciembre de 1640 en Lisboa, que proclamó a João IV. La guerra continuó hasta el Tratado de Lisboa de 1668, cuando Carlos II reconoció formalmente la independencia portuguesa. La unión dinástica había durado sesenta años.",
    descriptionHtml:
      "En 1580, tras una crisis sucesoria, el ejército de Felipe II venció en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Alcântara, Lisboa\" data-country=\"Portugal\">Alcântara</button> y el monarca fue reconocido como Felipe I de <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Portugal\">Portugal</button> en las Cortes de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Tomar\" data-country=\"Portugal\">Tomar</button> de 1581. <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Portugal\">Portugal</button> no fue anexado: compartió soberano con la Monarquía Hispánica, pero conservó leyes, moneda, lengua e instituciones. La presión fiscal y militar alimentó el golpe restaurador del 1 de diciembre de 1640 en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Lisboa\" data-country=\"Portugal\">Lisboa</button>, que proclamó a João IV. La guerra continuó hasta el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Lisboa\" data-country=\"Portugal\">Tratado de Lisboa</button> de 1668, cuando <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"sucesion-espanola-borbones-1700\">Carlos II</button> reconoció formalmente la independencia portuguesa. La unión dinástica había durado sesenta años.",
    butterfly: {
      prompt: "¿Quedó Portugal absorbido legalmente por España en 1580?",
      answer:
        "No. Compartió monarca con los otros reinos de los Habsburgo, pero conservó su administración, leyes, moneda, lengua e imperio. Esa distinción explica tanto el alcance global de la unión como la posibilidad de restaurar una dinastía portuguesa en 1640, antes del reconocimiento español de 1668."
    }
  },

  {
    id: "sucesion-espanola-borbones-1700",
    year: 1700,
    month: 11,
    day: 1,
    endYear: 1714,
    title: "1700–1714: de los Habsburgo a los Borbones",
    author: "Carlos II y Felipe V",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "Carlos II murió sin descendencia el 1 de noviembre de 1700, extinguiendo la rama española de los Habsburgo. Su testamento legó indivisa la monarquía a Felipe de Anjou, nieto de Luis XIV, con la condición de impedir su unión con Francia. Felipe entró en Madrid en 1701 como Felipe V. Sus derechos franceses y la ocupación de fortalezas en los Países Bajos españoles alarmaron a Inglaterra, las Provincias Unidas y Austria, que formaron la Gran Alianza en La Haya. La guerra se generalizó en 1702 y concluyó en 1714, consolidando la dinastía borbónica.",
    descriptionHtml:
      'Carlos II murió sin descendencia el 1 de noviembre de 1700, <button type="button" class="timeline-detail-entrylink" data-id="carlos-i-comunidades-villalar-1516">extinguiendo la rama española de los Habsburgo</button>. Su testamento legó indivisa la monarquía a Felipe de Anjou, nieto de Luis XIV, con la condición de impedir su unión con <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button>. Felipe entró en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> en 1701 como Felipe V. Sus derechos franceses y la ocupación de fortalezas en los <button type="button" class="timeline-detail-geolink" data-region="Países Bajos españoles" data-country="Bélgica">Países Bajos españoles</button> alarmaron a <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Inglaterra</button>, las <button type="button" class="timeline-detail-geolink" data-country="Países Bajos">Provincias Unidas</button> y <button type="button" class="timeline-detail-geolink" data-country="Austria">Austria</button>, que formaron la Gran Alianza en <button type="button" class="timeline-detail-geolink" data-region="La Haya" data-country="Países Bajos">La Haya</button>. La guerra se generalizó en 1702 y concluyó en <button type="button" class="timeline-detail-entrylink" data-id="caida-barcelona-diada-1714">1714</button>, consolidando la dinastía borbónica.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Carlos II hubiera repartido la monarquía entre los aspirantes europeos?",
      answer:
        "Un reparto quizá habría contenido temporalmente la disputa sucesoria, pero habría desmembrado la monarquía que la corte española quiso conservar unida. La llegada de Felipe V vinculó España a la casa de Borbón; la guerra, los tratados de Utrecht y Rastatt y la pérdida de territorios europeos redefinieron después el equilibrio continental."
    }
  },

  {
    id: "toma-gibraltar-1704",
    year: 1704,
    month: 8,
    day: 4,
    title: "4 de agosto de 1704: la toma de Gibraltar",
    author: "George Rooke y la Gran Alianza",
    country: "Reino Unido",
    region: "Gibraltar",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El 4 de agosto de 1704 (24 de julio según el calendario inglés), la flota anglo-neerlandesa de George Rooke tomó Gibraltar tras fracasar ante Barcelona. La plaza, defendida por cientos de hombres al mando de Diego de Salinas, capituló después del bombardeo y desembarco dirigido con Jorge de Hesse-Darmstadt. Fue ocupada nominalmente para Carlos III, pero Inglaterra retuvo el control. La mayoría de habitantes partió; muchos se asentaron en San Roque. El combate de Vélez-Málaga frustró la recuperación borbónica. Utrecht cedió formalmente Gibraltar a Gran Bretaña en 1713, sin mencionar el istmo.",
    descriptionHtml:
      'El 4 de agosto de 1704 (24 de julio según el calendario inglés), la flota anglo-neerlandesa de George Rooke tomó <button type="button" class="timeline-detail-geolink" data-region="Gibraltar" data-country="Reino Unido">Gibraltar</button> tras fracasar ante <button type="button" class="timeline-detail-geolink" data-region="Barcelona" data-country="España">Barcelona</button>. La plaza, defendida por cientos de hombres al mando de Diego de Salinas, capituló después del bombardeo y desembarco dirigido con <button type="button" class="timeline-detail-entrylink" data-id="pacto-genova-caida-barcelona-1705">Jorge de Hesse-Darmstadt</button>. Fue ocupada nominalmente para <button type="button" class="timeline-detail-entrylink" data-id="sucesion-espanola-borbones-1700">Carlos III</button>, pero <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Inglaterra</button> retuvo el control. La mayoría de habitantes partió; muchos se asentaron en <button type="button" class="timeline-detail-geolink" data-region="San Roque" data-country="España">San Roque</button>. El combate de <button type="button" class="timeline-detail-geolink" data-region="Vélez-Málaga" data-country="España">Vélez-Málaga</button> frustró la recuperación borbónica. <button type="button" class="timeline-detail-geolink" data-region="Utrecht" data-country="Países Bajos">Utrecht</button> cedió formalmente Gibraltar a <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Gran Bretaña</button> en 1713, sin mencionar el istmo.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si la flota de Rooke no hubiera tomado Gibraltar en 1704?",
      answer:
        "La Gran Alianza habría regresado de su campaña mediterránea sin una base en la entrada del estrecho, y Gran Bretaña no habría llegado a Utrecht controlando el enclave que España terminó por cederle. El equilibrio naval del Mediterráneo occidental y tres siglos de relaciones anglo-españolas habrían seguido otra trayectoria."
    }
  },

  {
    id: "pacto-genova-caida-barcelona-1705",
    year: 1705,
    month: 6,
    day: 20,
    title: "20 de junio de 1705: el Pacto de Génova",
    author: "Vigatans y aliados austracistas",
    country: "España",
    region: "Barcelona",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El 20 de junio de 1705, Antoni de Peguera y Domènec Perera, autorizados por los Vigatans —no por las instituciones catalanas—, firmaron en Génova un pacto con el enviado inglés Mitford Crowe. Inglaterra prometía tropas y protección de las constituciones catalanas; ellos, una rebelión a favor del archiduque Carlos. La flota aliada desembarcó cerca de Barcelona. Tras tomar Montjuïc, donde murió Jorge de Hesse-Darmstadt, Barcelona capituló el 9 de octubre y Carlos entró el día 22. La alianza convirtió Cataluña en centro austracista y alimentó la memoria del abandono inglés antes de 1714.",
    descriptionHtml:
      'El 20 de junio de 1705, Antoni de Peguera y Domènec Perera, autorizados por los <button type="button" class="timeline-detail-geolink" data-region="Vic" data-country="España">Vigatans</button> —no por las instituciones catalanas—, firmaron en <button type="button" class="timeline-detail-geolink" data-region="Génova" data-country="Italia">Génova</button> un pacto con el enviado inglés Mitford Crowe. <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Inglaterra</button> prometía tropas y protección de las constituciones catalanas; ellos, una rebelión a favor del <button type="button" class="timeline-detail-entrylink" data-id="sucesion-espanola-borbones-1700">archiduque Carlos</button>. La flota aliada desembarcó cerca de <button type="button" class="timeline-detail-geolink" data-region="Barcelona" data-country="España">Barcelona</button>. Tras tomar <button type="button" class="timeline-detail-geolink" data-region="Montjuïc" data-country="España">Montjuïc</button>, donde murió Jorge de Hesse-Darmstadt, Barcelona capituló el 9 de octubre y Carlos entró el día 22. La alianza convirtió <button type="button" class="timeline-detail-geolink" data-region="Cataluña" data-country="España">Cataluña</button> en centro austracista y alimentó la memoria del abandono inglés antes de <button type="button" class="timeline-detail-entrylink" data-id="caida-barcelona-diada-1714">1714</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si los Vigatans no hubieran firmado el Pacto de Génova?",
      answer:
        "Sin el compromiso inglés de desembarcar tropas y proteger las constituciones, la rebelión austracista habría carecido de su principal respaldo militar y diplomático. Barcelona quizá no habría caído en 1705, Cataluña difícilmente se habría convertido en la base peninsular de Carlos y el desenlace de 1714 habría seguido otro camino."
    }
  },

  {
    id: "ocupacion-aliada-madrid-1706",
    year: 1706,
    month: 7,
    day: 2,
    title: "2 de julio de 1706: primera ocupación aliada de Madrid",
    author: "Carlos III y la Gran Alianza",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "Fuerzas anglo-portuguesas del marqués de las Minas y el conde de Galway ocuparon Madrid a finales de junio de 1706, avanzando desde Portugal mientras Carlos llegaba desde Aragón y Valencia. El 2 de julio proclamaron al archiduque como Carlos III, pero encontraron una población castellana fría y fiel a Felipe V. La demora en reunir los ejércitos, el hostigamiento de suministros y la reorganización borbónica hicieron insostenible la capital. Los aliados se retiraron hacia Valencia; Felipe regresó en octubre. La ocupación anticipó el fracaso de 1710: entrar en Madrid no significaba gobernar Castilla.",
    descriptionHtml:
      'Fuerzas anglo-portuguesas del marqués de las Minas y el conde de Galway ocuparon <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> a finales de junio de 1706, avanzando desde <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button> mientras Carlos llegaba desde <button type="button" class="timeline-detail-geolink" data-region="Aragón" data-country="España">Aragón</button> y <button type="button" class="timeline-detail-geolink" data-region="Valencia" data-country="España">Valencia</button>. El 2 de julio proclamaron al archiduque como <button type="button" class="timeline-detail-entrylink" data-id="pacto-genova-caida-barcelona-1705">Carlos III</button>, pero encontraron una población castellana fría y fiel a Felipe V. La demora en reunir los ejércitos, el hostigamiento de suministros y la reorganización borbónica hicieron insostenible la capital. Los aliados se retiraron hacia <button type="button" class="timeline-detail-geolink" data-region="Valencia" data-country="España">Valencia</button>; Felipe regresó en octubre. La ocupación anticipó el <button type="button" class="timeline-detail-entrylink" data-id="segunda-ocupacion-madrid-1710">fracaso de 1710</button>: entrar en Madrid no significaba gobernar <button type="button" class="timeline-detail-geolink" data-region="Castilla" data-country="España">Castilla</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Madrid hubiera reconocido a Carlos III en 1706?",
      answer:
        "Una adhesión castellana habría dado legitimidad, reclutas y suministros a la ocupación, quizá permitiendo a Carlos conservar la capital. Sin esa base social, una victoria militar momentánea no podía convertirse en gobierno estable; la misma debilidad reapareció con mayor claridad en 1710."
    }
  },

  {
    id: "segunda-ocupacion-madrid-1710",
    year: 1710,
    month: 9,
    day: 28,
    title: "28 de septiembre de 1710: segunda ocupación aliada de Madrid",
    author: "Carlos III y la Gran Alianza",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "Tras vencer en Almenar y Zaragoza, Carlos III entró nuevamente en Madrid el 28 de septiembre de 1710; Felipe V se retiró a Valladolid. Las calles vacías confirmaron que Castilla seguía sin abrazar la causa austracista. Lejos de sus bases catalanas y con suministros frágiles, los aliados abandonaron la capital en noviembre. Durante la retirada hacia Aragón, Vendôme cercó y capturó a los británicos de Stanhope en Brihuega; días después combatió contra Starhemberg en Villaviciosa. La campaña destruyó la última posibilidad aliada de conquistar Castilla y fortaleció la posición borbónica antes de Utrecht.",
    descriptionHtml:
      'Tras vencer en <button type="button" class="timeline-detail-geolink" data-region="Almenar" data-country="España">Almenar</button> y <button type="button" class="timeline-detail-geolink" data-region="Zaragoza" data-country="España">Zaragoza</button>, Carlos III <button type="button" class="timeline-detail-entrylink" data-id="ocupacion-aliada-madrid-1706">entró nuevamente</button> en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> el 28 de septiembre de 1710; Felipe V se retiró a <button type="button" class="timeline-detail-geolink" data-region="Valladolid" data-country="España">Valladolid</button>. Las calles vacías confirmaron que <button type="button" class="timeline-detail-geolink" data-region="Castilla" data-country="España">Castilla</button> seguía sin abrazar la causa austracista. Lejos de sus bases <button type="button" class="timeline-detail-geolink" data-region="Cataluña" data-country="España">catalanas</button> y con suministros frágiles, los aliados abandonaron la capital en noviembre. Durante la retirada hacia <button type="button" class="timeline-detail-geolink" data-region="Aragón" data-country="España">Aragón</button>, Vendôme cercó y capturó a los británicos de Stanhope en <button type="button" class="timeline-detail-geolink" data-region="Brihuega" data-country="España">Brihuega</button>; días después combatió contra Starhemberg en <button type="button" class="timeline-detail-geolink" data-region="Villaviciosa de Tajuña" data-country="España">Villaviciosa</button>. La campaña destruyó la última posibilidad aliada de conquistar Castilla y fortaleció la posición borbónica antes de <button type="button" class="timeline-detail-geolink" data-region="Utrecht" data-country="Países Bajos">Utrecht</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si los aliados hubieran consolidado Madrid en 1710?",
      answer:
        "Felipe V habría perdido su principal centro político y la negociación internacional podría haber reconocido a Carlos como rey efectivo de una parte mucho mayor de España. Sin embargo, sostener Madrid exigía la adhesión castellana y líneas de suministro seguras; ganar Almenar y Zaragoza no resolvía ninguna de esas dos condiciones."
    }
  },

  {
    id: "jose-i-muerte-carlos-vi-1711",
    year: 1711,
    month: 4,
    day: 17,
    title: "17 de abril de 1711: Carlos hereda el Imperio",
    author: "José I y Carlos VI",
    country: "Austria",
    region: "Viena",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "El 17 de abril de 1711 murió el emperador José I. Su hermano, el archiduque Carlos, heredó los dominios austríacos y fue elegido emperador Carlos VI en octubre. Una posible unión de Austria y España alarmó a Gran Bretaña tanto como la unión de Francia y España que había provocado la guerra. Londres redujo su apoyo a Carlos y negoció separadamente con Francia, acelerando el camino hacia la paz de Utrecht.",
    descriptionHtml:
      'El 17 de abril de 1711 murió el emperador José I. Su hermano, el <button type="button" class="timeline-detail-entrylink" data-id="segunda-ocupacion-madrid-1710">archiduque Carlos</button>, heredó los dominios <button type="button" class="timeline-detail-geolink" data-country="Austria">austríacos</button> y fue elegido emperador Carlos VI en octubre. Una posible unión de <button type="button" class="timeline-detail-geolink" data-country="Austria">Austria</button> y <button type="button" class="timeline-detail-geolink" data-country="España">España</button> alarmó a <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Gran Bretaña</button> tanto como la unión de <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button> y <button type="button" class="timeline-detail-geolink" data-country="España">España</button> que había provocado la guerra. <button type="button" class="timeline-detail-geolink" data-region="Londres" data-country="Reino Unido">Londres</button> redujo su apoyo a Carlos y negoció separadamente con <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button>, acelerando el camino hacia la paz de <button type="button" class="timeline-detail-geolink" data-region="Utrecht" data-country="Países Bajos">Utrecht</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si José I hubiera sobrevivido a 1711?",
      answer:
        "Carlos habría continuado aspirando a España sin sumar la herencia austríaca y la corona imperial. Gran Bretaña habría tenido menos motivos para abandonar la alianza, y la guerra o las condiciones de paz podrían haberse prolongado."
    }
  },

  {
    id: "junipero-serra-nace-1713",
    year: 1713,
    title: "1713: nace fray Junípero Serra en Mallorca",
    author: "Fray Junípero Serra",
    country: "España",
    region: "Petra, Mallorca",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "El 24 de noviembre de 1713 nace en Petra, Mallorca, Miquel Josep Serra i Ferrer, hijo de campesinos humildes de la isla. A los dieciséis años ingresa a la Orden Franciscana, fundada por Francesco d'Assisi (Francisco de Asís) cinco siglos antes, y toma el nombre de fray Junípero en honor a uno de los primeros compañeros del santo. Llega a ocupar una cátedra de filosofía en la Universidad Luliana de Palma, pero en 1749, ya cerca de los cuarenta años, renuncia a esa vida académica para embarcarse como misionero hacia Nueva España. Pasa casi dos décadas evangelizando en la Sierra Gorda mexicana y, en 1769, cuando la Corona española decide finalmente ocupar Alta California ante el temor a la expansión rusa, viaja junto al gobernador Gaspar de Portolá para fundar la primera de una cadena de misiones que llegaría a veintiuna. En los quince años que le quedan de vida, Serra funda nueve de ellas —San Diego, San Carlos Borromeo de Carmelo, San Antonio de Padua, San Gabriel, San Luis Obispo, San Francisco de Asís, San Juan Capistrano, Santa Clara y San Buenaventura— y bautiza a miles de indígenas ohlone, chumash, kumeyaay y de otros pueblos, muchos de ellos sometidos a trabajo forzado, castigo corporal y epidemias europeas que diezmarían a la población nativa de California. Muere en 1784 en la misión de Carmel. Dos siglos y medio después, el papa Francisco lo canoniza en 2015 como el primer santo declarado en suelo estadounidense, en una ceremonia tan disputada como su legado: activistas indígenas derriban varias de sus estatuas en los años siguientes, entre ellas la de San Francisco y la del Capitolio de Sacramento, por considerarlo arquitecto de un sistema que casi borró sus culturas.",
    descriptionHtml:
      'El 24 de noviembre de 1713 nace en <button type="button" class="timeline-detail-geolink" data-region="Petra, Mallorca" data-country="España">Petra, Mallorca</button>, Miquel Josep Serra i Ferrer, hijo de campesinos humildes de la isla. A los dieciséis años ingresa a la <button type="button" class="timeline-detail-entrylink" data-id="orden-franciscana-1209">Orden Franciscana</button>, fundada por Francesco d\'Assisi (Francisco de Asís) cinco siglos antes, y toma el nombre de fray Junípero en honor a uno de los primeros compañeros del santo. Llega a ocupar una cátedra de filosofía en la <button type="button" class="timeline-detail-geolink" data-region="Universidad Luliana de Palma" data-country="España">Universidad Luliana de Palma</button>, pero en 1749, ya cerca de los cuarenta años, renuncia a esa vida académica para embarcarse como misionero hacia Nueva España. Pasa casi dos décadas evangelizando en la Sierra Gorda mexicana y, en <button type="button" class="timeline-detail-entrylink" data-id="portola-expedicion-san-diego-1769">1769</button>, cuando la Corona española decide finalmente ocupar Alta California ante el temor a la expansión rusa, viaja junto al gobernador Gaspar de Portolá para fundar la primera de una cadena de misiones que llegaría a veintiuna. En los quince años que le quedan de vida, Serra funda nueve de ellas —San Diego, San Carlos Borromeo de Carmelo, San Antonio de Padua, San Gabriel, San Luis Obispo, San Francisco de Asís, San Juan Capistrano, Santa Clara y San Buenaventura— y bautiza a miles de indígenas ohlone, chumash, kumeyaay y de otros pueblos, muchos de ellos sometidos a trabajo forzado, castigo corporal y epidemias europeas que diezmarían a la población nativa de California. Muere en 1784 en la misión de Carmel. Dos siglos y medio después, el papa Francisco lo canoniza en 2015 como el primer santo declarado en suelo estadounidense, en una ceremonia tan disputada como su legado: activistas indígenas derriban varias de sus estatuas en los años siguientes, entre ellas la de San Francisco y la del <button type="button" class="timeline-detail-geolink" data-region="Capitolio de Sacramento" data-country="Estados Unidos">Capitolio de Sacramento</button>, por considerarlo arquitecto de un sistema que casi borró sus culturas.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Serra se hubiera quedado enseñando filosofía en Mallorca en lugar de embarcarse hacia Nueva España en 1749?",
      answer:
        "España probablemente habría enviado a otro misionero franciscano a Alta California de cualquier modo: la amenaza rusa desde el norte, no la vocación personal de Serra, fue lo que finalmente empujó a la Corona a ocupar el territorio en 1769. Pero el carácter específico de esa ocupación —el celo evangelizador, la disciplina de la Sierra Gorda aplicada sin concesiones a los pueblos de California, las nueve misiones fundadas en apenas quince años— lleva la huella de un solo hombre. Sin Serra, California tendría misiones, pero no necesariamente esta California."
    }
  },

  {
    id: "caida-barcelona-diada-1714",
    year: 1714,
    month: 9,
    day: 11,
    title: "11 de septiembre de 1714: cae Barcelona",
    author: "Barcelona y la resistencia catalana",
    country: "España",
    region: "Barcelona",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "Tras la retirada aliada, la Junta de Brazos de Cataluña decidió en julio de 1713 continuar la guerra sin aliados. Barcelona soportó catorce meses de sitio por fuerzas borbónicas francesas y españolas. El 11 de septiembre de 1714, las tropas del duque de Berwick lanzaron el asalto final; Rafael Casanova cayó herido defendiendo la ciudad, que capituló esa tarde. Al día siguiente fueron suprimidos la Diputación del General y el Consell de Cent; la Nueva Planta abolió después el orden constitucional catalán. La fecha se conmemora hoy como la Diada Nacional de Catalunya.",
    descriptionHtml:
      'Tras la <button type="button" class="timeline-detail-entrylink" data-id="jose-i-muerte-carlos-vi-1711">retirada aliada</button>, la Junta de Brazos de <button type="button" class="timeline-detail-geolink" data-region="Cataluña" data-country="España">Cataluña</button> decidió en julio de 1713 continuar la guerra sin aliados. <button type="button" class="timeline-detail-geolink" data-region="Barcelona" data-country="España">Barcelona</button> soportó catorce meses de sitio por fuerzas borbónicas <button type="button" class="timeline-detail-geolink" data-country="Francia">francesas</button> y <button type="button" class="timeline-detail-geolink" data-country="España">españolas</button>. El 11 de septiembre de 1714, las tropas del duque de Berwick lanzaron el asalto final; Rafael Casanova cayó herido defendiendo la ciudad, que capituló esa tarde. Al día siguiente fueron suprimidos la Diputación del General y el Consell de Cent; la Nueva Planta abolió después el orden constitucional catalán. La fecha se conmemora hoy como la Diada Nacional de Catalunya.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Barcelona hubiera capitulado en 1713?",
      answer:
        "La ciudad habría evitado catorce meses de sitio, miles de bajas y parte de su destrucción material, pero la Corona borbónica probablemente habría impuesto igualmente una reorganización centralizadora. Sin la resistencia final, el 11 de septiembre difícilmente habría adquirido su fuerza como símbolo político y día nacional."
    }
  },

  {
    id: "roggeveen-rapa-nui-moai-1722",
    year: 1722,
    month: 4,
    day: 5,
    title: "5 de abril de 1722: el primer encuentro europeo con Rapa Nui y los moai",
    author: "Jacob Roggeveen",
    country: "Chile",
    region: "Rapa Nui (Easter Island)",
    type: ICON_TYPE.HISTORY,
    description:
      "Mucho antes de que apareciera en un mapa europeo, navegantes polinesios habían encontrado y poblado Rapa Nui, probablemente entre los años 1000 y 1200. En aislamiento extremo —a unos 3,500 kilómetros de la costa continental de Chile— desarrollaron una sociedad organizada alrededor de linajes ancestrales y comenzaron a tallar moai hacia el siglo XII. Casi todos fueron esculpidos en la toba volcánica de la cantera de Rano Raraku, trasladados a plataformas funerarias llamadas ahu y orientados hacia las comunidades a las que protegían; la producción continuó hasta aproximadamente el siglo XVI. El 5 de abril de 1722, Domingo de Pascua, la expedición neerlandesa de Jacob Roggeveen —los barcos Arend, Thienhoven y Afrikaansche Galei, con más de 220 tripulantes— avista la isla mientras busca el continente mítico Terra Australis. Roggeveen la bautiza Paasch Eyland, Isla de Pascua, y su tripulación se convierte en el primer grupo europeo conocido que contempla los moai. El encuentro no fue un descubrimiento humano de una tierra vacía, sino el final de al menos cinco siglos de aislamiento rapanui; los primeros contactos en tierra, días después, terminan con habitantes muertos por disparos neerlandeses. En 1770, Felipe González de Haedo reclama la isla para la Corona española bajo el nombre de Isla de San Carlos. James Cook llega en 1774 y documenta una sociedad transformada y numerosos monumentos deteriorados o derribados. La investigación arqueológica sistemática llegaría mucho después: expediciones del siglo XX, incluida la de Thor Heyerdahl en la década de 1950, y el trabajo posterior de arqueólogos rapanui como Sergio Rapu estudian las canteras, excavan las estatuas y reconstruyen cómo fueron talladas, transportadas y erigidas. Roggeveen no descubrió a los moai para quienes los habían creado; registró el momento en que Europa los vio por primera vez.",
    descriptionHtml:
      'Mucho antes de que apareciera en un mapa europeo, navegantes polinesios habían encontrado y poblado <button type="button" class="timeline-detail-geolink" data-region="Rapa Nui (Easter Island)" data-country="Chile">Rapa Nui</button>, probablemente entre los años 1000 y 1200. En aislamiento extremo —a unos 3,500 kilómetros de la costa continental de <button type="button" class="timeline-detail-geolink" data-country="Chile">Chile</button>— desarrollaron una sociedad organizada alrededor de linajes ancestrales y comenzaron a tallar moai hacia el siglo XII. Casi todos fueron esculpidos en la toba volcánica de la cantera de <button type="button" class="timeline-detail-geolink" data-region="Rano Raraku, Rapa Nui" data-country="Chile">Rano Raraku</button>, trasladados a plataformas funerarias llamadas <em>ahu</em> y orientados hacia las comunidades a las que protegían; la producción continuó hasta aproximadamente el siglo XVI. El 5 de abril de 1722, Domingo de Pascua, la expedición neerlandesa de Jacob Roggeveen —los barcos <em>Arend</em>, <em>Thienhoven</em> y <em>Afrikaansche Galei</em>, con más de 220 tripulantes— avista la isla mientras busca el continente mítico Terra Australis. Roggeveen la bautiza <em>Paasch Eyland</em>, Isla de Pascua, y su tripulación se convierte en el primer grupo europeo conocido que contempla los moai. El encuentro no fue un descubrimiento humano de una tierra vacía, sino el final de al menos cinco siglos de aislamiento rapanui; los primeros contactos en tierra, días después, terminan con habitantes muertos por disparos neerlandeses. En 1770, Felipe González de Haedo reclama la isla para la Corona española bajo el nombre de Isla de San Carlos. James Cook llega en 1774 y documenta una sociedad transformada y numerosos monumentos deteriorados o derribados. La investigación arqueológica sistemática llegaría mucho después: expediciones del siglo XX, incluida la de Thor Heyerdahl en la década de 1950, y el trabajo posterior de arqueólogos rapanui como Sergio Rapu estudian las canteras, excavan las estatuas y reconstruyen cómo fueron talladas, transportadas y erigidas. Roggeveen no descubrió a los moai para quienes los habían creado; registró el momento en que Europa los vio por primera vez.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la expedición de Roggeveen hubiera pasado de largo frente a Rapa Nui el 5 de abril de 1722?",
      answer:
        "La isla probablemente habría permanecido fuera de los mapas europeos hasta la expedición española de Felipe González de Haedo en 1770, conservando casi medio siglo más de aislamiento. Los moai no habrían dejado de existir ni de pertenecer a la memoria rapanui, pero su primera descripción europea habría sido española y la isla quizá habría entrado en la cartografía occidental como San Carlos, no como Isla de Pascua."
    }
  },
  {
    id: "fernando-vi-neutralidad-armada-1746",
    year: 1746,
    month: 7,
    day: 9,
    title: "9 de julio de 1746: Fernando VI elige la neutralidad",
    author: "Fernando VI, Carvajal y Ensenada",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "Fernando VI sucedió a Felipe V el 9 de julio de 1746. Hijo de María Luisa de Saboya, revirtió la política italiana impulsada durante el segundo matrimonio de su padre con Isabel de Farnesio. Tras Aix-la-Chapelle (1748), que aseguró Parma, Plasencia y Guastalla para el infante Felipe, José de Carvajal y el marqués de la Ensenada sostuvieron una neutralidad entre Francia y Gran Bretaña. La paz fortaleció el Estado y la Armada: Ensenada impulsó la construcción naval y los arsenales de Ferrol, Cartagena y La Carraca, preparando poder sin entrar en otra guerra.",
    descriptionHtml:
      '<button type="button" class="timeline-detail-entrylink" data-id="muerte-fernando-vi-1759">Fernando VI</button> sucedió a <button type="button" class="timeline-detail-entrylink" data-id="sucesion-espanola-borbones-1700">Felipe V</button> el 9 de julio de 1746. Hijo de María Luisa de <button type="button" class="timeline-detail-geolink" data-region="Saboya" data-country="Italia">Saboya</button>, revirtió la política <button type="button" class="timeline-detail-geolink" data-country="Italia">italiana</button> impulsada durante el segundo matrimonio de su padre con Isabel de Farnesio. Tras <button type="button" class="timeline-detail-geolink" data-region="Aquisgrán" data-country="Alemania">Aix-la-Chapelle</button> (1748), que aseguró <button type="button" class="timeline-detail-geolink" data-region="Parma" data-country="Italia">Parma</button>, <button type="button" class="timeline-detail-geolink" data-region="Piacenza" data-country="Italia">Plasencia</button> y <button type="button" class="timeline-detail-geolink" data-region="Guastalla" data-country="Italia">Guastalla</button> para el infante Felipe, José de Carvajal y el marqués de la Ensenada sostuvieron una neutralidad entre <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button> y <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Gran Bretaña</button>. La paz fortaleció el Estado y la Armada: <button type="button" class="timeline-detail-entrylink" data-id="caida-ensenada-1754">Ensenada</button> impulsó la construcción naval y los arsenales de <button type="button" class="timeline-detail-geolink" data-region="Ferrol" data-country="España">Ferrol</button>, <button type="button" class="timeline-detail-geolink" data-region="Cartagena" data-country="España">Cartagena</button> y <button type="button" class="timeline-detail-geolink" data-region="La Carraca" data-country="España">La Carraca</button>, preparando poder sin entrar en otra guerra.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Fernando VI hubiera continuado las guerras italianas de Felipe V?",
      answer:
        "España habría consumido en nuevas campañas los recursos que Ensenada destinó a astilleros, arsenales y administración. La neutralidad no eliminó la rivalidad con Francia y Gran Bretaña, pero dio a la monarquía un intervalo excepcional para reconstruir su capacidad naval."
    }
  },

  {
    id: "catastro-ensenada-1749",
    year: 1749,
    month: 10,
    day: 10,
    title: "10 de octubre de 1749: comienza el Catastro de Ensenada",
    author: "Marqués de la Ensenada",
    country: "España",
    region: "Castilla",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.VISION],
    description:
      "El Real Decreto del 10 de octubre de 1749 puso en marcha el Catastro de Ensenada, una investigación de bienes, rentas, cargas y población en la Corona de Castilla. Sus cuarenta preguntas debían permitir sustituir las rentas provinciales por una Única Contribución proporcional a la riqueza. La oposición de los privilegiados impidió aplicar el impuesto. Sus Respuestas Generales, conservadas en Simancas, son hoy una fuente excepcional sobre la economía y sociedad castellanas del siglo XVIII.",
    descriptionHtml:
      'El Real Decreto del 10 de octubre de 1749 puso en marcha el <button type="button" class="timeline-detail-entrylink" data-id="fernando-vi-neutralidad-armada-1746">Catastro de Ensenada</button>, una investigación de bienes, rentas, cargas y población en la <button type="button" class="timeline-detail-geolink" data-region="Castilla" data-country="España">Corona de Castilla</button>. Sus cuarenta preguntas debían permitir sustituir las rentas provinciales por una Única Contribución proporcional a la riqueza. La oposición de los privilegiados impidió aplicar el impuesto. Sus Respuestas Generales, conservadas en <button type="button" class="timeline-detail-geolink" data-region="Simancas" data-country="España">Simancas</button>, son hoy una fuente excepcional sobre la economía y sociedad castellanas del siglo XVIII.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si la Única Contribución se hubiera aplicado?",
      answer:
        "La Corona habría sustituido numerosos gravámenes indirectos por un impuesto basado en la riqueza registrada, reduciendo algunos privilegios fiscales y transformando antes la Hacienda castellana. La resistencia que frustró el proyecto demuestra precisamente cuánto poder conservaban los grupos exentos."
    }
  },

  {
    id: "tratado-madrid-portugal-guarani-1750",
    year: 1750,
    month: 1,
    day: 13,
    title: "13 de enero de 1750: el Tratado de Madrid desplaza a los guaraníes",
    author: "Fernando VI y João V de Portugal",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "El 13 de enero de 1750, España y Portugal firmaron en Madrid un tratado distinto del acuerdo británico de octubre. Portugal cedería Colonia del Sacramento; España entregaría los Siete Pueblos de las Misiones, al este del río Uruguay. Sus comunidades guaraníes debían abandonar hogares y tierras. Se negaron. Tropas ibéricas las combatieron en la Guerra Guaranítica (1754–1756). Aunque la Compañía de Jesús no dirigió una rebelión, sus enemigos responsabilizaron a los jesuitas. El Tratado de El Pardo anuló el intercambio en 1761, pero el episodio alimentó el antijesuitismo que precedió su expulsión en 1767.",
    descriptionHtml:
      'El 13 de enero de 1750, <button type="button" class="timeline-detail-geolink" data-country="España">España</button> y <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button> firmaron en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> un tratado distinto del <button type="button" class="timeline-detail-entrylink" data-id="tratado-madrid-asiento-1750">acuerdo británico de octubre</button>. Portugal cedería <button type="button" class="timeline-detail-geolink" data-region="Colonia del Sacramento" data-country="Uruguay">Colonia del Sacramento</button>; España entregaría los <button type="button" class="timeline-detail-geolink" data-region="Siete Pueblos de las Misiones" data-country="Brasil">Siete Pueblos de las Misiones</button>, al este del <button type="button" class="timeline-detail-geolink" data-region="Río Uruguay">río Uruguay</button>. Sus comunidades guaraníes debían abandonar hogares y tierras. Se negaron. Tropas ibéricas las combatieron en la Guerra Guaranítica (1754–1756). Aunque la Compañía de Jesús no dirigió una rebelión, sus enemigos responsabilizaron a los jesuitas. El <button type="button" class="timeline-detail-geolink" data-region="El Pardo" data-country="España">Tratado de El Pardo</button> anuló el intercambio en 1761, pero el episodio alimentó el antijesuitismo que precedió su expulsión en 1767.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si las coronas hubieran respetado el derecho de las comunidades guaraníes a permanecer en sus pueblos?",
      answer:
        "La demarcación habría requerido otra frontera o una negociación con quienes habitaban el territorio. Evitar el traslado forzoso pudo haber impedido la Guerra Guaranítica y privado a los adversarios de los jesuitas de uno de sus argumentos más útiles, aunque el conflicto europeo contra la Compañía de Jesús tenía causas más amplias."
    }
  },

  {
    id: "tratado-madrid-asiento-1750",
    year: 1750,
    month: 10,
    day: 5,
    title: "5 de octubre de 1750: España rescata el asiento británico",
    author: "Fernando VI y Gran Bretaña",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ECHO],
    description:
      "El 5 de octubre de 1750 España y Gran Bretaña firmaron en Madrid otro tratado que canceló dos privilegios británicos obtenidos en Utrecht: el navío de permiso y el asiento de negros. El asiento no era soberanía territorial, sino el monopolio concedido a la South Sea Company para transportar y vender personas africanas esclavizadas en la América española. España pagó £100,000 para extinguir el contrato y resolver reclamaciones pendientes. El acuerdo cerró una fuente constante de contrabando y conflicto imperial; no abolió la esclavitud ni la trata, que continuaron bajo otros comerciantes y sistemas.",
    descriptionHtml:
      'El 5 de octubre de 1750 <button type="button" class="timeline-detail-geolink" data-country="España">España</button> y <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Gran Bretaña</button> firmaron en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> <button type="button" class="timeline-detail-entrylink" data-id="tratado-madrid-portugal-guarani-1750">otro tratado</button> que canceló dos privilegios británicos obtenidos en <button type="button" class="timeline-detail-geolink" data-region="Utrecht" data-country="Países Bajos">Utrecht</button>: el navío de permiso y el asiento de negros. El asiento no era soberanía territorial, sino el monopolio concedido a la South Sea Company para transportar y vender personas <button type="button" class="timeline-detail-geolink" data-region="África">africanas</button> esclavizadas en la <button type="button" class="timeline-detail-geolink" data-region="América española">América española</button>. España pagó £100,000 para extinguir el contrato y resolver reclamaciones pendientes. El acuerdo cerró una fuente constante de contrabando y conflicto imperial; no abolió la esclavitud ni la trata, que continuaron bajo otros comerciantes y sistemas.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Gran Bretaña hubiera conservado el asiento?",
      answer:
        "La South Sea Company habría mantenido durante algunos años más una entrada legal al mercado colonial español y una cobertura útil para el contrabando. La continuidad del contrato habría prolongado además la participación oficial británica en ese circuito concreto de tráfico de personas esclavizadas."
    }
  },

  {
    id: "concordato-regalismo-1753",
    year: 1753,
    month: 1,
    day: 11,
    title: "11 de enero de 1753: el Concordato y el regalismo",
    author: "Fernando VI y Benedicto XIV",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "El 11 de enero de 1753 Fernando VI y Benedicto XIV firmaron en Roma un concordato: un tratado entre la Corona y la Santa Sede. Hasta entonces Roma reservaba para sí muchos beneficios eclesiásticos —cargos con renta, desde canonjías hasta parroquias—. El acuerdo permitió al rey presentar candidatos para casi todos; la autoridad eclesiástica aún realizaba la institución canónica y el papa conservó 52 beneficios. Esto fue regalismo: ampliar la intervención del Estado monárquico en la Iglesia sin romper con Roma. Controlar los nombramientos también significaba distribuir influencia, carreras e ingresos.",
    descriptionHtml:
      'El 11 de enero de 1753 <button type="button" class="timeline-detail-entrylink" data-id="fernando-vi-neutralidad-armada-1746">Fernando VI</button> y Benedicto XIV firmaron en <button type="button" class="timeline-detail-geolink" data-region="Roma" data-country="Italia">Roma</button> un concordato: un tratado entre la <button type="button" class="timeline-detail-geolink" data-country="España">Corona</button> y la <button type="button" class="timeline-detail-geolink" data-region="Roma" data-country="Italia">Santa Sede</button>. Hasta entonces Roma reservaba para sí muchos beneficios eclesiásticos —cargos con renta, desde canonjías hasta parroquias—. El acuerdo permitió al rey presentar candidatos para casi todos; la autoridad eclesiástica aún realizaba la institución canónica y el papa conservó 52 beneficios. Esto fue regalismo: ampliar la intervención del Estado monárquico en la Iglesia sin romper con Roma. Controlar los nombramientos también significaba distribuir influencia, carreras e ingresos.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Roma hubiera conservado la provisión de esos beneficios?",
      answer:
        "La Santa Sede habría mantenido una red mayor de nombramientos e ingresos dentro de España, mientras la Corona habría contado con menos cargos para premiar servicios y orientar la administración eclesiástica. El regalismo borbónico habría encontrado un límite institucional mucho más fuerte."
    }
  },

  {
    id: "caida-ensenada-1754",
    year: 1754,
    month: 7,
    day: 20,
    title: "20 de julio de 1754: cae el marqués de la Ensenada",
    author: "Marqués de la Ensenada y Ricardo Wall",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "En la medianoche del 20 de julio de 1754, Ensenada fue arrestado en Madrid, apartado de sus secretarías y enviado al destierro en Granada. Tras morir Carvajal, el irlandés Ricardo Wall había asumido la Secretaría de Estado. Wall, el duque de Huéscar y el embajador británico Benjamin Keene explotaron ante Fernando VI los preparativos secretos de Ensenada contra posiciones británicas en el Caribe. Su orientación profrancesa y el rearme naval inquietaban a Londres, pero su caída también respondió a rivalidades cortesanas y a enemigos de sus reformas fiscales. Wall quedó como ministro dominante.",
    descriptionHtml:
      'En la medianoche del 20 de julio de 1754, <button type="button" class="timeline-detail-entrylink" data-id="fernando-vi-neutralidad-armada-1746">Ensenada</button> fue arrestado en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button>, apartado de sus secretarías y enviado al destierro en <button type="button" class="timeline-detail-geolink" data-region="Granada" data-country="España">Granada</button>. Tras morir Carvajal, el <button type="button" class="timeline-detail-geolink" data-country="Irlanda">irlandés</button> Ricardo Wall había asumido la Secretaría de Estado. Wall, el duque de Huéscar y el embajador <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">británico</button> Benjamin Keene explotaron ante Fernando VI los preparativos secretos de Ensenada contra posiciones británicas en el <button type="button" class="timeline-detail-geolink" data-region="Caribe">Caribe</button>. Su orientación <button type="button" class="timeline-detail-geolink" data-country="Francia">profrancesa</button> y el rearme naval inquietaban a <button type="button" class="timeline-detail-geolink" data-region="Londres" data-country="Reino Unido">Londres</button>, pero su caída también respondió a rivalidades cortesanas y a enemigos de sus <button type="button" class="timeline-detail-entrylink" data-id="catastro-ensenada-1749">reformas fiscales</button>. Wall quedó como ministro dominante.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Ensenada hubiera conservado el poder después de 1754?",
      answer:
        "Su programa naval y fiscal habría contado con más tiempo, pero también habría elevado la tensión con Gran Bretaña y dentro de la corte. Su destitución frenó varios proyectos y cambió el equilibrio ministerial; no borró por completo la reconstrucción de la Armada que ya había comenzado."
    }
  },

  {
    id: "muerte-fernando-vi-1759",
    year: 1759,
    month: 8,
    day: 10,
    title: "10 de agosto de 1759: termina el reinado de Fernando VI",
    author: "Fernando VI y Bárbara de Braganza",
    country: "España",
    region: "Villaviciosa de Odón",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "El 27 de agosto de 1758 murió Bárbara de Braganza en Aranjuez. Fernando VI, profundamente unido a ella, se retiró al castillo de Villaviciosa de Odón. Durante el llamado “año sin rey” sufrió un deterioro mental y físico rápido; fuentes médicas modernas advierten que el cuadro fue más complejo que una depresión causada únicamente por el duelo. Murió allí el 10 de agosto de 1759, sin descendencia. La Corona pasó a su medio hermano Carlos, rey de Nápoles y Sicilia, hijo de Felipe V e Isabel de Farnesio, quien reinó en España como Carlos III.",
    descriptionHtml:
      'El 27 de agosto de 1758 murió Bárbara de Braganza en <button type="button" class="timeline-detail-geolink" data-region="Aranjuez" data-country="España">Aranjuez</button>. <button type="button" class="timeline-detail-entrylink" data-id="fernando-vi-neutralidad-armada-1746">Fernando VI</button>, profundamente unido a ella, se retiró al castillo de <button type="button" class="timeline-detail-geolink" data-region="Villaviciosa de Odón" data-country="España">Villaviciosa de Odón</button>. Durante el llamado “año sin rey” sufrió un deterioro mental y físico rápido; fuentes médicas modernas advierten que el cuadro fue más complejo que una depresión causada únicamente por el duelo. Murió allí el 10 de agosto de 1759, sin descendencia. La Corona pasó a su medio hermano Carlos, rey de <button type="button" class="timeline-detail-geolink" data-region="Nápoles" data-country="Italia">Nápoles</button> y <button type="button" class="timeline-detail-geolink" data-region="Sicilia" data-country="Italia">Sicilia</button>, hijo de <button type="button" class="timeline-detail-entrylink" data-id="sucesion-espanola-borbones-1700">Felipe V</button> e Isabel de Farnesio, quien reinó en <button type="button" class="timeline-detail-geolink" data-country="España">España</button> como <button type="button" class="timeline-detail-entrylink" data-id="carlos-iii-llega-madrid-1759">Carlos III</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Fernando VI y Bárbara de Braganza hubieran tenido un heredero?",
      answer:
        "Carlos III probablemente habría permanecido en Nápoles y Sicilia, mientras una nueva rama descendiente de Fernando habría heredado España. El programa reformista del siguiente reinado, sus ministros y su política italiana habrían seguido una trayectoria distinta."
    }
  },

  {
    id: "carlos-iii-llega-madrid-1759",
    year: 1759,
    month: 12,
    day: 9,
    title: "9 de diciembre de 1759: Carlos III llega a Madrid",
    author: "Carlos III",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "El 9 de diciembre de 1759 Carlos III llegó a Madrid para gobernar la corona heredada de su hermanastro Fernando VI. Hijo de Felipe V e Isabel de Farnesio, no era un novato: había reinado unos veinticinco años en Nápoles y Sicilia, donde trabajó con ministros reformistas como Bernardo Tanucci. Su gobierno reorganizó instituciones, impulsó obras públicas y patrocinó las excavaciones sistemáticas de Herculano y Pompeya, decisivas para el neoclasicismo europeo. Al trasladarse a España dejó las Dos Sicilias a su hijo Fernando y trajo experiencia administrativa, ministros y una concepción reformadora de la monarquía.",
    descriptionHtml:
      'El 9 de diciembre de 1759 <button type="button" class="timeline-detail-entrylink" data-id="muerte-fernando-vi-1759">Carlos III</button> llegó a <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> para gobernar la corona heredada de su hermanastro Fernando VI. Hijo de <button type="button" class="timeline-detail-entrylink" data-id="sucesion-espanola-borbones-1700">Felipe V</button> e Isabel de Farnesio, no era un novato: había reinado unos veinticinco años en <button type="button" class="timeline-detail-geolink" data-region="Nápoles" data-country="Italia">Nápoles</button> y <button type="button" class="timeline-detail-geolink" data-region="Sicilia" data-country="Italia">Sicilia</button>, donde trabajó con ministros reformistas como Bernardo Tanucci. Su gobierno reorganizó instituciones, impulsó obras públicas y patrocinó las excavaciones sistemáticas de <button type="button" class="timeline-detail-geolink" data-region="Herculano" data-country="Italia">Herculano</button> y <button type="button" class="timeline-detail-geolink" data-region="Pompeya" data-country="Italia">Pompeya</button>, decisivas para el neoclasicismo europeo. Al trasladarse a <button type="button" class="timeline-detail-geolink" data-country="España">España</button> dejó las Dos Sicilias a su hijo Fernando y trajo experiencia administrativa, ministros y una concepción reformadora de la monarquía.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Carlos III hubiera llegado a España sin experiencia de gobierno?",
      answer:
        "Su programa habría dependido más de las facciones cortesanas heredadas de Fernando VI. Los veinticinco años italianos le dieron ministros, métodos y prioridades propias, aunque trasladar esas prácticas a una monarquía más extensa también produjo resistencias."
    }
  },

  {
    id: "portola-expedicion-san-diego-1769",
    year: 1769,
    title: "1769: la expedición Portolá funda la primera misión de Alta California",
    author: "Gaspar de Portolá y Junípero Serra",
    country: "Estados Unidos",
    region: "San Diego",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    description:
      "El propio Cabrillo había reclamado California para la Corona española en 1542, pero un reclamo sobre el papel es muy distinto a una ocupación real: durante más de 225 años, España no estableció ningún asentamiento permanente en la actual Alta California. Las razones eran prácticas: pocos colonos disponibles frente a los territorios ya poblados y productivos de México, Centroamérica, Sudamérica y el Caribe; el costo de sostener una colonia remota —barcos, soldados, misioneros, suministros—; la enorme distancia terrestre y marítima desde Ciudad de México, capital del virreinato; y la ausencia de oro, plata o imperios indígenas densos que justificaran la inversión, a diferencia de México central o Perú. Eso cambia a mediados del siglo XVIII, cuando la expansión rusa de la caza de pieles desde Alaska y la creciente actividad británica en el Pacífico convencen a la Corona de que necesita una presencia efectiva en el territorio. En 1769, España lanza la expedición Portolá: Gaspar de Portolá, gobernador militar, y el misionero franciscano Junípero Serra fundan la Misión San Diego de Alcalá, el primer asentamiento español permanente en Alta California y la primera de una cadena de misiones y presidios que terminaría por extenderse a lo largo de toda la costa. Doscientos veintisiete años después del reclamo de Cabrillo, España finalmente ocupa lo que llevaba más de dos siglos reclamando solo de nombre. Semanas después de fundar San Diego, el 2 de agosto de 1769 —fiesta de Nuestra Señora de los Ángeles de la Porciúncula en el calendario franciscano— la expedición acampa junto a un río más al norte y lo bautiza El Río de Nuestra Señora la Reina de los Ángeles de Porciúncula, en honor a la capilla que Francesco d'Assisi (Francisco de Asís) había restaurado más de cinco siglos antes; el nombre terminaría heredándolo la futura ciudad de Los Ángeles. Meses después, ya en noviembre de 1769, la expedición sigue tierra adentro hacia el norte y acampa junto a un enorme secuoya costero a orillas del arroyo San Francisquito: los soldados españoles lo bautizan simplemente 'el palo alto'. El árbol sigue en pie hoy, y su nombre terminaría bautizando, más de un siglo después, en 1894, la ciudad de Palo Alto —fundada junto a la naciente Universidad de Stanford— mucho después de que la expedición que le dio nombre hubiera desaparecido de la memoria de casi todos sus vecinos.",
    descriptionHtml:
      'El propio <button type="button" class="timeline-detail-entrylink" data-id="cabrillo-california-1542">Cabrillo</button> había reclamado California para la Corona española en 1542, pero un reclamo sobre el papel es muy distinto a una ocupación real: durante más de 225 años, España no estableció ningún asentamiento permanente en la actual Alta California. Las razones eran prácticas: pocos colonos disponibles frente a los territorios ya poblados y productivos de <button type="button" class="timeline-detail-geolink" data-country="México">México</button>, Centroamérica, Sudamérica y el Caribe; el costo de sostener una colonia remota —barcos, soldados, misioneros, suministros—; la enorme distancia terrestre y marítima desde <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, capital del virreinato; y la ausencia de oro, plata o imperios indígenas densos que justificaran la inversión, a diferencia de México central o <button type="button" class="timeline-detail-geolink" data-country="Perú">Perú</button>. Eso cambia a mediados del siglo XVIII, cuando la expansión rusa de la caza de pieles desde Alaska y la creciente actividad británica en el Pacífico convencen a la Corona de que necesita una presencia efectiva en el territorio. En 1769, España lanza la expedición Portolá: Gaspar de Portolá, gobernador militar, y el misionero <button type="button" class="timeline-detail-entrylink" data-id="orden-franciscana-1209">franciscano</button> <button type="button" class="timeline-detail-entrylink" data-id="junipero-serra-nace-1713">Junípero Serra</button> fundan la <button type="button" class="timeline-detail-geolink" data-region="Misión San Diego de Alcalá" data-country="Estados Unidos">Misión San Diego de Alcalá</button>, el primer asentamiento español permanente en Alta California y la primera de una cadena de misiones y presidios que terminaría por extenderse a lo largo de toda la costa. Doscientos veintisiete años después del reclamo de Cabrillo, España finalmente ocupa lo que llevaba más de dos siglos reclamando solo de nombre. Semanas después de fundar San Diego, el 2 de agosto de 1769 —fiesta de Nuestra Señora de los Ángeles de la <button type="button" class="timeline-detail-entrylink" data-id="porciuncula-restauracion-1205">Porciúncula</button> en el calendario franciscano— la expedición acampa junto a un río más al norte y lo bautiza <button type="button" class="timeline-detail-geolink" data-region="Los Ángeles, California" data-country="Estados Unidos">El Río de Nuestra Señora la Reina de los Ángeles de Porciúncula</button>, en honor a la capilla que Francesco d\'Assisi (Francisco de Asís) había restaurado más de cinco siglos antes; el nombre terminaría heredándolo la futura <button type="button" class="timeline-detail-entrylink" data-id="pueblo-de-los-44-1781">ciudad de Los Ángeles</button>. Meses después, ya en noviembre de 1769, la expedición sigue tierra adentro hacia el norte y acampa junto a un enorme secuoya costero a orillas del arroyo San Francisquito: los soldados españoles lo bautizan simplemente \'<button type="button" class="timeline-detail-geolink" data-region="El Palo Alto" data-country="Estados Unidos">el palo alto</button>\'. El árbol sigue en pie hoy, y su nombre terminaría bautizando, más de un siglo después, en 1894, la ciudad de Palo Alto —fundada junto a la naciente <button type="button" class="timeline-detail-geolink" data-region="Universidad de Stanford" data-country="Estados Unidos">Universidad de Stanford</button>— mucho después de que la expedición que le dio nombre hubiera desaparecido de la memoria de casi todos sus vecinos.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Rusia nunca hubiera expandido su comercio de pieles hacia Alaska a mediados del siglo XVIII?",
      answer:
        "Sin esa amenaza percibida desde el norte, España probablemente habría seguido posponiendo la colonización de Alta California indefinidamente, tal como lo hizo durante más de dos siglos. La misión de San Diego —y todo el sistema de misiones que la siguió— nace menos de una ambición expansiva española que de una reacción defensiva ante una potencia rival, la misma lógica que después llevaría a los rusos a fundar Fuerte Ross, a apenas un día de viaje de la futura San Francisco."
    }
  },
  {
    id: "pueblo-de-los-44-1781",
    year: 1781,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the expanded 1781–1808 sequence, spaced so
    // every plot point remains independently clickable.
    trackYear: 1775.5,
    title: "1781: El Pueblo de los 44",
    author: "Felipe de Neve",
    country: "Estados Unidos",
    region: "Los Ángeles, California",
    type: ICON_TYPE.HISTORY,
    description:
      "El 4 de septiembre de 1781, un grupo de 44 pobladores —once familias, la mayoría procedentes de Sonora y Sinaloa, no de España— funda, por orden del gobernador Felipe de Neve, El Pueblo de Nuestra Señora la Reina de los Ángeles del Río de Porciúncula, el nombre que doce años antes le había dado la expedición Portolá al río cercano en honor a la capilla que Francisco de Asís había restaurado en el siglo XIII. A diferencia de las misiones —centros religiosos— y los presidios —fuertes militares—, el pueblo es una colonia civil y agrícola, pensada para asegurar la frontera norte de Nueva España frente a la expansión rusa y británica, abastecer a los presidios cercanos y complementar económicamente a la Misión San Gabriel. La autoridad fluye en cascada: nominalmente desde el rey Carlos III, que nunca pisó California; en la práctica desde el virrey de Nueva España en Ciudad de México, que gobernaba un territorio que iba de Filipinas a Centroamérica; y sobre el terreno, desde De Neve mismo, gobernador de la Alta California entre 1775 y 1782, quien eligió el sitio por su tierra fértil, agua confiable y cercanía a la misión. Los 44 fundadores eran, contra el mito de una fundación puramente española, abrumadoramente mestizos: según la investigación del historiador William M. Mason, solo dos de ellos eran blancos, veintiséis tenían ascendencia africana y dieciséis eran indígenas o mestizos. La cuenca de Los Ángeles, sin embargo, no estaba vacía: era territorio tongva —también llamados gabrielinos, por la misión cercana— desde hacía miles de años, y su desposesión, aunque gradual, ya había comenzado con la instalación de las misiones. El pueblo crece con lentitud: unos 300 habitantes hacia 1800, entre 1,500 y 2,000 hacia el fin del periodo mexicano, minúsculo comparado con Ciudad de México, que ya rondaba los 150,000. Solo después de la anexión estadounidense de 1848, la fiebre del oro, el ferrocarril y, más tarde, el petróleo y el cine, ese pueblo fronterizo de 44 personas se convertiría en una de las ciudades más grandes del planeta.",
    descriptionHtml:
      'El 4 de septiembre de 1781, un grupo de 44 pobladores —once familias, la mayoría procedentes de <button type="button" class="timeline-detail-geolink" data-region="Sonora" data-country="México">Sonora</button> y <button type="button" class="timeline-detail-geolink" data-region="Sinaloa" data-country="México">Sinaloa</button>, no de España— funda, por orden del gobernador Felipe de Neve, El Pueblo de Nuestra Señora la Reina de los Ángeles del Río de Porciúncula, el nombre que doce años antes le había dado la <button type="button" class="timeline-detail-entrylink" data-id="portola-expedicion-san-diego-1769">expedición Portolá</button> al río cercano en honor a la capilla que <button type="button" class="timeline-detail-entrylink" data-id="porciuncula-restauracion-1205">Francisco de Asís</button> había restaurado en el siglo XIII. A diferencia de las misiones —centros religiosos— y los presidios —fuertes militares—, el pueblo es una colonia civil y agrícola, pensada para asegurar la frontera norte de Nueva España frente a la expansión rusa y británica, abastecer a los presidios cercanos y complementar económicamente a la Misión San Gabriel. La autoridad fluye en cascada: nominalmente desde el rey Carlos III, que nunca pisó California; en la práctica desde el virrey de Nueva España en <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, que gobernaba un territorio que iba de Filipinas a Centroamérica; y sobre el terreno, desde De Neve mismo, gobernador de la Alta California entre 1775 y 1782, quien eligió el sitio por su tierra fértil, agua confiable y cercanía a la misión. Los 44 fundadores eran, contra el mito de una fundación puramente española, abrumadoramente mestizos: según la investigación del historiador William M. Mason, solo dos de ellos eran blancos, veintiséis tenían ascendencia africana y dieciséis eran indígenas o mestizos. La cuenca de <button type="button" class="timeline-detail-geolink" data-region="Los Ángeles, California" data-country="Estados Unidos">Los Ángeles</button>, sin embargo, no estaba vacía: era territorio tongva —también llamados gabrielinos, por la misión cercana— desde hacía miles de años, y su desposesión, aunque gradual, ya había comenzado con la instalación de las misiones. El pueblo crece con lentitud: unos 300 habitantes hacia 1800, entre 1,500 y 2,000 hacia el fin del periodo mexicano, minúsculo comparado con Ciudad de México, que ya rondaba los 150,000. Solo después de la anexión estadounidense de 1848, la fiebre del oro, el ferrocarril y, más tarde, el petróleo y el cine, ese pueblo fronterizo de 44 personas se convertiría en una de las ciudades más grandes del planeta.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Felipe de Neve nunca hubiera insistido en fundar pueblos civiles en Alta California?",
      answer:
        "Alta California habría seguido dependiendo casi por completo de las misiones y los presidios, sin la base civil y agrícola que De Neve consideraba indispensable para sostener la frontera a largo plazo. Es posible que un asentamiento civil hubiera surgido de todos modos en algún punto de la cuenca, pero no necesariamente en 1781, ni con ese nombre heredado de una capilla italiana del siglo XIII, ni con la composición racial tan diversa que documentó Mason — una fundación que la memoria oficial tardaría dos siglos en reconocer."
    }
  },

  {
    id: "carlos-iv-godoy-revolucion-francesa-1788",
    year: 1788,
    month: 12,
    day: 14,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. This begins the re-spaced 1788–1808 sequence.
    trackYear: 1777.9,
    title: "14 de diciembre de 1788: comienza el reinado de Carlos IV",
    author: "Carlos IV y Manuel Godoy",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "Al morir Carlos III el 14 de diciembre de 1788, Carlos IV heredó la Corona española. La Revolución francesa de 1789 convirtió la vecindad con Francia en una crisis: la monarquía temió el contagio revolucionario, guerreó contra la República y, desde 1796, volvió a aliarse con ella frente a Gran Bretaña. Manuel Godoy, guardia de corps favorecido por los reyes, ascendió rápidamente y fue nombrado primer secretario en 1792. Sus cambios de alianza, unidos a la expansión de Napoleón, comprometieron la Armada, el comercio imperial y la estabilidad dinástica, preparando la crisis de 1807–1808.",
    descriptionHtml:
      'Al morir <button type="button" class="timeline-detail-entrylink" data-id="carlos-iii-llega-madrid-1759">Carlos III</button> el 14 de diciembre de 1788, Carlos IV heredó la Corona <button type="button" class="timeline-detail-geolink" data-country="España">española</button>. La Revolución <button type="button" class="timeline-detail-geolink" data-country="Francia">francesa</button> de 1789 convirtió la vecindad con Francia en una crisis: la monarquía temió el contagio revolucionario, <button type="button" class="timeline-detail-entrylink" data-id="ejecuciones-luis-xvi-maria-antonieta-1793">guerreó contra la República</button> y, desde 1796, volvió a aliarse con ella frente a <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Gran Bretaña</button>. Manuel Godoy, guardia de corps favorecido por los reyes, ascendió rápidamente y fue nombrado primer secretario en 1792. Sus cambios de alianza, unidos a la <button type="button" class="timeline-detail-entrylink" data-id="napoleon-golpe-brumario-1799">expansión de Napoleón</button>, comprometieron la Armada, el comercio imperial y la estabilidad dinástica, preparando la <button type="button" class="timeline-detail-entrylink" data-id="fontainebleau-bayona-crisis-1807">crisis de 1807–1808</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Carlos IV no hubiera elevado a Godoy con tanta rapidez?",
      answer:
        "Otro ministro habría tenido que navegar la Revolución francesa y el ascenso de Napoleón, pero las presiones geopolíticas habrían seguido existiendo. Sin Godoy, no habría habido el mismo Tratado de Fontainebleau ni el mismo blanco para la oposición fernandina; la crisis dinástica pudo adoptar otra forma."
    }
  },

  {
    id: "ejecuciones-luis-xvi-maria-antonieta-1793",
    year: 1793,
    month: 1,
    day: 21,
    // Exact calendar date; trackYear only separates the dense late-colonial run.
    trackYear: 1782.7,
    title: "21 de enero de 1793: el regicidio rompe el mundo borbónico",
    author: "Luis XVI, María Antonieta y Carlos IV",
    country: "Francia",
    region: "Plaza de la Revolución, París",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "El 21 de enero de 1793, la República francesa guillotinó a Luis XVI en la plaza de la Revolución de París. Carlos IV había intentado salvar a su pariente borbón; el regicidio convirtió la crisis en ruptura dinástica. Francia declaró la guerra a España el 7 de marzo y España respondió el 23, iniciando la Guerra de la Convención en los Pirineos. María Antonieta murió en la misma plaza el 16 de octubre, profundizando la conmoción monárquica. La derrota española condujo a la Paz de Basilea de 1795 y, paradójicamente, a otra alianza con Francia.",
    descriptionHtml:
      'El 21 de enero de 1793, la República francesa guillotinó a Luis XVI en la <button type="button" class="timeline-detail-geolink" data-region="Plaza de la Revolución, París" data-country="Francia">plaza de la Revolución de París</button>. <button type="button" class="timeline-detail-entrylink" data-id="carlos-iv-godoy-revolucion-francesa-1788">Carlos IV</button> había intentado salvar a su pariente borbón; el regicidio convirtió la crisis en ruptura dinástica. <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button> declaró la guerra a <button type="button" class="timeline-detail-geolink" data-country="España">España</button> el 7 de marzo y España respondió el 23, iniciando la Guerra de la Convención en los <button type="button" class="timeline-detail-geolink" data-region="Pirineos" data-country="España">Pirineos</button>. María Antonieta murió en la misma plaza el 16 de octubre, profundizando la conmoción monárquica. La derrota española condujo a la Paz de <button type="button" class="timeline-detail-geolink" data-region="Basilea" data-country="Suiza">Basilea</button> de 1795 y, paradójicamente, a <button type="button" class="timeline-detail-entrylink" data-id="napoleon-golpe-brumario-1799">otra alianza con Francia</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Carlos IV hubiera mantenido a España neutral después del regicidio?",
      answer:
        "España quizá habría evitado la Guerra de la Convención y su invasión fronteriza, pero la neutralidad habría sido difícil entre una república revolucionaria y las monarquías coaligadas. La crisis dinástica no desaparecería: solo cambiarían el ritmo y las alianzas que condujeron a la dependencia de Francia."
    }
  },

  {
    id: "goya-majas-1795",
    year: 1795,
    // Prado dates the pair separately: 1795–1800 and 1800–1807.
    trackYear: 1789.9,
    title: "1795–1807: Goya confronta desnudo, mirada y censura en las Majas",
    author: "Francisco de Goya",
    authorEntryId: "goya-1746",
    country: "España",
    region: "Palacio de Godoy, Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Entre 1795 y 1800, Goya pintó La maja desnuda; entre 1800 y 1807, su compañera vestida. Ambas pertenecieron al gabinete reservado de Manuel Godoy en Madrid: la primera consta allí en noviembre de 1800 y las dos aparecen juntas en el inventario de 1808. La identidad de la modelo y el encargo exacto siguen sin demostrarse, pese a atribuciones populares a la duquesa de Alba o Pepita Tudó. En 1814 la Inquisición reclamó las obras por «obscenas». Hoy, expuestas juntas en el Prado, confrontan desnudo, mirada y censura sin una lectura única ni identidad segura.",
    descriptionHtml:
      'Entre 1795 y 1800, <button type="button" class="timeline-detail-entrylink" data-id="goya-1746">Goya</button> pintó <em>La maja desnuda</em>; entre 1800 y 1807, su compañera vestida. Ambas pertenecieron al gabinete reservado de <button type="button" class="timeline-detail-entrylink" data-id="carlos-iv-godoy-revolucion-francesa-1788">Manuel Godoy</button> en <button type="button" class="timeline-detail-geolink" data-region="Palacio de Godoy, Madrid" data-country="España">Madrid</button>: la primera consta allí en noviembre de 1800 y las dos aparecen juntas en el inventario de 1808. La identidad de la modelo y el encargo exacto siguen sin demostrarse, pese a atribuciones populares a la duquesa de Alba o Pepita Tudó. En 1814 la <button type="button" class="timeline-detail-entrylink" data-id="inquisicion-espanola-1478">Inquisición</button> reclamó las obras por «obscenas». Hoy, expuestas juntas en el <button type="button" class="timeline-detail-geolink" data-region="Museo del Prado" data-country="España">Prado</button>, confrontan desnudo, mirada y censura sin una lectura única ni identidad segura.',
    butterfly: {
      prompt: "¿Qué se perdería si la Inquisición hubiera destruido las Majas?",
      answer:
        "Desaparecería una confrontación excepcional entre el cuerpo que mira al espectador y las instituciones que intentaron controlarlo. También se perdería la pareja visual que obliga a preguntar por deseo, propiedad, identidad y censura sin aceptar la leyenda de una modelo segura."
    }
  },

  {
    id: "napoleon-golpe-brumario-1799",
    year: 1799,
    month: 11,
    day: 9,
    // The coup continued on 10 November; trackYear preserves its own marker.
    trackYear: 1797.1,
    title: "9–10 de noviembre de 1799: el golpe del 18 de brumario",
    author: "Napoleón Bonaparte",
    country: "Francia",
    region: "Saint-Cloud",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El golpe del 18–19 de brumario —9–10 de noviembre de 1799— derribó el Directorio francés. La maniobra comenzó en París y culminó en Saint-Cloud, donde la presión militar dispersó los Consejos e instauró un Consulado. Napoleón Bonaparte, primer cónsul, concentró rápidamente el poder y en 1804 se coronó emperador. Para España, aliada de Francia desde 1796 bajo Carlos IV y Godoy, el cambio volvió más desigual la relación: la política española quedó subordinada crecientemente a los intereses franceses. No causó por sí solo la invasión de 1808, pero abrió el camino que conduciría a Fontainebleau.",
    descriptionHtml:
      'El golpe del 18–19 de brumario —9–10 de noviembre de 1799— derribó el Directorio francés. La maniobra comenzó en <button type="button" class="timeline-detail-geolink" data-region="París" data-country="Francia">París</button> y culminó en <button type="button" class="timeline-detail-geolink" data-region="Saint-Cloud" data-country="Francia">Saint-Cloud</button>, donde la presión militar dispersó los Consejos e instauró un Consulado. Napoleón Bonaparte, primer cónsul, concentró rápidamente el poder y en 1804 se coronó emperador. Para <button type="button" class="timeline-detail-geolink" data-country="España">España</button>, aliada de <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button> desde 1796 bajo <button type="button" class="timeline-detail-entrylink" data-id="carlos-iv-godoy-revolucion-francesa-1788">Carlos IV y Godoy</button>, el cambio volvió más desigual la relación: la política española quedó subordinada crecientemente a los intereses franceses. No causó por sí solo la invasión de 1808, pero abrió el camino que conduciría a <button type="button" class="timeline-detail-entrylink" data-id="fontainebleau-bayona-crisis-1807">Fontainebleau</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si el Directorio hubiera sobrevivido al 18 de brumario?",
      answer:
        "La alianza franco-española habría seguido expuesta a la guerra europea, pero sin un primer cónsul capaz de concentrar estrategia, diplomacia y ejército en una sola voluntad. El desequilibrio entre ambos países pudo crecer más lentamente y Fontainebleau adoptar otra forma."
    }
  },

  {
    id: "fontainebleau-bayona-crisis-1807",
    year: 1807,
    month: 10,
    day: 27,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Keeps this final Bourbon-crisis point independently clickable.
    trackYear: 1804.3,
    title: "27 de octubre de 1807: Fontainebleau abre España a Napoleón",
    author: "Carlos IV, Fernando VII y Napoleón",
    country: "España",
    region: "Fontainebleau",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "El Tratado de Fontainebleau, firmado el 27 de octubre de 1807, permitió que tropas francesas cruzaran España para invadir y repartir Portugal. Napoleón convirtió el tránsito en ocupación. El Motín de Aranjuez derribó a Godoy y Carlos IV abdicó en Fernando VII el 19 de marzo de 1808. En Bayona, Napoleón forzó una cadena de renuncias: Fernando devolvió la Corona a su padre y Carlos cedió sus derechos al emperador, quien nombró rey a José Bonaparte. La resistencia estalló en Madrid. El Estatuto de Bayona, fechado el 6 de julio, impuso reformas sin soberanía popular.",
    descriptionHtml:
      'El Tratado de <button type="button" class="timeline-detail-geolink" data-region="Fontainebleau" data-country="Francia">Fontainebleau</button>, firmado el 27 de octubre de 1807, permitió que tropas francesas cruzaran <button type="button" class="timeline-detail-geolink" data-country="España">España</button> para invadir y repartir <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button>. <button type="button" class="timeline-detail-entrylink" data-id="napoleon-golpe-brumario-1799">Napoleón</button> convirtió el tránsito en ocupación. El Motín de <button type="button" class="timeline-detail-geolink" data-region="Aranjuez" data-country="España">Aranjuez</button> derribó a Godoy y <button type="button" class="timeline-detail-entrylink" data-id="carlos-iv-godoy-revolucion-francesa-1788">Carlos IV</button> abdicó en Fernando VII el 19 de marzo de 1808. En <button type="button" class="timeline-detail-geolink" data-region="Bayona, Francia" data-country="Francia">Bayona</button>, Napoleón forzó una cadena de renuncias: Fernando devolvió la Corona a su padre y Carlos cedió sus derechos al emperador, quien nombró rey a José Bonaparte. La <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">resistencia estalló</button> en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button>. El Estatuto de <button type="button" class="timeline-detail-geolink" data-region="Bayona, Francia" data-country="Francia">Bayona</button>, fechado el 6 de julio, impuso reformas sin soberanía popular.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Carlos IV y Godoy hubieran negado el paso a las tropas francesas?",
      answer:
        "Napoleón pudo haber invadido igualmente, pero habría encontrado desde el principio a España como enemiga declarada, no como aliada engañada. Sin Fontainebleau, la ocupación habría carecido de su cobertura legal inicial y la crisis entre Carlos IV y Fernando VII quizá no habría entregado la Corona en Bayona."
    }
  },

  {
    id: "guerra-independencia-cadiz-1808",
    year: 1808,
    month: 5,
    day: 2,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Keeps the connected 1807 and 1808 cards separate.
    trackYear: 1806.7,
    title: "2 de mayo de 1808: España resiste y Cádiz redefine la soberanía",
    author: "Guerra de la Independencia y Cortes de Cádiz",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El 2 de mayo de 1808, habitantes de Madrid se alzaron contra las tropas francesas que intentaban trasladar al infante Francisco de Paula. La represión ordenada por Murat y los fusilamientos del día siguiente convirtieron Madrid en símbolo de una resistencia extendida por juntas, guerrillas y ejércitos. La guerra fue internacional —España, Portugal y Gran Bretaña contra Francia—, pero también civil, local y religiosa: españoles combatieron en ambos bandos y el clero movilizó comunidades. En Cádiz, las Cortes promulgaron el 19 de marzo de 1812 una Constitución basada en soberanía nacional y separación de poderes.",
    descriptionHtml:
      'El 2 de mayo de 1808, habitantes de <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> se alzaron contra las <button type="button" class="timeline-detail-entrylink" data-id="fontainebleau-bayona-crisis-1807">tropas francesas</button> que intentaban trasladar al infante Francisco de Paula. La <button type="button" class="timeline-detail-entrylink" data-id="goya-diptico-mayo-1814">represión ordenada por Murat y los fusilamientos del día siguiente</button> convirtieron <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> en símbolo de una <button type="button" class="timeline-detail-entrylink" data-id="agustina-aragon-zaragoza-1808">resistencia extendida</button> por juntas, guerrillas y ejércitos. <button type="button" class="timeline-detail-entrylink" data-id="goya-desastres-guerra-1810">La guerra</button> fue internacional —<button type="button" class="timeline-detail-geolink" data-country="España">España</button>, <button type="button" class="timeline-detail-geolink" data-country="Portugal">Portugal</button> y <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Gran Bretaña</button> contra <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button>—, pero también civil, local y religiosa: españoles combatieron en ambos bandos y el clero movilizó comunidades. En <button type="button" class="timeline-detail-geolink" data-region="Cádiz" data-country="España">Cádiz</button>, las Cortes promulgaron el 19 de marzo de 1812 una <button type="button" class="timeline-detail-entrylink" data-id="riego-trienio-liberal-1820">Constitución</button> basada en soberanía nacional y separación de poderes.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si las Cortes no hubieran podido reunirse en Cádiz durante la guerra?",
      answer:
        "La resistencia habría conservado su dimensión militar, pero carecería de un proyecto político común capaz de afirmar que la soberanía pertenecía a la nación. Sin la Constitución de 1812, el liberalismo español e hispanoamericano habría perdido su texto de referencia más influyente."
    }
  },

  {
    id: "agustina-aragon-zaragoza-1808",
    year: 1808,
    month: 7,
    day: 2,
    // Exact calendar date; final position in the re-spaced colonial sequence.
    trackYear: 1809,
    title: "2 de julio de 1808: Agustina dispara en la puerta del Portillo",
    author: "Agustina Zaragoza Doménech",
    country: "España",
    region: "Puerta del Portillo, Zaragoza",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El 2 de julio de 1808, durante el primer sitio francés de Zaragoza, un asalto alcanzó la batería de la puerta del Portillo. La tradición documentada identifica a Agustina Zaragoza Doménech, luego llamada Agustina de Aragón, tomando la mecha y disparando un cañón cuando sus defensores habían caído. Su acción elevó la moral y la convirtió en emblema de resistencia. No combatió sola: Casta Álvarez, Manuela Sancho y otras mujeres también participaron en la defensa. El episodio pasó de experiencia bélica a leyenda nacional, pintura, monumento y, bajo el franquismo, cine histórico con finalidad política.",
    descriptionHtml:
      'El 2 de julio de 1808, durante el <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">primer sitio francés</button> de <button type="button" class="timeline-detail-geolink" data-region="Zaragoza" data-country="España">Zaragoza</button>, un asalto alcanzó la batería de la <button type="button" class="timeline-detail-geolink" data-region="Puerta del Portillo, Zaragoza" data-country="España">puerta del Portillo</button>. La tradición documentada identifica a Agustina Zaragoza Doménech, luego llamada Agustina de Aragón, tomando la mecha y disparando un cañón cuando sus defensores habían caído. Su acción elevó la moral y la convirtió en emblema de resistencia. No combatió sola: Casta Álvarez, Manuela Sancho y otras mujeres también participaron en la defensa. El episodio pasó de experiencia bélica a leyenda nacional, pintura, monumento y, bajo el franquismo, <button type="button" class="timeline-detail-entrylink" data-id="agustina-aragon-pelicula-1950">cine histórico con finalidad política</button>.',
    butterfly: {
      prompt: "¿Qué cambiaría si la memoria del sitio hubiera conservado un coro de mujeres en lugar de una sola heroína?",
      answer:
        "Agustina seguiría siendo decisiva, pero Casta Álvarez, Manuela Sancho y muchas colaboradoras anónimas ocuparían también el relato público. La defensa aparecería menos como hazaña individual y más como movilización colectiva, dificultando que ideologías posteriores apropiaran una única figura."
    }
  },

  {
    id: "goya-desastres-guerra-1810",
    year: 1810,
    // Nudged beyond the era boundary so it does not overlap the 1808 Portillo point.
    trackYear: 1811,
    title: "1810–1820: Goya graba Los desastres de la guerra",
    author: "Francisco de Goya",
    authorEntryId: "goya-1746",
    country: "España",
    region: "Real Academia de Bellas Artes de San Fernando",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "Entre 1810 y 1820, Goya elaboró las 82 láminas conocidas como Los desastres de la guerra. Las primeras se vinculan a la violencia de la Guerra de la Independencia; otras muestran la hambruna madrileña de 1811–1812 y los llamados Caprichos enfáticos critican la represión y el regreso del absolutismo. No son un reportaje literal ni celebran héroes: construyen una mirada personal sobre víctimas, crueldad y miseria. Goya no publicó la serie en vida. La Real Academia de San Fernando adquirió las planchas en 1862 y editó públicamente 80 por primera vez en Madrid, en 1863.",
    descriptionHtml:
      'Entre 1810 y 1820, <button type="button" class="timeline-detail-entrylink" data-id="goya-1746">Goya</button> elaboró las 82 láminas conocidas como <em>Los desastres de la guerra</em>. Las primeras se vinculan a la violencia de la <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">Guerra de la Independencia</button>; otras muestran la hambruna <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">madrileña</button> de 1811–1812 y los llamados <em>Caprichos enfáticos</em> critican la represión y el <button type="button" class="timeline-detail-entrylink" data-id="riego-trienio-liberal-1820">regreso del absolutismo</button>. No son un reportaje literal ni celebran héroes: construyen una mirada personal sobre víctimas, crueldad y miseria. Goya no publicó la serie en vida. La <button type="button" class="timeline-detail-geolink" data-region="Real Academia de Bellas Artes de San Fernando" data-country="España">Real Academia de San Fernando</button> adquirió las planchas en 1862 y editó públicamente 80 por primera vez en Madrid, en 1863.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Goya hubiera publicado Los desastres durante la guerra?",
      answer:
        "La serie habría intervenido en un conflicto todavía abierto y afrontado censura, confiscación o represalias. Publicada medio siglo después, perdió inmediatez política, pero ganó una lectura más amplia: ninguna bandera puede convertir el hambre, la tortura y los cadáveres en victoria."
    }
  },

  {
    id: "tratado-valencay-1813",
    year: 1813,
    month: 12,
    day: 11,
    // Exact calendar date; trackYear separates both 1813 plot points.
    trackYear: 1814.3,
    title: "11 de diciembre de 1813: Valençay promete una paz que no entra en vigor",
    author: "Napoleón Bonaparte y Fernando VII",
    country: "Francia",
    region: "Château de Valençay",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "El 11 de diciembre de 1813, Napoleón y Fernando VII acordaron el Tratado de Valençay, negociado en el castillo francés donde permanecía cautivo el monarca español. Napoleón lo reconocía como rey y proponía paz, retirada de tropas e integridad territorial, todo condicionado a ratificación. La Regencia y las Cortes de Cádiz rechazaron el pacto porque Fernando había negociado sin ellas; por eso nunca entró en vigor ni terminó legalmente la guerra. El tratado abrió el camino al regreso del rey en 1814. Ya en España, Fernando abolió la Constitución de 1812 y restauró el absolutismo.",
    descriptionHtml:
      'El 11 de diciembre de 1813, <button type="button" class="timeline-detail-entrylink" data-id="napoleon-golpe-brumario-1799">Napoleón</button> y Fernando VII acordaron el Tratado de <button type="button" class="timeline-detail-geolink" data-region="Château de Valençay" data-country="Francia">Valençay</button>, negociado en el castillo francés donde permanecía cautivo el monarca español. Napoleón lo reconocía como rey y proponía paz, retirada de tropas e integridad territorial, todo condicionado a ratificación. La Regencia y las Cortes de <button type="button" class="timeline-detail-geolink" data-region="Cádiz" data-country="España">Cádiz</button> rechazaron el pacto porque Fernando había negociado sin ellas; por eso nunca entró en vigor ni terminó legalmente la <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">guerra</button>. El tratado abrió el camino al regreso del rey en 1814. Ya en <button type="button" class="timeline-detail-geolink" data-country="España">España</button>, Fernando abolió la <button type="button" class="timeline-detail-entrylink" data-id="riego-trienio-liberal-1820">Constitución de 1812 y restauró el absolutismo</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si la Regencia y las Cortes hubieran ratificado Valençay?",
      answer:
        "La guerra pudo terminar antes mediante el pacto de un rey cautivo, pero las instituciones gaditanas habrían cedido su pretensión de representar a la nación. Fernando habría regresado con una legitimidad diplomática más fuerte frente al orden constitucional que pronto abolió."
    }
  },

  {
    id: "goya-diptico-mayo-1814",
    year: 1814,
    month: 2,
    day: 24,
    // Real date; the slight visual offset keeps each 1810–1820 point
    // independently clickable while preserving the displayed chronology.
    trackYear: 1815.4,
    title: "1814: Goya convierte el 2 y el 3 de mayo en memoria",
    author: "Francisco de Goya",
    authorEntryId: "goya-1746",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "En 1814, Francisco de Goya pintó como díptico La lucha con los mamelucos y Los fusilamientos del 3 de mayo. La Regencia había aceptado el encargo el 24 de febrero; Fernando VII lo continuó después de regresar y abolir la Constitución de Cádiz. Contrario a una interpretación repetida, no fueron concebidos para decorar las calles: facturas indican que se financiaron para Palacio y que sus marcos quedaron terminados el 29 de noviembre. Una pintura muestra el levantamiento contra las tropas de Murat; la otra, la represalia francesa. Ambas se conservan en el Museo del Prado.",
    descriptionHtml:
      'En 1814, <button type="button" class="timeline-detail-entrylink" data-id="goya-1746">Francisco de Goya</button> pintó como díptico <em>La lucha con los mamelucos</em> y <em>Los fusilamientos del 3 de mayo</em>. La Regencia había aceptado el encargo el 24 de febrero; <button type="button" class="timeline-detail-entrylink" data-id="tratado-valencay-1813">Fernando VII</button> lo continuó después de regresar y abolir la <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">Constitución de Cádiz</button>. Contrario a una interpretación repetida, no fueron concebidos para decorar las calles: facturas indican que se financiaron para <button type="button" class="timeline-detail-geolink" data-region="Palacio Real de Madrid" data-country="España">Palacio</button> y que sus marcos quedaron terminados el 29 de noviembre. Una pintura muestra el <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">levantamiento contra las tropas de Murat</button>; la otra, <button type="button" class="timeline-detail-entrylink" data-id="goya-desastres-guerra-1810">la represalia francesa</button>. Ambas se conservan en el <button type="button" class="timeline-detail-geolink" data-region="Museo del Prado" data-country="España">Museo del Prado</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Goya hubiera convertido aquellas jornadas en una celebración triunfal de la Corona?",
      answer:
        "El levantamiento habría quedado representado como propaganda dinástica. Al concentrarse en cuerpos vulnerables, violencia callejera y ejecución, Goya dejó una memoria que rebasa al monarca que financió las obras y enfrenta al espectador con el costo humano de la guerra."
    }
  },

  {
    id: "goya-pinturas-negras-1819",
    year: 1819,
    // Anchored to Goya's acquisition of the house; Prado dates Saturno 1820–1823.
    trackYear: 1818.8,
    title: "1819–1823: Goya cubre la Quinta del Sordo con sus Pinturas negras",
    author: "Francisco de Goya",
    authorEntryId: "goya-1746",
    country: "España",
    region: "Quinta del Sordo, Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Tras adquirir en 1819 la Quinta del Sordo, junto al río Manzanares, Goya cubrió dos habitaciones con escenas sombrías, fechadas hoy entre 1820 y 1823. El conjunto conservado reúne catorce Pinturas negras; Saturno ocupaba una pared lateral de la planta baja. Pintado directamente sobre muro seco, muestra una figura devoradora sin los atributos mitológicos habituales. Su sentido permanece abierto: puede evocar tiempo, vejez, violencia o poder, pero ninguna lectura es definitiva. Salvador Martínez Cubells trasladó las pinturas a lienzo desde 1874; el barón d’Erlanger las donó al Estado en 1881. Hoy están en el Prado.",
    descriptionHtml:
      'Tras adquirir en 1819 la <button type="button" class="timeline-detail-geolink" data-region="Quinta del Sordo, Madrid" data-country="España">Quinta del Sordo</button>, junto al <button type="button" class="timeline-detail-geolink" data-region="Río Manzanares" data-country="España">río Manzanares</button>, <button type="button" class="timeline-detail-entrylink" data-id="goya-1746">Goya</button> cubrió dos habitaciones con escenas sombrías, fechadas hoy entre 1820 y 1823. El conjunto conservado reúne catorce <button type="button" class="timeline-detail-entrylink" data-id="goya-aquelarre-1798"><em>Pinturas negras</em></button>; <em>Saturno</em> ocupaba una pared lateral de la planta baja. Pintado directamente sobre muro seco, muestra una figura devoradora sin los atributos mitológicos habituales. Su sentido permanece abierto: puede evocar tiempo, vejez, violencia o poder, pero ninguna lectura es definitiva. Salvador Martínez Cubells trasladó las pinturas a lienzo desde 1874; el barón d’Erlanger las donó al Estado en 1881. Hoy están en el <button type="button" class="timeline-detail-geolink" data-region="Museo del Prado" data-country="España">Prado</button>.',
    butterfly: {
      prompt: "¿Qué conoceríamos de las Pinturas negras si hubieran permanecido sobre los muros privados de la Quinta?",
      answer:
        "Probablemente se habrían perdido con la casa y solo sobrevivirían descripciones parciales. Su traslado alteró la materia original, pero permitió que aquel espacio íntimo de miedo, vejez y violencia entrara en la historia mundial del arte."
    }
  },

  {
    id: "riego-trienio-liberal-1820",
    year: 1820,
    month: 1,
    day: 1,
    title: "1 de enero de 1820: Riego abre el Trienio Liberal",
    author: "Rafael del Riego y Fernando VII",
    country: "España",
    region: "Las Cabezas de San Juan",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT, ICON_TYPE.ROYAL],
    description:
      "Fernando VII volvió a España en 1814 y anuló la Constitución de Cádiz, inaugurando el Sexenio Absolutista. El 1 de enero de 1820, Rafael del Riego se pronunció en Las Cabezas de San Juan con tropas destinadas a sofocar las independencias americanas. Otros levantamientos extendieron la rebelión y el rey aceptó restituir la Constitución en marzo: comenzó el Trienio Liberal, que reabrió las Cortes y reanudó reformas. En 1823, los Cien Mil Hijos de San Luis invadieron desde Francia, restauraron el absolutismo y abrieron la Década Ominosa. Fernando gobernó con represión hasta morir en 1833.",
    descriptionHtml:
      '<button type="button" class="timeline-detail-entrylink" data-id="tratado-valencay-1813">Fernando VII volvió</button> a <button type="button" class="timeline-detail-geolink" data-country="España">España</button> en 1814 y anuló la <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">Constitución</button> de <button type="button" class="timeline-detail-geolink" data-region="Cádiz" data-country="España">Cádiz</button>, inaugurando el Sexenio Absolutista. El 1 de enero de 1820, Rafael del Riego se pronunció en <button type="button" class="timeline-detail-geolink" data-region="Las Cabezas de San Juan" data-country="España">Las Cabezas de San Juan</button> con tropas destinadas a sofocar las <button type="button" class="timeline-detail-entrylink" data-id="carta-de-jamaica-1815">independencias</button> <button type="button" class="timeline-detail-geolink" data-region="América española">americanas</button>. Otros levantamientos extendieron la rebelión y el rey aceptó restituir la Constitución en marzo: comenzó el Trienio Liberal, que reabrió las Cortes y reanudó reformas. En 1823, los <button type="button" class="timeline-detail-entrylink" data-id="fontainebleau-bayona-crisis-1807">Cien Mil Hijos de San Luis</button> invadieron desde <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button>, restauraron el absolutismo y abrieron la Década Ominosa. <button type="button" class="timeline-detail-entrylink" data-id="goya-pinturas-negras-1819">Fernando gobernó con represión</button> hasta <button type="button" class="timeline-detail-entrylink" data-id="muerte-fernando-vii-carlismo-1833">morir en 1833</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si el pronunciamiento de Riego no hubiera prendido fuera de Andalucía?",
      answer:
        "Fernando VII probablemente habría conservado el absolutismo sin interrupción y el ejército expedicionario habría intentado partir hacia América. La Constitución de 1812 no habría vivido su segundo ensayo, y los liberales españoles habrían perdido tres años decisivos de legislación, prensa y práctica parlamentaria."
    }
  },

  {
    id: "muerte-fernando-vii-carlismo-1833",
    year: 1833,
    month: 9,
    day: 29,
    title: "29 de septiembre de 1833: la sucesión abre la guerra carlista",
    author: "María Cristina, Isabel II y Carlos María Isidro",
    country: "España",
    region: "La Granja de San Ildefonso",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "Fernando VII murió en La Granja de San Ildefonso el 29 de septiembre de 1833 sin hijo varón. Isabel II, de tres años, heredó la Corona bajo la regencia de su madre, María Cristina de Borbón. Carlos María Isidro, hermano del rey, rechazó la sucesión femenina; sus partidarios lo proclamaron Carlos V. La disputa abrió la Primera Guerra Carlista: defensores de la monarquía tradicional y los fueros combatieron a los isabelinos, cuyo gobierno buscó apoyo liberal. La regencia aceleró reformas, desamortización y constitucionalismo, mientras la guerra arraigaba especialmente en Navarra, País Vasco, Cataluña y Maestrazgo.",
    descriptionHtml:
      '<button type="button" class="timeline-detail-entrylink" data-id="riego-trienio-liberal-1820">Fernando VII</button> murió en <button type="button" class="timeline-detail-geolink" data-region="La Granja de San Ildefonso" data-country="España">La Granja de San Ildefonso</button> el 29 de septiembre de 1833 sin hijo varón. <button type="button" class="timeline-detail-entrylink" data-id="isabel-ii-gobierno-personal-1843">Isabel II</button>, de tres años, heredó la Corona bajo la regencia de su madre, María Cristina de Borbón. Carlos María Isidro, hermano del rey, rechazó la sucesión femenina; sus partidarios lo proclamaron Carlos V. La disputa abrió la Primera Guerra Carlista: defensores de la monarquía tradicional y los fueros combatieron a los isabelinos, cuyo gobierno buscó <button type="button" class="timeline-detail-entrylink" data-id="riego-trienio-liberal-1820">apoyo liberal</button>. La regencia aceleró reformas, desamortización y constitucionalismo, mientras la guerra arraigaba especialmente en <button type="button" class="timeline-detail-geolink" data-region="Navarra" data-country="España">Navarra</button>, <button type="button" class="timeline-detail-geolink" data-region="País Vasco" data-country="España">País Vasco</button>, <button type="button" class="timeline-detail-geolink" data-region="Cataluña" data-country="España">Cataluña</button> y <button type="button" class="timeline-detail-geolink" data-region="Maestrazgo" data-country="España">Maestrazgo</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Fernando VII hubiera dejado un heredero varón?",
      answer:
        "Carlos María Isidro habría perdido su principal argumento dinástico y la Primera Guerra Carlista quizá no habría estallado en 1833. Sin embargo, la lucha entre absolutismo, fueros y liberalismo ya existía; probablemente habría reaparecido mediante otro conflicto político o militar."
    }
  },

  {
    id: "isabel-ii-gobierno-personal-1843",
    year: 1843,
    month: 11,
    day: 10,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Prevents clustering with the 1842 Uruguay point.
    trackYear: 1843.3,
    title: "10 de noviembre de 1843: Isabel II comienza su gobierno personal",
    author: "Isabel II",
    country: "España",
    region: "Palacio del Senado",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "Las Cortes declararon mayor de edad a Isabel II cuando tenía trece años, adelantando su mayoría para terminar la regencia de Espartero. El 10 de noviembre de 1843 juró la Constitución de 1837 en el Palacio del Senado de Madrid y comenzó su gobierno personal. Su reinado consolidó una monarquía liberal, pero restringida: moderados y progresistas se alternaron mediante pronunciamientos y elecciones manipuladas. La Constitución de 1845 reforzó la Corona y el centralismo; reformas administrativas, ferrocarriles y crecimiento urbano modernizaron España, mientras corrupción, desigualdad y exclusión política alimentaron una oposición que acabaría expulsándola en 1868.",
    descriptionHtml:
      'Las Cortes declararon mayor de edad a <button type="button" class="timeline-detail-entrylink" data-id="muerte-fernando-vii-carlismo-1833">Isabel II</button> cuando tenía trece años, adelantando su mayoría para terminar la regencia de Espartero. El 10 de noviembre de 1843 juró la Constitución de 1837 en el <button type="button" class="timeline-detail-geolink" data-region="Palacio del Senado" data-country="España">Palacio del Senado</button> de <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> y comenzó su gobierno personal. Su reinado consolidó una monarquía liberal, pero restringida: moderados y progresistas se alternaron mediante <button type="button" class="timeline-detail-entrylink" data-id="riego-trienio-liberal-1820">pronunciamientos</button> y elecciones manipuladas. La Constitución de 1845 reforzó la Corona y el centralismo; reformas administrativas, ferrocarriles y crecimiento urbano modernizaron <button type="button" class="timeline-detail-geolink" data-country="España">España</button>, mientras corrupción, desigualdad y exclusión política alimentaron una oposición que acabaría <button type="button" class="timeline-detail-entrylink" data-id="revolucion-gloriosa-1868">expulsándola en 1868</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Isabel II hubiera permanecido bajo una regencia hasta la edad constitucional?",
      answer:
        "El poder habría seguido disputándose alrededor del regente y las facciones militares durante varios años más. Declararla adulta a los trece resolvió la regencia sobre el papel, pero trasladó esa inestabilidad directamente a una reina adolescente sin experiencia propia de gobierno."
    }
  },

  {
    id: "revolucion-gloriosa-1868",
    year: 1868,
    month: 9,
    day: 18,
    title: "18 de septiembre de 1868: la Gloriosa destrona a Isabel II",
    author: "Topete, Prim y Serrano",
    country: "España",
    region: "Cádiz",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "El 18 de septiembre de 1868, la Armada se pronunció en Cádiz bajo Juan Bautista Topete; Juan Prim y Francisco Serrano encabezaron una coalición de progresistas, demócratas y unionistas contra Isabel II. Tras la derrota en Alcolea, la reina cruzó desde San Sebastián a Francia el 30 de septiembre. La Gloriosa derribó su régimen, formó juntas y un Gobierno Provisional e inauguró el Sexenio Democrático. La Constitución de 1869 reconoció sufragio universal masculino, derechos y libertad religiosa dentro de una monarquía parlamentaria. La revolución aceleró el liberalismo, pero abrió una búsqueda de rey y régimen.",
    descriptionHtml:
      'El 18 de septiembre de 1868, la Armada se pronunció en <button type="button" class="timeline-detail-geolink" data-region="Cádiz" data-country="España">Cádiz</button> bajo Juan Bautista Topete; Juan Prim y Francisco Serrano encabezaron una coalición de progresistas, demócratas y unionistas contra <button type="button" class="timeline-detail-entrylink" data-id="isabel-ii-gobierno-personal-1843">Isabel II</button>. Tras la derrota en <button type="button" class="timeline-detail-geolink" data-region="Alcolea" data-country="España">Alcolea</button>, la reina cruzó desde <button type="button" class="timeline-detail-geolink" data-region="San Sebastián" data-country="España">San Sebastián</button> a <button type="button" class="timeline-detail-geolink" data-country="Francia">Francia</button> el 30 de septiembre. La Gloriosa derribó su régimen, formó juntas y un Gobierno Provisional e inauguró el Sexenio Democrático. La <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">Constitución de 1869</button> reconoció sufragio universal masculino, derechos y libertad religiosa dentro de una monarquía parlamentaria. La revolución aceleró el liberalismo, pero abrió una <button type="button" class="timeline-detail-entrylink" data-id="amadeo-i-1871">búsqueda de rey y régimen</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si las fuerzas de Isabel II hubieran vencido en Alcolea?",
      answer:
        "La reina habría conservado el trono temporalmente, pero la coalición contra su régimen y la crisis de legitimidad seguirían abiertas. La Constitución democrática de 1869, el sufragio universal masculino y la búsqueda de una nueva monarquía habrían quedado aplazados o adoptado otra vía."
    }
  },

  {
    id: "amadeo-i-1871",
    year: 1871,
    month: 1,
    day: 2,
    // Real date; nudged track position only to keep the 1868–1875 chain legible.
    trackYear: 1870,
    title: "2 de enero de 1871: Amadeo I jura la Constitución",
    author: "Amadeo I y Juan Prim",
    country: "España",
    region: "Palacio de las Cortes",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "Las Cortes eligieron a Amadeo de Saboya, hijo de Víctor Manuel II de Italia, para encarnar la monarquía parlamentaria creada en 1869. Llegó a Cartagena el 30 de diciembre de 1870, cuando su defensor, Juan Prim, acababa de morir tras un atentado en Madrid. El 2 de enero de 1871 juró la Constitución ante las Cortes. Sin Prim, quedó aislado entre republicanos, carlistas, alfonsinos, Iglesia, aristocracia y partidos divididos, mientras continuaban la guerra de Cuba y la Tercera Guerra Carlista. Incapaz de formar mayorías estables, renunció a la Corona el 11 de febrero de 1873.",
    descriptionHtml:
      'Las Cortes eligieron a Amadeo de Saboya, hijo de Víctor Manuel II de <button type="button" class="timeline-detail-geolink" data-country="Italia">Italia</button>, para encarnar la <button type="button" class="timeline-detail-entrylink" data-id="revolucion-gloriosa-1868">monarquía parlamentaria creada en 1869</button>. Llegó a <button type="button" class="timeline-detail-geolink" data-region="Cartagena" data-country="España">Cartagena</button> el 30 de diciembre de 1870, cuando su defensor, <button type="button" class="timeline-detail-entrylink" data-id="revolucion-gloriosa-1868">Juan Prim</button>, acababa de morir tras un atentado en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button>. El 2 de enero de 1871 juró la Constitución ante las <button type="button" class="timeline-detail-geolink" data-region="Palacio de las Cortes" data-country="España">Cortes</button>. Sin Prim, quedó aislado entre republicanos, carlistas, alfonsinos, Iglesia, aristocracia y partidos divididos, mientras continuaban la guerra de <button type="button" class="timeline-detail-geolink" data-country="Cuba">Cuba</button> y la <button type="button" class="timeline-detail-entrylink" data-id="muerte-fernando-vii-carlismo-1833">Tercera Guerra Carlista</button>. Incapaz de formar mayorías estables, <button type="button" class="timeline-detail-entrylink" data-id="primera-republica-1873">renunció a la Corona el 11 de febrero de 1873</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Juan Prim hubiera sobrevivido al atentado de 1870?",
      answer:
        "Prim habría dado a Amadeo su principal apoyo político y militar, quizá articulando una mayoría estable alrededor de la nueva dinastía. La monarquía democrática habría ganado tiempo, aunque las guerras, las divisiones partidistas y la oposición carlista, republicana y alfonsina no habrían desaparecido."
    }
  },

  {
    id: "primera-republica-1873",
    year: 1873,
    month: 2,
    day: 11,
    // Real date; nudged track position only to separate it from Puerto Rico.
    trackYear: 1871.2,
    title: "11 de febrero de 1873: se proclama la Primera República",
    author: "Figueras, Pi y Margall, Salmerón y Castelar",
    country: "España",
    region: "Palacio de las Cortes",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "El 11 de febrero de 1873, reunidos Congreso y Senado, la Asamblea Nacional aceptó la renuncia de Amadeo I y proclamó la Primera República. En once meses gobernaron cuatro presidentes —Estanislao Figueras, Pi y Margall, Nicolás Salmerón y Emilio Castelar— mientras el país enfrentaba la Tercera Guerra Carlista, la guerra de Cuba y la rebelión cantonal, que convirtió Cartagena en foco federalista. El proyecto de Constitución federal no llegó a aprobarse. El golpe de Pavía disolvió las Cortes el 3 de enero de 1874; Serrano dirigió una república autoritaria hasta la restauración borbónica de diciembre.",
    descriptionHtml:
      'El 11 de febrero de 1873, reunidos <button type="button" class="timeline-detail-geolink" data-region="Palacio de las Cortes" data-country="España">Congreso y Senado</button>, la Asamblea Nacional aceptó la <button type="button" class="timeline-detail-entrylink" data-id="amadeo-i-1871">renuncia de Amadeo I</button> y proclamó la Primera República. En once meses gobernaron cuatro presidentes —Estanislao Figueras, Pi y Margall, Nicolás Salmerón y Emilio Castelar— mientras el país enfrentaba la <button type="button" class="timeline-detail-entrylink" data-id="muerte-fernando-vii-carlismo-1833">Tercera Guerra Carlista</button>, la guerra de <button type="button" class="timeline-detail-geolink" data-country="Cuba">Cuba</button> y la rebelión cantonal, que convirtió <button type="button" class="timeline-detail-geolink" data-region="Cartagena" data-country="España">Cartagena</button> en foco federalista. El proyecto de Constitución federal no llegó a aprobarse. El golpe de Pavía disolvió las Cortes el 3 de enero de 1874; Serrano dirigió una república autoritaria hasta la <button type="button" class="timeline-detail-entrylink" data-id="restauracion-alfonso-xii-1875">restauración borbónica de diciembre</button>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si la Constitución federal de 1873 hubiera sido aprobada?",
      answer:
        "La República habría contado con un marco para distribuir poder entre sus estados y quizá canalizar parte del federalismo cantonal. Aun así, necesitaba sobrevivir a guerras simultáneas, divisiones internas y oposición militar; una constitución por sí sola no garantizaba estabilidad."
    }
  },

  {
    id: "restauracion-alfonso-xii-1875",
    year: 1875,
    month: 1,
    day: 14,
    // Real date; nudged track position only to keep neighboring cards distinct.
    trackYear: 1874,
    title: "14 de enero de 1875: Alfonso XII entra en Madrid",
    author: "Alfonso XII y Antonio Cánovas del Castillo",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ROYAL],
    description:
      "El pronunciamiento de Martínez Campos en Sagunto, el 29 de diciembre de 1874, restauró a los Borbones en Alfonso XII, hijo de Isabel II. El rey llegó a Barcelona el 9 de enero de 1875 y entró en Madrid el 14, inicio de su reinado. Antonio Cánovas diseñó la Restauración: Constitución de 1876, soberanía compartida entre Corona y Cortes, centralización y alternancia entre conservadores y liberales. El sistema aportó estabilidad tras el Sexenio, pero descansó en caciquismo y fraude electoral. Alfonso murió en 1885; María Cristina gobernó como regente durante la minoría de Alfonso XIII.",
    descriptionHtml:
      'El pronunciamiento de Martínez Campos en <button type="button" class="timeline-detail-geolink" data-region="Sagunto" data-country="España">Sagunto</button>, el 29 de diciembre de 1874, restauró a los Borbones en Alfonso XII, hijo de <button type="button" class="timeline-detail-entrylink" data-id="isabel-ii-gobierno-personal-1843">Isabel II</button>. El rey llegó a <button type="button" class="timeline-detail-geolink" data-region="Barcelona" data-country="España">Barcelona</button> el 9 de enero de 1875 y entró en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> el 14, inicio de su reinado. Antonio Cánovas diseñó la Restauración: Constitución de 1876, soberanía compartida entre Corona y Cortes, centralización y alternancia entre conservadores y liberales. El sistema aportó estabilidad tras el <button type="button" class="timeline-detail-entrylink" data-id="revolucion-gloriosa-1868">Sexenio</button>, pero descansó en caciquismo y fraude electoral. Alfonso murió en 1885; María Cristina gobernó como regente durante la minoría de Alfonso XIII.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Martínez Campos no hubiera proclamado a Alfonso XII en Sagunto?",
      answer:
        "Cánovas prefería una restauración civil y negociada, por lo que el regreso borbónico quizá habría ocurrido de todos modos, aunque más tarde. El pronunciamiento aceleró el proceso y reveló que el ejército seguía actuando como árbitro del régimen político."
    }
  },

  {
    id: "misericordia-galdos-1897",
    year: 1897,
    // Real year; nudged track position only within the dense 1896–1899 sequence.
    trackYear: 1896.6,
    title: "1897: Galdós publica Misericordia antes del Desastre",
    author: "Benito Pérez Galdós",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    types: [ICON_TYPE.LITERATURE, ICON_TYPE.HISTORY],
    description:
      "En 1897 Benito Pérez Galdós publicó Misericordia, novela situada en los barrios pobres de Madrid. Benina, criada que mendiga en secreto para sostener a su arruinada señora, Doña Paca, atraviesa iglesias, casas de préstamos, comedores y calles donde caridad, hambre y apariencia social conviven. El ciego Almudena, inmigrante marroquí, amplía ese mapa humano más allá del catolicismo español. Galdós convierte la pobreza producida bajo la Restauración en experiencia cotidiana, sin idealizar a pobres ni benefactores. Publicada un año antes del Desastre de 1898, la obra revela una crisis interior previa a la pérdida del imperio.",
    descriptionHtml:
      'En 1897 Benito Pérez Galdós publicó <em>Misericordia</em>, novela situada en los barrios pobres de <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button>. Benina, criada que mendiga en secreto para sostener a su arruinada señora, Doña Paca, atraviesa iglesias, casas de préstamos, comedores y calles donde caridad, hambre y apariencia social conviven. El ciego Almudena, inmigrante <button type="button" class="timeline-detail-geolink" data-country="Marruecos">marroquí</button>, amplía ese mapa humano más allá del catolicismo <button type="button" class="timeline-detail-geolink" data-country="España">español</button>. Galdós convierte la pobreza producida bajo la <button type="button" class="timeline-detail-entrylink" data-id="restauracion-alfonso-xii-1875">Restauración</button> en experiencia cotidiana, sin idealizar a pobres ni benefactores. Publicada un año antes del <button type="button" class="timeline-detail-entrylink" data-id="desastre-1898-tratado-paris">Desastre de 1898</button>, la obra revela una crisis interior previa a la pérdida del imperio.',
    butterfly: {
      prompt: "¿Qué habría cambiado si Misericordia se hubiera publicado después del Desastre de 1898?",
      answer:
        "La novela podría leerse como una respuesta directa a la derrota imperial. Al aparecer un año antes, resulta más incómoda y reveladora: muestra que la pobreza, la desigualdad y la crisis moral de la Restauración ya estaban presentes antes de que 1898 les diera un nombre nacional."
    }
  },

  {
    id: "desastre-1898-tratado-paris",
    year: 1898,
    month: 12,
    day: 10,
    // Real date; nudged track position only within the dense 1896–1899 sequence.
    trackYear: 1897.8,
    title: "10 de diciembre de 1898: el Tratado de París y el Desastre",
    author: "España, Estados Unidos y movimientos independentistas",
    country: "España",
    region: "París",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El Tratado de París, firmado el 10 de diciembre de 1898, cerró la guerra hispano-estadounidense. España renunció a su soberanía sobre Cuba y cedió Puerto Rico, Guam y Filipinas a Estados Unidos; por Filipinas recibió veinte millones de dólares. Las derrotas de Manila y Santiago de Cuba exhibieron la debilidad naval española, pero cubanos y filipinos ya luchaban por independizarse antes de la intervención estadounidense. En España, el «Desastre» quebró la imagen de la Restauración y alimentó el regeneracionismo. Para las islas, significó descolonización incompleta: terminó un imperio y comenzó otra dominación sobre pueblos distintos.",
    descriptionHtml:
      'El Tratado de <button type="button" class="timeline-detail-geolink" data-region="París" data-country="Francia">París</button>, firmado el 10 de diciembre de 1898, cerró la guerra hispano-estadounidense. <button type="button" class="timeline-detail-geolink" data-country="España">España</button> renunció a su soberanía sobre <button type="button" class="timeline-detail-geolink" data-country="Cuba">Cuba</button> y cedió <button type="button" class="timeline-detail-geolink" data-country="Puerto Rico">Puerto Rico</button>, <button type="button" class="timeline-detail-geolink" data-country="Guam">Guam</button> y <button type="button" class="timeline-detail-geolink" data-country="Filipinas">Filipinas</button> a <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">Estados Unidos</button>; por Filipinas recibió veinte millones de dólares. Las derrotas de <button type="button" class="timeline-detail-geolink" data-region="Bahía de Manila" data-country="Filipinas">Manila</button> y <button type="button" class="timeline-detail-geolink" data-region="Santiago de Cuba" data-country="Cuba">Santiago de Cuba</button> exhibieron la debilidad naval española, pero cubanos y filipinos ya luchaban por independizarse antes de la intervención estadounidense. En España, el «Desastre» quebró la imagen de la <button type="button" class="timeline-detail-entrylink" data-id="restauracion-alfonso-xii-1875">Restauración</button> y alimentó el regeneracionismo. Para las islas, significó descolonización incompleta: terminó un imperio y comenzó otra dominación sobre pueblos distintos.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si Estados Unidos no hubiera intervenido en 1898?",
      answer:
        "Las guerras independentistas de Cuba y Filipinas habrían continuado contra España con desenlaces menos previsibles. La derrota imperial española quizá habría llegado después, mientras Puerto Rico y Guam habrían seguido trayectorias distintas; la intervención estadounidense cambió quién controló la salida del imperio."
    }
  },

  // ---- INDEPENDENCE / 19th c ----
  {
    id: "carta-de-jamaica-1815",
    year: 1815,
    // Real year; the slight visual offset separates the dense 1810–1820 run.
    trackYear: 1816.5,
    title: "Carta de Jamaica",
    author: "Simón Bolívar",
    country: "Jamaica",
    region: "Kingston",
    type: ICON_TYPE.HISTORY,
    description:
      "Exiliado en Kingston tras la caída de la Segunda República de Venezuela, Simón Bolívar dicta esta carta el 6 de septiembre de 1815 en respuesta a Henry Cullen, un comerciante inglés radicado en Jamaica. Publicada bajo el título 'Contestación de un Americano Meridional a un caballero de esta isla', expone las causas del fracaso independentista hasta ese momento y esboza su visión política para las futuras repúblicas americanas — dirigida, en el fondo, tanto a Cullen como a Gran Bretaña misma, cuya intervención buscaba ganar para la causa. Escrita en español sobre suelo de una colonia británica, es uno de los documentos fundacionales del pensamiento independentista latinoamericano. Siglo y medio después, esa misma Kingston que le dio refugio a Bolívar vería nacer, en sus barrios pobres, al reggae y a Bob Marley.",
    descriptionHtml:
      'Exiliado en <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Kingston</button> tras la caída de la Segunda República de Venezuela, Simón Bolívar dicta esta carta el 6 de septiembre de 1815 en respuesta a Henry Cullen, un comerciante inglés radicado en Jamaica. Publicada bajo el título \'Contestación de un Americano Meridional a un caballero de esta isla\', expone las causas del fracaso independentista hasta ese momento y esboza su visión política para las futuras repúblicas americanas — dirigida, en el fondo, tanto a Cullen como a Gran Bretaña misma, cuya intervención buscaba ganar para la causa. Escrita en español sobre suelo de una colonia británica, es uno de los documentos fundacionales del pensamiento independentista latinoamericano. Siglo y medio después, esa misma Kingston que le dio refugio a Bolívar vería nacer, en sus barrios pobres, al reggae y a <button type="button" class="timeline-detail-entrylink" data-id="bob-marley-1945">Bob Marley</button>.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Jamaica no hubiera sido colonia británica en 1815?",
      answer:
        "Bolívar no habría tenido dónde refugiarse tras la caída de la Segunda República: Jamaica era, precisamente por estar bajo control británico y no español, uno de los pocos puertos seguros frente a las fuerzas realistas. Sin ese refugio inglés en tierra caribeña, la Carta de Jamaica —y buena parte de la estrategia diplomática que Bolívar tejió después con Gran Bretaña— simplemente no habría existido."
    }
  },
  {
    id: "juana-azurduy-1816",
    year: 1816,
    month: 3,
    day: 3,
    // Real date; the slight visual offset separates the dense 1810–1820 run.
    trackYear: 1817.6,
    title: "3 de marzo de 1816: Juana Azurduy vence en El Villar",
    author: "Juana Azurduy",
    country: "Bolivia",
    region: "El Villar, Chuquisaca",
    type: ICON_TYPE.CONFLICT,
    sensitive: true,
    description:
      "El 3 de marzo de 1816, en El Villar, Juana Azurduy dirigió una fuerza de mujeres, jinetes e indígenas que derrotó a las tropas realistas, capturó su bandera y recuperó armas. La victoria contribuyó a su nombramiento como teniente coronela; Manuel Belgrano le entregó simbólicamente su sable. Meses después fue herida en La Laguna y perdió allí a su esposo, Manuel Ascencio Padilla, pero continuó combatiendo. La tradición también cuenta que, durante un combate de 1815, abandonó brevemente la lucha para dar a luz y regresó después; este episodio legendario carece de documentación contemporánea concluyente.",
    descriptionHtml:
      'El 3 de marzo de 1816, en <button type="button" class="timeline-detail-geolink" data-region="El Villar, Chuquisaca" data-country="Bolivia">El Villar</button>, Juana Azurduy dirigió una fuerza de mujeres, jinetes e indígenas que derrotó a las tropas realistas, capturó su bandera y recuperó armas. La victoria contribuyó a su nombramiento como teniente coronela; Manuel Belgrano le entregó simbólicamente su sable. Meses después fue herida en <button type="button" class="timeline-detail-geolink" data-region="La Laguna, Chuquisaca" data-country="Bolivia">La Laguna</button> y perdió allí a su esposo, Manuel Ascencio Padilla, pero continuó combatiendo. La tradición también cuenta que, durante un combate de 1815, abandonó brevemente la lucha para dar a luz y regresó después; este episodio legendario carece de documentación contemporánea concluyente.',
    butterfly: {
      prompt: "¿Qué habría cambiado si Juana Azurduy hubiera abandonado la lucha tras la muerte de Manuel Ascencio Padilla?",
      answer:
        "Su retirada habría sido comprensible, pero la resistencia del Alto Perú habría perdido a una comandante capaz de movilizar a combatientes indígenas, mestizos y mujeres. Su permanencia convirtió una tragedia personal en continuidad política y militar."
    }
  },
  {
    id: "rayo-de-luna-becquer-1862",
    year: 1862,
    title: "El rayo de luna",
    author: "Gustavo Adolfo Bécquer",
    country: "España",
    region: "Soria",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Publicada el 13 de febrero de 1862, esta leyenda sigue a Manrique, un joven soñador de Soria que persigue durante una noche de luna llena a una mujer bellísima entre las ruinas del Monasterio de San Juan de Duero. Lo que perseguía, descubre al final, no era más que un rayo de luna filtrándose entre las ramas — una ilusión óptica que Bécquer convierte en metáfora de todo amor romántico: una mentira que la propia mente inventa para tener algo a lo cual aferrarse.",
    descriptionHtml:
      'Publicada el 13 de febrero de 1862, esta leyenda sigue a Manrique, un joven soñador de Soria que persigue durante una noche de luna llena a una mujer bellísima entre las ruinas del <button type="button" class="timeline-detail-geolink" data-region="Monasterio de San Juan de Duero" data-country="España">Monasterio de San Juan de Duero</button>. Lo que perseguía, descubre al final, no era más que un rayo de luna filtrándose entre las ramas — una ilusión óptica que Bécquer convierte en metáfora de todo amor romántico: una mentira que la propia mente inventa para tener algo a lo cual aferrarse.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Manrique hubiera alcanzado a la mujer que perseguía esa noche?",
      answer:
        "Bécquer perdería la revelación que sostiene toda la leyenda: que el objeto del deseo romántico a menudo no es más que una proyección, un rayo de luna al que la imaginación le da forma humana. El desengaño final —no el encuentro— es el verdadero tema de la leyenda."
    }
  },
  {
    id: "benito-juarez-bio",
    year: 1906,
    title: "Benito Juárez: su vida, su obra",
    author: "Rafael de Zayas Enríquez",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "Biografía ganadora del concurso abierto por la Comisión Nacional del Centenario de Juárez en 1906.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si la Comisión del Centenario nunca hubiera convocado ese concurso biográfico en 1906?",
      answer:
        "La construcción oficial de Juárez como padre de la patria liberal habría dependido de fuentes más dispersas y menos unificadas. El centenario de su nacimiento fue, en sí mismo, un acto político: fijar una narrativa nacional justo antes de que la Revolución Mexicana la pusiera a prueba."
    }
  },
  {
    id: "estacion-del-pantano",
    year: 1853,
    month: 12,
    trackYear: 1854.1,
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
    authorPageSlug: "yuri-herrera",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Juárez hubiera documentado su exilio en Nueva Orleans con algo más que dos líneas?",
      answer:
        "Yuri Herrera no habría tenido el vacío que hizo posible La estación del pantano: una novela que existe precisamente porque la historia oficial calló donde más nos hubiera gustado escuchar. El silencio del propio Juárez es lo que convirtió a la ciudad, no al político, en protagonista."
    }
  },
  {
    id: "seleccion-poetica-dario",
    year: 2001,
    title: "Selección poética",
    author: "Rubén Darío",
    country: "Nicaragua",
    type: ICON_TYPE.LITERATURE,
    description:
      "Antología poética de Rubén Darío, padre del Modernismo hispanoamericano. Edición de Editores Mexicanos Unidos, 2001.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Rubén Darío nunca hubiera salido de Nicaragua?",
      answer:
        "El Modernismo hispanoamericano, tal como lo conocemos, es inseparable de un poeta que vivió entre Managua, Santiago, Buenos Aires, Madrid y París. Sin ese cosmopolitismo forzado por la necesidad y la ambición, es difícil imaginar la revolución del lenguaje poético que Darío exportó de vuelta a España misma."
    }
  },

  // ---- REVOLUTION & DICTATORSHIP (1900–1989) ----
  {
    id: "jose-guadalupe-posada-1852",
    year: 1852,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. 1850/1851/1852/1853/1854 all chain-clustered; this
    // splits them into four groups: [1850-1851], [1852], [1853], [1854].
    trackYear: 1852.5,
    endYear: 1913,
    title: "1852–1913: José Guadalupe Posada",
    author: "José Guadalupe Posada",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.HISTORY,
    description:
      "Nacido el 2 de febrero de 1852 en Aguascalientes, José Guadalupe Posada se forma como litógrafo en León, Guanajuato, antes de instalarse en la Ciudad de México hacia 1888, donde trabaja durante décadas para el taller editorial de Antonio Vanegas Arroyo, ilustrando hojas sueltas, corridos y noticias sensacionalistas destinadas al pueblo llano, no a las élites. De ese trabajo casi anónimo e industrial nace su género más célebre: la calavera —esqueletos vestidos como políticos, borrachos, revolucionarios y aristócratas— que convierte la muerte en sátira social democratizada, accesible por unos centavos en cualquier puesto de periódicos. Hacia 1910 crea La Calavera Garbancera, burla de los mexicanos que renegaban de su raíz indígena por aparentar una elegancia europea que no podían costear. Posada muere en 1913, pobre y casi olvidado, sepultado en una fosa común, justo cuando la Revolución Mexicana que su obra parecía anticipar apenas comenzaba a desatarse. Su rescate llega después: en 1947, Diego Rivera reproduce a la Garbancera en su mural Sueño de una tarde dominical en la Alameda Central y la rebautiza La Catrina, catapultándola —a ella y, con retraso, a su creador— al centro mismo de la identidad visual mexicana y del Día de Muertos tal como se celebra hoy.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Diego Rivera nunca hubiera rescatado la Calavera Garbancera en su mural de 1947?",
      answer:
        "Posada habría seguido siendo, como en las tres décadas posteriores a su muerte, una nota al pie: un ilustrador industrial prolífico pero anónimo, sin nombre propio detrás de miles de grabados. Al rebautizar y elevar su calavera más célebre, Rivera no solo le dio fama a un personaje —le devolvió la autoría a un hombre que murió pensando que su trabajo se olvidaría con el papel barato en que se imprimió."
    }
  },
  {
    id: "cartucho",
    year: 1931,
    title: "Cartucho",
    author: "Nellie Campobello",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Viñetas semiautobiográficas de la Revolución Mexicana en Chihuahua, narradas desde la voz de una niña.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Nellie Campobello hubiera escrito su infancia en Chihuahua desde la nostalgia, no desde la violencia directa?",
      answer:
        "Cartucho perdería lo que lo distingue de casi toda la novela de la Revolución escrita por hombres: la mirada de una niña para quien los cadáveres en la calle eran, simplemente, parte del paisaje cotidiano. Esa naturalidad —más perturbadora que cualquier heroísmo— es el verdadero logro del libro."
    }
  },
  {
    id: "martin-ramirez-emigra-1925",
    year: 1925,
    title: "1925: Martín Ramírez emigra a California",
    author: "Hito histórico",
    country: "México",
    region: "Tepatitlán, Jalisco",
    type: ICON_TYPE.HISTORY,
    description:
      "Nacido el 30 de enero de 1895 en Rincón de Velázquez, cerca de Tepatitlán, Jalisco, Martín Ramírez era ranchero y padre de familia cuando emigra en 1925 a California en busca de trabajo, como tantos otros mexicanos de su generación, y pasa varios años empleado en ferrocarriles y minas. La Gran Depresión lo deja sin sustento y, en 1931, es detenido e internado en hospitales psiquiátricos californianos, donde pasaría el resto de su vida. Sin formación artística alguna, produce allí cientos de dibujos extraordinarios —jinetes y trenes que entran y salen de túneles, vírgenes, paisajes de un México recordado— hechos con materiales improvisados: bolsas de papel, papel de hospital, lápices gastados y pegamento casero de papa y saliva. Hoy se le considera uno de los grandes maestros del arte autodidacta o 'outsider art' del siglo XX, y su obra —exhibida en museos como el American Folk Art Museum de Nueva York— se lee como un testimonio visual único de la experiencia migrante mexicana.",
    descriptionHtml:
      'Nacido el 30 de enero de 1895 en <button type="button" class="timeline-detail-geolink" data-region="Rincón de Velázquez" data-country="México">Rincón de Velázquez</button>, cerca de Tepatitlán, Jalisco, Martín Ramírez era ranchero y padre de familia cuando emigra en 1925 a California en busca de trabajo, como tantos otros mexicanos de su generación, y pasa varios años empleado en ferrocarriles y minas. La Gran Depresión lo deja sin sustento y, en 1931, es detenido e internado en hospitales psiquiátricos californianos, donde pasaría el resto de su vida. Sin formación artística alguna, produce allí cientos de dibujos extraordinarios —jinetes y trenes que entran y salen de túneles, vírgenes, paisajes de un México recordado— hechos con materiales improvisados: bolsas de papel, papel de hospital, lápices gastados y pegamento casero de papa y saliva. Hoy se le considera uno de los grandes maestros del arte autodidacta o \'outsider art\' del siglo XX, y su obra —exhibida en museos como el <button type="button" class="timeline-detail-geolink" data-region="American Folk Art Museum" data-country="Estados Unidos">American Folk Art Museum</button> de Nueva York— se lee como un testimonio visual único de la experiencia migrante mexicana.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Martín Ramírez nunca hubiera emigrado a California en 1925?",
      answer:
        "Sin el desarraigo, la soledad y la eventual institucionalización que marcaron su vida en Estados Unidos, es poco probable que Ramírez hubiera producido la obra por la que hoy se le recuerda: sus dibujos nacen de la memoria de Jalisco vista a la distancia, dentro de las paredes de un hospital psiquiátrico californiano. El arte autodidacta del siglo XX habría perdido una de sus voces más singulares, y la experiencia del migrante mexicano, uno de sus testimonios visuales más profundos."
    }
  },
  {
    id: "los-de-abajo",
    year: 1915,
    title: "Los de Abajo",
    author: "Mariano Azuela",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description: "La novela fundacional del ciclo narrativo de la Revolución Mexicana.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Mariano Azuela hubiera escrito Los de Abajo como panfleto revolucionario triunfalista?",
      answer:
        "La novela de la Revolución Mexicana no habría nacido con la ambigüedad moral que la define desde su primer libro: campesinos que se vuelven violentos sin ideología clara, arrastrados por la fuerza del movimiento más que por convicción. Azuela, médico de tropa que vio la revolución de cerca, no podía escribir el heroísmo limpio que otros hubieran preferido."
    }
  },
  {
    id: "niebla-unamuno-1914",
    year: 1914,
    title: "Niebla",
    author: "Miguel de Unamuno",
    country: "España",
    region: "Bilbao",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Miguel de Unamuno bautizó esta obra como 'nivola' para liberarla de las reglas de la novela tradicional: Augusto Pérez, atrapado en una crisis amorosa y existencial, termina viajando a Salamanca para confrontar cara a cara al propio Unamuno, su autor, y exigirle explicaciones sobre el libre albedrío que se le niega como personaje. Un ejercicio temprano y radical de metaficción.",
    descriptionHtml:
      'Miguel de Unamuno bautizó esta obra como \'nivola\' para liberarla de las reglas de la novela tradicional: Augusto Pérez, atrapado en una crisis amorosa y existencial, termina viajando a <button type="button" class="timeline-detail-geolink" data-region="Salamanca" data-country="España">Salamanca</button> para confrontar cara a cara al propio Unamuno, su autor, y exigirle explicaciones sobre el libre albedrío que se le niega como personaje. Un ejercicio temprano y radical de metaficción.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Augusto Pérez nunca hubiera decidido confrontar a su propio autor?",
      answer:
        "Niebla habría sido una novela psicológica más, en vez del ejercicio metaficcional radical que anticipó, décadas antes, discusiones que la teoría literaria del siglo XX volvería centrales. El propio Unamuno, al dejarse increpar por su personaje, convirtió una crisis existencial privada en un problema filosófico compartido con el lector."
    }
  },
  {
    id: "federica-hannover-1917",
    year: 1917,
    month: 4,
    day: 18,
    // Real date; separated visually from Quiroga's 1917 marker.
    trackYear: 1916,
    title: "18 de abril de 1917: nace Federica de Hannover",
    author: "Federica de Hannover",
    country: "Alemania",
    region: "Blankenburg",
    type: ICON_TYPE.ROYAL,
    description:
      "Federica de Hannover nació el 18 de abril de 1917 en Blankenburg, Alemania, hija de Ernesto Augusto y Viktoria Luise de Prusia. Se casó con el príncipe Pablo de Grecia en 1938 y fue reina de Grecia entre 1947 y 1964. Figura influyente y polarizadora, fue criticada por intervenir en política; su afiliación juvenil a la Liga de Muchachas Alemanas también la persiguió. Tras el golpe militar de 1967, la familia partió al exilio. Murió en Madrid en 1981. Favoreció la unión de Sofía con Juan Carlos.",
    descriptionHtml:
      'Federica de <button type="button" class="timeline-detail-geolink" data-region="Hannover" data-country="Alemania">Hannover</button> nació el 18 de abril de 1917 en <button type="button" class="timeline-detail-geolink" data-region="Blankenburg" data-country="Alemania">Blankenburg</button>, <button type="button" class="timeline-detail-geolink" data-country="Alemania">Alemania</button>, hija de Ernesto Augusto y Viktoria Luise de <button type="button" class="timeline-detail-geolink" data-region="Prusia" data-country="Alemania">Prusia</button>. Se casó con el príncipe Pablo de <button type="button" class="timeline-detail-geolink" data-country="Grecia">Grecia</button> en 1938 y fue reina de <button type="button" class="timeline-detail-geolink" data-country="Grecia">Grecia</button> entre 1947 y 1964. Figura influyente y polarizadora, fue criticada por intervenir en política; su afiliación juvenil a la Liga de Muchachas Alemanas también la persiguió. Tras el golpe militar de 1967, la familia partió al exilio. Murió en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> en 1981. Favoreció la unión de Sofía con Juan Carlos.',
    lineage: [
      { name: "Viktoria Luise de Prusia", relation: "madre de", entryId: "viktoria-luise-prusia-1892" },
      { name: "Federica de Hannover", relation: "madre de", entryId: "federica-hannover-1917" },
      { name: "Sofía de Grecia", relation: "madre de", entryId: "sofia-grecia-1938" },
      { name: "Felipe VI", relation: "rey de España", entryId: "felipe-vi-1968" }
    ],
    butterfly: {
      prompt: "¿Qué hubiera pasado si Federica no hubiera favorecido la unión de Sofía y Juan Carlos?",
      answer:
        "La familia real española contemporánea tendría otra genealogía: Felipe VI no reuniría en su ascendencia las casas de Borbón, Glücksburg, Hannover y Hohenzollern. El vínculo entre la monarquía española y las dinastías griega, danesa y alemana habría seguido un camino distinto."
    }
  },
  {
    id: "gallina-degollada-quiroga-1917",
    year: 1917,
    title: "La gallina degollada",
    author: "Horacio Quiroga",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description:
      "El cuento con el que Horacio Quiroga selló su lugar como el gran maestro del horror latinoamericano: un matrimonio ve nacer a sus cuatro primeros hijos con una discapacidad severa, uno tras otro, y deposita toda su esperanza en Bertita, la hija menor que nace sana. Cuando los hermanos mayores presencian a la sirvienta degollar una gallina para la cena, algo se despierta en ellos que la familia jamás vio venir.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bertita, la hija menor, hubiera nacido con la misma condición que sus hermanos?",
      answer:
        "El cuento perdería el contraste que lo hace insoportable: una familia que deposita toda su esperanza en una sola hija sana, mientras los hermanos mayores observan desde su propia discapacidad y su propio abandono emocional. Quiroga necesitaba esa asimetría exacta para que el horror final se sintiera inevitable, no arbitrario."
    }
  },
  {
    id: "gripe-espanola-1918",
    year: 1918,
    endYear: 1920,
    title: "1918: la gripe española",
    author: "Hito histórico",
    country: "España",
    region: "Madrid",
    type: ICON_TYPE.HISTORY,
    description:
      "El primer caso oficialmente registrado de la gripe de 1918 no aparece en España, sino en el campamento militar de Fort Riley, Kansas, el 4 de marzo de 1918 —algunos historiadores rastrean un brote previo, semanas antes, en el condado rural de Haskell, en el mismo estado—. El nombre le llega por pura censura de guerra: los países beligerantes silenciaban cualquier noticia que debilitara la moral nacional, pero España, neutral en la Primera Guerra Mundial, no tenía esa restricción. Cuando el propio rey Alfonso XIII cae enfermo en Madrid en mayo de 1918 —dos tercios de los madrileños se contagian en apenas tres días— la prensa española es la única que informa con libertad, y el resto del mundo, que solo se entera de la pandemia a través de esos reportes, termina bautizándola 'gripe española': el peor caso de mala fama que ha sufrido nación alguna. En México, donde la epidemia se cruza con la Revolución en pleno curso, el 'trancazo' del otoño de 1918 mata, según estimaciones, entre 300,000 y 500,000 personas en apenas dos meses —más muertes, según el historiador Felipe Ávila, que toda la década de guerra civil revolucionaria—. En Brasil, el presidente electo Rodrigues Alves, célebre por haber erradicado la fiebre amarilla durante su primer mandato, muere de la misma gripe el 16 de enero de 1919 en Río de Janeiro, sin llegar a jurar el cargo. A nivel global, la pandemia infecta a un tercio de la humanidad y mata entre 50 y 100 millones de personas —más que la Primera Guerra Mundial que la mantuvo en silencio.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si la prensa española también hubiera censurado la noticia en 1918, como el resto de los países en guerra?",
      answer:
        "El virus se habría propagado exactamente igual —el silencio no detiene un patógeno— pero el mundo se habría quedado sin nombre para señalarlo, o habría terminado culpando a otro país igual de inocente. La ironía final es que la nación más honesta sobre la pandemia cargó con su apellido durante más de un siglo, mientras Kansas, su origen más probable, nunca entró en el nombre."
    }
  },
  {
    id: "lenguas-diamante-ibarbourou-1919",
    year: 1919,
    title: "Las lenguas de diamante",
    author: "Juana de Ibarbourou",
    country: "Uruguay",
    type: ICON_TYPE.LITERATURE,
    description:
      "El poemario que consagró a la uruguaya Juana de Ibarbourou como 'Juana de América': una celebración sin pudor del cuerpo, el deseo y la naturaleza desde una voz femenina que se niega a pedir permiso. Su sensualidad directa y su musicalidad la convirtieron en una de las figuras centrales del modernismo tardío latinoamericano.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Juana de Ibarbourou hubiera escrito bajo un pseudónimo masculino, como tantas autoras de su época?",
      answer:
        "La sensualidad directa de Las lenguas de diamante —una voz femenina que reclama el deseo sin pedir permiso— habría perdido buena parte de su carga transgresora si el público no hubiera sabido que era una mujer quien hablaba. El título de \"Juana de América\" que ganó fue, en sí mismo, un reconocimiento a esa audacia firmada con nombre propio."
    }
  },
  {
    id: "flor-de-la-playa-burgos-1920",
    year: 1920,
    title: "La flor de la playa",
    author: "Carmen de Burgos",
    country: "España",
    region: "Estoril",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Carmen de Burgos, pionera del periodismo y del feminismo español firmando como 'Colombine', publicó esta novela corta en 1920 dentro de la colección La Novela Corta. Enrique y su amante, buscando escapar de la vigilancia y el chismorreo de las patronas españolas, pasan por Lisboa antes de llegar a Los Manzanos, una playa modesta de Portugal donde deciden pasar su escapada de verano — un viaje corto pero ya al extranjero, a 'una nación más libre' donde ella podría hacerse pasar por su esposa. Bajo esa premisa de fuga, la novela desliza su crítica constante a un mundo que exigía elegir entre el deseo y la respetabilidad.",
    descriptionHtml:
      'Carmen de Burgos, pionera del periodismo y del feminismo español firmando como \'Colombine\', publicó esta novela corta en 1920 dentro de la colección La Novela Corta. Enrique y su amante, buscando escapar de la vigilancia y el chismorreo de las patronas españolas, pasan por <button type="button" class="timeline-detail-geolink" data-region="Lisboa" data-country="Portugal">Lisboa</button> antes de llegar a Los Manzanos, una playa modesta de Portugal donde deciden pasar su escapada de verano — un viaje corto pero ya al extranjero, a \'una nación más libre\' donde ella podría hacerse pasar por su esposa. Bajo esa premisa de fuga, la novela desliza su crítica constante a un mundo que exigía elegir entre el deseo y la respetabilidad.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Carmen de Burgos hubiera firmado esta novela con su propio nombre y no como \"Colombine\"?",
      answer:
        "El pseudónimo le daba una distancia estratégica para criticar las restricciones que enfrentaban las mujeres de su época sin exponerse directamente a la censura social que ya sufría por su activismo feminista. Firmada o no, la novela sigue insistiendo en la misma pregunta —deseo o respetabilidad— que perseguiría a Carmen de Burgos toda su vida pública."
    }
  },
  {
    id: "el-senor-presidente",
    year: 1946,
    title: "El señor presidente",
    author: "Miguel Ángel Asturias",
    country: "Guatemala",
    type: ICON_TYPE.CONFLICT,
    description: "Retrato de la dictadura latinoamericana a través de un realismo onírico y pesadillesco.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Miguel Ángel Asturias hubiera escrito una denuncia realista y documental de la dictadura, en vez de un realismo onírico?",
      answer:
        "El señor presidente perdería el mecanismo que mejor transmite el terror de vivir bajo una dictadura: la lógica pesadillesca que hace que la paranoia del régimen se sienta, para el lector, tan real como los hechos mismos. Asturias entendió que el horror político a veces se explica mejor con pesadilla que con reportaje."
    }
  },
  {
    id: "el-reino-de-este-mundo",
    year: 1949,
    // Visual spacing only for the dense 1949–1951 sequence.
    trackYear: 1948,
    title: "El reino de este mundo",
    author: "Alejo Carpentier",
    country: "Cuba",
    type: ICON_TYPE.HISTORY,
    description: "Texto fundacional del realismo mágico, ambientado en la Revolución Haitiana.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Alejo Carpentier hubiera situado su novela en la Revolución Cubana de su propio presente, en vez de mirar hacia Haití?",
      answer:
        "No existiría el concepto de \"lo real maravilloso\" tal como Carpentier lo articuló en su prólogo —la idea de que América Latina no necesita inventar lo fantástico porque ya vive inmersa en él—. Esa teoría nació específicamente de mirar la Revolución Haitiana, no la cubana, como espejo continental."
    }
  },
  {
    id: "agustina-aragon-pelicula-1950",
    year: 1950,
    month: 10,
    day: 9,
    // Exact premiere date; nudged track position separates the 1950 cards.
    trackYear: 1950.25,
    title: "9 de octubre de 1950: Agustina de Aragón rehace 1808 para el franquismo",
    author: "Juan de Orduña y Aurora Bautista",
    country: "España",
    region: "Cine Rialto, Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "El 9 de octubre de 1950 se estrenó en el cine Rialto de Madrid Agustina de Aragón, superproducción de Cifesa dirigida por Juan de Orduña y protagonizada por Aurora Bautista. Rodada en parte en Zaragoza, dentro de la basílica del Pilar, reconstruyó los sitios napoleónicos mediante espectáculo, romance y fervor católico. Su ambientación fue cuidada, pero su relato seleccionó la resistencia y omitió la capitulación de 1809. Conviene leerla como interpretación franquista, no como registro neutral: convirtió a Agustina y Palafox en emblemas de unidad, obediencia, religión y heroísmo nacional para el público de posguerra.",
    descriptionHtml:
      'El 9 de octubre de 1950 se estrenó en el <button type="button" class="timeline-detail-geolink" data-region="Cine Rialto, Madrid" data-country="España">cine Rialto de Madrid</button> <em>Agustina de Aragón</em>, superproducción de Cifesa dirigida por Juan de Orduña y protagonizada por Aurora Bautista. Rodada en parte en <button type="button" class="timeline-detail-geolink" data-region="Zaragoza" data-country="España">Zaragoza</button>, dentro de la <button type="button" class="timeline-detail-geolink" data-region="Basílica del Pilar" data-country="España">basílica del Pilar</button>, reconstruyó los <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">sitios napoleónicos</button> mediante espectáculo, romance y fervor católico. Su ambientación fue cuidada, pero su relato seleccionó la resistencia y omitió la capitulación de 1809. Conviene leerla como interpretación franquista, no como registro neutral: convirtió a <button type="button" class="timeline-detail-entrylink" data-id="agustina-aragon-zaragoza-1808">Agustina</button> y Palafox en emblemas de unidad, obediencia, religión y heroísmo nacional para el público de posguerra.',
    butterfly: {
      prompt: "¿Qué película habría resultado si Orduña hubiera mostrado también la capitulación de Zaragoza?",
      answer:
        "La historia habría sido más compleja y menos útil como mito de obediencia, fe y victoria moral. Mostrar derrota, hambre y participación colectiva habría desplazado el centro desde dos héroes nacionales hacia una población sitiada y políticamente diversa."
    }
  },
  {
    id: "laberinto-de-la-soledad",
    year: 1950,
    // Visual spacing only for the dense 1949–1951 sequence.
    trackYear: 1948.75,
    title: "El laberinto de la soledad",
    author: "Octavio Paz",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    flag: "essay-not-novel",
    description: "Ensayo seminal sobre la identidad mexicana.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Octavio Paz hubiera escrito El laberinto de la soledad desde México, sin la distancia del exilio diplomático en París?",
      answer:
        "El ensayo depende, en buena parte, de esa mirada desde afuera: solo alejado de México pudo Paz preguntarse qué hacía mexicana a la identidad mexicana con la claridad de quien la extraña. Escrito desde adentro, probablemente habría sido menos una indagación filosófica y más una crónica costumbrista."
    }
  },
  {
    id: "pedro-paramo",
    year: 1955,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Comala y los ecos de la Revolución Mexicana narrados desde la voz de los muertos.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Juan Rulfo hubiera terminado de escribir la segunda novela que nunca completó?",
      answer:
        "Pedro Páramo seguiría siendo, con toda probabilidad, la obra que define a Rulfo —no por accidente, sino porque su brevedad casi perfecta no dejaba mucho margen para repetirse. El silencio literario de Rulfo después de este libro se ha vuelto, con los años, casi tan mítico como Comala misma."
    }
  },
  {
    id: "sendas-de-oku-1957",
    year: 1957,
    title: "Sendas de Oku",
    author: "Octavio Paz (traducción, con Eikichi Hayashiya, de Matsuo Bashō)",
    country: "Japón",
    type: ICON_TYPE.LITERATURE,
    description:
      "El 9 de abril de 1957, Octavio Paz y el traductor japonés Eikichi Hayashiya publican Sendas de Oku, la primera traducción a una lengua occidental del Oku no Hosomichi de Matsuo Bashō — el diario de viaje que el poeta japonés escribió en 1689 recorriendo a pie el norte de su país. Paz, que no hablaba japonés, trabajó verso por verso junto a Hayashiya, cotejando traducciones a otros idiomas y discutiendo cada matiz; el libro tendría ediciones revisadas y ampliadas en 1970 y 1981. Es la culminación de una fascinación que Paz cultivó desde su breve paso como encargado de negocios de la embajada mexicana en Tokio en 1952, y que definiría buena parte de su poética posterior: la economía radical del haiku, la fusión entre naturaleza y percepción.",
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Octavio Paz nunca hubiera sido enviado a la embajada mexicana en Tokio en 1952?",
      answer:
        "Sin ese breve paso diplomático, Paz probablemente nunca habría cultivado la amistad con Eikichi Hayashiya que hizo posible Sendas de Oku, la primera traducción occidental del diario de Bashō. La poesía hispanoamericana habría tardado más —o esperado a otro traductor— para incorporar la economía y el silencio del haiku a su propio lenguaje."
    }
  },
  {
    id: "rosario-castellanos-1925",
    year: 1925,
    month: 5,
    endYear: 1974,
    title: "1925–1974: Rosario Castellanos",
    author: "Rosario Castellanos",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.LITERATURE,
    description:
      "Rosario Castellanos nace el 25 de mayo de 1925 en la Ciudad de México, aunque crece en la hacienda familiar de Comitán, Chiapas, la región que marcaría el resto de su obra narrativa. Poeta, ensayista y una de las voces fundacionales del feminismo literario mexicano, publica en 1960 Ciudad Real y en 1962 Oficio de tinieblas, ambas ambientadas en el Chiapas indígena que conoció de niña. En 1971, el presidente Luis Echeverría la nombra embajadora de México en Israel —uno de los primeros nombramientos diplomáticos de alto nivel para una mujer mexicana—, cargo desde el cual también enseña literatura latinoamericana en la Universidad Hebrea de Jerusalén. Muere en Tel Aviv el 7 de agosto de 1974, electrocutada accidentalmente por una lámpara defectuosa cuando iba a contestar el teléfono recién salida del baño, a los 49 años. Su única obra teatral, El eterno femenino, una farsa feminista sobre el papel impuesto a la mujer mexicana, se estrena de forma póstuma al año siguiente.",
    descriptionHtml:
      'Rosario Castellanos nace el 25 de mayo de 1925 en la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, aunque crece en la hacienda familiar de <button type="button" class="timeline-detail-geolink" data-region="Comitán" data-country="México">Comitán, Chiapas</button>, la región que marcaría el resto de su obra narrativa. Poeta, ensayista y una de las voces fundacionales del feminismo literario mexicano, publica en 1960 <button type="button" class="timeline-detail-entrylink" data-id="ciudad-real">Ciudad Real</button> y en 1962 <button type="button" class="timeline-detail-entrylink" data-id="oficio-de-tinieblas">Oficio de tinieblas</button>, ambas ambientadas en el Chiapas indígena que conoció de niña. En 1971, el presidente Luis Echeverría la nombra embajadora de México en <button type="button" class="timeline-detail-geolink" data-country="Israel">Israel</button> —uno de los primeros nombramientos diplomáticos de alto nivel para una mujer mexicana—, cargo desde el cual también enseña literatura latinoamericana en la <button type="button" class="timeline-detail-geolink" data-region="Universidad Hebrea de Jerusalén" data-country="Israel">Universidad Hebrea de Jerusalén</button>. Muere en <button type="button" class="timeline-detail-geolink" data-region="Tel Aviv" data-country="Israel">Tel Aviv</button> el 7 de agosto de 1974, electrocutada accidentalmente por una lámpara defectuosa cuando iba a contestar el teléfono recién salida del baño, a los 49 años. Su única obra teatral, <button type="button" class="timeline-detail-entrylink" data-id="eterno-femenino">El eterno femenino</button>, una farsa feminista sobre el papel impuesto a la mujer mexicana, se estrena de forma póstuma al año siguiente.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Rosario Castellanos nunca hubiera aceptado la embajada en Israel en 1971?",
      answer:
        "Habría seguido escribiendo desde México, probablemente con más tiempo para su obra —los años en Israel la alejaron de la vida literaria mexicana justo en su momento de mayor reconocimiento—. Pero también habría evitado la muerte que la alcanzó en Tel Aviv apenas tres años después: sin ese nombramiento diplomático, es probable que hubiera vivido para ver estrenada en vida su propia obra teatral, y no como homenaje póstumo."
    }
  },
  {
    id: "ciudad-real",
    year: 1960,
    title: "Ciudad Real",
    author: "Rosario Castellanos",
    authorEntryId: "rosario-castellanos-1925",
    country: "México",
    region: "Chiapas",
    type: ICON_TYPE.LITERATURE,
    description: "Cuentos del Ciclo de Chiapas; Premio Xavier Villaurrutia.",
    descriptionHtml: 'Cuentos del Ciclo de <button type="button" class="timeline-detail-geolink" data-region="Chiapas" data-country="México">Chiapas</button>; Premio Xavier Villaurrutia.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Rosario Castellanos hubiera escrito sobre Chiapas solo desde la perspectiva ladina, sin dar voz a personajes indígenas?",
      answer:
        "El Ciclo de Chiapas perdería la tensión que lo distingue de la literatura indigenista anterior: Castellanos no romantiza ni victimiza simplemente, sino que expone el racismo estructural desde ambos lados de la relación. Esa doble mirada es lo que el Premio Xavier Villaurrutia reconoció como genuinamente nuevo."
    }
  },
  {
    id: "oficio-de-tinieblas",
    year: 1962,
    endYear: 1867,
    title: "Oficio de tinieblas",
    author: "Rosario Castellanos",
    authorEntryId: "rosario-castellanos-1925",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Superpone una rebelión chamula de 1867 sobre el Chiapas de comienzos del siglo XX; Premio Sor Juana Inés de la Cruz.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si la rebelión chamula de 1867 nunca hubiera ocurrido?",
      answer:
        "Rosario Castellanos no habría tenido el eco histórico que necesitaba para superponer sobre el Chiapas del siglo XX: una rebelión indígena real, aplastada y después convenientemente olvidada por la historia oficial. Oficio de tinieblas existe porque la memoria de 1867, aunque silenciada, seguía viva lo suficiente como para rimar con el presente de la autora."
    }
  },
  {
    id: "muerte-artemio-cruz",
    year: 1962,
    title: "La muerte de Artemio Cruz",
    author: "Carlos Fuentes",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description: "Examen fragmentado de la Revolución Mexicana a través de la vida de un solo hombre.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Carlos Fuentes hubiera narrado la vida de Artemio Cruz en orden cronológico simple?",
      answer:
        "La fragmentación —pasado, presente y futuro entrelazados, narrado en primera, segunda y tercera persona a la vez— es lo que permite que la novela sea, simultáneamente, la biografía de un hombre y una radiografía de cómo la Revolución Mexicana traicionó sus propios ideales. Contada en línea recta, sería solo lo primero."
    }
  },
  {
    id: "octavio-paz-embajador-india-1962",
    year: 1962,
    endYear: 1968,
    pubYear: 1995,
    title: "1962–1968: Octavio Paz, embajador de México en la India",
    author: "Octavio Paz",
    country: "India",
    region: "Nueva Delhi",
    type: ICON_TYPE.LITERATURE,
    description:
      "En 1962, Octavio Paz llega a Nueva Delhi como embajador de México en la India, cargo que ocupa hasta 1968. Los años indios transforman su poesía y su pensamiento: ahí escribe buena parte de Ladera este (1969), y encuentra en el hinduismo, el budismo y la filosofía india una vía distinta para pensar la identidad y la otredad que ya había explorado en El laberinto de la soledad. Se casa en 1964 con la escritora francesa Marie-José Tramini en Nueva Delhi. El 2 de octubre de 1968, tras la matanza de Tlatelolco en la Ciudad de México, Paz renuncia públicamente a la embajada en protesta por la represión de su propio gobierno contra el movimiento estudiantil — un gesto que le costó años de distancia con el poder mexicano, pero que consolidó su autoridad moral. Décadas después, en 1995, condensaría esa experiencia en el ensayo Vislumbres de la India, escrito ya junto a Marie-José: una de las miradas literarias más profundas que un escritor latinoamericano haya dedicado al subcontinente.",
    descriptionHtml:
      'En 1962, Octavio Paz llega a <button type="button" class="timeline-detail-geolink" data-region="Nueva Delhi" data-country="India">Nueva Delhi</button> como embajador de México en la India, cargo que ocupa hasta 1968. Los años indios transforman su poesía y su pensamiento: ahí escribe buena parte de Ladera este (1969), y encuentra en el hinduismo, el budismo y la filosofía india una vía distinta para pensar la identidad y la otredad que ya había explorado en <button type="button" class="timeline-detail-entrylink" data-id="laberinto-de-la-soledad">El laberinto de la soledad</button>. Se casa en 1964 con la escritora francesa Marie-José Tramini en Nueva Delhi. El 2 de octubre de 1968, tras la matanza de Tlatelolco en la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, Paz renuncia públicamente a la embajada en protesta por la represión de su propio gobierno contra el movimiento estudiantil — un gesto que le costó años de distancia con el poder mexicano, pero que consolidó su autoridad moral. Décadas después, en 1995, condensaría esa experiencia en el ensayo Vislumbres de la India, escrito ya junto a Marie-José: una de las miradas literarias más profundas que un escritor latinoamericano haya dedicado al subcontinente.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Paz no hubiera renunciado a la embajada tras Tlatelolco?",
      answer:
        "Habría conservado una carrera diplomática cómoda, pero habría perdido la autoridad moral que definió el resto de su vida pública. La renuncia de 1968 —tan drástica como impopular dentro del gobierno mexicano— es, en buena medida, lo que le permitió después hablar con independencia sobre política, poder y violencia de Estado, tanto en México como en el resto del mundo."
    }
  },
  {
    id: "ciudad-los-perros-vargas-llosa-1963",
    year: 1963,
    title: "La ciudad y los perros",
    author: "Mario Vargas Llosa",
    country: "Perú",
    region: "Lima",
    type: ICON_TYPE.LITERATURE,
    description:
      "La primera novela de Mario Vargas Llosa, escrita antes de cumplir treinta años y ganadora del Premio Biblioteca Breve de Seix Barral en 1962, retrata con crudeza la violencia, el machismo y la corrupción moral dentro del Colegio Militar Leoncio Prado de Lima, donde el propio autor había sido interno. Estructurada en múltiples voces y saltos temporales, la novela desnuda un microcosmos brutal que funciona como espejo del Perú entero, y su publicación fue tan incendiaria que las autoridades del colegio real llegaron a quemar públicamente mil ejemplares del libro, acusándolo de traición a la patria. Se convirtió, junto con obras de García Márquez, Cortázar y Fuentes, en uno de los pilares fundacionales del Boom latinoamericano.",
    descriptionHtml:
      'La primera novela de Mario Vargas Llosa, escrita antes de cumplir treinta años y ganadora del Premio Biblioteca Breve de Seix Barral en 1962, retrata con crudeza la violencia, el machismo y la corrupción moral dentro del <button type="button" class="timeline-detail-geolink" data-region="Colegio Militar Leoncio Prado" data-country="Perú">Colegio Militar Leoncio Prado</button> de Lima, donde el propio autor había sido interno. Estructurada en múltiples voces y saltos temporales, la novela desnuda un microcosmos brutal que funciona como espejo del Perú entero, y su publicación fue tan incendiaria que las autoridades del colegio real llegaron a quemar públicamente mil ejemplares del libro, acusándolo de traición a la patria. Se convirtió, junto con obras de García Márquez, Cortázar y Fuentes, en uno de los pilares fundacionales del Boom latinoamericano.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Vargas Llosa hubiera suavizado el retrato del Leoncio Prado para evitar la censura?",
      answer:
        "La ciudad y los perros habría perdido exactamente lo que la volvió un escándalo nacional y, a la vez, una obra maestra: su negativa a mirar hacia otro lado ante la violencia que el propio sistema militar producía y encubría. La quema pública de ejemplares terminó siendo la mejor prueba de que la novela había tocado un nervio real."
    }
  },
  {
    id: "museo-sefardi-toledo-1964",
    year: 1964,
    month: 3,
    day: 18,
    endYear: 1971,
    title: "18 de marzo de 1964: nace el Museo Sefardí",
    author: "Museo Sefardí de Toledo",
    country: "España",
    region: "Museo Sefardí, Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.VISION],
    description:
      "Durante la dictadura franquista, el Decreto 874/1964 creó en Toledo el Museo Sefardí dentro de la Sinagoga de Samuel ha-Leví. El edificio, declarado Monumento Nacional en 1877 y restaurado desde 1910, pasó de lugar de culto expropiado a espacio público de memoria. El museo se independizó de las Fundaciones Vega-Inclán en 1969 y abrió el 13 de junio de 1971. Sus colecciones reúnen arqueología, arte, libros y objetos rituales para narrar la presencia judía peninsular y la diáspora sefardí. Aquí, la sede histórica también es la pieza principal.",
    descriptionHtml:
      "Durante la dictadura franquista, el Decreto 874/1964 creó en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Toledo\" data-country=\"España\">Toledo</button> el <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Museo Sefardí, Toledo\" data-country=\"España\">Museo Sefardí</button> dentro de la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"sinagoga-samuel-halevi-1361\">Sinagoga de Samuel ha-Leví</button>. El edificio, declarado Monumento Nacional en 1877 y restaurado desde 1910, pasó de lugar de culto <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"sinagoga-transito-priorato-1494\">expropiado</button> a espacio público de memoria. El museo se independizó de las Fundaciones Vega-Inclán en 1969 y abrió el 13 de junio de 1971. Sus colecciones reúnen arqueología, arte, libros y objetos rituales para narrar la presencia judía peninsular y la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"expulsion-judios-1492\">diáspora sefardí</button>. Aquí, la sede histórica también es la pieza principal.",
    butterfly: {
      prompt: "¿Por qué el propio edificio es la pieza principal del museo?",
      answer:
        "Porque sus muros registran culto judío, apropiación cristiana, usos militares, restauraciones y arqueología: la sede contiene la historia que el museo interpreta."
    }
  },
  {
    id: "sabina",
    year: 1974,
    title: "Tiene los cabellos rojizos y se llama Sabina",
    author: "Julieta Campos",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Novela-ensayo sobre el acto narrativo mismo; Premio Xavier Villaurrutia.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Julieta Campos hubiera escrito una novela convencional sobre Sabina, en vez de una novela-ensayo sobre el propio acto de narrar?",
      answer:
        "El libro perdería su verdadera ambición: no contar una historia, sino examinar por qué y cómo se cuentan las historias en absoluto. Sabina existe menos como personaje que como pretexto para que Campos piense, en voz alta, sobre la ficción misma."
    }
  },
  {
    id: "eterno-femenino",
    year: 1975,
    title: "El eterno femenino",
    author: "Rosario Castellanos",
    authorEntryId: "rosario-castellanos-1925",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Única obra teatral de Castellanos; farsa feminista sobre el rol de la mujer mexicana.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Rosario Castellanos hubiera escrito El eterno femenino como tragedia, no como farsa?",
      answer:
        "La comedia le permitió decir, sin la solemnidad que habría invitado censura o rechazo, verdades incómodas sobre el papel impuesto a la mujer mexicana. Es su única obra teatral, y la eligió deliberadamente ridícula para que la crítica llegara disfrazada de risa."
    }
  },
  {
    id: "boquitas-pintadas",
    year: 1969,
    title: "Boquitas Pintadas",
    author: "Manuel Puig",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description: "Folletín polifónico sobre el pueblo argentino y sus pasiones reprimidas.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Manuel Puig hubiera narrado Boquitas Pintadas con una sola voz, en vez de collage de cartas, radionovelas y chismes de pueblo?",
      answer:
        "Perdería la textura que la hace única: un retrato coral del pueblo argentino armado enteramente con los fragmentos culturales que consumía —folletín, radio, prensa sentimental—. La forma es, en Puig, tan argumento como la trama misma."
    }
  },
  {
    id: "felipe-vi-1968",
    year: 1968,
    month: 1,
    day: 30,
    title: "30 de enero de 1968: nace Felipe VI",
    author: "Felipe VI",
    country: "España",
    region: "Madrid",
    type: ICON_TYPE.ROYAL,
    description:
      "Felipe VI nació el 30 de enero de 1968 en Madrid. Estudió en Canadá, Derecho en Madrid y Relaciones Internacionales en Georgetown. Abanderado y regatista en Barcelona 1992, se casó con Letizia Ortiz; sus hijas son Leonor, heredera al trono, y Sofía. Fue proclamado rey el 19 de junio de 2014. Su discurso sobre Cataluña en 2017 marcó su reinado. En 2020 renunció a la herencia de Juan Carlos y retiró la asignación a su padre. Su abuela paterna lo vinculaba a los Borbón-Dos Sicilias; sus lazos portugueses proceden de enlaces dinásticos ibéricos anteriores.",
    descriptionHtml:
      'Felipe VI nació el 30 de enero de 1968 en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button>. Estudió en <button type="button" class="timeline-detail-geolink" data-country="Canadá">Canadá</button>, Derecho en <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button> y Relaciones Internacionales en <button type="button" class="timeline-detail-geolink" data-region="Georgetown" data-country="Estados Unidos">Georgetown</button>. Abanderado y regatista en <button type="button" class="timeline-detail-geolink" data-region="Barcelona" data-country="España">Barcelona</button> 1992, se casó con Letizia Ortiz; sus hijas son Leonor, heredera al trono, y Sofía. Fue proclamado rey el 19 de junio de 2014. Su discurso sobre <button type="button" class="timeline-detail-geolink" data-region="Cataluña" data-country="España">Cataluña</button> en 2017 marcó su reinado. En 2020 renunció a la herencia de Juan Carlos y retiró la asignación a su padre. Su abuela paterna lo vinculaba a los <button type="button" class="timeline-detail-geolink" data-region="Dos Sicilias" data-country="Italia">Borbón-Dos Sicilias</button>; sus lazos <button type="button" class="timeline-detail-geolink" data-country="Portugal">portugueses</button> proceden de enlaces dinásticos ibéricos anteriores.',
    lineage: [
      { name: "Viktoria Luise de Prusia", relation: "madre de", entryId: "viktoria-luise-prusia-1892" },
      { name: "Federica de Hannover", relation: "madre de", entryId: "federica-hannover-1917" },
      { name: "Sofía de Grecia", relation: "madre de", entryId: "sofia-grecia-1938" },
      { name: "Felipe VI", relation: "rey de España", entryId: "felipe-vi-1968" }
    ],
    butterfly: {
      prompt: "¿Qué hubiera pasado si Juan Carlos no hubiera abdicado en 2014?",
      answer:
        "La renovación generacional de la Corona española se habría retrasado mientras crecían las controversias alrededor de Juan Carlos. Felipe habría afrontado más tarde la crisis territorial catalana y la tarea de separar institucionalmente su reinado de las finanzas de su padre."
    }
  },
  {
    id: "tlatelolco-masacre-1968",
    year: 1968,
    title: "2 de octubre de 1968: la masacre de Tlatelolco",
    author: "Hito histórico",
    country: "México",
    region: "Tlatelolco, Ciudad de México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Tras un verano de protestas estudiantiles contra el autoritarismo del PRI, y a diez días de la inauguración de los Juegos Olímpicos de la Ciudad de México, el gobierno decide acabar con el movimiento antes de que el mundo lo vea. La tarde del 2 de octubre de 1968, miles de estudiantes se reúnen pacíficamente en la Plaza de las Tres Culturas, en Tlatelolco. Alrededor de las 6 de la tarde, el Ejército, la policía y el escuadrón paramilitar del Batallón Olimpia rodean la plaza y abren fuego desde azoteas y vehículos blindados. El gobierno reportó al principio solo 4 muertos; testigos describieron camiones cargando decenas o cientos de cuerpos. La cifra real nunca se estableció con certeza —las estimaciones van de poco más de 30 a varios cientos—, y miles de estudiantes fueron golpeados, detenidos o desaparecidos. Es el episodio que más ha marcado la desconfianza de México hacia el poder de partido único que gobernó el país sin interrupción desde 1929.",
    descriptionHtml:
      'Tras un verano de protestas estudiantiles contra el autoritarismo del PRI, y a diez días de la inauguración de los Juegos Olímpicos de la Ciudad de México, el gobierno decide acabar con el movimiento antes de que el mundo lo vea. La tarde del 2 de octubre de 1968, miles de estudiantes se reúnen pacíficamente en la <button type="button" class="timeline-detail-geolink" data-region="Plaza de las Tres Culturas" data-country="México">Plaza de las Tres Culturas</button>, en Tlatelolco. Alrededor de las 6 de la tarde, el Ejército, la policía y el escuadrón paramilitar del Batallón Olimpia rodean la plaza y abren fuego desde azoteas y vehículos blindados. El gobierno reportó al principio solo 4 muertos; testigos describieron camiones cargando decenas o cientos de cuerpos. La cifra real nunca se estableció con certeza —las estimaciones van de poco más de 30 a varios cientos—, y miles de estudiantes fueron golpeados, detenidos o desaparecidos. Es el episodio que más ha marcado la desconfianza de México hacia el poder de partido único que gobernó el país sin interrupción desde 1929.',
    sensitive: true,
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si el gobierno mexicano hubiera dejado que la marcha estudiantil llegara a los Juegos Olímpicos sin intervenir?",
      answer:
        "El movimiento estudiantil de 1968 pudo haber forzado una apertura política real en México, adelantando en décadas el fin del régimen de partido único del PRI. En cambio, la masacre sepultó esa posibilidad bajo el silencio oficial, y el país tuvo que esperar hasta el año 2000 para ver caer al PRI de la presidencia — treinta y dos años después de que Tlatelolco demostrara hasta dónde estaba dispuesto a llegar para no ceder el poder."
    }
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
    descriptionHtml:
      'Crónica testimonial coral sobre la masacre estudiantil del 2 de octubre de 1968 en la <button type="button" class="timeline-detail-geolink" data-region="Plaza de las Tres Culturas" data-country="México">Plaza de las Tres Culturas</button>.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Tlatelolco no hubiera ocurrido esa noche del 2 de octubre de 1968?",
      answer:
        "Poniatowska no habría tenido que convertirse en cronista de un duelo nacional. Pero es precisamente esa noche la que generó una de las crónicas testimoniales más importantes de la lengua española — el libro existe porque la herida existe, y coral, porque ningún testigo solo podía contener lo ocurrido."
    }
  },
  {
    id: "pubis-angelical",
    year: 1979,
    title: "Pubis angelical",
    author: "Manuel Puig",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description: "Tres líneas narrativas entrelazadas sobre el deseo y el poder.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Manuel Puig hubiera resuelto las tres líneas narrativas de Pubis angelical en una sola historia lineal?",
      answer:
        "La novela perdería su argumento central: que el deseo y el poder se repiten, disfrazados, a través de distintas épocas y géneros —melodrama de Hollywood, ciencia ficción, realismo contemporáneo—. Puig entrelaza las líneas precisamente para mostrar que la opresión femenina no cambia de forma, solo de vestuario."
    }
  },
  {
    id: "muerte-y-doncella",
    year: 1990,
    title: "La muerte y la doncella",
    author: "Ariel Dorfman",
    country: "Chile",
    type: ICON_TYPE.HISTORY,
    description:
      "Obra de teatro escrita tras la Comisión de Verdad y Reconciliación chilena, sobre la transición post-Pinochet.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Chile nunca hubiera vivido una Comisión de Verdad y Reconciliación?",
      answer:
        "Ariel Dorfman no habría tenido el lenguaje público —ni la audiencia dispuesta— para procesar la dictadura en un escenario teatral. La muerte y la doncella depende de que el país entero estuviera, en ese momento preciso, tratando de decidir cómo convivir con sus propios torturadores sin castigarlos ni olvidarlos."
    }
  },
  {
    id: "sangre-de-amor",
    year: 1982,
    title: "Sangre de amor correspondido",
    author: "Manuel Puig",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description: "Novela construida a partir de grabaciones reales, ambientada en Brasil.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Manuel Puig hubiera inventado los diálogos de Sangre de amor correspondido, en vez de construirlos a partir de grabaciones reales?",
      answer:
        "La novela perdería la textura de habla auténtica que la distingue: el ritmo entrecortado, las repeticiones, los silencios de alguien que realmente está recordando su vida en voz alta, no de un personaje escrito para sonar así. Puig entendió que ninguna invención literaria supera el habla real bien escuchada."
    }
  },
  {
    id: "al-paso-paz-1992",
    year: 1992,
    title: "Al paso",
    author: "Octavio Paz",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description:
      "Publicado por Seix Barral en 1992, Al paso reúne apuntes que Paz mismo describe como 'impresiones' más que juicios: notas sobre Yeats, Alberti, Cernuda y D. H. Lawrence; excursiones por las artes visuales de Munch, Adami y Frida Kahlo; una miscelánea sobre el paso de los días; y tres traducciones comentadas de poemas de la dinastía Tang china. Un libro de sobremesa que recorre medio siglo de lecturas de uno de los ensayistas más abarcadores de la lengua española.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Paz hubiera organizado estos apuntes por tema en vez de dejarlos como miscelánea?",
      answer:
        "Al paso perdería precisamente lo que anuncia su título: la sensación de un pensamiento caminando, deteniéndose donde le interesa, sin la obligación de construir un argumento único. Es un libro que vale por sus itinerarios, no por su arquitectura."
    }
  },
  {
    id: "kasato-maru-1908",
    year: 1908,
    month: 6,
    title: "18 de junio de 1908: llega el Kasato Maru a Brasil",
    author: "Hito histórico",
    country: "Brasil",
    region: "Santos",
    type: ICON_TYPE.HISTORY,
    description:
      "El 18 de junio de 1908, el vapor Kasato Maru atraca en el puerto de Santos, São Paulo, con 781 inmigrantes japoneses a bordo: el inicio oficial de la inmigración japonesa a Brasil. Llegan por una coincidencia de necesidades opuestas: Brasil, que abolió la esclavitud en 1888, enfrenta una escasez aguda de mano de obra en las plantaciones de café, mientras que el Japón de la era Meiji (1868-1912) expulsa a miles de familias rurales empobrecidas por la superpoblación y la falta de tierra cultivable. Entre 1908 y 1963 llegarían más de 240,000 inmigrantes japoneses, asentados sobre todo en São Paulo, Paraná y Mato Grosso do Sul. Sus descendientes —hoy cerca de dos millones de nikkei— convierten a Brasil, y no a Perú, Estados Unidos ni Canadá, en el país con la mayor población de origen japonés fuera de Japón; el barrio de Liberdade, en pleno centro de São Paulo, se volvió su corazón cultural, con templos budistas, escuelas de idioma y festivales que conviven con el resto de la ciudad. La comunidad no estuvo exenta de sufrimiento: al entrar Brasil en la Segunda Guerra Mundial contra Japón en 1942, las publicaciones y escuelas en japonés fueron restringidas. Y desde los años ochenta se dio el giro inverso —el fenómeno dekasegi—: nietos y bisnietos de aquellos inmigrantes regresaron a trabajar a las fábricas de un Japón que ya no reconocían como propio. La ironía final es que Brasil tiene la comunidad nikkei más grande del continente, pero es el Perú —con una fracción de esa población— el que terminó dando a Latinoamérica sus dos jefes de Estado de ascendencia japonesa.",
    descriptionHtml:
      'El 18 de junio de 1908, el vapor Kasato Maru atraca en el puerto de <button type="button" class="timeline-detail-geolink" data-region="Santos" data-country="Brasil">Santos</button>, <button type="button" class="timeline-detail-geolink" data-region="São Paulo" data-country="Brasil">São Paulo</button>, con 781 inmigrantes japoneses a bordo: el inicio oficial de la inmigración japonesa a Brasil. Llegan por una coincidencia de necesidades opuestas: <button type="button" class="timeline-detail-geolink" data-country="Brasil">Brasil</button>, que abolió la esclavitud en 1888, enfrenta una escasez aguda de mano de obra en las plantaciones de café, mientras que el <button type="button" class="timeline-detail-geolink" data-country="Japón">Japón</button> de la era Meiji (1868-1912) expulsa a miles de familias rurales empobrecidas por la superpoblación y la falta de tierra cultivable. Entre 1908 y 1963 llegarían más de 240,000 inmigrantes japoneses, asentados sobre todo en São Paulo, Paraná y Mato Grosso do Sul. Sus descendientes —hoy cerca de dos millones de nikkei— convierten a Brasil, y no a <button type="button" class="timeline-detail-geolink" data-country="Perú">Perú</button>, Estados Unidos ni Canadá, en el país con la mayor población de origen japonés fuera de Japón; el barrio de <button type="button" class="timeline-detail-geolink" data-region="Liberdade" data-country="Brasil">Liberdade</button>, en pleno centro de São Paulo, se volvió su corazón cultural, con templos budistas, escuelas de idioma y festivales que conviven con el resto de la ciudad. La comunidad no estuvo exenta de sufrimiento: al entrar Brasil en la Segunda Guerra Mundial contra Japón en 1942, las publicaciones y escuelas en japonés fueron restringidas. Y desde los años ochenta se dio el giro inverso —el fenómeno dekasegi—: nietos y bisnietos de aquellos inmigrantes regresaron a trabajar a las fábricas de un Japón que ya no reconocían como propio. La ironía final es que Brasil tiene la comunidad nikkei más grande del continente, pero es el <button type="button" class="timeline-detail-entrylink" data-id="fujimori-nace-1938">Perú —con una fracción de esa población— el que terminó dando a Latinoamérica sus dos jefes de Estado de ascendencia japonesa</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el Kasato Maru nunca hubiera llegado a Santos en 1908?",
      answer:
        "Sin ese primer barco, Brasil no tendría hoy la comunidad nikkei más grande fuera de Japón, ni existiría Liberdade tal como se conoce. Esa historia habría cambiado sobre todo a Brasil, no a Perú, pero la migración japonesa hacia las Américas fue un fenómeno regional: sin la ruta que el Kasato Maru abrió simbólicamente entre Japón y Latinoamérica, es más difícil imaginar la ola posterior —más pequeña, pero políticamente decisiva— que un cuarto de siglo después llevaría a los padres de Alberto Fujimori hasta Lima."
    }
  },
  {
    id: "picasso-guernica-1937",
    year: 1937,
    month: 4,
    day: 26,
    title: "26 de abril de 1937: Gernika es bombardeada y Picasso responde",
    author: "Pablo Picasso",
    authorEntryId: "picasso-1881",
    country: "España",
    region: "Guernica",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El 26 de abril de 1937, aviones alemanes e italianos bombardearon Gernika, ciudad vasca bajo control republicano, durante la Guerra Civil española. Las noticias de la destrucción masiva llegaron a París. Pablo Picasso, encargado por la República de crear una obra para su pabellón en la Exposición Internacional, comenzó Guernica el 1 de mayo y lo concluyó el 4 de junio. Sus cuerpos fragmentados, animales y luz violenta transformaron el ataque en símbolo universal contra la guerra. Tras décadas en Nueva York, el cuadro llegó a España en 1981; hoy ocupa el Museo Reina Sofía.",
    descriptionHtml:
      'El 26 de abril de 1937, aviones alemanes e italianos bombardearon <button type="button" class="timeline-detail-geolink" data-region="Guernica" data-country="España">Gernika</button>, ciudad vasca bajo control republicano, durante la Guerra Civil española. Las noticias de la destrucción masiva llegaron a <button type="button" class="timeline-detail-geolink" data-region="París" data-country="Francia">París</button>. <button type="button" class="timeline-detail-entrylink" data-id="picasso-1881">Pablo Picasso</button>, encargado por la República de crear una obra para su pabellón en la Exposición Internacional, comenzó <em>Guernica</em> el 1 de mayo y lo concluyó el 4 de junio. Sus cuerpos fragmentados, animales y luz violenta transformaron el ataque en símbolo universal contra la guerra. Tras décadas en <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Nueva York</button>, el cuadro llegó a <button type="button" class="timeline-detail-geolink" data-country="España">España</button> en 1981; hoy ocupa el <button type="button" class="timeline-detail-geolink" data-region="Museo Reina Sofía" data-country="España">Museo Reina Sofía</button>.',
    butterfly: {
      prompt: "¿Qué habría cambiado si Picasso nunca hubiera pintado Guernica?",
      answer:
        "El bombardeo seguiría documentado, pero carecería de la imagen que convirtió una ciudad vasca en lenguaje mundial contra la violencia sobre civiles. El cuadro no reemplaza la historia: le dio una forma capaz de atravesar fronteras, guerras y generaciones."
    }
  },

  {
    id: "sofia-grecia-1938",
    year: 1938,
    month: 11,
    day: 2,
    title: "2 de noviembre de 1938: nace Sofía de Grecia",
    author: "Sofía de Grecia",
    country: "Grecia",
    region: "Atenas",
    type: ICON_TYPE.ROYAL,
    description:
      "Sofía de Grecia nació el 2 de noviembre de 1938 en Atenas. Estudió puericultura, música y arqueología, y compitió en vela. Adoptó el catolicismo para casarse con Juan Carlos el 14 de mayo de 1962. Reina de España entre 1975 y 2014, fue madre de Elena, Cristina y Felipe y mantuvo un perfil discreto durante la transición democrática y las controversias de su esposo. El Museo Reina Sofía, que alberga el Guernica de Picasso, lleva su nombre. Su fundación impulsa la investigación y atención del alzhéimer. Ambos descendían de la reina Victoria del Reino Unido.",
    descriptionHtml:
      'Sofía de <button type="button" class="timeline-detail-geolink" data-country="Grecia">Grecia</button> nació el 2 de noviembre de 1938 en <button type="button" class="timeline-detail-geolink" data-region="Atenas" data-country="Grecia">Atenas</button>. Estudió puericultura, música y arqueología, y compitió en vela. Adoptó el catolicismo para casarse con Juan Carlos el 14 de mayo de 1962. Reina de <button type="button" class="timeline-detail-geolink" data-country="España">España</button> entre 1975 y 2014, fue madre de Elena, Cristina y Felipe y mantuvo un perfil discreto durante la transición democrática y las controversias de su esposo. El <button type="button" class="timeline-detail-geolink" data-region="Museo Reina Sofía" data-country="España">Museo Reina Sofía</button>, que alberga el <button type="button" class="timeline-detail-entrylink" data-id="picasso-guernica-1937"><em>Guernica</em></button> de <button type="button" class="timeline-detail-entrylink" data-id="picasso-1881">Picasso</button>, lleva su nombre. Su fundación impulsa la investigación y atención del alzhéimer. Ambos descendían de la reina Victoria del <button type="button" class="timeline-detail-geolink" data-country="Reino Unido">Reino Unido</button>.',
    lineage: [
      { name: "Viktoria Luise de Prusia", relation: "madre de", entryId: "viktoria-luise-prusia-1892" },
      { name: "Federica de Hannover", relation: "madre de", entryId: "federica-hannover-1917" },
      { name: "Sofía de Grecia", relation: "madre de", entryId: "sofia-grecia-1938" },
      { name: "Felipe VI", relation: "rey de España", entryId: "felipe-vi-1968" }
    ],
    butterfly: {
      prompt: "¿Qué hubiera pasado si Sofía nunca se hubiera casado con Juan Carlos?",
      answer:
        "Felipe VI no reuniría las ramas de Borbón y Glücksburg que hoy convergen en la Corona española. Además, dos instituciones asociadas a su trayectoria —el Museo Reina Sofía y la Fundación Reina Sofía— tendrían otra identidad y quizá otro desarrollo."
    }
  },
  {
    id: "fujimori-nace-1938",
    year: 1938,
    title: "1938: nace Alberto Fujimori, hijo de inmigrantes japoneses",
    author: "Hito histórico",
    country: "Perú",
    region: "Lima",
    type: ICON_TYPE.HISTORY,
    description:
      "El 28 de julio de 1938 nace en Lima Alberto Kenya Fujimori Fujimori, hijo de Naoichi Fujimori y Mutsue Inomoto, inmigrantes japoneses llegados desde la prefectura de Kumamoto, en la isla de Kyushu, al sur de Japón. Peruano de nacimiento pero nikkei —japonés étnico— de origen, crece en una familia que conserva su lengua y sus costumbres incluso mientras él se forma como ingeniero agrónomo, profesor universitario y, más tarde, rector de la Universidad Nacional Agraria. Prácticamente desconocido fuera de esos círculos, en 1990 da la sorpresa electoral más grande de la historia peruana reciente al derrotar al célebre novelista Mario Vargas Llosa en plena crisis de hiperinflación y violencia de Sendero Luminoso. Casi noventa años después, el 28 de julio de 2026 —el mismo día exacto de su nacimiento, aunque él ya no vive para verlo— su hija Keiko asume la presidencia del Perú: un apellido que cruzó el Pacífico como carga de inmigrantes se convierte, dos generaciones después, en la casa presidencial de un país que ninguno de sus abuelos en Kumamoto pudo haber imaginado.",
    descriptionHtml:
      'El 28 de julio de 1938 nace en <button type="button" class="timeline-detail-geolink" data-region="Lima" data-country="Perú">Lima</button> Alberto Kenya Fujimori Fujimori, hijo de Naoichi Fujimori y Mutsue Inomoto, inmigrantes japoneses llegados desde la prefectura de <button type="button" class="timeline-detail-geolink" data-region="Kumamoto" data-country="Japón">Kumamoto</button>, en la isla de Kyushu, al sur de <button type="button" class="timeline-detail-geolink" data-country="Japón">Japón</button>. Peruano de nacimiento pero nikkei —japonés étnico— de origen, crece en una familia que conserva su lengua y sus costumbres incluso mientras él se forma como ingeniero agrónomo, profesor universitario y, más tarde, rector de la Universidad Nacional Agraria. Prácticamente desconocido fuera de esos círculos, en 1990 da la sorpresa electoral más grande de la historia peruana reciente al derrotar al célebre novelista <button type="button" class="timeline-detail-entrylink" data-id="ciudad-los-perros-vargas-llosa-1963">Mario Vargas Llosa</button> en plena crisis de hiperinflación y violencia de Sendero Luminoso. Casi noventa años después, el 28 de julio de 2026 —el mismo día exacto de su nacimiento, aunque él ya no vive para verlo— su hija <button type="button" class="timeline-detail-entrylink" data-id="keiko-fujimori-presidenta-2026">Keiko asume la presidencia del Perú</button>: un apellido que cruzó el Pacífico como carga de inmigrantes se convierte, dos generaciones después, en la casa presidencial de un país que ninguno de sus abuelos en Kumamoto pudo haber imaginado.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si los padres de Fujimori nunca hubieran emigrado desde Kumamoto al Perú?",
      answer:
        "Sin esa migración, no existiría el fujimorismo tal como se conoce: ni el candidato outsider que venció a Vargas Llosa en 1990, ni el autogolpe de 1992, ni la presidenta electa en 2026. Miles de familias japonesas emigraron a Perú a partir de 1899 buscando trabajo en las plantaciones de la costa; casi ninguna imaginó que, tres generaciones después, un apellido llegado desde Kyushu terminaría ocupando dos veces el Palacio de Gobierno de Lima."
    }
  },
  {
    id: "fujimori-autogolpe-1992",
    year: 1992,
    month: 4,
    title: "1992: el autogolpe de Fujimori",
    author: "Hito histórico",
    country: "Perú",
    region: "Lima",
    type: ICON_TYPE.CONFLICT,
    description:
      "El 5 de abril de 1992, en medio de una hiperinflación descontrolada y la violencia del grupo maoísta Sendero Luminoso, el presidente Alberto Fujimori disuelve el Congreso y suspende la Constitución con respaldo militar — un autogolpe ejecutado desde dentro del propio Estado que había jurado defender. Meses después, en septiembre, la captura del líder senderista Abimael Guzmán debilita drásticamente la insurgencia. El mismo año en que 'salva' al Perú de la hiperinflación y del terrorismo es el año en que Fujimori concentra el poder absoluto — y ese mismo aparato de excepción es el que, según establecerían después los tribunales peruanos, permitió los escuadrones de la muerte responsables de Barrios Altos (1991) y La Cantuta (1992). En 2009, ya expresidente, sería condenado a 25 años de prisión por esos crímenes; murió en Lima en 2024, todavía profundamente divisivo entre quienes lo recuerdan como el salvador del país y quienes lo recuerdan como su dictador.",
    descriptionHtml:
      "El 5 de abril de 1992, en medio de una hiperinflación descontrolada y la violencia del grupo maoísta Sendero Luminoso, el presidente Alberto Fujimori disuelve el Congreso y suspende la Constitución con respaldo militar — un autogolpe ejecutado desde dentro del propio Estado que había jurado defender. Meses después, en septiembre, la captura del líder senderista Abimael Guzmán debilita drásticamente la insurgencia. El mismo año en que 'salva' al <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Lima\" data-country=\"Perú\">Perú</button> de la hiperinflación y del terrorismo es el año en que Fujimori concentra el poder absoluto — y ese mismo aparato de excepción es el que, según establecerían después los tribunales peruanos, permitió los escuadrones de la muerte responsables de Barrios Altos (1991) y La Cantuta (1992). En 2009, ya expresidente, sería condenado a 25 años de prisión por esos crímenes; murió en Lima en 2024, todavía profundamente divisivo entre quienes lo recuerdan como el salvador del país y quienes lo recuerdan como su dictador.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Fujimori no hubiera dado el autogolpe de 1992?",
      answer:
        "Sin la disolución del Congreso, Fujimori habría enfrentado una oposición legislativa capaz de frenar tanto sus reformas económicas como su control sobre las fuerzas armadas. Pudo haber capturado a Guzmán igual, dentro de un marco democrático intacto — pero el autogolpe es precisamente lo que le dio la impunidad estructural para que escuadrones como el que operó en Barrios Altos y La Cantuta actuaran sin control civil. Dos historias distintas: una de Fujimori el reformista, otra de Fujimori el condenado. El autogolpe es la bisagra entre ambas."
    }
  },
  {
    id: "y-apenas-era-miercoles",
    year: 1993,
    title: "Y apenas era miércoles",
    author: "Martha Cerda",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Novela mexicana publicada por Joaquín Mortiz.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Martha Cerda hubiera publicado esta novela con una editorial menos establecida que Joaquín Mortiz?",
      answer:
        "El respaldo de un sello histórico de la narrativa mexicana le dio a la obra una visibilidad crítica que muchas autoras de su generación no consiguieron. La historia editorial de las escritoras mexicanas del siglo XX está tan marcada por quién las publicó como por lo que escribieron."
    }
  },
  {
    id: "obsceno-pajaro",
    year: 1970,
    title: "El obsceno pájaro de la noche",
    author: "José Donoso",
    country: "Chile",
    type: ICON_TYPE.LITERATURE,
    description: "Pesadilla gótica sobre la decadencia de la aristocracia chilena.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si José Donoso hubiera ambientado El obsceno pájaro de la noche en el Chile próspero y moderno de su presente, en vez de en la decadencia aristocrática?",
      answer:
        "La novela perdería el terreno gótico que necesita: una clase social que se pudre desde adentro, encerrada en sus propias casonas y supersticiones. Donoso encontró en la decadencia —no en el progreso— el escenario perfecto para su pesadilla literaria."
    }
  },
  {
    id: "negocios-drown",
    year: 1996,
    title: "Negocios (Drown)",
    author: "Junot Díaz",
    country: "República Dominicana",
    type: ICON_TYPE.LITERATURE,
    description:
      "Colección de cuentos sobre la diáspora dominicana entre Santo Domingo y Nueva Jersey. Título de la edición en español.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Junot Díaz hubiera escrito Negocios enteramente en inglés, sin traducción al español?",
      answer:
        "El libro habría llegado a lectores hispanohablantes solo de forma indirecta, filtrado por reseñas y traducciones ajenas. La versión en español —con su propio título, Negocios— le devuelve el texto a la lengua de la diáspora dominicana que retrata, aunque haya sido escrito originalmente en la lengua de destino, no la de origen."
    }
  },
  {
    id: "estrella-distante",
    year: 1996,
    title: "Estrella Distante",
    author: "Roberto Bolaño",
    country: "Chile",
    type: ICON_TYPE.CONFLICT,
    description: "Novela sobre el arte y el horror bajo la dictadura chilena.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Roberto Bolaño hubiera escrito sobre un criminal de guerra convencional, sin convertirlo en poeta y aviador?",
      answer:
        "Estrella Distante perdería la perturbación central de la novela: que el mismo régimen capaz de torturar es capaz, simultáneamente, de producir arte —y que el arte no redime nada. Bolaño necesitaba que su protagonista fuera artista para hacer la pregunta que le interesaba sobre la complicidad estética con el horror."
    }
  },
  {
    id: "beso-mujer-arana",
    year: 1976,
    title: "El Beso de la mujer araña",
    author: "Manuel Puig",
    country: "Argentina",
    type: ICON_TYPE.LITERATURE,
    description: "Dos presos políticos y la película que uno narra para sobrevivir la dictadura argentina.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Manuel Puig hubiera puesto a dos presos comunes, no a un preso político y un preso por delitos sexuales, en la misma celda?",
      answer:
        "La tensión entre Molina y Valentín —entre la fantasía como refugio y la ideología como disciplina— es lo que convierte El beso de la mujer araña en algo más que una novela carcelaria: una negociación entre dos formas distintas de sobrevivir a la dictadura argentina, ninguna más válida que la otra."
    }
  },
  {
    id: "gringo-viejo",
    year: 1985,
    title: "Gringo Viejo",
    author: "Carlos Fuentes",
    country: "México",
    type: ICON_TYPE.CONFLICT,
    description: "Un viejo estadounidense busca la muerte en la Revolución Mexicana.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Ambrose Bierce nunca hubiera desaparecido misteriosamente en México durante la Revolución?",
      answer:
        "Carlos Fuentes no habría tenido el vacío histórico real que convirtió a un escritor estadounidense genuino en materia de leyenda literaria. Gringo Viejo existe porque la historia real dejó una pregunta sin responder, y Fuentes decidió responderla con ficción."
    }
  },
  {
    id: "cien-anos-soledad",
    year: 1967,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    country: "Colombia",
    type: ICON_TYPE.LITERATURE,
    description: "Macondo y siete generaciones de la familia Buendía.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Gabriel García Márquez hubiera escrito Macondo como una alegoría explícita de Colombia, en vez de un mundo propio con reglas mágicas?",
      answer:
        "El realismo mágico, como categoría literaria global, probablemente no existiría de la forma en que lo conocemos. García Márquez entendió que la política y la historia colombianas se sentían con más verdad a través de la exageración fantástica que a través del realismo directo."
    }
  },
  {
    id: "cronica-muerte-anunciada",
    year: 1981,
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    country: "Colombia",
    type: ICON_TYPE.CONFLICT,
    description: "Reconstrucción coral de un asesinato anunciado y nunca evitado.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si nadie en el pueblo hubiera sabido que iban a matar a Santiago Nasar?",
      answer:
        "La novela perdería su verdadera acusación: no es un misterio sobre quién cometió el crimen, sino sobre cómo una comunidad entera permitió que ocurriera un asesinato anunciado con toda claridad. García Márquez construyó la crónica alrededor de esa complicidad colectiva, no del suspenso."
    }
  },

  // ---- CONTEMPORARY (1990–present) ----
  {
    id: "del-amor-otros-demonios",
    year: 1994,
    title: "Del amor y otros demonios",
    author: "Gabriel García Márquez",
    country: "Colombia",
    type: ICON_TYPE.LITERATURE,
    description: "Amor y exorcismo en el Cartagena colonial, narrado desde la memoria.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Sierva María nunca hubiera sido mordida por un perro rabioso?",
      answer:
        "La novela perdería el pretexto que desata todo lo demás: la sospecha de posesión demoníaca que lleva a la Iglesia colonial a intervenir en la vida de una niña, y el amor imposible que surge de ese encierro. García Márquez ancla lo sobrenatural en un incidente médico perfectamente real."
    }
  },
  {
    id: "sombra-del-viento",
    year: 2001,
    month: 4,
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    country: "España",
    region: "Barcelona",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description: "Misterio literario ambientado en la Barcelona de posguerra, 1945.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Carlos Ruiz Zafón hubiera ambientado la novela en la Barcelona de su propio presente, no en la posguerra de 1945?",
      answer:
        "El Cementerio de los Libros Olvidados —el corazón mismo del libro— necesita el ambiente de una ciudad marcada por la censura franquista, donde ciertos libros literalmente debían esconderse para sobrevivir. Sin esa amenaza histórica real, la premisa perdería su urgencia."
    }
  },
  {
    id: "memoria-putas-tristes",
    year: 2004,
    title: "Memoria de mis putas tristes",
    author: "Gabriel García Márquez",
    country: "Colombia",
    type: ICON_TYPE.LITERATURE,
    description: "Última novela de García Márquez; meditación sobre la vejez y el deseo.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si García Márquez hubiera escrito esta novela como su primera obra, no como la última?",
      answer:
        "La meditación sobre la vejez y el deseo que atraviesa el libro depende de una mirada que solo la propia edad del autor podía ofrecer con autoridad. Escrita por un joven, la misma premisa habría sonado especulativa; escrita por García Márquez casi octogenario, suena a testimonio."
    }
  },
  {
    id: "destinos-consulares",
    year: 2011,
    title: "Diversos Destinos Consulares",
    author: "Antonio Rómar",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description: "Poemario de compromiso político y crítica social, primera obra del autor.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Antonio Rómar hubiera evitado la crítica social directa en su poemario debut?",
      answer:
        "Diversos Destinos Consulares no sería el compromiso político que anunció desde el principio de la carrera de su autor, sino un ejercicio formal más entre tantos. El poemario debut de un autor suele fijar, para bien o para mal, las coordenadas de todo lo que vendrá después."
    }
  },
  {
    id: "ayotzinapa-iguala-2014",
    year: 2014,
    title: "26 de septiembre de 2014: la desaparición de los 43 de Ayotzinapa",
    author: "Hito histórico",
    country: "México",
    region: "Iguala, Guerrero",
    type: ICON_TYPE.CONFLICT,
    description:
      "En la noche del 26 de septiembre de 2014, estudiantes de la Escuela Normal Rural de Ayotzinapa son interceptados por policías municipales de Iguala y Cocula cuando viajaban a conseguir autobuses rumbo a la marcha conmemorativa de Tlatelolco en la Ciudad de México. En una serie de ataques coordinados que se prolongan por horas, 43 estudiantes son desaparecidos por la fuerza; la investigación oficial concluye que fueron entregados a la organización criminal Guerreros Unidos. Una década después, solo tres de los 43 han sido identificados con certeza, y el caso sigue abierto como uno de los episodios de violencia estatal y crimen organizado más documentados de México.",
    sensitive: true,
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si la policía de Iguala no hubiera interceptado a los estudiantes esa noche?",
      answer:
        "Los 43 habrían llegado a la marcha del 2 de octubre en la Ciudad de México como una generación más de normalistas exigiendo transporte y educación rural, sin volverse ellos mismos el símbolo. En cambio, Ayotzinapa se convirtió en la prueba más citada de cuán profundamente entrelazados pueden estar el Estado, la policía municipal y el crimen organizado en México — una lección que el país sigue pagando una década después."
    }
  },
  {
    id: "pandemia-covid19-2020",
    year: 2020,
    title: "2020: la pandemia de COVID-19",
    author: "Hito histórico",
    country: "China",
    region: "Wuhan",
    type: ICON_TYPE.HISTORY,
    description:
      "A finales de 2019 aparecen en Wuhan, China, los primeros casos de una neumonía viral desconocida —un nuevo coronavirus— que en marzo de 2020 la Organización Mundial de la Salud (OMS) declara pandemia global. En América Latina, España y Puerto Rico el golpe fue desigual pero brutal: México, con un gobierno que minimizó el virus, cerró 2020 con 200,256 muertes por COVID-19 según el conteo definitivo del INEGI, una de las cifras más altas del mundo; España impuso un confinamiento draconiano mientras cerca de 20,000 mayores de 65 años morían solo en 2020 en residencias colapsadas, según el Ministerio de Sanidad; Colombia decretó una de las cuarentenas más largas del planeta, casi cinco meses en Bogotá; Argentina lanzó, ya en marzo, una de las cuarentenas más tempranas y prolongadas del mundo; El Salvador, bajo Bukele, encerró a miles en centros de contención forzosa; Cuba desarrolló sus propias vacunas —Abdala y Soberana— pese al embargo estadounidense; Perú sufrió la tasa de mortalidad per cápita más alta del mundo —el gobierno reportó 37,621 muertes por COVID en 2020, pero el registro civil de decesos (SINADEF) documentó más de 91,000, reflejo de hospitales sin oxígeno y un subregistro masivo—; Nicaragua, bajo Ortega, negó la gravedad del virus y organizó marchas masivas; Venezuela enfrentó la crisis con hospitales que ya carecían de agua y luz; Guatemala vio en los migrantes deportados desde Estados Unidos sus primeros focos de contagio; Panamá cerró el Canal a los cambios de tripulación y selló fronteras en cuestión de días; Costa Rica se apoyó en la Caja, su sistema público de salud, para una respuesta más ordenada; y Puerto Rico, todavía roto por el huracán María y los sismos de 2020, sumó un toque de queda a una isla ya agotada.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si el virus jamás hubiera salido de Wuhan en diciembre de 2019?",
      answer:
        "El mundo se habría ahorrado dos años que redefinieron la vida cotidiana, pero las fracturas que la pandemia solo expuso —sistemas de salud desiguales, economías informales sin red de contención, gobiernos que minimizaron o negaron según su conveniencia política— habrían seguido ahí, invisibles, esperando la próxima crisis que las revelara."
    }
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
    sensitive: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Cristina Rivera Garza hubiera dramatizado el feminicidio de su hermana en vez de documentarlo con rigor factual?",
      answer:
        "El invencible verano de Liliana perdería la autoridad moral que le da precisamente su negativa a convertir el dolor en espectáculo. Rivera Garza eligió la crónica documentada sobre la ficción porque entendió que su hermana merecía hechos, no dramatización."
    }
  },
  {
    id: "otra-julia",
    year: 2024,
    title: "La otra Julia",
    author: "Mayra Santos-Febres",
    country: "Puerto Rico",
    type: ICON_TYPE.LITERATURE,
    description: "Narrativa doble entre la poeta Julia de Burgos y una escritora contemporánea.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Mayra Santos-Febres hubiera escrito solo sobre Julia de Burgos, sin la escritora contemporánea como contrapunto?",
      answer:
        "La otra Julia perdería el diálogo entre dos mujeres separadas por décadas pero unidas por la misma pregunta: qué cuesta, para una escritora puertorriqueña, reclamar una voz propia. La estructura doble le permite a Santos-Febres mostrar que esa pregunta no se resolvió con Julia de Burgos — sigue abierta."
    }
  },
  {
    id: "ofelia-santos-1960",
    year: 1960,
    endYear: 2023,
    title: "1960–2023: Ofelia del Carmen Santos",
    author: "Ofelia del Carmen Santos",
    country: "El Salvador",
    region: "San José Villanueva",
    type: ICON_TYPE.HISTORY,
    description:
      "Ofelia del Carmen Santos nace en 1960 en San José Villanueva, un pequeño pueblo de El Salvador. En 1980, a los veinte años, su tía abuela Cruz —Cruzita, hermana de su abuela— la trae a Estados Unidos, y Ofelia construye desde cero una vida nueva en Los Ángeles. Trabaja durante décadas como costurera, sosteniendo con sus propias manos una vida cómoda para su hijo mientras le inculca sus valores. En su cocina perviven las pupusas, los pastelitos salvadoreños y el pan de chompipe; de ella aprendería su hijo la primera palabra de origen náhuatl que recordaría siempre: apapachar. Muere en 2023, tras una batalla contra el cáncer, como la luchadora que fue toda su vida.",
    descriptionHtml:
      'Ofelia del Carmen Santos nace en 1960 en <button type="button" class="timeline-detail-geolink" data-region="San José Villanueva" data-country="El Salvador">San José Villanueva</button>, un pequeño pueblo de El Salvador. En 1980, a los veinte años, su tía abuela Cruz —Cruzita, hermana de su abuela— la trae a Estados Unidos, y Ofelia construye desde cero una vida nueva en <button type="button" class="timeline-detail-geolink" data-region="Los Ángeles, California" data-country="Estados Unidos">Los Ángeles</button>. Trabaja durante décadas como costurera, sosteniendo con sus propias manos una vida cómoda para su hijo mientras le inculca sus valores. En su cocina perviven las pupusas, los pastelitos salvadoreños y el pan de chompipe; de ella aprendería su hijo la primera palabra de origen náhuatl que recordaría siempre: apapachar. Muere en 2023, tras una batalla contra el cáncer, como la luchadora que fue toda su vida.',
    anchor: true,
    personalNote:
      "Mi madre. Me lo decía siempre: \"Yo te apapacho a vos, y vos me apapachas a mí\". La mujer más trabajadora y más fuerte que he conocido — todo lo que soy, y todo este proyecto, le pertenece a ella también.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si su tía Cruzita nunca la hubiera traído a Los Ángeles en 1980?",
      answer:
        "Ofelia habría construido su vida en San José Villanueva, lejos de la máquina de coser que después sostendría a su propio hijo en Los Ángeles. Todo lo que aparece en esta línea de tiempo —incluido el proyecto mismo— existe, en el fondo, porque una tía abuela decidió cruzar una frontera con su sobrina de veinte años."
    }
  },
  {
    id: "santos-armada-fundacion-2025",
    year: 2025,
    title: "2025: nace Santos Armada",
    author: "Christian Ricardo Santos",
    country: "Estados Unidos",
    region: "Los Ángeles, California",
    type: ICON_TYPE.HISTORY,
    description:
      "En Los Ángeles, California, Christian Ricardo Santos funda Santos Armada: un proyecto digital que tiende puentes entre la novela en español y la historia latinoamericana que la rodea. No es solo una biblioteca de reseñas, sino un intento de traducción en el sentido más amplio — de idioma, de tiempo, de memoria — llevando siglos de literatura a un lector contemporáneo a través de líneas de tiempo interactivas, mapas y mundos narrativos en 3D. El sitio nace de una convicción simple: que ningún libro se entiende del todo fuera del momento histórico que lo produjo.",
    anchor: true,
    personalNote: "El proyecto que reúne todo lo demás en esta línea de tiempo — y el que más me ha enseñado sobre por qué leo lo que leo.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si este proyecto se hubiera quedado en la idea de una lista de lecturas privada?",
      answer:
        "Santos Armada nace precisamente de resistir esa tentación: convertir una obsesión personal por conectar libros e historia en algo público, navegable, compartido. La línea de tiempo que estás viendo ahora mismo es la prueba de que la idea no se quedó guardada."
    }
  },
  {
    id: "frida-kahlo-el-sueno-subasta-2025",
    year: 2025,
    month: 11,
    title: "2025: El sueño de Frida Kahlo rompe tres récords",
    author: "Frida Kahlo",
    authorEntryId: "frida-kahlo-1907",
    country: "Estados Unidos",
    region: "Nueva York",
    type: ICON_TYPE.HISTORY,
    description:
      "El 20 de noviembre de 2025, El sueño (La cama), autorretrato que Frida Kahlo pintó en 1940, se vende en Sotheby's de Nueva York por 47 millones de dólares al golpe de martillo y 54.66 millones con la prima del comprador. La pintura —un óleo sobre lienzo de 74 por 98 centímetros en el que Kahlo duerme en su cama con dosel mientras un esqueleto de tamaño natural yace sobre ella— era la pieza principal de Exquisite Corpus, una subasta de más de ochenta obras surrealistas procedentes de una colección privada anónima. La puja abre en 22 millones y termina, unos cuatro minutos después, en manos de un comprador telefónico cuya identidad no se divulga. El resultado supera los 34.9 millones pagados en 2021 por Diego y yo y establece tres marcas de subasta: la obra más cara de Kahlo, la obra latinoamericana más cara y la obra de una mujer artista más cara, por encima de los 44.4 millones alcanzados por Jimson Weed/White Flower No. 1 de Georgia O'Keeffe en 2014. El sueño había pasado por la misma casa de subastas el 9 de mayo de 1980 por apenas 51,000 dólares: cuarenta y cinco años después, su precio final es más de mil veces mayor. Su venta internacional fue posible porque pertenecía a una colección privada fuera de México; las obras de Kahlo conservadas en México forman parte de un monumento artístico nacional y no pueden exportarse de manera permanente.",
    descriptionHtml:
      'El 20 de noviembre de 2025, <em>El sueño (La cama)</em>, autorretrato que <button type="button" class="timeline-detail-entrylink" data-id="frida-kahlo-1907">Frida Kahlo</button> pintó en 1940, se vende en Sotheby\'s de <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Nueva York</button> por 47 millones de dólares al golpe de martillo y 54.66 millones con la prima del comprador. La pintura —un óleo sobre lienzo de 74 por 98 centímetros en el que Kahlo duerme en su cama con dosel mientras un esqueleto de tamaño natural yace sobre ella— era la pieza principal de <em>Exquisite Corpus</em>, una subasta de más de ochenta obras surrealistas procedentes de una colección privada anónima. La puja abre en 22 millones y termina, unos cuatro minutos después, en manos de un comprador telefónico cuya identidad no se divulga. El resultado supera los 34.9 millones pagados en 2021 por <em>Diego y yo</em> y establece tres marcas de subasta: la obra más cara de Kahlo, la obra latinoamericana más cara y la obra de una mujer artista más cara, por encima de los 44.4 millones alcanzados por <em>Jimson Weed/White Flower No. 1</em> de Georgia O\'Keeffe en 2014. <em>El sueño</em> había pasado por la misma casa de subastas el 9 de mayo de 1980 por apenas 51,000 dólares: cuarenta y cinco años después, su precio final es más de mil veces mayor. Su venta internacional fue posible porque pertenecía a una colección privada fuera de <button type="button" class="timeline-detail-geolink" data-country="México">México</button>; las obras de Kahlo conservadas en México forman parte de un monumento artístico nacional y no pueden exportarse de manera permanente.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si El sueño hubiera permanecido en México después de su venta de 1980?",
      answer:
        "Probablemente no habría podido protagonizar una subasta internacional como la de 2025. La protección de la obra de Frida Kahlo como monumento artístico nacional restringe la exportación permanente de las piezas conservadas en México; que El sueño ya perteneciera a una colección privada en el extranjero permitió que reapareciera en Nueva York y que el mercado mundial fijara ese precio récord."
    }
  },
  {
    id: "diaspora-salvadorena-virginia-2024",
    year: 2024,
    month: 10,
    title: "2024: la diáspora salvadoreña en el norte de Virginia",
    author: "Hito histórico",
    country: "Estados Unidos",
    region: "Chirilagua",
    type: ICON_TYPE.HISTORY,
    description:
      "En octubre de 2024, WTOP —la radio de noticias de Washington D.C., una de las emisoras de noticias más escuchadas del país— describe a Chirilagua —el barrio de Arlandria, entre Alexandria y Arlington— como 'una joya escondida de la representación salvadoreña' en el norte de Virginia: pupuserías, panaderías, iglesias evangélicas, ligas de fútbol y murales que celebran una herencia que llegó ahí huyendo de la guerra civil de El Salvador (1980-1992). El barrio toma su nombre de la ciudad salvadoreña de Chirilagua, de donde llegaron muchos de sus primeros residentes. Las cifras detrás de ese barrio son contundentes: Virginia concentra entre 185,000 y 195,000 personas de origen salvadoreño, cerca del 2.1% de la población total del estado y alrededor del 7% de todos los salvadoreños en Estados Unidos. El condado de Fairfax reúne por sí solo más de 47,000, y Prince William más de 41,000, con comunidades igual de significativas en Alexandria, Arlington, Manassas, Loudoun y Herndon —donde, junto con Manassas Park, los salvadoreños llegan a representar un porcentaje notablemente alto de la población local—. La huella económica es igual de medible: se estima que unos 10,000 trabajadores salvadoreños bajo el Estatus de Protección Temporal (TPS) están empleados en Virginia, aportando alrededor de 730 millones de dólares anuales a la economía del estado. Lo que empezó como una ola de refugiados de la guerra civil —trabajando en construcción, jardinería, hoteles y limpieza, muchos indocumentados, enviando remesas a casa— se ha convertido en una historia de tres generaciones: la que llegó durante la guerra, sus hijos criados bilingües en Virginia, y ahora una tercera generación cuyos abuelos fueron los inmigrantes originales. Muchos jóvenes de Chirilagua nunca han vivido en El Salvador, y aun así el barrio funciona como una patria cultural. Empresarios como Carlos Castro, originario de La Unión, construyeron instituciones regionales como los supermercados Todos, que hoy sirven a comunidades inmigrantes en todo el área de Washington D.C.",
    descriptionHtml:
      'En octubre de 2024, WTOP —la radio de noticias de Washington D.C., una de las emisoras de noticias más escuchadas del país— describe a <button type="button" class="timeline-detail-geolink" data-region="Chirilagua" data-country="Estados Unidos">Chirilagua</button> —el barrio de Arlandria, entre Alexandria y Arlington— como \'una joya escondida de la representación salvadoreña\' en el norte de Virginia: pupuserías, panaderías, iglesias evangélicas, ligas de fútbol y murales que celebran una herencia que llegó ahí huyendo de la guerra civil de <button type="button" class="timeline-detail-geolink" data-country="El Salvador">El Salvador</button> (1980-1992). El barrio toma su nombre de la ciudad salvadoreña de <button type="button" class="timeline-detail-geolink" data-region="Chirilagua, El Salvador" data-country="El Salvador">Chirilagua</button>, de donde llegaron muchos de sus primeros residentes. Las cifras detrás de ese barrio son contundentes: Virginia concentra entre 185,000 y 195,000 personas de origen salvadoreño, cerca del 2.1% de la población total del estado y alrededor del 7% de todos los salvadoreños en Estados Unidos. El condado de Fairfax reúne por sí solo más de 47,000, y Prince William más de 41,000, con comunidades igual de significativas en Alexandria, Arlington, Manassas, Loudoun y Herndon —donde, junto con Manassas Park, los salvadoreños llegan a representar un porcentaje notablemente alto de la población local—. La huella económica es igual de medible: se estima que unos 10,000 trabajadores salvadoreños bajo el Estatus de Protección Temporal (TPS) están empleados en Virginia, aportando alrededor de 730 millones de dólares anuales a la economía del estado. Lo que empezó como una ola de refugiados de la guerra civil —trabajando en construcción, jardinería, hoteles y limpieza, muchos indocumentados, enviando remesas a casa— se ha convertido en una historia de tres generaciones: la que llegó durante la guerra, sus hijos criados bilingües en Virginia, y ahora una tercera generación cuyos abuelos fueron los inmigrantes originales. Muchos jóvenes de Chirilagua nunca han vivido en El Salvador, y aun así el barrio funciona como una patria cultural. Empresarios como Carlos Castro, originario de La Unión, construyeron instituciones regionales como los supermercados Todos, que hoy sirven a comunidades inmigrantes en todo el área de Washington D.C.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la guerra civil salvadoreña de 1980-1992 nunca hubiera desatado esta migración hacia Virginia?",
      answer:
        "El norte de Virginia sería un lugar culturalmente distinto: sin Chirilagua, sin pupuserías tan comunes como las hamburgueserías, sin la red de remesas e instituciones —desde iglesias hasta supermercados— que hoy conectan a cientos de miles de familias con El Salvador. La diáspora no es un accidente demográfico; es la huella directa, generación tras generación, de una guerra que expulsó a cientos de miles de personas y que Virginia terminó absorbiendo como propia."
    }
  },
  {
    id: "crisis-fronteriza-ceuta-2026",
    year: 2026,
    month: 7,
    day: 30,
    title: "30 de julio de 2026: la crisis fronteriza de Ceuta",
    author: "Hito histórico",
    country: "España",
    region: "Ceuta",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El 30 de julio de 2026, decenas de miles de personas —en su mayoría jóvenes marroquíes— entran irregularmente desde Marruecos en Ceuta por tierra y por mar, muchas nadando alrededor del espigón del Tarajal. Las primeras cifras españolas hablan de unas 50,000 entradas y el gobierno ceutí calcula 60,000; estimaciones oficiales posteriores elevan a unas 72,000 las personas que cruzaron durante el 30 y el 31 de julio, frente a solo 3,000 entradas en Ceuta y Melilla durante el resto del año hasta entonces. La llegada desborda una ciudad de unos 85,000 habitantes y sus centros para menores no acompañados. Juan Jesús Vivas, presidente de Ceuta, pide una emergencia nacional; Madrid moviliza al Ejército, refuerza la Policía y la Guardia Civil y comienza a levantar una barrera flotante. Llamamientos difundidos por redes sociales habían presentado falsamente una sentencia del Tribunal Supremo como si la frontera marítima estuviera abierta: el fallo impedía las devoluciones sumarias de quienes llegaran por mar, pero no anulaba el procedimiento ordinario de retorno. En el lado marroquí, fuerzas de seguridad y migrantes se enfrentan en Fnideq y Bni Nsar, mientras también se producen intentos de entrada en Melilla. En septiembre, el gobierno español informa que más de 63,000 personas —más del noventa por ciento— habían regresado a Marruecos en las primeras 72 horas. La Organización Internacional para las Migraciones contabiliza al menos 97 muertos en el lado español durante el 30 y el 31 de julio y advierte que la cifra real puede ser mayor. La crisis, mucho más grande que la entrada de 2021, provoca controles fronterizos entre Italia y España, acusaciones sobre el papel de Marruecos que Rabat niega y una disputa europea sobre la política migratoria española.",
    descriptionHtml:
      'El 30 de julio de 2026, decenas de miles de personas —en su mayoría jóvenes marroquíes— entran irregularmente desde <button type="button" class="timeline-detail-geolink" data-country="Marruecos">Marruecos</button> en <button type="button" class="timeline-detail-geolink" data-region="Ceuta" data-country="España">Ceuta</button> por tierra y por mar, muchas nadando alrededor del espigón del Tarajal. Las primeras cifras españolas hablan de unas 50,000 entradas y el gobierno ceutí calcula 60,000; estimaciones oficiales posteriores elevan a unas 72,000 las personas que cruzaron durante el 30 y el 31 de julio, frente a solo 3,000 entradas en Ceuta y Melilla durante el resto del año hasta entonces. La llegada desborda una ciudad de unos 85,000 habitantes y sus centros para menores no acompañados. Juan Jesús Vivas, presidente de Ceuta, pide una emergencia nacional; Madrid moviliza al Ejército, refuerza la Policía y la Guardia Civil y comienza a levantar una barrera flotante. Llamamientos difundidos por redes sociales habían presentado falsamente una sentencia del Tribunal Supremo como si la frontera marítima estuviera abierta: el fallo impedía las devoluciones sumarias de quienes llegaran por mar, pero no anulaba el procedimiento ordinario de retorno. En el lado marroquí, fuerzas de seguridad y migrantes se enfrentan en <button type="button" class="timeline-detail-geolink" data-region="Fnideq" data-country="Marruecos">Fnideq</button> y <button type="button" class="timeline-detail-geolink" data-region="Bni Nsar" data-country="Marruecos">Bni Nsar</button>, mientras también se producen intentos de entrada en <button type="button" class="timeline-detail-geolink" data-region="Melilla" data-country="España">Melilla</button>. En septiembre, el gobierno español informa que más de 63,000 personas —más del noventa por ciento— habían regresado a Marruecos en las primeras 72 horas. La Organización Internacional para las Migraciones contabiliza al menos 97 muertos en el lado español durante el 30 y el 31 de julio y advierte que la cifra real puede ser mayor. La crisis, mucho más grande que la entrada de 2021, provoca controles fronterizos entre <button type="button" class="timeline-detail-geolink" data-country="Italia">Italia</button> y España, acusaciones sobre el papel de Marruecos que Rabat niega y una disputa europea sobre la política migratoria española.',
    sensitive: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si los llamamientos en redes sociales no hubieran tergiversado la sentencia del Tribunal Supremo sobre las llegadas por mar?",
      answer:
        "La presión estacional sobre Ceuta habría continuado, pero miles de personas no habrían recibido el mensaje falso de que nadar alrededor del espigón garantizaba la entrada o impedía toda devolución. La sentencia solo exigía un procedimiento formal para quienes llegaban por mar; convertir esa diferencia jurídica en la idea de una frontera abierta ayudó a transformar un aumento gradual de cruces en una movilización masiva y mortal."
    }
  },
  {
    id: "prospera-crawfish-rock-2026",
    year: 2026,
    title: "2026: Próspera y la resistencia garífuna en Roatán",
    author: "Hito histórico",
    country: "Honduras",
    region: "Roatán",
    type: ICON_TYPE.CONFLICT,
    description:
      "En 2013, Honduras crea las ZEDE (Zonas de Empleo y Desarrollo Económico), un marco legal que permite fundar ciudades privadas con su propio sistema judicial y fiscal, casi independientes del Estado hondureño. Bajo ese marco, el empresario Erick Brimen funda en 2017 Próspera, una 'ciudad estatuto' en Roatán financiada por inversionistas de Silicon Valley como Peter Thiel, Marc Andreessen y Balaji Srinivasan. Al expandirse, Próspera entra en conflicto con Crawfish Rock, la aldea garífuna vecina: según residentes, la empresa presiona a familias para vender tierra a precios ínfimos —en un caso, a cambio de un motor de lancha— y, cuando el pueblo intenta restaurar su propio sistema de agua independiente, le corta el suministro que antes le ofrecía. Para agosto de 2023, Próspera controla cerca del 3% de la superficie total de la isla. Luisa Connor, presidenta del consejo comunal de Crawfish Rock, lleva años al frente de la resistencia, denunciando que nunca fueron consultados. En 2022 el gobierno de Xiomara Castro deroga la ley ZEDE; Próspera responde demandando al Estado hondureño por 11,000 millones de dólares ante un tribunal de arbitraje internacional, un litigio que sigue abierto. Doscientos veintisiete años después de que los británicos desembarcaran a los primeros garífunas en esta misma isla como castigo y destierro, sus descendientes vuelven a defender el mismo pedazo de tierra —esta vez frente a un poder extranjero de otro tipo.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si el gobierno hondureño nunca hubiera aprobado la ley ZEDE en 2013?",
      answer:
        "Próspera no habría tenido el marco legal para operar como una ciudad casi independiente del Estado hondureño, y Crawfish Rock probablemente nunca habría enfrentado la presión de venta de tierras ni el corte de agua que denuncia hoy. Pero la derogación posterior de la ley, en 2022, tampoco resolvió el conflicto: solo lo trasladó a un tribunal de arbitraje internacional, mostrando que revertir una ley no siempre basta para revertir el poder que esa ley ya permitió acumular."
    }
  },
  {
    id: "keiko-fujimori-presidenta-2026",
    year: 2026,
    month: 7,
    title: "2026: Keiko Fujimori, primera mujer elegida presidenta del Perú",
    author: "Hito histórico",
    country: "Perú",
    region: "Lima",
    type: ICON_TYPE.HISTORY,
    description:
      "El 28 de julio de 2026 Keiko Fujimori asume la presidencia del Perú, tras ganar la elección presidencial en su cuarto intento —después de perder en 2011, 2016 y 2021— al frente de su partido, Fuerza Popular. Nacida en Lima en 1975, hija mayor de Alberto Fujimori, ya había ocupado el centro del poder tres décadas antes: entre 1994 y 2000 ejerció como Primera Dama del Perú, con apenas diecinueve años, tras la separación de sus padres, mientras su padre gobernaba el país entre la captura de Abimael Guzmán y el autogolpe de 1992. Su llegada a la presidencia la convierte en la primera mujer elegida por voto popular para el cargo en la historia peruana, y en la segunda mujer en ocuparlo. Pero ninguna elección puede separarla del apellido que la hizo conocida: llega al poder defendiendo el legado de un padre condenado por los mismos tribunales peruanos que ahora ella preside, todavía profundamente dividido entre quienes lo recuerdan como el hombre que salvó al país y quienes lo recuerdan como su dictador.",
    descriptionHtml:
      'El 28 de julio de 2026 Keiko Fujimori asume la presidencia del <button type="button" class="timeline-detail-geolink" data-region="Lima" data-country="Perú">Perú</button>, tras ganar la elección presidencial en su cuarto intento —después de perder en 2011, 2016 y 2021— al frente de su partido, Fuerza Popular. Nacida en Lima en 1975, hija mayor de Alberto Fujimori, ya había ocupado el centro del poder tres décadas antes: entre 1994 y 2000 ejerció como Primera Dama del Perú, con apenas diecinueve años, tras la separación de sus padres, mientras su padre gobernaba el país entre la captura de Abimael Guzmán y el <button type="button" class="timeline-detail-entrylink" data-id="fujimori-autogolpe-1992">autogolpe de 1992</button>. Su llegada a la presidencia la convierte en la primera mujer elegida por voto popular para el cargo en la historia peruana, y en la segunda mujer en ocuparlo. Pero ninguna elección puede separarla del apellido que la hizo conocida: llega al poder defendiendo el legado de un padre condenado por los mismos tribunales peruanos que ahora ella preside, todavía profundamente dividido entre quienes lo recuerdan como el hombre que salvó al país y quienes lo recuerdan como su dictador.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Keiko Fujimori hubiera ganado en su primer intento, en 2011, en vez de perder tres elecciones seguidas?",
      answer:
        "Habría llegado al poder apenas un año después de que su padre fuera condenado a 25 años de prisión, con la herida del régimen todavía abierta y sin el margen de tiempo que le permitió reconstruir su imagen política durante tres campañas fallidas. Las tres derrotas —2011, 2016, 2021— terminaron siendo, sin buscarlo, el proceso por el cual una parte del electorado peruano hizo las paces con el apellido Fujimori antes de finalmente votarlo de vuelta al poder en 2026."
    }
  },

  // ---- ARTE — pintores de España y Latinoamérica ----
  // Añadidos a partir del inventario de obras que aparecen en el mundo
  // 3D de Museos. Se ordenan solos al cargar (ver el sort de abajo);
  // cada uno usa year/endYear como nacimiento/muerte, siguiendo el
  // mismo patrón que "Ocho Venado" y "Monja Alférez" más arriba.
  {
    id: "el-greco-1541",
    year: 1541,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1555.36,
    endYear: 1614,
    title: "1541–1614: El Greco",
    author: "Domenikos Theotokopoulos",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.VISION, ICON_TYPE.LITERATURE],
    description:
      "Domenikos Theotokopoulos nació en 1541 en Candía, Creta veneciana, se formó en tradición bizantina y trabajó después en Venecia y Roma. En 1577 se instaló en Toledo. Su Martirio de san Mauricio, encargado para El Escorial, no satisfizo a Felipe II y quedó fuera del altar previsto; el pintor encontró en Toledo una red distinta de patronos. Figuras alargadas, color veneciano y espacios visionarios convirtieron obras como El entierro del conde de Orgaz en una respuesta singular a la Reforma católica. Su fama decayó después, pero siglos más tarde la modernidad recuperó su lenguaje radical.",
    descriptionHtml:
      "Domenikos Theotokopoulos nació en 1541 en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Candía\" data-country=\"Grecia\">Candía, Creta veneciana</button>, se formó en tradición bizantina y trabajó después en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Venecia\" data-country=\"Italia\">Venecia</button> y <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Roma\" data-country=\"Italia\">Roma</button>. En 1577 se instaló en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Toledo\" data-country=\"España\">Toledo</button>. Su Martirio de san Mauricio, encargado para <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"San Lorenzo de El Escorial\" data-country=\"España\">El Escorial</button>, no satisfizo a <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"madrid-escorial-felipe-ii-1561\">Felipe II</button> y quedó fuera del altar previsto; el pintor encontró en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Toledo\" data-country=\"España\">Toledo</button> una red distinta de patronos. Figuras alargadas, color veneciano y espacios visionarios convirtieron obras como El entierro del conde de Orgaz en una respuesta singular a la <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"reforma-jesuitas-trento-1517\">Reforma católica</button>. Su fama decayó después, pero siglos más tarde la modernidad recuperó su lenguaje radical.",
    butterfly: {
      prompt: "¿Qué produjo el rechazo de Felipe II?",
      answer:
        "El encargo frustrado cerró una posible carrera cortesana, pero orientó a El Greco hacia patronos toledanos. En esa ciudad desarrolló un lenguaje menos subordinado al gusto real y más ligado a iglesias, intelectuales y devociones locales; el fracaso institucional ayudó, paradójicamente, a liberar su singularidad."
    }
  },

  {
    id: "velazquez-1599",
    year: 1599,
    trackYear: 1583.64,
    endYear: 1660,
    title: "1599–1660: Diego Velázquez",
    author: "Diego Velázquez",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor de cámara de Felipe IV y máxima figura del Siglo de Oro español. Las Meninas (1656) sigue siendo uno de los ejercicios más estudiados de la historia del arte occidental sobre la mirada, el poder y la representación misma, y hoy cuelga en el Museo del Prado de Madrid, donde sigue siendo una de sus obras más visitadas.",
    descriptionHtml:
      'Pintor de cámara de Felipe IV y máxima figura del Siglo de Oro español. Las Meninas (1656) sigue siendo uno de los ejercicios más estudiados de la historia del arte occidental sobre la mirada, el poder y la representación misma, y hoy cuelga en el <button type="button" class="timeline-detail-geolink" data-region="Museo del Prado" data-country="España">Museo del Prado</button> de Madrid, donde sigue siendo una de sus obras más visitadas.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Velázquez nunca hubiera sido pintor de cámara de Felipe IV?",
      answer:
        "Sin acceso directo a la corte y sus intrigas de poder y representación, es difícil imaginar Las Meninas — un cuadro que es, en el fondo, una meditación sobre quién mira a quién en el propio acto de pintar el poder. Esa posición privilegiada fue la condición misma de la obra."
    }
  },
  {
    id: "murillo-1617",
    year: 1617,
    endYear: 1682,
    title: "1617–1682: Bartolomé Esteban Murillo",
    author: "Bartolomé Esteban Murillo",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor sevillano célebre por sus Inmaculadas Concepciones y sus escenas entrañables de niños de la calle, que combinan devoción religiosa y una calidez costumbrista poco común en la pintura barroca española.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Murillo hubiera pintado solo temas religiosos solemnes, sin sus escenas costumbristas de niños de la calle?",
      answer:
        "Perdería la calidez casi tierna que lo distingue de otros pintores barrocos españoles: la capacidad de encontrar dignidad y ternura en la pobreza cotidiana sevillana, no solo en la iconografía sagrada. Esa doble mirada —devota y costumbrista— es su firma."
    }
  },
  {
    id: "goya-1746",
    year: 1746,
    endYear: 1828,
    title: "1746–1828: Francisco Goya",
    author: "Francisco de Goya",
    country: "España",
    region: "Zaragoza",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor de corte que terminó retratando el horror de la guerra napoleónica en España en Los fusilamientos del 3 de mayo y en Los desastres de la guerra, además de explorar los límites de la razón en sus Pinturas negras. Puente entre el barroco español y la modernidad.",
    descriptionHtml:
      'Pintor de corte que terminó retratando el horror de la <button type="button" class="timeline-detail-entrylink" data-id="guerra-independencia-cadiz-1808">guerra napoleónica en España</button> en <button type="button" class="timeline-detail-entrylink" data-id="goya-diptico-mayo-1814"><em>Los fusilamientos del 3 de mayo</em></button> y en <button type="button" class="timeline-detail-entrylink" data-id="goya-desastres-guerra-1810"><em>Los desastres de la guerra</em></button>, además de explorar los límites de la razón en sus <button type="button" class="timeline-detail-entrylink" data-id="goya-pinturas-negras-1819">Pinturas negras</button>. Puente entre el barroco español y la modernidad.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Goya nunca hubiera presenciado la guerra napoleónica en España?",
      answer:
        "El pintor de corte, cómodo y celebrado, probablemente nunca se habría convertido en el cronista del horror que retrató en Los fusilamientos del 3 de mayo y Los desastres de la guerra. Esa guerra específica es lo que empujó a Goya del barroco decorativo hacia la modernidad más oscura."
    }
  },
  {
    id: "sorolla-1863",
    year: 1863,
    endYear: 1923,
    title: "1863–1923: Joaquín Sorolla",
    author: "Joaquín Sorolla",
    country: "España",
    region: "Valencia",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Maestro valenciano del 'pintor de la luz', célebre por escenas de playa como Paseo a orillas del mar (1909), donde el sol mediterráneo se vuelve casi el verdadero tema del lienzo por encima de las figuras que retrata.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Sorolla hubiera pintado en un clima nórdico, sin el sol mediterráneo valenciano?",
      answer:
        "No existiría el \"pintor de la luz\" tal como lo conocemos: su obra entera es, en cierto sentido, un estudio obsesivo de cómo el sol del Mediterráneo transforma la piel, el agua y la arena. Sin esa luz específica, Sorolla habría sido un pintor distinto por completo."
    }
  },
  {
    id: "picasso-1881",
    year: 1881,
    endYear: 1973,
    title: "1881–1973: Pablo Picasso",
    author: "Pablo Picasso",
    country: "España",
    region: "Málaga",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Nacido en Málaga, cofundador del cubismo junto a Braque y una de las figuras más influyentes del arte del siglo XX. Guernica (1937) sigue siendo el retrato más citado del horror de la guerra civil española y del bombardeo a civiles en la era moderna.",
    descriptionHtml:
      'Nacido en <button type="button" class="timeline-detail-geolink" data-region="Málaga" data-country="España">Málaga</button>, cofundador del cubismo junto a Braque y una de las figuras más influyentes del arte del siglo XX. <button type="button" class="timeline-detail-entrylink" data-id="picasso-guernica-1937"><em>Guernica</em> (1937)</button> sigue siendo el retrato más citado del horror de la guerra civil española y del bombardeo a civiles en la era moderna.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Picasso nunca hubiera pintado Guernica?",
      answer:
        "El bombardeo a civiles seguiría siendo un hecho histórico documentado, pero carecería de la imagen que lo volvió universalmente reconocible como símbolo del horror de la guerra moderna. Picasso le dio al sufrimiento de un pueblo vasco un lenguaje visual que trascendió el propio conflicto español."
    }
  },
  {
    id: "goya-aquelarre-1798",
    year: 1798,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the re-spaced 1781–1808 sequence.
    trackYear: 1794.7,
    title: "1798: Goya pinta El aquelarre",
    author: "Francisco de Goya",
    authorEntryId: "goya-1746",
    country: "España",
    region: "Museo Lázaro Galdiano",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Hacia 1798, Francisco de Goya pintó El aquelarre para los duques de Osuna y su finca El Capricho. Bajo una luna creciente, un gran macho cabrío preside una reunión nocturna mientras varias mujeres le ofrecen niños. Parte de una serie de seis escenas de brujería, la obra combina terror y sátira ilustrada: ridiculiza la superstición y el poder que se alimenta del miedo colectivo. Hoy pertenece al Museo Lázaro Galdiano de Madrid. Tiempo de silencio, de Luis Martín-Santos, retomaría el aquelarre goyesco mediante la posterior versión de las Pinturas negras, conservada en el Prado.",
    descriptionHtml:
      'Hacia 1798, <button type="button" class="timeline-detail-entrylink" data-id="goya-1746">Francisco de Goya</button> pintó <em>El aquelarre</em> para los duques de Osuna y su finca <button type="button" class="timeline-detail-geolink" data-region="El Capricho" data-country="España">El Capricho</button>. Bajo una luna creciente, un gran macho cabrío preside una reunión nocturna mientras varias mujeres le ofrecen niños. Parte de una serie de seis escenas de brujería, la obra combina terror y sátira ilustrada: ridiculiza la superstición y el poder que se alimenta del miedo colectivo. Hoy pertenece al <button type="button" class="timeline-detail-geolink" data-region="Museo Lázaro Galdiano" data-country="España">Museo Lázaro Galdiano</button> de <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button>. <em>Tiempo de silencio</em>, de Luis Martín-Santos, retomaría el aquelarre goyesco mediante la <button type="button" class="timeline-detail-entrylink" data-id="goya-pinturas-negras-1819">posterior versión de las <em>Pinturas negras</em></button>, conservada en el <button type="button" class="timeline-detail-geolink" data-region="Museo del Prado" data-country="España">Prado</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Goya hubiera tratado el aquelarre como fantasía decorativa y no como sátira?",
      answer:
        "La escena conservaría su oscuridad, pero perdería la ambivalencia que la hace duradera: el espectador ya no tendría que decidir si teme al macho cabrío o si reconoce en él una burla del poder, la superstición y la obediencia colectiva."
    }
  },
  {
    id: "miro-1893",
    year: 1893,
    endYear: 1983,
    title: "1893–1983: Joan Miró",
    author: "Joan Miró",
    country: "España",
    region: "Barcelona",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor catalán cuyo vocabulario de estrellas, lunas y formas biomórficas —a medio camino entre el surrealismo y la abstracción deliberadamente infantil— se volvió una de las firmas visuales más reconocibles del arte español del siglo XX.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Joan Miró hubiera seguido la senda realista de sus primeros años de formación?",
      answer:
        "El vocabulario de estrellas, lunas y formas biomórficas que define su obra madura —a medio camino entre el surrealismo y una abstracción deliberadamente infantil— nunca habría existido. Miró tuvo que abandonar deliberadamente el realismo para encontrar la firma visual que lo volvió inconfundible."
    }
  },
  {
    id: "viktoria-luise-prusia-1892",
    year: 1892,
    month: 9,
    day: 13,
    // Real date; separated visually from Miró's 1893 marker.
    trackYear: 1890,
    title: "13 de septiembre de 1892: nace Viktoria Luise de Prusia",
    author: "Viktoria Luise de Prusia",
    country: "Alemania",
    region: "Palacio de Mármol",
    type: ICON_TYPE.ROYAL,
    description:
      "Viktoria Luise de Prusia nació el 13 de septiembre de 1892 en el Palacio de Mármol de Potsdam, única hija de Guillermo II entre siete hermanos. Su boda berlinesa de 1913 con Ernesto Augusto reunió a Jorge V y Nicolás II poco antes de la Primera Guerra Mundial. Su hija Federica fue reina de Grecia; su nieta Sofía se casó con Juan Carlos I de España, y su bisnieto Felipe VI reina en España. Su hermano August Wilhelm ingresó en el Partido Nazi y las SA.",
    descriptionHtml:
      'Viktoria Luise de <button type="button" class="timeline-detail-geolink" data-region="Prusia" data-country="Alemania">Prusia</button> nació el 13 de septiembre de 1892 en el <button type="button" class="timeline-detail-geolink" data-region="Palacio de Mármol" data-country="Alemania">Palacio de Mármol</button> de <button type="button" class="timeline-detail-geolink" data-region="Potsdam" data-country="Alemania">Potsdam</button>, única hija de Guillermo II entre siete hermanos. Su boda <button type="button" class="timeline-detail-geolink" data-region="Berlín" data-country="Alemania">berlinesa</button> de 1913 con Ernesto Augusto reunió a Jorge V y Nicolás II poco antes de la Primera Guerra Mundial. Su hija Federica fue reina de <button type="button" class="timeline-detail-geolink" data-country="Grecia">Grecia</button>; su nieta Sofía se casó con Juan Carlos I de <button type="button" class="timeline-detail-geolink" data-country="España">España</button>, y su bisnieto Felipe VI reina en <button type="button" class="timeline-detail-geolink" data-country="España">España</button>. Su hermano August Wilhelm ingresó en el Partido Nazi y las SA.',
    lineage: [
      { name: "Viktoria Luise de Prusia", relation: "madre de", entryId: "viktoria-luise-prusia-1892" },
      { name: "Federica de Hannover", relation: "madre de", entryId: "federica-hannover-1917" },
      { name: "Sofía de Grecia", relation: "madre de", entryId: "sofia-grecia-1938" },
      { name: "Felipe VI", relation: "rey de España", entryId: "felipe-vi-1968" }
    ],
    butterfly: {
      prompt: "¿Qué hubiera pasado si la línea de Viktoria Luise nunca hubiera llegado a la Corona española?",
      answer:
        "Sin el matrimonio de su nieta Sofía con Juan Carlos, Felipe VI no existiría como heredero de ambas ramas. La monarquía española contemporánea tendría otra composición familiar y habría perdido su vínculo directo con las casas de Hohenzollern, Hannover y Glücksburg."
    }
  },
  {
    id: "dali-1904",
    year: 1904,
    endYear: 1989,
    title: "1904–1989: Salvador Dalí",
    author: "Salvador Dalí",
    country: "España",
    region: "Figueres",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Figura central del surrealismo, catalán como Miró, célebre por la imaginería onírica y las formas derretidas de La persistencia de la memoria (1931). Su personaje público, tan calculado como su pintura, lo convirtió en uno de los artistas más reconocibles del siglo XX fuera del propio mundo del arte.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Salvador Dalí hubiera evitado cultivar su personaje público tan calculadamente como su pintura?",
      answer:
        "La persistencia de la memoria seguiría siendo una obra maestra del surrealismo, pero Dalí no habría alcanzado la fama que lo volvió reconocible incluso fuera del mundo del arte. Su genio publicitario fue, en muchos sentidos, tan deliberado y tan suyo como sus relojes derretidos."
    }
  },
  {
    id: "diego-rivera-1886",
    year: 1886,
    month: 12,
    endYear: 1957,
    title: "1886–1957: Diego Rivera",
    author: "Diego Rivera",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "El más internacional de 'los tres grandes' del muralismo mexicano, llevó la épica de la historia y la lucha de clases del país a muros públicos en México y Estados Unidos. Su matrimonio con Frida Kahlo volvió su nombre inseparable de la identidad artística mexicana del siglo XX.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Diego Rivera nunca hubiera pintado murales públicos, solo cuadros de caballete?",
      answer:
        "El muralismo mexicano —la épica de la historia y la lucha de clases llevada a muros públicos, visible para cualquiera, no solo para coleccionistas— perdería a su figura más internacional. Rivera entendió que el arte político necesitaba un espacio tan público como la política misma."
    }
  },
  {
    id: "frida-kahlo-1907",
    year: 1907,
    endYear: 1954,
    title: "1907–1954: Frida Kahlo",
    author: "Frida Kahlo",
    country: "México",
    region: "Coyoacán",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintora de Coyoacán cuyos autorretratos —marcados por el accidente que la dejó convaleciente de por vida y por una identidad mexicana reivindicada sin concesiones— la convirtieron, décadas después de su muerte, en una de las artistas más reconocidas del mundo. La Casa Azul, la casa familiar donde nació y murió, se abrió como el Museo Frida Kahlo en 1958 y hoy puede visitarse en Coyoacán, Ciudad de México, con buena parte de sus objetos personales, su ropa y su estudio conservados tal como los dejó. Su vida se despliega también fuera de México, casi siempre a la sombra pública de la carrera de Diego Rivera. Entre 1930 y 1931 lo acompaña a San Francisco, donde él pinta murales para la Bolsa de Valores y la Escuela de Bellas Artes de California, y donde Frida traba amistad de por vida con el médico Leo Eloesser. En 1931 viaja con él a Nueva York para la gran retrospectiva de Rivera en el MoMA, y en 1932 a Detroit, donde Diego pinta los murales de la industria del Instituto de Artes de Detroit; ahí, en julio de ese año, Frida sufre un aborto espontáneo que retrata sin concesiones en Hospital Henry Ford. En 1933 vuelve a Nueva York para el mural que Rivera pinta —y que Rockefeller manda destruir— en el Rockefeller Center. En 1938 regresa sola a Nueva York para su primera exposición individual, en la galería de Julien Levy, y en 1939 viaja a París, invitada por André Breton para la exposición 'Mexique': ahí el Louvre le compra El marco, autorretrato que la convierte en la primera artista mexicana del siglo XX en entrar a la colección del museo. Vuelve a San Francisco en 1940, ya bajo el cuidado de Eloesser, y ese mismo año se casa con Rivera por segunda vez.",
    descriptionHtml:
      'Pintora de <button type="button" class="timeline-detail-geolink" data-region="Coyoacán" data-country="México">Coyoacán</button> cuyos autorretratos —marcados por el accidente que la dejó convaleciente de por vida y por una identidad mexicana reivindicada sin concesiones— la convirtieron, décadas después de su muerte, en una de las artistas más reconocidas del mundo. <button type="button" class="timeline-detail-geolink" data-region="Casa Azul" data-country="México">La Casa Azul</button>, la casa familiar donde nació y murió, se abrió como el Museo Frida Kahlo en 1958 y hoy puede visitarse en <button type="button" class="timeline-detail-geolink" data-region="Coyoacán" data-country="México">Coyoacán</button>, Ciudad de México, con buena parte de sus objetos personales, su ropa y su estudio conservados tal como los dejó. Su vida se despliega también fuera de México, casi siempre a la sombra pública de la carrera de Diego Rivera. Entre 1930 y 1931 lo acompaña a <button type="button" class="timeline-detail-geolink" data-region="Bahía de San Francisco" data-country="Estados Unidos">San Francisco</button>, donde él pinta murales para la <button type="button" class="timeline-detail-geolink" data-region="Bolsa de Valores de San Francisco" data-country="Estados Unidos">Bolsa de Valores</button> y la <button type="button" class="timeline-detail-geolink" data-region="Escuela de Bellas Artes de California" data-country="Estados Unidos">Escuela de Bellas Artes de California</button>, y donde Frida traba amistad de por vida con el médico Leo Eloesser. En 1931 viaja con él a <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Nueva York</button> para la gran retrospectiva de Rivera en el <button type="button" class="timeline-detail-geolink" data-region="MoMA" data-country="Estados Unidos">MoMA</button>, y en 1932 a <button type="button" class="timeline-detail-geolink" data-region="Detroit" data-country="Estados Unidos">Detroit</button>, donde Diego pinta los murales de la industria del <button type="button" class="timeline-detail-geolink" data-region="Instituto de Artes de Detroit" data-country="Estados Unidos">Instituto de Artes de Detroit</button>; ahí, en julio de ese año, Frida sufre un aborto espontáneo que retrata sin concesiones en Hospital Henry Ford. En 1933 vuelve a <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Nueva York</button> para el mural que Rivera pinta —y que Rockefeller manda destruir— en el <button type="button" class="timeline-detail-geolink" data-region="Rockefeller Center" data-country="Estados Unidos">Rockefeller Center</button>. En 1938 regresa sola a <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Nueva York</button> para su primera exposición individual, en la galería de Julien Levy, y en 1939 viaja a <button type="button" class="timeline-detail-geolink" data-region="París" data-country="Francia">París</button>, invitada por André Breton para la exposición \'Mexique\': ahí el <button type="button" class="timeline-detail-geolink" data-region="Louvre" data-country="Francia">Louvre</button> le compra El marco, autorretrato que la convierte en la primera artista mexicana del siglo XX en entrar a la colección del museo. Vuelve a <button type="button" class="timeline-detail-geolink" data-region="Bahía de San Francisco" data-country="Estados Unidos">San Francisco</button> en 1940, ya bajo el cuidado de Eloesser, y ese mismo año se casa con Rivera por segunda vez.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Frida Kahlo nunca hubiera sufrido el accidente que la dejó convaleciente de por vida?",
      answer:
        "Sus autorretratos —marcados por el dolor físico y una identidad mexicana reivindicada sin concesiones— nacen directamente de ese cuerpo herido y del tiempo forzado en cama que le dio para mirarse a sí misma con una honestidad casi insoportable. Sin esa herida, es difícil imaginar la misma obra."
    }
  },
  {
    id: "orozco-1883",
    year: 1883,
    endYear: 1949,
    title: "1883–1949: José Clemente Orozco",
    author: "José Clemente Orozco",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "Junto con Rivera y Siqueiros, uno de 'los tres grandes' del muralismo mexicano, pero el más oscuro de los tres: sus murales —como los del Hospicio Cabañas— tratan la violencia y la deshumanización con una furia visual que evita el triunfalismo revolucionario de sus contemporáneos.",
    descriptionHtml:
      'Junto con Rivera y Siqueiros, uno de \'los tres grandes\' del muralismo mexicano, pero el más oscuro de los tres: sus murales —como los del <button type="button" class="timeline-detail-geolink" data-region="Hospicio Cabañas" data-country="México">Hospicio Cabañas</button>— tratan la violencia y la deshumanización con una furia visual que evita el triunfalismo revolucionario de sus contemporáneos.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si José Clemente Orozco hubiera pintado con el mismo triunfalismo revolucionario que sus contemporáneos?",
      answer:
        "Perdería lo que lo distingue de Rivera y Siqueiros: una furia visual que trata la violencia y la deshumanización sin heroísmo fácil. Orozco vio la Revolución de cerca y decidió no venderla como epopeya limpia."
    }
  },
  {
    id: "siqueiros-1896",
    year: 1896,
    // Real year; nudged track position only within the dense 1893–1899 sequence.
    trackYear: 1895.4,
    endYear: 1974,
    title: "1896–1974: David Alfaro Siqueiros",
    author: "David Alfaro Siqueiros",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "El más políticamente militante de 'los tres grandes', combatiente en la Guerra Civil española y muralista de técnica experimental —piroxilina, proyección fotográfica, perspectivas forzadas— que buscaba un arte tan revolucionario en su forma como en su contenido.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si David Alfaro Siqueiros nunca hubiera combatido en la Guerra Civil española?",
      answer:
        "Su búsqueda de un arte tan revolucionario en la forma —piroxilina, proyección fotográfica, perspectivas forzadas— como en el contenido probablemente habría sido menos urgente. Siqueiros no separaba la militancia política de la experimentación artística; una alimentaba a la otra."
    }
  },
  {
    id: "tamayo-1899",
    year: 1899,
    endYear: 1991,
    title: "1899–1991: Rufino Tamayo",
    author: "Rufino Tamayo",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor oaxaqueño de ascendencia zapoteca que deliberadamente se distanció del muralismo político de Rivera, Orozco y Siqueiros para construir un lenguaje propio, más cercano a la abstracción internacional, sin abandonar una paleta profundamente mexicana.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Rufino Tamayo hubiera seguido el muralismo político de Rivera, Orozco y Siqueiros?",
      answer:
        "No existiría la vía alterna que abrió Tamayo: una pintura profundamente mexicana en su paleta pero cercana a la abstracción internacional, sin la obligación de narrar historia o lucha de clases. Su distancia deliberada de \"los tres grandes\" demostró que había más de una manera de ser un pintor mexicano moderno."
    }
  },
  {
    id: "remedios-varo-1908",
    year: 1908,
    month: 12,
    endYear: 1963,
    title: "1908–1963: Remedios Varo",
    author: "Remedios Varo",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintora nacida en Cataluña que, tras huir de la Guerra Civil española y la ocupación de Francia, se exilia en México en 1941 y se convierte en una de las figuras centrales del surrealismo mexicano, con un universo propio de alquimistas, viajeras y máquinas imposibles.",
    descriptionHtml:
      'Pintora nacida en <button type="button" class="timeline-detail-geolink" data-region="Cataluña" data-country="España">Cataluña</button> que, tras huir de la Guerra Civil española y la ocupación de Francia, se exilia en México en 1941 y se convierte en una de las figuras centrales del surrealismo mexicano, con un universo propio de alquimistas, viajeras y máquinas imposibles.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Remedios Varo nunca hubiera huido de la Guerra Civil española ni de la ocupación de Francia?",
      answer:
        "Sin ese exilio doble, es difícil imaginar que hubiera llegado a México en 1941 y encontrado ahí, entre otros exiliados y artistas afines, el terreno para desarrollar su universo propio de alquimistas y máquinas imposibles. El surrealismo mexicano perdería a una de sus voces más singulares."
    }
  },
  {
    id: "wifredo-lam-1902",
    year: 1902,
    endYear: 1982,
    title: "1902–1982: Wifredo Lam",
    author: "Wifredo Lam",
    country: "Cuba",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor cubano de ascendencia china, africana y española cuya obra —como La jungla (1943)— funde el modernismo europeo con la iconografía afrocubana y la santería, redefiniendo qué podía significar el surrealismo fuera de Europa.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Wifredo Lam hubiera pintado desde una sola de sus tres herencias —china, africana o española— en vez de fundirlas?",
      answer:
        "La jungla y el resto de su obra perderían precisamente lo que las hace radicales: la fusión del modernismo europeo con la iconografía afrocubana y la santería, una mezcla que redefinió qué podía significar el surrealismo fuera de Europa. Lam pintaba, literalmente, todo lo que era a la vez."
    }
  },
  {
    id: "fernando-botero-1932",
    year: 1932,
    endYear: 2023,
    title: "1932–2023: Fernando Botero",
    author: "Fernando Botero",
    country: "Colombia",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor y escultor colombiano célebre por su 'boterismo': figuras humanas y animales de volumen exagerado y deliberado, con las que retrató —a veces con humor, a veces con crítica social directa— la vida cotidiana, el poder y la violencia latinoamericana.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Fernando Botero hubiera pintado figuras de proporciones realistas?",
      answer:
        "El \"boterismo\" —ese volumen exagerado y deliberado en cuerpos humanos y animales— es lo que le permitió retratar el poder, la violencia y la vida cotidiana latinoamericana con un humor y una crítica que el realismo directo no podía lograr de la misma forma. La distorsión era, en sí misma, el comentario."
    }
  },

  // ---- HITO HISTÓRICO ----
  {
    id: "inquisicion-espanola-1478",
    year: 1478,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1433.32,
    title: "1478: se establece la Inquisición española",
    author: "Sixto IV, Isabel I y Fernando II",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.CONFLICT],
    description:
      "El 1 de noviembre de 1478, el papa Sixto IV emitió la bula Exigit sinceras devotionis affectus a petición de Isabel de Castilla y Fernando de Aragón. Autorizó una Inquisición bajo control de la Corona, distinta del tribunal medieval dependiente de Roma. El primer tribunal abrió en Sevilla en 1480 y celebró allí un auto de fe en 1481. Persiguió primero a conversos de origen judío acusados de judaizar; después alcanzó a moriscos, protestantes, libros y otras disidencias. La institución unió religión, justicia y monarquía durante tres largos siglos hasta su abolición definitiva en 1834.",
    descriptionHtml:
      "El 1 de noviembre de 1478, el papa Sixto IV emitió la bula Exigit sinceras devotionis affectus a petición de Isabel de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castilla\" data-country=\"España\">Castilla</button> y Fernando de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Aragón\" data-country=\"España\">Aragón</button>. Autorizó una Inquisición bajo control de la Corona, distinta del tribunal medieval dependiente de <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Roma\" data-country=\"Italia\">Roma</button>. El primer tribunal abrió en <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Sevilla\" data-country=\"España\">Sevilla</button> en 1480 y celebró allí un auto de fe en 1481. Persiguió primero a conversos de origen judío acusados de judaizar; después alcanzó a <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"alpujarras-expulsion-moriscos-1568\">moriscos</button>, <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"reforma-jesuitas-trento-1517\">protestantes</button>, libros y otras disidencias. La institución unió religión, justicia y monarquía durante tres largos siglos hasta su abolición definitiva en 1834.",
    butterfly: {
      prompt: "¿Qué cambió al quedar la Inquisición bajo control de la Corona?",
      answer:
        "La monarquía obtuvo una institución capaz de investigar creencias, censurar textos y castigar disidencias en sus territorios. Su historia no fue uniforme, pero durante siglos convirtió la vigilancia religiosa en una herramienta de gobierno y dejó huellas profundas en familias, comunidades y cultura impresa."
    }
  },

  {
    id: "etnogenesis-garifuna-1635",
    year: 1635,
    title: "1635: nace el pueblo garífuna en San Vicente",
    author: "Hito histórico",
    country: "San Vicente y las Granadinas",
    region: "San Vicente",
    type: ICON_TYPE.HISTORY,
    description:
      "El origen del pueblo garífuna se remonta, según el relato más citado, a 1635, cuando dos barcos españoles cargados de personas esclavizadas naufragan frente a las costas de San Vicente, en el Caribe oriental. Los sobrevivientes africanos llegan a nado a la isla, donde los kalínago —los caribes isleños— les dan refugio. De generaciones de matrimonios entre ambos pueblos nace un grupo étnico genuinamente nuevo: los garínagu, con lengua propia de raíz arahuaca y una identidad que no es ni puramente africana ni puramente indígena, sino las dos cosas a la vez. (La historia del naufragio, documentada por primera vez recién en 1667 por un oficial colonial británico, es debatida por algunos historiadores, que apuntan a un mestizaje más gradual iniciado generaciones antes.) San Vicente —Yurumein, en lengua garífuna— se convierte así en la cuna de un pueblo que los europeos jamás lograron esclavizar.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si los kalínago de San Vicente hubieran esclavizado a los africanos náufragos en vez de darles refugio?",
      answer:
        "No existiría el pueblo garífuna tal como lo conocemos: una identidad afroindígena nacida del parentesco, no de la dominación. La decisión de los kalínago de recibir a los náufragos como iguales —y no como propiedad— es precisamente lo que hizo posible una fusión genuina de lenguas, sangre y memoria en vez de otra relación de esclavitud más."
    }
  },
  {
    id: "guerra-caribe-balliceaux-1796",
    year: 1795,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Part of the chain described at
    // bois-caiman-revuelta-1791.
    trackYear: 1787.5,
    endYear: 1796,
    title: "1796: derrota garífuna y el horror de Balliceaux",
    author: "Hito histórico",
    country: "San Vicente y las Granadinas",
    region: "Balliceaux",
    type: ICON_TYPE.CONFLICT,
    description:
      "Cuando Gran Bretaña reclama control total de San Vicente, los garífunas —aliados con Francia— toman las armas bajo el mando del jefe Joseph Chatoyer, también llamado Satuyé, en la que se conoce como la Segunda Guerra Carib. Chatoyer muere en combate el 14 de marzo de 1795, pero la resistencia continúa más de un año bajo sus lugartenientes hasta que, sin el apoyo francés, la rendición se vuelve inevitable hacia octubre de 1796. Cerca de 5,080 garífunas son capturados y enviados como prisioneros al islote de Balliceaux, sin infraestructura ni suministros suficientes para tantas personas. El hacinamiento, el hambre y la fiebre amarilla matan a más de la mitad antes de que termine el año.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Joseph Chatoyer no hubiera muerto en los primeros meses de la guerra?",
      answer:
        "Sin la muerte de su líder, la alianza garífuna-francesa pudo haber resistido lo suficiente para negociar en vez de rendirse sin condiciones. La captura masiva, el horror de Balliceaux y la deportación a Roatán no eran el único desenlace posible — pero fue el que terminó esparciendo la cultura garífuna por toda la costa caribeña centroamericana, en vez de dejarla concentrada, y vulnerable, en una sola isla."
    }
  },
  {
    id: "garifuna-llegada-roatan-1797",
    year: 1797,
    trackYear: 1792.3,
    title: "12 de abril de 1797: los garífunas llegan a Honduras",
    author: "Hito histórico",
    country: "Honduras",
    region: "Roatán",
    type: ICON_TYPE.HISTORY,
    description:
      "El 20 de febrero de 1797, los británicos embarcan a los garífunas sobrevivientes de Balliceaux con destino a Roatán, frente a la costa de Honduras. Tras casi dos meses en el mar, unos 2,026 garínagu desembarcan en Punta Gorda, Roatán, el 12 de abril de 1797 —fecha que Honduras conmemora cada año como el día de la llegada del pueblo garífuna—. Desde la isla, las familias se dispersan por la costa norte hondureña —Trujillo, La Ceiba, Tela— y más allá, hacia Belice, Guatemala y Nicaragua, fundando la diáspora garífuna centroamericana que perdura hoy. En 2001, la UNESCO declaró su lengua, música y danza Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Gran Bretaña hubiera decidido simplemente dejar morir a los sobrevivientes de Balliceaux, en vez de deportarlos?",
      answer:
        "El pueblo garífuna se habría extinguido en un solo islote del Caribe oriental. En cambio, la deportación forzada a Roatán —pensada por los británicos como castigo y destierro— terminó multiplicando su presencia por toda la costa caribeña centroamericana: Honduras, Belice, Guatemala y Nicaragua heredaron una cultura que, sin querer, la propia crueldad británica ayudó a dispersar y preservar."
    }
  },

  // ---- ABOLICIÓN DE LA ESCLAVITUD EN AMÉRICA (1791–1886) ----
  {
    id: "bois-caiman-revuelta-1791",
    year: 1791,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Re-spaced with the expanded late-colonial sequence
    // so every point from 1781 through 1808 remains independently clickable.
    trackYear: 1780.3,
    title: "1791: la ceremonia de Bois Caïman y el estallido de la revuelta",
    author: "Hito histórico",
    country: "Haití",
    region: "Cap-Haïtien",
    type: ICON_TYPE.CONFLICT,
    description:
      "En la noche del 14 de agosto de 1791, cerca de doscientos esclavizados de las plantaciones del norte de Saint-Domingue se reúnen en secreto en el bosque de Bois Caïman, cerca de Le Cap, para una ceremonia vodú presidida por el houngan Dutty Boukman y la mambo Cécile Fatiman. Ocho noches después, el 22 de agosto, Boukman reúne a los esclavizados de las plantaciones vecinas y los conduce al ingenio Noé, que incendian mientras matan o capturan a sus propietarios — el primer golpe de lo que se convertiría en la única revuelta de esclavizados exitosa a gran escala de la historia, y la que fundaría, trece años después, la primera nación libre de esclavitud del hemisferio.",
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si el plan de Bois Caïman hubiera sido descubierto antes del 22 de agosto?",
      answer:
        "Los planes de una revuelta coordinada para el 24 de agosto ya habían empezado a circular entre las plantaciones del norte; una traición o descubrimiento temprano probablemente solo hubiera adelantado o dispersado el levantamiento, no impedido que ocurriera. Pero Boukman y Fatiman no habrían pasado a la historia como los fundadores simbólicos de la revolución, y Saint-Domingue habría tenido que esperar a otra chispa para encender la misma pólvora."
    }
  },
  {
    id: "sonthonax-convencion-abolicion-1794",
    year: 1794,
    trackYear: 1785.1,
    title: "1794: Francia abole la esclavitud en Saint-Domingue",
    author: "Hito histórico",
    country: "Haití",
    region: "Cap-Haïtien",
    type: ICON_TYPE.HISTORY,
    description:
      "Con la revuelta de 1791 fuera de control y la colonia amenazada por invasiones española y británica, el comisario civil francés Léger-Félicité Sonthonax abole la esclavitud en el norte de Saint-Domingue el 29 de agosto de 1793 — en parte por convicción, en parte para ganar el apoyo militar de los antiguos esclavizados frente a esos enemigos externos. Sus delegados llevan la noticia a París, y el 4 de febrero de 1794 la Convención Nacional francesa, en plena Revolución, ratifica y extiende la medida a todas las colonias francesas: la primera abolición general de la esclavitud decretada por una potencia colonial en el hemisferio.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Sonthonax no hubiera abolido la esclavitud por su cuenta antes de que la Convención lo hiciera?",
      answer:
        "Sin la medida de emergencia de Sonthonax, buscando aliados contra España e Inglaterra, la Convención de París —lejos del campo de batalla— podría haber tardado años en actuar, si es que actuaba. La abolición de 1794 fue, en el fondo, una ratificación de lo que ya ocurría sobre el terreno, no una decisión tomada desde cero en la distancia."
    }
  },
  {
    id: "expedicion-leclerc-toussaint-1802",
    year: 1802,
    trackYear: 1799.5,
    title: "1802: Napoleón envía a Leclerc a restaurar la esclavitud",
    author: "Hito histórico",
    country: "Haití",
    region: "Cap-Haïtien",
    type: ICON_TYPE.CONFLICT,
    description:
      "Napoleón Bonaparte envía a su cuñado, el general Charles Leclerc, al mando de una expedición de veinte mil soldados que llega a Saint-Domingue en febrero de 1802 con el objetivo de restaurar el control directo de Francia y, según se sospechaba cada vez con más certeza, reinstaurar la esclavitud — como ya había ocurrido en Guadalupe ese mismo mayo bajo la expedición de Richepanse. Toussaint Louverture, gobernador de la colonia y antiguo esclavizado, es atraído a una negociación, arrestado por engaño en junio y deportado a Francia, donde muere en prisión en el castillo de Joux en abril de 1803 — sin haber visto la independencia que su ejército terminaría por conquistar sin él.",
    descriptionHtml:
      'Napoleón Bonaparte envía a su cuñado, el general Charles Leclerc, al mando de una expedición de veinte mil soldados que llega a Saint-Domingue en febrero de 1802 con el objetivo de restaurar el control directo de Francia y, según se sospechaba cada vez con más certeza, reinstaurar la esclavitud — como ya había ocurrido en Guadalupe ese mismo mayo bajo la expedición de Richepanse. Toussaint Louverture, gobernador de la colonia y antiguo esclavizado, es atraído a una negociación, arrestado por engaño en junio y deportado a Francia, donde muere en prisión en el <button type="button" class="timeline-detail-geolink" data-region="Castillo de Joux" data-country="Francia">castillo de Joux</button> en abril de 1803 — sin haber visto la independencia que su ejército terminaría por conquistar sin él.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Toussaint Louverture no hubiera acudido a esa negociación con los franceses?",
      answer:
        "Sin su captura, Toussaint probablemente habría seguido al mando de la resistencia, y el nombre que hoy asociamos con la independencia de Haití sería el suyo, no el de Jean-Jacques Dessalines. Pero su arresto, lejos de aplastar la revuelta, radicalizó a sus antiguos oficiales: la traición francesa convenció a Dessalines de que ya no había nada que negociar, solo una guerra que ganar."
    }
  },
  {
    id: "haiti-independencia-1804",
    year: 1804,
    trackYear: 1801.9,
    title: "1804: Haití declara su independencia y abole la esclavitud para siempre",
    author: "Hito histórico",
    country: "Haití",
    region: "Gonaïves",
    type: ICON_TYPE.HISTORY,
    description:
      "Tras la derrota decisiva de las fuerzas francesas en la batalla de Vertières el 18 de noviembre de 1803, Jean-Jacques Dessalines proclama la independencia de la antigua Saint-Domingue en Gonaïves el 1 de enero de 1804, devolviéndole el nombre indígena taíno de la isla: Haití. Es la primera nación del hemisferio fundada sobre la abolición permanente y explícita de la esclavitud, y la segunda en declarar su independencia en América después de Estados Unidos — lograda, a diferencia de aquella, mediante la única revuelta de esclavizados de la historia que terminó fundando un Estado soberano.",
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si la expedición de Leclerc hubiera logrado restaurar la esclavitud en 1802?",
      answer:
        "Saint-Domingue habría vuelto a ser una colonia esclavista francesa, la más rentable del imperio, tal como Napoleón pretendía. El resto de las aboliciones americanas del siglo diecinueve —muchas de ellas conscientes del precedente haitiano— habrían carecido del ejemplo más radical y temido de todos: que una nación entera podía nacer, y sobrevivir, de una revuelta de esclavizados victoriosa."
    }
  },
  {
    id: "chile-abolicion-esclavitud-1823",
    year: 1823,
    title: "1823: Chile abole la esclavitud",
    author: "Hito histórico",
    country: "Chile",
    region: "Santiago",
    type: ICON_TYPE.HISTORY,
    description:
      "Tras la caída de Bernardo O'Higgins en enero de 1823, su sucesor Ramón Freire impulsa una ley que libera a los hijos de esclavizadas nacidos en territorio chileno, prohíbe la trata y declara libre a cualquier esclavizado que permanezca más de seis meses en el país. La medida libera a cerca de cinco mil personas y convierte a Chile en la segunda nación de las Américas —después de Haití— en abolir la esclavitud, tres décadas antes que la mayoría de sus vecinos sudamericanos.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si O'Higgins hubiera seguido en el poder en 1823 en vez de Freire?",
      answer:
        "O'Higgins había intentado medidas graduales contra la esclavitud durante su gobierno, pero fue el ala liberal de los pipiolos, liderada por Freire tras el golpe de enero de 1823, la que finalmente impulsó la abolición total. Sin ese giro político, Chile bien podría haber adoptado una ley de vientres libres más tibia, como la de Argentina, en vez de la abolición inmediata que la convirtió en pionera continental."
    }
  },
  {
    id: "centroamerica-abolicion-esclavitud-1824",
    year: 1824,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. 1823 and 1824 were only 24px apart, just under the
    // 34px cluster threshold.
    trackYear: 1825,
    title: "1824: las Provincias Unidas de Centroamérica abolen la esclavitud",
    author: "Hito histórico",
    country: "Guatemala",
    region: "Ciudad de Guatemala",
    type: ICON_TYPE.HISTORY,
    description:
      "El 17 de abril de 1824, la asamblea nacional constituyente de las Provincias Unidas de Centroamérica —la federación que agrupaba a los actuales Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica— decreta la abolición inmediata de la esclavitud en todo su territorio, incorporada después a la Constitución federal de ese mismo año. El decreto fue impulsado por el sacerdote y político salvadoreño José Simeón Cañas, quien interrumpió una sesión sobre otro asunto para exigir un debate urgente, argumentando que la libertad no admitía demora. La medida, una de las más tempranas del continente, careció sin embargo de reforma agraria, y buena parte de la servidumbre que sostenía a las grandes haciendas persistió bajo otras formas.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si José Simeón Cañas no hubiera interrumpido esa sesión de la asamblea?",
      answer:
        "Sin su intervención directa exigiendo debate inmediato, la abolición centroamericana pudo haber quedado postergada indefinidamente entre otras prioridades de una federación ya frágil, que colapsaría por completo en 1840. Cañas es hoy recordado en El Salvador precisamente por ese gesto: convertir una convicción moral en ley antes de que la oportunidad política se cerrara."
    }
  },
  {
    id: "guerrero-decreto-abolicion-1829",
    year: 1829,
    title: "1829: Vicente Guerrero abole la esclavitud en México",
    author: "Hito histórico",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.HISTORY,
    description:
      "El 15 de septiembre de 1829, el presidente Vicente Guerrero —de ascendencia afromexicana e indígena, y héroe de la guerra de independencia— decreta la abolición de la esclavitud en toda la joven república, exceptuando únicamente el istmo de Tehuantepec, convirtiendo a México en una de las primeras naciones de las Américas en prohibir la institución. El decreto llega a Texas el 16 de octubre, donde los colonos angloamericanos —que habían construido sus granjas sobre el trabajo esclavizado— se alarman de inmediato. Bajo esa presión, Guerrero cede el 2 de diciembre de 1829 y exime a Texas de la ley, socavando la universalidad del decreto y alimentando el resentimiento separatista que, siete años después, desembocaría en la revolución texana.",
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Guerrero no hubiera cedido y hubiera exigido la abolición también en Texas?",
      answer:
        "Una aplicación estricta del decreto en Texas probablemente habría acelerado, no evitado, la revolución texana: los colonos angloamericanos ya buscaban pretextos para separarse, y una confrontación directa sobre la esclavitud se los habría dado antes. La exención de Guerrero, pensada para ganar tiempo, terminó comprando apenas siete años antes de perder Texas de todos modos."
    }
  },
  {
    id: "argentina-libertad-vientres-1813",
    year: 1813,
    // Visual spacing only; the displayed historical year remains unchanged.
    trackYear: 1813.2,
    title: "1813: la Asamblea del Año XIII declara la libertad de vientres",
    author: "Hito histórico",
    country: "Argentina",
    region: "Buenos Aires",
    type: ICON_TYPE.HISTORY,
    description:
      "El 2 de febrero de 1813, la Asamblea General Constituyente de las Provincias Unidas del Río de la Plata declara la 'libertad de vientres': todo hijo de esclavizada nacido en el territorio después del 31 de enero de 1813 nacería libre, aunque obligado a servir a los dueños de su madre hasta cumplir entre dieciséis y veinte años. Días después, el 4 de febrero, la Asamblea declara también libre a todo esclavizado que ingresara al territorio, cerrando de facto la trata. No fue una abolición —esa esperaría cuarenta años más— sino el primer paso de un proceso deliberadamente gradual.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si la Asamblea del Año XIII hubiera decretado la abolición total e inmediata en 1813?",
      answer:
        "Una abolición inmediata habría enfrentado una resistencia económica y política mucho más dura en plena guerra de independencia, cuando las provincias necesitaban toda la cohesión posible entre las élites terratenientes. La gradualidad de la libertad de vientres —criticable desde hoy— fue probablemente la única fórmula políticamente viable en ese momento; la abolición total tendría que esperar a una Argentina ya consolidada como nación."
    }
  },
  {
    id: "argentina-abolicion-constitucion-1853",
    year: 1853,
    month: 5,
    trackYear: 1854.1,
    title: "1853: la Constitución argentina abole la esclavitud",
    author: "Hito histórico",
    country: "Argentina",
    region: "Santa Fe",
    type: ICON_TYPE.HISTORY,
    description:
      "El 1 de mayo de 1853, el Congreso General Constituyente reunido en Santa Fe sanciona la primera Constitución Nacional argentina, promulgada por Justo José de Urquiza. Su artículo 15 declara: 'En la Nación Argentina no hay esclavos: los pocos que hoy existen quedan libres desde la jura de esta Constitución'. La ironía es notable: el propio texto que abolió la esclavitud para siempre fue sancionado por trece provincias sin la presencia de Buenos Aires, que se había separado de la Confederación en 1852 y no se reincorporaría hasta 1859.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Buenos Aires no se hubiera separado de la Confederación en 1852?",
      answer:
        "Con Buenos Aires —la provincia más rica y poblada— presente en Santa Fe, el debate constituyente de 1853 probablemente habría sido más largo y disputado, dada la histórica resistencia porteña a ceder poder al interior. La abolición constitucional, sin embargo, contaba ya con consenso suficiente entre las provincias del interior; lo que habría cambiado no es el resultado, sino cuánto habría tardado en llegar."
    }
  },
  {
    id: "colombia-ley-manumision-1851",
    year: 1851,
    month: 5,
    title: "1851: Colombia abole la esclavitud",
    author: "Hito histórico",
    country: "Colombia",
    region: "Bogotá",
    type: ICON_TYPE.CONFLICT,
    description:
      "El 21 de mayo de 1851, el Congreso de la Nueva Granada sanciona la Ley de Manumisión, impulsada por el presidente liberal José Hilario López, que declara la libertad de todos los esclavizados a partir del 1 de enero de 1852 y compensa a sus antiguos dueños con bonos del Estado. Cerca de 16,147 personas quedan libres. La medida provoca un levantamiento armado de los grandes hacendados del Cauca y Pasto, que ven amenazada su mano de obra: la guerra civil de 1851 estalla directamente por esta causa, y termina cuatro meses después con la victoria liberal y la libertad confirmada.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si los hacendados del Cauca y Pasto hubieran ganado la guerra civil de 1851?",
      answer:
        "Una victoria conservadora en el Cauca probablemente habría revertido o postergado la manumisión en el sur del país, creando una Colombia con abolición desigual según la región. La derrota de los hacendados en apenas cuatro meses fue lo que permitió que la Ley de Manumisión se sostuviera como ley nacional uniforme, y no como una medida bogotana ignorada en la periferia."
    }
  },
  {
    id: "ecuador-abolicion-esclavitud-1851",
    year: 1851,
    month: 6,
    title: "1851: Ecuador abole la esclavitud",
    author: "Hito histórico",
    country: "Ecuador",
    region: "Quito",
    type: ICON_TYPE.HISTORY,
    description:
      "El general José María Urbina, tras tomar el poder ese mismo año, decreta la abolición total de la esclavitud en Ecuador el 25 de junio de 1851, con compensación estatal a los antiguos propietarios. Fue una de las medidas centrales de un gobierno liberal que también enfrentó a la Iglesia católica en asuntos de propiedad y educación, consolidando a Urbina como una figura clave —y polémica— del liberalismo ecuatoriano del siglo diecinueve.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Urbina no hubiera tomado el poder en 1851?",
      answer:
        "Sin el golpe de Urbina, el Ecuador conservador de mediados de siglo —estrechamente aliado con la Iglesia y las élites terratenientes— probablemente habría postergado la abolición varios años más, como ocurrió en otros países de la región donde el poder liberal tardó en consolidarse."
    }
  },
  {
    id: "uruguay-abolicion-colorados-1842",
    year: 1842,
    title: "1842: los colorados abolen la esclavitud en Montevideo",
    author: "Hito histórico",
    country: "Uruguay",
    region: "Montevideo",
    type: ICON_TYPE.CONFLICT,
    description:
      "En plena Guerra Grande —la guerra civil que enfrentó a blancos y colorados entre 1839 y 1852, con Montevideo bajo asedio— el gobierno colorado de Fructuoso Rivera decreta en diciembre de 1842 la abolición de la esclavitud dentro de la ciudad sitiada, compensando a los dueños con 300 pesos por esclavizado. La medida, más pragmática que ideológica, busca sobre todo reclutar a los recién liberados para defender Montevideo del asedio blanco.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Montevideo no hubiera estado bajo asedio en 1842?",
      answer:
        "Sin la urgencia militar de reclutar defensores, es probable que el gobierno colorado hubiera tardado más en decretar la abolición, o que la hubiera limitado —como Argentina en 1813— a una fórmula gradual de vientres libres en vez de una liberación inmediata."
    }
  },
  {
    id: "uruguay-abolicion-blancos-1846",
    year: 1846,
    title: "1846: los blancos abolen la esclavitud en la campaña",
    author: "Hito histórico",
    country: "Uruguay",
    region: "Montevideo",
    type: ICON_TYPE.HISTORY,
    description:
      "Cuatro años después del decreto colorado, el gobierno rival blanco de Manuel Oribe —instalado en el campamento del Cerrito, a las afueras de Montevideo, y respaldado por los federales argentinos de Rosas— dicta en 1846 su propia abolición de la esclavitud en el territorio bajo su control, sin la exigencia de alistamiento militar que había acompañado la medida colorada, aunque manteniendo la compensación a los propietarios. Para 1846, ambos bandos de la guerra civil uruguaya habían abolido la esclavitud, cada uno en su propio territorio.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si los blancos nunca hubieran dictado su propia abolición tras la de los colorados en 1842?",
      answer:
        "Uruguay habría quedado dividido, por años, entre una capital sitiada sin esclavitud y una campaña rural bajo dominio blanco donde la institución seguía vigente —una fractura legal tan profunda como la política que ya dividía al país en la Guerra Grande."
    }
  },
  {
    id: "venezuela-abolicion-esclavitud-1854",
    year: 1854,
    month: 3,
    trackYear: 1856,
    title: "1854: Venezuela abole la esclavitud",
    author: "Hito histórico",
    country: "Venezuela",
    region: "Caracas",
    type: ICON_TYPE.HISTORY,
    description:
      "El 24 de marzo de 1854, el presidente José Gregorio Monagas sanciona la ley que abole definitivamente la esclavitud en Venezuela, con compensación a los propietarios financiada mediante un impuesto especial. En su propuesta al Congreso, Monagas invoca directamente las palabras de Simón Bolívar, quien décadas antes había llamado a la esclavitud 'una infracción de todas las leyes y una violación de todos los derechos' — cerrando, en nombre del Libertador, una institución que él mismo nunca logró abolir del todo en vida.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Monagas no hubiera invocado la autoridad moral de Bolívar en su propuesta?",
      answer:
        "El Congreso venezolano de 1854 —con fuertes intereses terratenientes— habría tenido más margen para resistir o diluir la ley sin ese peso retórico. Invocar a Bolívar convertía la oposición a la abolición en una traición implícita al propio Libertador, una jugada política tan eficaz como simbólica."
    }
  },
  {
    id: "peru-abolicion-esclavitud-1854",
    year: 1854,
    month: 12,
    trackYear: 1856,
    title: "1854: Ramón Castilla abole la esclavitud en Perú",
    author: "Hito histórico",
    country: "Perú",
    region: "Lima",
    type: ICON_TYPE.HISTORY,
    description:
      "En medio de la guerra civil contra el presidente Echenique, el caudillo Ramón Castilla decreta el 3 de diciembre de 1854 la libertad de todos los esclavizados del Perú, junto con la abolición del tributo indígena, compensando a los propietarios. La medida, presentada como un acto de justicia, era también una maniobra política calculada: Castilla buscaba el apoyo de los recién liberados y de las comunidades indígenas para ganar la presidencia, que efectivamente reconquistó al año siguiente.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Castilla hubiera perdido la guerra civil de 1854–1855?",
      answer:
        "Una victoria de Echenique probablemente no habría revertido la abolición ya decretada —la presión moral y política a esa altura era difícil de deshacer— pero sí habría dejado el crédito histórico de la medida en manos de Castilla como una promesa incumplida, no como el logro que terminó definiendo su segundo gobierno."
    }
  },
  {
    id: "puerto-rico-abolicion-esclavitud-1873",
    year: 1873,
    // Real year; nudged track position only to separate it from the Republic.
    trackYear: 1872.4,
    title: "1873: España abole la esclavitud en Puerto Rico",
    author: "Hito histórico",
    country: "Puerto Rico",
    region: "San Juan",
    type: ICON_TYPE.HISTORY,
    description:
      "El 22 de marzo de 1873, la Asamblea Nacional de la Primera República Española decreta la abolición de la esclavitud en Puerto Rico, tras décadas de organización abolicionista liderada por figuras como Ramón Emeterio Betances, Segundo Ruiz Belvis, José Julián Acosta y Julio L. de Vizcarrondo. La ley compensa a los dueños con 35 millones de pesetas y obliga a los recién liberados a seguir trabajando bajo contrato tres años más — una libertad legal todavía condicionada, pero libertad al fin, veinticinco años antes de que la isla cambiara de manos coloniales.",
    descriptionHtml:
      'El 22 de marzo de 1873, la Asamblea Nacional de la <button type="button" class="timeline-detail-entrylink" data-id="primera-republica-1873">Primera República Española</button> decreta la abolición de la esclavitud en <button type="button" class="timeline-detail-geolink" data-country="Puerto Rico">Puerto Rico</button>, tras décadas de organización abolicionista liderada por figuras como Ramón Emeterio Betances, Segundo Ruiz Belvis, José Julián Acosta y Julio L. de Vizcarrondo. La ley compensa a los dueños con 35 millones de pesetas y obliga a los recién liberados a seguir trabajando bajo contrato tres años más — una libertad legal todavía condicionada, pero libertad al fin, veinticinco años antes de que la isla cambiara de manos coloniales.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el movimiento abolicionista puertorriqueño no hubiera organizado durante décadas antes de 1873?",
      answer:
        "Sin la presión sostenida de Betances, Ruiz Belvis, Acosta y Vizcarrondo desde los años 1860, la breve Primera República Española —que duró apenas dos años— pudo haber caído sin dejar tiempo para actuar sobre Puerto Rico, dejando la abolición en manos de una futura restauración monárquica mucho menos favorable a la causa."
    }
  },
  {
    id: "el-morro-san-juan-1595",
    year: 1595,
    // Visual spacing only; the card and detail panel retain the real date.
    trackYear: 1579.6,
    endYear: 1898,
    title: "1595–1898: El Morro resiste, cae una vez y cambia de bandera",
    author: "Castillo San Felipe del Morro",
    country: "Puerto Rico",
    region: "San Juan",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "En 1595, Francis Drake atacó San Juan en busca de un cargamento de plata; John Hawkins había muerto enfermo cerca de Puerto Rico antes del asalto, y las defensas del puerto rechazaron a Drake. En 1598, George Clifford, conde de Cumberland, capturó El Morro y la ciudad: fue la única caída de la fortaleza, pero la disentería obligó a retirarse después de 65 días. Los neerlandeses fracasaron en 1625. En 1898, España cedió Puerto Rico a Estados Unidos mediante el Tratado de París. El castillo cambió de bandera por diplomacia, no por un último combate.",
    descriptionHtml:
      "En 1595, Francis Drake atacó <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"San Juan\" data-country=\"Puerto Rico\">San Juan</button> en busca de un cargamento de plata; John Hawkins había muerto enfermo cerca de <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Puerto Rico\">Puerto Rico</button> antes del asalto, y las defensas del puerto rechazaron a Drake. En 1598, George Clifford, conde de Cumberland, capturó <button type=\"button\" class=\"timeline-detail-geolink\" data-region=\"Castillo San Felipe del Morro\" data-country=\"Puerto Rico\">El Morro</button> y la ciudad: fue la única caída de la fortaleza, pero la disentería obligó a retirarse después de 65 días. Los neerlandeses fracasaron en 1625. En 1898, <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"España\">España</button> cedió <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Puerto Rico\">Puerto Rico</button> a <button type=\"button\" class=\"timeline-detail-geolink\" data-country=\"Estados Unidos\">Estados Unidos</button> mediante el <button type=\"button\" class=\"timeline-detail-entrylink\" data-id=\"desastre-1898-tratado-paris\">Tratado de París</button>. El castillo cambió de bandera por diplomacia, no por un último combate.",
    butterfly: {
      prompt: "¿Qué enseña que El Morro cayera una vez, pero cambiara de soberanía por tratado?",
      answer:
        "Las fortalezas podían decidir un asedio sin decidir el destino final de una colonia. Cumberland ocupó San Juan brevemente en 1598; tres siglos después, la guerra y la diplomacia internacional transfirieron Puerto Rico sin un último asalto al castillo. El poder militar y el jurídico actuaron en escalas diferentes."
    }
  },

  {
    id: "cuba-abolicion-esclavitud-1886",
    year: 1886,
    month: 10,
    title: "1886: Cuba, la última colonia española en abolir la esclavitud",
    author: "Hito histórico",
    country: "Cuba",
    region: "La Habana",
    type: ICON_TYPE.HISTORY,
    description:
      "España abole formalmente la esclavitud en Cuba en 1886, trece años después de hacerlo en Puerto Rico, cerrando así la institución en su imperio colonial americano. El proceso venía preparándose desde 1870 con la Ley Moret, que liberaba a los mayores de sesenta años y a los nacidos después del 17 de septiembre de 1868, dejando un sistema de libertad parcial y gradual que se extendió durante más de una década antes de la abolición definitiva. Cuba fue la penúltima nación de las Américas en abolir la esclavitud: solo Brasil, dos años después, en 1888, la seguiría como la última.",
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si la Ley Moret de 1870 hubiera decretado la abolición total en vez de una libertad gradual?",
      answer:
        "Una abolición total en 1870 —dieciséis años antes de lo que realmente ocurrió— habría privado a los hacendados cubanos de más de una década de mano de obra esclavizada durante un período de auge azucarero, y probablemente habría acelerado el estallido de la Guerra de los Diez Años que ya ardía en la isla desde ese mismo 1868."
    }
  },
  {
    id: "rodolfo-rudy-hernandez-colina-420-1951",
    year: 1951,
    month: 5,
    day: 31,
    title: "31 de mayo de 1951: la carga de Rudy Hernández",
    author: "Rodolfo «Rudy» Hernández",
    country: "Corea del Sur",
    region: "Colina 420 (Wontong-ni)",
    type: ICON_TYPE.CONFLICT,
    types: [ICON_TYPE.CONFLICT, ICON_TYPE.HISTORY],
    description:
      "El 31 de mayo de 1951, el cabo Rodolfo “Rudy” Hernández defendía la colina 420, cerca de Wontong-ni, Corea del Sur. Herido y con el fusil inutilizado, fijó la bayoneta y cargó solo contra una fuerza superior. Mató a seis soldados antes de caer inconsciente por heridas de granada, bala y bayoneta; su ataque frenó el avance y permitió recuperar la posición. Nacido en Colton, California, hijo de inmigrantes mexicanos, sobrevivió: un médico advirtió que movía un dedo cuando iban a embolsarlo. Harry S. Truman le entregó la Medalla de Honor en Washington en 1952.",
    descriptionHtml:
      'El 31 de mayo de 1951, el cabo Rodolfo “Rudy” Hernández defendía la <button type="button" class="timeline-detail-geolink" data-region="Colina 420 (Wontong-ni)" data-country="Corea del Sur">colina 420</button>, cerca de <button type="button" class="timeline-detail-geolink" data-region="Colina 420 (Wontong-ni)" data-country="Corea del Sur">Wontong-ni</button>, <button type="button" class="timeline-detail-geolink" data-country="Corea del Sur">Corea del Sur</button>. Herido y con el fusil inutilizado, fijó la bayoneta y cargó solo contra una fuerza superior. Mató a seis soldados antes de caer inconsciente por heridas de granada, bala y bayoneta; su ataque frenó el avance y permitió recuperar la posición. Nacido en <button type="button" class="timeline-detail-geolink" data-region="Colton, California" data-country="Estados Unidos">Colton, California</button>, hijo de inmigrantes <button type="button" class="timeline-detail-geolink" data-country="México">mexicanos</button>, sobrevivió: un médico advirtió que movía un dedo cuando iban a embolsarlo. Harry S. Truman le entregó la Medalla de Honor en <button type="button" class="timeline-detail-geolink" data-region="Washington, D.C." data-country="Estados Unidos">Washington</button> en 1952.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Hernández hubiera obedecido la retirada tras atascarse su fusil?",
      answer:
        "Probablemente habría evitado las heridas que casi lo mataron, pero su unidad habría perdido los segundos decisivos para reagruparse y contraatacar. Su carga individual transformó un arma inutilizada en una pausa táctica que permitió recuperar la colina 420."
    }
  },
  {
    id: "california-land-act-1851",
    year: 1851,
    month: 3,
    title: "1851: la Ley de Tierras despoja por la vía legal a los californios",
    author: "Hito histórico",
    country: "Estados Unidos",
    region: "Bahía de San Francisco",
    type: ICON_TYPE.HISTORY,
    description:
      "El 3 de marzo de 1851, el Congreso de Estados Unidos aprueba la Ley de Tierras de California, que obliga a los poseedores de mercedes españolas y mexicanas a comprobar sus títulos ante una Comisión de Tierras federal con sede en San Francisco — pese a que el Tratado de Guadalupe Hidalgo de 1848, al cerrar la guerra México-Estados Unidos, había prometido proteger la propiedad ya existente. La carga de la prueba recae así sobre los propios rancheros californios. Muchos casos se prolongan más de una década, con apelaciones que a veces llegan hasta la Corte Suprema, y aunque una parte considerable de los reclamantes termina ganando su caso, los costos legales acumulados, los impuestos atrasados y las deudas contraídas durante el litigio los obligan a vender tierra o a pagar a sus abogados con fracciones enteras del rancho — como le ocurre a varios frente a abogados como Horace Carpentier, que amasa fortuna por esta vía. En la década siguiente, además, sequías severas y la caída de los precios del ganado terminan de erosionar lo que el litigio no alcanzó a consumir. No todas las familias californias pierden sus tierras, pero para muchas, la soberanía cambió en la guerra de 1848; la propiedad se perdió después, en los tribunales.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si el Congreso hubiera confirmado automáticamente los títulos amparados por el Tratado de Guadalupe Hidalgo, sin exigir litigio ante la Comisión de Tierras?",
      answer:
        "Miles de familias californias habrían conservado sus ranchos intactos, y el mapa de propiedad de California se habría parecido mucho más al de México que al de Estados Unidos. En cambio, el litigio prolongado trasladó buena parte de esa tierra a abogados, especuladores y nuevos colonos angloamericanos — un despojo lento y legal, y por eso mismo menos visible que los grandes episodios militares de la conquista."
    }
  },

  // ---- MÚSICA ----
  {
    id: "selena-quintanilla-1971",
    year: 1971,
    month: 4,
    endYear: 1995,
    title: "1971–1995: Selena Quintanilla",
    author: "Selena Quintanilla",
    country: "Estados Unidos",
    region: "Corpus Christi",
    type: ICON_TYPE.MUSIC,
    description:
      "Selena Quintanilla nace el 16 de abril de 1971 en Lake Jackson, Texas, y crece en Corpus Christi cantando cumbias y baladas en un español que apenas hablaba con fluidez —tuvo que aprender sus propias letras casi fonéticamente—. Al frente de Selena y Los Dinos, la banda familiar liderada por su padre Abraham, se convierte en la mayor estrella del tejano, un género fronterizo hecho por y para la comunidad méxico-americana del sur de Texas. En 1994 su éxito cruza la frontera: un concierto multitudinario en Monterrey confirma que su música conecta con México tanto como con Texas, pese a que ella misma se sentía, en sus propias palabras, 'ni de aquí ni de allá'. El 26 de febrero de 1995, en el marco del Houston Livestock Show and Rodeo, llena el Astrodome de Houston con más de 60,000 personas, un récord de asistencia para el recinto y el concierto más grande de su carrera — y el último que daría en vida. Estaba grabando su álbum en inglés —el que la habría lanzado al mercado angloparlante como a Gloria Estefan— cuando, el 31 de marzo de 1995, es asesinada a los 23 años en un motel de Corpus Christi por Yolanda Saldívar, presidenta de su club de fans, tras ser descubierta desviando fondos de sus negocios.",
    descriptionHtml:
      'Selena Quintanilla nace el 16 de abril de 1971 en <button type="button" class="timeline-detail-geolink" data-region="Lake Jackson" data-country="Estados Unidos">Lake Jackson, Texas</button>, y crece en <button type="button" class="timeline-detail-geolink" data-region="Corpus Christi" data-country="Estados Unidos">Corpus Christi</button> cantando cumbias y baladas en un español que apenas hablaba con fluidez —tuvo que aprender sus propias letras casi fonéticamente—. Al frente de Selena y Los Dinos, la banda familiar liderada por su padre Abraham, se convierte en la mayor estrella del tejano, un género fronterizo hecho por y para la comunidad méxico-americana del sur de Texas. En 1994 su éxito cruza la frontera: un concierto multitudinario en <button type="button" class="timeline-detail-geolink" data-region="Monterrey" data-country="México">Monterrey</button> confirma que su música conecta con <button type="button" class="timeline-detail-geolink" data-country="México">México</button> tanto como con Texas, pese a que ella misma se sentía, en sus propias palabras, \'ni de aquí ni de allá\'. El 26 de febrero de 1995, en el marco del Houston Livestock Show and Rodeo, llena el <button type="button" class="timeline-detail-geolink" data-region="Houston" data-country="Estados Unidos">Astrodome de Houston</button> con más de 60,000 personas, un récord de asistencia para el recinto y el concierto más grande de su carrera — y el último que daría en vida. Estaba grabando su álbum en inglés —el que la habría lanzado al mercado angloparlante como a Gloria Estefan— cuando, el 31 de marzo de 1995, es asesinada a los 23 años en un motel de <button type="button" class="timeline-detail-geolink" data-region="Corpus Christi" data-country="Estados Unidos">Corpus Christi</button> por Yolanda Saldívar, presidenta de su club de fans, tras ser descubierta desviando fondos de sus negocios.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Selena hubiera terminado y lanzado su álbum en inglés antes de morir?",
      answer:
        "Probablemente se habría convertido, como planeaba, en la primera gran cruce tejana al mercado angloparlante masivo —el camino que después abrirían otras artistas latinas—. En cambio, Dreaming of You se publicó póstumamente meses después de su muerte y debutó en el número uno de Billboard, la prueba final, ya sin ella para verlo, de que tenía razón sobre su propio potencial."
    }
  },
  {
    id: "vicente-fernandez-1940",
    year: 1940,
    endYear: 2021,
    title: "1940–2021: Vicente Fernández",
    author: "Vicente Fernández",
    country: "México",
    region: "Guadalajara, Jalisco",
    type: ICON_TYPE.MUSIC,
    description:
      "Nacido el 17 de febrero de 1940 en Huentitán el Alto, un barrio humilde a las afueras de Guadalajara, Vicente Fernández crece ordeñando vacas y cantando en fiestas antes de convertirse, décadas después, en 'El Charro de Huentitán': la voz definitiva de la ranchera y el ícono más reconocible del mariachi del siglo XX. Con más de 50 discos, docenas de películas y rancheras como 'Volver, volver' convertidas en himno nacional extraoficial, construye una carrera que atraviesa generaciones sin perder nunca su acento de pueblo ni su identidad de charro. Entre 2000 y 2010 llena en dos ocasiones el Madison Square Garden de Nueva York, la prueba de que la ranchera más pura podía conquistar el escenario más grande de la ciudad con mayor población mexicana fuera de México. Sin embargo, nunca cantó en el Palacio de Bellas Artes de la Ciudad de México: cuando se lo ofrecieron para su concierto de despedida en 2016, respondió con orgullo que 'antes era demasiado insignificante para un escenario así, porque era un cantante ranchero', y puso como condición que dejaran entrar también a su gente — algo que Juan Gabriel sí había logrado, veintiséis años antes. Bellas Artes terminaría por abrirle sus puertas solo después de su muerte, ofrecido por la Secretaría de Cultura para su homenaje. Muere el 12 de diciembre de 2021 en Guadalajara, la misma ciudad que lo vio nacer pobre y despedirlo como leyenda.",
    descriptionHtml:
      'Nacido el 17 de febrero de 1940 en <button type="button" class="timeline-detail-geolink" data-region="Guadalajara, Jalisco" data-country="México">Huentitán el Alto</button>, un barrio humilde a las afueras de <button type="button" class="timeline-detail-geolink" data-region="Guadalajara, Jalisco" data-country="México">Guadalajara</button>, Vicente Fernández crece ordeñando vacas y cantando en fiestas antes de convertirse, décadas después, en \'El Charro de Huentitán\': la voz definitiva de la ranchera y el ícono más reconocible del mariachi del siglo XX. Con más de 50 discos, docenas de películas y rancheras como \'Volver, volver\' convertidas en himno nacional extraoficial, construye una carrera que atraviesa generaciones sin perder nunca su acento de pueblo ni su identidad de charro. Entre 2000 y 2010 llena en dos ocasiones el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York, la prueba de que la ranchera más pura podía conquistar el escenario más grande de la ciudad con mayor población mexicana fuera de <button type="button" class="timeline-detail-geolink" data-country="México">México</button>. Sin embargo, nunca cantó en el <button type="button" class="timeline-detail-geolink" data-region="Palacio de Bellas Artes" data-country="México">Palacio de Bellas Artes</button> de la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>: cuando se lo ofrecieron para su concierto de despedida en 2016, respondió con orgullo que \'antes era demasiado insignificante para un escenario así, porque era un cantante ranchero\', y puso como condición que dejaran entrar también a su gente — algo que <button type="button" class="timeline-detail-entrylink" data-id="juan-gabriel-1950">Juan Gabriel</button> sí había logrado, veintiséis años antes. Bellas Artes terminaría por abrirle sus puertas solo después de su muerte, ofrecido por la Secretaría de Cultura para su homenaje. Muere el 12 de diciembre de 2021 en <button type="button" class="timeline-detail-geolink" data-region="Guadalajara, Jalisco" data-country="México">Guadalajara</button>, la misma ciudad que lo vio nacer pobre y despedirlo como leyenda.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Vicente Fernández hubiera adoptado un sonido más pop para ampliar su mercado, como le sugirieron varias veces?",
      answer:
        "Habría ganado, quizás, un público más joven o más internacional a corto plazo, pero habría perdido exactamente lo que lo volvió irremplazable: ser la ranchera más pura y menos diluida posible, en una época en que el género competía cada vez más con sonidos importados. Su terquedad por sonar como Huentitán, no como el mercado, es lo que lo convirtió en el charro de México entero."
    }
  },
  {
    id: "juan-gabriel-1950",
    year: 1950,
    // Visual spacing only; the displayed historical year remains unchanged.
    trackYear: 1949.5,
    month: 1,
    endYear: 2016,
    title: "1950–2016: Juan Gabriel",
    author: "Juan Gabriel",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.MUSIC,
    description:
      "Alberto Aguilera Valadez nace el 7 de enero de 1950 en Parácuaro, Michoacán, y crece en un orfanato de Ciudad Juárez tras la muerte de su padre y el abandono forzado de su madre por pobreza extrema. De esa infancia sale Juan Gabriel, compositor prolífico —más de mil canciones— y uno de los intérpretes más queridos de la música popular mexicana, con éxitos como 'Amor eterno' y 'Querida'. En mayo de 1990 rompe una barrera de clase largamente vigilada: se presenta durante cuatro noches —9, 10, 11 y 12 de mayo— en el Palacio de Bellas Artes de la Ciudad de México, el recinto reservado tradicionalmente para la 'alta cultura', acompañado de la Orquesta Sinfónica Nacional, con las cuatro fechas agotadas a capacidad total del recinto y las entradas vendidas en apenas ocho horas. La élite intelectual mexicana protesta, indignada de que un cantante popular —y, para muchos, abiertamente afeminado, sin que él jamás confirmara ni negara su sexualidad en público— pisara ese escenario. El disco en vivo resultante se convierte en uno de los más vendidos en la historia del país; Vicente Fernández, en cambio, jamás llegaría a cantar en ese mismo recinto. En 2015, ya en la última etapa de su carrera, llena el Madison Square Garden de Nueva York con su gira 'Bienvenidos al Noa Noa'. Muere el 28 de agosto de 2016 en Santa Mónica, California.",
    descriptionHtml:
      'Alberto Aguilera Valadez nace el 7 de enero de 1950 en <button type="button" class="timeline-detail-geolink" data-region="Parácuaro" data-country="México">Parácuaro, Michoacán</button>, y crece en un orfanato de <button type="button" class="timeline-detail-geolink" data-region="Ciudad Juárez" data-country="México">Ciudad Juárez</button> tras la muerte de su padre y el abandono forzado de su madre por pobreza extrema. De esa infancia sale Juan Gabriel, compositor prolífico —más de mil canciones— y uno de los intérpretes más queridos de la música popular mexicana, con éxitos como \'Amor eterno\' y \'Querida\'. En mayo de 1990 rompe una barrera de clase largamente vigilada: se presenta durante cuatro noches —9, 10, 11 y 12 de mayo— en el <button type="button" class="timeline-detail-geolink" data-region="Palacio de Bellas Artes" data-country="México">Palacio de Bellas Artes</button> de la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, el recinto reservado tradicionalmente para la \'alta cultura\', acompañado de la Orquesta Sinfónica Nacional, con las cuatro fechas agotadas a capacidad total del recinto y las entradas vendidas en apenas ocho horas. La élite intelectual mexicana protesta, indignada de que un cantante popular —y, para muchos, abiertamente afeminado, sin que él jamás confirmara ni negara su sexualidad en público— pisara ese escenario. El disco en vivo resultante se convierte en uno de los más vendidos en la historia del país; <button type="button" class="timeline-detail-entrylink" data-id="vicente-fernandez-1940">Vicente Fernández</button>, en cambio, jamás llegaría a cantar en ese mismo recinto. En 2015, ya en la última etapa de su carrera, llena el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York con su gira \'Bienvenidos al Noa Noa\'. Muere el 28 de agosto de 2016 en <button type="button" class="timeline-detail-geolink" data-region="Santa Mónica, California" data-country="Estados Unidos">Santa Mónica, California</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bellas Artes hubiera rechazado la petición de Juan Gabriel en 1990?",
      answer:
        "La frontera simbólica entre la 'alta cultura' mexicana y la música popular habría permanecido intacta un poco más, reafirmando la idea de que ciertos escenarios no eran para artistas surgidos de la pobreza y los orfanatos. Al forzar esa puerta, Juan Gabriel no solo defendió su propio lugar: abrió el camino para que la música popular dejara de pedir permiso para ser tomada en serio."
    }
  },
  {
    id: "shakira-2010",
    year: 2010,
    endYear: 2020,
    title: "2010–2020: Shakira, de Sudáfrica al Super Bowl",
    author: "Shakira",
    country: "Estados Unidos",
    region: "Miami",
    type: ICON_TYPE.MUSIC,
    description:
      "Nacida en Barranquilla, Colombia, Shakira ya era una superestrella latina cuando, en 2010, se convierte en la voz oficial del Mundial de fútbol con 'Waka Waka (This Time for Africa)', interpretada en las ceremonias de apertura y clausura en Sudáfrica; el video se convertiría en uno de los más vistos en la historia de YouTube y la canción, en el himno mundialista más exitoso jamás grabado. Ese mismo 2010, y de nuevo en 2018 tras su regreso a los escenarios —con Wyclef Jean sumándose para 'Hips Don't Lie'—, llena el Madison Square Garden de Nueva York. Una década después de Sudáfrica, el 2 de febrero de 2020, comparte el escenario del entretiempo del Super Bowl LIV en Miami junto a Jennifer López —con Bad Bunny y J Balvin como invitados especiales—, un show de apenas catorce minutos que se vuelve una de las presentaciones más comentadas en la historia del evento deportivo más visto de Estados Unidos. En todos esos escenarios, cantando en español ante audiencias globales que no necesariamente lo hablaban, Shakira demuestra que el cruce no exige traducción.",
    descriptionHtml:
      'Nacida en <button type="button" class="timeline-detail-geolink" data-region="Barranquilla" data-country="Colombia">Barranquilla, Colombia</button>, Shakira ya era una superestrella latina cuando, en 2010, se convierte en la voz oficial del Mundial de fútbol con \'Waka Waka (This Time for Africa)\', interpretada en las ceremonias de apertura y clausura en <button type="button" class="timeline-detail-geolink" data-country="Sudáfrica">Sudáfrica</button>; el video se convertiría en uno de los más vistos en la historia de YouTube y la canción, en el himno mundialista más exitoso jamás grabado. Ese mismo 2010, y de nuevo en 2018 tras su regreso a los escenarios —con Wyclef Jean sumándose para \'Hips Don\'t Lie\'—, llena el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York. Una década después de Sudáfrica, el 2 de febrero de 2020, comparte el escenario del entretiempo del Super Bowl LIV en <button type="button" class="timeline-detail-geolink" data-region="Miami" data-country="Estados Unidos">Miami</button> junto a Jennifer López —con <button type="button" class="timeline-detail-entrylink" data-id="bad-bunny-2026">Bad Bunny</button> y J Balvin como invitados especiales—, un show de apenas catorce minutos que se vuelve una de las presentaciones más comentadas en la historia del evento deportivo más visto de <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">Estados Unidos</button>. En todos esos escenarios, cantando en español ante audiencias globales que no necesariamente lo hablaban, Shakira demuestra que el cruce no exige traducción.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Shakira hubiera grabado 'Waka Waka' completamente en inglés, sin ningún verso en español?",
      answer:
        "Habría sido, probablemente, un éxito igual de masivo en términos comerciales, pero perdería el gesto simbólico que la distingue: llevar el español al escenario más visto del planeta sin pedir disculpas por ello. Ese mismo gesto es el que repetiría, una década después, en el Super Bowl."
    }
  },
  {
    id: "sonora-dinamita-madison-square-garden-1991",
    year: 1991,
    title: "1991: La Sonora Dinamita llena el Madison Square Garden",
    author: "La Sonora Dinamita",
    country: "Estados Unidos",
    region: "Madison Square Garden",
    type: ICON_TYPE.MUSIC,
    description:
      "La Sonora Dinamita nace en 1960 en Cartagena de Indias alrededor de la voz y dirección de Lucho Argaín y del proyecto tropical de Discos Fuentes. Tras una primera etapa que termina con su disolución en 1963, Julio Ernesto Estrada 'Fruko' Rincón, director artístico del sello, la reorganiza en 1975; la nueva formación vuelve al disco en 1977 y convierte la cumbia colombiana en música continental. Entre 1985 y 1995 vive su década de mayor expansión con canciones como Escándalo, Mi Cucu, Capullo y Sorullo, El Viejo del Sombrerón y Que nadie sepa mi sufrir. El álbum Sida llega al número cinco de la lista Regional Mexican Albums de Billboard en 1986; Capullo y Sorullo figura en las listas latinas de 1987; El Africano obtiene disco de platino en México en 1989 y abre la primera gira europea del grupo por Madrid, Londres y las Islas Canarias; La Tropicalísima alcanza el número seis de la lista regional mexicana en 1990, mientras Mi Cucu y El Viejo del Sombrerón llegan a la cima de listas latinas entre 1989 y 1990. En 1991, después de recorrer Centroamérica y regresar a Estados Unidos, La Sonora Dinamita realiza su primera presentación en el Madison Square Garden de Nueva York y, según su biografía discográfica, agota las entradas; vuelve al recinto en 1993. Que Te la Pongo (La Inyección) entra en Hot Latin Songs en 1992 y la agrupación mantiene durante décadas un catálogo atribuido de más de setecientos lanzamientos, con más de cien entradas en listas Top Ten internacionales. Varias grabaciones reciben nuevas certificaciones de oro o platino en 2017. Más que una sucesión de éxitos, su trayectoria convierte a La Sonora Dinamita en una de las agrupaciones decisivas para revivir e internacionalizar la cumbia: un sonido nacido en Colombia, adoptado masivamente por México y consagrado ante la diáspora latina en Nueva York.",
    descriptionHtml:
      'La Sonora Dinamita nace en 1960 en <button type="button" class="timeline-detail-geolink" data-region="Cartagena de Indias" data-country="Colombia">Cartagena de Indias</button> alrededor de la voz y dirección de Lucho Argaín y del proyecto tropical de Discos Fuentes. Tras una primera etapa que termina con su disolución en 1963, Julio Ernesto Estrada \'Fruko\' Rincón, director artístico del sello, la reorganiza en 1975; la nueva formación vuelve al disco en 1977 y convierte la cumbia colombiana en música continental. Entre 1985 y 1995 vive su década de mayor expansión con canciones como <em>Escándalo</em>, <em>Mi Cucu</em>, <em>Capullo y Sorullo</em>, <em>El Viejo del Sombrerón</em> y <em>Que nadie sepa mi sufrir</em>. El álbum <em>Sida</em> llega al número cinco de la lista Regional Mexican Albums de Billboard en 1986; <em>Capullo y Sorullo</em> figura en las listas latinas de 1987; <em>El Africano</em> obtiene disco de platino en <button type="button" class="timeline-detail-geolink" data-country="México">México</button> en 1989 y abre la primera gira europea del grupo por <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button>, <button type="button" class="timeline-detail-geolink" data-region="Londres" data-country="Reino Unido">Londres</button> y las Islas Canarias; <em>La Tropicalísima</em> alcanza el número seis de la lista regional mexicana en 1990, mientras <em>Mi Cucu</em> y <em>El Viejo del Sombrerón</em> llegan a la cima de listas latinas entre 1989 y 1990. En 1991, después de recorrer Centroamérica y regresar a <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">Estados Unidos</button>, La Sonora Dinamita realiza su primera presentación en el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York y, según su biografía discográfica, agota las entradas; vuelve al recinto en 1993. <em>Que Te la Pongo (La Inyección)</em> entra en Hot Latin Songs en 1992 y la agrupación mantiene durante décadas un catálogo atribuido de más de setecientos lanzamientos, con más de cien entradas en listas Top Ten internacionales. Varias grabaciones reciben nuevas certificaciones de oro o platino en 2017. Más que una sucesión de éxitos, su trayectoria convierte a La Sonora Dinamita en una de las agrupaciones decisivas para revivir e internacionalizar la cumbia: un sonido nacido en Colombia, adoptado masivamente por México y consagrado ante la diáspora latina en Nueva York.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Discos Fuentes no hubiera reunido de nuevo a La Sonora Dinamita en 1975?",
      answer:
        "La primera etapa habría quedado como una breve curiosidad discográfica de 1960 a 1963 y la cumbia colombiana habría perdido uno de sus vehículos internacionales más eficaces. Fue la reorganización dirigida por Fruko —y la combinación posterior de voces colombianas, mercado mexicano y giras por Europa y Estados Unidos— la que convirtió al grupo en una institución continental capaz de llegar al Madison Square Garden."
    }
  },
  {
    id: "mana-1986",
    year: 1986,
    title: "1986: nace Maná",
    author: "Maná",
    country: "México",
    region: "Guadalajara, Jalisco",
    type: ICON_TYPE.MUSIC,
    description:
      "En Guadalajara, Jalisco, el baterista Alex González, el vocalista Fher Olvera y el bajista Juan Calleros forman en 1986 la banda que originalmente se llama Sombrero Verde, antes de rebautizarse Maná en 1987 —el guitarrista Sergio Vallín se integraría después—. Con discos como ¿Dónde jugarán los niños? (1992), se convierten en la banda de rock en español más vendida de la historia, con giras que llenan estadios en toda América Latina, España y Estados Unidos durante casi cuatro décadas — entre 2003 y 2016 llenan el Madison Square Garden de Nueva York en cuatro ocasiones distintas. En 2025, Maná se convierte en la primera banda de rock en español nominada al Salón de la Fama del Rock and Roll, un reconocimiento que tardó casi cuarenta años en llegar a un género que la industria angloparlante rara vez toma en cuenta.",
    descriptionHtml:
      'En <button type="button" class="timeline-detail-geolink" data-region="Guadalajara, Jalisco" data-country="México">Guadalajara, Jalisco</button>, el baterista Alex González, el vocalista Fher Olvera y el bajista Juan Calleros forman en 1986 la banda que originalmente se llama Sombrero Verde, antes de rebautizarse Maná en 1987 —el guitarrista Sergio Vallín se integraría después—. Con discos como ¿Dónde jugarán los niños? (1992), se convierten en la banda de rock en español más vendida de la historia, con giras que llenan estadios en toda América Latina, <button type="button" class="timeline-detail-geolink" data-country="España">España</button> y <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">Estados Unidos</button> durante casi cuatro décadas — entre 2003 y 2016 llenan el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York en cuatro ocasiones distintas. En 2025, Maná se convierte en la primera banda de rock en español nominada al Salón de la Fama del Rock and Roll, un reconocimiento que tardó casi cuarenta años en llegar a un género que la industria angloparlante rara vez toma en cuenta.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Maná hubiera cantado en inglés desde el principio, como les sugirieron varios sellos discográficos en los noventa?",
      answer:
        "Habrían competido en un mercado angloparlante saturado, sin la ventaja que terminó siendo su mayor fortaleza: ser, durante años, prácticamente la única banda capaz de llenar estadios enteros cantando exclusivamente en español. Esa apuesta —quedarse en el idioma, no cruzar hacia el inglés— fue lo que los convirtió en el estadio de rock latinoamericano por excelencia."
    }
  },
  {
    id: "peso-pluma-2023",
    year: 2023,
    title: "2023: Peso Pluma y el año de los corridos tumbados",
    author: "Peso Pluma",
    country: "México",
    region: "Zapopan",
    type: ICON_TYPE.MUSIC,
    description:
      "Hassan Emilio Kabande Laija nace el 15 de junio de 1999 en Zapopan, Jalisco, y crece entre Guadalajara y la herencia sinaloense de su familia materna. Bautizado 'Peso Pluma' por el boxeador Canelo Álvarez, se convierte en 2023 en la figura central de los corridos tumbados —una fusión de corrido regional mexicano con trap y hip hop— junto a artistas como Natanael Cano. Ese año, 'Ella baila sola', a dúo con Eslabón Armado, lo vuelve el primer artista mexicano en alcanzar el número uno global de Spotify, y su álbum Génesis consolida el género como fenómeno internacional, llevando el corrido —históricamente un formato regional, casi folclórico— a listas de éxito que antes le eran completamente ajenas. En abril de 2024 se presenta en el Coachella Valley Music and Arts Festival —cuyo aforo diario ronda las 125,000 personas—, convirtiéndose en uno de los primeros artistas de música mexicana en encabezar el escenario principal del festival más visto de Estados Unidos, la audiencia más grande frente a la que se ha presentado en su carrera.",
    descriptionHtml:
      'Hassan Emilio Kabande Laija nace el 15 de junio de 1999 en <button type="button" class="timeline-detail-geolink" data-region="Zapopan" data-country="México">Zapopan, Jalisco</button>, y crece entre <button type="button" class="timeline-detail-geolink" data-region="Guadalajara, Jalisco" data-country="México">Guadalajara</button> y la herencia sinaloense de su familia materna. Bautizado \'Peso Pluma\' por el boxeador Canelo Álvarez, se convierte en 2023 en la figura central de los corridos tumbados —una fusión de corrido regional mexicano con trap y hip hop— junto a artistas como <button type="button" class="timeline-detail-entrylink" data-id="natanael-cano-corridos-tumbados-2019">Natanael Cano</button>. Ese año, \'Ella baila sola\', a dúo con Eslabón Armado, lo vuelve el primer artista mexicano en alcanzar el número uno global de Spotify, y su álbum Génesis consolida el género como fenómeno internacional, llevando el corrido —históricamente un formato regional, casi folclórico— a listas de éxito que antes le eran completamente ajenas. En abril de 2024 se presenta en el <button type="button" class="timeline-detail-geolink" data-region="Indio, California" data-country="Estados Unidos">Coachella Valley Music and Arts Festival</button> —cuyo aforo diario ronda las 125,000 personas—, convirtiéndose en uno de los primeros artistas de música mexicana en encabezar el escenario principal del festival más visto de Estados Unidos, la audiencia más grande frente a la que se ha presentado en su carrera.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Peso Pluma hubiera evitado por completo las letras de corridos bélicos, dado el escrutinio y la censura que enfrentaron?",
      answer:
        "Habría esquivado buena parte de la controversia y hasta cancelaciones de conciertos que enfrentó por presiones de cárteles y gobiernos locales, pero también habría diluido la fórmula exacta —la fusión de narrativa de corrido tradicional con producción de trap— que lo distinguió de cualquier otro artista regional mexicano de su generación."
    }
  },
  {
    id: "leo-dan-1942",
    year: 1942,
    endYear: 2025,
    title: "1942–2025: Leo Dan",
    author: "Leo Dan",
    country: "Argentina",
    region: "Santiago del Estero",
    type: ICON_TYPE.MUSIC,
    description:
      "Leopoldo Dante Tévez nace el 22 de marzo de 1942 en Villa Atamisqui, Santiago del Estero, y se convierte, bajo el nombre de Leo Dan, en una de las voces más influyentes de la música popular latinoamericana del siglo XX. Con éxitos como 'Celia', 'Como te extraño mi amor' y 'Estelita', se vuelve una figura inmensamente popular no solo en Argentina, sino sobre todo en México, donde pasó buena parte de su carrera y su vida, y donde sus baladas fueron adoptadas casi como propias. A lo largo de más de sesenta años de carrera lleva su música por Chile, Perú, Colombia, Venezuela y Ecuador —donde 'Celia' ya suena en las listas de éxito a mediados de los años sesenta—, además de España, Bolivia y Guatemala. El 9 de noviembre de 2014 se presenta en el Royce Hall de UCLA, en Los Ángeles, cantando sus clásicos ante un público que coreaba cada canción. En 2024, ya instalado definitivamente en Estados Unidos, emprende 'El adiós de una leyenda', su gira de despedida por ciudades estadounidenses. Muere en plena gira, el 1 de enero de 2025, a los 82 años, en Miami, dejando un catálogo que generaciones de cantantes rancheros y baladistas latinoamericanos siguen versionando.",
    descriptionHtml:
      'Leopoldo Dante Tévez nace el 22 de marzo de 1942 en <button type="button" class="timeline-detail-geolink" data-region="Santiago del Estero" data-country="Argentina">Villa Atamisqui, Santiago del Estero</button>, y se convierte, bajo el nombre de Leo Dan, en una de las voces más influyentes de la música popular latinoamericana del siglo XX. Con éxitos como \'Celia\', \'Como te extraño mi amor\' y \'Estelita\', se vuelve una figura inmensamente popular no solo en <button type="button" class="timeline-detail-geolink" data-country="Argentina">Argentina</button>, sino sobre todo en <button type="button" class="timeline-detail-geolink" data-country="México">México</button>, donde pasó buena parte de su carrera y su vida, y donde sus baladas fueron adoptadas casi como propias. A lo largo de más de sesenta años de carrera lleva su música por <button type="button" class="timeline-detail-geolink" data-country="Chile">Chile</button>, <button type="button" class="timeline-detail-geolink" data-country="Perú">Perú</button>, <button type="button" class="timeline-detail-geolink" data-country="Colombia">Colombia</button>, <button type="button" class="timeline-detail-geolink" data-country="Venezuela">Venezuela</button> y <button type="button" class="timeline-detail-geolink" data-country="Ecuador">Ecuador</button> —donde \'Celia\' ya suena en las listas de éxito a mediados de los años sesenta—, además de <button type="button" class="timeline-detail-geolink" data-country="España">España</button>, <button type="button" class="timeline-detail-geolink" data-country="Bolivia">Bolivia</button> y <button type="button" class="timeline-detail-geolink" data-country="Guatemala">Guatemala</button>. El 9 de noviembre de 2014 se presenta en el <button type="button" class="timeline-detail-geolink" data-region="Royce Hall, UCLA" data-country="Estados Unidos">Royce Hall de UCLA</button>, en <button type="button" class="timeline-detail-geolink" data-region="Los Ángeles, California" data-country="Estados Unidos">Los Ángeles</button>, cantando sus clásicos ante un público que coreaba cada canción. En 2024, ya instalado definitivamente en <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">Estados Unidos</button>, emprende \'El adiós de una leyenda\', su gira de despedida por ciudades estadounidenses. Muere en plena gira, el 1 de enero de 2025, a los 82 años, en <button type="button" class="timeline-detail-geolink" data-region="Miami" data-country="Estados Unidos">Miami</button>, dejando un catálogo que generaciones de cantantes rancheros y baladistas latinoamericanos siguen versionando.',
    personalNote:
      "Estuve en este concierto en el Royce Hall de UCLA, el 9 de noviembre de 2014, con mis primos. Leo Dan cantó sus clásicos durante hora y media entre risas y nostalgia — una noche que sigo recordando con cariño.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Leo Dan se hubiera quedado exclusivamente en el mercado argentino, sin mudarse a México?",
      answer:
        "Su música probablemente habría permanecido como un fenómeno regional argentino más, sin la adopción masiva que tuvo en México y buena parte de Latinoamérica. Fue precisamente ese cruce migratorio —un argentino que México terminó reclamando casi como propio— lo que multiplicó su alcance mucho más allá de lo que su país natal solo podía ofrecerle."
    }
  },
  {
    id: "chalino-sanchez-1960",
    year: 1960,
    month: 8,
    endYear: 1992,
    title: "1960–1992: Chalino Sánchez",
    author: "Chalino Sánchez",
    country: "Estados Unidos",
    region: "Paramount, California",
    type: ICON_TYPE.MUSIC,
    description:
      "Rosalino 'Chalino' Sánchez Félix nace el 30 de agosto de 1960 en un rancho cerca de Culiacán, Sinaloa, y llega a Los Ángeles en 1977 huyendo de la pobreza. En los clubes nocturnos del sureste de Los Ángeles —Paramount, Huntington Park y alrededores, el corredor de salones de baile de la comunidad inmigrante mexicana— construye desde cero, sin una voz especialmente privilegiada pero con un talento crudo para la composición, el sonido que refundaría el corrido moderno: letras directas sobre el narcotráfico y la vida en los márgenes, cantadas sin adornos ni disculpas. El 16 de mayo de 1992, horas después de cantar en un salón de Culiacán, Sinaloa —adonde había regresado ya convertido en 'el Rey del Corrido'—, es secuestrado y asesinado; su cuerpo aparece al día siguiente en un canal de riego. El caso nunca ha sido resuelto. Se cree que Adán, el hijo que seguiría sus pasos como cantante y moriría también de forma violenta en 2004, fue bautizado en una iglesia de Huntington Park, en la esquina de las calles Seville y Belmont — el mismo corredor de salones donde su padre se forjó como músico.",
    descriptionHtml:
      'Rosalino \'Chalino\' Sánchez Félix nace el 30 de agosto de 1960 en un rancho cerca de <button type="button" class="timeline-detail-geolink" data-region="Culiacán" data-country="México">Culiacán, Sinaloa</button>, y llega a <button type="button" class="timeline-detail-geolink" data-region="Los Ángeles, California" data-country="Estados Unidos">Los Ángeles</button> en 1977 huyendo de la pobreza. En los clubes nocturnos del sureste de Los Ángeles —<button type="button" class="timeline-detail-geolink" data-region="Paramount, California" data-country="Estados Unidos">Paramount</button>, <button type="button" class="timeline-detail-geolink" data-region="Huntington Park, California" data-country="Estados Unidos">Huntington Park</button> y alrededores, el corredor de salones de baile de la comunidad inmigrante mexicana— construye desde cero, sin una voz especialmente privilegiada pero con un talento crudo para la composición, el sonido que refundaría el corrido moderno: letras directas sobre el narcotráfico y la vida en los márgenes, cantadas sin adornos ni disculpas. El 16 de mayo de 1992, horas después de cantar en un salón de <button type="button" class="timeline-detail-geolink" data-region="Culiacán" data-country="México">Culiacán, Sinaloa</button> —adonde había regresado ya convertido en \'el Rey del Corrido\'—, es secuestrado y asesinado; su cuerpo aparece al día siguiente en un canal de riego. El caso nunca ha sido resuelto. Se cree que Adán, el hijo que seguiría sus pasos como cantante y moriría también de forma violenta en 2004, fue bautizado en una iglesia de <button type="button" class="timeline-detail-geolink" data-region="Huntington Park, California" data-country="Estados Unidos">Huntington Park</button>, en la esquina de las calles Seville y Belmont — el mismo corredor de salones donde su padre se forjó como músico.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Chalino Sánchez nunca hubiera emigrado a Los Ángeles en 1977?",
      answer:
        "El narcocorrido moderno, tal como lo conocemos, probablemente no existiría en la forma en que lo hizo: fue precisamente en los salones de baile del sureste de Los Ángeles, lejos de Sinaloa pero rodeado de otros migrantes que compartían su mundo, donde Chalino encontró tanto la audiencia como la libertad narrativa para cantar temas que las disqueras mexicanas tradicionales evitaban. Su asesinato, lejos de acabar con el género, lo convirtió en mito fundacional."
    }
  },
  {
    id: "bad-bunny-2026",
    year: 2026,
    month: 2,
    title: "2026: Bad Bunny y el primer halftime show mayormente en español",
    author: "Bad Bunny",
    country: "Estados Unidos",
    region: "Santa Clara, California",
    type: ICON_TYPE.MUSIC,
    description:
      "Benito Antonio Martínez Ocasio, Bad Bunny, nacido en Vega Baja, Puerto Rico —y que ya en abril de 2019 había agotado las entradas del Madison Square Garden de Nueva York en su gira X100PRE, su primera vez en el recinto—, se convierte el 8 de febrero de 2026 en el primer artista latino en encabezar en solitario el espectáculo de medio tiempo del Super Bowl —y el primero en hacerlo cantando mayormente en español—, en el Levi's Stadium de Santa Clara, California, ante la audiencia televisiva más grande de Estados Unidos. El show, con invitados como Lady Gaga, Ricky Martin y Los Pleneros de la Cresta, convierte el escenario en una puesta en escena de identidad puertorriqueña: campos de caña de azúcar que evocan el pasado colonial de la isla, una 'casita' construida sobre el campo de juego, y la bandera de Puerto Rico llevada literalmente sobre su espalda mientras canta. Lo que para la NFL es un espectáculo de entretiempo, para millones de puertorriqueños es, por primera vez, verse representados enteros —lengua, historia colonial y todo— en el escenario más visto del país que gobierna la isla desde 1898.",
    descriptionHtml:
      'Benito Antonio Martínez Ocasio, Bad Bunny, nacido en <button type="button" class="timeline-detail-geolink" data-region="Vega Baja" data-country="Puerto Rico">Vega Baja, Puerto Rico</button> —y que ya en abril de 2019 había agotado las entradas del <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York en su gira X100PRE, su primera vez en el recinto—, se convierte el 8 de febrero de 2026 en el primer artista latino en encabezar en solitario el espectáculo de medio tiempo del Super Bowl —y el primero en hacerlo cantando mayormente en español—, en el <button type="button" class="timeline-detail-geolink" data-region="Levi\'s Stadium" data-country="Estados Unidos">Levi\'s Stadium</button> de <button type="button" class="timeline-detail-geolink" data-region="Santa Clara, California" data-country="Estados Unidos">Santa Clara, California</button>, ante la audiencia televisiva más grande de <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">Estados Unidos</button>. El show, con invitados como Lady Gaga, Ricky Martin y Los Pleneros de la Cresta, convierte el escenario en una puesta en escena de identidad puertorriqueña: campos de caña de azúcar que evocan el pasado colonial de la isla, una \'casita\' construida sobre el campo de juego, y la bandera de <button type="button" class="timeline-detail-geolink" data-country="Puerto Rico">Puerto Rico</button> llevada literalmente sobre su espalda mientras canta. Lo que para la NFL es un espectáculo de entretiempo, para millones de puertorriqueños es, por primera vez, verse representados enteros —lengua, historia colonial y todo— en el escenario más visto del país que gobierna la isla <button type="button" class="timeline-detail-entrylink" data-id="desastre-1898-tratado-paris">desde 1898</button>.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bad Bunny hubiera aceptado cantar principalmente en inglés para 'ampliar su alcance', como le sugirieron?",
      answer:
        "Habría sido, seguramente, un espectáculo exitoso de todos modos —su música ya domina las listas globales sin necesidad de traducción—. Pero habría perdido exactamente el gesto que lo volvió histórico: demostrar, ante la audiencia más grande y más estadounidense del año, que el español no necesita traducirse para ser el idioma principal del espectáculo más visto del país."
    }
  },
  {
    id: "celia-cruz-1925",
    year: 1925,
    month: 10,
    endYear: 2003,
    title: "1925–2003: Celia Cruz",
    author: "Celia Cruz",
    country: "Cuba",
    region: "La Habana",
    type: ICON_TYPE.MUSIC,
    description:
      "Úrsula Hilaria Celia de la Caridad Cruz Alfonso nace el 21 de octubre de 1925 en La Habana y se convierte, al frente de la orquesta La Sonora Matancera, en una de las voces más reconocibles de la música cubana antes de que la Revolución de 1959 lo cambie todo. En 1960 abandona Cuba y jamás regresa —ni siquiera para el funeral de su madre, a quien el gobierno cubano le negó la entrada—, estableciéndose en Estados Unidos como símbolo del exilio cubano. En Nueva York se convierte en la única mujer integrante de las Fania All-Stars, el supergrupo que en los años setenta terminó de definir la salsa como género global, y se gana el título por el que la recordaría el mundo entero: la Reina de la Salsa. El 23 de octubre de 1999 llena el Madison Square Garden, la prueba de que la salsa que ayudó a construir en esa misma ciudad podía colmar su escenario más grande. Muere el 16 de julio de 2003 en Fort Lee, Nueva Jersey, sin haber vuelto nunca a pisar la isla que la formó.",
    descriptionHtml:
      'Úrsula Hilaria Celia de la Caridad Cruz Alfonso nace el 21 de octubre de 1925 en <button type="button" class="timeline-detail-geolink" data-region="La Habana" data-country="Cuba">La Habana</button> y se convierte, al frente de la orquesta La Sonora Matancera, en una de las voces más reconocibles de la música cubana antes de que la Revolución de 1959 lo cambie todo. En 1960 abandona <button type="button" class="timeline-detail-geolink" data-country="Cuba">Cuba</button> y jamás regresa —ni siquiera para el funeral de su madre, a quien el gobierno cubano le negó la entrada—, estableciéndose en Estados Unidos como símbolo del exilio cubano. En <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Nueva York</button> se convierte en la única mujer integrante de las Fania All-Stars, el supergrupo que en los años setenta terminó de definir la salsa como género global, y se gana el título por el que la recordaría el mundo entero: la Reina de la Salsa. El 23 de octubre de 1999 llena el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button>, la prueba de que la salsa que ayudó a construir en esa misma ciudad podía colmar su escenario más grande. Muere el 16 de julio de 2003 en <button type="button" class="timeline-detail-geolink" data-region="Fort Lee, Nueva Jersey" data-country="Estados Unidos">Fort Lee, Nueva Jersey</button>, sin haber vuelto nunca a pisar la isla que la formó.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Celia Cruz nunca hubiera salido de Cuba en 1960?",
      answer:
        "Habría seguido siendo una estrella de la música cubana dentro de la isla, pero probablemente nunca se habría cruzado con la escena neoyorquina que, en los años setenta, fusionó ritmos cubanos, puertorriqueños y de todo el Caribe hispanohablante bajo el nombre de salsa. Su exilio, doloroso como fue, la puso exactamente en el lugar y el momento donde ese género nuevo necesitaba a su reina."
    }
  },

  // ---- MÚSICA: ORÍGENES DE GÉNERO ----
  {
    id: "cumbia-origenes-costa-caribe",
    year: 1700,
    title: "Cumbia: nace en la costa Caribe colombiana",
    author: "Hito histórico",
    country: "Colombia",
    region: "Cartagena de Indias",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "En la costa Caribe de la Nueva Granada colonial —hoy Colombia—, con el puerto negrero de Cartagena de Indias como epicentro del comercio de personas esclavizadas hacia toda la región, nace la cumbia como danza de cortejo practicada entre comunidades afrodescendientes e indígenas. Sus gaitas de origen indígena (kogui y zenú) se combinan con los tambores de tradición africana y, más tarde, con elementos de danza española, en una de las fusiones musicales más completas de toda América Latina. Durante el siglo XX, la cumbia se expande desde la costa colombiana hacia México, Argentina, Perú y buena parte del continente, adoptando en cada país una identidad local propia —desde la cumbia sonidera mexicana hasta la cumbia villera argentina— sin perder nunca las gaitas, los tambores y las velas que los bailarines todavía cargan en las versiones más tradicionales.",
    descriptionHtml:
      'En la costa Caribe de la Nueva Granada colonial —hoy Colombia—, con el puerto negrero de <button type="button" class="timeline-detail-geolink" data-region="Cartagena de Indias" data-country="Colombia">Cartagena de Indias</button> como epicentro del comercio de personas esclavizadas hacia toda la región, nace la cumbia como danza de cortejo practicada entre comunidades afrodescendientes e indígenas. Sus gaitas de origen indígena (kogui y zenú) se combinan con los tambores de tradición africana y, más tarde, con elementos de danza española, en una de las fusiones musicales más completas de toda América Latina. Durante el siglo XX, la cumbia se expande desde la costa colombiana hacia <button type="button" class="timeline-detail-geolink" data-country="México">México</button>, <button type="button" class="timeline-detail-geolink" data-country="Argentina">Argentina</button>, <button type="button" class="timeline-detail-geolink" data-country="Perú">Perú</button> y buena parte del continente, adoptando en cada país una identidad local propia —desde la cumbia sonidera mexicana hasta la cumbia villera argentina— sin perder nunca las gaitas, los tambores y las velas que los bailarines todavía cargan en las versiones más tradicionales.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si la cumbia hubiera permanecido aislada en la costa Caribe colombiana, sin cruzar fronteras en el siglo XX?",
      answer:
        "El género no habría producido las variantes locales que hoy lo definen —la cumbia sonidera de los barrios mexicanos, la cumbia villera de los suburbios argentinos, la chicha peruana—. La cumbia es, ante todo, una prueba de que un mismo ritmo puede reinventarse en cada país que lo adopta como propio, y esa multiplicación nunca habría ocurrido encerrada en su cuna colombiana."
    }
  },
  {
    id: "corrido-origenes-independencia-revolucion",
    year: 1810,
    trackYear: 1812.1,
    endYear: 1920,
    title: "1810–1920: el corrido, el periódico del pueblo",
    author: "Hito histórico",
    country: "México",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "Descendiente de la tradición del romance español, el corrido se vuelve una forma distintivamente mexicana durante la guerra de Independencia (1810–1821) y alcanza su mayor esplendor durante la Revolución mexicana (1910–1920), cuando circula de pueblo en pueblo narrando batallas, héroes, bandidos y traiciones casi en tiempo real, mucho antes de que la prensa oficial pudiera —o quisiera— contar la misma historia. Funciona como noticiero, registro histórico y relato oral para una población en buena parte analfabeta, y sus temas —la inmigración, la injusticia social, la vida al margen de la ley— siguen vivos un siglo después en el narcocorrido de Chalino Sánchez y en los corridos tumbados de Peso Pluma, dos géneros que reclaman esa misma herencia aunque suenen a mundos distintos.",
    descriptionHtml:
      'Descendiente de la tradición del romance español, el corrido se vuelve una forma distintivamente mexicana durante la guerra de Independencia (1810–1821) y alcanza su mayor esplendor durante la Revolución mexicana (1910–1920), cuando circula de pueblo en pueblo narrando batallas, héroes, bandidos y traiciones casi en tiempo real, mucho antes de que la prensa oficial pudiera —o quisiera— contar la misma historia. Funciona como noticiero, registro histórico y relato oral para una población en buena parte analfabeta, y sus temas —la inmigración, la injusticia social, la vida al margen de la ley— siguen vivos un siglo después en el narcocorrido de <button type="button" class="timeline-detail-entrylink" data-id="chalino-sanchez-1960">Chalino Sánchez</button> y en los corridos tumbados de <button type="button" class="timeline-detail-entrylink" data-id="peso-pluma-2023">Peso Pluma</button>, dos géneros que reclaman esa misma herencia aunque suenen a mundos distintos.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si la prensa oficial mexicana hubiera cubierto la Revolución con la misma inmediatez que los corridos populares?",
      answer:
        "El corrido no habría tenido el vacío informativo que lo volvió indispensable: una fuente de noticias cantada, capaz de llegar a comunidades enteras que ningún periódico alcanzaba. Sin ese vacío que llenar, es difícil imaginar que el corrido hubiera sobrevivido como forma viva hasta reinventarse, un siglo después, en el narcocorrido y los corridos tumbados."
    }
  },
  {
    id: "mariachi-origenes-cocula-1850",
    year: 1850,
    endYear: 2011,
    title: "1850–2011: del mariachi de Cocula a Patrimonio de la UNESCO",
    author: "Hito histórico",
    country: "México",
    region: "Cocula, Jalisco",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "En Cocula y otros pueblos del occidente de Jalisco, durante el siglo XIX, grupos de cuerdas —violines, vihuela, guitarrón y guitarra— animan bodas, fiestas patronales y velorios con un repertorio que todavía no lleva trompeta; ese instrumento se incorpora recién en el siglo XX, cuando el mariachi migra a las ciudades. La edad de oro del cine mexicano, entre los años treinta y cincuenta, convierte al mariachi de traje de charro en símbolo visual y sonoro de México ante el mundo —un símbolo que, décadas después, nadie encarnaría con más terquedad que Vicente Fernández, 'El Charro de Huentitán'—. En 2011, la UNESCO declara al mariachi Patrimonio Cultural Inmaterial de la Humanidad, formalizando lo que el cine ya había logrado décadas antes: convertir una tradición de pueblo en un emblema nacional.",
    descriptionHtml:
      'En <button type="button" class="timeline-detail-geolink" data-region="Cocula, Jalisco" data-country="México">Cocula</button> y otros pueblos del occidente de Jalisco, durante el siglo XIX, grupos de cuerdas —violines, vihuela, guitarrón y guitarra— animan bodas, fiestas patronales y velorios con un repertorio que todavía no lleva trompeta; ese instrumento se incorpora recién en el siglo XX, cuando el mariachi migra a las ciudades. La edad de oro del cine mexicano, entre los años treinta y cincuenta, convierte al mariachi de traje de charro en símbolo visual y sonoro de <button type="button" class="timeline-detail-geolink" data-country="México">México</button> ante el mundo —un símbolo que, décadas después, nadie encarnaría con más terquedad que <button type="button" class="timeline-detail-entrylink" data-id="vicente-fernandez-1940">Vicente Fernández</button>, \'El Charro de Huentitán\'—. En 2011, la UNESCO declara al mariachi Patrimonio Cultural Inmaterial de la Humanidad, formalizando lo que el cine ya había logrado décadas antes: convertir una tradición de pueblo en un emblema nacional.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la trompeta nunca se hubiera incorporado al mariachi en el siglo XX?",
      answer:
        "El mariachi habría conservado el sonido de cuerdas puro de sus orígenes rurales en Cocula, pero probablemente no habría desarrollado el timbre grandilocuente y festivo que lo volvió inconfundible en el cine y la radio. Esa trompeta añadida es, en buena medida, lo que permitió que el mariachi se convirtiera en un símbolo nacional capaz de llenar salas de concierto, no solo patios de rancho."
    }
  },
  {
    id: "merengue-origenes-cibao-1850",
    year: 1850,
    title: "Merengue: nace en el Cibao dominicano",
    author: "Hito histórico",
    country: "República Dominicana",
    region: "Santiago de los Caballeros",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "Hacia mediados del siglo XIX, en el Cibao —la región agrícola del norte de la República Dominicana, con Santiago de los Caballeros como su ciudad más importante—, campesinos combinan el acordeón de origen europeo, la tambora de raíz africana y la güira de ascendencia taína en un baile de pareja rápido y sin complicaciones que pronto se llama merengue. En los años treinta del siglo XX, el dictador Rafael Trujillo lo adopta como música nacional oficial de la República Dominicana, imponiéndolo por decreto en actos de Estado frente a las clases altas que hasta entonces lo despreciaban por su origen campesino. Décadas más tarde, artistas como Johnny Ventura, Wilfrido Vargas y, sobre todo, Juan Luis Guerra —que también llevaría la bachata dominicana a audiencias internacionales— terminan de proyectar el merengue al resto del mundo.",
    descriptionHtml:
      'Hacia mediados del siglo XIX, en el Cibao —la región agrícola del norte de la República Dominicana, con <button type="button" class="timeline-detail-geolink" data-region="Santiago de los Caballeros" data-country="República Dominicana">Santiago de los Caballeros</button> como su ciudad más importante—, campesinos combinan el acordeón de origen europeo, la tambora de raíz africana y la güira de ascendencia taína en un baile de pareja rápido y sin complicaciones que pronto se llama merengue. En los años treinta del siglo XX, el dictador Rafael Trujillo lo adopta como música nacional oficial de la <button type="button" class="timeline-detail-geolink" data-country="República Dominicana">República Dominicana</button>, imponiéndolo por decreto en actos de Estado frente a las clases altas que hasta entonces lo despreciaban por su origen campesino. Décadas más tarde, artistas como Johnny Ventura, Wilfrido Vargas y, sobre todo, Juan Luis Guerra —que también llevaría la bachata dominicana a audiencias internacionales— terminan de proyectar el merengue al resto del mundo.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Trujillo nunca hubiera impuesto el merengue como música nacional en los años treinta?",
      answer:
        "El merengue probablemente habría seguido siendo, por más tiempo, un género asociado a la clase campesina del Cibao, visto con desdén por las élites urbanas dominicanas. La imposición autoritaria de Trujillo —tan incómoda de reconocer como innegable en sus efectos— fue lo que forzó su entrada a los salones de la clase alta, allanando el camino que después seguirían Johnny Ventura y Juan Luis Guerra hacia el resto del mundo."
    }
  },
  {
    id: "ranchera-origenes-cine-mexicano-1930",
    year: 1930,
    title: "1930: la ranchera se vuelve símbolo nacional",
    author: "Hito histórico",
    country: "México",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "Nacida en el México rural anterior a la Revolución y bautizada por la palabra 'rancho', la ranchera se transforma después de 1920 en símbolo de una identidad nacional en construcción, impulsada por la radio y, sobre todo, por el cine mexicano de los años treinta a cincuenta. Cantantes-actores como Jorge Negrete y Pedro Infante, y compositores como José Alfredo Jiménez, llevan sus temas de amor, despecho, patria y vida rural a audiencias masivas dentro y fuera de México, sentando las bases que décadas después heredaría Vicente Fernández, el intérprete que terminaría por convertirse en la voz definitiva del género.",
    descriptionHtml:
      'Nacida en el <button type="button" class="timeline-detail-geolink" data-country="México">México</button> rural anterior a la Revolución y bautizada por la palabra \'rancho\', la ranchera se transforma después de 1920 en símbolo de una identidad nacional en construcción, impulsada por la radio y, sobre todo, por el cine mexicano de los años treinta a cincuenta. Cantantes-actores como Jorge Negrete y Pedro Infante, y compositores como José Alfredo Jiménez, llevan sus temas de amor, despecho, patria y vida rural a audiencias masivas dentro y fuera de <button type="button" class="timeline-detail-geolink" data-country="México">México</button>, sentando las bases que décadas después heredaría <button type="button" class="timeline-detail-entrylink" data-id="vicente-fernandez-1940">Vicente Fernández</button>, el intérprete que terminaría por convertirse en la voz definitiva del género.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el cine mexicano de la Época de Oro nunca hubiera adoptado a la ranchera como su banda sonora?",
      answer:
        "El género probablemente habría seguido circulando en cantinas y radios rurales, sin el alcance masivo que le dieron Jorge Negrete y Pedro Infante desde la pantalla grande. Fue esa alianza entre cine y ranchera la que la convirtió en sinónimo de mexicanidad, mucho antes de que Vicente Fernández heredara y renovara ese mismo lugar."
    }
  },
  {
    id: "bachata-origenes-santo-domingo-1962",
    year: 1962,
    title: "1962: nace la bachata",
    author: "José Manuel Calderón",
    country: "República Dominicana",
    region: "Santo Domingo",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "En 1962, el guitarrista y cantante José Manuel Calderón graba en Santo Domingo lo que se considera la primera grabación comercial de bachata, un género surgido entre las comunidades trabajadoras y rurales dominicanas a partir del bolero, la guaracha y el son. Durante décadas, la bachata es despreciada por la radio y la industria discográfica dominicanas, relegada a los bares de los barrios pobres y bautizada con desdén 'música de amargue' por sus letras de despecho y corazones rotos. Recién con artistas como Luis Vargas y Antony Santos en los años ochenta y noventa, y después con Juan Luis Guerra, Aventura y Romeo Santos, la bachata se abre paso hasta convertirse en uno de los géneros latinos más escuchados del mundo.",
    descriptionHtml:
      'En 1962, el guitarrista y cantante José Manuel Calderón graba en <button type="button" class="timeline-detail-geolink" data-region="Santo Domingo" data-country="República Dominicana">Santo Domingo</button> lo que se considera la primera grabación comercial de bachata, un género surgido entre las comunidades trabajadoras y rurales dominicanas a partir del bolero, la guaracha y el son. Durante décadas, la bachata es despreciada por la radio y la industria discográfica dominicanas, relegada a los bares de los barrios pobres y bautizada con desdén \'música de amargue\' por sus letras de despecho y corazones rotos. Recién con artistas como Luis Vargas y Antony Santos en los años ochenta y noventa, y después con Juan Luis Guerra, Aventura y Romeo Santos, la bachata se abre paso hasta convertirse en uno de los géneros latinos más escuchados del mundo.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la radio dominicana hubiera aceptado la bachata desde su primera grabación en 1962?",
      answer:
        "El género no habría necesitado más de tres décadas de marginación en bares de barrio para ganarse un lugar en la radio comercial. Esa misma exclusión, sin embargo, es lo que la mantuvo cruda y sin diluir el tiempo suficiente para que Aventura y Romeo Santos, generaciones después, pudieran presentarla al mundo como algo genuinamente propio, no como una imitación pulida de otros géneros."
    }
  },
  {
    id: "reggae-origenes-jamaica-1968",
    year: 1968,
    endYear: 2018,
    title: "1968–2018: reggae, de Kingston a Patrimonio de la UNESCO",
    author: "Hito histórico",
    country: "Jamaica",
    region: "Kingston",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "En Kingston, a finales de los años sesenta, el reggae surge como evolución del mento, el ska y el rocksteady jamaicanos, con un ritmo más lento y marcado por el contratiempo de la guitarra y el bajo. Se convierte rápidamente en vehículo de la filosofía rastafari y de mensajes de justicia social, pobreza y resistencia, llevados al mundo entero por Bob Marley, Peter Tosh, Jimmy Cliff y Burning Spear. Lo que empieza como música de los barrios pobres de Kingston termina, en 2018, reconocido por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad — y, mucho antes de esa fecha, como la semilla directa de un género que Jamaica nunca imaginó exportar hacia el Caribe hispanohablante: el reggaetón.",
    descriptionHtml:
      'En <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Kingston</button>, a finales de los años sesenta, el reggae surge como evolución del mento, el ska y el rocksteady jamaicanos, con un ritmo más lento y marcado por el contratiempo de la guitarra y el bajo. Se convierte rápidamente en vehículo de la filosofía rastafari y de mensajes de justicia social, pobreza y resistencia, llevados al mundo entero por <button type="button" class="timeline-detail-entrylink" data-id="bob-marley-1945">Bob Marley</button>, Peter Tosh, Jimmy Cliff y Burning Spear. Lo que empieza como música de los barrios pobres de <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Kingston</button> termina, en 2018, reconocido por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad — y, mucho antes de esa fecha, como la semilla directa de un género que <button type="button" class="timeline-detail-geolink" data-country="Jamaica">Jamaica</button> nunca imaginó exportar hacia el Caribe hispanohablante: el <button type="button" class="timeline-detail-entrylink" data-id="reggaeton-origenes-panama-puerto-rico-1985">reggaetón</button>.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si el reggae jamaicano nunca hubiera cruzado el Caribe hacia Panamá en los años ochenta?",
      answer:
        "El dembow y toda la genealogía que llevó al reggaetón simplemente no existirían: sin las comunidades caribeñas de habla inglesa en Panamá traduciendo el reggae al español, no habría reggae en español, ni underground puertorriqueño, ni el género que terminaría llenando el escenario del Super Bowl de Bad Bunny décadas después."
    }
  },
  {
    id: "bob-marley-1945",
    year: 1945,
    endYear: 1981,
    title: "1945–1981: Bob Marley, embajador global del reggae",
    author: "Bob Marley",
    country: "Jamaica",
    region: "Kingston",
    type: ICON_TYPE.MUSIC,
    description:
      "Robert Nesta Marley nace el 6 de febrero de 1945 en Nine Mile, en la parroquia rural de Saint Ann, hijo de una adolescente jamaicana negra y un capitán británico blanco que apenas participó en su crianza. Crece en Trench Town, uno de los barrios más pobres de Kingston, donde en 1963 forma junto a Bunny Wailer y Peter Tosh el grupo The Wailers, que evoluciona del ska y el rocksteady hacia el reggae naciente de esa misma ciudad. Convertido al rastafarismo, lleva el reggae del gueto de Kingston a escenarios internacionales con álbumes como Catch a Fire (1973) y Exodus (1977, elegido por la revista Time como el álbum del siglo). El 3 de diciembre de 1976, dos días antes de un concierto gratuito organizado para apaciguar la violencia política en Jamaica, sobrevive a un intento de asesinato a tiros en su propia casa; toca de todos modos, con una herida de bala en el brazo, ante setenta mil personas. En 1978, en el One Love Peace Concert, obliga a subir al escenario y estrechar las manos frente al público a los líderes de los dos partidos rivales cuya disputa había ensangrentado la isla. En septiembre de 1980, en pleno Uprising Tour, toca dos noches en el Madison Square Garden de Nueva York —la primera como telonero de The Commodores, ante un público mayoritariamente afroestadounidense que lo escuchaba en vivo por primera vez—; días después colapsa en Central Park durante un trote, primer síntoma visible del cáncer que lo mataría. Muere de un melanoma el 11 de mayo de 1981 en Miami, a los 36 años, convertido ya en el símbolo global del reggae y del rastafarismo — en la misma Kingston que, siglo y medio antes, le había dado refugio a Simón Bolívar para escribir la Carta de Jamaica.",
    descriptionHtml:
      'Robert Nesta Marley nace el 6 de febrero de 1945 en <button type="button" class="timeline-detail-geolink" data-region="Nine Mile" data-country="Jamaica">Nine Mile</button>, en la parroquia rural de Saint Ann, hijo de una adolescente jamaicana negra y un capitán británico blanco que apenas participó en su crianza. Crece en <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Trench Town</button>, uno de los barrios más pobres de <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Kingston</button>, donde en 1963 forma junto a Bunny Wailer y Peter Tosh el grupo The Wailers, que evoluciona del ska y el rocksteady hacia el <button type="button" class="timeline-detail-entrylink" data-id="reggae-origenes-jamaica-1968">reggae</button> naciente de esa misma ciudad. Convertido al rastafarismo, lleva el reggae del gueto de <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Kingston</button> a escenarios internacionales con álbumes como Catch a Fire (1973) y Exodus (1977, elegido por la revista Time como el álbum del siglo). El 3 de diciembre de 1976, dos días antes de un concierto gratuito organizado para apaciguar la violencia política en Jamaica, sobrevive a un intento de asesinato a tiros en su propia casa; toca de todos modos, con una herida de bala en el brazo, ante setenta mil personas. En 1978, en el One Love Peace Concert, obliga a subir al escenario y estrechar las manos frente al público a los líderes de los dos partidos rivales cuya disputa había ensangrentado la isla. En septiembre de 1980, en pleno Uprising Tour, toca dos noches en el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York —la primera como telonero de The Commodores, ante un público mayoritariamente afroestadounidense que lo escuchaba en vivo por primera vez—; días después colapsa en <button type="button" class="timeline-detail-geolink" data-region="Central Park" data-country="Estados Unidos">Central Park</button> durante un trote, primer síntoma visible del cáncer que lo mataría. Muere de un melanoma el 11 de mayo de 1981 en <button type="button" class="timeline-detail-geolink" data-region="Miami" data-country="Estados Unidos">Miami</button>, a los 36 años, convertido ya en el símbolo global del reggae y del rastafarismo — en la misma <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Kingston</button> que, siglo y medio antes, le había dado refugio a <button type="button" class="timeline-detail-entrylink" data-id="carta-de-jamaica-1815">Simón Bolívar</button> para escribir la Carta de Jamaica.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bob Marley no hubiera sobrevivido al intento de asesinato de 1976?",
      answer:
        "Jamaica habría perdido, dos años antes de tiempo, a la única figura capaz de reunir en un mismo escenario a los líderes de los dos partidos que la tenían al borde de la guerra civil. El One Love Peace Concert de 1978 —y el gesto de las manos unidas que se volvió símbolo de reconciliación— simplemente no habría existido, y el reggae habría perdido a su embajador justo cuando más estaba por conquistar al mundo."
    }
  },
  {
    id: "salsa-fania-nueva-york-1971",
    year: 1971,
    month: 8,
    endYear: 1974,
    title: "1971–1974: Fania Records bautiza a la salsa",
    author: "Hito histórico",
    country: "Estados Unidos",
    region: "Nueva York",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "La salsa toma su forma moderna en Nueva York entre los años cuarenta y setenta, cuando el son, el mambo, la rumba y el bolero cubanos se mezclan con las tradiciones musicales puertorriqueñas dentro de las comunidades latinas de la ciudad. En 1971, un concierto multitudinario de las Fania All-Stars en el club Cheetah de Manhattan —documentado al año siguiente en la película Our Latin Thing— y la campaña de mercadeo del sello Fania Records terminan de fijar el nombre 'salsa' como término comercial para todo ese universo de ritmos afrocubanos y afroantillanos tocados en Nueva York. Bajo ese nombre nuevo, figuras como Tito Puente, Willie Colón, Héctor Lavoe y Rubén Blades —y, como única mujer del supergrupo, Celia Cruz— terminan de proyectar la salsa desde los clubes neoyorquinos hacia toda América Latina y el resto del mundo.",
    descriptionHtml:
      'La salsa toma su forma moderna en <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Nueva York</button> entre los años cuarenta y setenta, cuando el son, el mambo, la rumba y el bolero cubanos se mezclan con las tradiciones musicales puertorriqueñas dentro de las comunidades latinas de la ciudad. En 1971, un concierto multitudinario de las Fania All-Stars en el club Cheetah de <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Manhattan</button> —documentado al año siguiente en la película Our Latin Thing— y la campaña de mercadeo del sello Fania Records terminan de fijar el nombre \'salsa\' como término comercial para todo ese universo de ritmos afrocubanos y afroantillanos tocados en Nueva York. Bajo ese nombre nuevo, figuras como Tito Puente, Willie Colón, Héctor Lavoe y Rubén Blades —y, como única mujer del supergrupo, <button type="button" class="timeline-detail-entrylink" data-id="celia-cruz-1925">Celia Cruz</button>— terminan de proyectar la salsa desde los clubes neoyorquinos hacia toda América Latina y el resto del mundo.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Fania Records nunca hubiera adoptado el término 'salsa' como etiqueta comercial en los años setenta?",
      answer:
        "El son, el mambo y el bolero afrocubanos tocados en Nueva York habrían seguido circulando como una mezcla de géneros distintos, sin un nombre único capaz de venderse como una sola marca global. Ese bautizo comercial —tan cuestionado por puristas que preferían llamarlo simplemente 'música cubana'— fue, en la práctica, lo que le dio a Celia Cruz y al resto de las Fania All-Stars un género propio bajo el cual conquistar el mundo."
    }
  },
  {
    id: "reggaeton-origenes-panama-puerto-rico-1985",
    year: 1985,
    endYear: 2004,
    title: "1985–2004: de Panamá al 'Gasolina' que lo cambió todo",
    author: "Hito histórico",
    country: "Panamá",
    region: "Ciudad de Panamá",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "Contra la creencia popular de que el reggaetón nació en Puerto Rico, sus raíces más tempranas están en Panamá, donde descendientes de trabajadores caribeños de habla inglesa —muchos llegados para construir el Canal— crean desde mediados de los años ochenta el reggae en español, adaptando el reggae y el dancehall jamaicanos al castellano. En Puerto Rico, durante los años noventa, esa base se mezcla con hip-hop y dancehall en la escena 'underground' de San Juan, incorporando el característico ritmo dembow tomado directamente del dancehall jamaicano. La explosión definitiva llega en 2004 con 'Gasolina', de Daddy Yankee, la canción que convierte al reggaetón en fenómeno de la cultura pop global y abre camino a Don Omar, Tego Calderón y, generaciones después, a Bad Bunny y Karol G.",
    descriptionHtml:
      'Contra la creencia popular de que el reggaetón nació en Puerto Rico, sus raíces más tempranas están en <button type="button" class="timeline-detail-geolink" data-region="Ciudad de Panamá" data-country="Panamá">Panamá</button>, donde descendientes de trabajadores caribeños de habla inglesa —muchos llegados para construir el Canal— crean desde mediados de los años ochenta el reggae en español, adaptando el <button type="button" class="timeline-detail-entrylink" data-id="reggae-origenes-jamaica-1968">reggae</button> y el dancehall jamaicanos al castellano. En <button type="button" class="timeline-detail-geolink" data-country="Puerto Rico">Puerto Rico</button>, durante los años noventa, esa base se mezcla con hip-hop y dancehall en la escena \'underground\' de <button type="button" class="timeline-detail-geolink" data-region="San Juan" data-country="Puerto Rico">San Juan</button>, incorporando el característico ritmo dembow tomado directamente del dancehall jamaicano. La explosión definitiva llega en 2004 con \'Gasolina\', de Daddy Yankee, la canción que convierte al reggaetón en fenómeno de la cultura pop global y abre camino a <button type="button" class="timeline-detail-entrylink" data-id="don-omar-1978">Don Omar</button>, Tego Calderón y, generaciones después, a <button type="button" class="timeline-detail-entrylink" data-id="bad-bunny-2026">Bad Bunny</button> y Karol G.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si 'Gasolina' nunca se hubiera convertido en un éxito fuera de Puerto Rico en 2004?",
      answer:
        "El reggaetón probablemente habría seguido siendo, por más tiempo, un fenómeno regional caribeño, tal como lo fue el reggae en español panameño durante los ochenta. 'Gasolina' fue la prueba de concepto que la industria global necesitaba para invertir en el género, abriendo la puerta que dos décadas después llevaría a Bad Bunny a encabezar en solitario el espectáculo de medio tiempo del Super Bowl."
    }
  },
  {
    id: "natanael-cano-corridos-tumbados-2019",
    year: 2019,
    title: "2019: Natanael Cano inventa los corridos tumbados",
    author: "Natanael Cano",
    country: "México",
    region: "Hermosillo, Sonora",
    type: ICON_TYPE.MUSIC,
    types: [ICON_TYPE.MUSIC, ICON_TYPE.HISTORY],
    description:
      "José Natanael Cano Monge nace el 26 de febrero de 2000 en Hermosillo, Sonora, y en 2019, apenas adolescente, publica el álbum Corridos Tumbados, que da nombre a un género nuevo: la fusión del corrido regional mexicano tradicional con el trap, el hip-hop y la estética visual del reggaetón, con Cano cantando sobre capos y lujos vestido de cadenas y ropa urbana en vez del atuendo norteño clásico. La crítica especializada lo señala como el pionero que abrió el camino para toda una generación —Peso Pluma, Junior H, Fuerza Regida, Tito Double P— que llevaría los corridos tumbados a las listas globales apenas unos años después. El 28 de agosto de 2024, en la FENAPO (Feria Nacional Potosina) de San Luis Potosí, reúne a más de 310,000 personas, un récord de asistencia en la historia de los conciertos en México — superado casi exactamente un año después, el 19 de agosto de 2025 y en ese mismo festival, por Don Omar, con 358,000 asistentes.",
    descriptionHtml:
      'José Natanael Cano Monge nace el 26 de febrero de 2000 en <button type="button" class="timeline-detail-geolink" data-region="Hermosillo, Sonora" data-country="México">Hermosillo, Sonora</button>, y en 2019, apenas adolescente, publica el álbum Corridos Tumbados, que da nombre a un género nuevo: la fusión del corrido regional mexicano tradicional (ver <button type="button" class="timeline-detail-entrylink" data-id="corrido-origenes-independencia-revolucion">los orígenes del corrido</button>) con el trap, el hip-hop y la estética visual del <button type="button" class="timeline-detail-entrylink" data-id="reggaeton-origenes-panama-puerto-rico-1985">reggaetón</button>, con Cano cantando sobre capos y lujos vestido de cadenas y ropa urbana en vez del atuendo norteño clásico. La crítica especializada lo señala como el pionero que abrió el camino para toda una generación —<button type="button" class="timeline-detail-entrylink" data-id="peso-pluma-2023">Peso Pluma</button>, Junior H, Fuerza Regida, Tito Double P— que llevaría los corridos tumbados a las listas globales apenas unos años después. El 28 de agosto de 2024, en la FENAPO (Feria Nacional Potosina) de <button type="button" class="timeline-detail-geolink" data-region="San Luis Potosí" data-country="México">San Luis Potosí</button>, reúne a más de 310,000 personas, un récord de asistencia en la historia de los conciertos en México — superado casi exactamente un año después, el 19 de agosto de 2025 y en ese mismo festival, por <button type="button" class="timeline-detail-entrylink" data-id="don-omar-1978">Don Omar</button>, con 358,000 asistentes.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Natanael Cano hubiera grabado corridos tradicionales sin fusionarlos con el trap en 2019?",
      answer:
        "El corrido regional mexicano habría seguido siendo, para las nuevas generaciones digitales, un género de sus padres y abuelos, no uno propio. Al vestirlo con la estética y el sonido del trap, Cano le dio al corrido una segunda juventud que, apenas cuatro años después, llevaría a Peso Pluma al número uno global de Spotify."
    }
  },
  {
    id: "don-omar-1978",
    year: 1978,
    title: "2025: Don Omar y el récord de la FENAPO",
    author: "Don Omar",
    country: "Puerto Rico",
    region: "San Juan",
    type: ICON_TYPE.MUSIC,
    description:
      "William Omar Landrón Rivera nace el 10 de febrero de 1978 en Villa Palmeras, un barrio popular de San Juan, Puerto Rico, y trabaja como pastor evangélico antes de dedicarse por completo a la música. En 2003 publica su álbum debut, The Last Don, y se convierte en una de las voces fundacionales del reguetón junto a Daddy Yankee y Tego Calderón, con éxitos como 'Dale Don Dale', 'Pobre Diabla' y 'Danza Kuduro'. El 19 de agosto de 2025, en la FENAPO (Feria Nacional Potosina) de San Luis Potosí, reúne a 358,000 personas —el show más multitudinario de toda su carrera y un nuevo récord de asistencia en la historia de los conciertos en México, superando el que Natanael Cano había impuesto apenas un año antes en ese mismo festival—. 'Este es el mejor día de mi vida', declara esa noche.",
    descriptionHtml:
      'William Omar Landrón Rivera nace el 10 de febrero de 1978 en Villa Palmeras, un barrio popular de <button type="button" class="timeline-detail-geolink" data-region="San Juan" data-country="Puerto Rico">San Juan, Puerto Rico</button>, y trabaja como pastor evangélico antes de dedicarse por completo a la música. En 2003 publica su álbum debut, The Last Don, y se convierte en una de las voces fundacionales del reguetón junto a Daddy Yankee y Tego Calderón, con éxitos como \'Dale Don Dale\', \'Pobre Diabla\' y \'Danza Kuduro\'. El 19 de agosto de 2025, en la FENAPO (Feria Nacional Potosina) de <button type="button" class="timeline-detail-geolink" data-region="San Luis Potosí" data-country="México">San Luis Potosí</button>, reúne a 358,000 personas —el show más multitudinario de toda su carrera y un nuevo récord de asistencia en la historia de los conciertos en México, superando el que <button type="button" class="timeline-detail-entrylink" data-id="natanael-cano-corridos-tumbados-2019">Natanael Cano</button> había impuesto apenas un año antes en ese mismo festival—. \'Este es el mejor día de mi vida\', declara esa noche.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Don Omar hubiera publicado The Last Don unos años más tarde, cuando el reguetón ya estuviera consolidado en el mercado mexicano?",
      answer:
        "Habría llegado como uno más entre docenas de artistas de un género ya establecido, no como una de sus voces fundacionales. Publicar en 2003, cuando el reguetón apenas cruzaba fronteras, es parte de lo que le permitió, veintidós años después, seguir siendo capaz de romper récords de asistencia en un país que ni siquiera era su mercado natural."
    }
  },

  // ---- ARQUITECTURA E HISTORIA NATURAL ----
  {
    id: "ahmad-ibn-baso-1171",
    year: 1171,
    trackYear: 1133,
    endYear: 1189,
    title: "1171–1189: Ahmad ibn Baso, el arquitecto de la Giralda",
    author: "Ahmad ibn Baso",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Ahmad ibn Baso, arquitecto andalusí activo en el Al-Ándalus almohade, dirige en 1171 la construcción de los palacios de la Buhayra en Sevilla por encargo del califa Abú Yaqub Yusuf. En 1184 el mismo califa le encarga la obra más ambiciosa de su carrera: el alminar de la gran mezquita aljama de Sevilla, la torre que los siglos después conocerían como la Giralda. Ibn Baso la diseña sin escaleras, con rampas interiores lo bastante anchas para que dos jinetes pudieran subir a caballo al mismo tiempo hasta lo alto. Muere hacia 1189, con la torre todavía en obras; el arquitecto Ali al Gomari termina lo que él empezó. Tres siglos y medio después, ya conquistada Sevilla por los cristianos, el arquitecto renacentista Hernán Ruiz II corona el alminar almohade con un cuerpo de campanas — la fusión de ambas épocas es la Giralda que hoy se reconoce como símbolo de la ciudad.",
    descriptionHtml:
      'Ahmad ibn Baso, arquitecto andalusí activo en el <button type="button" class="timeline-detail-entrylink" data-id="califato-cordoba-929">Al-Ándalus</button> almohade, dirige en 1171 la construcción de los <button type="button" class="timeline-detail-geolink" data-region="Palacio de la Buhayra" data-country="España">palacios de la Buhayra</button> en <button type="button" class="timeline-detail-geolink" data-region="Sevilla" data-country="España">Sevilla</button> por encargo del califa Abú Yaqub Yusuf. En 1184 el mismo califa le encarga la obra más ambiciosa de su carrera: el alminar de la gran mezquita aljama de Sevilla, la torre que los siglos después conocerían como la <button type="button" class="timeline-detail-geolink" data-region="La Giralda" data-country="España">Giralda</button>. Ibn Baso la diseña sin escaleras, con rampas interiores lo bastante anchas para que dos jinetes pudieran subir a caballo al mismo tiempo hasta lo alto. Muere hacia 1189, con la torre todavía en obras; el arquitecto Ali al Gomari termina lo que él empezó. Tres siglos y medio después, <button type="button" class="timeline-detail-entrylink" data-id="fernando-iii-cordoba-sevilla-1236">ya conquistada Sevilla por los cristianos</button>, el arquitecto renacentista Hernán Ruiz II corona el alminar almohade con un cuerpo de campanas — la fusión de ambas épocas es la Giralda que hoy se reconoce como símbolo de la ciudad.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Ahmad ibn Baso hubiera terminado la Giralda antes de morir, sin necesidad de que Ali al Gomari continuara la obra?",
      answer:
        "El resultado final probablemente no habría cambiado demasiado —el diseño de las rampas y las proporciones ya estaban fijadas—, pero la torre habría llevado un solo nombre en vez de dos. Es, en cierto modo, apropiado que un monumento tan reconstruido y reinterpretado a lo largo de los siglos —almohade primero, renacentista después— haya nacido también como obra de más de un arquitecto."
    }
  },
  {
    id: "maestro-enrique-1250",
    year: 1250,
    endYear: 1277,
    title: "1250–1277: Maestro Enrique y las catedrales góticas de Castilla",
    author: "Maestro Enrique",
    country: "España",
    region: "Burgos",
    flag: "spain-not-latam",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "De origen probablemente francés, Maestro Enrique trabaja a mediados del siglo XIII en dos de las grandes catedrales góticas de Castilla: en León esculpe la efigie de Nuestra Señora la Blanca y figuras del tímpano de la puerta occidental, y hacia 1250 se establece en Burgos como maestro de obras de su catedral, sustituyendo al arquitecto original. Ahí transforma el diseño de la cabecera con un presbiterio de tres tramos y girola de capillas poligonales y rectangulares, inspirado en las catedrales francesas de Reims y Limoges, y dirige el conjunto de la Anunciación y la puerta de la Coronería. Muere en Burgos en 1277 sin ver terminada la catedral, que no se completaría hasta el siglo XVI. Algunos historiadores, sin embargo, atribuyen el diseño original de la catedral de León a otro maestro, Simón, llegado de Francia en 1255 — una disputa de autoría que persiste ocho siglos después, y que convive en el tiempo con el trabajo de Ahmad ibn Baso en la Giralda, apenas unas décadas antes, del otro lado de la frontera religiosa que entonces partía la península.",
    descriptionHtml:
      'De origen probablemente francés, Maestro Enrique trabaja a mediados del siglo XIII en dos de las grandes catedrales góticas de Castilla: en <button type="button" class="timeline-detail-geolink" data-region="León" data-country="España">León</button> esculpe la efigie de Nuestra Señora la Blanca y figuras del tímpano de la puerta occidental, y hacia 1250 se establece en <button type="button" class="timeline-detail-geolink" data-region="Burgos" data-country="España">Burgos</button> como maestro de obras de su <button type="button" class="timeline-detail-geolink" data-region="Catedral de Burgos" data-country="España">catedral</button>, sustituyendo al arquitecto original. Ahí transforma el diseño de la cabecera con un presbiterio de tres tramos y girola de capillas poligonales y rectangulares, inspirado en las catedrales francesas de <button type="button" class="timeline-detail-geolink" data-region="Reims" data-country="Francia">Reims</button> y <button type="button" class="timeline-detail-geolink" data-region="Limoges" data-country="Francia">Limoges</button>, y dirige el conjunto de la Anunciación y la puerta de la Coronería. Muere en Burgos en 1277 sin ver terminada la catedral, que no se completaría hasta el siglo XVI. Algunos historiadores, sin embargo, atribuyen el diseño original de la <button type="button" class="timeline-detail-geolink" data-region="Catedral de León" data-country="España">catedral de León</button> a otro maestro, Simón, llegado de Francia en 1255 — una disputa de autoría que persiste ocho siglos después, y que convive en el tiempo con el trabajo de <button type="button" class="timeline-detail-entrylink" data-id="ahmad-ibn-baso-1171">Ahmad ibn Baso</button> en la Giralda, apenas unas décadas antes, del otro lado de la frontera religiosa que entonces partía la península.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Maestro Enrique nunca hubiera llegado a Burgos hacia 1250?",
      answer:
        "La catedral habría conservado la cabecera del diseño original, sin la girola de capillas poligonales inspirada en Reims y Limoges que Enrique introdujo. El gótico castellano, tal como se conoce hoy —esa mezcla de influencia francesa y acento propio—, le debe a este maestro de origen incierto una de sus transformaciones más determinantes."
    }
  },
  {
    id: "betancourt-ingeniero-1758",
    year: 1758,
    endYear: 1824,
    title: "1758–1824: Agustín de Betancourt, el ingeniero ilustrado",
    author: "Agustín de Betancourt",
    country: "España",
    region: "Madrid",
    flag: "spain-not-latam",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Agustín de Betancourt nace el 1 de febrero de 1758 en Puerto de la Cruz, Tenerife, y marcha en 1778 a estudiar a Madrid, sin regresar jamás a las islas. Formado en la Ilustración, construye a los dieciocho años una máquina de coser seda junto a su hermana y lanza en 1784 el primer globo aerostático español. Como ingeniero real, dirige la construcción de tramos del Canal de Castilla y funda en Madrid el Real Gabinete de Máquinas, antecedente directo de la ingeniería moderna española. En 1808, tras la invasión napoleónica, se traslada a Rusia, donde dirige los ferrocarriles del imperio, participa en la construcción de la catedral de San Isaac en San Petersburgo y funda la primera escuela de ingenieros del país. Muere en San Petersburgo el 14 de julio de 1824, considerado 'el ingeniero más sabio no solo de España, sino de Rusia y de toda Europa'.",
    descriptionHtml:
      'Agustín de Betancourt nace el 1 de febrero de 1758 en <button type="button" class="timeline-detail-geolink" data-region="Puerto de la Cruz" data-country="España">Puerto de la Cruz</button>, <button type="button" class="timeline-detail-geolink" data-region="Tenerife" data-country="España">Tenerife</button>, y marcha en 1778 a estudiar a <button type="button" class="timeline-detail-geolink" data-region="Madrid" data-country="España">Madrid</button>, sin regresar jamás a las islas. Formado en la Ilustración, construye a los dieciocho años una máquina de coser seda junto a su hermana y lanza en 1784 el primer globo aerostático español. Como ingeniero real, dirige la construcción de tramos del <button type="button" class="timeline-detail-geolink" data-region="Canal de Castilla" data-country="España">Canal de Castilla</button> y funda en Madrid el Real Gabinete de Máquinas, antecedente directo de la ingeniería moderna española. En 1808, tras la invasión napoleónica, se traslada a <button type="button" class="timeline-detail-geolink" data-country="Rusia">Rusia</button>, donde dirige los ferrocarriles del imperio, participa en la construcción de la <button type="button" class="timeline-detail-geolink" data-region="Catedral de San Isaac" data-country="Rusia">catedral de San Isaac</button> en <button type="button" class="timeline-detail-geolink" data-region="San Petersburgo" data-country="Rusia">San Petersburgo</button> y funda la primera escuela de ingenieros del país. Muere en San Petersburgo el 14 de julio de 1824, considerado \'el ingeniero más sabio no solo de España, sino de Rusia y de toda Europa\'.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Betancourt nunca hubiera salido de España tras la invasión napoleónica de 1808?",
      answer:
        "Habría sido, probablemente, una víctima más del colapso institucional y científico que la guerra provocó en España durante la siguiente década. Al marcharse a Rusia, no solo salvó su carrera: fundó ahí la primera escuela de ingenieros del imperio zarista, exportando el conocimiento ilustrado español justo cuando España misma no podía sostenerlo."
    }
  },
  {
    id: "cristo-redentor-1922",
    year: 1922,
    endYear: 1931,
    title: "1922–1931: Heitor da Silva Costa y el Cristo Redentor",
    author: "Heitor da Silva Costa",
    country: "Brasil",
    region: "Río de Janeiro",
    glyph: GLYPH.ECCLESIASTICAL,
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "El ingeniero brasileño Heitor da Silva Costa gana en 1922 el concurso convocado por la Iglesia católica para levantar en la cima del cerro Corcovado, sobre Río de Janeiro, un monumento a Cristo que celebrara el primer centenario de la independencia de Brasil. Da Silva Costa concibe la figura de brazos abiertos y viaja a París para encargar la escultura al franco-polaco Paul Landowski, quien modela la cabeza y las manos, mientras el ingeniero francés Albert Caquot calcula y diseña toda la estructura interna de concreto armado que sostiene el peso de la obra. Construida entre 1922 y 1931 en piedra jabón, la estatua alcanza 30 metros de altura —38 con el pedestal— y se inaugura el 12 de octubre de 1931, convirtiéndose con el tiempo en el símbolo más reconocible de Brasil en el mundo.",
    descriptionHtml:
      'El ingeniero brasileño Heitor da Silva Costa gana en 1922 el concurso convocado por la Iglesia católica para levantar en la cima del <button type="button" class="timeline-detail-geolink" data-region="Cerro Corcovado" data-country="Brasil">cerro Corcovado</button>, sobre <button type="button" class="timeline-detail-geolink" data-region="Río de Janeiro" data-country="Brasil">Río de Janeiro</button>, un <button type="button" class="timeline-detail-geolink" data-region="Cristo Redentor" data-country="Brasil">monumento a Cristo</button> que celebrara el primer centenario de la independencia de Brasil. Da Silva Costa concibe la figura de brazos abiertos y viaja a <button type="button" class="timeline-detail-geolink" data-region="París" data-country="Francia">París</button> para encargar la escultura al franco-polaco Paul Landowski, quien modela la cabeza y las manos, mientras el ingeniero francés Albert Caquot calcula y diseña toda la estructura interna de concreto armado que sostiene el peso de la obra. Construida entre 1922 y 1931 en piedra jabón, la estatua alcanza 30 metros de altura —38 con el pedestal— y se inaugura el 12 de octubre de 1931, convirtiéndose con el tiempo en el símbolo más reconocible de Brasil en el mundo.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Heitor da Silva Costa nunca hubiera viajado a París a buscar a Paul Landowski?",
      answer:
        "Habría tenido que encargar la escultura a un artista brasileño o improvisar con recursos técnicos locales, en un país que todavía no contaba con experiencia en esculturas monumentales de esa escala. La combinación exacta que hizo posible el Cristo Redentor —ingeniería brasileña, escultura franco-polaca, cálculo estructural francés— fue, en el fondo, un proyecto tan internacional como el propio centenario que buscaba celebrar."
    }
  },
  {
    id: "malachowski-arquitecto-peru-1887",
    year: 1887,
    endYear: 1972,
    title: "1887–1972: Ricardo de Jaxa Malachowski, el arquitecto que rediseñó Lima",
    author: "Ricardo de Jaxa Malachowski",
    country: "Perú",
    region: "Lima",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Ricardo de Jaxa Malachowski nace el 14 de mayo de 1887 cerca de Odesa, entonces parte del Imperio ruso y hoy Ucrania, hijo de una familia polaca. Se gradúa primero de su promoción en la Escuela de Bellas Artes de París y, con apenas 24 años, desembarca en Lima el 22 de diciembre de 1911, contratado por el gobierno peruano a pedido del presidente Augusto B. Leguía para fundar la sección de arquitectura de la Escuela Nacional de Ingenieros. En las tres décadas siguientes diseña buena parte del centro monumental de la capital: el Palacio de Gobierno, el Palacio Legislativo, el Club Nacional, el Teatro Municipal y el Palacio Arzobispal, entre muchas otras obras públicas y privadas. Muere en Lima el 6 de setiembre de 1972, a los 85 años, después de sesenta pasados en la ciudad que un inmigrante polaco terminó por definir arquitectónicamente.",
    descriptionHtml:
      'Ricardo de Jaxa Malachowski nace el 14 de mayo de 1887 cerca de <button type="button" class="timeline-detail-geolink" data-region="Odesa" data-country="Ucrania">Odesa</button>, entonces parte del Imperio ruso y hoy Ucrania, hijo de una familia polaca. Se gradúa primero de su promoción en la Escuela de Bellas Artes de París y, con apenas 24 años, desembarca en <button type="button" class="timeline-detail-geolink" data-region="Lima" data-country="Perú">Lima</button> el 22 de diciembre de 1911, contratado por el gobierno peruano a pedido del presidente Augusto B. Leguía para fundar la sección de arquitectura de la Escuela Nacional de Ingenieros. En las tres décadas siguientes diseña buena parte del centro monumental de la capital: el <button type="button" class="timeline-detail-geolink" data-region="Palacio de Gobierno del Perú" data-country="Perú">Palacio de Gobierno</button>, el <button type="button" class="timeline-detail-geolink" data-region="Palacio Legislativo del Perú" data-country="Perú">Palacio Legislativo</button>, el <button type="button" class="timeline-detail-geolink" data-region="Club Nacional" data-country="Perú">Club Nacional</button>, el <button type="button" class="timeline-detail-geolink" data-region="Teatro Municipal de Lima" data-country="Perú">Teatro Municipal</button> y el <button type="button" class="timeline-detail-geolink" data-region="Palacio Arzobispal de Lima" data-country="Perú">Palacio Arzobispal</button>, entre muchas otras obras públicas y privadas. Muere en Lima el 6 de setiembre de 1972, a los 85 años, después de sesenta pasados en la ciudad que un inmigrante polaco terminó por definir arquitectónicamente.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Leguía nunca hubiera contratado a un arquitecto extranjero para reconstruir Lima?",
      answer:
        "El centro monumental de Lima —el Palacio de Gobierno, el Legislativo, el Club Nacional— habría quedado en manos de la tradición local, probablemente más conservadora ante los nuevos lenguajes eclécticos que llegaban de Europa. Malachowski, ajeno a las lealtades locales y formado en París, pudo imponer una visión unificada de la ciudad que ningún arquitecto peruano de la época estaba en posición de proponer."
    }
  },
  {
    id: "gonzalez-moix-biblioteca-sur-2017",
    year: 2017,
    title: "2017: la biblioteca de Lima con forma de libros apilados",
    author: "Óscar Gonzalez Moix",
    country: "Perú",
    region: "La Molina, Lima",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "El arquitecto argentino Óscar Gonzalez Moix, radicado en Lima, completa en 2017 la Biblioteca Sur en el distrito de La Molina, después de un proceso de diseño y construcción de casi una década. El edificio, de hormigón expuesto, se organiza en volúmenes horizontales apilados que aluden literalmente a una pila de libros sobre un estante; dos de esos 'libros' aparecen ligeramente inclinados, marcando desde la fachada el acceso principal. La biblioteca forma parte de un complejo cultural más amplio, con una plaza, una escuela y un parque público, y se ha convertido en referencia internacional de arquitectura cívica peruana contemporánea.",
    descriptionHtml:
      'El arquitecto argentino Óscar Gonzalez Moix, radicado en Lima, completa en 2017 la <button type="button" class="timeline-detail-geolink" data-region="Biblioteca Sur" data-country="Perú">Biblioteca Sur</button> en el distrito de <button type="button" class="timeline-detail-geolink" data-region="La Molina, Lima" data-country="Perú">La Molina</button>, después de un proceso de diseño y construcción de casi una década. El edificio, de hormigón expuesto, se organiza en volúmenes horizontales apilados que aluden literalmente a una pila de libros sobre un estante; dos de esos \'libros\' aparecen ligeramente inclinados, marcando desde la fachada el acceso principal. La biblioteca forma parte de un complejo cultural más amplio, con una plaza, una escuela y un parque público, y se ha convertido en referencia internacional de arquitectura cívica peruana contemporánea.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Gonzalez Moix hubiera optado por un diseño más convencional para la Biblioteca Sur?",
      answer:
        "El edificio habría cumplido su función igual de bien, pero sin el gesto que lo volvió memorable: convertir la propia fachada en una metáfora legible de lo que el edificio contiene. Esa pila de concreto que se lee como libros es lo que transformó una biblioteca de barrio en una parada obligada para quien estudia arquitectura contemporánea en América Latina."
    }
  },
  {
    id: "salmona-arquitecto-colombia-1929",
    year: 1929,
    endYear: 2007,
    title: "1929–2007: Rogelio Salmona, el mejor arquitecto de Colombia",
    author: "Rogelio Salmona",
    country: "Colombia",
    region: "Bogotá",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Rogelio Salmona nace el 28 de abril de 1929 en París, hijo de padre español y madre francesa, pero se traslada de niño a Colombia y se identifica como colombiano el resto de su vida. Interrumpe sus estudios de arquitectura en Bogotá en 1948 para volver a París, donde trabaja casi una década en el estudio de Le Corbusier. De regreso en Colombia, desarrolla una arquitectura moderna propia que funde el ladrillo, material humilde y local, con la tradición colonial, precolombina y la vanguardia internacional: las Torres del Parque (1970), el Archivo General de la Nación (1991) y la Biblioteca Pública Virgilio Barco (2001), todas en Bogotá, son sus obras más reconocidas. En 2003 se convierte en el primer latinoamericano en recibir la Medalla Alvar Aalto. Muere en Bogotá el 3 de octubre de 2007, considerado, casi sin discusión, el mejor arquitecto que ha dado Colombia.",
    descriptionHtml:
      'Rogelio Salmona nace el 28 de abril de 1929 en <button type="button" class="timeline-detail-geolink" data-region="París" data-country="Francia">París</button>, hijo de padre español y madre francesa, pero se traslada de niño a Colombia y se identifica como colombiano el resto de su vida. Interrumpe sus estudios de arquitectura en <button type="button" class="timeline-detail-geolink" data-region="Bogotá" data-country="Colombia">Bogotá</button> en 1948 para volver a París, donde trabaja casi una década en el estudio de Le Corbusier. De regreso en Colombia, desarrolla una arquitectura moderna propia que funde el ladrillo, material humilde y local, con la tradición colonial, precolombina y la vanguardia internacional: las <button type="button" class="timeline-detail-geolink" data-region="Torres del Parque" data-country="Colombia">Torres del Parque</button> (1970), el <button type="button" class="timeline-detail-geolink" data-region="Archivo General de la Nación, Colombia" data-country="Colombia">Archivo General de la Nación</button> (1991) y la <button type="button" class="timeline-detail-geolink" data-region="Biblioteca Pública Virgilio Barco" data-country="Colombia">Biblioteca Pública Virgilio Barco</button> (2001), todas en Bogotá, son sus obras más reconocidas. En 2003 se convierte en el primer latinoamericano en recibir la Medalla Alvar Aalto. Muere en Bogotá el 3 de octubre de 2007, considerado, casi sin discusión, el mejor arquitecto que ha dado Colombia.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Salmona hubiera abierto su propio estudio en París en lugar de regresar a Colombia?",
      answer:
        "Habría sido, seguramente, un arquitecto exitoso más dentro del legado directo de Le Corbusier, un discípulo entre muchos. Al volver a Bogotá, en cambio, tuvo que inventar un lenguaje propio —el ladrillo, la luz, el agua, la memoria precolombina— que ningún estudio parisino le habría exigido, y que terminó siendo su aporte más original a la arquitectura mundial."
    }
  },
  {
    id: "testa-arquitecto-argentina-1923",
    year: 1923,
    endYear: 2013,
    title: "1923–2013: Clorindo Testa, el arquitecto más importante de Argentina",
    author: "Clorindo Testa",
    country: "Argentina",
    region: "Buenos Aires",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Clorindo Testa nace el 10 de diciembre de 1923 en Napoli (Nápoles), Italia, pero llega a Buenos Aires con apenas seis meses de edad y se forma enteramente ahí. Estudia primero ingeniería electromecánica antes de graduarse en 1948 entre la primera camada de la nueva Facultad de Arquitectura y Urbanismo. Se convierte en el máximo exponente argentino del brutalismo con obras como el Banco de Londres y América del Sur (1966), de fachada esculpida en concreto expuesto, y la Biblioteca Nacional de la República Argentina, un edificio elevado sobre pilotes que domina el barrio de Recoleta desde los años setenta. También pinta y expone como artista plástico durante toda su vida, cruzando constantemente arquitectura y arte. Muere en Buenos Aires el 11 de abril de 2013, a los 89 años, considerado el arquitecto argentino más importante del siglo XX.",
    descriptionHtml:
      'Clorindo Testa nace el 10 de diciembre de 1923 en <button type="button" class="timeline-detail-geolink" data-region="Napoli" data-country="Italia">Napoli</button> (Nápoles), Italia, pero llega a <button type="button" class="timeline-detail-geolink" data-region="Buenos Aires" data-country="Argentina">Buenos Aires</button> con apenas seis meses de edad y se forma enteramente ahí. Estudia primero ingeniería electromecánica antes de graduarse en 1948 entre la primera camada de la nueva Facultad de Arquitectura y Urbanismo. Se convierte en el máximo exponente argentino del brutalismo con obras como el <button type="button" class="timeline-detail-geolink" data-region="Banco de Londres y América del Sur" data-country="Argentina">Banco de Londres y América del Sur</button> (1966), de fachada esculpida en concreto expuesto, y la <button type="button" class="timeline-detail-geolink" data-region="Biblioteca Nacional de la República Argentina" data-country="Argentina">Biblioteca Nacional de la República Argentina</button>, un edificio elevado sobre pilotes que domina el barrio de Recoleta desde los años setenta. También pinta y expone como artista plástico durante toda su vida, cruzando constantemente arquitectura y arte. Muere en Buenos Aires el 11 de abril de 2013, a los 89 años, considerado el arquitecto argentino más importante del siglo XX.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Testa se hubiera quedado en la ingeniería electromecánica, la carrera que empezó a estudiar primero?",
      answer:
        "Argentina habría perdido al arquitecto que le dio al brutalismo mundial dos de sus obras más citadas —el Banco de Londres y la Biblioteca Nacional—. Es revelador que haya empezado por la ingeniería: esa formación técnica es visible en cada estructura suya, esculpida en concreto como si el material mismo fuera el argumento del edificio."
    }
  },
  {
    id: "meneses-catedral-caracas-1771",
    year: 1771,
    title: "1771: Francisco Andrés de Meneses y la fachada de la Catedral de Caracas",
    author: "Francisco Andrés de Meneses",
    country: "Venezuela",
    region: "Caracas",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "De la arquitectura colonial venezolana sobreviven muy pocos nombres propios: la mayoría de sus templos y casonas se atribuyen a maestros de obra anónimos o a frailes constructores. Francisco Andrés de Meneses es una de las pocas excepciones documentadas. En 1771 firma la fachada de la Catedral de Caracas, reconstruida más de un siglo antes por Juan de Medina tras el terremoto de 1641 que derribó el templo original. La catedral, de planta basilical con cinco naves separadas por columnas octogonales de capiteles compuestos, guarda hoy la capilla colonial de la Trinidad, donde descansan los restos de los padres y la esposa de Simón Bolívar — un edificio, y una fachada, que sobrevivieron para presenciar el nacimiento de la nación que Caracas terminaría por encabezar.",
    descriptionHtml:
      'De la arquitectura colonial venezolana sobreviven muy pocos nombres propios: la mayoría de sus templos y casonas se atribuyen a maestros de obra anónimos o a frailes constructores. Francisco Andrés de Meneses es una de las pocas excepciones documentadas. En 1771 firma la fachada de la <button type="button" class="timeline-detail-geolink" data-region="Catedral de Caracas" data-country="Venezuela">Catedral de Caracas</button>, reconstruida más de un siglo antes por Juan de Medina tras el terremoto de 1641 que derribó el templo original. La catedral, de planta basilical con cinco naves separadas por columnas octogonales de capiteles compuestos, guarda hoy la capilla colonial de la Trinidad, donde descansan los restos de los padres y la esposa de Simón Bolívar — un edificio, y una fachada, que sobrevivieron para presenciar el nacimiento de la nación que Caracas terminaría por encabezar.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el terremoto de 1641 nunca hubiera derribado la catedral original de Caracas?",
      answer:
        "Meneses no habría tenido fachada que firmar en 1771, y la reconstrucción liderada por Juan de Medina —con la que hoy identificamos a la catedral— simplemente no existiría. Es, en cierto modo, gracias a ese desastre que Caracas conserva uno de los pocos nombres propios documentados de toda su arquitectura colonial."
    }
  },
  {
    id: "lesseps-fracaso-panama-1881",
    year: 1881,
    endYear: 1889,
    title: "1881–1889: el fracaso francés de Ferdinand de Lesseps en Panamá",
    author: "Ferdinand de Lesseps",
    country: "Panamá",
    region: "Ciudad de Panamá",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Ferdinand de Lesseps llega a Panamá en 1881 con el prestigio absoluto de haber construido el Canal de Suez una década antes, y con la misma receta: un canal a nivel del mar, sin esclusas. La receta no sobrevive el traslado. La selva panameña opone un terreno volcánico e inestable, lluvias torrenciales que provocan derrumbes constantes en el Corte Culebra, y sobre todo enfermedades tropicales —malaria y fiebre amarilla, cuya transmisión por mosquitos nadie identifica todavía— que matan a cerca de 22,000 trabajadores en apenas ocho años. La Compagnie Universelle du Canal Interocéanique, financiada por cientos de miles de pequeños inversionistas franceses, quiebra en 1889, arrastrando sus ahorros. El colapso destapa el 'Escándalo de Panamá': sobornos a políticos y prensa franceses para ocultar la ruina financiera de la empresa, un fraude por el que el propio Lesseps —junto con su hijo Charles y el ingeniero Gustave Eiffel, contratado para diseñar unas esclusas que nunca llegaron a construirse— es condenado en 1893. La sentencia se anula después por prescripción, pero Lesseps, ya senil y arruinado en su reputación, muere en 1894 sin volver a hablar en público de Panamá.",
    descriptionHtml:
      'Ferdinand de Lesseps llega a <button type="button" class="timeline-detail-geolink" data-region="Ciudad de Panamá" data-country="Panamá">Panamá</button> en 1881 con el prestigio absoluto de haber construido el <button type="button" class="timeline-detail-geolink" data-region="Canal de Suez" data-country="Egipto">Canal de Suez</button> una década antes, y con la misma receta: un canal a nivel del mar, sin esclusas. La receta no sobrevive el traslado. La selva panameña opone un terreno volcánico e inestable, lluvias torrenciales que provocan derrumbes constantes en el <button type="button" class="timeline-detail-geolink" data-region="Corte Culebra" data-country="Panamá">Corte Culebra</button>, y sobre todo enfermedades tropicales —malaria y fiebre amarilla, cuya transmisión por mosquitos nadie identifica todavía— que matan a cerca de 22,000 trabajadores en apenas ocho años. La Compagnie Universelle du Canal Interocéanique, financiada por cientos de miles de pequeños inversionistas franceses, quiebra en 1889, arrastrando sus ahorros. El colapso destapa el \'Escándalo de Panamá\': sobornos a políticos y prensa franceses para ocultar la ruina financiera de la empresa, un fraude por el que el propio Lesseps —junto con su hijo Charles y el ingeniero Gustave Eiffel, contratado para diseñar unas esclusas que nunca llegaron a construirse— es condenado en 1893. La sentencia se anula después por prescripción, pero Lesseps, ya senil y arruinado en su reputación, muere en 1894 sin volver a hablar en público de Panamá.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Lesseps hubiera aceptado desde 1881 construir esclusas en vez de insistir en un canal a nivel del mar?",
      answer:
        "El diseño con esclusas —el mismo que Stevens adoptaría veinticinco años después— pudo haber salvado el proyecto francés, o al menos reducido su costo humano y financiero. Pero Lesseps llegaba de Suez, un canal sin desniveles que nunca necesitó esclusas, y su terquedad en repetir esa fórmula en un terreno completamente distinto es, en el fondo, la causa técnica detrás de las 22,000 muertes y la quiebra de 1889."
    }
  },
  {
    id: "panama-canal-ingenieros-1905",
    year: 1905,
    endYear: 1914,
    title: "1905–1914: los ingenieros que terminaron el Canal de Panamá",
    author: "John Frank Stevens y George Washington Goethals",
    country: "Panamá",
    region: "Ciudad de Panamá",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "No hay un solo 'arquitecto' del Canal de Panamá: hay una sucesión de ingenieros que heredaron, y finalmente resolvieron, el fracaso francés de Ferdinand de Lesseps. Estados Unidos retoma el proyecto en 1904, tras negociar derechos con la recién independizada República de Panamá. En 1905, el ingeniero John Frank Stevens asume como jefe de obra y toma la decisión técnica decisiva: abandonar el canal a nivel del mar y construir, en su lugar, un sistema de esclusas — la solución que finalmente hace viable la obra. Stevens renuncia en 1907 tras chocar con el presidente Theodore Roosevelt, quien nombra en su lugar al coronel George Washington Goethals, ingeniero militar que dirige la construcción hasta su culminación el 15 de agosto de 1914. Ningún francés, y ningún arquitecto en el sentido tradicional, figura en la versión que finalmente funcionó.",
    descriptionHtml:
      'No hay un solo \'arquitecto\' del Canal de <button type="button" class="timeline-detail-geolink" data-region="Ciudad de Panamá" data-country="Panamá">Panamá</button>: hay una sucesión de ingenieros que heredaron, y finalmente resolvieron, el <button type="button" class="timeline-detail-entrylink" data-id="lesseps-fracaso-panama-1881">fracaso francés de Ferdinand de Lesseps</button>. Estados Unidos retoma el proyecto en 1904, tras negociar derechos con la recién independizada República de Panamá. En 1905, el ingeniero John Frank Stevens asume como jefe de obra y toma la decisión técnica decisiva: abandonar el canal a nivel del mar y construir, en su lugar, un sistema de esclusas — la solución que finalmente hace viable la obra. Stevens renuncia en 1907 tras chocar con el presidente Theodore Roosevelt, quien nombra en su lugar al coronel George Washington Goethals, ingeniero militar que dirige la construcción hasta su culminación el 15 de agosto de 1914. Ningún francés, y ningún arquitecto en el sentido tradicional, figura en la versión que finalmente funcionó.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Stevens nunca hubiera abandonado el diseño de canal a nivel del mar heredado de los franceses?",
      answer:
        "El proyecto estadounidense probablemente habría repetido el fracaso francés: la geografía panameña, con su terreno inestable y sus lluvias torrenciales, hacía casi imposible un canal sin desniveles. La decisión de Stevens de construir esclusas —impopular en su momento, porque significaba admitir que el plan original era inviable— es, en retrospectiva, la que salvó la obra entera."
    }
  },
  {
    id: "ramirez-vazquez-arquitecto-1919",
    year: 1919,
    endYear: 2013,
    title: "1919–2013: Pedro Ramírez Vázquez, el arquitecto del México moderno",
    author: "Pedro Ramírez Vázquez",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Pedro Ramírez Vázquez nace el 16 de abril de 1919 en la Ciudad de México y estudia arquitectura en la UNAM, donde después da clases de diseño y planificación urbana. Fundador y primer rector de la Universidad Autónoma Metropolitana, y secretario de Asentamientos Humanos y Obras Públicas entre 1976 y 1982, su obra construida define buena parte del perfil monumental de la capital mexicana del siglo XX: el Museo Nacional de Antropología (1964), el Estadio Azteca (1966) —sede de dos finales de Copa del Mundo, 1970 y 1986—, la nueva Basílica de Guadalupe (1976) y el Palacio Legislativo de San Lázaro. Como presidente del comité organizador de los Juegos Olímpicos de México 1968, supervisa además el diseño gráfico e imagen visual de esos juegos, uno de los programas de identidad más influyentes en la historia del diseño olímpico. Muere en la Ciudad de México el 16 de abril de 2013, el día de su noventa y cuatro cumpleaños.",
    descriptionHtml:
      'Pedro Ramírez Vázquez nace el 16 de abril de 1919 en la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button> y estudia arquitectura en la UNAM, donde después da clases de diseño y planificación urbana. Fundador y primer rector de la Universidad Autónoma Metropolitana, y secretario de Asentamientos Humanos y Obras Públicas entre 1976 y 1982, su obra construida define buena parte del perfil monumental de la capital mexicana del siglo XX: el <button type="button" class="timeline-detail-geolink" data-region="Museo Nacional de Antropología" data-country="México">Museo Nacional de Antropología</button> (1964), el <button type="button" class="timeline-detail-geolink" data-region="Estadio Azteca" data-country="México">Estadio Azteca</button> (1966) —sede de dos finales de Copa del Mundo, 1970 y 1986—, la nueva <button type="button" class="timeline-detail-geolink" data-region="Basílica de Guadalupe" data-country="México">Basílica de Guadalupe</button> (1976) y el <button type="button" class="timeline-detail-geolink" data-region="Palacio Legislativo de San Lázaro" data-country="México">Palacio Legislativo de San Lázaro</button>. Como presidente del comité organizador de los Juegos Olímpicos de México 1968, supervisa además el diseño gráfico e imagen visual de esos juegos, uno de los programas de identidad más influyentes en la historia del diseño olímpico. Muere en la Ciudad de México el 16 de abril de 2013, el día de su noventa y cuatro cumpleaños.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Ramírez Vázquez nunca hubiera sido designado presidente del comité organizador de México 1968?",
      answer:
        "Habría seguido siendo un arquitecto influyente por sus edificios —el Museo de Antropología, el Estadio Azteca—, pero sin la plataforma que lo llevó a diseñar también la identidad visual completa de unos Juegos Olímpicos, uno de los primeros programas de diseño gráfico integral de la historia. Esa doble faceta, arquitecto y diseñador de sistemas visuales, es lo que distingue su legado del de cualquier otro arquitecto mexicano de su generación."
    }
  },
  {
    id: "kalach-biblioteca-vasconcelos-2006",
    year: 2006,
    title: "2006: la Biblioteca Vasconcelos, la más famosa de México",
    author: "Alberto Kalach",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "El arquitecto mexicano Alberto Kalach gana en 2003 el concurso internacional para diseñar la nueva Biblioteca Vasconcelos, con más de 560 propuestas presentadas por estudios de todo el mundo. El edificio, inaugurado en mayo de 2006 al norte de la Ciudad de México, integra una biblioteca pública con un jardín botánico en 44,000 metros cuadrados, convirtiéndola en la más grande de América Latina. Su estructura de acero y vidrio suspende los estantes de libros en el aire, en niveles que se entrecruzan bajo una luz natural filtrada por todo el techo — un diseño que The Guardian incluiría después entre las 25 mejores obras de arquitectura del siglo XXI. Bautizada en honor a José Vasconcelos, el educador que fundó la Secretaría de Educación Pública y impulsó las bibliotecas públicas mexicanas del siglo XX, la Vasconcelos se convierte casi de inmediato en la biblioteca más reconocible del país.",
    descriptionHtml:
      'El arquitecto mexicano Alberto Kalach gana en 2003 el concurso internacional para diseñar la nueva <button type="button" class="timeline-detail-geolink" data-region="Biblioteca Vasconcelos" data-country="México">Biblioteca Vasconcelos</button>, con más de 560 propuestas presentadas por estudios de todo el mundo. El edificio, inaugurado en mayo de 2006 al norte de la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, integra una biblioteca pública con un jardín botánico en 44,000 metros cuadrados, convirtiéndola en la más grande de América Latina. Su estructura de acero y vidrio suspende los estantes de libros en el aire, en niveles que se entrecruzan bajo una luz natural filtrada por todo el techo — un diseño que The Guardian incluiría después entre las 25 mejores obras de arquitectura del siglo XXI. Bautizada en honor a José Vasconcelos, el educador que fundó la Secretaría de Educación Pública y impulsó las bibliotecas públicas mexicanas del siglo XX, la Vasconcelos se convierte casi de inmediato en la biblioteca más reconocible del país.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si el concurso de 2003 lo hubiera ganado uno de los más de 560 estudios internacionales en vez de Alberto Kalach?",
      answer:
        "México habría tenido, casi con certeza, una gran biblioteca de todos modos —pero probablemente diseñada desde una sensibilidad ajena al paisaje y la luz del Valle de México. La decisión del jurado de premiar a un arquitecto mexicano formado ahí mismo es, en parte, lo que explica por qué el edificio se siente tan integrado a su entorno, y no como un objeto importado."
    }
  },
  {
    id: "recinos-arquitecto-guatemala-1928",
    year: 1928,
    endYear: 2011,
    title: "1928–2011: Efraín Recinos, el mejor arquitecto de Guatemala",
    author: "Efraín Recinos",
    country: "Guatemala",
    region: "Ciudad de Guatemala",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "Efraín Recinos nace el 15 de mayo de 1928 en Quetzaltenango y se forma como arquitecto, pero también como muralista, pintor y escultor — una versatilidad que define toda su obra posterior. En 1971 recibe el encargo de diseñar el Gran Teatro Nacional de Guatemala sobre la colina donde antes se alzaba el fuerte de San José; el proyecto, interrumpido por vaivenes políticos y la muerte del arquitecto original a cargo, se materializa finalmente bajo la visión de Recinos y se inaugura en 1978 como el Centro Cultural Miguel Ángel Asturias. La estructura blanca, construida sobre la colina para evocar un jaguar visto desde el aire, funde formas orgánicas y simbolismo maya con el lenguaje del concreto moderno, convirtiéndose en el ícono cultural más reconocible del país. Muere en la Ciudad de Guatemala el 2 de octubre de 2011, a los 83 años, considerado el genio universal de la arquitectura guatemalteca.",
    descriptionHtml:
      'Efraín Recinos nace el 15 de mayo de 1928 en <button type="button" class="timeline-detail-geolink" data-region="Quetzaltenango" data-country="Guatemala">Quetzaltenango</button> y se forma como arquitecto, pero también como muralista, pintor y escultor — una versatilidad que define toda su obra posterior. En 1971 recibe el encargo de diseñar el <button type="button" class="timeline-detail-geolink" data-region="Centro Cultural Miguel Ángel Asturias" data-country="Guatemala">Gran Teatro Nacional de Guatemala</button> sobre la colina donde antes se alzaba el fuerte de San José; el proyecto, interrumpido por vaivenes políticos y la muerte del arquitecto original a cargo, se materializa finalmente bajo la visión de Recinos y se inaugura en 1978 como el Centro Cultural Miguel Ángel Asturias. La estructura blanca, construida sobre la colina para evocar un jaguar visto desde el aire, funde formas orgánicas y simbolismo maya con el lenguaje del concreto moderno, convirtiéndose en el ícono cultural más reconocible del país. Muere en la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de Guatemala" data-country="Guatemala">Ciudad de Guatemala</button> el 2 de octubre de 2011, a los 83 años, considerado el genio universal de la arquitectura guatemalteca.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Recinos hubiera diseñado el Teatro Nacional siguiendo un estilo internacional genérico, sin las referencias mayas?",
      answer:
        "Guatemala habría tenido un teatro funcional más, indistinguible de cualquier centro cultural de la época en otras capitales latinoamericanas. Al esculpir la colina en forma de jaguar y tejer simbolismo maya en el concreto, Recinos convirtió un encargo institucional en un monumento a la identidad nacional — la razón por la que el edificio, y no solo su función, se volvió irremplazable."
    }
  },
  {
    id: "lei-wei-binaes-2023",
    year: 2023,
    title: "2023: la nueva Biblioteca Nacional de El Salvador",
    author: "Lei Wei",
    country: "El Salvador",
    region: "San Salvador",
    type: ICON_TYPE.VISION,
    types: [ICON_TYPE.VISION, ICON_TYPE.HISTORY],
    description:
      "El arquitecto chino Lei Wei, del Instituto Zhongnan de Diseño Arquitectónico (CSADI), diseña la nueva Biblioteca Nacional de El Salvador (BINAES), reconstruida con cooperación del gobierno de China e inaugurada el 14 de noviembre de 2023 frente a la Catedral Metropolitana y el Palacio Nacional, en el Centro Histórico de San Salvador. El edificio de siete niveles y 24,000 metros cuadrados, financiado en 54 de sus 64 millones de dólares por el gobierno chino, tiene capacidad para 360,000 libros e incluye auditorios, una colección nacional de arte y el Archivo General de la Nación, antes alojado en el Palacio Nacional. Es, hasta ahora, el proyecto arquitectónico más significativo construido en El Salvador durante el gobierno de Nayib Bukele, y el símbolo más visible de la cooperación china en la región.",
    descriptionHtml:
      'El arquitecto chino Lei Wei, del Instituto Zhongnan de Diseño Arquitectónico (CSADI), diseña la nueva <button type="button" class="timeline-detail-geolink" data-region="Biblioteca Nacional de El Salvador" data-country="El Salvador">Biblioteca Nacional de El Salvador</button> (BINAES), reconstruida con cooperación del gobierno de <button type="button" class="timeline-detail-geolink" data-country="China">China</button> e inaugurada el 14 de noviembre de 2023 frente a la <button type="button" class="timeline-detail-geolink" data-region="Catedral Metropolitana de San Salvador" data-country="El Salvador">Catedral Metropolitana</button> y el <button type="button" class="timeline-detail-geolink" data-region="Palacio Nacional de El Salvador" data-country="El Salvador">Palacio Nacional</button>, en el Centro Histórico de <button type="button" class="timeline-detail-geolink" data-region="San Salvador" data-country="El Salvador">San Salvador</button>. El edificio de siete niveles y 24,000 metros cuadrados, financiado en 54 de sus 64 millones de dólares por el gobierno chino, tiene capacidad para 360,000 libros e incluye auditorios, una colección nacional de arte y el Archivo General de la Nación, antes alojado en el Palacio Nacional. Es, hasta ahora, el proyecto arquitectónico más significativo construido en El Salvador durante el gobierno de Nayib Bukele, y el símbolo más visible de la cooperación china en la región.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si El Salvador hubiera financiado la nueva Biblioteca Nacional con fondos propios en vez de cooperación china?",
      answer:
        "El proyecto probablemente habría tomado más tiempo, o se habría reducido en escala, dado el costo de 64 millones de dólares para un país con otras prioridades presupuestarias urgentes. La BINAES es, en ese sentido, tanto un edificio como una declaración geopolítica: la prueba física de que China se ha convertido en un actor de infraestructura en Centroamérica."
    }
  },
  {
    id: "nazca-lineas-descubrimiento-1927",
    year: 1927,
    endYear: 1994,
    title: "1927–1994: el descubrimiento científico de las líneas de Nazca",
    author: "Hito histórico",
    country: "Perú",
    region: "Nazca",
    type: ICON_TYPE.HISTORY,
    description:
      "El arqueólogo peruano Toribio Mejía Xesspe redescubre las líneas de Nazca en 1926 o 1927, mientras camina por los cerros que dominan la pampa y nota los trazos rectos que después identificaría como 'caminos sagrados'; junto a Julio C. Tello, realiza en 1932 las primeras investigaciones científicas del sitio. En 1939 el científico estadounidense Paul Kosok llega a estudiarlas y, en la noche del solsticio de invierno de junio de 1941, observa que el sol poniente se alinea casi perfectamente con el final de una de las líneas más largas — la primera pista de que los geoglifos podían tener un propósito astronómico. Ese mismo año conoce a la matemática alemana María Reiche, huida de la Alemania nazi, quien lo acompaña a Nazca y dedica el resto de su vida, hasta su muerte en 1998, a medir, documentar y defender las líneas de la destrucción. En 1994 la UNESCO declara las líneas de Nazca Patrimonio de la Humanidad, formalizando lo que Mejía Xesspe había intuido casi setenta años antes.",
    descriptionHtml:
      'El arqueólogo peruano Toribio Mejía Xesspe redescubre las líneas de <button type="button" class="timeline-detail-geolink" data-region="Nazca" data-country="Perú">Nazca</button> en 1926 o 1927, mientras camina por los cerros que dominan la pampa y nota los trazos rectos que después identificaría como \'caminos sagrados\'; junto a Julio C. Tello, realiza en 1932 las primeras investigaciones científicas del sitio. En 1939 el científico estadounidense Paul Kosok llega a estudiarlas y, en la noche del solsticio de invierno de junio de 1941, observa que el sol poniente se alinea casi perfectamente con el final de una de las líneas más largas — la primera pista de que los geoglifos podían tener un propósito astronómico. Ese mismo año conoce a la matemática alemana María Reiche, huida de la Alemania nazi, quien lo acompaña a Nazca y dedica el resto de su vida, hasta su muerte en 1998, a medir, documentar y defender las líneas de la destrucción. En 1994 la UNESCO declara las líneas de Nazca Patrimonio de la Humanidad, formalizando lo que Mejía Xesspe había intuido casi setenta años antes.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si María Reiche nunca hubiera llegado a Nazca en 1939?",
      answer:
        "Las líneas habrían quedado documentadas, pero probablemente no protegidas: durante décadas, Reiche vivió casi en soledad en el desierto, pagando de su propio bolsillo a vigilantes para impedir que caminos y vehículos las destruyeran antes de que el Estado peruano o la UNESCO las reconocieran oficialmente. Sin su vigilancia obsesiva, buena parte de los geoglifos que hoy sobreviven podrían haberse perdido antes de 1994."
    }
  },
  {
    id: "galapagos-historia-darwin-1535",
    year: 1535,
    // Real date; nudged track position only — see trackYear comment in
    // timeline.js. Re-spaced in 2026, see
    // afonso-i-kongo-nzinga-mbemba-1509. Re-spaced again to make room for
    // maquiavelo-principe-1513, see that entry's trackYear comment.
    trackYear: 1551.32,
    endYear: 1835,
    title: "1535–1835: Galápagos, de Tomás de Berlanga a Charles Darwin",
    author: "Hito histórico",
    country: "Ecuador",
    region: "Galápagos",
    type: ICON_TYPE.HISTORY,
    description:
      "El obispo español Tomás de Berlanga se convierte, el 10 de marzo de 1535, en el primer europeo en desembarcar en las islas Galápagos, desviado de su ruta entre Panamá y Perú por una calma chicha y las corrientes del Pacífico. Confunde unas piedras brillantes de las playas con diamantes y ámbar, y concluye que la tierra, demasiado pedregosa, no sirve para cultivar nada — un archipiélago que España, durante los tres siglos siguientes, prácticamente ignora. Exactamente trescientos años después, en 1835, el HMS Beagle llega a las islas con el naturalista británico Charles Darwin a bordo. Ahí observa que los pinzones tienen picos distintos según la isla que habitan, pese a ser especies muy similares entre sí — la primera pista de que las especies no eran fijas, sino que se transformaban para adaptarse a su entorno, semilla de la teoría de la evolución que Darwin publicaría casi un cuarto de siglo después en El origen de las especies. Ecuador anexa el archipiélago en 1832, apenas tres años antes de la visita de Darwin, y en 1959, para conmemorar el primer centenario de esa publicación, el gobierno ecuatoriano decreta la creación del Parque Nacional Galápagos — el primero del país.",
    descriptionHtml:
      'El obispo español Tomás de Berlanga se convierte, el 10 de marzo de 1535, en el primer europeo en desembarcar en las islas <button type="button" class="timeline-detail-geolink" data-region="Galápagos" data-country="Ecuador">Galápagos</button>, desviado de su ruta entre <button type="button" class="timeline-detail-geolink" data-country="Panamá">Panamá</button> y <button type="button" class="timeline-detail-geolink" data-country="Perú">Perú</button> por una calma chicha y las corrientes del Pacífico. Confunde unas piedras brillantes de las playas con diamantes y ámbar, y concluye que la tierra, demasiado pedregosa, no sirve para cultivar nada — un archipiélago que España, durante los tres siglos siguientes, prácticamente ignora. Exactamente trescientos años después, en 1835, el HMS Beagle llega a las islas con el naturalista británico Charles Darwin a bordo. Ahí observa que los pinzones tienen picos distintos según la isla que habitan, pese a ser especies muy similares entre sí — la primera pista de que las especies no eran fijas, sino que se transformaban para adaptarse a su entorno, semilla de la teoría de la evolución que Darwin publicaría casi un cuarto de siglo después en El origen de las especies. <button type="button" class="timeline-detail-geolink" data-country="Ecuador">Ecuador</button> anexa el archipiélago en 1832, apenas tres años antes de la visita de Darwin, y en 1959, para conmemorar el primer centenario de esa publicación, el gobierno ecuatoriano decreta la creación del Parque Nacional Galápagos — el primero del país.',
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Tomás de Berlanga hubiera fundado una colonia en Galápagos en 1535, en vez de descartarlas como tierra inútil?",
      answer:
        "El archipiélago habría tenido una historia colonial temprana como la de tantas otras islas del Pacífico, con la fauna endémica —tortugas gigantes, iguanas marinas, pinzones— alterada o extinta siglos antes de que Darwin pudiera observarla intacta en 1835. Es, en buena medida, gracias al desinterés español que Galápagos llegó al siglo XIX casi como un laboratorio evolutivo virgen, listo para que un joven naturalista cambiara para siempre la biología."
    }
  },
  {
    id: "eibl-eibesfeldt-galapagos-1957",
    year: 1957,
    endYear: 1959,
    title: "1957–1959: Eibl-Eibesfeldt y la creación del Parque Nacional Galápagos",
    author: "Irenäus Eibl-Eibesfeldt",
    country: "Ecuador",
    region: "Galápagos",
    type: ICON_TYPE.HISTORY,
    description:
      "No hay un arquitecto detrás del Parque Nacional Galápagos —nadie lo diseñó como se diseña un edificio—, pero sí hay un responsable directo de que exista, casi un siglo después de que Charles Darwin desembarcara en las mismas islas. En 1957, la UNESCO y la Unión Internacional para la Conservación de la Naturaleza envían al etólogo austriaco Irenäus Eibl-Eibesfeldt, junto al biólogo estadounidense Robert Bowman, a evaluar el estado del archipiélago y buscar un lugar donde instalar una estación científica. Eibl-Eibesfeldt regresa a Europa convencido de que 'solo un control riguroso salvaría a esta fauna única de la persecución', y envía un memorando proponiendo la creación de una estación biológica en Galápagos. Su expedición y su informe empujan al gobierno de Ecuador a decretar, el 4 de julio de 1959, la creación del Parque Nacional Galápagos, el primero del país — el mismo año en que, en Bruselas, se funda la Fundación Charles Darwin como su asesora científica. Sin el viaje de Eibl-Eibesfeldt, según reconoce hoy la propia Fundación, ninguna de las dos cosas existiría.",
    descriptionHtml:
      'No hay un arquitecto detrás del Parque Nacional Galápagos —nadie lo diseñó como se diseña un edificio—, pero sí hay un responsable directo de que exista, casi un siglo después de que <button type="button" class="timeline-detail-entrylink" data-id="galapagos-historia-darwin-1535">Charles Darwin</button> desembarcara en las mismas islas. En 1957, la UNESCO y la Unión Internacional para la Conservación de la Naturaleza envían al etólogo austriaco Irenäus Eibl-Eibesfeldt, junto al biólogo estadounidense Robert Bowman, a evaluar el estado del archipiélago y buscar un lugar donde instalar una estación científica. Eibl-Eibesfeldt regresa a Europa convencido de que \'solo un control riguroso salvaría a esta fauna única de la persecución\', y envía un memorando proponiendo la creación de una estación biológica en <button type="button" class="timeline-detail-geolink" data-region="Galápagos" data-country="Ecuador">Galápagos</button>. Su expedición y su informe empujan al gobierno de Ecuador a decretar, el 4 de julio de 1959, la creación del Parque Nacional Galápagos, el primero del país — el mismo año en que, en Bruselas, se funda la Fundación Charles Darwin como su asesora científica. Sin el viaje de Eibl-Eibesfeldt, según reconoce hoy la propia Fundación, ninguna de las dos cosas existiría.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si la UNESCO y la UICN nunca hubieran enviado a Eibl-Eibesfeldt a Galápagos en 1957?",
      answer:
        "El archipiélago habría seguido expuesto, sin control alguno, a la caza de tortugas, la introducción de especies invasoras y la colonización agrícola que ya avanzaba sobre varias islas en los años cincuenta. La ventana que separó el centenario de Darwin en 1959 de un archipiélago todavía intacto pudo haberse cerrado sin que nadie con autoridad científica internacional estuviera ahí para documentarlo y dar la alarma a tiempo."
    }
  },
  {
    id: "ignacio-manuel-altamirano-masoneria-1878",
    year: 1878,
    month: 1,
    day: 11,
    title: "11 de enero de 1878: Altamirano, gran maestro masón",
    author: "Ignacio Manuel Altamirano",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ESOTERIC],
    description:
      "El 11 de enero de 1878, Ignacio Manuel Altamirano fue elegido gran maestro de la Gran Logia Valle de México. Escritor indígena nacido en Tixtla, combatiente liberal, maestro y autor de Clemencia y El Zarco, había fundado la revista El Renacimiento. En 1879 reunió miembros de treinta y nueve logias, creó el Supremo Consejo del Gran Oriente de los Estados Unidos Mexicanos y se proclamó inspector general del grado 33. Su pertenencia masónica está documentada; no existe evidencia de que integrara los Illuminati históricos de Baviera. Esta etiqueta agrupa redes iniciáticas verificables, no teorías conspirativas.",
    descriptionHtml:
      'El 11 de enero de 1878, en la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, Ignacio Manuel Altamirano fue elegido gran maestro de la Gran Logia Valle de México. Escritor indígena nacido en <button type="button" class="timeline-detail-geolink" data-region="Tixtla, Guerrero" data-country="México">Tixtla</button>, combatiente liberal, maestro y autor de <em>Clemencia</em> y <em>El Zarco</em>, había fundado la revista <em>El Renacimiento</em>. En 1879 reunió miembros de treinta y nueve logias, creó el Supremo Consejo del Gran Oriente de los Estados Unidos Mexicanos y se proclamó inspector general del grado 33. Su pertenencia masónica está documentada; no existe evidencia de que integrara los Illuminati históricos de Baviera. Esta etiqueta agrupa redes iniciáticas verificables, no teorías conspirativas.',
    esotericNote:
      "Esotérico funciona como una ruta editorial para estudiar corrientes masónicas, iniciáticas y esotéricas documentadas. La etiqueta no afirma por sí sola pertenencia a sociedades secretas específicas ni valida relatos conspirativos.",
    butterfly: {
      prompt: "¿Qué habría cambiado si Altamirano hubiera limitado su proyecto liberal a la literatura y evitado las redes masónicas?",
      answer:
        "Habría conservado su influencia como escritor y educador, pero habría perdido una estructura nacional de sociabilidad política. Las logias conectaban a intelectuales, militares y funcionarios en un México donde las instituciones republicanas todavía estaban consolidándose."
    }
  },
  {
    id: "doss-v-bernal-fullerton-1943",
    year: 1943,
    month: 9,
    day: 21,
    title: "21 de septiembre de 1943: Doss v. Bernal",
    author: "Alex y Esther Bernal",
    country: "Estados Unidos",
    region: "Casa Bernal, Fullerton",
    type: ICON_TYPE.HISTORY,
    description:
      "El 21 de septiembre de 1943, el juez Albert F. Ross falló a favor de Alex y Esther Bernal, una familia mexicoamericana demandada por vecinos que pretendían expulsarla de su casa en Fullerton mediante un pacto inmobiliario de 1923 que excluía a “mexicanos” y personas no blancas. Tras un juicio de cuatro días, Ross consideró discriminatoria e inconstitucional su aplicación. El 15 de noviembre reafirmó la decisión. Doss v. Bernal fue una victoria temprana contra la segregación residencial, cinco años antes de que la Corte Suprema declarara inaplicables los pactos raciales en Shelley v. Kraemer.",
    descriptionHtml:
      'El 21 de septiembre de 1943, el juez Albert F. Ross falló a favor de Alex y Esther Bernal, una familia mexicoamericana demandada por vecinos que pretendían expulsarla de su casa en <button type="button" class="timeline-detail-geolink" data-region="Casa Bernal, Fullerton" data-country="Estados Unidos">Fullerton</button> mediante un pacto inmobiliario de 1923 que excluía a “mexicanos” y personas no blancas. Tras un juicio de cuatro días, Ross consideró discriminatoria e inconstitucional su aplicación. El 15 de noviembre reafirmó la decisión. <em>Doss v. Bernal</em> fue una victoria temprana contra la segregación residencial, cinco años antes de que la <button type="button" class="timeline-detail-geolink" data-region="Washington, D.C." data-country="Estados Unidos">Corte Suprema</button> declarara inaplicables los pactos raciales en <em>Shelley v. Kraemer</em>.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si los Bernal hubieran abandonado su casa en vez de enfrentar el pacto racial ante los tribunales?",
      answer:
        "El pacto habría seguido operando sin oposición en Sunnyside y una de las primeras victorias judiciales mexicoamericanas contra la segregación residencial habría desaparecido. Su resistencia también ayudó a formar los argumentos y la experiencia legal que reaparecerían en otras luchas por los derechos civiles."
    }
  },
  {
    id: "reyna-angelica-marroquin-1969",
    year: 1969,
    month: 1,
    endYear: 1999,
    title: "1969–1999: Reyna Angélica Marroquín y el barril sellado",
    author: "Reyna Angélica Marroquín",
    country: "Estados Unidos",
    region: "Jericho, Nueva York",
    type: ICON_TYPE.CONFLICT,
    sensitive: true,
    descriptionWordLimit: 120,
    description:
      "En enero de 1969 desapareció Reyna Angélica Marroquín, inmigrante salvadoreña de 27 años, embarazada casi a término, que trabajaba en Melrose Plastics, una fábrica de flores artificiales de Manhattan. El 2 de septiembre de 1999 encontraron sus restos dentro de un barril sellado bajo una casa de Jericho, NY; la autopsia determinó que había muerto por golpes en la cabeza que había pertenecido al copropietario de la empresa, Howard Elkins. Una libreta deteriorada permitió identificarla; un tallo plástico, tinte y bolitas de poliestireno conectaron el barril con la fábrica. Interrogado en Boca Ratón, Elkins negó saber del barril y murió por suicidio al día siguiente. El ADN confirmó que era el padre del feto. Fue considerado sospechoso, pero nunca acusado.",
    descriptionHtml:
      'En enero de 1969 desapareció Reyna Angélica Marroquín, inmigrante de <button type="button" class="timeline-detail-geolink" data-country="El Salvador">El Salvador</button> de 27 años, embarazada casi a término, que trabajaba en <button type="button" class="timeline-detail-geolink" data-region="Melrose Plastics, Manhattan" data-country="Estados Unidos">Melrose Plastics</button>, una fábrica de flores artificiales de Manhattan. El 2 de septiembre de 1999 encontraron sus restos dentro de un barril sellado bajo una casa de <button type="button" class="timeline-detail-geolink" data-region="Jericho, Nueva York" data-country="Estados Unidos">Jericho, NY</button>; la autopsia determinó que había muerto por golpes en la cabeza que había pertenecido al copropietario de la empresa, Howard Elkins. Una libreta deteriorada permitió identificarla; un tallo plástico, tinte y bolitas de poliestireno conectaron el barril con la fábrica. Interrogado en <button type="button" class="timeline-detail-geolink" data-region="Boca Ratón, Florida" data-country="Estados Unidos">Boca Ratón</button>, Elkins negó saber del barril y murió por suicidio al día siguiente. El ADN confirmó que era el padre del feto. Fue considerado sospechoso, pero nunca acusado.',
    butterfly: {
      prompt: "¿Qué habría ocurrido si la libreta de Reyna no hubiera conservado datos legibles después de treinta años?",
      answer:
        "Probablemente habría permanecido sin nombre durante mucho más tiempo. Su identificación muestra cómo objetos personales mínimos pueden devolver identidad e historia a una víctima, incluso cuando el tiempo, el desplazamiento migratorio y el ocultamiento borraron casi todas las demás huellas."
    }
  },
  {
    id: "menchaca-orozco-compton-2021",
    year: 2021,
    month: 11,
    day: 14,
    title: "14 de noviembre de 2021: doble homicidio en Compton",
    author: "Javier Carachure Menchaca y Juan Antonio Orozco",
    country: "Estados Unidos",
    region: "Bullis Road y Pine Avenue, Compton",
    type: ICON_TYPE.HISTORY,
    sensitive: true,
    description:
      "El 14 de noviembre de 2021, hacia las 12:58 a. m., Javier Carachure Menchaca, de 19 años, y Juan Antonio Orozco, de 22, fueron asesinados a tiros mientras estaban dentro de un vehículo durante una toma callejera en el cruce de Bullis Road y Pine Avenue, en Compton. Entre cien y trescientas personas presenciaron el evento, pero ninguna información condujo a identificar a los responsables. Años después, el caso continúa abierto. El condado de Los Ángeles ofrece una recompensa de 60,000 dólares por información que permita detener y condenar a los culpables.",
    descriptionHtml:
      'El 14 de noviembre de 2021, hacia las 12:58 a. m., Javier Carachure Menchaca, de 19 años, y Juan Antonio Orozco, de 22, fueron asesinados a tiros mientras estaban dentro de un vehículo durante una toma callejera en el cruce de <button type="button" class="timeline-detail-geolink" data-region="Bullis Road y Pine Avenue, Compton" data-country="Estados Unidos">Bullis Road y Pine Avenue, en Compton</button>. Entre cien y trescientas personas presenciaron el evento, pero ninguna información condujo a identificar a los responsables. Años después, el caso continúa abierto. El <button type="button" class="timeline-detail-geolink" data-region="Condado de Los Ángeles" data-country="Estados Unidos">condado de Los Ángeles</button> ofrece una recompensa de 60,000 dólares por información que permita detener y condenar a los culpables.',
    butterfly: {
      prompt: "¿Qué habría cambiado si una sola persona entre los numerosos testigos hubiera aportado una pista decisiva?",
      answer:
        "No puede saberse si una declaración habría resuelto el caso, pero el silencio colectivo dejó a dos familias sin respuestas y muestra cómo el miedo, la desconfianza o la indiferencia pueden impedir que una comunidad transforme lo presenciado en justicia."
    }
  },
  {
    id: "paola-clouatre-ice-2025",
    year: 2025,
    month: 5,
    day: 27,
    title: "27 de mayo de 2025: ICE separa a Paola Clouatre de sus hijos",
    author: "Paola Clouatre",
    country: "Estados Unidos",
    region: "Nueva Orleans",
    type: ICON_TYPE.HISTORY,
    types: [ICON_TYPE.HISTORY, ICON_TYPE.ECHO],
    sensitive: true,
    description:
      "El 27 de mayo de 2025, agentes de ICE detuvieron en Nueva Orleans a Paola Clouatre, mexicana de 25 años, durante una cita para obtener residencia permanente. Fue separada de su hija estadounidense de tres meses, todavía lactante, y de su hijo de casi dos años. Permaneció dos meses en un centro migratorio de Luisiana; su esposo viajaba ocho horas para que pudiera amamantar durante visitas semanales. Un juez suspendió su deportación y fue liberada en julio. El caso documenta cómo la detención migratoria puede romper físicamente el vínculo entre madre e hijos.",
    descriptionHtml:
      'El 27 de mayo de 2025, agentes de ICE detuvieron en <button type="button" class="timeline-detail-geolink" data-region="Nueva Orleans" data-country="Estados Unidos">Nueva Orleans</button> a Paola Clouatre, <button type="button" class="timeline-detail-geolink" data-country="México">mexicana</button> de 25 años, durante una cita para obtener residencia permanente. Fue separada de su hija <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">estadounidense</button> de tres meses, todavía lactante, y de su hijo de casi dos años. Permaneció dos meses en un centro migratorio de <button type="button" class="timeline-detail-geolink" data-region="Luisiana" data-country="Estados Unidos">Luisiana</button>; su esposo viajaba ocho horas para que pudiera amamantar durante visitas semanales. Un juez suspendió su deportación y fue liberada en julio. El caso documenta cómo la detención migratoria puede romper físicamente el vínculo entre madre e hijos.',
    echo: {
      title: "La separación forzada de madres e hijos",
      pairedEntryId: "brevisima-relacion-1542",
      role: "resonancia",
      comparison:
        "No son hechos históricamente equivalentes. Comparten una lógica de poder: una autoridad se atribuye el derecho de romper por la fuerza el vínculo entre una madre racializada y su criatura."
    },
    butterfly: {
      prompt: "¿Qué cambia cuando dos separaciones entre madres e hijos, distantes casi cinco siglos, se leen juntas?",
      answer:
        "La comparación no borra sus contextos ni equipara sus escalas. Permite reconocer una estructura que reaparece: el poder institucional usando la separación familiar contra personas racializadas, y el testimonio público intentando impedir que esa violencia quede normalizada o en silencio."
    }
}
];

/* Sort chronologically once, at load time, so the engine never has to re-sort */
TIMELINE_ENTRIES.sort((a, b) => a.year - b.year);

/* Exported as plain globals (no bundler in this stack) */
window.ERA_BANDS = ERA_BANDS;
window.GLYPH = GLYPH;
window.ICON_TYPE = ICON_TYPE;
window.TIMELINE_ENTRIES = TIMELINE_ENTRIES;
