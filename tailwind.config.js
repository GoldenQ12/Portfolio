/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/daisyui/**/*.js"     
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("./src/types/daisyui"),
    require("tailwindcss-animated"),
  ],
  daisyui: {
    themes: [
      ["dark", "cupcake"]
    ]
  },
}