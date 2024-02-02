/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        'background-body': '#1F2020',
        'title-color': '#3A8BB1',
        'text-description': '#A2A6A7',
        'text-color': '#FFF',
        'background-card': '#424242'
      }
    },
  },
  plugins: [],
}


