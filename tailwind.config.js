/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {

      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    //require('@tailwindcss/custom-forms')
  ],
}
