import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data'

export default function TestimonialsSection() {
  return (
    <section className="py-14 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10">
            <SectionHeading
              label="Testimonials"
              title="From Engineers Who Built With It"
              highlight="Engineers"
            />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} speed={i === 1 ? 'slow' : 'normal'}>
              <GlassCard className="p-6 flex flex-col gap-5 h-full group hover:border-white/15 transition-all duration-300">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed flex-1 group-hover:text-text-primary/80 transition-colors duration-300">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)' }}>{t.avatar}</div>
                  <div>
                    <div className="text-text-primary text-sm font-semibold">{t.name}</div>
                    <div className="text-text-secondary text-xs">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}


