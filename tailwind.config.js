module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx,html}","./public/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        "other": {'min':'340px','max':'1200px'},
      },
      colors:{
        darkbg:"#1E293B",
        blue:{
          850:"#7dd3fc"
        }
      }
    },
  },
  plugins: [],
}
