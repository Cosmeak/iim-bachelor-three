/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      colors: {
        'black': '#000001',
        'red-bismark': '#A41D13',
        'white-clay': '#E9EDE9',
        'beige-bis': '#F9DB9F',
      },
      fontFamily: {
        'articula': 'Articula CF',
      }
    },
  },
  plugins: [],
}
