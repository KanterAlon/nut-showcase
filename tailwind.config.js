
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zetaGreen: "#708238",
        zetaYellow: "#DBC04D",
        zetaGray: "#4D4D4D",
        zetaCream: "#F4F1E9"
      }
    },
  },
  plugins: [],
}
