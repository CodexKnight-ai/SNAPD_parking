/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        adventure: ['Adventure'],
        ovo:['Ovo'],
        poppins:['Poppins'],
        bosch:['Bosch'],
      },
      colors:{
        navbar:'#041228',
        primary:'#031E51',
        secondary:'#141321',
        // fourth:'#6894B2'
      }
    },
  },
  plugins: [],
}
