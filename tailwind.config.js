/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        emoji: ['"Segoe UI Emoji"', '"Apple Color Emoji"', '"Noto Color Emoji"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
  ],
  daisyui: {
    themes: [
      ["dark", "cupcake"]
    ]
  },
}