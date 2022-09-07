/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        17: "repeat(17, minmax(0, 1fr))",
      },
      backgroundImage: {
        loading: "url('../public/loading.svg')",
        star: "url('../public/icon_star.svg')",
      },
    },
  },
  plugins: [],
};
