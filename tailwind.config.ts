import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#003366',
        'charcoal-grey-500': '#36454F',
        'charcoal-grey-400': '#68747B',
        gold: '#D4AF37',
        'off-white': '#F8F8F8',
        'earthy-green': '#556B2F',
      },
    },
  },
  plugins: [],
};
export default config;
