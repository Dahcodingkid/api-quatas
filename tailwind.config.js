module.exports = {
  content: ["*.html", "./src/js/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
  variants: {
    scrollbar: ['dark'],
    scrollbar: ['rounded']
  }
}
