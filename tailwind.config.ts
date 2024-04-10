import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aesthetic': "url('/assets/misc/wallpaper.jpg')"
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "sans-serif"],
        display: ["Jockey One", "Helvetica", "serif"],
      }
    }
  }
};
export default config;
