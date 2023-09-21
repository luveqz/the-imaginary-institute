/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    colors: {
      salmon: {
        100: '#FFE1DB',
        400: '#F7876E',
        500: '#F86653',
        700: '#D61D04',
      },

      yellow: {
        500: '#F5BA25',
      },

      white: '#FFFFFF',
      black: '#35312F',
      transparent: 'transparent',
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },

    extend: {
      maxWidth: {
        'content-container': '960px',
      },
    },
  },

  plugins: [],
}
