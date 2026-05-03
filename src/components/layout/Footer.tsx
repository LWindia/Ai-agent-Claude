export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src="/LW_White_gvs6tv.svg"
            alt="LinuxWorld"
            className="h-7 w-auto opacity-90"
          />
          <span className="text-text-primary font-semibold text-sm">Agentic AI Architect™</span>
        </div>

        {/* Tagline */}
        <p className="text-text-secondary text-xs text-center">
          Go beyond prompts. Design, build, and scale real-world AI systems.
        </p>

        {/* Copyright */}
        <p className="text-text-secondary text-xs">
          © {new Date().getFullYear()} LinuxWorld. All rights reserved.
        </p>

        {/* Credit */}
        <p className="text-text-secondary/40 text-xs">
          Designed & built by{' '}
          <a
            href="https://www.linkedin.com/in/jibbran-ali/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#9CA3AF')}
            onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
          >
            Jibbran Ali
          </a>
        </p>
      </div>
    </footer>
  )
}
