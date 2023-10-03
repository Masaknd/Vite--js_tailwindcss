/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.{html,js}"],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1440px",
    },
    colors: {
      'primary-regular': '#676767',
      'primary-light': '#e0e0e0',
      'primary-dark': 'rgba(60, 60, 60, 0.9)',
      'primary-trans': 'rgba(103, 103, 103, 0.9)',
      'primary-accent': '#eaeaea',
      'secondary-regular': '#49b3ba',
      'secondary-light': '#d4eaee',
      'secondary-dark': '#d1dadb',
      'secondary-accent':'#d9e6e7',

    },
    extend: {
      fontFamily: {
        serif: ["Hanuman", "serif"],
        sans: ["Poppins", "sans-serif"],
        logo: ["Antonio"],
        ja: ["YakuHanJP", "Zen Kaku Gothic New"],
      },
      letterSpacing: {
        widest: ".3em",
      },
      // backgroundImage: {
      //   bg1: "url('/public/bg/bg-main@2x.png')",
      //   bg2: "url('/public/bg/bg-sub@2x.png')",
      // },
    },
  },
  plugins: [],
};
