// Static corner brackets with a slow breathing glow — premium, no movement

interface BracketProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

function Bracket({ position }: BracketProps) {
  const arm = 48
  const sw  = 2
  const pad = 8
  const box = arm + pad * 2

  const rotations: Record<string, string> = {
    'top-left':     'rotate(0deg)',
    'top-right':    'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left':  'rotate(270deg)',
  }

  const delays: Record<string, string> = {
    'top-left':     '0s',
    'top-right':    '1.2s',
    'bottom-right': '2.4s',
    'bottom-left':  '3.6s',
  }

  const posStyles: Record<string, React.CSSProperties> = {
    'top-left':     { top: 88,   left: 28 },
    'top-right':    { top: 88,   right: 28 },
    'bottom-left':  { bottom: 28, left: 28 },
    'bottom-right': { bottom: 28, right: 28 },
  }

  const o = pad
  const e = pad + arm

  return (
    <div
      className="absolute z-20 pointer-events-none"
      style={{
        ...posStyles[position],
        transform: rotations[position],
        animationDelay: delays[position],
      }}
    >
      <svg
        width={box}
        height={box}
        viewBox={`0 0 ${box} ${box}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <defs>
          <filter id={`glow-${position}`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Bracket arms */}
        <polyline
          points={`${e},${o} ${o},${o} ${o},${e}`}
          stroke="#38BDF8"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter={`url(#glow-${position})`}
        >
          <animate
            attributeName="stroke-opacity"
            values="0.35;0.9;0.35"
            dur="4s"
            begin={delays[position]}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
          />
        </polyline>

        {/* Corner dot */}
        <circle
          cx={o} cy={o} r={3}
          fill="#38BDF8"
          filter={`url(#glow-${position})`}
        >
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="4s"
            begin={delays[position]}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
          />
        </circle>
      </svg>
    </div>
  )
}

export default function CornerBrackets() {
  return (
    <>
      <Bracket position="top-left" />
      <Bracket position="top-right" />
      <Bracket position="bottom-left" />
      <Bracket position="bottom-right" />
    </>
  )
}
