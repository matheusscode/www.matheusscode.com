import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
