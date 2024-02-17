/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      colors: {
        primary: "#3ACFC0",
        primaryHover: "#ADEBE5",
        "1000": "#121212",
        "900": "#212529",
        "800": "#343A40",
        "700": "#495057",
        "600": "#6C757D",
        "500": "#ADB5BD",
        "400": "#CED4DA",
        "300": "#DEE2E6",
        "200": "#E9ECEF",
        "100": "#F8F9FA",
      },
      spacing: {
        s: "8px",
        m: "16px",
        l: "24px",
        xl: "48px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
