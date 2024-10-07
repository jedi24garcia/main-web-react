/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        tr2n: ['TR2N', 'sans-serif'],
      },
  },
  plugins: [],
}