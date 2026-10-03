import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const serif = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Inter({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.forteaddis.com'),
  title: { default: 'FORTE — The Art of Organized Supply', template: '%s — FORTE' },
  description:
    'FORTE is an Ethiopian B2B general supply enterprise delivering food, cold-chain, construction, furnishing, textile, promotional and interior solutions to mega projects, embassies, hotels and multinationals.',
  openGraph: { title: 'FORTE — The Art of Organized Supply', siteName: 'FORTE', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
