/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js'
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '680px',
      'lg': '1020px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
