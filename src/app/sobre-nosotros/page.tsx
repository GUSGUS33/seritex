import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Serigrafía Textil',
  description: 'Información sobre sobre nosotros | serigrafía textil en Serigrafía Textil.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sobre-nosotros',
  },
};

import React from 'react';
import Image from 'next/image';
import { Users, Award, Clock, MapPin, CheckCircle2, Building2, ChevronRight, Truck } from 'lucide-react';

export default function SobreNosotros() {
  

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Serigrafía Textil",
    "url": "https://serigrafia-textil.es",
    "logo": "https://serigrafia-textil.es/logo.png",
    "foundingDate": "2010",
    "description": "Taller especializado en serigrafía textil, bordado y DTF para empresas y colectivos.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34 600 000 000",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage"
    }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-6">
            Especialistas en serigrafía textil online <br/><span className="text-blue-l">desde 2010</span>
          </h1>
          <p className="text-xl text-white/80 font-light">
            Combinamos la tradición del taller artesanal con la eficiencia del comercio electrónico para ofrecerte la mejor experiencia en ropa personalizada.
          </p>
        </div>
      </section>

      {/* HISTORIA Y VALORES */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-navy mb-6">Nuestra historia</h2>
              <div className="space-y-4 text-lg text-slate leading-relaxed">
                <p>
                  Nacimos con un objetivo claro: digitalizar y simplificar el proceso de encargar ropa personalizada para empresas, clubs y asociaciones.
                </p>
                <p>
                  Lo que empezó como un pequeño taller local se ha transformado en una plataforma online capaz de gestionar pedidos para toda España, manteniendo siempre el control de calidad que nos caracteriza.
                </p>
                <p>
                  No somos intermediarios. Contamos con instalaciones propias equipadas con maquinaria de última generación para serigrafía, DTF y bordado, lo que nos permite controlar los plazos y garantizar el mejor resultado.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[4/3]">
              <Image 
                src="https://placehold.co/800x600/F8FAFC/0F2547?text=Taller+de+Serigrafia" 
                alt="Nuestro taller de serigrafía" 
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="py-16 bg-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">15+</div>
              <div className="text-blue-l font-medium uppercase tracking-wider text-sm">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">10.000+</div>
              <div className="text-blue-l font-medium uppercase tracking-wider text-sm">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">500k+</div>
              <div className="text-blue-l font-medium uppercase tracking-wider text-sm">Prendas estampadas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">100%</div>
              <div className="text-blue-l font-medium uppercase tracking-wider text-sm">Producción propia</div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">El equipo detrás de las pantallas</h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Un grupo de profesionales apasionados por el textil, el diseño y la atención al cliente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3]">
              <Image 
                src="https://placehold.co/800x600/F8FAFC/0F2547?text=Equipo+de+Trabajo" 
                alt="Equipo de serigrafia-textil.es" 
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-l/30 rounded-full flex items-center justify-center shrink-0">
                  <Users className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Atención al cliente y diseño</h3>
                  <p className="text-slate">Te asesoramos desde el primer contacto, revisamos tus archivos y preparamos los fotomontajes para asegurar que el resultado sea exactamente el que buscas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-l/30 rounded-full flex items-center justify-center shrink-0">
                  <Award className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Taller y producción</h3>
                  <p className="text-slate">Nuestros maquinistas y especialistas en estampación miman cada prenda. Controlan las temperaturas, las tensiones de las pantallas y el curado de las tintas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-l/30 rounded-full flex items-center justify-center shrink-0">
                  <Truck className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Logística y envíos</h3>
                  <p className="text-slate">Empaquetamos cuidadosamente cada pedido y coordinamos con las agencias de transporte para que recibas tu mercancía en el plazo acordado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Por qué confían en nosotros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-mid">
              <Building2 className="text-blue mb-6" size={40} />
              <h3 className="text-xl font-bold text-navy mb-4">Taller propio</h3>
              <p className="text-slate">Sin intermediarios. Controlamos todo el proceso desde que entra tu diseño hasta que sale la caja por la puerta, garantizando calidad y plazos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-mid">
              <Clock className="text-blue mb-6" size={40} />
              <h3 className="text-xl font-bold text-navy mb-4">Agilidad y respuesta</h3>
              <p className="text-slate">Presupuestos en menos de 24h y tiempos de producción optimizados. Sabemos que en el mundo de la empresa y los eventos, los plazos son sagrados.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-mid">
              <CheckCircle2 className="text-blue mb-6" size={40} />
              <h3 className="text-xl font-bold text-navy mb-4">Asesoramiento honesto</h3>
              <p className="text-slate">Si la serigrafía no es la mejor opción para tu diseño, te lo diremos y te propondremos alternativas como el DTF o el bordado. Buscamos relaciones a largo plazo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Hablamos de tu proyecto?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Estamos listos para estampar tus ideas. Solicita presupuesto y descubre nuestra forma de trabajar.
          </p>
          <a 
            href="/presupuesto" 
            className="inline-flex bg-orange hover:bg-orange-d text-white px-10 py-4 rounded-xl font-bold text-lg transition-all items-center gap-2 shadow-lg"
          >
            Solicitar presupuesto <ChevronRight size={20} />
          </a>
        </div>
      </section>
    </div>
    </>
  );
}
