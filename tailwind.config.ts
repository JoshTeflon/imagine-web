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
        "grey": "#6E6D6D",
        "dark": "#2D2C2C",
        "primary": "#175DCD",
        "secondary": "#2264CE",
        "low": "#DAD6D6",
        "darkBlue": "#0A234A",
        "lowBlue": "#9BA6B6",
        "highBlue": "#6B91CD",
        "card": "#D9D9D9",
        "servicesBg": "#F2F7FF",
        "serviceText": "#848DA1",
        "stepBg": "#45608A",
        "overlay": "#243754",
      },
      boxShadow: {
        'serviceCard': "0px 8px 4px 0px #0000001F",
        'hoverServiceCard': "0px 6px 22px -20px #00000059",
        'hoverSkillCard': "0px 8px 35px -20px #6B91CD73",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
};
export default config;
