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
          DEFAULT: "#48383b", // Main brown color
          dark: "#302021", // Darker variant
          light: "#736063", // Lighter variant
        },
        green: {
          DEFAULT: "#878846",
          dark: "#303529",
          light: "#d6c688",
        },
        yellow: {
          DEFAULT: "#ba9e6d", // Main brown color
          dark: "#ba9e6d", // Darker variant
          light: "#dfd7ac", // Lighter variant
        },
        blue: {
          light: "#aac1a7",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
