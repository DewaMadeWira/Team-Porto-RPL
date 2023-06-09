/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
    "*"
  ],
  theme: {
    fontFamily:{
      'jakarta':["Plus Jakarta Sans",'sans-serif']
    },colors:{
      "gray-custom":"#D9DEDC",
      "white-custom":"#ECEFED",
      "dark-custom":"#2E3833",
      "yellow-custom":"#FBFDA4",
    }
,
    extend: {},
  },
  plugins: [],
}

