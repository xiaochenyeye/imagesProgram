/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'black': '#303134',
    },
    fontFamily: {
      sans: ['Alimama', 'sans-serif'],
      serif: ['Alimama', 'serif'],
    },
  },
  plugins: []
}
