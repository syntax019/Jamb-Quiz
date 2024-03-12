/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    colors: {
      pureWhite: "#ffffff",
      lightGray: "#f4f6fa",
      lightbluish: "#abc1e1",
      greyNavy: "#626c7f",
      navy: "#3b4d66",
      darkNavy: "#313e51",
      red: "#ee5454",
      lightOrange: "#fff1e9",
      lightGreen: "#e0fdef",
      green: "#26d782",
      lightBlue: "#ebf0ff",
      lightPurple: "#f6e7ff",
      purple: "#d394fa",
      darkPurple: "#a729f5",
      shadow: "0 16px 40px 0 hsla(220, 29%, 66%, 14%)",

      // colorbody-bg: var(light-gray),
      // --color-body-text: var(--color-dark-navy),
      // --color-toggle: var(--color-grey-navy),
      // --color-info: var(--color-grey-navy),
      // --color-item-bg: var(--color-pure-white),
    },
    extend: {},
  },
  plugins: [],
};
