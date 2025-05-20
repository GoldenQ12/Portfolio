module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/daisyui/**/*.js"     
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    require("tailwindcss-animated"),
  ],
  daisyui: {
    themes: [
      ["dark", "cupcake"]
    ]
  },
}