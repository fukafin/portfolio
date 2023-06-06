/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Noto Sans TC', sans-serif",
        'fakepearl':"'FakePearl-Regular', sans-serif",
      },
      colors: {
        'mainyellow':'#FFCD40',
        'subyellow': '#FAF3DB',
        'subpurple': '#6b21a8',
        'mainblue': '#2E4187',
        'txtc': '#475569',
      },
    },
  },
  plugins: [],
}
