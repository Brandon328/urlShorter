/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      }
    },
    fontFamily: {
      pop: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}