export default function GlowOrbs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary large orb - top right */}
      <div
        className="absolute animate-breathe"
        style={{
          width: '600px',
          height: '600px',
          top: '-200px',
          right: '-150px',
          background: 'radial-gradient(circle, rgba(217,119,87,0.15) 0%, rgba(217,119,87,0.05) 40%, transparent 70%)',
          borderRadius: '50%',
          animationDelay: '0s',
        }}
      />
      {/* Accent orb - center left */}
      <div
        className="absolute animate-breathe"
        style={{
          width: '400px',
          height: '400px',
          top: '30%',
          left: '-100px',
          background: 'radial-gradient(circle, rgba(196,98,62,0.1) 0%, rgba(196,98,62,0.03) 40%, transparent 70%)',
          borderRadius: '50%',
          animationDelay: '1.5s',
        }}
      />
      {/* Small accent orb - bottom center */}
      <div
        className="absolute animate-breathe"
        style={{
          width: '300px',
          height: '300px',
          bottom: '-50px',
          left: '40%',
          background: 'radial-gradient(circle, rgba(217,119,87,0.08) 0%, rgba(196,98,62,0.04) 40%, transparent 70%)',
          borderRadius: '50%',
          animationDelay: '3s',
        }}
      />
    </div>
  )
}
