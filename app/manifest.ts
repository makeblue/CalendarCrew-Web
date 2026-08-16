import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Crew',
    short_name: 'Crew',
    description:
      'Plan nights out, keep crews aligned, and turn loose ideas into shared momentum.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1020',
    theme_color: '#0b1020',
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
