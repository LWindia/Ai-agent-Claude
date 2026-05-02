import type { ReactNode, CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { useSectionScroll } from '../../hooks/useSectionScroll'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
  speed?: 'normal' | 'slow'
}

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
        transitionDelay: delay ? `${delay}ms` : undefined,
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
