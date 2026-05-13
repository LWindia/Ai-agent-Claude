import { useScroll, useTransform, motion } from 'framer-motion'

/**
 * Ambient scroll-linked glow that drifts across the page as the user scrolls.
 * Creates visual depth and continuity between sections.
 */
export default function GlobalScrollGlow() {
  const { scrollYProgress } = useScroll()

  // Primary glow — follows scroll from top to bottom
  const y1 = useTransform(scrollYProgress, [0, 1], ['0vh', '85vh'])
  const x1 = useTransform(scrollYProgress, [0, 0.5, 1], ['0vw', '15vw', '-10vw'])
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0, 0.12, 0.1, 0])

  // Secondary glow — offset, slower drift
  const y2 = useTransform(scrollYProgress, [0, 1], ['15vh', '95vh'])
  const x2 = useTransform(scrollYProgress, [0, 0.5, 1], ['20vw', '-10vw', '25vw'])
  const opacity2 = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0, 0.08, 0.07, 0])

  // Accent glow — small, fast
  const y3 = useTransform(scrollYProgress, [0, 1], ['30vh', '110vh'])
  const opacity3 = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [0, 0.06, 0.05, 0])

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* Primary warm glow */}
      <motion.div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          left: '50%',
          x: x1,
          y: y1,
          opacity: opacity1,
          background: 'radial-gradient(circle, rgba(217,119,87,1) 0%, rgba(196,98,62,0.4) 40%, transparent 70%)',
          borderRadius: '50%',
          willChange: 'transform, opacity',
          filter: 'blur(2px)',
        }}
      />

      {/* Secondary warm glow — right side */}
      <motion.div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          right: '5%',
          x: x2,
          y: y2,
          opacity: opacity2,
          background: 'radial-gradient(circle, rgba(196,98,62,1) 0%, transparent 70%)',
          borderRadius: '50%',
          willChange: 'transform, opacity',
        }}
      />

      {/* Small accent glow — left side */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          left: '8%',
          y: y3,
          opacity: opacity3,
          background: 'radial-gradient(circle, rgba(217,119,87,1) 0%, transparent 70%)',
          borderRadius: '50%',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  )
}
