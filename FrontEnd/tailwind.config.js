/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require('tailwindcss/colors')

//console.log(defaultTheme);

console.log(colors)

module.exports = {
  content: ["./static/*.html"],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      teal: colors.teal,
      amber: colors.amber,
      neutral: colors.neutral
    },
    fontFamily: {
      sans: ['"Lexend Deca"', ...defaultTheme.fontFamily.sans],
      serif: ['Sanchez', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      fontSize: {
        xs: [".5625rem", defaultTheme.fontSize.xs[1]],
        sm: [".75rem", defaultTheme.fontSize.sm[1]],
        base: ["1rem", defaultTheme.fontSize.base[1]],
        lg: ["1.375rem", defaultTheme.fontSize.lg[1]],
        xl: ["1.75rem", defaultTheme.fontSize.xl[1]],
        "2xl": ["2.375rem", defaultTheme.fontSize["2xl"][1]],
        "3xl": ["3.1875rem", defaultTheme.fontSize["3xl"][1]],
        "4xl": ["4.1875rem", defaultTheme.fontSize["4xl"][1]],
        "5xl": ["5.625rem", defaultTheme.fontSize["5xl"][1]],
      },
    },
  },
  plugins: [],
};
