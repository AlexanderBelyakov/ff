import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "720px",
        lg: "1024px",
        "2lg": "1280px",
        xl: "1440px",
        "2xl": "1920px",
      },
      hover: {
        orange150:
          "linear-gradient(90deg, var(--orange50) 0%, var(--orange100) 100%)",
        orange300:
          "linear-gradient(90deg, var(--orange50) 0%, var(--orange100) 100%)",
      },
      animation: {},
      keyframes: {},
      colors: {
        purple: {
          200: "#e5dff9",
          500: "#896fe2",
        },
        gray: {
          600: "#797979",
          900: "#1F1F1F",
        },
        grey2: "var(--grey200)",
        grey6: "var(--grey600)",
        white: "var(--white)",
        black: "var(--black)",
        orange: {
          50: "var(--orange50)",
          100: "var(--orange100)",
          150: "var(--orange150)",
          200: "var(--orange200)",
          400: "var(--orange300)",
          500: "var(--orange500)",
          600: "var(--orange600)",
        },
      },
      backgroundImage: {
        "main-gradient-orange-linear":
          "linear-gradient(180deg, var(--orange200) 0%, var(--orange500) 100%)",
        "btn-gradient-orange-normal":
          "linear-gradient(90deg, var(--orange200) 0%, var(--orange400) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
