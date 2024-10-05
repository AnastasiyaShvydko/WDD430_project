import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         primary : '#36151E',
         tertiary: '#8499B1',
        //  secondary : '#593F62',
        //  trinary : '#8499B1'
      },
    },
  },
  plugins: [],
};
export default config;
