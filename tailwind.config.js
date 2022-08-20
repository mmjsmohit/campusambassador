/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('bg_image.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
