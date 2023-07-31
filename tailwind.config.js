module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "1px": "1px",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
