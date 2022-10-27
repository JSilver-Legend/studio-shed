/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '98': '26rem',
        '110': '29rem',
      },
      height: {
        '20': '5rem'
      }
    },
  },
  plugins: [],
}
