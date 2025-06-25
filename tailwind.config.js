/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-1': '#181607',
        'color-2': '#ecd85d',
        'color-3': '#ecd85d',
        'color-4': '#181607',
        'color-5': '#181607',
        'color-6': '#181607',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
