import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Button from '../ui/Button'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  // Scroll progress: 0 = top of hero, 1 = hero fully scrolled past
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const spring = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  // Content drifts up + fades as hero scrolls out — 1:1 with scroll
  const contentY       = useTransform(spring, [0, 1], [0, 60])
  const contentOpacity = useTransform(spring, [0, 0.7], [1, 0])

  // Background glow drifts down (opposite direction = depth)
  const glowOpacity    = useTransform(spring, [0, 0.8], [1, 0])

  // Accent glows move at different speeds for parallax depth
  const glow2Y         = useTransform(spring, [0, 1], [0, 40])
  const glow3Y         = useTransform(spring, [0, 1], [0, 25])

  return (
    <section
      ref={heroRef}
      aria-label="Hero – Master Claude for DevOps Engineering"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid — static */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(217,119,87,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,119,87,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Center glow — parallax layer 1 (slowest) */}
      <motion.div
        aria-hidden="true"
        className="absolute z-0 pointer-events-none"
        style={{
          width: '900px', height: '900px',
          top: '50%', left: '50%',
          x: '-50%', y: useTransform(spring, [0,1], ['-50%', 'calc(-50% + 80px)']),
          opacity: glowOpacity,
          background: 'radial-gradient(circle, rgba(217,119,87,0.15) 0%, rgba(217,119,87,0.05) 35%, transparent 65%)',
          borderRadius: '50%',
          willChange: 'transform, opacity',
        }}
      />

      {/* Accent glow top-right — parallax layer 2 */}
      <motion.div
        aria-hidden="true"
        className="absolute z-0 pointer-events-none"
        style={{
          width: '500px', height: '500px',
          top: '-80px', right: '-80px',
          y: glow2Y,
          background: 'radial-gradient(circle, rgba(217,119,87,0.08) 0%, transparent 65%)',
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />

      {/* Accent glow bottom-left — parallax layer 3 */}
      <motion.div
        aria-hidden="true"
        className="absolute z-0 pointer-events-none"
        style={{
          width: '400px', height: '400px',
          bottom: '-60px', left: '-60px',
          y: glow3Y,
          background: 'radial-gradient(circle, rgba(217,119,87,0.08) 0%, transparent 65%)',
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />

      {/* Scan line removed — was overlapping CTA buttons */}

      {/* ── MAIN CONTENT — scroll-linked drift ── */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 lg:py-0"
        style={{ y: contentY, opacity: contentOpacity, willChange: 'opacity, transform' }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">
              Claude · DevOps · Infrastructure Automation
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block text-text-primary leading-tight">Master</span>
            <span
              className="block pb-2"
              style={{
                background: 'linear-gradient(135deg, #D97757 0%, #C4623E 50%, #D97757 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 5s linear infinite',
                filter: 'drop-shadow(0 0 30px rgba(217,119,87,0.35))',
                lineHeight: '1.1',
              }}
            >
              Claude for DevOps
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-10">
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            AI-Driven Infrastructure Automation &amp;{' '}
            <span className="text-text-primary font-semibold">Intelligent Operations</span>
            <br className="hidden sm:block" />
            <span className="text-text-secondary/70 text-base sm:text-lg">
              20 Days · 2 Hours/Day · Hands-On Intensive Program
            </span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button variant="primary" size="lg" href="#pricing" aria-label="Enroll now in Claude for DevOps – ₹6,999 + taxes">
            Enroll Now — ₹6,999 + Taxes
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <Button variant="secondary" size="lg" href="#curriculum" aria-label="View the 20-day course curriculum">
            View Curriculum
          </Button>
        </div>

        {/* Start date banner */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 px-5 py-3 rounded-2xl"
            style={{ background: 'rgba(217,119,87,0.07)', border: '1px solid rgba(217,119,87,0.2)' }}
          >
            <div className="flex items-center gap-2">
              <svg aria-hidden="true" className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-text-primary text-sm font-bold">Starts 15th June 2026</span>
            </div>
            <div className="w-px h-4 bg-black/15 hidden sm:block" />
            <div className="flex items-center gap-2">
              <svg aria-hidden="true" className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-text-primary text-sm font-bold">7:30 PM – 9:30 PM IST</span>
            </div>
            <div className="w-px h-4 bg-black/15 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-600 text-sm font-semibold">Enrollment Open</span>
            </div>
          </div>
        </div>

        {/* Architecture visual */}
        <div className="relative">
          <div
            className="rounded-2xl p-px"
            style={{
              background: 'linear-gradient(135deg, rgba(217,119,87,0.5) 0%, rgba(196,98,62,0.2) 50%, rgba(217,119,87,0.1) 100%)',
              boxShadow: '0 0 60px rgba(217,119,87,0.15), 0 0 120px rgba(217,119,87,0.06)',
            }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,243,238,0.97)', backdropFilter: 'blur(20px)' }}>
              {/* Terminal bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-text-secondary/50 text-xs font-mono">devops_automation.py</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-mono">LIVE</span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 md:items-center gap-0">
                  {/* Input */}
                  <div className="flex flex-col gap-3 pb-0">
                    <div className="text-text-secondary/50 text-xs font-mono uppercase tracking-widest mb-1 text-center md:text-left">Input Layer</div>
                    {[{label:'Infra Request',c:'accent'},{label:'Tool Execution',c:'primary'},{label:'Config Store',c:'accent'}].map(item => (
                      <div key={item.label} className="flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-300 hover:scale-[1.02]"
                        style={{ background: item.c==='accent'?'rgba(217,119,87,0.06)':'rgba(217,119,87,0.08)', borderColor: item.c==='accent'?'rgba(217,119,87,0.2)':'rgba(217,119,87,0.25)' }}>
                        <span className="text-text-primary text-sm font-medium">{item.label}</span>
                        <div className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#D97757' }} />
                      </div>
                    ))}
                  </div>

                  {/* Mobile-only: down arrow after Input */}
                  <div className="flex md:hidden items-center justify-center py-1">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4" style={{ background: 'linear-gradient(180deg, rgba(217,119,87,0.4), rgba(217,119,87,0.8))' }} />
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Center */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="hidden md:flex items-center justify-center w-full">
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(217,119,87,0.4))' }} />
                      <svg className="w-4 h-4 text-primary mx-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-full rounded-xl p-4 text-center" style={{ background:'linear-gradient(135deg,rgba(217,119,87,0.15),rgba(196,98,62,0.08))', border:'1px solid rgba(217,119,87,0.35)', boxShadow:'0 0 30px rgba(217,119,87,0.15)' }}>
                      <div className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Core Engine</div>
                      <div className="text-text-primary text-lg font-black mb-1">Claude DevOps AI</div>
                      <div className="text-text-secondary text-xs mb-3">Claude Sonnet 3.5</div>
                      <div className="flex items-center justify-center gap-4 text-xs">
                        {[['20','Days'],['40h+','Hands-On'],['100%','Practical']].map(([v,l],i) => (
                          <div key={l} className="flex items-center gap-4">
                            {i>0 && <div className="w-px h-6 bg-black/10"/>}
                            <div className="text-center">
                              <div className="font-bold text-sm" style={{color:'#D97757'}}>{v}</div>
                              <div className="text-text-secondary/60">{l}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-full">
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(217,119,87,0.4), transparent)' }} />
                      <svg className="w-4 h-4 text-primary mx-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile-only: down arrow after Center */}
                  <div className="flex md:hidden items-center justify-center py-1">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4" style={{ background: 'linear-gradient(180deg, rgba(217,119,87,0.4), rgba(217,119,87,0.8))' }} />
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Output */}
                  <div className="flex flex-col gap-3">
                    <div className="text-text-secondary/50 text-xs font-mono uppercase tracking-widest mb-1 text-center md:text-right">Output Layer</div>
                    {[{label:'Terraform Plan',c:'primary'},{label:'K8s Manifest',c:'accent'},{label:'CI/CD Pipeline',c:'primary'}].map(item => (
                      <div key={item.label} className="flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-300 hover:scale-[1.02]"
                        style={{ background: 'rgba(217,119,87,0.06)', borderColor: 'rgba(217,119,87,0.2)' }}>
                        <span className="text-text-primary text-sm font-medium">{item.label}</span>
                        <div className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#D97757', animationDelay:'0.5s' }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status bar */}
                <div className="mt-6 pt-4 border-t border-black/6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    {[['Analyzing',true],['Generating',true],['Deploying',true],['Monitoring',false]].map(([l,a]) => (
                      <div key={String(l)} className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${a?'animate-pulse':'opacity-30'}`} style={{background:a?'#D97757':'#B1ADA1'}} />
                        <span className={`text-xs font-mono ${a?'text-text-secondary':'text-text-secondary/40'}`}>{String(l)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-text-secondary/40 text-xs font-mono">tokens/s</span>
                    <span className="text-primary text-xs font-mono font-bold">2,847</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof — hidden on mobile */}
        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['SC','MR','PN','AK','JL'].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-base flex items-center justify-center text-xs font-bold text-white"
                  aria-hidden="true"
                  style={{background:'linear-gradient(135deg,#D97757,#C4623E)'}}>{i}</div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} aria-hidden="true" className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary text-xs">2,400+ engineers enrolled</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-black/10" />
          <div className="flex items-center gap-5">
            {[['20','Days'],['40h+','Content'],['4.9★','Rating']].map(([v,l]) => (
              <div key={l} className="text-center">
                <div className="text-text-primary font-bold text-sm">{v}</div>
                <div className="text-text-secondary/60 text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-base to-transparent z-20 pointer-events-none" />

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  )
}


