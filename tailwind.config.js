/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Mulish', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            'almost-white': '#FAFAFA',
        }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}