import { useRef } from 'react'
import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'

/**
 * Premium scroll hook — smooth spring-physics scroll-linked animation.
 *
 * Enter: drifts up from +40px with fade-in (0 → 1 opacity)
 * Exit:  drifts up to -20px with subtle fade-out (1 → 0.7 opacity)
 *
 * Spring config controls the "feel":
 *   - normal: responsive, snappy
 *   - slow:   dreamy, floaty
 *   - fast:   immediate, crisp
 */
export function useSectionScroll(springConfig = { stiffness: 55, damping: 22 }): {
  ref: React.RefObject<HTMLDivElement>
  y: MotionValue<string>
  opacity: MotionValue<number>
} {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, springConfig)

  // Y: enters from +40px, rests at 0, exits to -20px
  const y = useTransform(smooth, [0, 0.22, 0.78, 1], ['40px', '0px', '0px', '-20px'])

  // Opacity: fully transparent on enter, full at 20%, full until 80%, slight fade on exit
  const opacity = useTransform(smooth, [0, 0.18, 0.82, 1], [0, 1, 1, 0.65])

  return { ref: ref as React.RefObject<HTMLDivElement>, y, opacity }
}
