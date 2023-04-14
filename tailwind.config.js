/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['La Belle Aurore', 'cursive'],
      monospace: ['Source Code Pro', 'monospace'],
    },
    extend: {},
    colors: {
      colorHunt: {
        quatrinary: '#EC625F',
      },
    },
  },
  plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
