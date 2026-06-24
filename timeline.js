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

  /* ---------- DOM refs (built fresh into the mount point) ---------- */
  const mount = document.getElementById("timelineMount");
  if (!mount) {
    console.warn("Time-and-Space: #timelineMount not found in the page.");
    return;
  }

  mount.innerHTML = `
    <div class="timeline-header" id="timelineHeader">
      <span class="timeline-header-era" id="timelineHeaderEra">—</span>
      <span class="timeline-header-year" id="timelineHeaderYear">—</span>
      <span class="timeline-header-hint">usa ← → para navegar</span>
    </div>
    <div class="timeline-track-wrapper" id="timelineTrackWrapper" tabindex="0" role="region" aria-label="Línea de tiempo interactiva">
      <div class="timeline-track" id="timelineTrack" style="width:${trackWidth}px;">
        <div class="timeline-spine"></div>
      </div>
    </div>
    <div class="timeline-detail-panel" id="timelineDetailPanel">
      <p class="timeline-detail-label">Selecciona una obra</p>
      <h3 class="timeline-detail-title">Explora la línea de tiempo</h3>
      <p class="timeline-detail-body">Cada punto conecta una obra con su momento histórico.</p>
    </div>
    <div class="timeline-butterfly" id="timelineButterfly" aria-live="polite"></div>
  `;

  const track = document.getElementById("timelineTrack");
  const trackWrapper = document.getElementById("timelineTrackWrapper");
  const headerEra = document.getElementById("timelineHeaderEra");
  const headerYear = document.getElementById("timelineHeaderYear");
  const detailPanel = document.getElementById("timelineDetailPanel");
  const butterflyEl = document.getElementById("timelineButterfly");

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

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

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
    labelEl.textContent = era.label;
    track.appendChild(labelEl);
  });

  /* ---------- Collision-aware vertical offset within dense eras ----------
     Walk entries left-to-right in x-order. Track the x-position last
     used on each of 3 stagger rows; place each entry on the first row
     whose last-used x is at least MIN_GAP_PX behind this entry's x.
     This correctly handles chains of 3+ close entries (including exact
     same-year duplicates, which a simple prev-only check misses). */
  const MIN_GAP_PX = 46;
  const STAGGER_ROWS = 3;
  const sortedForLayout = entries
    .map((e, idx) => ({ idx, x: yearToX(e.year) }))
    .sort((a, b) => a.x - b.x);

  const rowOf = new Array(entries.length).fill(0);
  const lastXOnRow = new Array(STAGGER_ROWS).fill(-Infinity);

  sortedForLayout.forEach(({ idx, x }) => {
    let placedRow = 0;
    for (let r = 0; r < STAGGER_ROWS; r++) {
      if (x - lastXOnRow[r] >= MIN_GAP_PX) {
        placedRow = r;
        break;
      }
      // if no row has enough clearance, fall back to the row that's
      // furthest behind (least bad collision) rather than always row 0
      if (lastXOnRow[r] < lastXOnRow[placedRow]) placedRow = r;
    }
    rowOf[idx] = placedRow;
    lastXOnRow[placedRow] = x;
  });

  /* ---------- Render entries ---------- */
  entries.forEach((entry, idx) => {
    const isGlyph = entry.glyph;
    const x = yearToX(entry.year);
    const rowOffset = rowOf[idx] * 22;

    const el = document.createElement(isGlyph ? "div" : "button");
    el.className = isGlyph ? "timeline-glyph" : "timeline-entry";
    el.style.left = x + "px";
    if (!isGlyph && rowOffset) {
      el.style.top = 84 + rowOffset + "px";
    }
    el.dataset.index = idx;
    el.dataset.type = entry.type || "literature";
    el.setAttribute("tabindex", "0");
    el.setAttribute(
      "aria-label",
      `${entry.title}, ${entry.author}, ${entry.year}`
    );

    if (isGlyph) {
      el.textContent = entry.glyph;
      const stem = document.createElement("div");
      stem.className = "timeline-glyph-stem";
      stem.style.left = x + "px";
      track.appendChild(stem);
    } else {
      el.innerHTML = `
        <span class="timeline-entry-dot"></span>
        <span class="timeline-entry-year">${entry.year}</span>
      `;
    }

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

  function selectEntry(idx) {
    const entry = entries[idx];
    if (!entry) return;

    document
      .querySelectorAll(".timeline-entry.is-active")
      .forEach((n) => n.classList.remove("is-active"));
    const node = track.querySelector(`[data-index="${idx}"]`);
    if (node) node.classList.add("is-active");

    activeIndex = idx;

    const flagHtml = entry.flag
      ? `<span class="timeline-detail-flag">${escapeHtml(
          entry.flag === "spain-not-latam"
            ? "España, no Latinoamérica"
            : entry.flag === "essay-not-novel"
            ? "Ensayo, no novela"
            : entry.flag
        )}</span>`
      : "";

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

    detailPanel.innerHTML = `
      <p class="timeline-detail-label">${escapeHtml(entry.country)} · ${yearLabel}</p>
      <h3 class="timeline-detail-title">${escapeHtml(entry.title)}</h3>
      <p class="timeline-detail-meta">${escapeHtml(entry.author)}</p>
      <p class="timeline-detail-body">${escapeHtml(entry.description)}</p>
      ${flagHtml}
      ${personalNoteHtml}
    `;
    detailPanel.classList.add("is-open");

    scrollEntryIntoView(idx);
    updateHeader(entry.year);
    updateButterfly(entry.year);
  }

  function scrollEntryIntoView(idx) {
    const entry = entries[idx];
    if (!entry) return;
    const x = yearToX(entry.year);
    const targetScroll = x - trackWrapper.clientWidth / 2;
    trackWrapper.scrollTo({ left: targetScroll, behavior: "smooth" });
  }

  /* ---------- Dynamic header ---------- */
  function updateHeader(year) {
    const era = eraForYear(year);
    headerEra.textContent = era.label;
    headerEra.style.color = era.color.startsWith("var(") ? "" : era.color;
    headerYear.textContent = Math.round(year) + (year < 0 ? " a.C." : " d.C.");
  }

  /* ---------- Butterfly Effect panel ---------- */
  let lastButterflyEra = null;
  function updateButterfly(year) {
    const era = eraForYear(year);
    if (era.id === lastButterflyEra) return;
    lastButterflyEra = era.id;
    butterflyEl.innerHTML = `
      <p class="timeline-butterfly-eyebrow">Efecto Mariposa · ${escapeHtml(era.label)}</p>
      <p class="timeline-butterfly-prompt">${escapeHtml(era.butterfly.prompt)}</p>
      <p class="timeline-butterfly-answer">${escapeHtml(era.butterfly.answer)}</p>
    `;
  }

  /* ---------- Scroll-position → header tracking (no entry selected) ---------- */
  let scrollRaf = null;
  trackWrapper.addEventListener("scroll", () => {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
      const centerX = trackWrapper.scrollLeft + trackWrapper.clientWidth / 2;
      const year = xToYear(centerX);
      updateHeader(year);
      updateButterfly(year);
      scrollRaf = null;
    });
  });

  /* ---------- Keyboard scrubbing ----------
     Moves in pixel-space, not year-space, so a single arrow-press
     feels consistent whether you're in a sparse or dense era —
     otherwise the same keypress would leap centuries in 1500 but
     crawl through individual years in 1970. */
  const STEP_PX = 24;
  const BIG_STEP_PX = 240;

  trackWrapper.addEventListener("keydown", (e) => {
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
  updateButterfly(MIN_YEAR);
})();