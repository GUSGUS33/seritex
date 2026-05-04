import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Construccion · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Construccion. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-construccion',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, HardHat, Palette, Users, Clock, ArrowRight, MessageSquare, Calendar, PackageCheck, Zap } from 'lucide-react';

const SECTOR = "Construcción";
const SECTOR_SINGULAR = "empresa";
const KW = "ropa trabajo personalizada logo";
const TECNICA_REC = "Serigrafía y Bordado";
const RANDOM_HERO = 45;

export default function SerigrafiaConstruccion() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Las tintas resisten trabajo duro y lavados frecuentes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, utilizamos tintas de serigrafía de alta resistencia formuladas específicamente para soportar el desgaste diario en obra y los lavados industriales a altas temperaturas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mínimo para uniformar toda una obra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para serigrafía el pedido mínimo es de 10 unidades. Podemos gestionar grandes volúmenes para uniformar a todo el peonaje y operarios de una gran obra."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis poner nombre del operario en cada prenda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, además del logo de la empresa en serigrafía, podemos añadir el nombre de cada operario o encargado utilizando vinilo textil de alta resistencia."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hacéis pedidos urgentes para nuevas incorporaciones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sabemos que en la construcción el personal fluctúa. Ofrecemos servicio express para nuevas incorporaciones, e incluso recomendamos la técnica DTF para unidades sueltas urgentes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Descuentos para empresas con múltiples equipos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos tarifas especiales por volumen para empresas constructoras que necesitan equipar a múltiples cuadrillas o diferentes obras simultáneamente."
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
      "name": "Serigrafía para Construccion"
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
              Resistencia extrema garantizada
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Ropa de trabajo personalizada para empresas de construcción
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Equipa a tus operarios con ropa segura, resistente y que proyecte la imagen corporativa de tu empresa en cada obra.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=construccion" 
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
              <HardHat className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Seguridad</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Prendas de alta visibilidad</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Resistencia</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Tintas para trabajo duro</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Volumen</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Para toda la plantilla</span>
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
                La imagen corporativa también se construye en la obra
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  En una <strong>obra</strong>, la <strong>ropa de trabajo</strong> cumple una doble función vital: garantizar la <strong>seguridad</strong> del <strong>operario</strong> (EPIs, alta visibilidad) y proyectar la <strong>imagen corporativa</strong> de la empresa constructora ante clientes y transeúntes.
                </p>
                <p>
                  Sabemos que el <strong>peonaje</strong> y los <strong>encargados</strong> someten las prendas a condiciones extremas de polvo, roce y lavados agresivos. Una camiseta publicitaria estándar no sirve; necesitas <strong>resistencia</strong> real.
                </p>
                <p>
                  Nuestra solución te permite uniformar a toda tu plantilla con prendas técnicas y duraderas. Utilizamos serigrafía de alta resistencia para el volumen de operarios y bordado premium para identificar a los mandos intermedios y encargados, todo gestionado 100% online.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Ropa+Trabajo+Construccion"
                  alt="Ropa de trabajo para construcción"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas esenciales para la obra</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Equipamos a tus operarios para cualquier clima y condición.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Camisetas obra", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisetas+Obra" },
              { title: "Polos técnicos", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Polos+Tecnicos" },
              { title: "Sudaderas trabajo", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Sudaderas+Trabajo" },
              { title: "Chalecos reflectantes", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Chalecos" },
              { title: "Gorras visera", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Gorras" },
              { title: "Cazadoras", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Cazadoras" }
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
                  Para el sector de la construcción recomendamos <strong>Serigrafía</strong> de alta resistencia para el gran volumen de camisetas y sudaderas de los operarios. Para encargados y mandos, el <strong>Bordado</strong> en polos o cazadoras aporta un plus de autoridad y durabilidad extrema.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/serigrafia-textil/" className="bg-white text-navy px-6 py-3 rounded-xl font-bold hover:bg-blue hover:text-white transition-all flex items-center gap-2">
                    Ver Serigrafía <ArrowRight size={18} />
                  </a>
                  <a href="/bordado-personalizado/" className="bg-navy-l text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    Ver Bordado <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-success rounded-full flex items-center justify-center shadow-2xl shadow-success/50 -rotate-12">
                  <span className="text-white text-center font-black leading-none">HEAVY<br/>DUTY</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Empresas que confían en nosotros</h2>
            <p className="text-xl text-slate">Desde constructoras nacionales hasta especialistas locales.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[80, 81, 82, 83, 84, 85].map((id, idx) => (
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
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">UNIFORMIDAD REALIZADA</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Construcciones Sur" : idx === 1 ? "Reformas Integrales" : idx === 2 ? "Estructuras Metálicas" : idx === 3 ? "Instalaciones 360" : idx === 4 ? "Obras Públicas" : "Grupo Inmobiliario"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Necesitas equipar a tu cuadrilla para la próxima obra?</h2>
          <a 
            href="/presupuesto/?sector=construccion" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto para tu empresa
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Un proceso ágil para tu empresa</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos cuentas qué necesitas</h3>
              <p className="text-slate">Dinos cuántos operarios tienes, qué prendas necesitas (EPIs, camisetas) y envíanos tu logo corporativo.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Propuesta y montaje</h3>
              <p className="text-slate">Te enviamos un presupuesto detallado y un montaje digital para que veas cómo quedará la ropa de trabajo.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producción y entrega</h3>
              <p className="text-slate">Producimos con calidad garantizada y te lo enviamos directamente a la oficina o a pie de obra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre ropa de trabajo</h2>
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
      <SectoresRelacionados currentSectorId="construccion" />
    </div>
    </>
  );
}
