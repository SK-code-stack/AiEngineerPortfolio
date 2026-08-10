import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        glow: "var(--glow)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        "aurora-drift-1": "aurora-drift-1 14s infinite alternate ease-in-out",
        "aurora-drift-2": "aurora-drift-2 14s infinite alternate ease-in-out",
        "float-mascot": "float-mascot 3.2s infinite ease-in-out",
        "heartbeat-glow": "heartbeat-glow 3.6s infinite ease-in-out",
        "shine-sweep": "shine-sweep 3s infinite ease-in-out",
        "marquee-scroll": "marquee-scroll 55s linear infinite",
        "rotate-gradient": "rotate-gradient 8s linear infinite",
        "spin-slow": "spin-slow 6s linear infinite",
      },
      keyframes: {
        "aurora-drift-1": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(40px, -60px) scale(1.1)" },
          "100%": { transform: "translate(-20px, 40px) scale(0.9)" },
        },
        "aurora-drift-2": {
          "0%": { transform: "translate(0px, 0px) scale(1.1)" },
          "50%": { transform: "translate(-50px, 50px) scale(0.95)" },
          "100%": { transform: "translate(30px, -30px) scale(1.05)" },
        },
        "float-mascot": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        "heartbeat-glow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.15" },
          "50%": { transform: "scale(1.15)", opacity: "0.35" },
        },
        "shine-sweep": {
          "0%": { left: "-100%" },
          "50%, 100%": { left: "200%" },
        },
        "marquee-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "rotate-gradient": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
