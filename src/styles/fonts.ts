import { Roboto, Playfair_Display } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-roboto',
});
