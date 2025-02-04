import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["Crimson Text", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        neon: {
          purple: "#8B5CF6",
          pink: "#D946EF",
          blue: "#0EA5E9",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          light: "#D6BCFA",
          dark: "#7E69AB",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shine: {
          "0%": { backgroundPosition: "200% center", opacity: "0.7" },
          "50%": { opacity: "1" },
          "100%": { backgroundPosition: "-200% center", opacity: "0.7" },
        },
        "shine-inner": {
          "0%": { 
            backgroundPosition: "-200% center",
            opacity: "0.4"
          },
          "50%": {
            opacity: "0.8"
          },
          "100%": { 
            backgroundPosition: "200% center",
            opacity: "0.4"
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        blink: {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        shine: "shine 4s ease infinite",
        "shine-inner": "shine-inner 3s ease infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1s step-end infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;