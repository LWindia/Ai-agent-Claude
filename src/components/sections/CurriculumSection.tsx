import { useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import { curriculum } from '../../data/curriculum'

export default function CurriculumSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggle = (id: number) => setExpanded(prev => (prev === id ? null : id))

  return (
    <section id="curriculum" className="py-20 px-4 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)' }}
        />
      </div>

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADING ── */}
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">Full Curriculum</span>
            </div>

            <div className="relative mb-4">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.25) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
              />
              <h2 className="relative font-black leading-none tracking-tight">
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #38BDF8 50%, #2563EB 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 4s linear infinite',
                    filter: 'drop-shadow(0 0 40px rgba(56,189,248,0.5))',
                    fontSize: 'clamp(5rem, 15vw, 12rem)',
                    lineHeight: '0.9',
                  }}
                >
                  12
                </span>
                <span className="block text-text-primary mt-2" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
                  Modules.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px max-w-[80px] sm:max-w-[140px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.5))' }} />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
                style={{ color: '#38BDF8', textShadow: '0 0 20px rgba(56,189,248,0.4)' }}>
                One Complete System.
              </span>
              <div className="flex-1 h-px max-w-[80px] sm:max-w-[140px]"
                style={{ background: 'linear-gradient(90deg, rgba(56,189,248,0.5), transparent)' }} />
            </div>

            <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
              A precision-engineered path from AI fundamentals to{' '}
              <span className="text-text-primary font-medium">production-grade agentic systems</span>.
              Every module builds on the last.
            </p>

            <div className="flex items-center gap-8 mt-8 pt-8 border-t border-white/6 w-full max-w-lg justify-center">
              {[
                { value: '60+', label: 'Hours of content', color: '#2563EB' },
                { value: '12', label: 'Deep modules', color: '#38BDF8' },
                { value: '100%', label: 'Hands-on builds', color: '#2563EB' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-text-secondary/60 text-xs mt-0.5">{stat.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-white/8" />}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── MODULE ACCORDION LIST ── */}
        <div className="flex flex-col gap-3">
          {curriculum.map((mod, i) => {
            const isOpen = expanded === mod.id
            return (
              <AnimatedSection key={mod.id} delay={i * 35}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen
                      ? 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(56,189,248,0.05) 100%)'
                      : 'rgba(255,255,255,0.03)',
                    border: isOpen
                      ? '1px solid rgba(37,99,235,0.4)'
                      : '1px solid rgba(255,255,255,0.06)',
                    boxShadow: isOpen
                      ? '0 0 40px rgba(37,99,235,0.15), 0 8px 32px rgba(0,0,0,0.3)'
                      : '0 2px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* ── ROW HEADER (always visible) ── */}
                  <button
                    onClick={() => toggle(mod.id)}
                    className="w-full flex items-center gap-5 px-6 py-5 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    {/* Module number */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300"
                      style={{
                        background: isOpen
                          ? 'linear-gradient(135deg, rgba(37,99,235,0.4), rgba(56,189,248,0.2))'
                          : 'rgba(37,99,235,0.1)',
                        border: isOpen
                          ? '1px solid rgba(56,189,248,0.4)'
                          : '1px solid rgba(37,99,235,0.2)',
                        color: isOpen ? '#38BDF8' : '#2563EB',
                        boxShadow: isOpen ? '0 0 16px rgba(56,189,248,0.25)' : 'none',
                        fontFamily: 'monospace',
                      }}
                    >
                      {mod.module}
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                          style={{ color: isOpen ? '#38BDF8' : 'rgba(156,163,175,0.5)' }}
                        >
                          Module {mod.module}
                        </span>
                        {isOpen && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{
                              background: 'rgba(56,189,248,0.1)',
                              border: '1px solid rgba(56,189,248,0.2)',
                              color: '#38BDF8',
                            }}
                          >
                            {mod.topics.length} topics
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-base sm:text-lg font-bold mt-0.5 transition-colors duration-200 leading-snug"
                        style={{ color: isOpen ? '#ffffff' : '#E5E7EB' }}
                      >
                        {mod.title}
                      </h3>
                    </div>

                    {/* Expand icon */}
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isOpen ? 'rgba(37,99,235,0.2)' : 'rgba(255,255,255,0.04)',
                        border: isOpen ? '1px solid rgba(37,99,235,0.4)' : '1px solid rgba(255,255,255,0.08)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: isOpen ? '#38BDF8' : '#9CA3AF' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* ── EXPANDED CONTENT ── */}
                  <div
                    style={{
                      maxHeight: isOpen ? '1200px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className="px-6 pb-6">
                      {/* Top divider */}
                      <div
                        className="mb-6 h-px"
                        style={{
                          background: 'linear-gradient(90deg, rgba(37,99,235,0.5), rgba(56,189,248,0.3), transparent)',
                        }}
                      />

                      {/* Topics grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mod.topics.map((topic, ti) => (
                          <div
                            key={ti}
                            className="rounded-xl p-4 flex flex-col gap-3"
                            style={{
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            {/* Topic title */}
                            <div className="flex items-start gap-2.5">
                              <div
                                className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{
                                  background: ti === 0 ? '#38BDF8' : '#2563EB',
                                  boxShadow: ti === 0 ? '0 0 6px rgba(56,189,248,0.7)' : '0 0 6px rgba(37,99,235,0.7)',
                                }}
                              />
                              <span className="text-text-primary text-sm font-semibold leading-snug">
                                {topic.title}
                              </span>
                            </div>

                            {/* Points */}
                            <ul className="flex flex-col gap-1.5 pl-4">
                              {topic.points.map((point, pi) => (
                                <li key={pi} className="flex items-start gap-2">
                                  <span
                                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                    style={{ background: 'rgba(156,163,175,0.4)' }}
                                  />
                                  <span className="text-text-secondary text-xs leading-relaxed">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  )
}
