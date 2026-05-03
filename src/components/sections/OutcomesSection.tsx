import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { outcomes } from '../../data'

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-14 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10">
            <SectionHeading
              label="Outcomes"
              title="What You'll Be Capable Of"
              highlight="Capable Of"
              subtitle="Graduate with skills that put you in the top 1% of AI engineers."
            />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, i) => (
            <AnimatedSection key={item.title} speed={i % 2 === 0 ? 'normal' : 'slow'}>
              <GlassCard glowOnHover glowColor="primary" className="p-6 flex flex-col gap-4 h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top right, rgba(37,99,235,0.15), transparent 70%)' }} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-text-primary font-bold text-base mb-1.5">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-auto h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #2563EB, #38BDF8)' }} />
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection speed="slow">
          <div className="mt-10 glass rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '12', label: 'Modules', color: '#2563EB' },
              { value: '60+', label: 'Hours of Content', color: '#38BDF8' },
              { value: '2,400+', label: 'Students Enrolled', color: '#2563EB' },
              { value: '4.9★', label: 'Average Rating', color: '#38BDF8' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-text-secondary text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}


