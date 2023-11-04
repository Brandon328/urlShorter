/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/Components/**/*.{js,jsx}",
    "./src/Pages/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      primary: {
        cyan: '#2acfcf',
        darkviolet: '#3b3054'
      },
      secondary: {
        red: '#f46262'
      },
      neutral: {
        gray: '#bfbfbf',
        grayishviolet: '#9e9aa7',
        darkblue: '#35323e',
        darkviolet: '#232127'
      },
      white: {
        50: colors.slate[50],
        100: colors.gray[50]
      }
    },
    fontFamily: {
      pop: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}