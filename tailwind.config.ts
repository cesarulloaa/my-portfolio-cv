import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: { // sobrescribimos directamente el azul por defecto
        DEFAULT: "#E85D04",
        50: "#FFE8DC",
        100: "#FFD1B9",
        200: "#FFB38A",
        300: "#FF944C",
        400: "#FF7510",
        500: "#E85D04",
        600: "#B74B03",
        700: "#863702",
        800: "#552401",
        900: "#241200",
      },
      secondary: {
        DEFAULT: "#FFFFFF",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#FFFFFF",
        600: "#F2F2F2",
        700: "#D9D9D9",
        800: "#BFBFBF",
        900: "#A6A6A6",
      },
      accent: {
        DEFAULT: "#E85D04",
        500: "#E85D04",
      },
      foreground: "#000000",
      background: "#FFFFFF",
    },
    backgroundImage: {
      "gradient-cover":
        "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)"
    },
    extend: {

    },
  },
  plugins: [],
} satisfies Config;
