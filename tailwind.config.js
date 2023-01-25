/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#11364d',
        'dark-secondary': '#154360',
        'teal-light-1': '#00898A',
        'lemon-green': '#92DA7B',
        'dark-ternary': '#195073',
        'teal-light': '#00FFF5',
        'teal-dark': '#00ADB5'
      }
    },
  },
  plugins: [],
}