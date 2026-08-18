import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0029B4",
          50: "#e6ecff",
          100: "#cce0ff",
          200: "#99baff",
          300: "#6695ff",
          400: "#336fff",
          500: "#0029B4",
          600: "#002196",
          700: "#001a78",
          800: "#001259",
          900: "#000b3b",
          950: "#000624",
        },
        brand: {
          50: "#e6ecff",
          100: "#cce0ff",
          200: "#99baff",
          300: "#6695ff",
          400: "#336fff",
          500: "#0029B4",
          600: "#002196",
          700: "#001a78",
          800: "#001259",
          900: "#000b3b",
          950: "#000624",
        },
        dark: {
          base: "#07090E",
          surface: "#0F141C",
          elevated: "#171F2C",
          card: "#1C2638",
          border: "rgba(255, 255, 255, 0.08)",
          "border-strong": "rgba(255, 255, 255, 0.16)",
        },
        group: {
          accent: "#0029B4", // Corporate Primary Blue Accent
          secondary: "#3B82F6",
          silver: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      spacing: {
        "section-sm": "3rem",
        "section-md": "5rem",
        "section-lg": "7.5rem",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
