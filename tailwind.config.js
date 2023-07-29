/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        jost: ['var(--font-jost)', ...fontFamily.sans],
      },
    },
    colors: {
      primary: {
        first: '#ad1fea',
        second: '#4661e6',
        third: '#4661e6',
        fourth: '#ffffff',
      },
      secondary: {
        first: '#f2f4ff',
        second: '#f7f8fd',
        third: '#3a4374',
        fourth: '#647196',
      },
      tertiary: {
        first: '#f49f85',
        second: '#62bccfa',
      },
    },
  },
  plugins: [],
};
