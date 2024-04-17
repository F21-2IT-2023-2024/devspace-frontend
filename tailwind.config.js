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
      'secondary-accent': '#28dbf4'
    },
  },
  plugins: [],
}

