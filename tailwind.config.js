/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "hero-font": "Tomorrow", //by adding this it will add this in tailwind text property.
    },
  },
  plugins: [],
};
