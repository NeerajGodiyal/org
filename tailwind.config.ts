/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        red_hat: ["Red Hat Text", "sans-serif"]
      },
      colors:{
        dark: "#000000",
        light: "#ffffff",
        primary: "#B63E96",
        secondary: "#58E6D9",
        primaryDark: "#8B2C6F",
        c_grayish_blue: "hsl(237, 18%, 59%)",
                c_soft_red: "hsl(345, 95%, 68%)",
                c_dark_desaturated_blue: "hsl(236, 21%, 26%)",
                c_very_dark_blue: "hsl(235, 16%, 14%)",
                c_black_blue: "hsl(234, 17%, 12%)",
                c_purple: "#2d2438"
      },
      keyframes: {
        "uptomiddle": {
            "0%": {
                transform: "scaleY(100%)"
            },
            "100%": {
                transform: "scaleY(0%)"
            }
        },
        "middletobottom": {
            "0%": {
                transform: "scaleY(0%)"

            },
            "50%": {
                transform: "scaleY(0%)"
            },
            "100%": {
                transform: "scaleY(100%)"
            }
        }
    },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        "uptomiddle": "uptomiddle 0.15s ease-out 0s forwards",
        "middletobottom": "middletobottom 0.3s ease-out 0s forwards",
      },
      backgroundImage: {
        circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",

          }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { min: "479px" },
      // => @media (min-width: 479px) { ... }
  },
  },
  plugins: [
  ],
  
}
 