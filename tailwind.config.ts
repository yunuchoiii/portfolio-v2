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
    },
  },
  plugins: [],
};
export default config;
