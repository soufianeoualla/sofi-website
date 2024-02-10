/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'lavender': '#EFF2F9',
      'cornflowerBlue': '#5C75B8',
      'yellow': '#FFDD6F',
      'darkgrey':'#D2D4DA',
      'grey': '#DFE5F3',
      'light-grey':'#F5F5F5',
      'white': '#FFFFFF',
      'black':'#181823',
      'brown':'#836625',
      'brown-off':'#FDEDD6',
      'red':'#FF6868'
    
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '708px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}