/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRowEnd:{
        'end-1-1':'grid-row-end: -1'
      }
    },
  },
  plugins: [],
}

