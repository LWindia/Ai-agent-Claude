import AnimatedSection from '../ui/AnimatedSection'

const achievements = [
  { value: '15+', label: 'Years in Tech', color: '#2563EB' },
  { value: '500K+', label: 'Students Trained', color: '#38BDF8' },
  { value: '200+', label: 'Courses Delivered', color: '#2563EB' },
  { value: '50+', label: 'Enterprise Clients', color: '#38BDF8' },
]

const expertise = [
  'Agentic AI & LLM Systems',
  'Cloud Architecture (AWS, Azure, GCP)',
  'DevOps & Platform Engineering',
  'AI Product Strategy',
  'Enterprise AI Transformation',
  'Open Source & Community Building',
]

export default function MentorSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section label — centered */}
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">Your Mentor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary text-center leading-tight">
              Learn from an{' '}
              <span style={{ color: '#38BDF8', textShadow: '0 0 20px rgba(56,189,248,0.3)' }}>
                Industry Expert
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Main card — full width, horizontal layout */}
        <AnimatedSection>
          <div
            className="rounded-2xl p-px"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.45), rgba(56,189,248,0.2), rgba(37,99,235,0.1))',
              boxShadow: '0 0 50px rgba(37,99,235,0.15)',
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(11,15,26,0.97)', backdropFilter: 'blur(16px)' }}
            >
              <div className="grid md:grid-cols-[280px_1fr] gap-0">

                {/* LEFT — photo + identity */}
                <div
                  className="flex flex-col items-center justify-center p-8 gap-5"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {/* Photo frame */}
                  <div
                    className="relative w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0"
                    style={{
                      border: '2px solid rgba(37,99,235,0.5)',
                      boxShadow: '0 0 30px rgba(37,99,235,0.3)',
                    }}
                  >
                    <img
                      src="/mentor.jpg"
                      alt="Mr. Vimal Daga"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                    {/* Fallback initials */}
                    <div
                      className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)' }}
                    >
                      VD
                    </div>
                  </div>

                  {/* Name & title */}
                  <div className="text-center">
                    <h3 className="text-text-primary text-xl font-black leading-tight">Mr. Vimal Daga</h3>
                    <p className="text-accent text-sm font-semibold mt-1">AI Architect & Tech Educator</p>
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-text-secondary text-xs">Founder, LinuxWorld India</span>
                    </div>
                  </div>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(37,99,235,0.1)',
                          border: '1px solid rgba(37,99,235,0.22)',
                          color: '#9CA3AF',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT — stats + bio + quote */}
                <div className="p-8 flex flex-col gap-6">

                  {/* Stats row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {achievements.map((a) => (
                      <div
                        key={a.label}
                        className="rounded-xl p-4 text-center"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        <div className="text-2xl font-black mb-0.5" style={{ color: a.color }}>{a.value}</div>
                        <div className="text-text-secondary text-xs leading-tight">{a.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

                  {/* Bio */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Mr. Vimal Daga is one of India's most respected technology educators and AI practitioners.
                    With over 15 years of hands-on experience in cloud, DevOps, and AI systems, he has trained
                    over{' '}
                    <span className="text-text-primary font-semibold">500,000+ engineers</span>{' '}
                    across India and globally. He is known for making complex AI and cloud concepts practical,
                    industry-relevant, and immediately applicable.
                  </p>

                  {/* Quote */}
                  <div
                    className="rounded-xl p-5 relative overflow-hidden"
                    style={{
                      background: 'rgba(56,189,248,0.04)',
                      border: '1px solid rgba(56,189,248,0.14)',
                    }}
                  >
                    <div
                      className="absolute top-2 left-3 text-4xl font-black leading-none select-none"
                      style={{ color: 'rgba(56,189,248,0.12)' }}
                    >
                      "
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed relative z-10 pt-3">
                      The future belongs to engineers who can design AI systems — not just use them.
                      This course is built to give you that exact capability, with real tools,
                      real architectures, and real-world thinking.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-px flex-1"
                        style={{ background: 'linear-gradient(90deg, rgba(56,189,248,0.4), transparent)' }} />
                      <span className="text-accent text-xs font-semibold">— Vimal Daga</span>
                    </div>
                  </div>

                  {/* Social proof */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {['A','B','C','D','E'].map(l => (
                        <div key={l}
                          className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)', borderColor: '#0B0F1A' }}>
                          {l}
                        </div>
                      ))}
                    </div>
                    <p className="text-text-secondary text-xs">
                      Trusted by <span className="text-text-primary font-semibold">500,000+</span> engineers worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
