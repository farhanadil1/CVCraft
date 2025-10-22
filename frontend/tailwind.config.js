/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3d-light":
          "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.05)",
      },
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
