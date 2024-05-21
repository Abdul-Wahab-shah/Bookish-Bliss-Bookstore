/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' if you prefer to use media queries
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
