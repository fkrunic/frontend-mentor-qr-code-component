/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(212, 45%, 89%)',
      'grayish-blue': 'hsl(220, 15%, 55%)',
      'dark-blue': 'hsl(218, 44%, 22%)'
    },
    fontFamily: {
      outfit: 'Outfit, sans-serif'
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

