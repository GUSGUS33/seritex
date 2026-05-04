import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Técnicas de Personalización Textil | Serigrafía, DTF, Bordado',
  description: 'Descubre las mejores técnicas para personalizar tu ropa: serigrafía tradicional, impresión digital DTF, bordado premium y vinilo de corte.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/tecnicas',
  },
};

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Zap, Printer, Scissors, Award } from 'lucide-react';

const techniques = [
  {
    id: 'serigrafia',
    title: 'Serigrafía Textil',
    desc: 'La técnica reina para grandes tiradas. Máxima durabilidad y colores vibrantes con tintas de alta calidad.',
    icon: <Zap size={32} />,
    url: '/serigrafia-textil/',
    badge: '★ Técnica estrella'
  },
  {
    id: 'dtf',
    title: 'Impresión DTF',
    desc: 'Calidad fotográfica sin límites de color. Ideal para diseños complejos y pedidos desde una sola unidad.',
    icon: <Printer size={32} />,
    url: '/impresion-dtf/',
    badge: 'Sin mínimo'
  },
  {
    id: 'bordado',
    title: 'Bordado Personalizado',
    desc: 'El acabado más elegante y resistente. Perfecto para ropa corporativa, polos y gorras de alta gama.',
    icon: <Award size={32} />,
    url: '/bordado-personalizado/',
    badge: 'Acabado Premium'
  },
  {
    id: 'vinilo',
    title: 'Vinilo Textil',
    desc: 'Ideal para numeraciones y nombres individuales. Colores planos y cortes precisos para equipaciones.',
    icon: <Scissors size={32} />,
    url: '/vinilo-textil/',
    badge: 'Nombres y Números'
  }
];

export default function TecnicasHub() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Técnicas de Personalización Textil",
    "description": "Explora nuestras técnicas de estampación y personalización de ropa profesional.",
    "url": "https://serigrafia-textil.es/tecnicas/",
    "hasPart": techniques.map(tech => ({
      "@type": "WebPage",
      "name": tech.title,
      "url": `https://serigrafia-textil.es${tech.url}`
    }))
  };

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-6">
            Técnicas de <span className="text-blue-l">personalización textil</span>
          </h1>
          <p className="text-xl text-white/80 font-light">
            No todas las prendas ni todos los diseños se imprimen igual. Elegir la técnica adecuada es la clave para un resultado profesional y duradero.
          </p>
        </div>
      </section>

      {/* GRID DE TÉCNICAS */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {techniques.map(tech => (
              <Link 
                key={tech.id} 
                href={tech.url}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-mid group flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-16 h-16 bg-blue-l/20 text-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue group-hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="badge badge-blue">{tech.badge}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">{tech.title}</h2>
                  <p className="text-slate mb-6">
                    {tech.desc}
                  </p>
                  <div className="flex items-center text-blue font-bold">
                    Saber más <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVA RÁPIDA */}
      <section className="py-20 border-t border-gray-mid">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">¿Cuál elegir para tu proyecto?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-xl mb-4">Por cantidad</h3>
              <p className="text-slate text-sm">
                <strong>1-10 unidades:</strong> DTF o Vinilo.<br/>
                <strong>+10 unidades:</strong> Serigrafía o Bordado.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl mb-4">Por diseño</h3>
              <p className="text-slate text-sm">
                <strong>Fotos/Degradados:</strong> DTF.<br/>
                <strong>Logos 1-6 colores:</strong> Serigrafía.<br/>
                <strong>Texto/Números:</strong> Vinilo.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl mb-4">Por acabado</h3>
              <p className="text-slate text-sm">
                <strong>Premium/Elegante:</strong> Bordado.<br/>
                <strong>Industrial/Marca:</strong> Serigrafía.<br/>
                <strong>Publicitario:</strong> DTF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Dudas con la técnica?</h2>
          <p className="text-xl text-white/80 mb-8">
            Envíanos tu diseño y te diremos cuál es la mejor opción para que tu ropa quede perfecta al mejor precio.
          </p>
          <Link 
            href="/presupuesto" 
            className="btn btn-primary px-10 py-4 text-lg"
          >
            Asesoramiento gratuito →
          </Link>
        </div>
      </section>
    </div>
  );
}
