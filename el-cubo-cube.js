// ─── El Cubo cube gallery ───────────────────────────────────────────────
// Six faces, six panels. The cube's rotation is driven by how far the
// user has scrolled through #elCuboGalleryWrap (computed from
// getBoundingClientRect, not a manual resize/scrollTop bookkeeping
// system) — .el-cubo-cube-stage does the actual pinning via CSS
// position:sticky, so this script only has to read scroll progress and
// apply it, not fight the browser for control of the scrollbar the way
// a wheel-hijacking implementation would.
(function () {
    const wrap = document.getElementById('elCuboGalleryWrap');
    const cube = document.getElementById('cube');
    if (!wrap || !cube) return;

    const FACE_COUNT = 6;
    const FACE_LABELS = ['01', '02', '03', '04', '05', '06'];

    const STOPS = [
        { rx: 90, ry: 0 },
        { rx: 0, ry: 0 },
        { rx: 0, ry: -90 },
        { rx: 0, ry: -180 },
        { rx: 0, ry: -270 },
        { rx: -90, ry: -360 },
    ];

    const scrollContainer = document.getElementById('scroll_container');
    const strip = document.getElementById('scene_strip');
    const hudPct = document.getElementById('hud_pct');
    const progFill = document.getElementById('prog_fill');
    const sceneName = document.getElementById('scene_name');
    const captionNum = document.getElementById('face_caption_num');
    const captionName = document.getElementById('face_caption_name');

    const sections = scrollContainer ? [...scrollContainer.querySelectorAll('section')] : [];
    const dots = strip ? [...strip.querySelectorAll('.scene-dot')] : [];

    // Face videos are click-to-play with their own audio (not
    // muted-autoplay like the image faces) — deliberate, so the visitor
    // actually hears them, not autoplay that might get missed or blocked.
    // Each button is a persistent play/pause toggle, not a one-time
    // unlock, and stays available the whole time you're on its face. It
    // also pauses automatically if you scroll away from that face, so it
    // never plays on to an unseen face.
    function initFaceVideo(videoId, btnId, faceIdx) {
        const video = document.getElementById(videoId);
        const btn = document.getElementById(btnId);
        if (!video || !btn) return null;

        function sync(onFace) {
            btn.classList.toggle('is-visible', onFace);
            btn.classList.toggle('is-playing', !video.paused);
        }

        btn.addEventListener('click', () => {
            if (video.paused) {
                video.play().catch(err => console.error('El Cubo: video play() failed', err));
            } else {
                video.pause();
            }
        });
        video.addEventListener('play', () => sync(lastIdx === faceIdx));
        video.addEventListener('pause', () => sync(lastIdx === faceIdx));
        video.addEventListener('ended', () => sync(lastIdx === faceIdx));

        return {
            faceIdx,
            onTick(idx) {
                const onFace = idx === faceIdx;
                if (!onFace && !video.paused) video.pause();
                sync(onFace);
            },
            pause() {
                if (!video.paused) video.pause();
            },
        };
    }

    const easeIO = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    function setCubeTransform(progress) {
        const t = progress * (FACE_COUNT - 1);
        const i = Math.min(Math.floor(t), FACE_COUNT - 2);
        const f = easeIO(t - i);
        const a = STOPS[i];
        const b = STOPS[i + 1];
        const rx = a.rx + (b.rx - a.rx) * f;
        const ry = a.ry + (b.ry - a.ry) * f;
        cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }

    let lastIdx = -1;

    const faceVideos = [
        initFaceVideo('elCuboGradVideo', 'elCuboGradPlayBtn', 0),
        initFaceVideo('elCuboMamaVideo', 'elCuboMamaPlayBtn', 5),
    ].filter(Boolean);

    function updateUI(progress, idx) {
        const pct = Math.round(progress * 100);
        if (hudPct) hudPct.textContent = String(pct).padStart(3, '0') + '%';
        if (progFill) progFill.style.width = pct + '%';
        if (idx === lastIdx) return;
        lastIdx = idx;
        const label = FACE_LABELS[idx] ?? '';
        if (sceneName) sceneName.textContent = label;
        if (captionNum) captionNum.textContent = String(idx + 1).padStart(2, '0');
        if (captionName) captionName.textContent = label;
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    }

    function tick() {
        const rect = wrap.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        let progress = scrollable > 0 ? -rect.top / scrollable : 0;
        progress = Math.max(0, Math.min(1, progress));
        const idx = Math.min(sections.length - 1, Math.max(0, Math.round(progress * (FACE_COUNT - 1))));
        setCubeTransform(progress);
        updateUI(progress, idx);

        faceVideos.forEach(fv => fv.onTick(idx));
    }

    // getBoundingClientRect()/style writes every frame is cheap on its
    // own, but there's no reason to keep polling once the gallery has
    // scrolled out of view entirely (e.g. back up on the hero, or down
    // past the footer) — pause alongside tab-visibility.
    let inView = true;
    let running = false;

    function loop() {
        if (!running) return;
        tick();
        requestAnimationFrame(loop);
    }
    function start() {
        if (running) return;
        running = true;
        requestAnimationFrame(loop);
    }
    function pause() {
        running = false;
        faceVideos.forEach(fv => fv.pause());
    }

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            inView = entries[0].isIntersecting;
            if (inView && !document.hidden) start(); else pause();
        }, { threshold: 0 });
        io.observe(wrap);
    } else {
        start();
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) pause();
        else if (inView) start();
    });

    // Dot nav + in-card Back/Turn links all point at #s0..#s5 — native
    // smooth scroll instead of a custom easing loop, so it respects
    // prefers-reduced-motion and doesn't fight touch/trackpad momentum.
    document.querySelectorAll('a[href^="#s"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const revealEls = document.querySelectorAll(
        '.el-cubo-cube-wrap .tag, .el-cubo-cube-wrap h1, .el-cubo-cube-wrap h2, .el-cubo-cube-wrap .body-text, .el-cubo-cube-wrap .cta, .el-cubo-cube-wrap .cta-back, .el-cubo-cube-wrap .h-line'
    );
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
})();
