import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Despachos · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Despachos. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-despachos',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, Briefcase, Palette, Users, Clock, ArrowRight, MessageSquare, PackageCheck, Zap } from 'lucide-react';

const SECTOR = "Despachos y Profesionales";
const SECTOR_SINGULAR = "despacho";
const KW = "merchandising corporativo despachos";
const TECNICA_REC = "Bordado";
const RANDOM_HERO = 51;

export default function SerigrafiaDespachos() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Hacéis camisas bordadas para bufetes y consultorías?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, el bordado en camisas (cuello o pecho) es la opción más demandada por despachos de abogados, consultoras y agencias que buscan una imagen corporativa elegante y sutil."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el pedido mínimo de polos corporativos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro pedido mínimo es de 10 unidades. Es ideal para pequeños despachos o equipos directivos que necesitan renovar su vestuario corporativo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis bordar el nombre de cada socio o empleado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Ofrecemos personalización individual, combinando el logo del despacho en un lado y el nombre o cargo del profesional en el otro."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecéis ropa de abrigo corporativa para comerciales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, disponemos de chaquetas softshell, chalecos acolchados y polares de alta calidad, perfectos para equipos comerciales o peritos que realizan visitas a clientes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hacéis regalos textiles premium para clientes VIP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, preparamos packs de bienvenida o regalos corporativos de alta gama (polos premium, bolsas de tela gruesa, etc.) ideales para fidelizar a tus mejores clientes."
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
      "name": "Serigrafía para Despachos"
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
              Elegancia y Profesionalidad
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Merchandising corporativo para despachos y profesionales
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Viste a tu equipo con camisas y polos bordados que transmiten confianza, seriedad y prestigio a tus clientes.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=despachos" 
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
              <Briefcase className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Elegancia</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Acabados premium</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Discreción</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Bordados sutiles</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Personalizado</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Nombres individuales</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Desde 10</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Equipos pequeños</span>
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
                La primera impresión es clave en los servicios profesionales
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  En un <strong>despacho de abogados</strong>, una <strong>consultoría</strong> o una agencia, la confianza del cliente se gana desde el primer apretón de manos. Una imagen <strong>corporativa</strong> cuidada y profesional es fundamental.
                </p>
                <p>
                  A menudo, los equipos visten de forma dispar, perdiendo la oportunidad de proyectar una marca sólida. Unas <strong>camisas bordadas</strong> o unos polos discretos unifican al equipo y transmiten seriedad sin perder elegancia.
                </p>
                <p>
                  Te ayudamos a seleccionar prendas de alta calidad y aplicamos tu logo mediante bordado de precisión. Gestionamos todo el proceso de forma 100% online, para que no pierdas tiempo en reuniones innecesarias y te centres en tus clientes.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Ropa+Despachos"
                  alt="Uniformes para consultorías y despachos"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas corporativas para profesionales</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Calidad y discreción para representar tu firma.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Camisas Oxford", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisas+Bordadas" },
              { title: "Polos Premium", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Polos+Premium" },
              { title: "Chalecos acolchados", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Chalecos" },
              { title: "Chaquetas Softshell", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Softshell" },
              { title: "Bolsas de tela (Tote)", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Tote+Bags" },
              { title: "Lanyards y Acreditaciones", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Lanyards" }
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
                  Sin duda, el <strong>Bordado</strong> es la técnica reina para despachos y consultorías. Un logo bordado en el pecho o en el cuello de una camisa aporta un toque de distinción, durabilidad y prestigio que ninguna otra técnica puede igualar.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/bordado-personalizado/" className="bg-white text-navy px-6 py-3 rounded-xl font-bold hover:bg-blue hover:text-white transition-all flex items-center gap-2">
                    Descubrir Bordado <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-success rounded-full flex items-center justify-center shadow-2xl shadow-success/50 -rotate-12">
                  <span className="text-white text-center font-black leading-none">PREMIUM<br/>QUALITY</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Firmas que confían en nosotros</h2>
            <p className="text-xl text-slate">Desde despachos locales hasta consultoras internacionales.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[130, 131, 132, 133, 134, 135].map((id, idx) => (
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
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">ROPA CORPORATIVA</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Bufete de Abogados" : idx === 1 ? "Consultora IT" : idx === 2 ? "Agencia de Marketing" : idx === 3 ? "Asesoría Fiscal" : idx === 4 ? "Estudio de Arquitectura" : "Inmobiliaria Premium"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Quieres mejorar la imagen de tu equipo?</h2>
          <a 
            href="/presupuesto/?sector=despachos" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto corporativo
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Un proceso sencillo y profesional</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Solicitud online</h3>
              <p className="text-slate">Dinos qué prendas buscas (camisas, polos) y envíanos el logo de tu firma. Sin llamadas ni reuniones.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Propuesta visual</h3>
              <p className="text-slate">Te enviamos un presupuesto detallado y un fotomontaje para que veas cómo quedará el bordado antes de producir.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Entrega en tu oficina</h3>
              <p className="text-slate">Bordamos las prendas con la máxima calidad y te las enviamos directamente a tu despacho listas para usar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre ropa corporativa</h2>
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
      <SectoresRelacionados currentSectorId="despachos" />
    </div>
    </>
  );
}
