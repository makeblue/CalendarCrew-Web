import type { ReactNode } from 'react';
import './globals.css';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { buildPageMetadata } from '../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'CalendarCrew',
  description: 'Event coordination for organizers.',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="crew-root">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
