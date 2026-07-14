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
      "Exiliado en Kingston tras la caída de la Segunda República de Venezuela, Simón Bolívar dicta esta carta el 6 de septiembre de 1815 en respuesta a Henry Cullen, un comerciante inglés radicado en Jamaica. Publicada bajo el título 'Contestación de un Americano Meridional a un caballero de esta isla', expone las causas del fracaso independentista hasta ese momento y esboza su visión política para las futuras repúblicas americanas — dirigida, en el fondo, tanto a Cullen como a Gran Bretaña misma, cuya intervención buscaba ganar para la causa. Escrita en español sobre suelo de una colonia británica, es uno de los documentos fundacionales del pensamiento independentista latinoamericano.",
    anchor: true,
    butterfly: {
      prompt: "¿Qué hubiera pasado si Jamaica no hubiera sido colonia británica en 1815?",
      answer:
        "Bolívar no habría tenido dónde refugiarse tras la caída de la Segunda República: Jamaica era, precisamente por estar bajo control británico y no español, uno de los pocos puertos seguros frente a las fuerzas realistas. Sin ese refugio inglés en tierra caribeña, la Carta de Jamaica —y buena parte de la estrategia diplomática que Bolívar tejió después con Gran Bretaña— simplemente no habría existido."
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
    region: "Almería",
    flag: "spain-not-latam",
    type: ICON_TYPE.LITERATURE,
    description:
      "Carmen de Burgos, pionera del periodismo y del feminismo español firmando como 'Colombine', publicó esta novela corta en 1920 dentro de la colección La Novela Corta. Enrique y su amante, buscando escapar de la vigilancia y el chismorreo de las patronas españolas, deciden pasar su escapada de verano en una playa modesta de Portugal — un viaje corto pero ya al extranjero, a 'una nación más libre' donde ella podría hacerse pasar por su esposa. Bajo esa premisa de fuga, la novela desliza su crítica constante a un mundo que exigía elegir entre el deseo y la respetabilidad.",
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
    region: "Villanueva",
    type: ICON_TYPE.HISTORY,
    description:
      "Ofelia del Carmen Santos nace en 1960 en Villanueva, un pequeño pueblo de El Salvador. En 1980, a los veinte años, su tía abuela Cruz —Cruzita, hermana de su abuela— la trae a Estados Unidos, y Ofelia construye desde cero una vida nueva en Los Ángeles. Trabaja durante décadas como costurera, sosteniendo con sus propias manos una vida cómoda para su hijo mientras le inculca sus valores. En su cocina perviven las pupusas, los pastelitos salvadoreños y el pan de chompipe; de ella aprendería su hijo la primera palabra de origen náhuatl que recordaría siempre: apapachar. Muere en 2023, tras una batalla contra el cáncer, como la luchadora que fue toda su vida.",
    anchor: true,
    personalNote:
      "Mi madre. Me lo decía siempre: \"Yo te apapacho a vos, y vos me apapachas a mí\". La mujer más trabajadora y más fuerte que he conocido — todo lo que soy, y todo este proyecto, le pertenece a ella también.",
    butterfly: {
      prompt: "¿Qué hubiera pasado si su tía Cruzita nunca la hubiera traído a Los Ángeles en 1980?",
      answer:
        "Ofelia habría construido su vida en Villanueva, lejos de la máquina de coser que después sostendría a su propio hijo en Los Ángeles. Todo lo que aparece en esta línea de tiempo —incluido el proyecto mismo— existe, en el fondo, porque una tía abuela decidió cruzar una frontera con su sobrina de veinte años."
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
  }
];

/* Sort chronologically once, at load time, so the engine never has to re-sort */
TIMELINE_ENTRIES.sort((a, b) => a.year - b.year);

/* Exported as plain globals (no bundler in this stack) */
window.ERA_BANDS = ERA_BANDS;
window.GLYPH = GLYPH;
window.ICON_TYPE = ICON_TYPE;
window.TIMELINE_ENTRIES = TIMELINE_ENTRIES;