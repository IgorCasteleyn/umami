import type { Metadata } from 'next';
import { Montserrat, Work_Sans } from 'next/font/google';
import { headers } from 'next/headers';
import { Suspense } from 'react';
import { getBaseUrl } from '@/lib/get-base-url';
import { Providers } from './Providers';
import '@umami/react-zen/styles.full.css';
import './global.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-montserrat',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function ({ children }) {
  if (process.env.DISABLE_UI) {
    return (
      <html>
        <body></body>
      </html>
    );
  }

  return (
    <html
      lang="en"
      className={`${workSans.className} ${workSans.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/brand/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff5722" />
        <meta name="msapplication-TileColor" content="#ff5722" />
        <meta name="theme-color" content="#f3f3f3" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0b0b0c" media="(prefers-color-scheme: dark)" />
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();

  return {
    metadataBase: getBaseUrl(headerStore),
    title: {
      template: '%s | Nomo IT',
      default: 'Nomo IT',
    },
  };
}
