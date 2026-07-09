(function () {
  const track = document.getElementById('authorsStripTrack');
  const prevBtn = document.getElementById('authorsStripPrev');
  const nextBtn = document.getElementById('authorsStripNext');
  if (!track || !prevBtn || !nextBtn) return;

  function step() {
    const card = track.querySelector('.author-card');
    return card ? card.getBoundingClientRect().width * 3 : 300;
  }

  function updateArrows() {
    const max = track.scrollWidth - track.clientWidth - 1;
    prevBtn.disabled = track.scrollLeft <= 0;
    nextBtn.disabled = track.scrollLeft >= max;
  }

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: step(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
})();

(function () {
  const cue = document.getElementById('authorsScrollCue');
  const target = document.querySelector('.authors-strip');
  if (!cue || !target) return;

  cue.addEventListener('click', () => {
    target.scrollIntoView({ behavior: 'smooth' });
  });
})();
