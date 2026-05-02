interface Props {
  label?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = 'center',
}: Props) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent/80 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 w-fit">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
