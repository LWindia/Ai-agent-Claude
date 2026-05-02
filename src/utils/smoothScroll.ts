/**
 * Lightweight smooth scroll driver.
 * Lerps the actual scroll position toward the target on every RAF frame.
 * Gives the Apple / Stripe inertia feel without any library.
 *
 * Call initSmoothScroll() once on app mount.
 * Returns a cleanup function.
 */
export function initSmoothScroll(ease = 0.1): () => void {
  // Only run on desktop — mobile has native momentum scrolling
  if (typeof window === 'undefined') return () => {}
  if (window.matchMedia('(pointer: coarse)').matches) return () => {}

  let target  = window.scrollY
  let current = window.scrollY
  let rafId   = 0
  let ticking = false

  const onWheel = (e: WheelEvent) => {
    e.preventDefault()
    target += e.deltaY * 0.8   // scale wheel delta slightly
    target  = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight))
    if (!ticking) {
      ticking = true
      rafId = requestAnimationFrame(loop)
    }
  }

  const loop = () => {
    const diff = target - current
    if (Math.abs(diff) < 0.5) {
      current = target
      ticking = false
      return
    }
    current += diff * ease
    window.scrollTo(0, current)
    rafId = requestAnimationFrame(loop)
  }

  window.addEventListener('wheel', onWheel, { passive: false })

  return () => {
    window.removeEventListener('wheel', onWheel)
    cancelAnimationFrame(rafId)
  }
}
