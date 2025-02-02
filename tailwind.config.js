/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#F7446A",
        customBlue: "#D6D6D6",
        customGray: '#CBC9CA',
        customGreen: "#002C3E",
        customKharani:"#d4ced0"
      },
      backgroundImage: {
        'custom-bg': "url('/hello.png')",
      },
    },
  },
  plugins: [],
}

