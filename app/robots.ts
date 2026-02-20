import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Block RSC payload requests (?_rsc=...) - these are Next.js App Router
      // internal client-side navigation requests, not indexable content.
      // Crawlers hitting these URLs cause cache misses on every request because
      // the _rsc token is deployment-specific and never cached.
      disallow: ['/api/', '/*?_rsc='],
      crawlDelay: 10,
    },
    sitemap: 'https://solwearth.com/sitemap.xml',
  }
}