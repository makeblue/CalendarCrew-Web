type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

const siteUrl = 'https://crew.app';

export function buildPageMetadata({
  title,
  description,
  path = '',
}: PageMetadataInput) {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Crew',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
