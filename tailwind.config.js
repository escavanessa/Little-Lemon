/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#495e57',
        'yellow': '#f4ce14',
        'coral': '#ee9972',
        'lightcoral': '#fbdabb',
        'whitish': '#edefee',
        'darkgrey': '#333333',
        'lightgrey': '#6b7280'
      }
    },
  },
  plugins: [],
}

