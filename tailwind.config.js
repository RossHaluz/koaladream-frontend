/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
],
  theme: {
    extend: {
    
    },
    fontFamily: {
body: ['Montserrat'],
secondery: ['Mulish']
    },
    screens: {
      'xs': '320px',

      'sm': '375px',

      'tb': '768px',
      
      'bg': '1280px',

      'lg': '1440px'
    },
    container: {
      center: true,
      padding: {
        xs: "20px",
        sm: "20px",
        tb: "20px",
        bg: '165px',
        lg: '165px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

