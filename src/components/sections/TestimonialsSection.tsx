import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data'

export default function TestimonialsSection() {
  return (
    <section aria-label="Student Testimonials – From Engineers Who Built With Claude" className="py-14 px-4 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse, rgba(217,119,87,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10">
            <SectionHeading
              label="Testimonials"
              title="From Engineers Who Built With It"
              highlight="Engineers"
              subtitle="Real feedback from students and professionals who completed the program."
            />
          </div>
        </AnimatedSection>

        {/* 5-card grid: 3 on top, 2 centered below */}
        <div className="flex flex-col gap-5">
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 80}>
                <TestimonialCard t={t} />
              </AnimatedSection>
            ))}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-[66%] mx-auto w-full">
            {testimonials.slice(3, 5).map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 80}>
                <TestimonialCard t={t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }: { t: typeof import('../../data').testimonials[0] }) {
  return (
    <article>
      <GlassCard className="p-6 flex flex-col gap-4 h-full group hover:border-primary/20 transition-all duration-300">

        {/* Top row — stars + category badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
            {[...Array(t.rating)].map((_, j) => (
              <svg key={j} aria-hidden="true" className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0"
            style={{
              background: 'rgba(217,119,87,0.1)',
              border: '1px solid rgba(217,119,87,0.2)',
              color: '#D97757',
            }}
          >
            {t.category}
          </span>
        </div>

        {/* Quote */}
        <p className="text-text-secondary text-sm leading-relaxed flex-1 group-hover:text-text-primary/80 transition-colors duration-300">
          "{t.text}"
        </p>

        {/* Author — no photo */}
        <div className="pt-3 border-t border-black/8">
          <p className="text-text-primary text-sm font-semibold">{t.name}</p>
          <p className="text-text-secondary text-xs mt-0.5">{t.role}</p>
        </div>

      </GlassCard>
    </article>
  )
}
