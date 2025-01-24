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
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
            boxShadow: "0 0 15px rgba(139,92,246,0.2)",
          },
          "50%": {
            opacity: "0.95",
            transform: "scale(1.01)",
            boxShadow: "0 0 30px rgba(139,92,246,0.4)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        shine: "shine 8s ease infinite",
        pulse: "pulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;