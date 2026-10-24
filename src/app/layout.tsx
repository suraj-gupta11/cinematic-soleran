import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Soleran — A Little Extraordinary',
  description:
    'Discover Soleran, a cinematic café experience for thoughtful coffee, signature milkshakes, and indulgent desserts.',
  keywords: ['Soleran', 'Artisan Cafe', 'Coffee', 'Luxury Cafe', 'Mango Milkshake', 'Bengaluru'],
  authors: [{ name: 'Soleran Artisan Café' }],
  metadataBase: new URL('https://soleran.example'),
  openGraph: {
    title: 'Soleran — A Little Extraordinary',
    description:
      'Discover Soleran, a cinematic café experience for thoughtful coffee, signature milkshakes, and indulgent desserts.',
    url: 'https://soleran.example',
    siteName: 'Soleran',
    images: [
      {
        url: '/images/hero-cafe.jpg',
        width: 1200,
        height: 675,
        alt: 'Soleran Artisan Café Interior',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soleran — A Little Extraordinary',
    description:
      'Discover Soleran, a cinematic café experience for thoughtful coffee, signature milkshakes, and indulgent desserts.',
    images: ['/images/hero-cafe.jpg'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#080807',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} dark scroll-smooth`}>
      <body className="bg-[#080807] text-[#F5F0E7] antialiased selection:bg-[#C8A96B] selection:text-[#080807]">
        {/* Subtle decorative grain & vignette */}
        <div className="film-grain" aria-hidden="true" />
        <div className="vignette-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
