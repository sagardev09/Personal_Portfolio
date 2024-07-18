import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import { addVariablesForColors } from "./app/func/addVariablesForColors";
import svgToDataUri from "mini-svg-data-uri";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
      moveUp: "moveUp 1.4s ease forwards",
      appear: "appear 1s ease forwards",
      meteor: "meteor 5s linear infinite",
      "marquee-horizontal": "marquee-x var(--duration) infinite linear",
      "marquee-vertical": "marquee-y var(--duration) linear infinite",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
        moveUp: {
          "0%": { transform: "translateY(5%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        appear: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "rotate-full": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        "shape-shift": {
          "0%": {
            width: "40px",
            height: "20px",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
