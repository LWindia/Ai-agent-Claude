import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px] pointer-events-none"
      style={{
        width: `${progress * 100}%`,
        background: 'linear-gradient(90deg, #D97757, #C4623E)',
        boxShadow: '0 0 8px rgba(217,119,87,0.6)',
        transition: 'width 0.1s linear',
      }}
    />
  )
}
