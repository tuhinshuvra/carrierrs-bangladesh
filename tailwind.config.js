/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#910A53",

          "secondary": "#eb67ae",

          "accent": "#1FB2A6",

          "neutral": "#191D24",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },


  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
