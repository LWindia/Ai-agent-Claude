/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': '#F4F3EE',
        'primary': '#D97757',
        'accent': '#D97757',
        'text-primary': '#2C2A26',
        'text-secondary': '#6B6560',
        'surface': '#ECEAE3',
        'surface-2': '#E4E2DA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'draw-line': 'drawLine 2s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(217,119,87,0.3)' },
          '50%': { boxShadow: '0 0 45px rgba(217,119,87,0.7)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        'glass': '12px',
        'heavy': '24px',
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(217,119,87,0.5)',
        'glow-accent': '0 0 25px rgba(217,119,87,0.4)',
        'glow-sm': '0 0 12px rgba(217,119,87,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
