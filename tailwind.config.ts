import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#131313",
        "on-background": "#e5e2e1",
        surface: "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1b1b1c",
        "surface-container": "#202020",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#c1c6d7",
        outline: "#8b90a0",
        "outline-variant": "#414755",
        primary: "#007AFF", // Accent Blue
        "primary-active": "#005BC1",
        "primary-container": "#4b8eff",
        "on-primary-container": "#00285c",
        secondary: "#c8c6c6",
        "secondary-container": "#474747",
        tertiary: "#ffb595",
        "tertiary-container": "#ef6719",
        error: "#ffb4ab",
        "error-container": "#93000a",
      },
      height: {
        "toolbar-height": "60px",
        "filmstrip-height": "120px",
      },
      width: {
        "sidebar-width": "320px",
      },
      borderRadius: {
        lg: "12px", // Rounded 12px requested by user
        md: "8px",
        sm: "4px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
