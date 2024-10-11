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
        backGround: "#F5F5DC ",
        sandy: "#D3D3D3",
        textPrimary: "#2D5F73",
        azulOcean: "#5D8CA6",
        azulCielo: "#8EBAC8",
      },
      backgroundImage: {
        arribaBG:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/src/assets/images/arriba.avif')",
        abajoBG:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/src/assets/images/abajo.avif')",
      },
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography")],
};
