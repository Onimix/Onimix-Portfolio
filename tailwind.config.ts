import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0D12", // deep indigo-black — the panel background
          raised: "#12161D", // card surfaces
          line: "#1E242E", // hairline borders / grid lines
        },
        signal: {
          DEFAULT: "#FF8A3D", // terminal amber — the signature accent
          dim: "#B85F1F",
          glow: "rgba(255, 138, 61, 0.35)",
        },
        data: {
          DEFAULT: "#4FD1FF", // cool signal-blue — secondary accent for data/links
          dim: "#2C7A99",
        },
        ink: {
          DEFAULT: "#E8EAED", // primary text
          muted: "#8B93A1", // secondary text
          faint: "#4B5563",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1E242E 1px, transparent 1px), linear-gradient(to bottom, #1E242E 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        scanline: "scanline 6s linear infinite",
        blink: "blink 1.4s steps(2) infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
