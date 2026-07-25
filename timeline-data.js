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
    startYear: 700,
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
  HISTORY: "history",       // circle / monument — neon-blue
  MUSIC: "music"            // eighth note — neon-purple
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
    butterfly: {
      prompt: "¿Qué hubiera pasado si Witiza hubiera dejado un heredero indiscutido?",
      answer:
        "Sin la fractura entre partidarios de Witiza y de Rodrigo, el reino visigodo habría enfrentado unido cualquier amenaza externa. La invasión de 711 pudo haber sido rechazada como tantas incursiones anteriores, y la historia de la península ibérica —sin Al-Ándalus, sin Reconquista— sería irreconocible."
    }
  },
  {
    id: "conquista-musulmana-711",
    year: 711,
    title: "711: la conquista musulmana de Hispania",
    author: "Hito histórico",
    country: "España",
    region: "Cádiz",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "Tariq ibn Ziyad cruza el Estrecho de Gibraltar al mando de un ejército mayormente bereber bajo la autoridad del Califato Omeya, aprovechando la crisis sucesoria visigoda desatada tras la muerte del rey Witiza en 710. En julio de 711, en la batalla de Guadalete, las fuerzas del rey Rodrigo son derrotadas y el propio Rodrigo muere en circunstancias inciertas; las crónicas posteriores atribuyen a Julián, gobernador de Ceuta, haber facilitado el cruce musulmán. Córdoba, Toledo y Sevilla caen en rápida sucesión, y hacia 718 la mayor parte de la península está bajo control musulmán, dando origen a Al-Ándalus. La conquista mezcla a las nuevas poblaciones árabes y bereberes musulmanas con la nobleza visigoda, la mayoría hispanorromana y las comunidades judías ya asentadas — sobre un territorio donde, décadas antes (552–624), también había pervivido una franja bizantina en el sur, ya ausente para esta fecha.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Julián de Ceuta no hubiera facilitado el cruce del Estrecho?",
      answer:
        "Tariq ibn Ziyad habría necesitado años, no meses, para reunir la flota y la información necesarias para invadir Hispania. Ese retraso pudo haber dado tiempo al reino visigodo para sanar su fractura interna, y Al-Ándalus —ocho siglos de historia peninsular— quizás nunca habría existido."
    }
  },
  {
    id: "consolidacion-al-andalus-718",
    year: 718,
    title: "718: la conquista musulmana se consolida",
    author: "Hito histórico",
    country: "España",
    region: "Córdoba",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "Reforzado desde 712 por Musa ibn Nusayr, gobernador omeya del norte de África, el ejército musulmán completa la toma de las principales ciudades visigodas: Córdoba, Toledo, Sevilla y Mérida caen en rápida sucesión. Hacia 718, la mayor parte de la península ibérica está bajo dominio musulmán, dando origen formal a Al-Ándalus y marcando el fin del reino visigodo como entidad política.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Musa ibn Nusayr no hubiera enviado refuerzos en 712?",
      answer:
        "Sin ese segundo ejército, la conquista pudo haberse detenido como una incursión más, contenida a las provincias del sur. En vez de ocho siglos de dominio musulmán en la península, Al-Ándalus habría sido apenas una nota al pie en la historia de España."
    }
  },
  {
    id: "pelayo-covadonga-722",
    year: 722,
    title: "722: la batalla de Covadonga",
    author: "Hito histórico",
    country: "España",
    region: "Covadonga",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "Pelayo, antiguo espatario —guardia personal— del rey visigodo Witiza, se retira hacia las montañas de Asturias tras la conquista musulmana de 711, la misma fractura sucesoria que once años antes había debilitado al reino visigodo. Ahí reúne a unos trescientos combatientes astures y visigodos refugiados y, el 28 de mayo de 722, los enfrenta a un destacamento musulmán en un estrecho valle junto a Covadonga. La victoria —modesta en términos militares, inmensa en su peso simbólico— le permite proclamarse primer rey de Asturias, con corte en Cangas de Onís. El pequeño reino que funda nunca cae: se expande hacia León y Castilla en los siglos siguientes, y su línea dinástica llega, casi ocho siglos después, hasta los Reyes Católicos que completan la toma de Granada en 1492 — el mismo año en que termina la historia que Covadonga, según la tradición, empezó.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Pelayo hubiera sido derrotado en Covadonga?",
      answer:
        "Sin ese primer reducto cristiano en el norte, la conquista musulmana de la península pudo haberse consolidado sin oposición organizada durante generaciones más. La tradición historiográfica española —resumida en la célebre frase del historiador Claudio Sánchez-Albornoz, 'sin Covadonga no habría Reconquista'— sostiene que este pequeño enfrentamiento en las montañas asturianas fue la semilla de los casi ocho siglos que, en 1492, terminarían con la toma de Granada."
    }
  },
  {
    id: "quirigua-copan-738",
    year: 738,
    title: "738: Quiriguá derrota y decapita a Copán",
    author: "Hito histórico",
    country: "Guatemala",
    type: ICON_TYPE.CONFLICT,
    description:
      "El 27 de abril de 738, el ejército de Quiriguá embosca y captura al gobernante de Copán, Uaxaclajuun Ubʼaah Kʼawiil ('18 Conejo'), tras quemar las efigies de las deidades patronas de la ciudad. El 3 de mayo es decapitado en un ritual público ordenado por su propio vasallo, Kʼakʼ Tiliw Chan Yopaat — la primera ejecución documentada de un señor maya en activo a manos de uno de sus subordinados. Quiriguá gana con ello el control total de la ruta comercial entre el Caribe y el corazón del mundo maya, mientras Copán entra en un silencio de veinte años sin nuevos monumentos.",
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
    type: ICON_TYPE.HISTORY,
    description:
      "Un ermitaño, Paio (Pelayo), es guiado por una luz en el monte Libredón — de ahí Compostela, campus stellae, 'campo de la estrella' — hasta un antiguo sepulcro. El obispo Teodomiro de Iria Flavia lo identifica como la tumba del apóstol Santiago y avisa al rey Alfonso II de Asturias, quien viaja desde Oviedo para verificarlo y ordena construir una capilla en el lugar. Aquella ruta de Oviedo a Compostela —el Camino Primitivo— se convierte en el origen del Camino de Santiago, uno de los grandes ejes de peregrinación de la cristiandad y una pieza central en la construcción de una identidad cristiana ibérica que, siglos después, alimentaría la ideología de la Reconquista.",
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
    type: ICON_TYPE.HISTORY,
    description:
      "La Estela 11 de Tikal, fechada en 869, es el último monumento tallado por una de las dinastías más poderosas del mundo maya, cuya ciudad había dominado gran parte de las tierras bajas mayas durante más de mil años. Entre 830 y 950, Tikal pierde la mayor parte de su población y su autoridad central se desmorona con rapidez, en uno de los episodios más estudiados del llamado colapso maya clásico.",
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
    type: ICON_TYPE.HISTORY,
    description:
      "El asentamiento en Tula, en el actual estado de Hidalgo, había comenzado ya hacia 700–750, pero es entre 950 y 1000 cuando su centro cívico-religioso, Tula Grande, alcanza su máxima expansión y se convierte en la capital del imperio tolteca. Desde ahí, los toltecas dominarán buena parte del centro de México durante los dos siglos siguientes, hasta que la ciudad es incendiada hacia 1179.",
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
    butterfly: {
      prompt: "¿Qué hubiera pasado si Ocho Venado nunca hubiera forjado su alianza con Cholula?",
      answer:
        "Sin la legitimidad tolteca que le otorgó esa nariguera de turquesa, sus conquistas habrían sido vistas como usurpación regional, no como autoridad real. La historia mixteca —una de las mejor documentadas del mundo prehispánico gracias al Códice Zouche-Nuttall— habría carecido de su protagonista más ambicioso."
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
    title: "1094: El Cid conquista Valencia",
    author: "Anónimo",
    country: "España",
    region: "Valencia",
    flag: "spain-not-latam",
    type: ICON_TYPE.CONFLICT,
    description:
      "Rodrigo Díaz de Vivar —El Cid—, un noble castellano exiliado que había servido incluso a señores musulmanes como mercenario, toma Valencia por cuenta propia el 15 de junio de 1094, tras un asedio iniciado el verano anterior, y gobierna la ciudad como príncipe casi independiente hasta su muerte en 1099. Su figura, ambigua entre la leyenda y la historia, queda inmortalizada en el Cantar de mio Cid, poema épico anónimo copiado por Per Abbat en 1207 —el texto épico más antiguo conservado en castellano—, que sigue al Cid desde su destierro hasta la conquista de Valencia y la restitución de su honor, y el de sus hijas, tras la afrenta de los Infantes de Carrión.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Rodrigo Díaz de Vivar nunca hubiera sido desterrado?",
      answer:
        "Sin el destierro que lo convirtió en mercenario itinerante al servicio de cristianos y musulmanes por igual, El Cid habría sido un noble castellano más, leal y olvidable. Su ambigüedad moral —la que fascina en el Cantar de mio Cid— nace precisamente de esa caída y esa reinvención."
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
    endYear: 1343,
    title: "Libro de buen amor",
    author: "Juan Ruiz, Arcipreste de Hita",
    country: "España",
    region: "Guadalajara",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Obra inclasificable del mester de clerecía en la que Juan Ruiz, Arcipreste de Hita, mezcla autobiografía, fábulas, exempla morales y episodios amorosos cómicos, narrados por un yo poético que oscila entre el 'loco amor' y el 'buen amor'. Se conservan dos redacciones, de 1330 y 1343; Trotaconventos, la alcahueta que guía al narrador, se convertiría en antecedente directo de la picaresca española.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Juan Ruiz hubiera escrito un tratado moral convencional, sin ironía ni ambigüedad?",
      answer:
        "La picaresca española habría perdido a su antepasado más temprano y más extraño. Trotaconventos —la alcahueta que camina la línea entre pecado y comedia— no habría abierto el camino a Celestina, y la literatura española habría tardado más en aprender a reírse de su propia moral."
    }
  },
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
      "Biografía intelectual del rey-poeta de Texcoco, construida a partir de testimonios históricos verosímiles, sin adornos novelescos.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si la obra poética de Nezahualcóyotl se hubiera conservado completa, sin depender de transcripciones posteriores?",
      answer:
        "Tendríamos una voz filosófica prehispánica tan documentada como cualquier poeta europeo de su época, no una reconstrucción parcial hecha por cronistas mestizos generaciones después. El rey-poeta de Texcoco ocuparía en la historia literaria un lugar central, no el de excepción rescatada."
    }
  },
  {
    id: "pachacutec-imperio-inca-1438",
    year: 1438,
    endYear: 1471,
    title: "1438: Pachacútec funda el Imperio Inca",
    author: "Hito histórico",
    country: "Perú",
    region: "Cusco",
    type: ICON_TYPE.HISTORY,
    description:
      "En 1438, con Cusco sitiado y su padre Huiracocha Inca huido de la ciudad, el príncipe Cusi Yupanqui reúne a los pueblos aliados y derrota a los chancas en la llanura de Ichupampa, cerca del río Apurímac. La victoria le gana el trono —y un nuevo nombre: Pachacútec, 'el que transforma la tierra'—. En poco más de tres décadas de reinado convierte el pequeño curacazgo de Cusco en el Tahuantinsuyo, un imperio que llega a extenderse por los Andes desde el actual Ecuador hasta Chile. Rediseña Cusco —según la tradición, con la forma de un puma—, ordena construir Machu Picchu como finca real, formaliza el sistema de trabajo colectivo del mit'a y tiende la red de caminos del Qhapaq Ñan que mantiene unido al imperio. Casi dos siglos después, el cronista mestizo El Inca Garcilaso de la Vega —hijo de una princesa inca y un conquistador español— reconstruiría esta misma historia de memoria en sus Comentarios Reales, entretejiendo la crónica oral incaica con el relato español de la conquista.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si los chancas hubieran tomado el Cusco en 1438?",
      answer:
        "El pequeño curacazgo cusqueño habría desaparecido como tantos otros señoríos andinos de la época, absorbido por el imperio chanka en expansión. No existiría el Tahuantinsuyo, ni la red de caminos ni el mit'a que llegaron a unificar los Andes bajo una sola administración —y probablemente tampoco habría existido un imperio lo bastante grande y centralizado como para que, un siglo después, un puñado de conquistadores españoles pudiera tomarlo entero capturando a un solo hombre, el inca Atahualpa."
    }
  },

  // ---- COLONIAL ----
  {
    id: "cuatro-viajes-colon-1492",
    year: 1492,
    endYear: 1506,
    title: "Los cuatro viajes del almirante y su testamento",
    author: "Cristóbal Colón",
    country: "Bahamas",
    type: ICON_TYPE.LITERATURE,
    description:
      "Las cartas, diarios de a bordo y el testamento del propio Cristóbal Colón, documentando sus cuatro travesías atlánticas entre 1492 y 1504 y cerrando con las cláusulas de su testamento, firmado en Valladolid en 1506. Un relato de primera mano —y no poco interesado— del primer contacto europeo con el Caribe y las negociaciones con la Corona que lo hicieron posible.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si los Reyes Católicos hubieran rechazado la propuesta de Colón, como antes lo hizo Portugal?",
      answer:
        "Otro marino, bajo otra bandera, habría tocado tierra americana en años o décadas —el hemisferio no podía permanecer aislado para siempre. Pero el idioma, la religión y las instituciones que llegaron primero habrían sido distintas, y el mapa lingüístico de América tal como lo conocemos no existiría."
    }
  },
  {
    id: "gramatica-castellana-nebrija-1492",
    year: 1492,
    title: "Gramática de la lengua castellana",
    author: "Antonio de Nebrija",
    country: "España",
    region: "Salamanca",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Antonio de Nebrija, humanista nacido en Lebrija y formado en la Universidad de Salamanca, publica en esa misma ciudad la Gramática de la lengua castellana — la primera gramática dedicada al español y la primera de una lengua vernácula moderna en toda Europa, en una época en que estas obras se reservaban casi exclusivamente al latín. Dividida en cinco partes (ortografía, prosodia, etimología y dicción, sintaxis, y una guía para extranjeros), buscaba fijar las reglas de una lengua en plena expansión. Según la tradición, al presentársela a la reina Isabel I, Nebrija explicó que 'siempre la lengua fue compañera del imperio' — una idea que cobraría sentido literal ese mismo año, cuando terminó la Reconquista y Colón zarpó hacia América.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Nebrija nunca hubiera fijado por escrito las reglas del castellano en 1492?",
      answer:
        "El español se habría seguido fragmentando en hablas regionales sin una norma de referencia, como le ocurrió al latín tras la caída de Roma. La Corona habría exportado a América un mosaico de dialectos en vez de una lengua con gramática codificada, complicando la administración, la evangelización y la propia noción de una 'lengua del imperio' capaz de unificar los territorios conquistados."
    }
  },
  {
    id: "la-celestina-1499",
    year: 1499,
    title: "La Celestina",
    author: "Fernando de Rojas",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Tragicomedia dialogada que sigue la obsesión amorosa de Calisto por Melibea, orquestada por Celestina, la vieja alcahueta que da nombre a la obra. Puente entre el mundo medieval y el renacentista, célebre por su realismo psicológico y su desenlace trágico y moralizante — y germen narrativo de la tradición picaresca que vendría después.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Fernando de Rojas hubiera dejado que Calisto y Melibea vivieran felices?",
      answer:
        "La Celestina no habría inaugurado la tradición trágica y moralizante que después heredaría la novela española. Su realismo psicológico depende precisamente de que el deseo —encarnado en Celestina misma— arrastre a todos hacia la caída."
    }
  },
  {
    id: "naufragios-cabeza-de-vaca-1528",
    year: 1528,
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
    title: "1531: la aparición de la Virgen de Guadalupe",
    author: "Hito histórico",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "Según la tradición, entre el 9 y el 12 de diciembre de 1531, Juan Diego Cuauhtlatoatzin, un indígena nahua recién convertido, tiene en el cerro del Tepeyac, cerca de la Ciudad de México, varias apariciones de una mujer que se identifica como la Virgen María y le pide que se construya un templo en su honor; como prueba, deja su imagen estampada en la tilma de Juan Diego. El relato más antiguo del suceso, el Nican Mopohua ('Aquí se narra'), fue escrito originalmente en náhuatl —tradicionalmente atribuido al noble nahua Antonio Valeriano— antes de circular en castellano, y la Virgen de Guadalupe se convertiría con el tiempo en el símbolo religioso y de identidad mestiza más poderoso de México.",
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
    butterfly: {
      prompt: "¿Qué hubiera pasado si la práctica de 'tocar' copias al original nunca se hubiera formalizado?",
      answer:
        "Las miles de reproducciones de la Virgen de Guadalupe que circularon por Nueva España y Europa durante el siglo XVIII habrían sido, en el mejor de los casos, ilustraciones piadosas más —sin la garantía de autenticidad ni el estatus casi de reliquia que la práctica de 'tocar al original' les otorgaba. Esa costumbre fue, en el fondo, lo que le permitió a México exportar su propia santidad de vuelta al imperio que lo había colonizado, en vez de solo recibir imágenes religiosas desde España."
    }
  },
  {
    id: "brevisima-relacion-1542",
    year: 1542,
    title: "Brevísima relación de la destrucción de las Indias",
    author: "Bartolomé de las Casas",
    country: "República Dominicana",
    type: ICON_TYPE.LITERATURE,
    description:
      "Denuncia testimonial de Bartolomé de las Casas contra las atrocidades cometidas por los colonizadores españoles en el Caribe y el continente, escrita en 1542 como petición directa a la Corona para reformar el trato a los pueblos indígenas. Un texto tan influyente como controvertido en la formación de la Leyenda Negra española.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bartolomé de las Casas nunca hubiera escrito su denuncia?",
      answer:
        "La Corona española habría carecido de un registro interno, moralmente autorizado, de las atrocidades cometidas en su nombre. La Leyenda Negra que después usarían las potencias rivales de España habría necesitado otras fuentes, quizás menos contundentes que la de un fraile que había presenciado la violencia de cerca."
    }
  },
  {
    id: "popol-vuh-1554",
    year: 1554,
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
    endYear: 1650,
    pubYear: 1829,
    title: "Historia de la Monja Alférez",
    author: "Catalina de Erauso",
    country: "Chile",
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
    title: "Comentarios Reales de los Incas",
    author: "El Inca Garcilaso de la Vega",
    country: "Perú",
    type: ICON_TYPE.LITERATURE,
    description:
      "Escrita por el hijo de un conquistador español y una princesa inca, esta crónica de 1609 entreteje la historia oral y la mitología incaicas con el relato de la conquista del Perú. Una de las primeras grandes obras de autoría mestiza, escrita desde ambos mundos a la vez.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si el Inca Garcilaso hubiera crecido solo en la corte española, sin memoria directa del Perú incaico?",
      answer:
        "Los Comentarios Reales no serían la crónica mestiza que son —escrita desde ambos mundos a la vez—, sino una historia colonial más, contada enteramente desde afuera. Su valor único está en que el autor pudo reclamar como propia tanto la herencia inca como la española."
    }
  },

  // ---- INDEPENDENCE / 19th c ----
  {
    id: "carta-de-jamaica-1815",
    year: 1815,
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
    endYear: 1862,
    title: "1816: Juana Azurduy, la teniente coronela",
    author: "Hito histórico",
    country: "Bolivia",
    region: "Sucre",
    type: ICON_TYPE.CONFLICT,
    description:
      "Juana Azurduy nace el 12 de julio de 1780 en Chuquisaca —hoy Sucre—, mestiza en un sistema colonial que no tenía lugar para ella: ni suficientemente española ni suficientemente indígena. Criada entre trabajadores indígenas de la hacienda familiar, aprende quechua, aymara, a montar y a disparar antes de ser expulsada, a los 17 años, del convento donde la habían internado. En 1805 se casa con Manuel Ascencio Padilla; cuando estalla la guerra de independencia del Alto Perú en 1809, ambos toman las armas al frente de los 'Batallones Leales', una guerrilla indígena y mestiza que llegaría a sumar miles de combatientes. Juana combate vestida de militar y dirige cargas de caballería: en agosto de 1814 gana la batalla de Cerro Carretas embarazada de nueve meses, y da a luz poco después; en 1815 recupera un estandarte español en Pintatora; en marzo de 1816, en Villar, captura otro con sus propias manos —hazaña que le vale el ascenso a teniente coronel de manos del general Manuel Belgrano, quien le regala su propia espada—. Semanas después, tropas realistas capturan y decapitan a su esposo, exhibiendo su cabeza en una pica. Herida y de nuevo embarazada, Juana recupera el cuerpo y sigue combatiendo: de sus cinco hijos, solo Luisa sobrevive a la guerra. En 1825, ya independiente Bolivia, Simón Bolívar la visita, la encuentra en la miseria y declara que el país debería llevar su apellido, no el suyo. Muere en la pobreza en 1862; en 2009 Argentina la asciende póstumamente a generala, y en 2015 una estatua suya reemplaza la de Colón en Buenos Aires.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Juana Azurduy se hubiera retirado de la guerra tras la decapitación de su esposo en 1816?",
      answer:
        "Nadie se lo hubiera reprochado —viuda, herida y embarazada, ya había perdido más de lo que cualquier ejército debería pedirle a una sola persona—. Pero de haberlo hecho, la independencia del Alto Perú habría perdido a una de sus comandantes más temidas en los años decisivos que siguieron, y la historia no tendría la prueba viviente que Bolívar necesitaba, años después, para admitir en voz alta que el país llevaba el nombre equivocado."
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
    butterfly: {
      prompt: "¿Qué hubiera pasado si Augusto Pérez nunca hubiera decidido confrontar a su propio autor?",
      answer:
        "Niebla habría sido una novela psicológica más, en vez del ejercicio metaficcional radical que anticipó, décadas antes, discusiones que la teoría literaria del siglo XX volvería centrales. El propio Unamuno, al dejarse increpar por su personaje, convirtió una crisis existencial privada en un problema filosófico compartido con el lector."
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
    id: "laberinto-de-la-soledad",
    year: 1950,
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
    id: "ciudad-real",
    year: 1960,
    title: "Ciudad Real",
    author: "Rosario Castellanos",
    country: "México",
    type: ICON_TYPE.LITERATURE,
    description: "Cuentos del Ciclo de Chiapas; Premio Xavier Villaurrutia.",
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
    id: "ciudad-los-perros-vargas-llosa-1963",
    year: 1963,
    title: "La ciudad y los perros",
    author: "Mario Vargas Llosa",
    country: "Perú",
    region: "Lima",
    type: ICON_TYPE.LITERATURE,
    description:
      "La primera novela de Mario Vargas Llosa, escrita antes de cumplir treinta años y ganadora del Premio Biblioteca Breve de Seix Barral en 1962, retrata con crudeza la violencia, el machismo y la corrupción moral dentro del Colegio Militar Leoncio Prado de Lima, donde el propio autor había sido interno. Estructurada en múltiples voces y saltos temporales, la novela desnuda un microcosmos brutal que funciona como espejo del Perú entero, y su publicación fue tan incendiaria que las autoridades del colegio real llegaron a quemar públicamente mil ejemplares del libro, acusándolo de traición a la patria. Se convirtió, junto con obras de García Márquez, Cortázar y Fuentes, en uno de los pilares fundacionales del Boom latinoamericano.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Vargas Llosa hubiera suavizado el retrato del Leoncio Prado para evitar la censura?",
      answer:
        "La ciudad y los perros habría perdido exactamente lo que la volvió un escándalo nacional y, a la vez, una obra maestra: su negativa a mirar hacia otro lado ante la violencia que el propio sistema militar producía y encubría. La quema pública de ejemplares terminó siendo la mejor prueba de que la novela había tocado un nervio real."
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
    id: "tlatelolco-masacre-1968",
    year: 1968,
    title: "2 de octubre de 1968: la masacre de Tlatelolco",
    author: "Hito histórico",
    country: "México",
    region: "Tlatelolco, Ciudad de México",
    type: ICON_TYPE.CONFLICT,
    description:
      "Tras un verano de protestas estudiantiles contra el autoritarismo del PRI, y a diez días de la inauguración de los Juegos Olímpicos de la Ciudad de México, el gobierno decide acabar con el movimiento antes de que el mundo lo vea. La tarde del 2 de octubre de 1968, miles de estudiantes se reúnen pacíficamente en la Plaza de las Tres Culturas, en Tlatelolco. Alrededor de las 6 de la tarde, el Ejército, la policía y el escuadrón paramilitar del Batallón Olimpia rodean la plaza y abren fuego desde azoteas y vehículos blindados. El gobierno reportó al principio solo 4 muertos; testigos describieron camiones cargando decenas o cientos de cuerpos. La cifra real nunca se estableció con certeza —las estimaciones van de poco más de 30 a varios cientos—, y miles de estudiantes fueron golpeados, detenidos o desaparecidos. Es el episodio que más ha marcado la desconfianza de México hacia el poder de partido único que gobernó el país sin interrupción desde 1929.",
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

  // ---- ARTE — pintores de España y Latinoamérica ----
  // Añadidos a partir del inventario de obras que aparecen en el mundo
  // 3D de Museos. Se ordenan solos al cargar (ver el sort de abajo);
  // cada uno usa year/endYear como nacimiento/muerte, siguiendo el
  // mismo patrón que "Ocho Venado" y "Monja Alférez" más arriba.
  {
    id: "el-greco-1541",
    year: 1541,
    endYear: 1614,
    title: "1541–1614: El Greco",
    author: "El Greco (Domenikos Theotokopoulos)",
    country: "España",
    region: "Toledo",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor de origen cretense que se instala en Toledo hacia 1577 y desarrolla un estilo propio de figuras alargadas, color vibrante y luz espiritual casi alucinada — germen del manierismo español. Obras como El entierro del conde de Orgaz definieron la imaginería religiosa española durante generaciones.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si El Greco se hubiera quedado en Creta o en Italia, sin instalarse en Toledo?",
      answer:
        "El manierismo español —figuras alargadas, luz espiritual casi alucinada— probablemente no existiría en la forma en que lo conocemos. Toledo, con su intensidad religiosa particular, le dio a un pintor cretense de formación italiana el terreno exacto que necesitaba para inventar un estilo sin precedente."
    }
  },
  {
    id: "velazquez-1599",
    year: 1599,
    endYear: 1660,
    title: "1599–1660: Diego Velázquez",
    author: "Diego Velázquez",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintor de cámara de Felipe IV y máxima figura del Siglo de Oro español. Las Meninas (1656) sigue siendo uno de los ejercicios más estudiados de la historia del arte occidental sobre la mirada, el poder y la representación misma.",
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
    butterfly: {
      prompt: "¿Qué hubiera pasado si Picasso nunca hubiera pintado Guernica?",
      answer:
        "El bombardeo a civiles seguiría siendo un hecho histórico documentado, pero carecería de la imagen que lo volvió universalmente reconocible como símbolo del horror de la guerra moderna. Picasso le dio al sufrimiento de un pueblo vasco un lenguaje visual que trascendió el propio conflicto español."
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
    type: ICON_TYPE.HISTORY,
    description:
      "Pintora de Coyoacán cuyos autorretratos —marcados por el accidente que la dejó convaleciente de por vida y por una identidad mexicana reivindicada sin concesiones— la convirtieron, décadas después de su muerte, en una de las artistas más reconocidas del mundo.",
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
    butterfly: {
      prompt: "¿Qué hubiera pasado si José Clemente Orozco hubiera pintado con el mismo triunfalismo revolucionario que sus contemporáneos?",
      answer:
        "Perdería lo que lo distingue de Rivera y Siqueiros: una furia visual que trata la violencia y la deshumanización sin heroísmo fácil. Orozco vio la Revolución de cerca y decidió no venderla como epopeya limpia."
    }
  },
  {
    id: "siqueiros-1896",
    year: 1896,
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
    endYear: 1963,
    title: "1908–1963: Remedios Varo",
    author: "Remedios Varo",
    country: "México",
    type: ICON_TYPE.HISTORY,
    description:
      "Pintora nacida en Cataluña que, tras huir de la Guerra Civil española y la ocupación de Francia, se exilia en México en 1941 y se convierte en una de las figuras centrales del surrealismo mexicano, con un universo propio de alquimistas, viajeras y máquinas imposibles.",
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
    title: "1478: se establece la Inquisición española",
    author: "Hito histórico",
    country: "España",
    region: "Sevilla",
    flag: "spain-not-latam",
    type: ICON_TYPE.HISTORY,
    description:
      "El 1 de noviembre de 1478, el papa Sixto IV emite la bula Exigit sinceras devotionis affectus a petición de los Reyes Católicos, Fernando de Aragón e Isabel de Castilla, autorizando el establecimiento de la Inquisición española — un tribunal bajo control directo de la Corona, no de Roma, a diferencia de la Inquisición medieval anterior. El primer tribunal se instala en Sevilla en 1480 y el primer auto de fe se celebra allí en febrero de 1481. Sus principales víctimas fueron los conversos: judíos y musulmanes que llevaban siglos viviendo en los territorios peninsulares, muchos de ellos convertidos al cristianismo bajo sospecha constante de practicar en secreto su fe original. La institución perduraría, con distintos grados de intensidad, hasta su abolición definitiva en 1834.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si el papa Sixto IV hubiera rechazado la petición de los Reyes Católicos?",
      answer:
        "España habría carecido de un tribunal bajo control directo de la Corona, y la persecución religiosa —aunque probablemente habría existido de otra forma— no habría alcanzado la escala institucional que persiguió a conversos judíos y musulmanes durante más de tres siglos. La censura que después asfixió la picaresca y el ensayo crítico americano habría tomado, quizás, otra forma."
    }
  },

  // ---- ETNOGÉNESIS Y DIÁSPORA GARÍFUNA (1635–1797) ----
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
    title: "1802: Napoleón envía a Leclerc a restaurar la esclavitud",
    author: "Hito histórico",
    country: "Haití",
    region: "Cap-Haïtien",
    type: ICON_TYPE.CONFLICT,
    description:
      "Napoleón Bonaparte envía a su cuñado, el general Charles Leclerc, al mando de una expedición de veinte mil soldados que llega a Saint-Domingue en febrero de 1802 con el objetivo de restaurar el control directo de Francia y, según se sospechaba cada vez con más certeza, reinstaurar la esclavitud — como ya había ocurrido en Guadalupe ese mismo mayo bajo la expedición de Richepanse. Toussaint Louverture, gobernador de la colonia y antiguo esclavizado, es atraído a una negociación, arrestado por engaño en junio y deportado a Francia, donde muere en prisión en el castillo de Joux en abril de 1803 — sin haber visto la independencia que su ejército terminaría por conquistar sin él.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si Toussaint Louverture no hubiera acudido a esa negociación con los franceses?",
      answer:
        "Sin su captura, Toussaint probablemente habría seguido al mando de la resistencia, y el nombre que hoy asociamos con la independencia de Haití sería el suyo, no el de Jean-Jacques Dessalines. Pero su arresto, lejos de aplastar la revuelta, radicalizó a sus antiguos oficiales: la traición francesa convenció a Dessalines de que ya no había nada que negociar, solo una guerra que ganar."
    }
  },
  {
    id: "haiti-independencia-1804",
    year: 1804,
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
    title: "1873: España abole la esclavitud en Puerto Rico",
    author: "Hito histórico",
    country: "Puerto Rico",
    region: "San Juan",
    type: ICON_TYPE.HISTORY,
    description:
      "El 22 de marzo de 1873, la Asamblea Nacional de la Primera República Española decreta la abolición de la esclavitud en Puerto Rico, tras décadas de organización abolicionista liderada por figuras como Ramón Emeterio Betances, Segundo Ruiz Belvis, José Julián Acosta y Julio L. de Vizcarrondo. La ley compensa a los dueños con 35 millones de pesetas y obliga a los recién liberados a seguir trabajando bajo contrato tres años más — una libertad legal todavía condicionada, pero libertad al fin, veinticinco años antes de que la isla cambiara de manos coloniales.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si el movimiento abolicionista puertorriqueño no hubiera organizado durante décadas antes de 1873?",
      answer:
        "Sin la presión sostenida de Betances, Ruiz Belvis, Acosta y Vizcarrondo desde los años 1860, la breve Primera República Española —que duró apenas dos años— pudo haber caído sin dejar tiempo para actuar sobre Puerto Rico, dejando la abolición en manos de una futura restauración monárquica mucho menos favorable a la causa."
    }
  },
  {
    id: "el-morro-san-juan-1595",
    year: 1595,
    endYear: 1898,
    title: "1595–1898: El Morro, la fortaleza que nunca cayó en combate",
    author: "Hito histórico",
    country: "Puerto Rico",
    region: "San Juan",
    type: ICON_TYPE.CONFLICT,
    description:
      "Durante tres siglos, El Morro —el castillo de San Felipe que custodia la bahía de San Juan— repele o sobrevive a los mayores poderes navales de Europa. En 1595, Francis Drake ataca la ciudad buscando un cargamento de oro y plata; la artillería española lo rechaza, matando a su compañero John Hawkins, y Drake se retira derrotado. En 1598, el inglés George Clifford, conde de Cumberland, sí logra tomar el castillo y la ciudad con 1,700 hombres —la única vez que El Morro cae en combate—, pero la disentería diezma a sus tropas, y tras 65 días de ocupación los ingleses se retiran, no sin antes saquear e incendiar San Juan. En 1625, el almirante holandés Boudewijn Hendricksz ocupa la ciudad —ya evacuada— y sitia El Morro durante semanas con cañones y trincheras, pero carece de artillería suficiente para romper sus muros; también se retira, quemando buena parte de la ciudad al partir. Pero la fortaleza que ningún ejército pudo quebrar termina cayendo de todos modos: en 1898, tras la derrota naval de España frente a Estados Unidos en la guerra hispanoamericana, el Tratado de París le cede Puerto Rico a Washington sin que un solo cañonazo se dispare contra El Morro. Trescientos años de resistencia militar no bastaron frente a una firma en otro continente.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si El Morro hubiera caído ante Drake en 1595, en vez de resistir?",
      answer:
        "España probablemente habría perdido el control de Puerto Rico varios siglos antes, y la isla habría seguido una trayectoria colonial distinta —quizás inglesa o, más tarde, holandesa— en vez de permanecer española hasta 1898. La ironía final es que ni Drake, ni Cumberland, ni los holandeses lograron con cañones lo que Washington obtuvo con una firma: El Morro nunca fue verdaderamente conquistado, solo entregado."
    }
  },
  {
    id: "cuba-abolicion-esclavitud-1886",
    year: 1886,
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

  // ---- MÚSICA ----
  {
    id: "selena-quintanilla-1971",
    year: 1971,
    endYear: 1995,
    title: "1971–1995: Selena Quintanilla",
    author: "Selena Quintanilla",
    country: "Estados Unidos",
    region: "Corpus Christi",
    type: ICON_TYPE.MUSIC,
    description:
      "Selena Quintanilla nace el 16 de abril de 1971 en Lake Jackson, Texas, y crece en Corpus Christi cantando cumbias y baladas en un español que apenas hablaba con fluidez —tuvo que aprender sus propias letras casi fonéticamente—. Al frente de Selena y Los Dinos, la banda familiar liderada por su padre Abraham, se convierte en la mayor estrella del tejano, un género fronterizo hecho por y para la comunidad méxico-americana del sur de Texas. En 1994 su éxito cruza la frontera: un concierto multitudinario en Monterrey confirma que su música conecta con México tanto como con Texas, pese a que ella misma se sentía, en sus propias palabras, 'ni de aquí ni de allá'. El 26 de febrero de 1995, en el marco del Houston Livestock Show and Rodeo, llena el Astrodome de Houston con más de 60,000 personas, un récord de asistencia para el recinto y el concierto más grande de su carrera — y el último que daría en vida. Estaba grabando su álbum en inglés —el que la habría lanzado al mercado angloparlante como a Gloria Estefan— cuando, el 31 de marzo de 1995, es asesinada a los 23 años en un motel de Corpus Christi por Yolanda Saldívar, presidenta de su club de fans, tras ser descubierta desviando fondos de sus negocios.",
    descriptionHtml:
      'Selena Quintanilla nace el 16 de abril de 1971 en <button type="button" class="timeline-detail-geolink" data-region="Lake Jackson" data-country="Estados Unidos">Lake Jackson, Texas</button>, y crece en <button type="button" class="timeline-detail-geolink" data-region="Corpus Christi" data-country="Estados Unidos">Corpus Christi</button> cantando cumbias y baladas en un español que apenas hablaba con fluidez —tuvo que aprender sus propias letras casi fonéticamente—. Al frente de Selena y Los Dinos, la banda familiar liderada por su padre Abraham, se convierte en la mayor estrella del tejano, un género fronterizo hecho por y para la comunidad méxico-americana del sur de Texas. En 1994 su éxito cruza la frontera: un concierto multitudinario en <button type="button" class="timeline-detail-geolink" data-region="Monterrey" data-country="México">Monterrey</button> confirma que su música conecta con México tanto como con Texas, pese a que ella misma se sentía, en sus propias palabras, \'ni de aquí ni de allá\'. El 26 de febrero de 1995, en el marco del Houston Livestock Show and Rodeo, llena el <button type="button" class="timeline-detail-geolink" data-region="Houston" data-country="Estados Unidos">Astrodome de Houston</button> con más de 60,000 personas, un récord de asistencia para el recinto y el concierto más grande de su carrera — y el último que daría en vida. Estaba grabando su álbum en inglés —el que la habría lanzado al mercado angloparlante como a Gloria Estefan— cuando, el 31 de marzo de 1995, es asesinada a los 23 años en un motel de <button type="button" class="timeline-detail-geolink" data-region="Corpus Christi" data-country="Estados Unidos">Corpus Christi</button> por Yolanda Saldívar, presidenta de su club de fans, tras ser descubierta desviando fondos de sus negocios.',
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
      'Nacido el 17 de febrero de 1940 en <button type="button" class="timeline-detail-geolink" data-region="Guadalajara, Jalisco" data-country="México">Huentitán el Alto</button>, un barrio humilde a las afueras de Guadalajara, Vicente Fernández crece ordeñando vacas y cantando en fiestas antes de convertirse, décadas después, en \'El Charro de Huentitán\': la voz definitiva de la ranchera y el ícono más reconocible del mariachi del siglo XX. Con más de 50 discos, docenas de películas y rancheras como \'Volver, volver\' convertidas en himno nacional extraoficial, construye una carrera que atraviesa generaciones sin perder nunca su acento de pueblo ni su identidad de charro. Entre 2000 y 2010 llena en dos ocasiones el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York, la prueba de que la ranchera más pura podía conquistar el escenario más grande de la ciudad con mayor población mexicana fuera de México. Sin embargo, nunca cantó en el Palacio de Bellas Artes de la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>: cuando se lo ofrecieron para su concierto de despedida en 2016, respondió con orgullo que \'antes era demasiado insignificante para un escenario así, porque era un cantante ranchero\', y puso como condición que dejaran entrar también a su gente — algo que <button type="button" class="timeline-detail-entrylink" data-id="juan-gabriel-1950">Juan Gabriel</button> sí había logrado, veintiséis años antes. Bellas Artes terminaría por abrirle sus puertas solo después de su muerte, ofrecido por la Secretaría de Cultura para su homenaje. Muere el 12 de diciembre de 2021 en <button type="button" class="timeline-detail-geolink" data-region="Guadalajara, Jalisco" data-country="México">Guadalajara</button>, la misma ciudad que lo vio nacer pobre y despedirlo como leyenda.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Vicente Fernández hubiera adoptado un sonido más pop para ampliar su mercado, como le sugirieron varias veces?",
      answer:
        "Habría ganado, quizás, un público más joven o más internacional a corto plazo, pero habría perdido exactamente lo que lo volvió irremplazable: ser la ranchera más pura y menos diluida posible, en una época en que el género competía cada vez más con sonidos importados. Su terquedad por sonar como Huentitán, no como el mercado, es lo que lo convirtió en el charro de México entero."
    }
  },
  {
    id: "juan-gabriel-1950",
    year: 1950,
    endYear: 2016,
    title: "1950–2016: Juan Gabriel",
    author: "Juan Gabriel",
    country: "México",
    region: "Ciudad de México",
    type: ICON_TYPE.MUSIC,
    description:
      "Alberto Aguilera Valadez nace el 7 de enero de 1950 en Parácuaro, Michoacán, y crece en un orfanato de Ciudad Juárez tras la muerte de su padre y el abandono forzado de su madre por pobreza extrema. De esa infancia sale Juan Gabriel, compositor prolífico —más de mil canciones— y uno de los intérpretes más queridos de la música popular mexicana, con éxitos como 'Amor eterno' y 'Querida'. En mayo de 1990 rompe una barrera de clase largamente vigilada: se presenta durante cuatro noches —9, 10, 11 y 12 de mayo— en el Palacio de Bellas Artes de la Ciudad de México, el recinto reservado tradicionalmente para la 'alta cultura', acompañado de la Orquesta Sinfónica Nacional, con las cuatro fechas agotadas a capacidad total del recinto y las entradas vendidas en apenas ocho horas. La élite intelectual mexicana protesta, indignada de que un cantante popular —y, para muchos, abiertamente afeminado, sin que él jamás confirmara ni negara su sexualidad en público— pisara ese escenario. El disco en vivo resultante se convierte en uno de los más vendidos en la historia del país; Vicente Fernández, en cambio, jamás llegaría a cantar en ese mismo recinto. En 2015, ya en la última etapa de su carrera, llena el Madison Square Garden de Nueva York con su gira 'Bienvenidos al Noa Noa'. Muere el 28 de agosto de 2016 en Santa Mónica, California.",
    descriptionHtml:
      'Alberto Aguilera Valadez nace el 7 de enero de 1950 en <button type="button" class="timeline-detail-geolink" data-region="Parácuaro" data-country="México">Parácuaro, Michoacán</button>, y crece en un orfanato de <button type="button" class="timeline-detail-geolink" data-region="Ciudad Juárez" data-country="México">Ciudad Juárez</button> tras la muerte de su padre y el abandono forzado de su madre por pobreza extrema. De esa infancia sale Juan Gabriel, compositor prolífico —más de mil canciones— y uno de los intérpretes más queridos de la música popular mexicana, con éxitos como \'Amor eterno\' y \'Querida\'. En mayo de 1990 rompe una barrera de clase largamente vigilada: se presenta durante cuatro noches —9, 10, 11 y 12 de mayo— en el Palacio de Bellas Artes de la <button type="button" class="timeline-detail-geolink" data-region="Ciudad de México" data-country="México">Ciudad de México</button>, el recinto reservado tradicionalmente para la \'alta cultura\', acompañado de la Orquesta Sinfónica Nacional, con las cuatro fechas agotadas a capacidad total del recinto y las entradas vendidas en apenas ocho horas. La élite intelectual mexicana protesta, indignada de que un cantante popular —y, para muchos, abiertamente afeminado, sin que él jamás confirmara ni negara su sexualidad en público— pisara ese escenario. El disco en vivo resultante se convierte en uno de los más vendidos en la historia del país; <button type="button" class="timeline-detail-entrylink" data-id="vicente-fernandez-1940">Vicente Fernández</button>, en cambio, jamás llegaría a cantar en ese mismo recinto. En 2015, ya en la última etapa de su carrera, llena el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York con su gira \'Bienvenidos al Noa Noa\'. Muere el 28 de agosto de 2016 en <button type="button" class="timeline-detail-geolink" data-region="Santa Mónica, California" data-country="Estados Unidos">Santa Mónica, California</button>.',
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
      'Nacida en <button type="button" class="timeline-detail-geolink" data-region="Barranquilla" data-country="Colombia">Barranquilla, Colombia</button>, Shakira ya era una superestrella latina cuando, en 2010, se convierte en la voz oficial del Mundial de fútbol con \'Waka Waka (This Time for Africa)\', interpretada en las ceremonias de apertura y clausura en <button type="button" class="timeline-detail-geolink" data-country="Sudáfrica">Sudáfrica</button>; el video se convertiría en uno de los más vistos en la historia de YouTube y la canción, en el himno mundialista más exitoso jamás grabado. Ese mismo 2010, y de nuevo en 2018 tras su regreso a los escenarios —con Wyclef Jean sumándose para \'Hips Don\'t Lie\'—, llena el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York. Una década después de Sudáfrica, el 2 de febrero de 2020, comparte el escenario del entretiempo del Super Bowl LIV en <button type="button" class="timeline-detail-geolink" data-region="Miami" data-country="Estados Unidos">Miami</button> junto a Jennifer López —con <button type="button" class="timeline-detail-entrylink" data-id="bad-bunny-2026">Bad Bunny</button> y J Balvin como invitados especiales—, un show de apenas catorce minutos que se vuelve una de las presentaciones más comentadas en la historia del evento deportivo más visto de Estados Unidos. En todos esos escenarios, cantando en español ante audiencias globales que no necesariamente lo hablaban, Shakira demuestra que el cruce no exige traducción.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Shakira hubiera grabado 'Waka Waka' completamente en inglés, sin ningún verso en español?",
      answer:
        "Habría sido, probablemente, un éxito igual de masivo en términos comerciales, pero perdería el gesto simbólico que la distingue: llevar el español al escenario más visto del planeta sin pedir disculpas por ello. Ese mismo gesto es el que repetiría, una década después, en el Super Bowl."
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
      'En <button type="button" class="timeline-detail-geolink" data-region="Guadalajara, Jalisco" data-country="México">Guadalajara, Jalisco</button>, el baterista Alex González, el vocalista Fher Olvera y el bajista Juan Calleros forman en 1986 la banda que originalmente se llama Sombrero Verde, antes de rebautizarse Maná en 1987 —el guitarrista Sergio Vallín se integraría después—. Con discos como ¿Dónde jugarán los niños? (1992), se convierten en la banda de rock en español más vendida de la historia, con giras que llenan estadios en toda América Latina, España y Estados Unidos durante casi cuatro décadas — entre 2003 y 2016 llenan el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York en cuatro ocasiones distintas. En 2025, Maná se convierte en la primera banda de rock en español nominada al Salón de la Fama del Rock and Roll, un reconocimiento que tardó casi cuarenta años en llegar a un género que la industria angloparlante rara vez toma en cuenta.',
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
      'Leopoldo Dante Tévez nace el 22 de marzo de 1942 en <button type="button" class="timeline-detail-geolink" data-region="Santiago del Estero" data-country="Argentina">Villa Atamisqui, Santiago del Estero</button>, y se convierte, bajo el nombre de Leo Dan, en una de las voces más influyentes de la música popular latinoamericana del siglo XX. Con éxitos como \'Celia\', \'Como te extraño mi amor\' y \'Estelita\', se vuelve una figura inmensamente popular no solo en <button type="button" class="timeline-detail-geolink" data-country="Argentina">Argentina</button>, sino sobre todo en <button type="button" class="timeline-detail-geolink" data-country="México">México</button>, donde pasó buena parte de su carrera y su vida, y donde sus baladas fueron adoptadas casi como propias. A lo largo de más de sesenta años de carrera lleva su música por <button type="button" class="timeline-detail-geolink" data-country="Chile">Chile</button>, <button type="button" class="timeline-detail-geolink" data-country="Perú">Perú</button>, <button type="button" class="timeline-detail-geolink" data-country="Colombia">Colombia</button>, <button type="button" class="timeline-detail-geolink" data-country="Venezuela">Venezuela</button> y <button type="button" class="timeline-detail-geolink" data-country="Ecuador">Ecuador</button> —donde \'Celia\' ya suena en las listas de éxito a mediados de los años sesenta—, además de <button type="button" class="timeline-detail-geolink" data-country="España">España</button>, <button type="button" class="timeline-detail-geolink" data-country="Bolivia">Bolivia</button> y <button type="button" class="timeline-detail-geolink" data-country="Guatemala">Guatemala</button>. El 9 de noviembre de 2014 se presenta en el <button type="button" class="timeline-detail-geolink" data-region="Royce Hall, UCLA" data-country="Estados Unidos">Royce Hall de UCLA</button>, en Los Ángeles, cantando sus clásicos ante un público que coreaba cada canción. En 2024, ya instalado definitivamente en <button type="button" class="timeline-detail-geolink" data-country="Estados Unidos">Estados Unidos</button>, emprende \'El adiós de una leyenda\', su gira de despedida por ciudades estadounidenses. Muere en plena gira, el 1 de enero de 2025, a los 82 años, en <button type="button" class="timeline-detail-geolink" data-region="Miami" data-country="Estados Unidos">Miami</button>, dejando un catálogo que generaciones de cantantes rancheros y baladistas latinoamericanos siguen versionando.',
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
    title: "2026: Bad Bunny y el primer halftime show mayormente en español",
    author: "Bad Bunny",
    country: "Estados Unidos",
    region: "Santa Clara, California",
    type: ICON_TYPE.MUSIC,
    description:
      "Benito Antonio Martínez Ocasio, Bad Bunny, nacido en Vega Baja, Puerto Rico —y que ya en abril de 2019 había agotado las entradas del Madison Square Garden de Nueva York en su gira X100PRE, su primera vez en el recinto—, se convierte el 8 de febrero de 2026 en el primer artista latino en encabezar en solitario el espectáculo de medio tiempo del Super Bowl —y el primero en hacerlo cantando mayormente en español—, en el Levi's Stadium de Santa Clara, California, ante la audiencia televisiva más grande de Estados Unidos. El show, con invitados como Lady Gaga, Ricky Martin y Los Pleneros de la Cresta, convierte el escenario en una puesta en escena de identidad puertorriqueña: campos de caña de azúcar que evocan el pasado colonial de la isla, una 'casita' construida sobre el campo de juego, y la bandera de Puerto Rico llevada literalmente sobre su espalda mientras canta. Lo que para la NFL es un espectáculo de entretiempo, para millones de puertorriqueños es, por primera vez, verse representados enteros —lengua, historia colonial y todo— en el escenario más visto del país que gobierna la isla desde 1898.",
    descriptionHtml:
      'Benito Antonio Martínez Ocasio, Bad Bunny, nacido en <button type="button" class="timeline-detail-geolink" data-region="Vega Baja" data-country="Puerto Rico">Vega Baja, Puerto Rico</button> —y que ya en abril de 2019 había agotado las entradas del <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York en su gira X100PRE, su primera vez en el recinto—, se convierte el 8 de febrero de 2026 en el primer artista latino en encabezar en solitario el espectáculo de medio tiempo del Super Bowl —y el primero en hacerlo cantando mayormente en español—, en el Levi\'s Stadium de <button type="button" class="timeline-detail-geolink" data-region="Santa Clara, California" data-country="Estados Unidos">Santa Clara, California</button>, ante la audiencia televisiva más grande de Estados Unidos. El show, con invitados como Lady Gaga, Ricky Martin y Los Pleneros de la Cresta, convierte el escenario en una puesta en escena de identidad puertorriqueña: campos de caña de azúcar que evocan el pasado colonial de la isla, una \'casita\' construida sobre el campo de juego, y la bandera de <button type="button" class="timeline-detail-geolink" data-country="Puerto Rico">Puerto Rico</button> llevada literalmente sobre su espalda mientras canta. Lo que para la NFL es un espectáculo de entretiempo, para millones de puertorriqueños es, por primera vez, verse representados enteros —lengua, historia colonial y todo— en el escenario más visto del país que gobierna la isla desde 1898.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bad Bunny hubiera aceptado cantar principalmente en inglés para 'ampliar su alcance', como le sugirieron?",
      answer:
        "Habría sido, seguramente, un espectáculo exitoso de todos modos —su música ya domina las listas globales sin necesidad de traducción—. Pero habría perdido exactamente el gesto que lo volvió histórico: demostrar, ante la audiencia más grande y más estadounidense del año, que el español no necesita traducirse para ser el idioma principal del espectáculo más visto del país."
    }
  },
  {
    id: "celia-cruz-1925",
    year: 1925,
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
    description:
      "En la costa Caribe de la Nueva Granada colonial —hoy Colombia—, con el puerto negrero de Cartagena de Indias como epicentro del comercio de personas esclavizadas hacia toda la región, nace la cumbia como danza de cortejo practicada entre comunidades afrodescendientes e indígenas. Sus gaitas de origen indígena (kogui y zenú) se combinan con los tambores de tradición africana y, más tarde, con elementos de danza española, en una de las fusiones musicales más completas de toda América Latina. Durante el siglo XX, la cumbia se expande desde la costa colombiana hacia México, Argentina, Perú y buena parte del continente, adoptando en cada país una identidad local propia —desde la cumbia sonidera mexicana hasta la cumbia villera argentina— sin perder nunca las gaitas, los tambores y las velas que los bailarines todavía cargan en las versiones más tradicionales.",
    descriptionHtml:
      'En la costa Caribe de la Nueva Granada colonial —hoy Colombia—, con el puerto negrero de <button type="button" class="timeline-detail-geolink" data-region="Cartagena de Indias" data-country="Colombia">Cartagena de Indias</button> como epicentro del comercio de personas esclavizadas hacia toda la región, nace la cumbia como danza de cortejo practicada entre comunidades afrodescendientes e indígenas. Sus gaitas de origen indígena (kogui y zenú) se combinan con los tambores de tradición africana y, más tarde, con elementos de danza española, en una de las fusiones musicales más completas de toda América Latina. Durante el siglo XX, la cumbia se expande desde la costa colombiana hacia <button type="button" class="timeline-detail-geolink" data-country="México">México</button>, Argentina, Perú y buena parte del continente, adoptando en cada país una identidad local propia —desde la cumbia sonidera mexicana hasta la cumbia villera argentina— sin perder nunca las gaitas, los tambores y las velas que los bailarines todavía cargan en las versiones más tradicionales.',
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
    endYear: 1920,
    title: "1810–1920: el corrido, el periódico del pueblo",
    author: "Hito histórico",
    country: "México",
    type: ICON_TYPE.MUSIC,
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
    description:
      "En Cocula y otros pueblos del occidente de Jalisco, durante el siglo XIX, grupos de cuerdas —violines, vihuela, guitarrón y guitarra— animan bodas, fiestas patronales y velorios con un repertorio que todavía no lleva trompeta; ese instrumento se incorpora recién en el siglo XX, cuando el mariachi migra a las ciudades. La edad de oro del cine mexicano, entre los años treinta y cincuenta, convierte al mariachi de traje de charro en símbolo visual y sonoro de México ante el mundo —un símbolo que, décadas después, nadie encarnaría con más terquedad que Vicente Fernández, 'El Charro de Huentitán'—. En 2011, la UNESCO declara al mariachi Patrimonio Cultural Inmaterial de la Humanidad, formalizando lo que el cine ya había logrado décadas antes: convertir una tradición de pueblo en un emblema nacional.",
    descriptionHtml:
      'En <button type="button" class="timeline-detail-geolink" data-region="Cocula, Jalisco" data-country="México">Cocula</button> y otros pueblos del occidente de Jalisco, durante el siglo XIX, grupos de cuerdas —violines, vihuela, guitarrón y guitarra— animan bodas, fiestas patronales y velorios con un repertorio que todavía no lleva trompeta; ese instrumento se incorpora recién en el siglo XX, cuando el mariachi migra a las ciudades. La edad de oro del cine mexicano, entre los años treinta y cincuenta, convierte al mariachi de traje de charro en símbolo visual y sonoro de México ante el mundo —un símbolo que, décadas después, nadie encarnaría con más terquedad que <button type="button" class="timeline-detail-entrylink" data-id="vicente-fernandez-1940">Vicente Fernández</button>, \'El Charro de Huentitán\'—. En 2011, la UNESCO declara al mariachi Patrimonio Cultural Inmaterial de la Humanidad, formalizando lo que el cine ya había logrado décadas antes: convertir una tradición de pueblo en un emblema nacional.',
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
    description:
      "Nacida en el México rural anterior a la Revolución y bautizada por la palabra 'rancho', la ranchera se transforma después de 1920 en símbolo de una identidad nacional en construcción, impulsada por la radio y, sobre todo, por el cine mexicano de los años treinta a cincuenta. Cantantes-actores como Jorge Negrete y Pedro Infante, y compositores como José Alfredo Jiménez, llevan sus temas de amor, despecho, patria y vida rural a audiencias masivas dentro y fuera de México, sentando las bases que décadas después heredaría Vicente Fernández, el intérprete que terminaría por convertirse en la voz definitiva del género.",
    descriptionHtml:
      'Nacida en el México rural anterior a la Revolución y bautizada por la palabra \'rancho\', la ranchera se transforma después de 1920 en símbolo de una identidad nacional en construcción, impulsada por la radio y, sobre todo, por el cine mexicano de los años treinta a cincuenta. Cantantes-actores como Jorge Negrete y Pedro Infante, y compositores como José Alfredo Jiménez, llevan sus temas de amor, despecho, patria y vida rural a audiencias masivas dentro y fuera de México, sentando las bases que décadas después heredaría <button type="button" class="timeline-detail-entrylink" data-id="vicente-fernandez-1940">Vicente Fernández</button>, el intérprete que terminaría por convertirse en la voz definitiva del género.',
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
    description:
      "En Kingston, a finales de los años sesenta, el reggae surge como evolución del mento, el ska y el rocksteady jamaicanos, con un ritmo más lento y marcado por el contratiempo de la guitarra y el bajo. Se convierte rápidamente en vehículo de la filosofía rastafari y de mensajes de justicia social, pobreza y resistencia, llevados al mundo entero por Bob Marley, Peter Tosh, Jimmy Cliff y Burning Spear. Lo que empieza como música de los barrios pobres de Kingston termina, en 2018, reconocido por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad — y, mucho antes de esa fecha, como la semilla directa de un género que Jamaica nunca imaginó exportar hacia el Caribe hispanohablante: el reggaetón.",
    descriptionHtml:
      'En <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Kingston</button>, a finales de los años sesenta, el reggae surge como evolución del mento, el ska y el rocksteady jamaicanos, con un ritmo más lento y marcado por el contratiempo de la guitarra y el bajo. Se convierte rápidamente en vehículo de la filosofía rastafari y de mensajes de justicia social, pobreza y resistencia, llevados al mundo entero por <button type="button" class="timeline-detail-entrylink" data-id="bob-marley-1945">Bob Marley</button>, Peter Tosh, Jimmy Cliff y Burning Spear. Lo que empieza como música de los barrios pobres de Kingston termina, en 2018, reconocido por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad — y, mucho antes de esa fecha, como la semilla directa de un género que Jamaica nunca imaginó exportar hacia el Caribe hispanohablante: el <button type="button" class="timeline-detail-entrylink" data-id="reggaeton-origenes-panama-puerto-rico-1985">reggaetón</button>.',
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
      'Robert Nesta Marley nace el 6 de febrero de 1945 en <button type="button" class="timeline-detail-geolink" data-region="Nine Mile" data-country="Jamaica">Nine Mile</button>, en la parroquia rural de Saint Ann, hijo de una adolescente jamaicana negra y un capitán británico blanco que apenas participó en su crianza. Crece en <button type="button" class="timeline-detail-geolink" data-region="Kingston" data-country="Jamaica">Trench Town</button>, uno de los barrios más pobres de Kingston, donde en 1963 forma junto a Bunny Wailer y Peter Tosh el grupo The Wailers, que evoluciona del ska y el rocksteady hacia el <button type="button" class="timeline-detail-entrylink" data-id="reggae-origenes-jamaica-1968">reggae</button> naciente de esa misma ciudad. Convertido al rastafarismo, lleva el reggae del gueto de Kingston a escenarios internacionales con álbumes como Catch a Fire (1973) y Exodus (1977, elegido por la revista Time como el álbum del siglo). El 3 de diciembre de 1976, dos días antes de un concierto gratuito organizado para apaciguar la violencia política en Jamaica, sobrevive a un intento de asesinato a tiros en su propia casa; toca de todos modos, con una herida de bala en el brazo, ante setenta mil personas. En 1978, en el One Love Peace Concert, obliga a subir al escenario y estrechar las manos frente al público a los líderes de los dos partidos rivales cuya disputa había ensangrentado la isla. En septiembre de 1980, en pleno Uprising Tour, toca dos noches en el <button type="button" class="timeline-detail-geolink" data-region="Madison Square Garden" data-country="Estados Unidos">Madison Square Garden</button> de Nueva York —la primera como telonero de The Commodores, ante un público mayoritariamente afroestadounidense que lo escuchaba en vivo por primera vez—; días después colapsa en Central Park durante un trote, primer síntoma visible del cáncer que lo mataría. Muere de un melanoma el 11 de mayo de 1981 en <button type="button" class="timeline-detail-geolink" data-region="Miami" data-country="Estados Unidos">Miami</button>, a los 36 años, convertido ya en el símbolo global del reggae y del rastafarismo — en la misma Kingston que, siglo y medio antes, le había dado refugio a <button type="button" class="timeline-detail-entrylink" data-id="carta-de-jamaica-1815">Simón Bolívar</button> para escribir la Carta de Jamaica.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Bob Marley no hubiera sobrevivido al intento de asesinato de 1976?",
      answer:
        "Jamaica habría perdido, dos años antes de tiempo, a la única figura capaz de reunir en un mismo escenario a los líderes de los dos partidos que la tenían al borde de la guerra civil. El One Love Peace Concert de 1978 —y el gesto de las manos unidas que se volvió símbolo de reconciliación— simplemente no habría existido, y el reggae habría perdido a su embajador justo cuando más estaba por conquistar al mundo."
    }
  },
  {
    id: "salsa-fania-nueva-york-1971",
    year: 1971,
    endYear: 1974,
    title: "1971–1974: Fania Records bautiza a la salsa",
    author: "Hito histórico",
    country: "Estados Unidos",
    region: "Nueva York",
    type: ICON_TYPE.MUSIC,
    description:
      "La salsa toma su forma moderna en Nueva York entre los años cuarenta y setenta, cuando el son, el mambo, la rumba y el bolero cubanos se mezclan con las tradiciones musicales puertorriqueñas dentro de las comunidades latinas de la ciudad. En 1971, un concierto multitudinario de las Fania All-Stars en el club Cheetah de Manhattan —documentado al año siguiente en la película Our Latin Thing— y la campaña de mercadeo del sello Fania Records terminan de fijar el nombre 'salsa' como término comercial para todo ese universo de ritmos afrocubanos y afroantillanos tocados en Nueva York. Bajo ese nombre nuevo, figuras como Tito Puente, Willie Colón, Héctor Lavoe y Rubén Blades —y, como única mujer del supergrupo, Celia Cruz— terminan de proyectar la salsa desde los clubes neoyorquinos hacia toda América Latina y el resto del mundo.",
    descriptionHtml:
      'La salsa toma su forma moderna en <button type="button" class="timeline-detail-geolink" data-region="Nueva York" data-country="Estados Unidos">Nueva York</button> entre los años cuarenta y setenta, cuando el son, el mambo, la rumba y el bolero cubanos se mezclan con las tradiciones musicales puertorriqueñas dentro de las comunidades latinas de la ciudad. En 1971, un concierto multitudinario de las Fania All-Stars en el club Cheetah de Manhattan —documentado al año siguiente en la película Our Latin Thing— y la campaña de mercadeo del sello Fania Records terminan de fijar el nombre \'salsa\' como término comercial para todo ese universo de ritmos afrocubanos y afroantillanos tocados en Nueva York. Bajo ese nombre nuevo, figuras como Tito Puente, Willie Colón, Héctor Lavoe y Rubén Blades —y, como única mujer del supergrupo, <button type="button" class="timeline-detail-entrylink" data-id="celia-cruz-1925">Celia Cruz</button>— terminan de proyectar la salsa desde los clubes neoyorquinos hacia toda América Latina y el resto del mundo.',
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
    description:
      "Contra la creencia popular de que el reggaetón nació en Puerto Rico, sus raíces más tempranas están en Panamá, donde descendientes de trabajadores caribeños de habla inglesa —muchos llegados para construir el Canal— crean desde mediados de los años ochenta el reggae en español, adaptando el reggae y el dancehall jamaicanos al castellano. En Puerto Rico, durante los años noventa, esa base se mezcla con hip-hop y dancehall en la escena 'underground' de San Juan, incorporando el característico ritmo dembow tomado directamente del dancehall jamaicano. La explosión definitiva llega en 2004 con 'Gasolina', de Daddy Yankee, la canción que convierte al reggaetón en fenómeno de la cultura pop global y abre camino a Don Omar, Tego Calderón y, generaciones después, a Bad Bunny y Karol G.",
    descriptionHtml:
      'Contra la creencia popular de que el reggaetón nació en Puerto Rico, sus raíces más tempranas están en <button type="button" class="timeline-detail-geolink" data-region="Ciudad de Panamá" data-country="Panamá">Panamá</button>, donde descendientes de trabajadores caribeños de habla inglesa —muchos llegados para construir el Canal— crean desde mediados de los años ochenta el reggae en español, adaptando el <button type="button" class="timeline-detail-entrylink" data-id="reggae-origenes-jamaica-1968">reggae</button> y el dancehall jamaicanos al castellano. En Puerto Rico, durante los años noventa, esa base se mezcla con hip-hop y dancehall en la escena \'underground\' de <button type="button" class="timeline-detail-geolink" data-region="San Juan" data-country="Puerto Rico">San Juan</button>, incorporando el característico ritmo dembow tomado directamente del dancehall jamaicano. La explosión definitiva llega en 2004 con \'Gasolina\', de Daddy Yankee, la canción que convierte al reggaetón en fenómeno de la cultura pop global y abre camino a Don Omar, Tego Calderón y, generaciones después, a <button type="button" class="timeline-detail-entrylink" data-id="bad-bunny-2026">Bad Bunny</button> y Karol G.',
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
    description:
      "José Natanael Cano Monge nace el 26 de febrero de 2000 en Hermosillo, Sonora, y en 2019, apenas adolescente, publica el álbum Corridos Tumbados, que da nombre a un género nuevo: la fusión del corrido regional mexicano tradicional con el trap, el hip-hop y la estética visual del reggaetón, con Cano cantando sobre capos y lujos vestido de cadenas y ropa urbana en vez del atuendo norteño clásico. La crítica especializada lo señala como el pionero que abrió el camino para toda una generación —Peso Pluma, Junior H, Fuerza Regida, Tito Double P— que llevaría los corridos tumbados a las listas globales apenas unos años después. El 28 de agosto de 2024, en la FENAPO (Feria Nacional Potosina) de San Luis Potosí, reúne a más de 310,000 personas, un récord de asistencia en la historia de los conciertos en México — superado apenas un año más tarde, en ese mismo festival, por el reguetonero Don Omar, con cerca de 385,000 asistentes.",
    descriptionHtml:
      'José Natanael Cano Monge nace el 26 de febrero de 2000 en <button type="button" class="timeline-detail-geolink" data-region="Hermosillo, Sonora" data-country="México">Hermosillo, Sonora</button>, y en 2019, apenas adolescente, publica el álbum Corridos Tumbados, que da nombre a un género nuevo: la fusión del corrido regional mexicano tradicional (ver <button type="button" class="timeline-detail-entrylink" data-id="corrido-origenes-independencia-revolucion">los orígenes del corrido</button>) con el trap, el hip-hop y la estética visual del reggaetón, con Cano cantando sobre capos y lujos vestido de cadenas y ropa urbana en vez del atuendo norteño clásico. La crítica especializada lo señala como el pionero que abrió el camino para toda una generación —<button type="button" class="timeline-detail-entrylink" data-id="peso-pluma-2023">Peso Pluma</button>, Junior H, Fuerza Regida, Tito Double P— que llevaría los corridos tumbados a las listas globales apenas unos años después. El 28 de agosto de 2024, en la FENAPO (Feria Nacional Potosina) de San Luis Potosí, reúne a más de 310,000 personas, un récord de asistencia en la historia de los conciertos en México — superado apenas un año más tarde, en ese mismo festival, por el <button type="button" class="timeline-detail-entrylink" data-id="reggaeton-origenes-panama-puerto-rico-1985">reguetonero</button> Don Omar, con cerca de 385,000 asistentes.',
    butterfly: {
      prompt: "¿Qué hubiera pasado si Natanael Cano hubiera grabado corridos tradicionales sin fusionarlos con el trap en 2019?",
      answer:
        "El corrido regional mexicano habría seguido siendo, para las nuevas generaciones digitales, un género de sus padres y abuelos, no uno propio. Al vestirlo con la estética y el sonido del trap, Cano le dio al corrido una segunda juventud que, apenas cuatro años después, llevaría a Peso Pluma al número uno global de Spotify."
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