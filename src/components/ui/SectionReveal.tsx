import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  /** How much the background drifts — 0.04 is subtle, 0.12 is dramatic */
  parallaxStrength?: number
}

/**
 * Section-level scroll reveal with parallax background drift.
 * Wraps an entire section — the content inside drifts slightly slower
 * than the scroll, creating the same depth effect as the hero.
 */
export default function SectionReveal({ children, className = '', parallaxStrength = 0.06 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const spring = useSpring(scrollYProgress, { stiffness: 45, damping: 20 })

  // Content drifts slightly upward as section scrolls through viewport
  const y = useTransform(spring, [0, 1], [`${parallaxStrength * 60}px`, `${parallaxStrength * -60}px`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
