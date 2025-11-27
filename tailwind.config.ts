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
        green: {
          10: "#C2FED8",
          20: "#2CF599",
          30: "#27DF8B",
          40: "#20C077",
          50: "#199F62",
          60: "#117C4B",
          70: "#095934",
          80: "#03361E",
          90: "#011509",
        },
        blue: {
          10: "#E5F3FF",
          20: "#BBE1FF",
          30: "#65C7FF",
          40: "#0AAEEA",
          50: "#0797CB",
          60: "#0478A3",
          70: "#025777",
          80: "#01344A",
          90: "#00131D",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "flip-in-hor-top": {
          "0%": {
            transform: "rotateX(-80deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0)",
            opacity: "1",
          },
        },
        "flip-out-hor-top": {
          "0%": {
            transform: "rotateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "rotateX(-70deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "flip-in-hor-top": "flip-in-hor-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        "flip-out-hor-top": "flip-out-hor-top 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530)",
      },
    },
  },
  plugins: [],
};
export default config;
