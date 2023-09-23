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
        800: '#473811',
      },

      white: '#FFFFFF',
      black: '#35312F',
      gray: '#f0f0f0',
      transparent: 'transparent',
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },

    boxShadow: {
      'dp-01': '0px 2px 2px 0px #00000024, -1px -1px 1px 0px #00000012',
    },

    extend: {
      maxWidth: {
        'content-container': '1020px',
      },

      fontSize: {
        '4.5xl': '2.5rem',
      },
    },
  },

  plugins: [require('@tailwindcss/container-queries')],
}
