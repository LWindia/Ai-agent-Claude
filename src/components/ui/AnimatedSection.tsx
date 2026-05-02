import { ReactNode, CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { useSectionScroll } from '../../hooks/useSectionScroll'

interface Props {
  children: ReactNode
  className?: string
  delay?: number       // stagger offset in ms (applied via CSS delay on children)
  style?: CSSProperties
  /**
   * speed: controls spring stiffness
   * 'normal' = default (matches hero feel)
   * 'slow'   = heavier, more cinematic
   */
  speed?: 'normal' | 'slow'
}

/**
 * Universal scroll-linked section wrapper.
 * Same behavior as the hero — translateY + opacity tied 1:1 to scroll.
 * Content is NEVER fully hidden (opacity floor = 0.35).
 * Reversible: scroll up → animation reverses.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  style,
  speed = 'normal',
}: Props) {
  const springConfig = speed === 'slow'
    ? { stiffness: 40, damping: 18 }
    : { stiffness: 60, damping: 20 }

  const { ref, y, opacity } = useSectionScroll(springConfig)

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        opacity,
        willChange: 'transform, opacity',
        // Stagger via CSS transition-delay on the wrapper
        transitionDelay: delay ? `${delay}ms` : undefined,
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
