/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
        Solway: ["Solway", "serif"],
        Salsa: ["Salsa", "cursive"],
        Saira: ["Saira", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        "Hind Vadodara": ["Hind Vadodara", "sans-serif"],
        "Titan One": ["Titan One", "sans-serif"],
        Merienda: ["Merienda", "cursive"],
        Signika: ["Signika", "sans-serif"],
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
