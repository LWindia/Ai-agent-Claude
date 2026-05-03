import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Learn the Architecture',
    desc: 'Understand how agentic AI systems are designed — from input processing to multi-step reasoning and output validation.',
    detail: 'Master the mental models that top AI engineers use to think in systems, not just models.',
    color: '#2563EB',
  },
  {
    number: '02',
    title: 'Build Real Systems',
    desc: 'Implement agents, RAG pipelines, tool-use workflows, and multi-agent coordination using Claude and modern LLMs.',
    detail: 'Every module includes hands-on builds. You ship working AI systems, not just exercises.',
    color: '#38BDF8',
  },
  {
    number: '03',
    title: 'Deploy with Confidence',
    desc: 'Learn production patterns — monitoring, evaluation, scaling, and reliability for AI systems in the real world.',
    detail: 'Graduate with the skills to architect, build, and maintain AI systems at a professional level.',
    color: '#2563EB',
  },
]

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Active step index based on scroll
  // step 1: 0–0.4, step 2: 0.3–0.7, step 3: 0.6–1.0
  const step1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.33, 0.43], [1, 1, 1, 0])
  const step2Opacity = useTransform(scrollYProgress, [0.33, 0.43, 0.66, 0.76], [0, 1, 1, 0])
  const step3Opacity = useTransform(scrollYProgress, [0.66, 0.76, 1], [0, 1, 1])

  const step1Y = useTransform(scrollYProgress, [0.33, 0.43], [0, -20])
  const step2Y = useTransform(scrollYProgress, [0.33, 0.43, 0.66, 0.76], [20, 0, 0, -20])
  const step3Y = useTransform(scrollYProgress, [0.66, 0.76], [20, 0])

  return (
    <section className="py-14 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10 text-center">
            <SectionHeading
              label="How It Works"
              title="Your Path to AI Mastery"
              highlight="AI Mastery"
              subtitle="Three phases that take you from fundamentals to production-grade AI architect."
            />
          </div>
        </AnimatedSection>

        {/* Sticky scroll section */}
        <div ref={containerRef} style={{ height: '250vh' }} className="relative">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto px-4">

              {/* Progress bar */}
              <div className="mb-10 h-px bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: progressWidth,
                    background: 'linear-gradient(90deg, #2563EB, #38BDF8)',
                  }}
                />
              </div>

              {/* Steps container */}
              <div className="relative" style={{ height: '280px' }}>
                {[
                  { opacity: step1Opacity, y: step1Y, step: steps[0] },
                  { opacity: step2Opacity, y: step2Y, step: steps[1] },
                  { opacity: step3Opacity, y: step3Y, step: steps[2] },
                ].map(({ opacity, y, step }, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 flex flex-col items-center text-center"
                    style={{ opacity, y, willChange: 'opacity, transform' }}
                  >
                    {/* Number badge */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}25, ${step.color}08)`,
                        border: `1px solid ${step.color}40`,
                        color: step.color,
                        boxShadow: `0 0 24px ${step.color}20`,
                        fontFamily: 'monospace',
                      }}
                    >
                      {step.number}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-text-primary mb-3">
                      {step.title}
                    </h3>

                    <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4 max-w-lg">
                      {step.desc}
                    </p>

                    <p
                      className="text-sm leading-relaxed max-w-md px-4 py-2.5 rounded-xl"
                      style={{
                        color: step.color,
                        background: `${step.color}0D`,
                        border: `1px solid ${step.color}20`,
                      }}
                    >
                      {step.detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Step dots */}
              <div className="flex items-center justify-center gap-3 mt-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: '8px',
                      height: '8px',
                      background: step.color,
                      opacity: i === 0 ? step1Opacity : i === 1 ? step2Opacity : step3Opacity,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


