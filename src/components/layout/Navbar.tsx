import { useState, useEffect } from 'react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-base/90 backdrop-blur-glass border-b border-black/8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label="LinuxWorld – Claude for DevOps home">
            <img
              src="/LW_White_gvs6tv.svg"
              alt="LinuxWorld logo"
              width="32"
              height="32"
              className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-200"
              style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(340deg) brightness(0.6)' }}
            />
            <span className="text-text-primary font-semibold text-sm hidden sm:block">
              Claude for DevOps™
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                role="listitem"
                className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#pricing">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden glass rounded-xl mb-4 p-4 flex flex-col gap-3" role="navigation" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary text-sm hover:text-text-primary transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" href="#pricing" className="mt-2 w-full">
              Enroll Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
