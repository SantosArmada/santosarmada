/* =========================================================
   TIME-AND-SPACE — Timeline Engine
   Vanilla JS. No dependencies. Reads window.TIMELINE_ENTRIES,
   window.ERA_BANDS, window.GLYPH, window.ICON_TYPE from
   timeline-data.js (load that file first).

   SCALE MODEL: piecewise-linear by era. Calendar years are NOT
   mapped 1:1 to pixels across the whole track — each era band
   gets its own fixed pixel-width segment, sized by how many
   entries it actually holds (with a floor so sparse eras still
   read as real space). Years map linearly *within* their own
   era's segment. This keeps the 1900–1990 cluster readable
   without making 1492–1809 either invisible or absurdly long.
   ========================================================= */

(function () {
  "use strict";

  const entries = window.TIMELINE_ENTRIES || [];
  const eraBands = window.ERA_BANDS || [];

  if (!entries.length || !eraBands.length) {
    console.warn("Time-and-Space: timeline-data.js did not load before timeline.js");
    return;
  }

  const MIN_YEAR = eraBands[0].startYear;
  const MAX_YEAR = eraBands[eraBands.length - 1].endYear;

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- Build the piecewise scale ---------- */
  const MIN_SEGMENT_PX = 420;   // floor: even a near-empty era reads as real space
  const PX_PER_ENTRY = 70;      // how much width one entry "earns" in a dense era
  const PX_PER_CALENDAR_YEAR_FLOOR = 0.15; // sparse eras still grow a little with their span

  eraBands.forEach((era) => {
    const count = entries.filter(
      (e) => e.year >= era.startYear && e.year <= era.endYear
    ).length;
    const span = era.endYear - era.startYear;
    const contentWidth = count * PX_PER_ENTRY;
    const spanWidth = span * PX_PER_CALENDAR_YEAR_FLOOR;
    era.trackPx = Math.max(MIN_SEGMENT_PX, contentWidth, spanWidth);
  });

  // Running start-x offset for each era segment
  let runningX = 0;
  eraBands.forEach((era) => {
    era.trackStartX = runningX;
    runningX += era.trackPx;
  });
  const trackWidth = runningX;

  /* ---------- Scale helpers (piecewise) ---------- */
  function eraForYear(year) {
    return (
      eraBands.find((e) => year >= e.startYear && year <= e.endYear) ||
      eraBands[eraBands.length - 1]
    );
  }

  function yearToX(year) {
    const era = eraForYear(year);
    const span = era.endYear - era.startYear || 1;
    const fraction = (year - era.startYear) / span;
    return era.trackStartX + fraction * era.trackPx;
  }

  function xToYear(x) {
    let era = eraBands[0];
    for (let i = 0; i < eraBands.length; i++) {
      if (x >= eraBands[i].trackStartX) era = eraBands[i];
    }
    const fraction = (x - era.trackStartX) / era.trackPx;
    return era.startYear + fraction * (era.endYear - era.startYear);
  }

  /* ---------- Country list (for the filter dropdown) ---------- */
  const distinctCountries = Array.from(
    new Set(entries.filter((e) => !e.glyph && e.country).map((e) => e.country))
  ).sort((a, b) => a.localeCompare(b, "es"));

  /* ---------- DOM refs (built fresh into the mount point) ---------- */
  const mount = document.getElementById("timelineMount");
  if (!mount) {
    console.warn("Time-and-Space: #timelineMount not found in the page.");
    return;
  }

  const eraNavHtml = eraBands
    .map(
      (era) =>
        `<button type="button" class="timeline-era-nav-btn" data-era-id="${era.id}" style="--era-nav-color:${era.color}">${escapeHtml(era.label)}</button>`
    )
    .join("");

  const countryOptionsHtml = distinctCountries
    .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
    .join("");

  const minimapErasHtml = eraBands
    .map(
      (era) =>
        `<div class="timeline-minimap-era" style="left:${(era.trackStartX / trackWidth) * 100}%;width:${(era.trackPx / trackWidth) * 100}%;background:${era.color}"></div>`
    )
    .join("");

  mount.innerHTML = `
    <div class="timeline-sticky-bar" id="timelineStickyBar">
      <div class="timeline-header" id="timelineHeader">
        <span class="timeline-header-era" id="timelineHeaderEra">—</span>
        <span class="timeline-header-year" id="timelineHeaderYear">—</span>
        <span class="timeline-header-hint">usa ← → para navegar</span>
      </div>
      <div class="timeline-controls" id="timelineControls">
        <div class="timeline-era-nav" id="timelineEraNav">${eraNavHtml}</div>
        <div class="timeline-filters" id="timelineFilters">
          <div class="timeline-filter-types" id="timelineFilterTypes">
            <button type="button" class="timeline-filter-chip is-active" data-type="literature">Literatura</button>
            <button type="button" class="timeline-filter-chip is-active" data-type="history">Historia</button>
            <button type="button" class="timeline-filter-chip is-active" data-type="conflict">Conflicto</button>
            <button type="button" class="timeline-filter-chip is-active" data-type="music">Música</button>
            <button type="button" class="timeline-filter-chip is-active" data-type="vision">Visión</button>
          </div>
          <select class="timeline-filter-country" id="timelineFilterCountry" aria-label="Filtrar por país">
            <option value="">Todos los países</option>
            ${countryOptionsHtml}
          </select>
        </div>
      </div>
    </div>
    <div class="timeline-minimap" id="timelineMinimap">
      ${minimapErasHtml}
      <div class="timeline-minimap-viewport" id="timelineMinimapViewport"></div>
    </div>
    <div class="timeline-track-wrapper" id="timelineTrackWrapper" tabindex="0" role="region" aria-label="Línea de tiempo interactiva">
      <div class="timeline-track" id="timelineTrack" style="width:${trackWidth}px;">
        <div class="timeline-spine"></div>
      </div>
    </div>
    <div class="timeline-detail-panel" id="timelineDetailPanel">
      <button class="timeline-detail-close" id="timelineDetailClose" type="button" aria-label="Cerrar">&times;</button>
      <div class="timeline-detail-content" id="timelineDetailContent">
        <p class="timeline-detail-label">Selecciona una obra</p>
        <h3 class="timeline-detail-title">Explora la línea de tiempo</h3>
        <p class="timeline-detail-body">Cada punto conecta una obra con su momento histórico.</p>
      </div>
    </div>
    <div class="timeline-butterfly" id="timelineButterfly" aria-live="polite"></div>
  `;

  const track = document.getElementById("timelineTrack");
  const trackWrapper = document.getElementById("timelineTrackWrapper");
  const headerEra = document.getElementById("timelineHeaderEra");
  const headerYear = document.getElementById("timelineHeaderYear");
  const detailPanel = document.getElementById("timelineDetailPanel");
  const detailContent = document.getElementById("timelineDetailContent");
  const detailClose = document.getElementById("timelineDetailClose");
  const butterflyEl = document.getElementById("timelineButterfly");
  const eraNavButtons = Array.from(document.querySelectorAll(".timeline-era-nav-btn"));
  const filterTypeButtons = Array.from(document.querySelectorAll(".timeline-filter-chip"));
  const countrySelect = document.getElementById("timelineFilterCountry");
  const minimap = document.getElementById("timelineMinimap");
  const minimapViewport = document.getElementById("timelineMinimapViewport");

  /* ---------- Render era bands ---------- */
  eraBands.forEach((era) => {
    const band = document.createElement("div");
    band.className = "timeline-era-band";
    band.style.left = era.trackStartX + "px";
    band.style.width = era.trackPx + "px";
    band.style.background = era.color;
    band.dataset.eraId = era.id;
    track.appendChild(band);

    const labelEl = document.createElement("div");
    labelEl.className = "timeline-era-label";
    labelEl.style.left = era.trackStartX + 12 + "px";
    labelEl.style.borderBottomColor = era.color;
    labelEl.textContent = era.label;
    track.appendChild(labelEl);
  });

  /* ---------- Shared x-order (feeds clustering + keyboard jump) ----------
     Excludes glyph entries — they live in their own sparse lane above
     the main track and were never part of the collision problem.
     Positions by entry.trackYear when set, falling back to entry.year —
     lets a handful of real, tightly-dated entries (e.g. five events across
     28 years in a 791-year era) get spread out on the track without
     touching the actual year shown in their label, header, or detail
     panel. Only the x-position math reads trackYear; everything else
     keeps using entry.year. */
  const entriesByX = entries
    .map((e, idx) => ({ idx, x: yearToX(e.trackYear || e.year) }))
    .filter((item) => !entries[item.idx].glyph)
    .sort((a, b) => a.x - b.x);

  const xByIdx = new Map(entriesByX.map((item) => [item.idx, item.x]));

  /* ---------- Clustering ----------
     Single pass over x-sorted entries. Anything within CLUSTER_GAP_PX of
     the previous entry joins the same cluster. Clusters of size 1 render
     as a normal dot; size 2+ render as a numbered badge that opens a
     list in the detail panel — replaces the old 3-row stagger, which
     started overlapping once a 4th entry landed in the same ~46px
     window. */
  const CLUSTER_GAP_PX = 34;
  const clusters = [];
  entriesByX.forEach(({ idx, x }) => {
    const last = clusters[clusters.length - 1];
    if (last && x - last.lastX < CLUSTER_GAP_PX) {
      last.members.push(idx);
      last.lastX = x;
    } else {
      clusters.push({ members: [idx], lastX: x });
    }
  });

  /* ---------- Render clustered entries + cluster badges ---------- */
  const clusterElements = []; // { el, members }

  function renderSingleEntryMarker(idx) {
    const entry = entries[idx];
    const x = xByIdx.get(idx);
    const el = document.createElement("button");
    el.className = "timeline-entry";
    el.style.left = x + "px";
    el.dataset.index = idx;
    el.dataset.type = entry.type || "literature";
    el.dataset.country = entry.country || "";
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `${entry.title}, ${entry.author}, ${entry.year}`);
    el.innerHTML = `
      <span class="timeline-entry-dot"></span>
      <span class="timeline-entry-year">${entry.year}</span>
    `;
    el.addEventListener("click", () => selectEntry(idx));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectEntry(idx);
      }
    });
    track.appendChild(el);
  }

  function renderClusterMarker(cluster) {
    const xs = cluster.members.map((idx) => xByIdx.get(idx));
    const meanX = xs.reduce((a, b) => a + b, 0) / xs.length;
    const years = cluster.members.map((idx) => entries[idx].year);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    const yearLabel = minYear === maxYear ? String(minYear) : `${minYear}–${maxYear}`;

    const el = document.createElement("button");
    el.className = "timeline-cluster";
    el.style.left = meanX + "px";
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `${cluster.members.length} obras, ${yearLabel}`);
    el.innerHTML = `
      <span class="timeline-cluster-badge">${cluster.members.length}</span>
      <span class="timeline-entry-year">${yearLabel}</span>
    `;
    const open = () => selectCluster(cluster.members, meanX, el);
    el.addEventListener("click", open);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
    track.appendChild(el);
    clusterElements.push({ el, members: cluster.members });
  }

  clusters.forEach((cluster) => {
    if (cluster.members.length === 1) {
      renderSingleEntryMarker(cluster.members[0]);
    } else {
      renderClusterMarker(cluster);
    }
  });

  /* ---------- Render glyph entries (own lane, unaffected by clustering) ---------- */
  entries.forEach((entry, idx) => {
    if (!entry.glyph) return;
    const x = yearToX(entry.year);

    const stem = document.createElement("div");
    stem.className = "timeline-glyph-stem";
    stem.style.left = x + "px";
    track.appendChild(stem);

    const el = document.createElement("div");
    el.className = "timeline-glyph";
    el.style.left = x + "px";
    el.dataset.index = idx;
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `${entry.title}, ${entry.author}, ${entry.year}`);
    el.textContent = entry.glyph;
    el.addEventListener("click", () => selectEntry(idx));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectEntry(idx);
      }
    });
    track.appendChild(el);
  });

  /* ---------- Detail panel ---------- */
  let activeIndex = -1;

  function clearActiveMarkers() {
    document
      .querySelectorAll(".timeline-entry.is-active, .timeline-cluster.is-active")
      .forEach((n) => n.classList.remove("is-active"));
  }

  function scrollXIntoView(x) {
    const targetScroll = x - trackWrapper.clientWidth / 2;
    trackWrapper.scrollTo({ left: targetScroll, behavior: "smooth" });
  }

  function scrollEntryIntoView(idx) {
    const entry = entries[idx];
    if (!entry) return;
    // Reuse the same x already computed for the marker (respects
    // trackYear) instead of recomputing from entry.year, so this always
    // centers on where the dot actually sits, not its true-year position.
    const x = xByIdx.has(idx) ? xByIdx.get(idx) : yearToX(entry.year);
    scrollXIntoView(x);
  }

  function selectEntry(idx) {
    const entry = entries[idx];
    if (!entry) return;

    clearActiveMarkers();
    const node = track.querySelector(`[data-index="${idx}"]`);
    if (node) node.classList.add("is-active");

    activeIndex = idx;

    const NON_LATAM_COUNTRIES = ["China", "San Vicente y las Granadinas", "Portugal", "Italia", "Turquía"];
    // Countries anchoring an entry in Africa get their own purple badge
    // instead of falling through to the green "Latinoamérica" default.
    const AFRICA_COUNTRIES = [
      "Angola", "Argelia", "Benín", "Botsuana", "Burkina Faso", "Burundi",
      "Camerún", "Chad", "Congo", "República del Congo",
      "República Democrática del Congo", "Costa de Marfil", "Egipto",
      "Eritrea", "Etiopía", "Gabón", "Gambia", "Ghana", "Guinea",
      "Guinea-Bisáu", "Guinea Ecuatorial", "Kenia", "Lesoto", "Liberia",
      "Libia", "Madagascar", "Malaui", "Mali", "Marruecos", "Mauricio",
      "Mauritania", "Mozambique", "Namibia", "Níger", "Nigeria",
      "República Centroafricana", "Ruanda", "Senegal", "Sierra Leona",
      "Somalia", "Sudáfrica", "Sudán", "Sudán del Sur", "Tanzania", "Togo",
      "Túnez", "Uganda", "Yibuti", "Zambia", "Zimbabue", "Esuatini"
    ];
    const isSpain = entry.country === "España";
    const isUS = entry.country === "Estados Unidos";
    const isAfrica = AFRICA_COUNTRIES.includes(entry.country);
    const isOtherRegion = NON_LATAM_COUNTRIES.includes(entry.country);
    const isNavegando = entry.flag === "navegando";
    const regionFlagClass = isNavegando
      ? "timeline-detail-flag-navegando"
      : isSpain
      ? "timeline-detail-flag-spain"
      : isUS
      ? "timeline-detail-flag-us"
      : isAfrica
      ? "timeline-detail-flag-africa"
      : isOtherRegion
      ? "timeline-detail-flag-other"
      : "timeline-detail-flag-latam";
    const regionFlagLabel = isNavegando
      ? "Navegando"
      : isSpain
      ? "España"
      : isUS
      ? "Estados Unidos"
      : isAfrica
      ? "África"
      : isOtherRegion
      ? entry.country
      : "Latinoamérica";
    const regionFlagHtml = `<span class="timeline-detail-flag ${regionFlagClass}">${escapeHtml(
      regionFlagLabel
    )}</span>`;

    const customFlagHtml =
      entry.flag && entry.flag !== "spain-not-latam" && entry.flag !== "navegando"
        ? `<span class="timeline-detail-flag">${escapeHtml(
            entry.flag === "essay-not-novel" ? "Ensayo, no novela" : entry.flag
          )}</span>`
        : "";

    const flagHtml = regionFlagHtml + customFlagHtml;

    const yearLabel = entry.endYear
      ? `${entry.year} → refiere ${entry.endYear}`
      : entry.pubYear
      ? `escrito ${entry.year}, publicado ${entry.pubYear}`
      : `${entry.year}`;

    const personalNoteHtml = entry.personalNote
      ? `<div class="timeline-detail-personal">
           <p class="timeline-detail-personal-label">Nota personal</p>
           <p class="timeline-detail-personal-text">${escapeHtml(entry.personalNote)}</p>
           ${
             entry.authorPageSlug
               ? `<a class="timeline-detail-personal-link" href="/autores/${escapeHtml(
                   entry.authorPageSlug
                 )}.html">Ver a ${escapeHtml(entry.author)} en Autores →</a>`
               : ""
           }
         </div>`
      : "";

    // Long, fact-dense entries can grow the fixed-position panel taller
    // than the viewport, pushing the top-right close button off-screen.
    // A second close button at the end of the content gives the reader
    // a way out without scrolling back up to hunt for it.
    const isLongEntry = (entry.description || "").length > 1000;
    const bottomCloseHtml = isLongEntry
      ? `<button type="button" class="timeline-detail-close-bottom" aria-label="Cerrar">&times;</button>`
      : "";

    detailContent.innerHTML = `
      <p class="timeline-detail-label"><button type="button" class="timeline-detail-region-link">${escapeHtml(entry.region || entry.country)}</button> · ${yearLabel}</p>
      <h3 class="timeline-detail-title">${escapeHtml(entry.title)}</h3>
      <p class="timeline-detail-meta">${
        entry.authorEntryId
          ? `<button type="button" class="timeline-detail-entrylink" data-id="${escapeHtml(entry.authorEntryId)}">${escapeHtml(entry.author)}</button>`
          : escapeHtml(entry.author)
      }</p>
      <p class="timeline-detail-body">${entry.descriptionHtml || escapeHtml(entry.description)}</p>
      ${flagHtml}
      ${personalNoteHtml}
      ${bottomCloseHtml}
    `;
    detailPanel.classList.add("is-open");

    const detailCloseBottom = detailContent.querySelector(".timeline-detail-close-bottom");
    if (detailCloseBottom) {
      detailCloseBottom.addEventListener("click", closeDetailPanel);
    }

    // Closes the loop with the globe: selecting an entry rotates the
    // globe (above) to that entry's region (falling back to its country
    // if no region-specific centroid exists). Clicking the region name
    // itself re-triggers the same focus and scrolls the globe into view,
    // so the effect is visible even after scrolling down into the
    // timeline.
    function focusGlobeOnEntry() {
      if (typeof window.focusGlobeOnRegion === "function" && entry.country) {
        window.focusGlobeOnRegion(entry.region, entry.country);
      }
    }

    const regionLinkEl = detailContent.querySelector(".timeline-detail-region-link");
    if (regionLinkEl) {
      regionLinkEl.addEventListener("click", () => {
        focusGlobeOnEntry();
        const globeEl = document.getElementById("globeViz");
        if (globeEl) {
          globeEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    // Inline "fly the globe here" links embedded in entry.descriptionHtml
    // (currently only the MÚSICA entries use these) — same idea as the
    // region-link button above, just one per place named in the body
    // text instead of a single link tied to the whole entry.
    function activateGeoLink(el) {
      if (typeof window.focusGlobeOnRegion !== "function") return;
      window.focusGlobeOnRegion(el.getAttribute("data-region") || "", el.getAttribute("data-country"));
      const globeEl = document.getElementById("globeViz");
      if (globeEl) {
        globeEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    detailContent.querySelectorAll(".timeline-detail-geolink[data-country]").forEach((el) => {
      el.addEventListener("click", () => activateGeoLink(el));
      el.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        activateGeoLink(el);
      });
    });

    // Inline "jump to that other entry" links embedded in
    // entry.descriptionHtml (e.g. Shakira's body text naming Bad Bunny) —
    // re-runs selectEntry for the linked id, swapping the whole panel.
    detailContent.querySelectorAll(".timeline-detail-entrylink[data-id]").forEach((el) => {
      const jump = () => window.selectTimelineEntryById(el.getAttribute("data-id"));
      el.addEventListener("click", jump);
      el.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        jump();
      });
    });

    scrollEntryIntoView(idx);
    updateHeader(entry.year);
    updateButterfly(entry.year, entry);
    focusGlobeOnEntry();
  }

  /* ---------- Cluster list (detail panel, list mode) ----------
     Reuses the same panel as selectEntry rather than a separate
     component: picking a row just calls selectEntry, which re-renders
     the panel as a normal single-entry view. */
  function selectCluster(members, x, node) {
    clearActiveMarkers();
    if (node) node.classList.add("is-active");
    activeIndex = -1;

    // Same-year ties break on `month` (1-12, optional) so entries sharing
    // a year still list chronologically instead of by array insertion order.
    const sortedMembers = members.slice().sort((a, b) => {
      const yearDiff = entries[a].year - entries[b].year;
      if (yearDiff !== 0) return yearDiff;
      return (entries[a].month || 0) - (entries[b].month || 0);
    });
    const rowsHtml = sortedMembers
      .map((idx) => {
        const e = entries[idx];
        return `<li class="timeline-cluster-list-item" data-idx="${idx}" tabindex="0">
          <span class="timeline-cluster-list-year">${e.year}</span>
          <span class="timeline-cluster-list-title">${escapeHtml(e.title)}</span>
          <span class="timeline-cluster-list-author">${escapeHtml(e.author)}</span>
        </li>`;
      })
      .join("");

    detailContent.innerHTML = `
      <p class="timeline-detail-label">${members.length} obras en este punto</p>
      <ul class="timeline-cluster-list">${rowsHtml}</ul>
    `;
    detailPanel.classList.add("is-open");

    detailContent.querySelectorAll(".timeline-cluster-list-item").forEach((li) => {
      const openEntry = () => selectEntry(Number(li.dataset.idx));
      li.addEventListener("click", openEntry);
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openEntry();
        }
      });
    });

    const avgYear = members.reduce((sum, idx) => sum + entries[idx].year, 0) / members.length;
    scrollXIntoView(x);
    updateHeader(avgYear);
    updateButterfly(avgYear);
  }

  /* ---------- Close button ----------
     Without this, the fixed-position panel can grow tall enough on
     mobile to block the whole screen with no way to dismiss it. */
  function closeDetailPanel() {
    detailPanel.classList.remove("is-open");
    butterflyEl.classList.add("is-hidden");
    activeIndex = -1;
    clearActiveMarkers();
    if (typeof window.clearGlobeRegionBlipDelayed === "function") {
      window.clearGlobeRegionBlipDelayed(3000);
    }
  }

  detailClose.addEventListener("click", closeDetailPanel);

  /* ---------- Dynamic header ---------- */
  function updateHeader(year) {
    const era = eraForYear(year);
    headerEra.textContent = era.label;
    headerEra.style.color = era.color.startsWith("var(") ? "" : era.color;
    headerYear.textContent = Math.round(year) + (year < 0 ? " a.C." : " d.C.");
    eraNavButtons.forEach((btn) => {
      btn.classList.toggle("is-current", btn.dataset.eraId === era.id);
    });
  }

  /* ---------- Butterfly Effect panel ----------
     Each entry can carry its own butterfly {prompt, answer}. When one
     is selected (click) or nearest-to-scroll, we show ITS butterfly.
     Entries without one (rare) fall back to their era's butterfly so
     the panel is never empty. */
  function nearestEntryToYear(year) {
    let closest = entries[0];
    let minDiff = Infinity;
    for (let i = 0; i < entries.length; i++) {
      const diff = Math.abs(entries[i].year - year);
      if (diff < minDiff) {
        minDiff = diff;
        closest = entries[i];
      }
    }
    return closest;
  }

  /* Shown once, before the user has scrolled the track or clicked an
     entry. The very next call to updateButterfly() (from the scroll
     listener or a click) replaces it — lastButterflyKey stays null so
     that first real call is never skipped as a no-op duplicate. */
  function showIntroButterfly() {
    butterflyEl.classList.remove("is-hidden");
    butterflyEl.innerHTML = `
      <p class="timeline-butterfly-eyebrow">Efecto Mariposa</p>
      <p class="timeline-butterfly-prompt">¿Qué hubiera pasado si España nunca se hubiera formado como estado?</p>
      <p class="timeline-butterfly-answer">Este es quizás el efecto mariposa más grande de todos. Hoy, cerca de quinientos millones de personas hablan español. Sin España, países como México, Colombia, Argentina, Perú, Chile, Venezuela, Ecuador, Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, Cuba y República Dominicana quizás nunca habrían sido hispanohablantes — el mapa lingüístico entero del hemisferio occidental sería otro. Tal vez el portugués o el inglés dominarían en su lugar, y lenguas indígenas como el náhuatl, el quechua, el aimara, las lenguas mayas y el mapudungún habrían conservado estatus de lengua de estado.</p>
    `;
  }

  let lastButterflyKey = null;
  function updateButterfly(year, explicitEntry) {
    const entry = explicitEntry || nearestEntryToYear(year);
    const era = eraForYear(entry.year);
    const bf = entry.butterfly || era.butterfly;
    const usingEntry = !!entry.butterfly;
    const key = usingEntry ? "entry:" + entry.id : "era:" + era.id;
    const wasHidden = butterflyEl.classList.contains("is-hidden");
    if (key === lastButterflyKey && !wasHidden) return;
    lastButterflyKey = key;
    butterflyEl.classList.remove("is-hidden");
    const titleHasYear = usingEntry && entry.title.indexOf(String(entry.year)) !== -1;
    const eyebrowLabel = usingEntry
      ? (titleHasYear ? entry.title : entry.year + " · " + entry.title)
      : era.label;
    butterflyEl.innerHTML = `
      <p class="timeline-butterfly-eyebrow">Efecto Mariposa · ${escapeHtml(eyebrowLabel)}</p>
      <p class="timeline-butterfly-prompt">${escapeHtml(bf.prompt)}</p>
      <p class="timeline-butterfly-answer">${escapeHtml(bf.answer)}</p>
    `;
  }

  /* ---------- Minimap sync ---------- */
  function syncMinimap() {
    const vpWidthPct = Math.min(100, (trackWrapper.clientWidth / trackWidth) * 100);
    const rawLeftPct = (trackWrapper.scrollLeft / trackWidth) * 100;
    const vpLeftPct = Math.max(0, Math.min(100 - vpWidthPct, rawLeftPct));
    minimapViewport.style.width = vpWidthPct + "%";
    minimapViewport.style.left = vpLeftPct + "%";
  }

  /* ---------- Scroll-position → header/minimap tracking ---------- */
  let scrollRaf = null;
  trackWrapper.addEventListener("scroll", () => {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
      const centerX = trackWrapper.scrollLeft + trackWrapper.clientWidth / 2;
      const year = xToYear(centerX);
      updateHeader(year);
      updateButterfly(year);
      syncMinimap();
      scrollRaf = null;
    });
  });

  /* ---------- Era-jump nav ---------- */
  eraNavButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const era = eraBands.find((e) => e.id === btn.dataset.eraId);
      if (era) {
        trackWrapper.scrollTo({ left: Math.max(0, era.trackStartX - 24), behavior: "smooth" });
      }
    });
  });

  /* ---------- Minimap interaction ---------- */
  minimap.addEventListener("click", (e) => {
    if (e.target === minimapViewport) return;
    const rect = minimap.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    trackWrapper.scrollTo({
      left: fraction * trackWidth - trackWrapper.clientWidth / 2,
      behavior: "smooth",
    });
  });

  let minimapDragging = false;
  minimapViewport.addEventListener("pointerdown", (e) => {
    minimapDragging = true;
    minimapViewport.setPointerCapture(e.pointerId);
  });
  minimapViewport.addEventListener("pointermove", (e) => {
    if (!minimapDragging) return;
    const rect = minimap.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    trackWrapper.scrollLeft = fraction * trackWidth - trackWrapper.clientWidth / 2;
  });
  function endMinimapDrag(e) {
    if (!minimapDragging) return;
    minimapDragging = false;
    if (minimapViewport.hasPointerCapture(e.pointerId)) {
      minimapViewport.releasePointerCapture(e.pointerId);
    }
  }
  minimapViewport.addEventListener("pointerup", endMinimapDrag);
  minimapViewport.addEventListener("pointercancel", endMinimapDrag);

  /* ---------- Filters ---------- */
  // Most entries carry a single `type` (drives both the filter chip match
  // and the dot color). A few — the MÚSICA genre-origin entries, which are
  // as much a historical event as a musical one — also carry a `types`
  // array for filter purposes; the dot color still comes from `type` alone,
  // so no CSS changes are needed for the dual tag to work.
  function entryFilterTypes(entry) {
    return entry.types || [entry.type || "literature"];
  }

  function applyFilters() {
    const activeTypes = new Set(
      filterTypeButtons.filter((b) => b.classList.contains("is-active")).map((b) => b.dataset.type)
    );
    const activeCountry = countrySelect.value;

    track.querySelectorAll(".timeline-entry").forEach((el) => {
      const idx = Number(el.dataset.index);
      const entry = entries[idx];
      const matches =
        entryFilterTypes(entry).some((t) => activeTypes.has(t)) &&
        (!activeCountry || entry.country === activeCountry);
      el.classList.toggle("is-filtered-out", !matches);
    });

    clusterElements.forEach(({ el, members }) => {
      const anyMatch = members.some((idx) => {
        const entry = entries[idx];
        return (
          entryFilterTypes(entry).some((t) => activeTypes.has(t)) &&
          (!activeCountry || entry.country === activeCountry)
        );
      });
      el.classList.toggle("is-filtered-out", !anyMatch);
    });
  }

  filterTypeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("is-active");
      applyFilters();
    });
  });
  countrySelect.addEventListener("change", applyFilters);

  /* ---------- Keyboard navigation ----------
     Plain ArrowLeft/ArrowRight move in pixel-space (unchanged) so a
     single keypress feels consistent whether you're in a sparse or
     dense era. Ctrl/Cmd+Arrow instead jumps entry-to-entry using the
     same x-order that feeds clustering. Home/End jump to the ends. */
  const STEP_PX = 24;
  const BIG_STEP_PX = 240;

  function nearestEntryPosToX(x) {
    let best = 0;
    let bestDiff = Infinity;
    entriesByX.forEach((item, i) => {
      const diff = Math.abs(item.x - x);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = i;
      }
    });
    return best;
  }

  function jumpToAdjacentEntry(direction) {
    if (!entriesByX.length) return;
    const centerX = trackWrapper.scrollLeft + trackWrapper.clientWidth / 2;
    const currentPos = nearestEntryPosToX(centerX);
    const targetPos = Math.min(entriesByX.length - 1, Math.max(0, currentPos + direction));
    selectEntry(entriesByX[targetPos].idx);
  }

  trackWrapper.addEventListener("keydown", (e) => {
    if (e.key === "Home") {
      e.preventDefault();
      trackWrapper.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      trackWrapper.scrollTo({ left: trackWidth, behavior: "smooth" });
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
      e.preventDefault();
      jumpToAdjacentEntry(e.key === "ArrowRight" ? 1 : -1);
      return;
    }
    if (["ArrowLeft", "ArrowRight"].indexOf(e.key) === -1) return;
    e.preventDefault();

    const direction = e.key === "ArrowRight" ? 1 : -1;
    const step = e.shiftKey ? BIG_STEP_PX : STEP_PX;

    trackWrapper.scrollBy({ left: step * direction, behavior: "auto" });
  });

  trackWrapper.addEventListener("click", (e) => {
    if (e.target === trackWrapper || e.target === track) {
      trackWrapper.focus();
    }
  });

  /* ---------- Initial state ---------- */
  updateHeader(MIN_YEAR);
  showIntroButterfly();
  syncMinimap();

  /* ---------- External hook (used by the globe's Connected Works) ----------
     Lets other scripts (globe.js) jump straight to a specific entry by
     id: scrolls it into view on the track, opens its detail panel, and
     shows its own Efecto Mariposa card — same as clicking it directly. */
  window.selectTimelineEntryById = function (id) {
    const idx = entries.findIndex((e) => e.id === id);
    if (idx === -1) return false;
    selectEntry(idx);
    return true;
  };

  /* Deep link support: globe.html#<entry-id> (e.g. linked from a merch
     product page) jumps straight to that entry on load — same scroll +
     select + detail-panel behavior as clicking it, via the same hook
     globe.js's Connected Works list already uses. */
  if (window.location.hash.length > 1) {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (entries.some((e) => e.id === targetId) && typeof window.goToTimelineEntry === "function") {
      window.goToTimelineEntry(targetId);
    }
  }
})();
