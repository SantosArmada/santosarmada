// ─── El Cubo Title Shimmer ──────────────────────────────────────────────
// Same gold shimmer treatment as the Space & Time / Museos titles, same
// font (Playfair Display, styled in .el-cubo-title-text in el-cubo.css).
const TEXT_EL = document.querySelector('.el-cubo-title-effect')
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
function grad(el, css) {
  el.style.background           = css
  el.style.webkitBackgroundClip = 'text'
  el.style.backgroundClip       = 'text'
  el.style.webkitTextFillColor  = 'transparent'
}
let _raf = null
function loop(tick) {
  cancelAnimationFrame(_raf)
  ;(function frame() { tick(); _raf = requestAnimationFrame(frame) })()
}
const ease = {
  out:   t => 1 - (1 - t) ** 3,
  in:    t => t ** 3,
  inOut: t => t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2,
}
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
function sunrise() {
  const chars = split()
  const STAGGER = 10, ENTER = 60, HOLD = 50, EXIT = 55, PAUSE = 44
  let f = 0
  loop(() => {
    f++
    chars.forEach((ch, i) => {
      const p     = cyc(f, i * STAGGER, ENTER, HOLD, EXIT, PAUSE, ease.inOut, ease.inOut)
      const angle = lerp(180, 0, p).toFixed(1)
      grad(ch, `linear-gradient(${angle}deg, #ff9d1f 0%, #ffd23f 42%, #fff9d6 100%)`)
    })
  })
}
if (TEXT_EL) sunrise()
