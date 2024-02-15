/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'DMsans':'dm sans'
      },
      boxShadow:{
        'card-shadow' : '0px 20px 50px 0px #3B3E430D',
        'hover-card' : '0px 10px 40px #656565',
        
      }
    },
  },
  plugins: [],
}



