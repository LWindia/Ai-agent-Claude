// Ambient floating background elements — purely decorative, premium feel
// Small technical AI labels, dots, and lines scattered behind the hero content

const floatingLabels = [
  { text: 'agent.run()',    x: '6%',  y: '16%', delay: '0s',    dur: '28s', color: '#38BDF8' },
  { text: 'RAG',            x: '86%', y: '10%', delay: '4s',    dur: '32s', color: '#2563EB' },
  { text: 'context_window', x: '73%', y: '70%', delay: '8s',    dur: '26s', color: '#38BDF8' },
  { text: 'tool_call()',    x: '12%', y: '76%', delay: '2s',    dur: '30s', color: '#2563EB' },
  { text: 'LLM',            x: '91%', y: '43%', delay: '6s',    dur: '24s', color: '#38BDF8' },
  { text: 'orchestrate()',  x: '4%',  y: '46%', delay: '10s',   dur: '34s', color: '#2563EB' },
  { text: 'embedding',      x: '58%', y: '86%', delay: '3s',    dur: '28s', color: '#38BDF8' },
  { text: 'multi_agent',    x: '36%', y: '6%',  delay: '7s',    dur: '30s', color: '#2563EB' },
  { text: 'memory.store()', x: '80%', y: '28%', delay: '9s',    dur: '26s', color: '#38BDF8' },
  { text: 'Claude',         x: '20%', y: '90%', delay: '1s',    dur: '32s', color: '#2563EB' },
  { text: 'reasoning',      x: '48%', y: '13%', delay: '12s',   dur: '24s', color: '#38BDF8' },
  { text: 'vector_db',      x: '68%', y: '53%', delay: '5s',    dur: '28s', color: '#2563EB' },
]

const dots = [
  { x: '15%', y: '30%', size: 3, delay: '0s',  dur: '10s', color: '#38BDF8' },
  { x: '85%', y: '20%', size: 4, delay: '3s',  dur: '12s', color: '#2563EB' },
  { x: '45%', y: '65%', size: 3, delay: '6s',  dur: '14s', color: '#38BDF8' },
  { x: '72%', y: '80%', size: 3, delay: '1s',  dur: '11s', color: '#2563EB' },
  { x: '28%', y: '55%', size: 4, delay: '8s',  dur: '13s', color: '#38BDF8' },
  { x: '90%', y: '60%', size: 3, delay: '4s',  dur: '10s', color: '#2563EB' },
  { x: '10%', y: '70%', size: 3, delay: '7s',  dur: '15s', color: '#38BDF8' },
  { x: '55%', y: '35%', size: 4, delay: '2s',  dur: '12s', color: '#2563EB' },
]

export default function AmbientBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">

      {/* Floating technical labels */}
      {floatingLabels.map((label, i) => (
        <div
          key={i}
          className="absolute font-mono"
          style={{
            left: label.x,
            top: label.y,
            fontSize: '11px',
            color: label.color,
            opacity: 0.35,
            letterSpacing: '0.06em',
            animation: `ambientFloat ${label.dur} ease-in-out ${label.delay} infinite`,
            whiteSpace: 'nowrap',
            textShadow: `0 0 8px ${label.color}`,
          }}
        >
          {label.text}
        </div>
      ))}

      {/* Glowing micro dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: dot.color,
            opacity: 0.7,
            boxShadow: `0 0 8px ${dot.color}, 0 0 16px ${dot.color}55`,
            animation: `pulse ${dot.dur} ease-in-out ${dot.delay} infinite`,
          }}
        />
      ))}

      {/* SVG: dashed lines + corner brackets */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Dashed tick lines */}
        {[
          { x1: '5%',  y1: '25%', x2: '19%', y2: '25%', color: '#38BDF8', delay: '0s' },
          { x1: '80%', y1: '14%', x2: '95%', y2: '14%', color: '#2563EB', delay: '3s' },
          { x1: '60%', y1: '69%', x2: '76%', y2: '69%', color: '#38BDF8', delay: '6s' },
          { x1: '9%',  y1: '59%', x2: '23%', y2: '59%', color: '#2563EB', delay: '4s' },
          { x1: '77%', y1: '49%', x2: '92%', y2: '49%', color: '#38BDF8', delay: '2s' },
        ].map((line, i) => (
          <line
            key={i}
            x1={line.x1} y1={line.y1}
            x2={line.x2} y2={line.y2}
            stroke={line.color}
            strokeWidth="1"
            strokeDasharray="4 4"
            strokeOpacity="0.35"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.15;0.45;0.15"
              dur={`${14 + i * 3}s`}
              begin={line.delay}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Corner bracket accents — L-shapes */}
        {[
          { x: 40,  y: 80,  size: 14, color: '#38BDF8' },
          { x: 880, y: 60,  size: 14, color: '#2563EB' },
          { x: 680, y: 440, size: 14, color: '#38BDF8' },
          { x: 100, y: 400, size: 14, color: '#2563EB' },
          { x: 500, y: 30,  size: 12, color: '#38BDF8' },
          { x: 760, y: 300, size: 12, color: '#2563EB' },
        ].map((b, i) => (
          <g key={i} opacity="0.45">
            {/* Top-left L */}
            <line x1={b.x} y1={b.y} x2={b.x + b.size} y2={b.y}
              stroke={b.color} strokeWidth="1.5" />
            <line x1={b.x} y1={b.y} x2={b.x} y2={b.y + b.size}
              stroke={b.color} strokeWidth="1.5" />
          </g>
        ))}

        {/* Small cross / plus marks */}
        {[
          { cx: 200, cy: 150, color: '#38BDF8' },
          { cx: 750, cy: 350, color: '#2563EB' },
          { cx: 350, cy: 480, color: '#38BDF8' },
          { cx: 920, cy: 200, color: '#2563EB' },
        ].map((c, i) => (
          <g key={i} opacity="0.3">
            <line x1={c.cx - 5} y1={c.cy} x2={c.cx + 5} y2={c.cy}
              stroke={c.color} strokeWidth="1" />
            <line x1={c.cx} y1={c.cy - 5} x2={c.cx} y2={c.cy + 5}
              stroke={c.color} strokeWidth="1" />
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes ambientFloat {
          0%   { transform: translateY(0px);   opacity: 0.35; }
          25%  { transform: translateY(-5px);  opacity: 0.45; }
          50%  { transform: translateY(-10px); opacity: 0.35; }
          75%  { transform: translateY(-5px);  opacity: 0.25; }
          100% { transform: translateY(0px);   opacity: 0.35; }
        }
      `}</style>
    </div>
  )
}
