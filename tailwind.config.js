/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./components/**/*.{js,jsx,}",
    "./src/**/*.{js,jsx,css}",
    "./assets/**/*.{js,jsx,css}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
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

