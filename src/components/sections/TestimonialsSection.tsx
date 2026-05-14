import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data'

// Reordered: professionals first, students after
const orderedTestimonials = [
  ...testimonials.filter(t => t.category === 'Working Professional'),
  ...testimonials.filter(t => t.category === 'Engineering Student'),
]

export default function TestimonialsSection() {
  return (
    <section aria-label="Student Testimonials – From Engineers Who Built With Claude" className="py-14 px-4 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{ background: 'radial-gradient(ellipse, rgba(217,119,87,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-12">
            <SectionHeading
              label="Testimonials"
              title="From Engineers Who Built With It"
              highlight="Engineers"
              subtitle="Real feedback from DevOps professionals and students who completed the program."
            />
          </div>
        </AnimatedSection>

        {/* Masonry-style grid: alternating heights for visual interest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Col 1 — first professional (tall) */}
          <AnimatedSection delay={0}>
            <article>
              <GlassCard className="p-6 flex flex-col gap-4 h-full group hover:border-primary/20 transition-all duration-300"
                style={{ minHeight: '220px' }}>
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} aria-hidden="true" className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed flex-1 group-hover:text-text-primary/80 transition-colors duration-300">
                  "{orderedTestimonials[0].text}"
                </p>
                <div className="pt-3 border-t border-black/8">
                  <p className="text-text-primary text-sm font-bold">{orderedTestimonials[0].name}</p>
                  <p className="text-text-secondary text-xs mt-0.5">{orderedTestimonials[0].role}</p>
                </div>
              </GlassCard>
            </article>
          </AnimatedSection>

          {/* Col 2 — two stacked cards */}
          <div className="flex flex-col gap-5">
            <AnimatedSection delay={80}>
              <article>
                <GlassCard className="p-6 flex flex-col gap-4 group hover:border-primary/20 transition-all duration-300">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} aria-hidden="true" className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">
                    "{orderedTestimonials[1].text}"
                  </p>
                  <div className="pt-3 border-t border-black/8">
                    <p className="text-text-primary text-sm font-bold">{orderedTestimonials[1].name}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{orderedTestimonials[1].role}</p>
                  </div>
                </GlassCard>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={160}>
              <article>
                <GlassCard className="p-6 flex flex-col gap-4 group hover:border-primary/20 transition-all duration-300">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} aria-hidden="true" className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">
                    "{orderedTestimonials[2].text}"
                  </p>
                  <div className="pt-3 border-t border-black/8">
                    <p className="text-text-primary text-sm font-bold">{orderedTestimonials[2].name}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{orderedTestimonials[2].role}</p>
                  </div>
                </GlassCard>
              </article>
            </AnimatedSection>
          </div>

          {/* Col 3 — last two stacked */}
          <div className="flex flex-col gap-5">
            <AnimatedSection delay={120}>
              <article>
                <GlassCard className="p-6 flex flex-col gap-4 group hover:border-primary/20 transition-all duration-300">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} aria-hidden="true" className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">
                    "{orderedTestimonials[3].text}"
                  </p>
                  <div className="pt-3 border-t border-black/8">
                    <p className="text-text-primary text-sm font-bold">{orderedTestimonials[3].name}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{orderedTestimonials[3].role}</p>
                  </div>
                </GlassCard>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <article>
                <GlassCard className="p-6 flex flex-col gap-4 group hover:border-primary/20 transition-all duration-300">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} aria-hidden="true" className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">
                    "{orderedTestimonials[4].text}"
                  </p>
                  <div className="pt-3 border-t border-black/8">
                    <p className="text-text-primary text-sm font-bold">{orderedTestimonials[4].name}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{orderedTestimonials[4].role}</p>
                  </div>
                </GlassCard>
              </article>
            </AnimatedSection>
          </div>
        </div>

        {/* "& many more" footer */}
        <AnimatedSection speed="slow">
          <div className="mt-10 flex flex-col items-center gap-3">
            {/* Avatars row */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['RM','NS','PR','AV','SK'].map((initials, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full border-2 border-bg-base flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: i % 2 === 0 ? 'linear-gradient(135deg,#D97757,#C4623E)' : 'linear-gradient(135deg,#C4623E,#A8522E)' }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-text-secondary text-sm font-medium ml-1">
                Engineering Students &amp; Working Professionals
              </span>
            </div>

            <p
              className="text-lg font-black tracking-tight"
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
