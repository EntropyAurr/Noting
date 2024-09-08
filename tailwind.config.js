/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "system-ui"],
        Merienda: ["Merienda", "system-ui"],
        "Shantell-Sans": ["Shantell Sans", "system-ui"],
        "Playpen-Sans": ["Playpen Sans", "system-ui"],
        Play: ["Play", "system-ui"],
        Niramit: ["Niramit", "system-ui"],
        "Nanum-Gothic-Coding": ["Nanum Gothic Coding", "system-ui"],
        Mukta: ["Mukta", "system-ui"],
        KoHo: ["KoHo", "system-ui"],
        "Baloo-Bhai-2": ["Baloo Bhai 2", "system-ui"],
        Acme: ["Acme", "system-ui"],
        "Doppio-One": ["Doppio One", "system-ui"],
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
