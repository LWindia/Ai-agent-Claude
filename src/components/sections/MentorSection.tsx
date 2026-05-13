import AnimatedSection from '../ui/AnimatedSection'

const achievements = [
  { value: '10 Lakh+', label: 'Students Mentored', color: '#D97757' },
  { value: '23+', label: 'Years Industry Experience', color: '#C4623E' },
  { value: '153+', label: 'Tools & Technology', color: '#D97757' },
  { value: '4.9/5', label: 'Student Rating', color: '#C4623E' },
]

export default function MentorSection() {
  return (
    <section aria-label="Your Mentor – Mr. Vimal Daga, AI Architect and Tech Educator" className="py-14 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse, rgba(217,119,87,0.06) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section label — centered */}
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">Your Mentor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary text-center leading-tight">
              Learn from an{' '}
              <span style={{ color: '#D97757', textShadow: '0 0 20px rgba(217,119,87,0.3)' }}>
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
              background: 'linear-gradient(135deg, rgba(217,119,87,0.4), rgba(196,98,62,0.2), rgba(217,119,87,0.1))',
              boxShadow: '0 0 50px rgba(217,119,87,0.12)',
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(244,243,238,0.98)', backdropFilter: 'blur(16px)' }}
            >
              <div className="grid md:grid-cols-[280px_1fr] gap-0">

                {/* LEFT — photo + identity */}
                <div
                  className="flex flex-col items-center justify-center p-8 gap-5"
                  style={{ borderRight: '1px solid rgba(177,173,161,0.2)' }}
                >
                  {/* Photo frame */}
                  <div
                    className="relative w-52 h-52 rounded-2xl overflow-hidden flex-shrink-0"
                    style={{
                      border: '2px solid rgba(217,119,87,0.5)',
                      boxShadow: '0 0 30px rgba(217,119,87,0.2)',
                    }}
                  >
                    <img
                      src="/Vimal Sir.jpeg"
                      alt="Mr. Vimal Daga – AI Architect, Tech Educator and Founder of LinuxWorld India"
                      width="208"
                      height="208"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>

                  {/* Name & title */}
                  <div className="text-center">
                    <h3 className="text-text-primary text-xl font-black leading-tight">Mr. Vimal Daga</h3>
                    <p className="text-primary text-sm font-semibold mt-1">AI Architect & Tech Educator</p>
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-text-secondary text-xs">Founder, LinuxWorld India</span>
                    </div>
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
                          background: 'rgba(177,173,161,0.1)',
                          border: '1px solid rgba(177,173,161,0.18)',
                        }}
                      >
                        <div className="text-2xl font-black mb-0.5" style={{ color: a.color }}>{a.value}</div>
                        <div className="text-text-secondary text-xs leading-tight">{a.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px" style={{ background: 'rgba(177,173,161,0.2)' }} />

                  {/* Bio */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Mr. Vimal Daga is one of India's most respected technology educators and AI practitioners.
                    With over 23 years of hands-on experience in cloud, DevOps, and AI systems, he has mentored
                    over{' '}
                    <span className="text-text-primary font-semibold">10 Lakh+ engineers</span>{' '}
                    across India and globally. He is known for making complex AI and cloud concepts practical,
                    industry-relevant, and immediately applicable.
                  </p>

                  {/* Quote */}
                  <div
                    className="rounded-xl p-5 relative overflow-hidden"
                    style={{
                      background: 'rgba(217,119,87,0.04)',
                      border: '1px solid rgba(217,119,87,0.14)',
                    }}
                  >
                    <div
                      className="absolute top-2 left-3 text-4xl font-black leading-none select-none"
                      style={{ color: 'rgba(217,119,87,0.15)' }}
                    >
                      "
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed relative z-10 pt-3">
                      The future belongs to DevOps engineers who can work with AI as a co-engineer.
                      This program is built to give you that exact capability — with real tools,
                      real infrastructure, and real-world DevOps thinking.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-px flex-1"
                        style={{ background: 'linear-gradient(90deg, rgba(217,119,87,0.4), transparent)' }} />
                      <span className="text-primary text-xs font-semibold">— Vimal Daga</span>
                    </div>
                  </div>

                  {/* Social proof */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {['/s1.jpeg', '/s2.jpeg', '/s3.jpeg', '/s4.jpeg'].map((src, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 overflow-hidden flex-shrink-0"
                          style={{ borderColor: '#F4F3EE' }}
                        >
                          <img
                            src={src}
                            alt={`LinuxWorld student ${i + 1}`}
                            width="32"
                            height="32"
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-text-secondary text-xs">
                      Trusted by <span className="text-text-primary font-semibold">10 Lakh+</span> engineers worldwide
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


