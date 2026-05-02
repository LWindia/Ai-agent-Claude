import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef, RefObject } from 'react'

/**
 * Returns scroll-linked opacity + translateY for a section element.
 * Values are 1:1 with scroll — no autoplay, no timers.
 */
export function useScrollReveal(options?: {
  inputRange?: [number, number]
  outputY?: [number, number]
  outputOpacity?: [number, number]
}): {
  ref: RefObject<HTMLDivElement>
  opacity: MotionValue<number>
  y: MotionValue<number>
} {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.3'],
  })

  const opacity = useTransform(
    scrollYProgress,
    options?.inputRange ?? [0, 1],
    options?.outputOpacity ?? [0, 1]
  )

  const y = useTransform(
    scrollYProgress,
    options?.inputRange ?? [0, 1],
    options?.outputY ?? [40, 0]
  )

  return { ref: ref as RefObject<HTMLDivElement>, opacity, y }
}

/**
 * Parallax hook — element moves at a fraction of scroll speed.
 * speed: 0 = no movement, 1 = full scroll speed, 0.1 = very subtle
 */
export function useParallax(speed = 0.15): {
  ref: RefObject<HTMLDivElement>
  y: MotionValue<number>
} {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed * -80, speed * 80])

  return { ref: ref as RefObject<HTMLDivElement>, y }
}
