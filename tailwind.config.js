/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Rajdhani:"'Rajdhani', sans-serif;"
      },
      colors:{
        innerDark: '#191919',
        Dark: '#202124',
        primary:'#DCBA9D',
        pis: '#88D18A',
        air: '#568EA3',
        gamboge:'#EFA00B',
        magnolia:'##F8F0FB'
      },  
      backgroundImage:{
        'light_Img':"url('https://images.unsplash.com/photo-1507981919056-e4804b83d74e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'dark_Img': "url('https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
    },
    boxShadow:{
      'cus_sh_1':"#568EA3 -8px 8px",
      'cus_sh_2':"#DFF3E4 -10px 10px",
    }
  },
  plugins: [],
}

