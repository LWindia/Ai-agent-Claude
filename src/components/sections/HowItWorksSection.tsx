import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Learn AI-Native DevOps',
    desc: 'Understand how Claude integrates with every layer of the DevOps stack — from Linux and Git to Kubernetes, Terraform, and CI/CD.',
    detail: 'Build the mental model of using AI as a co-engineer, not just a chatbot.',
    color: '#D97757',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Automate Real Infrastructure',
    desc: 'Generate Dockerfiles, Kubernetes manifests, Terraform modules, and GitHub Actions workflows using Claude — hands-on every day.',
    detail: 'Every session is a lab. You ship working automation, not just exercises.',
    color: '#C4623E',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Operate at Production Scale',
    desc: 'Master incident engineering, self-healing infrastructure, cloud cost optimization, and enterprise AI-native DevOps architecture.',
    detail: 'Graduate with the skills to run AI-powered operations at any scale.',
    color: '#D97757',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function HowItWorksSection() {
  return (
    <section
      aria-label="How It Works – Your 20-Day DevOps Learning Journey"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse, rgba(217,119,87,0.06) 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <AnimatedSection>
          <div className="flex flex-col items-center mb-16 text-center">
            <SectionHeading
              label="How It Works"
              title="Your 20-Day DevOps Journey"
              highlight="20-Day DevOps Journey"
              subtitle="Three phases that take you from AI basics to production-grade DevOps automation."
            />
          </div>
        </AnimatedSection>

        {/* Steps grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 100}>
              <div
                className="relative flex flex-col h-full rounded-2xl p-7 transition-all duration-300 group hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  border: `1.5px solid rgba(177,173,161,0.35)`,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                }}
              >
                {/* Step number — top right badge */}
                <div
                  className="absolute top-5 right-5 text-xs font-black tracking-widest font-mono"
                  style={{ color: `${step.color}60` }}
                >
                  {step.number}
                </div>

                {/* Icon block */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}0A)`,
                    border: `1.5px solid ${step.color}30`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-text-primary mb-3 leading-snug pr-8">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {step.desc}
                </p>

                {/* Detail pill */}
                <div
                  className="rounded-xl px-4 py-3 text-xs leading-relaxed font-medium"
                  style={{
                    color: step.color,
                    background: `${step.color}0D`,
                    border: `1px solid ${step.color}25`,
                  }}
                >
                  {step.detail}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Connector arrows between cards — desktop only */}
        <div aria-hidden="true" className="hidden lg:flex absolute top-[calc(50%+32px)] left-0 right-0 pointer-events-none justify-around px-[calc(33.33%/2)]" style={{ marginTop: '-8px' }}>
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-1" style={{ color: 'rgba(217,119,87,0.4)' }}>
              <div className="w-8 h-px" style={{ background: 'rgba(217,119,87,0.3)' }} />
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <AnimatedSection>
          <div
            className="mt-10 rounded-2xl p-6 grid grid-cols-3 gap-4 text-center"
            style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1.5px solid rgba(217,119,87,0.18)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            }}
          >
            {[
              { value: '20', label: 'Days of Learning' },
              { value: '40h+', label: 'Hands-On Labs' },
              { value: '100%', label: 'Practical Output' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <div
                  className="text-2xl sm:text-3xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, #D97757, #C4623E)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-text-secondary text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
