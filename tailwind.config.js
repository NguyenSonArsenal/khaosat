/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'myGreen':'#387d6c',
        'myBlack':'#000',
        'myGrey':'#5f6c80',
        'myRed':'#EE3244',
        'myBlue':'#1c64f2',
      },
    },
  },
  plugins: [],
}

