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
        bg: {
          base: "#080A0F",
          surface: "#0D1117",
          elevated: "#131920",
          border: "#1E2A38",
        },
        accent: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
          violet: "#8B5CF6",
          emerald: "#10B981",
          amber: "#F59E0B",
          rose: "#F43F5E",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        "glow-blue": "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
        "glow-violet": "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
        "glow-cyan": "radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, transparent 70%)",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)",
        "glow-violet": "0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1)",
        "glow-cyan": "0 0 20px rgba(6,182,212,0.3)",
        "glow-emerald": "0 0 20px rgba(16,185,129,0.3)",
        "card": "0 1px 1px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
