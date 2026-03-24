/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nqu-purple': '#70488F',
        'nqu-orange': '#E67E22',
        'nqu-header': '#614385',
        'nqu-accent': '#F39C12',
      },
      fontFamily: {
        'display': ["Outfit", "sans-serif"],
        'body': ["Inter", "sans-serif"],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slow-zoom': 'slow-zoom 20s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
