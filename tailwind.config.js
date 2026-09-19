/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#12304A",
          light: "#1D4260",
          dark: "#0C2236",
        },
        teal: {
          DEFAULT: "#168C8C",
          dark: "#0F6F6F",
          light: "#1FA8A8",
        },
        aqua: "#DDF3F1",
        warm: "#F8FAFA",
        ink: "#18323F",
        muted: "#647985",
        line: "#DCE7E9",
        emergency: "#C83D4F",
        success: "#2D8A68",
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        soft: "0 4px 20px -8px rgba(18, 48, 74, 0.08)",
        card: "0 2px 12px -4px rgba(18, 48, 74, 0.06)",
        lift: "0 12px 32px -12px rgba(18, 48, 74, 0.16)",
      },
    },
  },
  plugins: [],
};