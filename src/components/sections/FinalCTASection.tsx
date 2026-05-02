import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function FinalCTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 65%)' }} />
        <div className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center gap-6">
            <SectionHeading
              label="Limited Enrollment Open"
              title="Start Building the Future with AI"
              highlight="Future with AI"
              subtitle="Join 2,400+ engineers designing, building, and scaling real-world AI systems. The agentic AI era is here — be the architect, not just the user."
            />
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Button variant="primary" size="lg" href="#pricing">
                Join Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="secondary" size="lg" href="#curriculum">Explore Curriculum</Button>
            </div>
            <p className="text-text-secondary/60 text-sm">Secure payment · Lifetime access · Start immediately</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
