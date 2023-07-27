/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bagel: "Bagel Fat One",
      },
      keyframes: {
        heroBurger: {
          "0%": {
            transform: "scale(97%)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        heroTitle: {
          "0%": {
            transform: "translate(-50px,0px)",
          },
          "100%": {
            transform: "translate(0px,0px)",
          },
        },
      },
      animation: {
        heroBurger: "heroBurger 1s",
        heroTitle: "heroTitle 1s",
      },
    },
  },
  plugins: [],
};
