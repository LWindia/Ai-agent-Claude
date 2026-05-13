export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-black/8 bg-surface" aria-label="Site footer">

      {/* ── MAP ── */}
      <div className="w-full overflow-hidden" style={{ height: '200px' }}>
        <iframe
          title="LinuxWorld India – Krishna Tower, Jaipur"
          src="https://maps.google.com/maps?q=LinuxWorld+India,+Krishna+Tower,+Plot+No.+5,+Gopalpura+Bypass+Rd,+Jaipur,+Rajasthan+302015&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="200"
          style={{ border: 0, filter: 'sepia(0.08) saturate(0.95)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Map showing LinuxWorld India office at Krishna Tower, Jaipur"
        />
      </div>

      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/LW_White_gvs6tv.svg"
                alt="LinuxWorld India logo"
                width="32"
                height="32"
                className="h-8 w-auto"
                style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(340deg) brightness(0.6)' }}
              />
              <span className="text-text-primary font-bold text-base">LinuxWorld India</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              India's leading technology education institute. Empowering engineers with real-world AI, DevOps, and cloud skills.
            </p>
            <p className="text-text-secondary text-xs">
              <span className="text-primary font-semibold">Claude for DevOps™</span>
              <br />AI-Driven Infrastructure Automation &amp; Intelligent Operations
            </p>
          </div>

          {/* Col 2 — Course Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-bold text-sm uppercase tracking-widest">Course Details</h3>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-text-primary">Starts:</strong> 15th June 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-text-primary">Timing:</strong> 7:30 PM – 9:30 PM IST</span>
              </li>
              <li className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span><strong className="text-text-primary">Duration:</strong> 20 Days · 2 Hrs/Day</span>
              </li>
              <li className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-text-primary">Fee:</strong> ₹6,999 + Taxes</span>
              </li>
              <li className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span><strong className="text-text-primary">Mode:</strong> Live Online Training</span>
              </li>
            </ul>
          </div>

          {/* Col 3 — Address */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-bold text-sm uppercase tracking-widest">Our Office</h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-text-secondary">
              <div className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  Krishna Tower, Plot No. 5,<br />
                  Gopalpura Bypass Rd,<br />
                  next to Triveni Nagar,<br />
                  Gopal Pura Mode,<br />
                  Jaipur, Rajasthan 302015
                </span>
              </div>
              <a
                href="https://maps.app.goo.gl/bv9XsuzsCS8hccB28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold hover:underline"
                aria-label="Get directions to LinuxWorld India on Google Maps (opens in new tab)"
              >
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Get Directions →
              </a>
            </address>
          </div>

          {/* Col 4 — Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-bold text-sm uppercase tracking-widest">Follow Us</h3>
            <div className="flex flex-col gap-3">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinuxWorld India on LinkedIn (opens in new tab)"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(10,102,194,0.1)', border: '1px solid rgba(10,102,194,0.2)' }}>
                  <svg className="w-4 h-4" fill="#0A66C2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/linuxworld.india/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinuxWorld India on Instagram (opens in new tab)"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(225,48,108,0.08)', border: '1px solid rgba(225,48,108,0.18)' }}>
                  <svg className="w-4 h-4" fill="#E1306C" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">Instagram</span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@linuxworldindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinuxWorld India on YouTube (opens in new tab)"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(255,0,0,0.07)', border: '1px solid rgba(255,0,0,0.15)' }}>
                  <svg className="w-4 h-4" fill="#FF0000" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">YouTube</span>
              </a>

            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-10 pt-6 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-secondary text-xs">
            © {currentYear} LinuxWorld Informatics Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-text-secondary/40 text-xs">
            Designed &amp; built by{' '}
            <a
              href="https://www.linkedin.com/in/jibbran-ali/"
              target="_blank"
              rel="noopener noreferrer"
              title="Jibbran Ali on LinkedIn"
              aria-label="Jibbran Ali – LinkedIn profile (opens in new tab)"
              className="hover:text-text-secondary transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Jibbran Ali
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
