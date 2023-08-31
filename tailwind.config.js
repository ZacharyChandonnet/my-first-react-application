/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue,react}"],
  theme: {
    extend: {
      width:{
        '95vw': '95vw',
        '150px': '150px', 
      },
      height: {
        '150px': '150px', 
      }
    },
  },
  plugins: [],
}