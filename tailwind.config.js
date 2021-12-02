module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#15263c',
      'secondary': '#ff014f',
      'danger': 'rgb(226 228 231 / 50%)',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
