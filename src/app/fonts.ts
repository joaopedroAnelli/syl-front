import { Roboto, Playfair_Display } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});
