import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#5A4F4F",
        "light-green": "#99C35F",
        "dark-green": "#4CA69D",
        'btn-text': '#4CA69D',
        'btn-green': '#7BB882',
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        sans: ["var(--font-opensans)"],
      },
      dropShadow: {
        "3xl": "0 4.8px 4.8px rgba(0, 0, 0, 0.25)",
      }
    },
  },
  plugins: [],
};
export default config;
