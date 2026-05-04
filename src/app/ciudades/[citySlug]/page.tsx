import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Truck, Clock, Package, ChevronRight, Building2, Calendar, ShoppingBag, HardHat, Layers, Droplet, Scissors, Zap, CheckCircle2, Star, Quote, Camera, Shirt, Info, Target, Users } from 'lucide-react';

// Base de datos de ciudades para contenido único (Programmatic SEO)
const cityData: Record<string, { name: string; region: string; industry: string; localLsi: string; lead: string; plazo: string }> = {
  'madrid': {
    name: 'Madrid',
    region: 'la Comunidad de Madrid',
    industry: 'ferias en IFEMA, eventos corporativos, startups y hostelería',
    localLsi: 'taller de impresión en Madrid centro, Chamartín, Vallecas, Alcobendas',
    lead: 'Madrid es el principal motor empresarial de España. Desde startups tecnológicas hasta grandes congresos, la necesidad de ropa personalizada es constante.',
    plazo: '24/48h'
  },
  'barcelona': {
    name: 'Barcelona',
    region: 'toda la provincia de Barcelona',
    industry: 'diseño de moda, eventos tecnológicos como el MWC, retail y hostelería',
    localLsi: 'estampación textil en BCN, L\'Hospitalet, Badalona, Poblenou',
    lead: 'Barcelona respira diseño y vanguardia. Proveemos camisetas personalizadas de alta calidad y acabados premium para marcas, eventos turísticos y empresas locales.',
    plazo: '24/48h'
  },
  'valencia': {
    name: 'Valencia',
    region: 'la Comunidad Valenciana',
    industry: 'Fallas, industria logística, turismo y agencias de marketing',
    localLsi: 'imprenta textil Valencia, ropa fallera, polígonos industriales Paterna',
    lead: 'Desde uniformidad industrial hasta ropa festiva para peñas y fallas. Valencia exige versatilidad y rapidez en la serigrafía.',
    plazo: '48h'
  },
  'sevilla': {
    name: 'Sevilla',
    region: 'Andalucía',
    industry: 'hostelería en el centro, ferias, cofradías y sector agrícola',
    localLsi: 'ropa laboral Sevilla, camisetas Feria de Abril, bordado cofrade',
    lead: 'El clima y la actividad social de Sevilla demandan prendas ligeras, transpirables y de alta durabilidad para empresas y eventos.',
    plazo: '48/72h'
  },
  'zaragoza': {
    name: 'Zaragoza',
    region: 'Zaragoza y Aragón',
    industry: 'logística extrema (Plaza), industria pesada y comercio local',
    localLsi: 'ropa de trabajo Zaragoza, alta visibilidad, uniformes polígono',
    lead: 'Como nudo logístico clave, las empresas en Zaragoza necesitan ropa laboral técnica, resistente y personalizada con su logotipo corporativo.',
    plazo: '48h'
  },
  'malaga': {
    name: 'Málaga',
    region: 'Málaga y la Costa del Sol',
    industry: 'hostelería de lujo, turismo, chiringuitos y empresas de tecnología',
    localLsi: 'uniformes hostelería Málaga, polos bordados Costa del Sol, camisetas eventos teatrales',
    lead: 'La Costa del Sol requiere una imagen impecable. Creamos uniformes corporativos, polos y delantales resistentes para el exigente sector servicios malagueño.',
    plazo: '48h'
  },
  'murcia': {
    name: 'Murcia',
    region: 'la Región de Murcia',
    industry: 'agricultura, industria alimentaria, transporte y peñas festivas',
    localLsi: 'equipación agrícola, ropa de trabajo Murcia, peñas huertanas',
    lead: 'Nuestra serigrafía y bordado resisten las condiciones de trabajo más duras en la industria agrícola y de transportes de Murcia.',
    plazo: '48/72h'
  },
  'bilbao': {
    name: 'Bilbao',
    region: 'Bizkaia y el País Vasco',
    industry: 'industria metalúrgica, servicios corporativos, deporte y hostelería',
    localLsi: 'serigrafía Euskadi, ropa técnica Bilbao, equipamiento industrial',
    lead: 'Bilbao combina una fuerte tradición industrial con un moderno sector servicios. Ofrecemos ropa de alta tenacidad y personalización detallada.',
    plazo: '48h'
  }
};

// Generar rutas estáticas
export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    citySlug: `serigrafia-${city}`,
  }));
}

export async function generateMetadata({ params }: { params: { citySlug: string } }): Promise<Metadata> {
  const cityRaw = params.citySlug.replace('serigrafia-', '').toLowerCase();
  const cityInfo = cityData[cityRaw];
  
  if (!cityInfo) {
    const capitalizedName = cityRaw.charAt(0).toUpperCase() + cityRaw.slice(1);
    return {
      title: `Serigrafía Textil en ${capitalizedName} | Especialistas en Ropa Personalizada`,
      description: `Taller de serigrafía textil y bordado enviando a ${capitalizedName}. Camisetas personalizadas, ropa laboral y merchandising. Pide presupuesto sin compromiso.`,
    };
  }

  return {
    title: `Serigrafía Textil en ${cityInfo.name} | Camisetas Personalizadas y Ropa Laboral`,
    description: `Expertos en serigrafía, bordado e impresión DTF enviando a ${cityInfo.region}. Uniformes, eventos y marcas. Entregas en ${cityInfo.plazo}. Pide presupuesto en ${cityInfo.name}.`,
    keywords: `serigrafia ${cityInfo.name}, camisetas personalizadas ${cityInfo.name}, ropa laboral ${cityInfo.name}, bordado ${cityInfo.name}, imprenta textil, uniformes de trabajo, merchandising, DTF`,
    alternates: {
      canonical: `https://serigrafia-textil.es/ciudades/serigrafia-${cityRaw}`,
    },
    openGraph: {
      title: `Expertos en Serigrafía Textil en ${cityInfo.name}`,
      description: `Descubre la mejor calidad en impresión de ropa personalizada para empresas y eventos en ${cityInfo.region}.`,
      type: 'website',
      locale: 'es_ES',
    }
  };
}

export default function CityPage({ params }: { params: { citySlug: string } }) {
  const cityRaw = params.citySlug.replace('serigrafia-', '').toLowerCase();
  const city = cityData[cityRaw] || {
    name: cityRaw.charAt(0).toUpperCase() + cityRaw.slice(1),
    region: `tu zona`,
    industry: 'empresas, eventos, hostelería y ropa de trabajo',
    localLsi: `taller de serigrafía, bordado industrial, impresión camisetas`,
    lead: `Garantizamos la máxima calidad en personalización textil para llevar la imagen de tu empresa al siguiente nivel.`,
    plazo: '48-72h'
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Servicio de Serigrafía Textil en ${city.name}`,
    "provider": {
      "@type": "Organization",
      "name": "Serigrafía Textil",
      "url": "https://serigrafia-textil.es"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "description": `Serigrafía, Bordado e Impresión DTF para camisetas, sudaderas y uniformes en ${city.region}.`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "0",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceType": "https://schema.org/MinimumAdvertisedPrice",
        "priceCurrency": "EUR",
        "price": "5.00"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Personalización de Ropa"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://serigrafia-textil.es/" },
      { "@type": "ListItem", "position": 2, "name": "Ciudades", "item": "https://serigrafia-textil.es/ciudades/" },
      { "@type": "ListItem", "position": 3, "name": `Serigrafía en ${city.name}`, "item": `https://serigrafia-textil.es/ciudades/serigrafia-${cityRaw}/` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `¿Hacéis envíos a toda la zona de ${city.name}?`,
        "acceptedAnswer": { "@type": "Answer", "text": `Sí, entregamos en la capital y en todas las localidades de ${city.region} mediante agencias de mensajería urgente.` }
      },
      {
        "@type": "Question",
        "name": `¿Cuánto tarda en llegar un pedido de camisetas personalizadas a ${city.name}?`,
        "acceptedAnswer": { "@type": "Answer", "text": `El plazo de entrega habitual en planta, una vez finalizada la producción, es de ${city.plazo} laborables hasta tus instalaciones en ${city.name}.` }
      },
      {
        "@type": "Question",
        "name": `¿Qué técnicas de impresión textil recomendáis para empresas?`,
        "acceptedAnswer": { "@type": "Answer", "text": "Para grandes cantidades recomendamos la serigrafía tradicional. Para diseños a todo color o logotipos complejos, el DTF. Si buscas la máxima elegancia y durabilidad, el bordado computarizado es la opción ideal." }
      }
    ]
  };

  // Mock data para darle vida a la página
  const catalogProducts = [
    { title: "Camisetas Personalizadas", img: `https://picsum.photos/seed/${cityRaw}camisetas/600/600`, url: "/prendas/camisetas", desc: "El clásico imbatible. Algodón 100% orgánico o técnico." },
    { title: "Ropa Laboral y Uniformes", img: `https://picsum.photos/seed/${cityRaw}laboral/600/600`, url: "/sectores/ropa-laboral", desc: "Alta visibilidad, resistencia y comodidad para tu equipo." },
    { title: "Sudaderas con Capucha", img: `https://picsum.photos/seed/${cityRaw}sudaderas/600/600`, url: "/prendas/sudaderas", desc: "Gramajes altos y acabados premium, ideales para marcas y invierno." },
    { title: "Bolsas y Tote Bags", img: `https://picsum.photos/seed/${cityRaw}bolsas/600/600`, url: "/prendas/bolsas", desc: "Merchandising ecológico para ferias y eventos." }
  ];

  const galleryImages = [
    `https://picsum.photos/seed/${cityRaw}gal1/800/800`,
    `https://picsum.photos/seed/${cityRaw}gal2/800/800`,
    `https://picsum.photos/seed/${cityRaw}gal3/800/800`,
    `https://picsum.photos/seed/${cityRaw}gal4/800/800`,
  ];

  const reviews = [
    { name: "Marta R.", role: "Directora de Eventos", text: `La calidad del DTF fue espectacular. Pedimos 200 camisetas para un evento en ${city.name} y llegaron exactamente en los plazos acordados. Sin duda nuestro nuevo proveedor de confianza.`, rate: 5 },
    { name: "Javier G.", role: "Gerente de Hostelería", text: `Bordamos los polos de todos los camareros de nuestros 3 locales. El asesoramiento fue brillante y el envío a ${city.region} fue súper rápido. Resisten genial los lavados.`, rate: 5 },
    { name: "Lucía M.", role: "Fundadora de Marca de Ropa", text: `Llevaba tiempo buscando un taller que imprimiese etiquetas en cuello y cuidase el embolsado unitario. Resultado totalmente profesional y listo para venta al menor.`, rate: 5 }
  ];

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* B01 HERO: Optimizado SEO + Visual */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src={`https://picsum.photos/seed/${cityRaw}hero/1920/1080`}
            alt={`Taller de Serigrafía Textil enviando a ${city.name}`} 
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} /> Taller prestando servicio en {city.name}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-display leading-tight mb-6">
              Serigrafía Textil para empresas en <span className="text-blue-l">{city.name}</span>
            </h1>
            <h2 className="text-xl text-white/90 mb-8 font-light max-w-2xl leading-relaxed">
              Profesionalidad, maquinaria industrial y acabados impecables en ropa laboral, merchandising y moda. <strong>Cobertura en {city.region}</strong> con entregas rápidas.
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href={`/presupuesto/?ciudad=${cityRaw}`} 
                className="bg-orange hover:bg-orange-d text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 shadow-lg shadow-orange/20"
              >
                Pedir presupuesto en 1 min <ChevronRight size={20} />
              </a>
              <div className="flex -space-x-2">
                <Image src="https://picsum.photos/seed/user1/100/100" width={40} height={40} className="rounded-full border-2 border-navy relative z-30" alt="Cliente" />
                <Image src="https://picsum.photos/seed/user2/100/100" width={40} height={40} className="rounded-full border-2 border-navy relative z-20" alt="Cliente" />
                <Image src="https://picsum.photos/seed/user3/100/100" width={40} height={40} className="rounded-full border-2 border-navy relative z-10" alt="Cliente" />
                <div className="w-10 h-10 rounded-full border-2 border-navy bg-white text-navy flex items-center justify-center font-bold text-xs relative z-0">+5k</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVO: CATÁLOGO DE PRODUCTOS (Gana peso visual directamente bajo el hero) */}
      <section className="py-20 bg-gray-light/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">¿Qué podemos estampar para tu proyecto en {city.name}?</h2>
            <p className="text-slate text-lg">Contamos con más de 1,000 referencias textiles en catálogo. Estas son las más demandadas por empresas y eventos.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogProducts.map((prod, i) => (
              <a key={i} href={prod.url} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-mid flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image src={prod.img} alt={prod.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-navy text-xl mb-2">{prod.title}</h3>
                  <p className="text-slate text-sm flex-1">{prod.desc}</p>
                  <div className="mt-4 text-blue font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Ver catálogo <ChevronRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN SEO + INTERLINKING VISUAL DE SECTORES */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg prose-blue max-w-none text-slate">
              <h2 className="text-3xl font-bold text-navy mb-6">Tu partner de impresión de confianza en {city.name}</h2>
              <p className="text-xl font-medium text-ink leading-relaxed mb-6">
                {city.lead}
              </p>
              <p>
                A diferencia de una imprenta pequeña tradicional o copistería, en nuestro taller operamos con maquinaria industrial pesada. Manejamos altos volúmenes de <strong>camisetas impresas, sudaderas y uniformes laborales</strong> con estándares de calidad europeos. Todo nuestro catálogo cumple normativas OEKO-TEX, asegurando el mejor resultado para la producción de merchandising o vestuario de trabajo.
              </p>
              
              <div className="flex flex-col gap-4 mt-8 bg-gray-light p-6 rounded-2xl border border-gray-mid">
                <h4 className="font-bold text-navy text-lg m-0 flex items-center gap-2"><Truck className="text-blue" size={20}/> Logística Exprés a {city.name}</h4>
                <p className="m-0 text-sm">
                  Entendemos la presión de los eventos feroces. Nuestros acuerdos de expedición diaria nos permiten servir directamente al centro de {city.name} o cualquier polígono de {city.region} en tiempos de tan solo <strong>{city.plazo}</strong>.
                </p>
              </div>
            </div>
            
            {/* CARDS DE SECTORES VINCULADOS A LA PROVINCIA */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Sectores Especializados:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="/sectores/ropa-laboral" className="p-6 rounded-2xl bg-white border border-gray-mid shadow-sm hover:shadow-md hover:border-blue transition-all group">
                  <HardHat className="text-blue mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-bold text-navy text-lg mb-2">Industria y Construcción</h4>
                  <p className="text-sm text-slate">Ropa de alta visibilidad, resistente a lavados abrasivos y certificada.</p>
                </a>
                <a href="/sectores/serigrafia-hosteleria" className="p-6 rounded-2xl bg-white border border-gray-mid shadow-sm hover:shadow-md hover:border-blue transition-all group">
                  <Droplet className="text-blue mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-bold text-navy text-lg mb-2">Hostelería y Turismo</h4>
                  <p className="text-sm text-slate">Delantales, camisas y polos bordados que aguantan el ritmo de las cocinas.</p>
                </a>
                <a href="/sectores/serigrafia-eventos" className="p-6 rounded-2xl bg-white border border-gray-mid shadow-sm hover:shadow-md hover:border-blue transition-all group">
                  <Calendar className="text-blue mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-bold text-navy text-lg mb-2">Eventos y Congresos</h4>
                  <p className="text-sm text-slate">{city.industry.charAt(0).toUpperCase() + city.industry.slice(1)}. Uniformes para staff y azafatas.</p>
                </a>
                <a href="/sectores/serigrafia-empresas" className="p-6 rounded-2xl bg-white border border-gray-mid shadow-sm hover:shadow-md hover:border-blue transition-all group">
                  <Building2 className="text-blue mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-bold text-navy text-lg mb-2">Startups y Oficinas</h4>
                  <p className="text-sm text-slate">Merchandising corporativo premium para on-boarding, ferias y clientes.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVO: PORTAFOLIO / TRABAJOS RECIENTES */}
      <section className="py-20 bg-navy text-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Mestría en cada hilo y gota de tinta</h2>
              <p className="text-white/80 text-lg">Descubre por qué cientos de marcas, peñas y empresas confían su producción a nuestros talleres.</p>
            </div>
            <a href="/galeria" className="inline-flex shrink-0 items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-bold transition-colors">
              <Camera size={18} /> Ver galería completa
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className={`rounded-xl overflow-hidden group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <Image 
                  src={src} 
                  alt={`Varios trabajos de impresión en ${city.name}`} 
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-700`} 
                  sizes={i === 0 ? '(max-width: 768px) 50vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVO: TESTIMONIOS */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Lo que opinan las empresas de {city.name}</h2>
            <div className="flex justify-center items-center gap-2 text-yellow-500 mb-2">
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
            </div>
            <p className="font-bold text-navy">Valoración de 4.9/5 basada en clientes reales.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-mid relative">
                <Quote className="absolute top-6 right-6 text-gray-mid/50" size={40} />
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(rev.rate)].map((_, j) => <Star key={j} fill="currentColor" size={16} />)}
                </div>
                <p className="text-slate italic mb-6 leading-relaxed relative z-10">"{rev.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-l text-blue font-bold rounded-full flex items-center justify-center shrink-0">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-navy">{rev.name}</div>
                    <div className="text-xs text-slate">{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B07 FAQ COMPLETO */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Preguntas Frecuentes sobre Personalización en {city.name}</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl p-6 border border-gray-mid open:shadow-md transition-all">
              <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-navy text-lg">
                ¿Hacéis envíos a toda la zona de {city.name}?
                <span className="text-blue group-open:rotate-180 transition-transform">
                  <ChevronRight />
                </span>
              </summary>
              <p className="mt-4 text-slate leading-relaxed">
                Totalmente. Enviamos a la capital de {city.name} y también cubrimos la inmensa mayoría de pueblos y áreas industriales de {city.region} mediante agencias exprés.
              </p>
            </details>
            <details className="group bg-white rounded-xl p-6 border border-gray-mid open:shadow-md transition-all">
              <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-navy text-lg">
                ¿Cuánto cuesta y cuánto tarda la entrega?
                <span className="text-blue group-open:rotate-180 transition-transform">
                  <ChevronRight />
                </span>
              </summary>
              <p className="mt-4 text-slate leading-relaxed">
                El envío a {city.name} suele tardar {city.plazo} laborables desde que despachamos el material. Además, <strong>los portes son 100% gratuitos si tu pedido supera los 300€</strong>. En caso contrario, se aplica una tarifa plana nacional muy reducida.
              </p>
            </details>
            <details className="group bg-white rounded-xl p-6 border border-gray-mid open:shadow-md transition-all">
              <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-navy text-lg">
                ¿Puedo recibir las camisetas en un hotel o recinto ferial?
                <span className="text-blue group-open:rotate-180 transition-transform">
                  <ChevronRight />
                </span>
              </summary>
              <p className="mt-4 text-slate leading-relaxed">
                Sí. Trabajamos muy frecuentemente con eventos corporativos enviando directamente a hoteles o recintos de congresos como parte de la planificación del evento. Únicamente necesitamos el nombre del contacto responsable, el stand o departamento para garantizar que la agencia de paquetería lo entregue correctamente y sin demoras.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* B08 SCALABILITY LINKS */}
      <section className="py-12 bg-gray-light border-t border-gray-mid">
        <div className="container-custom text-center">
          <h3 className="text-sm font-bold text-slate uppercase tracking-wider mb-6">Red Logística: Otras delegaciones y zonas de alcance</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {Object.keys(cityData).map(c => c !== cityRaw && (
              <a key={c} href={`/ciudades/serigrafia-${c}`} className="text-slate hover:text-blue hover:underline transition-colors font-medium">
                Serigrafía en {c.charAt(0).toUpperCase() + c.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
