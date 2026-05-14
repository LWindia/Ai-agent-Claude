import type { ReactNode } from 'react'

interface Props {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  onClick?: () => void
  href?: string
  target?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  'aria-label'?: string
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  target,
  className = '',
  size = 'md',
  'aria-label': ariaLabel,
}: Props) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-lg
    cursor-pointer transition-all duration-300 select-none
    ${sizeClasses[size]}
  `

  const variantClasses =
    variant === 'primary'
      ? `bg-primary text-white
         shadow-[0_0_20px_rgba(217,119,87,0.4)]
         hover:shadow-[0_0_35px_rgba(217,119,87,0.7)]
         hover:scale-[1.03] hover:bg-[#C4623E]
         active:scale-[0.98]`
      : `bg-transparent text-text-primary
         border border-[#B1ADA1]/50
         hover:border-primary/60 hover:text-primary
         hover:shadow-[0_0_15px_rgba(217,119,87,0.2)]
         hover:scale-[1.02]
         active:scale-[0.98]`

  const classes = `${baseClasses} ${variantClasses} ${className}`.trim()

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
