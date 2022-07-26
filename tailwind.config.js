/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      screens:{
        "lg": "1124",
        "xl": "1124",
        "2xl": "1124"
      },
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
    fontFamily:{
      Poppins:["Poppins","sans-serif"]
     }
  },
  plugins: [],
}
