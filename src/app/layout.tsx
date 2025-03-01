import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
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
  metadataBase: new URL('https://www.youtube.com/bossRODTV'),
  title: 'Template Next',
  description: 'Template Next by bossROD',
  openGraph: {
    title: 'Template Next',
    description: 'Template Next by bossROD',
    type: 'website',
    url: 'https://www.youtube.com/bossRODTV',
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
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontMontserrat.variable} ${fontInter.variable} min-h-screen bg-background`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="container mx-auto flex-1 py-6">{children}</main>
            <footer className="border-t py-4">
              <div className="container mx-auto text-center text-sm text-muted-foreground">
                &copy; {currentYear} Template Next by bossROD. All rights reserved.
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
