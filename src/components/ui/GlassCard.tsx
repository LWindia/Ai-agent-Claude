import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  glowOnHover?: boolean
  glowColor?: 'primary' | 'accent'
}

export default function GlassCard({
  children,
  className = '',
  glowOnHover = false,
  glowColor = 'accent',
}: Props) {
  const hoverGlow =
    glowColor === 'accent'
      ? 'hover:border-primary/30 hover:shadow-[0_0_25px_rgba(217,119,87,0.15)]'
      : 'hover:border-primary/40 hover:shadow-[0_0_25px_rgba(217,119,87,0.2)]'

  return (
    <div
      className={`
        glass rounded-xl
        ${glowOnHover ? `transition-all duration-300 cursor-default ${hoverGlow}` : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
