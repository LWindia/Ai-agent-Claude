interface Props {
  label?: string       // small pill above heading
  title: string
  highlight?: string   // substring of title to color in accent/primary
  subtitle?: string
  align?: 'left' | 'center'
}

/**
 * Universal section heading — same font, size, and style across the entire site.
 * h2: 3xl → 4xl → 5xl, font-black, tight tracking
 * label: small uppercase pill in accent
 * highlight: colored in #38BDF8 with subtle glow
 * subtitle: text-secondary, relaxed leading
 */
export default function SectionHeading({ label, title, highlight, subtitle, align = 'center' }: Props) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  const renderTitle = () => {
    if (!highlight) return <>{title}</>
    const idx = title.indexOf(highlight)
    if (idx === -1) return <>{title}</>
    return (
      <>
        {title.slice(0, idx)}
        <span style={{ color: '#D97757', textShadow: '0 0 20px rgba(217,119,87,0.3)' }}>
          {highlight}
        </span>
        {title.slice(idx + highlight.length)}
      </>
    )
  }

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">{label}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
