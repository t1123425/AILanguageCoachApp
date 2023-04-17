/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRowEnd:{
        'end-1-1':'grid-row-end: -1'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

