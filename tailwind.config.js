/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-503': {'max': '503px'},
        'lg': '720px',
      },
      colors: {
        customPurple: '#4d3efc',
      },
    },
  },
  plugins: [],
}

