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
        'ultrawide': '3440px',
      },
      colors: {
        "green": "#5A4F4F",
        'green-xl': '#5C743C',
        'really-light-green': '#F0FFF0',
        "light-green": "#99C35F",
        "regular-green": "#7BB882",
        "btn-text": "#4CA69D",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      dropShadow: {
        "3xl": "0 4.8px 4.8px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        "hero-app": "0px 2px 12px 1px rgba(0, 0, 0, 0.5)",
        "card": "0 12px 24px -8px rgba(0, 0, 0, 0.08)",
      }
    },
  },
  plugins: [],
};
export default config;
