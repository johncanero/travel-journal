/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        pinkRauschAir: '#ff5a5f',
        cyanAir: '#00A699',
        orangeAir: '#FC642D',
        darkGrayAir: '#484848',
      }
    },

    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}