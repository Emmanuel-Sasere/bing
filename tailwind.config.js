/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    animation: { 
      leftToRight:'leftToRight 1s ease-in-out infinite',
  },

    keyframes: {
      leftToRight: {
      '0%': {
        transform: 'translateX(-100%)',
      },
     ' 100%': {
        transform: 'translateX(0)'
      }
    }
  },
    
     
    
    animation: {
      bounce: 'bounce 10s infinite',
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
  },
  plugins: [],
};
