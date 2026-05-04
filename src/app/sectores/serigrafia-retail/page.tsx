import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Retail · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Retail. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-retail',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, ShoppingBag, Palette, Users, Clock, ArrowRight, MessageSquare, Calendar, PackageCheck, Zap } from 'lucide-react';

const SECTOR = "Retail y Tiendas";
const SECTOR_SINGULAR = "tienda";
const KW = "ropa tienda personalizada marca";
const TECNICA_REC = "Bordado y Serigrafía";
const RANDOM_HERO = 49;

export default function SerigrafiaRetail() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Podéis uniformar varias tiendas con el mismo pedido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, gestionamos pedidos para franquicias y cadenas con múltiples puntos de venta. Podemos producir el volumen total y organizar envíos fraccionados a cada una de tus tiendas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Reposición rápida para nuevas incorporaciones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El sector retail tiene alta rotación. Ofrecemos servicio de reposición ágil, guardando tus diseños y pantallas (en caso de serigrafía) para que los nuevos dependientes tengan su uniforme rápidamente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Descuentos para franquicias con muchos locales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, aplicamos rápeles de descuento basados en el volumen total anual o por pedido grande, ideal para marcas en expansión o franquicias que renuevan uniformidad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis adaptar el uniforme por temporada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Muchas marcas cambian de camisetas en verano a sudaderas o polares en invierno. Mantenemos la coherencia de tu imagen de marca en diferentes colecciones y temporadas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Diferentes bordados para diferentes roles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es común diferenciar al 'Store Manager' del resto de dependientes. Podemos usar diferentes colores de prenda o añadir el cargo específico (bordado o en vinilo) manteniendo el logo corporativo."
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
      "name": "Serigrafía para Retail"
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
          <div className="absolute inset-0 bg-navy/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-success px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Imagen de marca impecable
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Uniformes para tiendas y retail: imagen consistente en todos tus puntos de venta
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Viste a tus dependientes con ropa que refleje los valores de tu marca y mejore la experiencia de compra del cliente.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=retail" 
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
              <ShoppingBag className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Branding</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Coherencia visual</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Temporadas</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Verano e Invierno</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Franquicias</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Envíos múltiples</span>
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
                El dependiente es el primer embajador de tu marca
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  En el sector <strong>retail</strong>, la experiencia del cliente en el <strong>punto de venta</strong> lo es todo. Un equipo de <strong>dependientes</strong> bien uniformado no solo facilita que el cliente los identifique, sino que transmite profesionalidad y refuerza la <strong>imagen de marca</strong>.
                </p>
                <p>
                  Gestionar la uniformidad de una <strong>tienda</strong> o una red de <strong>franquicias</strong> implica lidiar con rotación de personal, cambios de <strong>temporada</strong> y la necesidad de mantener una estética impecable acorde al <strong>visual merchandising</strong>.
                </p>
                <p>
                  Te ofrecemos una solución integral: desde polos bordados elegantes hasta camisetas modernas para campañas específicas. Garantizamos consistencia de color y calidad en cada reposición, gestionando tus pedidos de forma 100% online para que te centres en vender.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Uniformes+Retail"
                  alt="Uniformes para tiendas y dependientes"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas esenciales para el punto de venta</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Comodidad para el staff, estilo para la marca.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Polos dependientes", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Polos+Tienda" },
              { title: "Camisetas campaña", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisetas+Campaña" },
              { title: "Sudaderas equipo", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Sudaderas+Equipo" },
              { title: "Delantales comercio", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Delantales" },
              { title: "Bolsas de tela (Tote)", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Bolsas+Marca" },
              { title: "Lanyards corporativos", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Lanyards" }
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
                  Para un look premium y duradero en polos o sudaderas, el <strong>Bordado</strong> es la elección estrella en retail. Transmite calidad y resiste infinitos lavados. Para camisetas de campañas promocionales o rebajas, la <strong>Serigrafía</strong> permite estampar mensajes llamativos a un coste muy competitivo.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/bordado-personalizado/" className="bg-white text-navy px-6 py-3 rounded-xl font-bold hover:bg-blue hover:text-white transition-all flex items-center gap-2">
                    Ver Bordado <ArrowRight size={18} />
                  </a>
                  <a href="/serigrafia-textil/" className="bg-navy-l text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    Ver Serigrafía <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-success rounded-full flex items-center justify-center shadow-2xl shadow-success/50 -rotate-12">
                  <span className="text-white text-center font-black leading-none">BRAND<br/>IMAGE</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Marcas que visten sus tiendas con nosotros</h2>
            <p className="text-xl text-slate">Desde boutiques locales hasta cadenas nacionales.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[120, 121, 122, 123, 124, 125].map((id, idx) => (
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
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">UNIFORMIDAD RETAIL</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Cadena Supermercados" : idx === 1 ? "Boutique Moda" : idx === 2 ? "Tienda Electrónica" : idx === 3 ? "Franquicia Cosmética" : idx === 4 ? "Librería" : "Ferretería"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Abres una nueva tienda o renuevas imagen?</h2>
          <a 
            href="/presupuesto/?sector=retail" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto para tu marca
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Un proceso ágil para el comercio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos cuentas qué necesitas</h3>
              <p className="text-slate">Indícanos cuántos dependientes tienes, qué prendas buscas (polos, delantales) y envíanos tu manual de marca o logo.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Propuesta y montaje</h3>
              <p className="text-slate">Te enviamos un presupuesto y un montaje digital para asegurar que la ropa respeta la identidad visual de tu tienda.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producción y entrega</h3>
              <p className="text-slate">Personalizamos las prendas con calidad retail y te las enviamos a tu central o directamente a cada punto de venta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre uniformes de tienda</h2>
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
      <SectoresRelacionados currentSectorId="retail" />
    </div>
    </>
  );
}
