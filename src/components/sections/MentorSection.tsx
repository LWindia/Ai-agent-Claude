import AnimatedSection from '../ui/AnimatedSection'

const achievements = [
  { value: '15+', label: 'Years in Tech' },
  { value: '500K+', label: 'Students Trained' },
  { value: '200+', label: 'Courses Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)' }}
        />
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <AnimatedSection>
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">Your Mentor</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — mentor card */}
          <AnimatedSection>
            <div
              className="rounded-2xl p-px"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.4), rgba(56,189,248,0.2), rgba(37,99,235,0.1))',
                boxShadow: '0 0 40px rgba(37,99,235,0.15)',
              }}
            >
              <div
                className="rounded-2xl p-8"
                style={{ background: 'rgba(11,15,26,0.95)', backdropFilter: 'blur(16px)' }}
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Mentor image — replace src with actual photo */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-20 h-20 rounded-2xl overflow-hidden"
                      style={{
                        border: '2px solid rgba(37,99,235,0.5)',
                        boxShadow: '0 0 24px rgba(37,99,235,0.3)',
                      }}
                    >
                      <img
                        src="/mentor.jpg"
                        alt="Mr. Vimal Daga"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          // Fallback to initials if image not found
                          const target = e.currentTarget
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.style.background = 'linear-gradient(135deg, #2563EB, #38BDF8)'
                            parent.style.display = 'flex'
                            parent.style.alignItems = 'center'
                            parent.style.justifyContent = 'center'
                            parent.innerHTML = '<span style="color:white;font-size:1.5rem;font-weight:900">VD</span>'
                          }
                        }}
                      />
                    </div>
                    {/* Online indicator */}
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 bg-green-400"
                      style={{ borderColor: '#0B0F1A' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-text-primary text-2xl font-black leading-tight">Mr. Vimal Daga</h3>
                    <p className="text-accent text-sm font-semibold mt-0.5">AI Architect & Tech Educator</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-text-secondary text-xs">Founder, LinuxWorld India</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Mr. Vimal Daga is one of India's most respected technology educators and AI practitioners.
                  With over 15 years of hands-on experience in cloud, DevOps, and AI systems, he has trained
                  over <span className="text-text-primary font-semibold">500,000+ engineers</span> across
                  India and globally. He is known for making complex AI and cloud concepts practical,
                  industry-relevant, and immediately applicable.
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2">
                  {expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: 'rgba(37,99,235,0.1)',
                        border: '1px solid rgba(37,99,235,0.25)',
                        color: '#E5E7EB',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — stats + quote */}
          <AnimatedSection speed="slow">
            <div className="flex flex-col gap-6">

              {/* Large mentor image */}
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{
                  border: '1px solid rgba(37,99,235,0.3)',
                  boxShadow: '0 0 30px rgba(37,99,235,0.15)',
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(56,189,248,0.08))',
                }}
              >
                <img
                  src="/mentor.jpg"
                  alt="Mr. Vimal Daga — AI Architect & Educator"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(11,15,26,0.8), transparent)' }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-3 left-4">
                  <div className="text-text-primary text-sm font-bold">Mr. Vimal Daga</div>
                  <div className="text-accent text-xs">Founder, LinuxWorld India</div>
                </div>
                {/* Fallback shown when no image */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(56,189,248,0.1))' }}
                >
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-black text-white mb-3"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)', boxShadow: '0 0 30px rgba(37,99,235,0.5)' }}
                  >
                    VD
                  </div>
                  <p className="text-text-primary font-bold text-lg">Mr. Vimal Daga</p>
                  <p className="text-accent text-sm">Add mentor.jpg to /public folder</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((a, i) => (
                  <div
                    key={a.label}
                    className="rounded-xl p-5 text-center group hover:scale-[1.02] transition-transform duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div
                      className="text-3xl font-black mb-1"
                      style={{ color: i % 2 === 0 ? '#2563EB' : '#38BDF8' }}
                    >
                      {a.value}
                    </div>
                    <div className="text-text-secondary text-xs">{a.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div
                className="rounded-xl p-6 relative overflow-hidden"
                style={{
                  background: 'rgba(56,189,248,0.04)',
                  border: '1px solid rgba(56,189,248,0.15)',
                }}
              >
                {/* Quote mark */}
                <div
                  className="absolute top-3 left-4 text-5xl font-black leading-none select-none"
                  style={{ color: 'rgba(56,189,248,0.15)' }}
                >
                  "
                </div>
                <p className="text-text-secondary text-sm leading-relaxed relative z-10 pt-4">
                  The future belongs to engineers who can design AI systems — not just use them.
                  This course is built to give you that exact capability, with real tools,
                  real architectures, and real-world thinking.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div
                    className="h-px flex-1"
                    style={{ background: 'linear-gradient(90deg, rgba(56,189,248,0.4), transparent)' }}
                  />
                  <span className="text-accent text-xs font-semibold">— Vimal Daga</span>
                </div>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex -space-x-2">
                  {['A','B','C','D'].map(l => (
                    <div key={l} className="w-7 h-7 rounded-full border-2 border-bg-base flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)' }}>{l}</div>
                  ))}
                </div>
                <p className="text-text-secondary text-xs">
                  Trusted by <span className="text-text-primary font-semibold">500,000+</span> engineers worldwide
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
