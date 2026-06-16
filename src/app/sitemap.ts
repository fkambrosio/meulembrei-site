import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:              'https://meulembrei.com.br',
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         1,
    },
  ]
}
