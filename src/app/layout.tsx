import type { Metadata } from 'next';
import './globals.css';
import { roboto, playfairDisplay } from '@/styles/fonts';

export const metadata: Metadata = {
  title:
    'Sell Your Lot: Effortless Land Selling Platform for Quick & Profitable Deals',
  description:
    "Maximize your land's value with 'Sell Your Lot'—the trusted online marketplace for landowners seeking swift, profitable sales. Discover a hassle-free way to connect with eager buyers nationwide. Start your selling journey today and turn your acres into assets with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${roboto.variable} ${playfairDisplay.variable}`}
    >
      <body className='min-h-dvh'>{children}</body>
    </html>
  );
}
