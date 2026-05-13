import type { ReactNode, CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { useSectionScroll } from '../../hooks/useSectionScroll'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
  speed?: 'fast' | 'normal' | 'slow' | 'dreamy'
}

const springConfigs = {
  fast:   { stiffness: 90,  damping: 24 },
  normal: { stiffness: 55,  damping: 22 },
  slow:   { stiffness: 35,  damping: 18 },
  dreamy: { stiffness: 22,  damping: 14 },
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  style,
  speed = 'normal',
}: Props) {
  const { ref, y, opacity } = useSectionScroll(springConfigs[speed])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        opacity,
        willChange: 'transform, opacity',
        ...(delay ? { transitionDelay: `${delay}ms` } : {}),
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
