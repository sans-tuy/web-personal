import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections//**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        glassmorph: "rgba(255, 255, 255, 0.1)",
      },
      animation: {
        fromTopAnimation: "fromTop 1.2s ease",
        toTopAnimation: "toTop 1.2s ease",
      },
      keyframes: {
        fromTop: {
          from: {
            transform: "translateY(-100px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        toTop: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
