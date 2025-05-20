module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ],
  daisyui: {
    themes: false
  }
}