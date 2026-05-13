import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Three rows of tech terms — alternating scroll directions
const row1 = [
  'Linux', 'Git', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Jenkins',
  'GitHub Actions', 'Claude AI', 'DevOps', 'Infrastructure as Code',
]
const row2 = [
  'Container Orchestration', 'Helm Charts', 'Incident Engineering', 'Self-Healing Infra',
  'Cloud Cost Optimization', 'Platform Engineering', 'Claude Code', 'AI-Native DevOps',
]
const row3 = [
  'Kubernetes YAML', 'Terraform Modules', 'CI/CD Pipelines', 'Log Correlation',
  'Auto Remediation', 'Root Cause Analysis', 'AWS Architecture', 'Intelligent Operations',
]

// Repeat items enough to fill wide screens seamlessly
const repeat = (arr: string[], times = 4) =>
  Array.from({ length: times }, () => arr).flat()

interface MarqueeRowProps {
  items: string[]
  direction: 'left' | 'right'
  speed?: number
  scrollY?: ReturnType<typeof useTransform>
}

function MarqueeRow({ items, direction, speed = 35, scrollY }: MarqueeRowProps) {
  const repeated = repeat(items, 5)
  const dur = repeated.length * (speed / items.length)

  return (
    <motion.div
      className="flex items-center gap-0 overflow-hidden w-full"
      style={scrollY ? { x: scrollY } : {}}
    >
      <motion.div
        className="flex items-center gap-0 flex-shrink-0"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: dur, ease: 'linear', repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span
              className="text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap px-5 py-1"
              style={{ color: i % 3 === 0 ? '#D97757' : i % 3 === 1 ? '#2C2A26' : '#B1ADA1' }}
            >
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: i % 2 === 0 ? 'rgba(217,119,87,0.5)' : 'rgba(177,173,161,0.4)' }}
            />
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Scroll-linked horizontal nudge — rows shift slightly as you scroll
  const xRow1 = useTransform(scrollYProgress, [0, 1], ['0px', '-60px'])
  const xRow2 = useTransform(scrollYProgress, [0, 1], ['0px', '60px'])
  const xRow3 = useTransform(scrollYProgress, [0, 1], ['0px', '-40px'])

  return (
    <section
      ref={ref}
      aria-label="Technologies covered in the course"
      className="py-12 overflow-hidden relative"
    >
      {/* Top fade */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #F4F3EE 0%, transparent 100%)' }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(0deg, #F4F3EE 0%, transparent 100%)' }}
      />
      {/* Left fade */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #F4F3EE 0%, transparent 100%)' }}
      />
      {/* Right fade */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #F4F3EE 0%, transparent 100%)' }}
      />

      <div className="flex flex-col gap-4">
        {/* Row 1 — scrolls left, nudges left on scroll */}
        <MarqueeRow items={row1} direction="left" speed={40} scrollY={xRow1} />

        {/* Row 2 — scrolls right, nudges right on scroll */}
        <MarqueeRow items={row2} direction="right" speed={50} scrollY={xRow2} />

        {/* Row 3 — scrolls left, nudges left on scroll */}
        <MarqueeRow items={row3} direction="left" speed={45} scrollY={xRow3} />
      </div>
    </section>
  )
}
