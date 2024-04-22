/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      concertOne: ['Concert One', 'sans-serif'],
    },
    colors: {
      'primary': '#102638',
      'secondary': '#fcfefe',
      'primary-accent': '#3bcc67',
      'secondary-accent': '#28dbf4',

      'primary': {
        'DEFAULT': '#102638',
        '50': '#f2f5f6',
        '100': '#e6eaec',
        '200': '#c0c8cc',
        '300': '#9aa2a7',
        '400': '#4d5d66',
        '500': '#102638',
        '600': '#0e2331',
        '700': '#0b1a27',
        '800': '#08141e',
        '900': '#060f16'
      },
    },
    borderWidth: {
      '1': '1px',
    },
    boxShadow: {
      glow: '0 0 15px -5px #fcfefe',
    }
  },
  plugins: [],
}