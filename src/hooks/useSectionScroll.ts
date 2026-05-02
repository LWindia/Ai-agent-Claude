import { useRef } from 'react'
import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'

/**
 * THE universal scroll hook — same behavior as the hero.
 * 
 * As the section enters the viewport:
 *   - translateY goes from +30px → 0 (gentle upward drift)
 *   - opacity goes from 0.4 → 1 (subtle fade in)
 * 
 * As the section exits the viewport (scrolls past):
 *   - translateY goes from 0 → -20px (slight upward exit)
 *   - opacity goes from 1 → 0.6 (subtle fade out)
 * 
 * All values are 1:1 with scroll. Stop scrolling = stop animating.
 * Content is NEVER fully hidden (opacity floor = 0.4 on enter, 0.6 on exit).
 */
export function useSectionScroll(springConfig = { stiffness: 60, damping: 20 }): {
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

  // translateY: enters from +30px, exits to -20px
  const y = useTransform(smooth, [0, 0.25, 0.75, 1], ['30px', '0px', '0px', '-20px'])

  // opacity: never fully 0 — floor at 0.35 entering, 0.5 exiting
  const opacity = useTransform(smooth, [0, 0.2, 0.8, 1], [0.35, 1, 1, 0.5])

  return { ref: ref as React.RefObject<HTMLDivElement>, y, opacity }
}
