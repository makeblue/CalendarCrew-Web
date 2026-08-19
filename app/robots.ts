import type { MetadataRoute } from 'next';

const siteUrl = 'https://crew.app';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/about', '/privacy', '/terms'],
        disallow: [
          '/rsvp',
          '/app/',
          '/auth/',
          '/login',
          '/signup',
          '/settings/',
          '/chat/',
          '/crews/',
          '/profile/',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
