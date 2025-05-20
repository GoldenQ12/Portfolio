module.exports = {
  content: [
    "./src/**/*.{html,ts}",
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