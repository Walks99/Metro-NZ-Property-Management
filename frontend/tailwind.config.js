/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '103': '1.03',
        '105': '1.05',
        '107': '1.07',
        '109': '1.09'
      },
      screens: {
        '3xl': '1800px',
      }
    },
  },
  plugins: [],
}