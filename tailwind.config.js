/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#070707',
        dark2: '#1C1C1c',
        gray1: '#6A6A6A',
        accentLight: '#19A7CE',
        light_gray: '#D9D9D9',
        light_gray2: '#B9B9B9',
        logo: '#444444',
      },
    },
  },
  plugins: [],
};
