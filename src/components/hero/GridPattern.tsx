export default function GridPattern() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(37, 99, 235, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37, 99, 235, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  )
}
