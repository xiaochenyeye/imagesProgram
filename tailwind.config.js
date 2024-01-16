/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'black': '#303134',
      'white': '#ffffff',
      'ink': '#2A2B2F',
      'hoverlight': '#ffffff0f'
    },
    fontFamily: {
      sans: ['Alimama', 'sans-serif'],
      serif: ['Alimama', 'serif'],
    },
  },
  plugins: []
}
