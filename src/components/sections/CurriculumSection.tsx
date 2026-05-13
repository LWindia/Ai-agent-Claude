import { useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import { curriculum } from '../../data/curriculum'

export default function CurriculumSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggle = (id: number) => setExpanded(prev => (prev === id ? null : id))

  return (
    <section id="curriculum" aria-label="20-Day Course Curriculum Timeline" className="py-20 px-4 relative overflow-hidden">

      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]"
          style={{ background: 'radial-gradient(ellipse, rgba(217,119,87,0.07) 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── HEADING ── */}
        <AnimatedSection>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">Full Program</span>
            </div>

            <h2 className="font-black tracking-tight mb-4" style={{ lineHeight: 1 }}>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #D97757 0%, #C4623E 50%, #D97757 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 4s linear infinite, headingGlow 3s ease-in-out infinite',
                  fontSize: 'clamp(4rem, 12vw, 9rem)',
                  lineHeight: '1.05',
                  paddingBottom: '0.05em',
                  display: 'block',
                }}
              >
                20 Days
              </span>
              <span className="block text-text-primary mt-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                One Complete DevOps System.
              </span>
            </h2>

            <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed mt-4">
              A precision-engineered path from AI fundamentals to{' '}
              <span className="text-text-primary font-medium">production-grade AI-native DevOps operations</span>.
              Every day builds on the last.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-10 pt-8 border-t border-black/10 w-full max-w-md justify-center">
              {[
                { value: '40+', label: 'Hours' },
                { value: '20', label: 'Days' },
                { value: '100%', label: 'Hands-on' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-10">
                  <div className="text-center">
                    <div
                      className="text-2xl font-black"
                      style={{
                        background: 'linear-gradient(135deg, #D97757, #C4623E)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-text-secondary text-xs mt-0.5">{stat.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-black/15" />}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── TIMELINE ── */}
        <div className="relative">

          {/* Vertical spine line */}
          <div
            aria-hidden="true"
            className="absolute left-[39px] top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(217,119,87,0.4) 5%, rgba(217,119,87,0.4) 95%, transparent 100%)',
            }}
          />

          <div className="flex flex-col gap-0">
            {curriculum.map((mod, i) => {
              const isOpen = expanded === mod.id
              return (
                <AnimatedSection key={mod.id} delay={i * 40}>
                  <div className="relative flex gap-6 pb-4">

                    {/* ── TIMELINE NODE ── */}
                    <div className="flex-shrink-0 flex flex-col items-center" style={{ width: 80 }}>
                      {/* Day badge */}
                      <button
                        onClick={() => toggle(mod.id)}
                        aria-expanded={isOpen}
                        aria-controls={`curriculum-day-${mod.id}`}
                        aria-label={`${isOpen ? 'Collapse' : 'Expand'} Day ${mod.module}: ${mod.title}`}
                        className="relative z-10 w-[52px] h-[52px] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 select-none"
                        style={{
                          background: isOpen
                            ? 'linear-gradient(135deg, #D97757, #C4623E)'
                            : 'rgba(255,255,255,0.95)',
                          border: isOpen
                            ? '2px solid #D97757'
                            : '2px solid rgba(217,119,87,0.3)',
                          boxShadow: isOpen
                            ? '0 0 0 4px rgba(217,119,87,0.15), 0 4px 16px rgba(217,119,87,0.3)'
                            : '0 2px 8px rgba(0,0,0,0.08)',
                          transform: isOpen ? 'scale(1.08)' : 'scale(1)',
                        }}
                      >
                        <span
                          className="text-[10px] font-bold tracking-widest uppercase leading-none"
                          style={{ color: isOpen ? 'rgba(255,255,255,0.8)' : '#B1ADA1' }}
                        >
                          DAY
                        </span>
                        <span
                          className="text-base font-black leading-none mt-0.5"
                          style={{ color: isOpen ? '#fff' : '#D97757', fontFamily: 'monospace' }}
                        >
                          {mod.module}
                        </span>
                      </button>

                      {/* Connector dot below badge (not on last item) */}
                      {i < curriculum.length - 1 && (
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-3"
                          style={{
                            background: isOpen ? '#D97757' : 'rgba(217,119,87,0.3)',
                            boxShadow: isOpen ? '0 0 8px rgba(217,119,87,0.5)' : 'none',
                          }}
                        />
                      )}
                    </div>

                    {/* ── CONTENT CARD ── */}
                    <div className="flex-1 min-w-0 pb-2">
                      {/* Header row — always visible */}
                      <button
                        onClick={() => toggle(mod.id)}
                        aria-expanded={isOpen}
                        aria-controls={`curriculum-day-${mod.id}`}
                        aria-label={`${isOpen ? 'Collapse' : 'Expand'} Day ${mod.module}: ${mod.title}`}
                        className="w-full text-left group cursor-pointer"
                      >
                        <div
                          className="rounded-2xl px-5 py-4 transition-all duration-300"
                          style={{
                            background: isOpen
                              ? 'linear-gradient(135deg, rgba(217,119,87,0.1) 0%, rgba(196,98,62,0.04) 100%)'
                              : 'rgba(255,255,255,0.9)',
                            border: isOpen
                              ? '1.5px solid rgba(217,119,87,0.45)'
                              : '1.5px solid rgba(177,173,161,0.35)',
                            boxShadow: isOpen
                              ? '0 4px 24px rgba(217,119,87,0.12)'
                              : '0 2px 8px rgba(0,0,0,0.05)',
                          }}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              {isOpen && (
                                <div className="mb-1">
                                  <span
                                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                                    style={{
                                      background: 'rgba(217,119,87,0.12)',
                                      border: '1px solid rgba(217,119,87,0.25)',
                                      color: '#D97757',
                                    }}
                                  >
                                    {mod.topics.length} topics
                                  </span>
                                </div>
                              )}
                              <h3
                                className="text-base sm:text-lg font-bold leading-snug"
                                style={{ color: '#2C2A26' }}
                              >
                                {mod.title}
                              </h3>
                            </div>

                            {/* Chevron */}
                            <div
                              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                              style={{
                                background: isOpen ? 'rgba(217,119,87,0.15)' : 'rgba(177,173,161,0.12)',
                                border: isOpen ? '1px solid rgba(217,119,87,0.3)' : '1px solid rgba(177,173,161,0.2)',
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              }}
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                style={{ color: isOpen ? '#D97757' : '#B1ADA1' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* ── EXPANDED TOPICS ── */}
                      <div
                        id={`curriculum-day-${mod.id}`}
                        role="region"
                        aria-label={`Day ${mod.module} topics: ${mod.title}`}
                        style={{
                          maxHeight: isOpen ? '1400px' : '0px',
                          overflow: 'hidden',
                          transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        <div
                          className="mt-2 rounded-2xl px-5 py-5"
                          style={{
                            background: 'rgba(255,255,255,0.75)',
                            border: '1.5px solid rgba(217,119,87,0.2)',
                          }}
                        >
                          {/* Divider */}
                          <div
                            className="mb-5 h-px"
                            style={{
                              background: 'linear-gradient(90deg, rgba(217,119,87,0.5), rgba(196,98,62,0.2), transparent)',
                            }}
                          />

                          {/* Topics grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {mod.topics.map((topic, ti) => (
                              <div
                                key={ti}
                                className="rounded-xl p-4 flex flex-col gap-2.5"
                                style={{
                                  background: 'rgba(244,243,238,0.8)',
                                  border: '1px solid rgba(177,173,161,0.3)',
                                }}
                              >
                                {/* Topic header */}
                                <div className="flex items-start gap-2.5">
                                  <div
                                    className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ background: '#D97757', boxShadow: '0 0 6px rgba(217,119,87,0.5)' }}
                                  />
                                  <h4 className="text-text-primary text-sm font-semibold leading-snug">
                                    {topic.title}
                                  </h4>
                                </div>

                                {/* Points */}
                                <ul className="flex flex-col gap-1.5 pl-4">
                                  {topic.points.map((point, pi) => (
                                    <li key={pi} className="flex items-start gap-2">
                                      <span
                                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                        style={{ background: '#B1ADA1' }}
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
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes headingGlow {
          0%, 100% { filter: drop-shadow(0 0 18px rgba(217,119,87,0.35)) drop-shadow(0 0 40px rgba(217,119,87,0.15)); }
          50%       { filter: drop-shadow(0 0 32px rgba(217,119,87,0.65)) drop-shadow(0 0 70px rgba(217,119,87,0.3)); }
        }
      `}</style>
    </section>
  )
}
