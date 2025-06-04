/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: { 
      center : true,
      padding :'16px', 
    },
    extend: { 
      screens : { 
       '2xl' : '1320px'
      },
      colors :{
        "primary" : "#f43fSe",  // warna utama
        "dark" : "020617",      // warna hitam
        "secondary" :"94a3b8",  // warna abu
      },
    } 
  },   
  plugins: [],
}

