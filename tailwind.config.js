/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gameWhite: "#FFFBF5",
        gameDarkRed: "#53212B",
        gameMiddleRed: "#BD3944",
        gameLightRed: "#FD4556",
        gameBlack: "#111C26",
      },
      fontFamily: {
        valorant: ["Valorant"],
      },
    },
  },
  plugins: [],
};
