/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: '#F9FAFB',
        primary: '#93B5FF',
        paragraph: '#6B7280',
        accent: '#ABC4FF',
        accent2: '#C1D3FE'
      },
      fontFamily: {
        para: ['Montserrat', 'sans-serif'],
        head: ['"Libre Baskerville"', 'serif'],
      },
    },
  },
  plugins: [],
};
