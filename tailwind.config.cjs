/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        red: "#b91c1c",
        white: "#ffffff",
        black: "#000000",
        yellow: "#C4DD2A",
        mustard: '#a2b71d',
        mustard_hover: '#859617',
        features: '#2A282A'
      },
      fontFamily: {
        F1: "'Titillium Web', serif",
      },
      fontStyle: {
        F1: 'bold',
      }
    },
  },
  plugins: [require("daisyui")],
}
