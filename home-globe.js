(function () {
  const container = document.getElementById('homeGlobeViz');
  if (!container) return;

  // Same highlighted-country palette as the full Space & Time globe.
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

  let started = false;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function initGlobe() {
    const rect = container.getBoundingClientRect();
    const width = Math.max(rect.width, 1);
    const height = Math.max(rect.height, 1);

    const world = Globe()
      (container)
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor('#4da6ff')
      .atmosphereAltitude(0.18)
      .width(width)
      .height(height);

    // Decorative only — the whole card is already a link.
    world.controls().enabled = false;
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 1.85;

    fetch('https://unpkg.com/world-atlas@2/countries-110m.json')
      .then(res => res.json())
      .then(topology => {
        const countries = topojson.feature(topology, topology.objects.countries);
        world
          .polygonsData(countries.features)
          .polygonCapColor(feat => highlightedCountries[feat.properties.name] || 'rgba(255,255,255,0.04)')
          .polygonSideColor(() => 'rgba(0,0,0,0)')
          .polygonStrokeColor(() => 'rgba(255,255,255,0.15)')
          .polygonAltitude(feat => highlightedCountries[feat.properties.name] ? 0.01 : 0.005);
      })
      .catch(() => {});

    function resize() {
      const r = container.getBoundingClientRect();
      world.width(Math.max(r.width, 1));
      world.height(Math.max(r.height, 1));
    }
    // window 'resize' alone misses mobile Safari/Chrome's dynamic
    // address-bar collapse, which can leave this canvas's size stale
    // after the page's layout has actually changed. ResizeObserver
    // catches the container's real box size regardless of cause.
    window.addEventListener('resize', resize);
    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(container);
    }

    // This page also runs a second, independent WebGL context (the
    // Singularity orb above the grid) — two contexts is real pressure
    // on a mobile GPU. Without this, losing the context under memory
    // pressure would just leave the globe frozen with no recovery.
    const canvas = world.renderer && world.renderer() && world.renderer().domElement;
    if (canvas) {
      canvas.addEventListener('webglcontextlost', (e) => e.preventDefault(), false);
      canvas.addEventListener('webglcontextrestored', resize, false);
    }

    setTimeout(() => container.classList.add('is-ready'), 500);
  }

  function ensureLibsThenInit() {
    if (started) return;
    started = true;

    const tasks = [];
    if (typeof Globe === 'undefined') {
      tasks.push(loadScript('https://unpkg.com/globe.gl@2.31.0/dist/globe.gl.min.js'));
    }
    if (typeof topojson === 'undefined') {
      tasks.push(loadScript('https://unpkg.com/topojson-client@3'));
    }

    Promise.all(tasks).then(initGlobe).catch(() => {
      // Libraries failed to load (offline, blocked, etc.) — the static
      // fallback image underneath stays visible, so just bail quietly.
    });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ensureLibsThenInit();
          io.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    io.observe(container);
  } else {
    ensureLibsThenInit();
  }
})();
