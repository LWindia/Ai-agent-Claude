import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const features = [
  '12 comprehensive modules',
  '60+ hours of structured content',
  'Hands-on projects & code labs',
  'Multi-agent system builds',
  'RAG & memory system implementation',
  'Production deployment guides',
  'Claude API deep-dives',
  'Lifetime access & updates',
  'Private community access',
  'Certificate of completion',
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-14">
            <SectionHeading
              label="Pricing"
              title="One Investment. Lifetime Access."
              highlight="Lifetime Access."
              subtitle="Everything you need to become a professional AI systems architect."
            />
          </div>
        </AnimatedSection>
        <AnimatedSection speed="slow">
          <div className="max-w-lg mx-auto">
            <div className="rounded-2xl p-px"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.6), rgba(56,189,248,0.3), rgba(37,99,235,0.2))',
                boxShadow: '0 0 40px rgba(37,99,235,0.3), 0 0 80px rgba(56,189,248,0.1)',
              }}>
              <div className="bg-surface rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Most Popular
                  </div>
                  <h3 className="text-text-primary text-xl font-bold mb-1">Agentic AI Architect™</h3>
                  <p className="text-text-secondary text-sm">Complete Program</p>
                </div>
                <div className="text-center mb-8">
                  <div className="flex items-end justify-center gap-3">
                    <span className="text-text-secondary text-xl line-through opacity-60">₹15,000</span>
                    <span className="text-6xl font-black"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 20px rgba(56,189,248,0.4))' }}>
                      ₹4,999
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)', color: '#38BDF8' }}>
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
                <Button variant="primary" size="lg" href="#" className="w-full justify-center">
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
