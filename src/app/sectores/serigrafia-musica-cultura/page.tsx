import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Música y Cultura · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Música y Cultura. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-musica-cultura',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, Music, Palette, Users, Clock, ArrowRight, MessageSquare, Calendar, PackageCheck, Zap } from 'lucide-react';

const SECTOR = "Música y Cultura";
const SECTOR_SINGULAR = "banda";
const KW = "merch para bandas de música";
const TECNICA_REC = "Serigrafía y DTF";
const RANDOM_HERO = 48;

export default function SerigrafiaMusicaCultura() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Podéis hacer tiradas muy pequeñas para bandas emergentes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, para bandas emergentes que necesitan poco stock inicial, recomendamos la impresión DTF, que permite hacer desde 1 unidad con calidad fotográfica. Para serigrafía, el mínimo es de 10 unidades."
        }
      },
      {
        "@type": "Question",
        "name": "¿Colores especiales o fluorescentes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "¡Por supuesto! En serigrafía trabajamos con tintas especiales, incluyendo colores flúor, metalizados (oro, plata) o tintas que brillan en la oscuridad, ideales para diseños de merch impactantes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Descuentos por gira con varios pedidos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, si tienes un tour programado y necesitas reposiciones constantes, podemos establecer tarifas especiales por volumen y mantener las pantallas de serigrafía para agilizar las repeticiones."
        }
      },
      {
        "@type": "Question",
        "name": "¿Entrega en venue de concierto posible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, podemos coordinar la entrega directamente en la sala de conciertos o venue donde vayáis a tocar, siempre que nos aviséis con antelación y proporcionéis los datos de contacto del recinto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis hacer diseños con mucho detalle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para diseños de álbumes muy complejos, ilustraciones con degradados o fotografías, utilizamos impresión DTF de alta resolución, que captura cada detalle a la perfección sobre cualquier color de prenda."
        }
      }
    ]
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Serigrafía para Música y Cultura"
    }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* B01 HERO */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`https://picsum.photos/id/${RANDOM_HERO}/1400/700`}
            alt="Uniformes personalizados"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-success px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Calidad Tour & Retail
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Merch para bandas y artistas: serigrafía para músicos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Convierte a tus fans en embajadores de tu música con camisetas y sudaderas de alta calidad que querrán llevar a diario.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=musica" 
                className="bg-orange hover:bg-orange-d text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange/20"
              >
                Solicitar presupuesto <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* B02 TRUST BAR */}
      <section className="bg-gray-light py-12 border-b border-gray-mid">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <Music className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Bandas</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Merch para giras</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Tintas</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Especiales y flúor</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Fans</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Calidad streetwear</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Desde 10</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Mínimo 10 uds</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 col-span-2 md:col-span-1">
              <span className="text-3xl mb-2">💻</span>
              <span className="text-2xl font-bold text-navy">100% online</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Sin llamadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* B03 PROBLEMA + SOLUCIÓN */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                El merch es la conexión física con tu audiencia
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  Para una <strong>banda</strong> o <strong>artista</strong>, el <strong>merch</strong> no es solo una fuente de ingresos vital durante una <strong>gira</strong>; es una forma de que el <strong>fan</strong> lleve tu música e identidad a la calle.
                </p>
                <p>
                  Las camisetas promocionales de baja calidad ya no sirven. Hoy en día, el merchandising musical compite con las marcas de moda. Necesitas prendas con cortes actuales, algodones pesados y estampados que sobrevivan a cientos de <strong>conciertos</strong> y lavados.
                </p>
                <p>
                  Trabajamos con <strong>promotoras</strong>, <strong>sellos</strong> y artistas independientes para crear colecciones de merch que destaquen. Desde el diseño de la portada del <strong>álbum</strong> hasta el logo del <strong>tour</strong>, garantizamos acabados profesionales gestionando todo de forma 100% online.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Merch+Bandas"
                  alt="Camisetas de merchandising para grupos de música"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B04 PRENDAS */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Los clásicos del puesto de merch</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Prendas que tus fans agotarán en cada concierto.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Camisetas merch", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisetas+Merch" },
              { title: "Hoodies oversize", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Hoodies" },
              { title: "Tote bags", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Tote+Bags" },
              { title: "Gorras trucker", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Gorras" },
              { title: "Parches de tela", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Parches" },
              { title: "Camisetas manga larga", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Longsleeve" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-mid">
                <div className="aspect-video overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-navy group-hover:text-blue transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B05 TÉCNICA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-navy rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Técnica recomendada para {SECTOR}</h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  La <strong>Serigrafía</strong> es la reina indiscutible del merch musical. Ofrece el tacto suave y el aspecto "vintage" que los fans adoran, siendo muy rentable para tiradas de gira. Para portadas de discos a todo color o tiradas limitadas, combinamos con impresión <strong>DTF</strong>.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/serigrafia-textil/" className="bg-white text-navy px-6 py-3 rounded-xl font-bold hover:bg-blue hover:text-white transition-all flex items-center gap-2">
                    Ver Serigrafía <ArrowRight size={18} />
                  </a>
                  <a href="/impresion-dtf/" className="bg-navy-l text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    Ver DTF <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-success rounded-full flex items-center justify-center shadow-2xl shadow-success/50 -rotate-12">
                  <span className="text-white text-center font-black leading-none">TOUR<br/>READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B06 GALERÍA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Artistas que visten nuestra calidad</h2>
            <p className="text-xl text-slate">Desde bandas emergentes hasta giras nacionales.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[110, 111, 112, 113, 114, 115].map((id, idx) => (
              <div key={id} className="group relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={`https://picsum.photos/id/${id}/600/600`}
                  alt={`Trabajo ${id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">MERCH OFICIAL</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Tour Nacional" : idx === 1 ? "Lanzamiento EP" : idx === 2 ? "Merch Festival" : idx === 3 ? "Edición Limitada" : idx === 4 ? "Sello Discográfico" : "Banda Indie"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B07 CTA MID */}
      <section className="py-16 bg-blue">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿A punto de empezar la gira?</h2>
          <a 
            href="/presupuesto/?sector=musica" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto para merch
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Un proceso rápido entre conciertos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos cuentas qué necesitas</h3>
              <p className="text-slate">Dinos qué prendas quieres para el puesto de merch, cantidades por talla y envíanos el arte del disco o logo.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Propuesta y montaje</h3>
              <p className="text-slate">Te enviamos un presupuesto detallado y mockups digitales para que apruebes el diseño antes de imprimir.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producción y entrega</h3>
              <p className="text-slate">Imprimimos con calidad retail y te enviamos las cajas al local de ensayo o directamente a la sala.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre merch musical</h2>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, idx) => (
              <details key={idx} className="group bg-gray-light rounded-2xl p-6 border border-gray-mid open:bg-white open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-navy text-lg">
                  {item.name}
                  <span className="text-blue group-open:rotate-180 transition-transform">
                    <ChevronRight />
                  </span>
                </summary>
                <p className="mt-4 text-slate leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

            {/* INTERLINKING DE SECTORES RELACIONADOS */}
      <SectoresRelacionados currentSectorId="musica" />
    </div>
    </>
  );
}
