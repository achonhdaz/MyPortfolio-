/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#030712',
        navyCard: '#060d1d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.15)' },
          '66%': { transform: 'scale(0.85)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 0.75, transform: 'scale(1.08)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        blob: 'blob 10s infinite ease-in-out',
        float: 'float 5s infinite ease-in-out',
        'float-reverse': 'float-reverse 6s infinite ease-in-out',
        shimmer: 'shimmer 3s infinite linear',
        pulseGlow: 'pulseGlow 4s infinite ease-in-out',
        spinSlow: 'spinSlow 20s infinite linear',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(14,165,233,0.08) 0%, rgba(37,99,235,0) 50%), linear-gradient(141.27deg, rgba(30,58,138,0) 50%, rgba(56,189,248,0.1) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
      }
    },
  },
  plugins: [],
}