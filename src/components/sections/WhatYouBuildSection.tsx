import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import { whatYouBuild } from '../../data'

export default function WhatYouBuildSection() {
  return (
    <section aria-label="What You Will Build – Real Infrastructure Automation Projects" className="py-14 px-4 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(217,119,87,0.06) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <AnimatedSection>
            <SectionHeading
              label="What You Will Build"
              title="Real Infra. Real Automation."
              highlight="Real Infra."
              subtitle="Every day is hands-on. You'll build production-grade DevOps automation from day one."
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
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-black/8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-text-secondary text-xs ml-2 font-mono">infra_automation.py</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">01</span><span className="text-accent">import</span><span className="text-text-primary"> anthropic, subprocess</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">02</span><span className="text-text-secondary/30">—</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">03</span><span className="text-primary">class</span><span className="text-accent"> DevOpsAgent</span><span className="text-text-primary">:</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">04</span><span className="text-text-secondary ml-4">def</span><span className="text-text-primary"> deploy</span><span className="text-text-secondary">(self, env):</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">05</span><span className="text-text-secondary ml-8">plan = </span><span className="text-accent">self</span><span className="text-text-secondary">.generate_tf(env)</span></div>
                <div className="flex gap-3"><span className="text-text-secondary/40 select-none">06</span><span className="text-text-secondary ml-8">return </span><span className="text-accent">self</span><span className="text-text-secondary">.apply(plan)</span></div>
              </div>
              <div className="mt-5 pt-4 border-t border-black/8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Infra Deployed</span>
                </div>
                <span className="text-text-secondary text-xs font-mono">terraform + k8s active</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}


