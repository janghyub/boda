import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        map: "url(/images/map.svg)",
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        skylight: "#00F0FF",
        "sky-blue": "#00F0FF ",
        charcoal: "#0D0D0D",
        footer: "#191919",
        "gray-lightest": "#c7c7c7",
        "gray-lighter": "#808080",
        "gray-light": "#8d8d8d",
        "gray-dark": "#575757",
        "gray-darker": "#1A1A1A",
        "gray-darkest": "#0D0D0D",
      },
      fontSize: {
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "32": "32px",
        "40": "40px",
        "56": "56px",
        "64": "64px",
        "80": "80px",
        "190": "190px",
      },
      lineHeight: {
        "25": "25px",
        "26": "26px",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};
export default config;
