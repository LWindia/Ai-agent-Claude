import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { whoIsItFor } from '../../data'

export default function WhoIsItForSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-14">
            <SectionHeading
              label="Who This Is For"
              title="Built for the Builders"
              highlight="Builders"
              subtitle="Whether you're writing your first agent or scaling AI in production, this program meets you where you are."
            />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whoIsItFor.map((item, i) => (
            <AnimatedSection key={item.title}>
              <GlassCard glowOnHover className="p-6 flex flex-col gap-4 h-full group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)' }}>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold text-base mb-1.5 group-hover:text-white transition-colors duration-200">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-auto h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #2563EB, #38BDF8)' }} />
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
