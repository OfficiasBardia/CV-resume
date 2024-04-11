/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': "'Lato', sans-serif"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "2rem",
        },
      },
    },
  },
  plugins:
    [function ({ addVariant }) {
      addVariant('childe', '& > *');
      addVariant('childe-hover', '& > *:hover');
    },
    ],
}

