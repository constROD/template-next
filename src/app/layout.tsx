import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Providers from './providers';

const fontMontserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bossrod.com'),
  title: 'Template Next',
  description: 'Template Next by bossROD',
  openGraph: {
    title: 'Template Next',
    description: 'Template Next by bossROD',
    type: 'website',
    url: 'https://bossrod.com',
    siteName: 'Template Next',
  },
  manifest: '/site.webmanifest',
  icons: [
    {
      rel: 'shortcut',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${fontMontserrat.variable} ${fontInter.variable}`}>
        <div className="flex gap-5">
          <Link href="/" className="font-inter text-2xl">
            Home
          </Link>
          <Link href="/sample" className="font-montserrat text-2xl">
            Sample
          </Link>
          <Link href="/rsc-and-server-action" className="font-montserrat text-2xl">
            RSC and Server Action
          </Link>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
