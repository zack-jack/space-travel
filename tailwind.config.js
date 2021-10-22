const { colors } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const preflightHeaderStyles = plugin(({ addBase, theme }) => {
  addBase({
    html: { fontFamily: theme('fontFamily.sans') },
    body: { fontFamily: theme('fontFamily.sans') },
    h1: {
      fontSize: theme('fontSize.4xl'),
      fontFamily: theme('fontFamily.serif'),
      color: theme('colors.white'),
    },
    h2: {
      fontSize: theme('fontSize.3xl'),
      fontFamily: theme('fontFamily.serif'),
      color: theme('colors.white'),
    },
    h3: {
      fontSize: theme('fontSize.2xl'),
      fontFamily: theme('fontFamily.serif'),
      color: theme('colors.white'),
    },
    h4: {
      fontSize: theme('fontSize.xl'),
      fontFamily: theme('fontFamily.serif'),
      color: theme('colors.white'),
    },
    h5: {
      fontSize: theme('fontSize.lg'),
      fontFamily: theme('fontFamily.condensed'),
      color: theme('colors.indigo.100'),
    },
  });
});

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
        lg: '1.75rem',
        xl: '2rem',
        '2xl': '3.5rem',
        '3xl': '6.25rem',
        '4xl': '9.375rem',
      },
      tracking: {
        wide: '2.35px',
        wider: '2.7px',
        widest: '4.75px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [preflightHeaderStyles],
};
