import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Hosteleria · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Hosteleria. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-hosteleria',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, ChefHat, Palette, Users, Clock, ArrowRight, MessageSquare, Calendar, PackageCheck, Zap } from 'lucide-react';

const SECTOR = "Hostelería";
const SECTOR_SINGULAR = "local";
const KW = "uniformes hostelería personalizados";
const TECNICA_REC = "Bordado y Serigrafía";
const RANDOM_HERO = 43;

export default function SerigrafiaHosteleria() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Mínimo para uniformar mi restaurante?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para serigrafía el mínimo es de 10 unidades. Para bordado premium en polos o delantales, consúltanos según el diseño."
        }
      },
      {
        "@type": "Question",
        "name": "¿Diferentes uniformes para sala y cocina en el mismo pedido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, podemos gestionar polos bordados para la sala y camisetas serigrafiadas para la cocina dentro del mismo pedido, unificando la logística."
        }
      },
      {
        "@type": "Question",
        "name": "¿Resisten lavados industriales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestras tintas de serigrafía y los hilos de bordado están preparados para soportar lavados frecuentes a altas temperaturas, ideales para el sector hostelería."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis hacer delantales con logo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Personalizamos delantales de peto, franceses o cortos, tanto en serigrafía como en bordado, para darle un toque profesional a tu equipo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Plazo para apertura de nuevo local?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entendemos las prisas de una apertura. Nuestro plazo estándar es de 7-10 días, pero disponemos de servicio express si la inauguración es inminente."
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
      "name": "Serigrafía para Hosteleria"
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
              Uniformes de alta resistencia
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Serigrafía para hostelería: uniformes que identifican tu local
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              De la sala a la cocina. Viste a tu equipo con ropa cómoda, resistente y que proyecte la mejor imagen.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=hosteleria" 
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
              <ChefHat className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Resistencia</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Lavados industriales</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Bordado</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Acabado premium</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Sala + Cocina</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Todo en un pedido</span>
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
                El uniforme es la primera impresión de tu local
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  En el sector de la hostelería, la <strong>imagen del local</strong> se transmite a través de cada detalle, y el <strong>uniforme de sala</strong> es uno de los más importantes. Un <strong>camarero</strong> o <strong>maître</strong> bien uniformado proyecta profesionalidad y eleva la <strong>experiencia del cliente</strong> desde el primer momento en la <strong>barra</strong> o la mesa.
                </p>
                <p>
                  Pero no todo es estética. En la <strong>cocina</strong>, la <strong>brigada</strong> necesita prendas que soporten el calor, las manchas y los lavados agresivos sin perder la forma ni el color.
                </p>
                <p>
                  Nuestra solución integral te permite equipar a todo tu personal: desde polos bordados elegantes para la sala hasta camisetas serigrafiadas resistentes para la cocina, todo gestionado de forma sencilla y 100% online.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Uniformes+Hosteleria"
                  alt="Uniformes para hostelería"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas esenciales para hostelería</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Equipamos a tu equipo de sala y cocina con lo mejor.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Polos sala", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Polos+sala" },
              { title: "Camisetas cocina", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisetas+cocina" },
              { title: "Delantales", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Delantales" },
              { title: "Gorros cocina", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Gorros+cocina" },
              { title: "Chaquetillas", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Chaquetillas" },
              { title: "Cazadoras terraza", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Cazadoras" }
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
                  Para hostelería recomendamos <strong>Bordado</strong> en polos y delantales para un acabado premium y duradero en sala. Para la cocina, la <strong>Serigrafía</strong> en camisetas ofrece la mejor relación calidad-precio para cambios frecuentes y lavados intensivos.
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
                  <span className="text-white text-center font-black leading-none">PREMIUM<br/>FINISH</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Locales que confían en nosotros</h2>
            <p className="text-xl text-slate">Desde cafeterías de barrio hasta grupos de restauración.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[43, 44, 45, 46, 47, 48].map((id, idx) => (
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
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">PROYECTO REALIZADO</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Café Central" : idx === 1 ? "Bistro 44" : idx === 2 ? "La Trattoria" : idx === 3 ? "Burger Joint" : idx === 4 ? "Sushi Bar" : "Gastro Pub"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Abres pronto o necesitas renovar uniformes?</h2>
          <a 
            href="/presupuesto/?sector=hosteleria" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto ahora
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Un proceso ágil para tu negocio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos cuentas qué necesitas</h3>
              <p className="text-slate">Dinos cuántas personas sois, qué prendas buscáis (sala, cocina) y envíanos tu logo.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Propuesta y montaje</h3>
              <p className="text-slate">Te enviamos un presupuesto detallado y un montaje digital para que veas cómo quedará el uniforme.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producción y entrega</h3>
              <p className="text-slate">Producimos con calidad garantizada y te lo enviamos directamente a tu local.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre hostelería</h2>
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
      <SectoresRelacionados currentSectorId="hosteleria" />
    </div>
    </>
  );
}
