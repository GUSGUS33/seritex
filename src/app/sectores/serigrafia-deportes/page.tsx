import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Deportes · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Deportes. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-deportes',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, Trophy, Palette, Users, Clock, ArrowRight, MessageSquare, Calendar, PackageCheck, Zap } from 'lucide-react';

const SECTOR = "Deportes";
const SECTOR_SINGULAR = "club";
const KW = "camisetas equipos deportivos personalizadas";
const TECNICA_REC = "Serigrafía y Vinilo";
const RANDOM_HERO = 44;

export default function SerigrafiaDeportes() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Podéis poner número y nombre en cada camiseta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, utilizamos vinilo textil de corte de alta resistencia para personalizar cada camiseta con el nombre y dorsal individual de cada jugador."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mínimo para equipación completa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para serigrafía de escudos o logos de patrocinadores el mínimo es de 10 unidades. Podemos gestionar pedidos para equipos completos o categorías enteras."
        }
      },
      {
        "@type": "Question",
        "name": "¿Resisten el lavado frecuente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, tanto nuestras tintas de serigrafía como el vinilo deportivo están diseñados para soportar el desgaste de la competición y los lavados frecuentes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis replicar los colores exactos del club?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Trabajamos con cartas Pantone para asegurar que el escudo y los patrocinadores luzcan exactamente con los colores corporativos de tu club."
        }
      },
      {
        "@type": "Question",
        "name": "¿Descuentos para clubs sin ánimo de lucro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entendemos el esfuerzo de los clubs locales. Ofrecemos tarifas ajustadas por volumen para equipar a todas las categorías de la escuela o club."
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
      "name": "Serigrafía para Deportes"
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
              Nombres y dorsales individuales
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Serigrafía para clubs deportivos: equipaciones que unen al equipo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Viste a tu club con orgullo. Escudos en serigrafía y dorsales en vinilo de alta resistencia para la competición.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=deportes" 
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
              <Trophy className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Competición</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Alta resistencia</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Pantone</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Colores exactos</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Dorsales</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Nombres individuales</span>
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
                La equipación es el alma del club
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  Para cualquier <strong>club</strong>, el inicio de la <strong>temporada</strong> marca un momento especial: la presentación de la nueva <strong>equipación</strong>. No es solo ropa de <strong>entrenamiento</strong> o <strong>competición</strong>; es el símbolo que une al <strong>vestuario</strong> y a la <strong>afición</strong>.
                </p>
                <p>
                  Llevar el <strong>escudo</strong> en el pecho y el <strong>dorsal</strong> en la espalda genera un sentido de pertenencia inigualable. Pero sabemos que gestionar las tallas, números y nombres de decenas de jugadores puede ser un dolor de cabeza.
                </p>
                <p>
                  Nuestra plataforma 100% online simplifica este proceso. Combinamos la serigrafía de alta calidad para escudos y patrocinadores con el vinilo de corte resistente para la personalización individual, asegurando que cada jugador salte al campo con la mejor imagen.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Equipaciones+Deportivas"
                  alt="Equipaciones deportivas personalizadas"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas esenciales para tu club</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Equipamos a tus jugadores para el partido, el entreno y el viaje.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Camisetas equipación", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisetas+Juego" },
              { title: "Chándals", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Chandals" },
              { title: "Sudaderas", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Sudaderas" },
              { title: "Gorras", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Gorras" },
              { title: "Calcetines", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Calcetines" },
              { title: "Bolsas deporte", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Bolsas+Deporte" }
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
                  Para equipaciones deportivas la combinación perfecta es la <strong>Serigrafía</strong> para escudos y logos de patrocinadores (garantizando durabilidad y colores exactos) junto con el <strong>Vinilo Textil</strong> para los nombres y dorsales individuales de cada jugador.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/serigrafia-textil/" className="bg-white text-navy px-6 py-3 rounded-xl font-bold hover:bg-blue hover:text-white transition-all flex items-center gap-2">
                    Ver Serigrafía <ArrowRight size={18} />
                  </a>
                  <a href="/vinilo-textil/" className="bg-navy-l text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    Ver Vinilo <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-success rounded-full flex items-center justify-center shadow-2xl shadow-success/50 -rotate-12">
                  <span className="text-white text-center font-black leading-none">PRO<br/>SPORTS</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Clubs que visten nuestros colores</h2>
            <p className="text-xl text-slate">Desde equipos de barrio hasta escuelas deportivas.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[56, 57, 58, 59, 60, 61].map((id, idx) => (
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
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">EQUIPACIÓN REALIZADA</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "CD Atlético" : idx === 1 ? "Basket Club" : idx === 2 ? "Runners Team" : idx === 3 ? "Voley Playa" : idx === 4 ? "Escuela Fútbol" : "Rugby Club"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Empieza la temporada? Equipamos a tu club</h2>
          <a 
            href="/presupuesto/?sector=deportes" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto para el equipo
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Un proceso sencillo para tu club</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos envías el escudo y lista</h3>
              <p className="text-slate">Pásanos el escudo del club, logos de patrocinadores y la lista de nombres/dorsales con sus tallas.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Propuesta y montaje</h3>
              <p className="text-slate">Te enviamos un presupuesto detallado y un montaje digital para que apruebes el diseño de la equipación.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producción y entrega</h3>
              <p className="text-slate">Producimos con calidad garantizada y te enviamos las equipaciones listas para el primer partido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre deportes</h2>
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
      <SectoresRelacionados currentSectorId="deportes" />
    </div>
    </>
  );
}
