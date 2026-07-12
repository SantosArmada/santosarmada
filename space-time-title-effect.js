// ─── Space & Time Title Sunrise Effect ─────────────────────────────────────
// Same gold shimmer treatment as the Museos title, same font (Playfair
// Display, pulled from .space-time-title-text in globe.css).
// ─── DOM ──────────────────────────────────────────────────────────────────────
const TEXT_EL = document.querySelector('.space-time-title-effect')
// ─── Split ────────────────────────────────────────────────────────────────────
function split() {
  const raw = TEXT_EL.textContent
  TEXT_EL.textContent = ''
  return raw.split('').map(ch => {
    const s = document.createElement('span')
    s.className   = 'char'
    s.textContent = ch
    TEXT_EL.appendChild(s)
    return s
  })
}
// ─── Gradient helper ──────────────────────────────────────────────────────────
// Applies a CSS gradient as the text fill colour via background-clip.
function grad(el, css) {
  el.style.background           = css
  el.style.webkitBackgroundClip = 'text'
  el.style.backgroundClip       = 'text'
  el.style.webkitTextFillColor  = 'transparent'
}
// ─── Loop & run ───────────────────────────────────────────────────────────────
let _raf = null
function loop(tick) {
  cancelAnimationFrame(_raf)
  ;(function frame() { tick(); _raf = requestAnimationFrame(frame) })()
}
function run(fn) { fn(); }
// ─── Easing ───────────────────────────────────────────────────────────────────
const ease = {
  out:   t => 1 - (1 - t) ** 3,
  in:    t => t ** 3,
  inOut: t => t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2,
}
// ─── Cycle progress ───────────────────────────────────────────────────────────
// Returns 0 (start state) → 1 (target state) → 0 following enter/hold/exit/pause.
function cyc(f, offset, enter, hold, exit, pause, eIn = ease.out, eOut = ease.in) {
  if (f < offset) return 0
  const total = enter + hold + exit + pause
  const t = (f - offset) % total
  if (t < enter)               return eIn(t / enter)
  if (t < enter + hold)        return 1
  if (t < enter + hold + exit) return 1 - eOut((t - enter - hold) / exit)
  return 0
}
const lerp = (a, b, t) => a + (b - a) * t
// ── Sunrise ─────────────────────────────────────────────────────
function sunrise() {
  const chars = split()
  const STAGGER = 10, ENTER = 60, HOLD = 50, EXIT = 55, PAUSE = 44
  let f = 0
  loop(() => {
    f++
    chars.forEach((ch, i) => {
      const p     = cyc(f, i * STAGGER, ENTER, HOLD, EXIT, PAUSE, ease.inOut, ease.inOut)
      const angle = lerp(180, 0, p).toFixed(1)
      grad(ch, `linear-gradient(${angle}deg, #f97316 0%, #fbbf24 42%, #e8eaf0 100%)`)
    })
  })
}
if (TEXT_EL) run(sunrise)
