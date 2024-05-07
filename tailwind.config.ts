import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '512px',
        'tablet': '960px',
      },
      colors: {
        "green": "#5A4F4F",
        'green-xl': '#5C743C',
        'really-light-green': '#F0FFF0',
        "light-green": "#99C35F",
        "regular-green": "#7BB882",
        "dark-green": "#4CA69D",
        "btn-text": "#4CA69D",
      },
      fontFamily: {
        nunito: ["var(--font-nunito-sans)"],
        sans: ["var(--font-opensans)"],
      },
      dropShadow: {
        "3xl": "0 4.8px 4.8px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        "hero-app": "0px 2px 12px 1px rgba(0, 0, 0, 0.5)",
      }
    },
  },
  plugins: [],
};
export default config;
