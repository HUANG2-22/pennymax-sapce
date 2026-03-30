import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 40px rgba(0, 255, 255, 0.18)",
      },
      colors: {
        ink: "#070A12",
        fog: "#D7DBE6",
      },
    },
  },
  plugins: [],
} satisfies Config;

