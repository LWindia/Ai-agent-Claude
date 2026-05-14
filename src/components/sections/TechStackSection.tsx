import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

// Three rows of tech terms — alternating scroll directions
const row1 = [
  'AI-Driven Infrastructure Automation', 'Intelligent Operations Engineering', 'AI-Native DevOps Workflows',
  'Prompt Engineering for DevOps', 'Context-Aware Infrastructure Operations', 'Intelligent Server Administration',
  'AI-Based Troubleshooting Workflows', 'Infrastructure Automation using AI', 'Repository Workflow Engineering',
  'Operational Collaboration Systems', 'Container Optimization Strategies', 'Intelligent Container Debugging',
  'Autonomous Container Operations', 'Kubernetes Deployment Automation',
]
const row2 = [
  'AI-Assisted Cluster Diagnostics', 'Kubernetes Stability Engineering', 'Infrastructure as Code Automation',
  'Terraform Module Engineering', 'Infrastructure Lifecycle Automation', 'Intelligent Cloud Architecture Design',
  'AI-Assisted AWS Operations', 'Cloud Deployment Optimization', 'CI/CD Workflow Automation',
  'Intelligent Build & Release Engineering', 'Multi-Environment Pipeline Automation', 'Deployment Workflow Intelligence',
  'Production Monitoring Intelligence', 'AI-Based Log Correlation',
]
const row3 = [
  'Operational Diagnostics Engineering', 'AI-Powered Incident Response', 'Root Cause Analysis Automation',
  'Autonomous Troubleshooting Systems', 'Self-Healing Infrastructure', 'AI-Based Auto Remediation',
  'Predictive Operational Intelligence', 'Infrastructure Cost Optimization', 'Intelligent Scaling Recommendations',
  'Platform Engineering Automation', 'Infrastructure Governance using AI', 'Repository-Aware Automation',
  'AI-Driven Codebase Intelligence', 'Autonomous Workflow Engineering', 'Enterprise AI-Native DevOps Systems',
  'Intelligent Deployment Governance', 'Future of AI-Powered DevOps', 'Reliability Engineering with AI',
  'Infrastructure Refactoring Automation', 'Cloud Resource Optimization', 'Operational Stability Engineering',
  'AI-Assisted Recovery Planning', 'Infrastructure Monitoring Intelligence',
]

// Repeat items enough to fill wide screens seamlessly
const repeat = (arr: string[], times = 4) =>
  Array.from({ length: times }, () => arr).flat()

interface MarqueeRowProps {
  items: string[]
  direction: 'left' | 'right'
  speed?: number
  scrollX?: MotionValue<number>
}

function MarqueeRow({ items, direction, speed = 35, scrollX }: MarqueeRowProps) {
  const repeated = repeat(items, 5)
  const dur = repeated.length * (speed / items.length)

  return (
    <motion.div
      className="flex items-center gap-0 overflow-hidden w-full"
      style={scrollX ? { x: scrollX } : {}}
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

  // Scroll-linked horizontal nudge — rows shift slightly as you scroll (numbers, not strings)
  const xRow1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const xRow2 = useTransform(scrollYProgress, [0, 1], [0, 60])
  const xRow3 = useTransform(scrollYProgress, [0, 1], [0, -40])

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
        <MarqueeRow items={row1} direction="left" speed={40} scrollX={xRow1} />

        {/* Row 2 — scrolls right, nudges right on scroll */}
        <MarqueeRow items={row2} direction="right" speed={50} scrollX={xRow2} />

        {/* Row 3 — scrolls left, nudges left on scroll */}
        <MarqueeRow items={row3} direction="left" speed={45} scrollX={xRow3} />
      </div>
    </section>
  )
}
