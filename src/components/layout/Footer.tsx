export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shadow-glow-sm">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="text-text-primary font-semibold text-sm">Agentic AI Architect™</span>
        </div>
        <p className="text-text-secondary text-xs text-center">
          Go beyond prompts. Design, build, and scale real-world AI systems.
        </p>
        <p className="text-text-secondary text-xs">
          © {new Date().getFullYear()} Agentic AI Architect™. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
