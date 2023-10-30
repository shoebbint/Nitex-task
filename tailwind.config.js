/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF6647',
        black: '#1F313F',
       
      },
      backgroundColor:{
        primary:'#ff6647',
      },
    },
  },
  plugins: [require('daisyui')],
}