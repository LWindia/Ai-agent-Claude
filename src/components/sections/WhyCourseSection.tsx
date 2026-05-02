import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { whyCourse } from '../../data'

export default function WhyCourseSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-14">
            <SectionHeading
              label="Why This Course"
              title="Engineered for the AI Era"
              highlight="AI Era"
              subtitle="Most AI courses teach you to use tools. This one teaches you to build systems."
            />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyCourse.map((item, i) => (
            <AnimatedSection key={item.title} speed={i % 2 === 0 ? 'normal' : 'slow'}>
              <GlassCard glowOnHover className="p-6 flex items-start gap-5 h-full group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.18)' }}>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold text-base mb-1.5 group-hover:text-white transition-colors duration-200">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
