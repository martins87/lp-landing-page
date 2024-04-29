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
        "green-bg": "#80BC84",
        "light-green": "#99C35F",
        "dark-green": "#4CA69D",
        "btn-text": "#4CA69D",
        "btn-green": "#7BB882",
        "card-gray": "#F2F2F2",
      },
      fontFamily: {
        nunito: ["var(--font-nunito-sans)"],
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
