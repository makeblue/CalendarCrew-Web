import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CalendarCrew',
    short_name: 'CalendarCrew',
    description: 'Event coordination for organizers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#101b2e',
    theme_color: '#101b2e',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
