import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0D1530',
        'deep-blue-400': '#172556',
        'deep-blue-600': '#08102a',
        'charcoal-grey-500': '#36454F',
        'charcoal-grey-400': '#68747B',
        gold: '#D4AF37',
        'off-white': '#F8F8F8',
        'earthy-green': '#556B2F',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['serif'],
    },
  },
  plugins: [],
};
export default config;
