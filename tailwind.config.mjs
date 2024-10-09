/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        backGround: "#F6F6F5",
        lightBrown: "#E0D8CD",
        darkBrown: "#AD956D",
        lightBlue: "#D3E2EF",
        darkBlue: "#819AAB",
        textPrimary: "#3f4756",
      },
      backgroundImage: {
        arribaBG:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('/src/assets/images/arriba.avif')",
        abajoBG:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/src/assets/images/abajo.avif')",
      },
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography")],
};
