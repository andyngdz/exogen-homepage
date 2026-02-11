import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,mjs}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ededed",
            primary: {
              50: "#f0f0f0",
              100: "#d9d9d9",
              200: "#bfbfbf",
              300: "#a6a6a6",
              400: "#8c8c8c",
              500: "#ffffff",
              600: "#d9d9d9",
              700: "#bfbfbf",
              800: "#a6a6a6",
              900: "#8c8c8c",
              DEFAULT: "#ffffff",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};

export default config;
