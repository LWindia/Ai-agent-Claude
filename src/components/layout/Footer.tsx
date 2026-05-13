export default function Footer() {
  return (
    <footer className="border-t border-black/8 py-10 px-4" aria-label="Site footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo + brand */}
        <div className="flex items-center gap-2.5">
          <img
            src="/LW_White_gvs6tv.svg"
            alt="LinuxWorld India logo"
            width="28"
            height="28"
            className="h-7 w-auto opacity-90"
            style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(340deg) brightness(0.6)' }}
          />
          <span className="text-text-primary font-semibold text-sm">Claude for DevOps™</span>
        </div>

        {/* Tagline */}
        <p className="text-text-secondary text-xs text-center">
          AI-Driven Infrastructure Automation &amp; Intelligent Operations.
        </p>

        {/* Copyright */}
        <p className="text-text-secondary text-xs">
          <span aria-label={`Copyright ${new Date().getFullYear()} LinuxWorld. All rights reserved.`}>
            © {new Date().getFullYear()} LinuxWorld. All rights reserved.
          </span>
        </p>

        {/* Credit */}
        <p className="text-text-secondary/40 text-xs">
          Designed &amp; built by{' '}
          <a
            href="https://www.linkedin.com/in/jibbran-ali/"
            target="_blank"
            rel="noopener noreferrer"
            title="Jibbran Ali on LinkedIn"
            aria-label="Jibbran Ali – LinkedIn profile (opens in new tab)"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#6B6560')}
            onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
          >
            Jibbran Ali
          </a>
        </p>
      </div>
    </footer>
  )
}
