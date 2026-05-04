import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/presupuesto/gracias',
        '/aviso-legal',
        '/politica-privacidad',
        '/politica-cookies',
        '/condiciones-servicio',
      ],
    },
    sitemap: 'https://serigrafia-textil.es/sitemap.xml',
  };
}
