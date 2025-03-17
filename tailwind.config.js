const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textShadow: {
        default: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        md: '4px 4px 6px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-10%)', opacity: '0.2' },
          '100%': { transform: 'translateX(0%)', opacity: '1' }
        },
        fadeOpacity: {
          '0%, 100%': { opacity: '1.0' },
          '50%': { opacity: '0.3' }
        }
      },
      animation: {
        slideIn: 'slideInFromLeft 1s ease-out',
        fade: 'fadeOpacity 2.3s infinite'
      },
      fontFamily: {
        'black-han-sans': ['"Black Han Sans"', 'sans-serif'],
        'delicious': ['"Delicious Handrawn"', 'cursive'],
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'noto-sans-kr': ['"Noto Sans KR"', 'sans-serif']
      },
      boxShadow: {
        sunlike: '0 0 10px 2px rgba(248, 248, 248, 0.7), 0 0 20px 6px rgba(255, 255, 248, 0.5), 0 0 40px 10px rgba(248, 248, 248, 0.3), 0 0 60px 14px rgba(215, 0, 0, 0.15)'
      },
      backgroundImage: {
        'gradient-sidebar': 'linear-gradient(to right, #ffffff, #808080, #ffffff)',
      }
    }
  },
  plugins: [],
}
