import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#FBF8F2",
          100: "#F8F4ED",
          200: "#F1EADC",
          300: "#E6DCC6",
        },
        ink: {
          900: "#1A1815",
          800: "#2A2724",
          700: "#3A3631",
          600: "#5A544C",
          500: "#7A726A",
          400: "#9F968B",
        },
        forest: {
          50: "#EAEFEC",
          100: "#C7D5CC",
          400: "#3E6B53",
          500: "#2C513E",
          600: "#1F3D2E",
          700: "#15301F",
          900: "#0B1B14",
        },
        terracotta: {
          50: "#FBEFE8",
          100: "#F5D9C7",
          400: "#D9926E",
          500: "#C97B5A",
          600: "#B05E3F",
          700: "#8A4830",
        },
        ochre: {
          400: "#D9B25E",
          500: "#C19A40",
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "tightest": "-0.02em",
        "ultra": "0.16em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        riseIn: "riseIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        fadeIn: "fadeIn 1.2s ease-out forwards",
        sway: "sway 9s ease-in-out infinite",
        breathe: "breathe 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
