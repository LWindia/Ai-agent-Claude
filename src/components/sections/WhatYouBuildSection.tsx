import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import { whatYouBuild } from '../../data'

export default function WhatYouBuildSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <AnimatedSection>
            <SectionHeading
              label="What You Will Build"
              title="Real Systems. Real Impact."
              highlight="Real Systems."
              subtitle="This isn't theory. You'll build production-grade AI systems from day one."
              align="left"
            />
            <ul className="mt-8 flex flex-col gap-4">
              {whatYouBuild.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-secondary text-base leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right — code panel */}
          <AnimatedSection speed="slow">
            <div className="glass rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-text-secondary text-xs ml-2 font-mono">ai_system.py</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">01</span><span className="text-accent">from</span><span className="text-text-primary"> anthropic </span><span className="text-accent">import</span><span className="text-text-primary"> Anthropic</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">02</span><span className="text-text-secondary/30">—</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">03</span><span className="text-primary">class</span><span className="text-accent"> AgentOrchestrator</span><span className="text-text-primary">:</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">04</span><span className="text-text-secondary ml-4">def</span><span className="text-text-primary"> run_agent</span><span className="text-text-secondary">(self, task):</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">05</span><span className="text-text-secondary ml-8">result = </span><span className="text-accent">self</span><span className="text-text-secondary">.think(task)</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">06</span><span className="text-text-secondary ml-8">return </span><span className="text-accent">self</span><span className="text-text-secondary">.act(result)</span></div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Agent Running</span>
                </div>
                <span className="text-text-secondary text-xs font-mono">3 tools active</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
