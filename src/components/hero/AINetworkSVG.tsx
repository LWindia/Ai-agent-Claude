export default function AINetworkSVG() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nodeGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D97757" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C4623E" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGrad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4623E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C4623E" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        <g stroke="rgba(217,119,87,0.25)" strokeWidth="1" fill="none">
          <line x1="250" y1="250" x2="120" y2="140" strokeDasharray="4 4">
            <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="250" y1="250" x2="380" y2="140" strokeDasharray="4 4">
            <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="250" y1="250" x2="100" y2="320" strokeDasharray="4 4">
            <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="250" y1="250" x2="400" y2="320" strokeDasharray="4 4">
            <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="2.8s" repeatCount="indefinite" />
          </line>
          <line x1="250" y1="250" x2="250" y2="80" strokeDasharray="4 4">
            <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3.2s" repeatCount="indefinite" />
          </line>
          <line x1="120" y1="140" x2="380" y2="140" strokeDasharray="4 4">
            <animate attributeName="stroke-opacity" values="0.05;0.3;0.05" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="320" x2="400" y2="320" strokeDasharray="4 4">
            <animate attributeName="stroke-opacity" values="0.05;0.3;0.05" dur="4.5s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Traveling data particles */}
        <circle r="3" fill="#D97757" opacity="0.8" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M250,250 L120,140" />
        </circle>
        <circle r="2.5" fill="#C4623E" opacity="0.8" filter="url(#glow)">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M250,250 L380,140" />
        </circle>
        <circle r="2" fill="#D97757" opacity="0.7" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M250,250 L100,320" />
        </circle>
        <circle r="2.5" fill="#C4623E" opacity="0.8" filter="url(#glow)">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M250,250 L400,320" />
        </circle>

        {/* Central node */}
        <circle cx="250" cy="250" r="18" fill="url(#nodeGrad1)" filter="url(#glow)">
          <animate attributeName="r" values="16;20;16" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="250" r="8" fill="#D97757" opacity="0.9" />

        {/* Outer nodes */}
        <circle cx="120" cy="140" r="10" fill="url(#nodeGrad2)" filter="url(#glow)">
          <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="140" r="4" fill="#C4623E" opacity="0.9" />

        <circle cx="380" cy="140" r="10" fill="url(#nodeGrad1)" filter="url(#glow)">
          <animate attributeName="r" values="8;12;8" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="140" r="4" fill="#D97757" opacity="0.9" />

        <circle cx="100" cy="320" r="8" fill="url(#nodeGrad2)" filter="url(#glow)">
          <animate attributeName="r" values="6;10;6" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="320" r="3" fill="#C4623E" opacity="0.9" />

        <circle cx="400" cy="320" r="8" fill="url(#nodeGrad1)" filter="url(#glow)">
          <animate attributeName="r" values="6;10;6" dur="4.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="320" r="3" fill="#D97757" opacity="0.9" />

        <circle cx="250" cy="80" r="7" fill="url(#nodeGrad2)" filter="url(#glow)">
          <animate attributeName="r" values="5;9;5" dur="3.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="80" r="3" fill="#C4623E" opacity="0.9" />
      </svg>
    </div>
  )
}
