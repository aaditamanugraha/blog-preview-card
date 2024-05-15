/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        custom: [
          "box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75)",
          "-webkit-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75)",
          "-moz-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75)",
        ],
      },
    },
    colors: {
      yellow: "hsl(47, 88%, 63%)",
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 50%)",
      black: "hsl(0, 0%, 7%)",
    },
  },
  plugins: [],
};
