import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aesthetic': "url('/assets/buildings/image9.jpg')"
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "sans-serif"],
        display: ["Jockey One", "Helvetica", "serif"],
      },
      colors: {
        primary: {
          50: "#cfc9ed",
          100: "#beb6e7",
          200: "#ada3e0",
          300: "#9c90da",
          400: "#8b7dd4",
          500: "#7a6acd",
          600: "#6957c7",
          700: "#5844c1",
          800: "#4e3bb0",
          900: "#46349d"
        },
        secondary: {
          50: "#000a13",
          100: "#fffcfa",
          200: "#feeee1",
          300: "#fde0c9",
          400: "#fdd2b0",
          500: "#fcc497",
          600: "#fbb67e",
          700: "#faa966",
          800: "#f99b4d",
          900: "#f98d34"
        },
        tertiary: {
          50: "#0467fb",
          100: "#035ce2",
          200: "#0352c9",
          300: "#0348b0",
          400: "#023e97",
          500: "#02337e",
          600: "#022964",
          700: "#011f4b",
          800: "#011532",
          900: "#000a19"
        },
        accent: {
          50: "#fbc1d5",
          100: "#f9a9c5",
          200: "#f791b5",
          300: "#f679a5",
          400: "#f46295",
          500: "#f24a85",
          600: "#f13275",
          700: "#ef1a65",
          800: "#e01059",
          900: "#c80e4f"
        }
      }
    }
  }
};
export default config;
