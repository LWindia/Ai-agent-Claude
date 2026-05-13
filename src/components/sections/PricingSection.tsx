import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const features = [
  '20 intensive days of hands-on content',
  '40+ hours of structured labs',
  'Linux, Git, Docker & Kubernetes with Claude',
  'Terraform & AWS infrastructure automation',
  'CI/CD with GitHub Actions & Jenkins',
  'Production monitoring & incident engineering',
  'Self-healing infrastructure workflows',
  'Cloud cost optimization strategies',
  'Claude Code for DevOps engineering',
  'Enterprise AI-native DevOps architecture',
  'Lifetime access & updates',
  'Certificate of completion',
]

export default function PricingSection() {
  return (
    <section id="pricing" aria-label="Pricing – Claude for DevOps 20-Day Intensive Program" className="py-14 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(217,119,87,0.08) 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10">
            <SectionHeading
              label="Pricing"
              title="One Investment. Lifetime Access."
              highlight="Lifetime Access."
              subtitle="Everything you need to become an AI-native DevOps engineer."
            />
          </div>
        </AnimatedSection>
        <AnimatedSection speed="slow">
          <div className="max-w-lg mx-auto">
            <div className="rounded-2xl p-px"
              style={{
                background: 'linear-gradient(135deg, rgba(217,119,87,0.6), rgba(196,98,62,0.3), rgba(217,119,87,0.2))',
                boxShadow: '0 0 40px rgba(217,119,87,0.2), 0 0 80px rgba(217,119,87,0.08)',
              }}>
              <div className="bg-surface rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Most Popular
                  </div>
                  <h3 className="text-text-primary text-xl font-bold mb-1">Claude for DevOps™</h3>
                  <p className="text-text-secondary text-sm">20-Day Intensive Program</p>
                </div>
                <div className="text-center mb-8">
                  <div className="flex items-end justify-center gap-3">
                    <span className="text-text-secondary text-xl line-through opacity-60">₹15,000</span>
                    <span className="text-6xl font-black"
                      style={{ background: 'linear-gradient(135deg, #D97757, #C4623E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 20px rgba(217,119,87,0.4))' }}>
                      ₹4,999
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(217,119,87,0.1)', border: '1px solid rgba(217,119,87,0.25)', color: '#D97757' }}>
                      67% OFF
                    </span>
                    <p className="text-text-secondary text-sm">One-time payment · Lifetime access</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-text-secondary text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="lg" href="#" className="w-full justify-center" aria-label="Enroll in Claude for DevOps – ₹4,999 one-time payment">
                  Enroll Now — ₹4,999
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <p className="text-center text-text-secondary text-xs mt-4">Secure payment · Instant access · Start today</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}


