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

                    {/* Social links */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/vimaldaga/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Vimal Daga on LinkedIn (opens in new tab)"
                        className="group"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                          style={{ background: 'rgba(10,102,194,0.1)', border: '1px solid rgba(10,102,194,0.2)' }}
                        >
                          <svg className="w-4 h-4" fill="#0A66C2" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                      </a>

                      {/* YouTube */}
                      <a
                        href="https://www.youtube.com/@IIECconnect"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Vimal Daga on YouTube (opens in new tab)"
                        className="group"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                          style={{ background: 'rgba(255,0,0,0.07)', border: '1px solid rgba(255,0,0,0.15)' }}
                        >
                          <svg className="w-4 h-4" fill="#FF0000" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </div>
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/vimaldaga.india/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Vimal Daga on Instagram (opens in new tab)"
                        className="group"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                          style={{ background: 'rgba(225,48,108,0.08)', border: '1px solid rgba(225,48,108,0.18)' }}
                        >
                          <svg className="w-4 h-4" fill="#E1306C" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                          </svg>
                        </div>
                      </a>
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


