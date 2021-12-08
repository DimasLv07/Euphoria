// tailwind.config.js
module.exports = {
    purge: [
        './*.html',
        './**/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }

<<<<<<< HEAD
  const defaultTheme = require('tailwindcss/defaultTheme')
=======
const defaultTheme = require('tailwindcss/defaultTheme')
>>>>>>> ba49d6b7f4211e6f31fae08785eba5ca71f57f8b

module.exports = {
  theme: {
    screens: {
<<<<<<< HEAD
      'xs': '300px',
=======
      'xs': '320px',
>>>>>>> ba49d6b7f4211e6f31fae08785eba5ca71f57f8b
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: [],
}