/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        indigo: {
          DEFAULT: "#194A8C",
          50: "#76A6E7",
          100: "#659BE3",
          200: "#4284DD",
          300: "#256FD1",
          400: "#1F5CAF",
          500: "#194A8C",
          600: "#10315C",
          700: "#08182D",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        blue: "#164494",
        gray: "#595f72",
      },
    },
  },
  plugins: [],
};
