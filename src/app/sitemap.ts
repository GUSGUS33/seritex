import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://serigrafia-textil.es';

  const routes = [
    '',
    '/presupuesto',
    '/contacto',
    '/serigrafia-textil',
    '/impresion-dtf',
    '/bordado-personalizado',
    '/vinilo-textil',
    '/prendas',
    '/galeria',
    '/sobre-nosotros',
    '/como-funciona',
    '/ciudades',
    '/sectores',
    '/blog',
    '/blog/serigrafia-vs-dtf',
    '/blog/precio-serigrafia-camisetas',
    '/blog/tejidos-serigrafia-gramaje',
    '/sectores/serigrafia-empresas',
    '/sectores/serigrafia-eventos',
    '/sectores/serigrafia-marcas-ropa',
    '/sectores/serigrafia-hosteleria',
    '/sectores/serigrafia-deportes',
    '/sectores/serigrafia-construccion',
    '/sectores/serigrafia-colegios',
    '/sectores/serigrafia-sanidad',
    '/sectores/serigrafia-musica-cultura',
    '/sectores/serigrafia-retail',
    '/sectores/serigrafia-asociaciones',
    '/sectores/serigrafia-despachos',
    '/ciudades/serigrafia-madrid',
    '/ciudades/serigrafia-barcelona',
    '/ciudades/serigrafia-valencia',
    '/ciudades/serigrafia-sevilla',
    '/ciudades/serigrafia-zaragoza',
    '/ciudades/serigrafia-malaga',
    '/ciudades/serigrafia-murcia',
    '/ciudades/serigrafia-bilbao',
  ];

  const tecnicas = ['/serigrafia-textil', '/impresion-dtf', '/bordado-personalizado', '/vinilo-textil'];
  const hubs = ['/prendas', '/sectores', '/ciudades', '/blog', '/tecnicas', '/presupuesto'];
  const info = ['/galeria', '/sobre-nosotros', '/como-funciona', '/contacto'];
  const sectoresList = routes.filter(r => r.startsWith('/sectores/'));
  const ciudadesList = routes.filter(r => r.startsWith('/ciudades/'));
  const blogList = routes.filter(r => r.startsWith('/blog/') && r !== '/blog');

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : tecnicas.includes(route) ? 'weekly' : 'monthly') as 'daily' | 'weekly' | 'monthly',
    priority: route === '' ? 1.0
      : tecnicas.includes(route) ? 0.9
      : hubs.includes(route) ? 0.8
      : sectoresList.includes(route) ? 0.8
      : ciudadesList.includes(route) ? 0.75
      : blogList.includes(route) ? 0.7
      : info.includes(route) ? 0.6
      : 0.5,
  }));
}
