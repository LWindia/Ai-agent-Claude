import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Limited Enrollment Open
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary leading-tight mb-6">
            Start Building the{' '}
            <span className="text-primary" style={{ textShadow: '0 0 40px rgba(37,99,235,0.4)' }}>Future</span>{' '}
            with AI
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Join 2,400+ engineers designing, building, and scaling real-world AI systems.
            The agentic AI era is here — be the architect, not just the user.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" href="#pricing">
              Join Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" href="#curriculum">Explore Curriculum</Button>
          </div>
          <p className="text-text-secondary/60 text-sm mt-6">Secure payment · Lifetime access · Start immediately</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
