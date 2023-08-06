import {
  Bodoni_Moda,
  Handlee,
  Indie_Flower,
  Inter,
  Marck_Script,
  Sacramento,
} from 'next/font/google';

export const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['serif'],
  adjustFontFallback: true,
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
