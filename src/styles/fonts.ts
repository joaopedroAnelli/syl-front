import {
  Roboto,
  Playfair_Display,
  Cutive_Mono,
  Ubuntu_Mono,
} from 'next/font/google';

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

export const cutiveMono = Cutive_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-cutive-mono',
});

export const ubuntuMono = Ubuntu_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-ubuntu-mono',
});
