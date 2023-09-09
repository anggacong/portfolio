/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4A6CF7",
        third: "#090E34",
      },
      container: {
        width: "100%",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
