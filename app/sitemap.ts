import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '../utils/seo-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.company.url;
  
  // Páginas principales
  const mainPages = Object.entries(SEO_CONFIG.pages).map(([key, page]) => ({
    url: `${baseUrl}/${key === 'home' ? '' : key}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: page.priority,
  }));

  // Servicios individuales
  const servicePages = SEO_CONFIG.services.map((service) => ({
    url: `${baseUrl}/servicios/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Portfolio - formularios individuales
  const portfolioPages = [
    {
      url: `${baseUrl}/portfolio/formularios/minimalista`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/formularios/wizard`,
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/formularios/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/formularios/cards`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/formularios/sidenav`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Páginas adicionales del sitio
  const additionalPages = [
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/politicas-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-condiciones`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [
    ...mainPages,
    ...servicePages,
    ...portfolioPages,
    ...additionalPages,
  ];
}
