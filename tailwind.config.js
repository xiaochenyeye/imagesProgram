/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
  colors: {
    black: "#303134",
    white: "#E0E0E1",
    ink: "#2A2B2F",
    hoverlight: "#ffffff0f",
    lightash: "#4E4F52",
    danger: "#EA1525",
  },
  fontFamily: {
    sans: ["Alimama", "sans-serif"],
    serif: ["Alimama", "serif"],
  },
};
export const plugins = [];
