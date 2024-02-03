/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      over: ["Overpass"],
    },
    extend: {
      colors: {
        "dark-blue": "#262E38",
        "very-dark-blue":"#131518",
        "light-black":"#212731",
        "light-gray":"#7C8798",
        "gray":"#7C8798",
        "orange":"#FC7614",
      },
    },
  },
  plugins: [],
};
