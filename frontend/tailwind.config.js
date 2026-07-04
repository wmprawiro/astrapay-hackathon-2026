/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#104bdd',
        'text-dark': '#252525',
        'text-gray': '#444444',
      }
    },
  },
  plugins: [],
}
