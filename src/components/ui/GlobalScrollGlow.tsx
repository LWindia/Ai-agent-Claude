import { useScroll, useTransform, motion } from 'framer-motion'

/**
 * A subtle ambient glow that drifts vertically as the user scrolls.
 * Creates visual continuity across all sections.
 */
export default function GlobalScrollGlow() {
  const { scrollYProgress } = useScroll()

  // Glow moves from top to bottom of page as user scrolls
  const y1 = useTransform(scrollYProgress, [0, 1], ['0vh', '80vh'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['20vh', '100vh'])
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.12, 0.08, 0.08, 0.04])
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.04, 0.08, 0.08, 0.04])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {/* Primary blue glow — follows scroll */}
      <motion.div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          left: '50%',
          x: '-50%',
          y: y1,
          opacity: opacity1,
          background: 'radial-gradient(circle, rgba(37,99,235,1) 0%, transparent 70%)',
          borderRadius: '50%',
          willChange: 'transform, opacity',
        }}
      />
      {/* Accent cyan glow — slightly offset */}
      <motion.div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          right: '10%',
          x: '0%',
          y: y2,
          opacity: opacity2,
          background: 'radial-gradient(circle, rgba(56,189,248,1) 0%, transparent 70%)',
          borderRadius: '50%',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  )
}
