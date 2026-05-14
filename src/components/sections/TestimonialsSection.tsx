import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data'

// Professionals first, then students
const orderedTestimonials = [
  ...testimonials.filter(t => t.category === 'Working Professional'),
  ...testimonials.filter(t => t.category === 'Engineering Student'),
]

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, j) => (
        <svg key={j} aria-hidden="true" className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay = 0 }: { t: typeof orderedTestimonials[0]; delay?: number }) {
  return (
    <AnimatedSection delay={delay}>
      <article>
        <GlassCard className="p-6 flex flex-col gap-4 h-full group hover:border-primary/20 transition-all duration-300">
          <StarRow />
          <p className="text-text-secondary text-sm leading-relaxed flex-1 group-hover:text-text-primary/80 transition-colors duration-300">
            "{t.text}"
          </p>
          <div className="pt-3 border-t border-black/8">
            <p className="text-text-primary text-sm font-bold">{t.name}</p>
            <p className="text-text-secondary text-xs mt-0.5">{t.role}</p>
          </div>
        </GlassCard>
      </article>
    </AnimatedSection>
  )
}

export default function TestimonialsSection() {
  return (
    <section aria-label="Student Testimonials – From Engineers Who Built With Claude" className="py-10 px-4 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{ background: 'radial-gradient(ellipse, rgba(217,119,87,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-8">
            <SectionHeading
              label="Testimonials"
              title="From Engineers Who Built With It"
              highlight="Engineers"
              subtitle="Real feedback from DevOps professionals and students who completed the program."
            />
          </div>
        </AnimatedSection>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {orderedTestimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.id} t={t} delay={i * 80} />
          ))}
        </div>

        {/* Row 2 — 2 cards, centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-2/3">
            {orderedTestimonials.slice(3, 5).map((t, i) => (
              <TestimonialCard key={t.id} t={t} delay={i * 80 + 240} />
            ))}
          </div>
        </div>

        {/* "& many more" footer with real student photos */}
        <AnimatedSection speed="slow">
          <div className="mt-6 flex flex-col items-center gap-3">

            {/* Student photo circles — same style as MentorSection */}
            <div className="flex items-center justify-center gap-4">
              {['/s1.jpeg', '/s2.jpeg', '/s3.jpeg', '/s4.jpeg'].map((src, i) => (
                <div
                  key={i}
                  className="rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-105"
                  style={{
                    width: '72px',
                    height: '72px',
                    border: '2px solid rgba(217,119,87,0.35)',
                    boxShadow: '0 4px 16px rgba(217,119,87,0.15)',
                  }}
                >
                  <img
                    src={src}
                    alt={`Student ${i + 1}`}
                    width="72"
                    height="72"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* & many more */}
            <p
              className="text-2xl font-black tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #D97757, #C4623E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              &amp; many more
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
