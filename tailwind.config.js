/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first_color: "#7DFBFC",
        second_color: "#02071A",
        third_color: "#356DA0",
        fourth_color: "#173655",
        bg_color: "#09090B",
        contrast_color: "#DC941C",
      },
    },

    plugins: [],
  },
};
