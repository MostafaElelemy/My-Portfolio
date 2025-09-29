/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
      brand: {
        50: '#f5f3ff',
        100: '#ede9fe',
        500: '#8b5cf6',
        600: '#7c3aed'
      }
    },
      boxShadow: {
        glow: '0 0 60px rgba(99,102,241,0.25)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: []
}
