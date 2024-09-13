import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mickyMouse: "var(--font-mickey-mouse)",
      },
      colors: {
        primary: {
          main: "#FFC130",
        },
      },
      backgroundImage: {
        pattern1: "url('/assets/bg1.svg'), url('/assets/bottombg1.svg')",
      },
      backgroundPosition: {
        pattern1Position: "top center, bottom center",
      },
      backgroundSize: {
        pattern1Size: "100% auto, 100% auto",
      },
    },
  },
  plugins: [],
};
export default config;
