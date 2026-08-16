import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'RSVP | Crew',
  description: 'Respond to a Crew event invitation.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RsvpLayout({ children }: { children: ReactNode }) {
  return children;
}
