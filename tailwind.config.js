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
        brightViolet:'#7c02ff97',
        cyanColor: '#0bebffea',
      },
   
      fontSize: {
        'zero': '0em',
      }
    },

    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}