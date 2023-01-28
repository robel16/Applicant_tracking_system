/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Quicksand: ["Quicksand"],
    },
    extend: {
      keyframes: {},
      animation: {
        transition: "bounce 1s forwards linear",
      },
      colors: {
        "cust-primary": "#192930",
        "cust-secondary": "#ff694b",
        "cust-secondary-darken": "#963f2d",
        "hover-background": "#dadada",
        "hover-bg-createjob": "#192030",
        "sub-color": "#8C8787",
        "secondary-color": "#635D5D",
        "out-lines": "#595d66",
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        " veryPaleRed": "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      width: {
        128: "50vw",
        70: "70vw",
        75: "75vw",
        90: "90vw",

        100: "100vw",
        700: "700px",
      },
      height: {
        70: "75vw",
        75: "75vw",
        99: "99vh",
        100: "100vh",
      },
      left: {
        3: "2%",
      },
      marginright: {
        100: "20%",
      },
      scale: {
        200: "20px",
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss"),
    require("autoprefixer"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
