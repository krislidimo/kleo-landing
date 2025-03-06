import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/use-cases',
        '/use-cases/*',
        '/industries',
        '/industries/*',
        '/features',
        '/features/*',
        '/blog',
        '/blog/*',
      ],
      disallow: [
        '/api/',
        '/admin/',
      ],
    },
    sitemap: 'https://mykleo.ai/sitemap.xml',
  };
}
