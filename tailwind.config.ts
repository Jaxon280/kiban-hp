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
        primary: "#28304c", // ネイビー
        secondary: "#ffd700", // ゴールド
      },
      fontFamily: {
        "sans-jp": ['"Noto Sans JP"', "sans-serif"],
        "sf-pro": ['"SF Pro Display"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "montserrat-semiBold": ["Montserrat", "serif"], // Montserrat SemiBold fontを追加
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
