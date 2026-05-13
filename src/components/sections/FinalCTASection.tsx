import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function FinalCTASection() {
  return (
    <section aria-label="Enroll Now – Start Automating Infrastructure with Claude AI" className="py-14 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(217,119,87,0.08) 0%, transparent 65%)' }} />
        <div className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `linear-gradient(rgba(217,119,87,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,87,0.06) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center gap-6">
            <SectionHeading
              label="Enrollment Open Now"
              title="Start Automating Infrastructure with AI"
              highlight="Automating Infrastructure"
              subtitle="Join 2,400+ engineers who are using Claude to automate DevOps, ship faster, and operate smarter. The AI-native DevOps era is here — be ahead of it."
            />
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Button variant="primary" size="lg" href="#pricing" aria-label="Enroll in Claude for DevOps – ₹6,999 + taxes">
                Enroll Now — ₹6,999 + Taxes
                <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="secondary" size="lg" href="#curriculum">Explore Curriculum</Button>
            </div>
            <p className="text-text-secondary/60 text-sm">Secure payment · Lifetime access · Batch starts 15 June 2026</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}


