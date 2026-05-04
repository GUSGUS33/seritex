import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía textil en España | Envíos a todas las ciudades',
  description: 'Descubre nuestros servicios de serigrafía textil con envío a las principales ciudades de España.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/ciudades',
  },
};

import React from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Building2, Calendar, ShoppingBag, Coffee, Trophy, HardHat, GraduationCap, Stethoscope, Music, Store, Users, Briefcase } from 'lucide-react';

const cities = [
  { id: 'madrid', name: 'Madrid', desc: 'Serigrafía rápida para empresas y eventos en la capital.', url: '/ciudades/serigrafia-madrid/' },
  { id: 'barcelona', name: 'Barcelona', desc: 'Personalización textil para marcas, diseño y hostelería.', url: '/ciudades/serigrafia-barcelona/' },
  { id: 'valencia', name: 'Valencia', desc: 'Uniformes y merchandising para industria y fallas.', url: '/ciudades/serigrafia-valencia/' },
  { id: 'sevilla', name: 'Sevilla', desc: 'Ropa personalizada para hostelería, ferias y cofradías.', url: '/ciudades/serigrafia-sevilla/' },
  { id: 'zaragoza', name: 'Zaragoza', desc: 'Especialistas en ropa laboral para logística e industria.', url: '/ciudades/serigrafia-zaragoza/' },
  { id: 'malaga', name: 'Málaga', desc: 'Uniformes para hostelería, turismo y empresas tech.', url: '/ciudades/serigrafia-malaga/' },
  { id: 'murcia', name: 'Murcia', desc: 'Ropa resistente para construcción, agroindustria y peñas.', url: '/ciudades/serigrafia-murcia/' },
  { id: 'bilbao', name: 'Bilbao', desc: 'Serigrafía industrial y deportiva para el Gran Bilbao.', url: '/ciudades/serigrafia-bilbao/' }
];

export default function CiudadesHub() {
  

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ciudades - Serigrafía Textil",
    "description": "Servicios de serigrafía textil con envío a las principales ciudades de España.",
    "url": "https://serigrafia-textil.es/ciudades/",
    "hasPart": cities.map(city => ({
      "@type": "WebPage",
      "name": `Serigrafía en ${city.name}`,
      "url": `https://serigrafia-textil.es${city.url}`
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
            Servicio de serigrafía textil <br/><span className="text-blue-l">a toda España</span>
          </h1>
          <p className="text-xl text-white/80 font-light">
            No importa dónde esté tu empresa o evento. Gestionamos tu pedido 100% online y enviamos la mercancía por mensajería urgente a cualquier punto de la península y Baleares.
          </p>
        </div>
      </section>

      {/* GRID DE CIUDADES */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map(city => (
              <Link 
                key={city.id} 
                href={city.url}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-mid group flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-blue-l/20 text-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue group-hover:text-white transition-colors">
                  <MapPin size={32} />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">{city.name}</h2>
                <p className="text-slate mb-8 flex-grow">
                  {city.desc}
                </p>
                <div className="flex items-center text-blue font-bold mt-auto">
                  Ver detalles <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA VISUAL O DATOS */}
      <section className="py-20 border-t border-gray-mid">
        <div className="container-custom">
          <div className="bg-navy rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{ backgroundImage: "url('https://placehold.co/1920x1080/0F2547/FFFFFF?text=Mapa+Espana')" }}
            ></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Logística optimizada para empresas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-extrabold text-blue-l mb-2">48h</div>
                  <div className="font-medium">Envíos urgentes</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-blue-l mb-2">100%</div>
                  <div className="font-medium">Cobertura peninsular</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-blue-l mb-2">0€</div>
                  <div className="font-medium">Portes en pedidos +300€</div>
                </div>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Trabajamos con las principales agencias de transporte para garantizar que tus uniformes o camisetas promocionales lleguen a tiempo para tu evento o apertura.
              </p>
              <Link 
                href="/presupuesto" 
                className="inline-flex bg-orange hover:bg-orange-d text-white px-10 py-4 rounded-xl font-bold text-lg transition-all items-center gap-2 shadow-lg"
              >
                Solicitar presupuesto con envío <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
