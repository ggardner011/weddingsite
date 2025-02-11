import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        deco: ["Raleway", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          DEFAULT: '#48383b',  // Main brown color
          dark: '#302021',     // Darker variant
          light: '#736063',    // Lighter variant
        },
        green: {
          DEFAULT: '#878846',  // Main brown color
          dark: '#303529',     // Darker variant
          light: '#d6c688',    // Lighter variant
        },
        
      },
    },
  },
  plugins: [],
} satisfies Config;
