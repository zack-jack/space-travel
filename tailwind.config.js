/* eslint-disable import/no-extraneous-dependencies */
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        indigo: {
          ...colors.indigo,
          100: '#D0D6F9',
          200: '#616476',
          900: '#0B0D17',
        },
      },
      fontFamily: {
        serif: ['Bellefair, serif'],
        sans: ['Barlow, sans-serif'],
        condensed: ['Barlow Condensed, sans-serif'],
      },
      fontSize: {
        xs: '0.875rem',
        sm: '1rem',
        base: '1.125rem',
        md: '1.25rem',
        lg: '1.75rem',
        xl: '2rem',
        '2xl': '3.5rem',
        '3xl': '6.25rem',
        '4xl': '9.375rem',
      },
      letterSpacing: {
        wide: '2.35px',
        wider: '2.7px',
        widest: '4.75px',
      },
      screens: {
        max: '1200px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
