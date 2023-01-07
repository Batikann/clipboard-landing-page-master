/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        bai:"'Bai Jamjuree', sans-serif"
      },
      colors:{
        s_cyan:"hsl(171, 66%, 44%)",
        l_blue:"hsl(233, 100%, 69%)",
        d_blue:"hsl(210, 10%, 33%)",
        g_blue:"hsl(201, 11%, 66%)"
      }
    },
  },
  plugins: [],
}
