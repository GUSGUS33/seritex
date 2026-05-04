import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía textil por sectores profesionales',
  description: 'Soluciones de ropa personalizada adaptadas a las necesidades de cada sector profesional.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores',
  },
};

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Building2, Calendar, ShoppingBag, Coffee, Trophy, HardHat, GraduationCap, Stethoscope, Music, Store, Users, Briefcase } from 'lucide-react';

const sectors = [
  {
    id: 'empresas',
    title: 'Empresas y Oficinas',
    desc: 'Uniformes corporativos, polos bordados y merchandising para empleados.',
    icon: <Building2 size={32} />,
    url: '/sectores/serigrafia-empresas/'
  },
  {
    id: 'eventos',
    title: 'Eventos y Congresos',
    desc: 'Camisetas promocionales, lanyards y tote bags para ferias y festivales.',
    icon: <Calendar size={32} />,
    url: '/sectores/serigrafia-eventos/'
  },
  {
    id: 'marcas',
    title: 'Marcas de Ropa',
    desc: 'Producción textil premium, etiquetas personalizadas y acabados retail.',
    icon: <ShoppingBag size={32} />,
    url: '/sectores/serigrafia-marcas-ropa/'
  },
  {
    id: 'hosteleria',
    title: 'Hostelería y Restauración',
    desc: 'Delantales, camisas y uniformes resistentes para bares y restaurantes.',
    icon: <Coffee size={32} />,
    url: '/sectores/serigrafia-hosteleria/'
  },
  {
    id: 'deportes',
    title: 'Clubs Deportivos',
    desc: 'Equipaciones técnicas, dorsales y merchandising para equipos y peñas.',
    icon: <Trophy size={32} />,
    url: '/sectores/serigrafia-deportes/'
  },
  {
    id: 'construccion',
    title: 'Construcción e Industria',
    desc: 'Ropa laboral de alta visibilidad, chalecos y uniformes resistentes.',
    icon: <HardHat size={32} />,
    url: '/sectores/serigrafia-construccion/'
  },
  {
    id: 'colegios',
    title: 'Colegios y Universidades',
    desc: 'Uniformes escolares, sudaderas de graduación y ropa deportiva.',
    icon: <GraduationCap size={32} />,
    url: '/sectores/serigrafia-colegios/'
  },
  {
    id: 'sanidad',
    title: 'Clínicas y Sanidad',
    desc: 'Pijamas sanitarios, batas médicas y uniformes para farmacias.',
    icon: <Stethoscope size={32} />,
    url: '/sectores/serigrafia-sanidad/'
  },
  {
    id: 'musica',
    title: 'Música y Cultura',
    desc: 'Merchandising para bandas, artistas, giras y producciones culturales.',
    icon: <Music size={32} />,
    url: '/sectores/serigrafia-musica-cultura/'
  },
  {
    id: 'retail',
    title: 'Comercio y Retail',
    desc: 'Uniformes para dependientes, promociones en punto de venta y bolsas.',
    icon: <Store size={32} />,
    url: '/sectores/serigrafia-retail/'
  },
  {
    id: 'asociaciones',
    title: 'Asociaciones y ONGs',
    desc: 'Camisetas para causas solidarias, voluntariado y eventos benéficos.',
    icon: <Users size={32} />,
    url: '/sectores/serigrafia-asociaciones/'
  },
  {
    id: 'despachos',
    title: 'Despachos y Agencias',
    desc: 'Ropa corporativa elegante, regalos de empresa y welcome packs.',
    icon: <Briefcase size={32} />,
    url: '/sectores/serigrafia-despachos/'
  }
];

export default function SectoresHub() {
  

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Sectores - Serigrafía Textil",
    "description": "Servicios de serigrafía textil y ropa personalizada clasificados por sector profesional.",
    "url": "https://serigrafia-textil.es/sectores/",
    "hasPart": sectors.map(sector => ({
      "@type": "WebPage",
      "name": sector.title,
      "url": `https://serigrafia-textil.es${sector.url}`
    }))
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage"
    }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />

      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-6">
            Serigrafía textil para <br/><span className="text-blue-l">cada sector profesional</span>
          </h1>
          <p className="text-xl text-white/80 font-light">
            Entendemos que un restaurante no necesita lo mismo que una constructora o una marca de moda. Adaptamos nuestras técnicas y prendas a las exigencias de tu sector.
          </p>
        </div>
      </section>

      {/* GRID DE SECTORES */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map(sector => (
              <Link 
                key={sector.id} 
                href={sector.url}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-mid group flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-blue-l/20 text-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue group-hover:text-white transition-colors">
                  {sector.icon}
                </div>
                <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">{sector.title}</h2>
                <p className="text-slate mb-8 flex-grow">
                  {sector.desc}
                </p>
                <div className="flex items-center text-blue font-bold mt-auto">
                  Ver soluciones <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 border-t border-gray-mid">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">¿No encuentras tu sector?</h2>
          <p className="text-xl text-slate mb-8">
            No te preocupes. Trabajamos con todo tipo de empresas y proyectos. Cuéntanos qué necesitas y te asesoraremos sobre las mejores prendas y técnicas de estampación.
          </p>
          <Link 
            href="/presupuesto" 
            className="inline-flex bg-orange hover:bg-orange-d text-white px-10 py-4 rounded-xl font-bold text-lg transition-all items-center gap-2 shadow-lg"
          >
            Solicitar presupuesto a medida <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
