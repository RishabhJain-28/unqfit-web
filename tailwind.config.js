/** @type {import('tailwindcss').Config} */
const p1 = {
  // background: "#14213d",
  background: "#121212",
  surface: "#313638",
  primrary: "#49dcb1",
  "primrary-variant": "#49beaa",
  secondary: "#eeb868",
  "font-secondary": "#000000",
  accent: "#ef767a",
  // primra :"#14213d"
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...p1,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
