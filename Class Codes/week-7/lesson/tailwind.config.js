/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#099268",
        secondary: "#e8590c",
      },
      spacing: {
        4.5: "18px",
      },
      boxShadow: {
        custom: "4px 4px 8px 5px rgba(0,0,0, .3)",
      },

      screens: {
        "2xs": "375px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
