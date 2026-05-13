const cards = [
  {
    label: 'AI Agents',
    icon: '🤖',
    detail: 'Autonomous decision-making',
    delay: '0s',
    position: 'top-[8%] right-[5%]',
    animation: 'animate-float',
  },
  {
    label: 'LLM Systems',
    icon: '⚡',
    detail: 'Claude & frontier models',
    delay: '1.5s',
    position: 'top-[42%] right-[0%]',
    animation: 'animate-float-delayed',
  },
  {
    label: 'Workflows',
    icon: '🔗',
    detail: 'Orchestrated pipelines',
    delay: '3s',
    position: 'bottom-[12%] right-[8%]',
    animation: 'animate-float-slow',
  },
]

export default function FloatingCards() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`absolute ${card.position} ${card.animation}`}
          style={{ animationDelay: card.delay }}
        >
          <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 min-w-[160px] shadow-card">
            <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center text-lg flex-shrink-0">
              {card.icon}
            </div>
            <div>
              <div className="text-text-primary text-sm font-semibold leading-tight">{card.label}</div>
              <div className="text-text-secondary text-xs mt-0.5">{card.detail}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
