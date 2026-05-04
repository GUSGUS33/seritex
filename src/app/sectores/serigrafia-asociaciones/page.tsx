import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Asociaciones · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Asociaciones. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-asociaciones',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, Users, Palette, Clock, ArrowRight, MessageSquare, Calendar, PackageCheck, Zap } from 'lucide-react';

const SECTOR = "Asociaciones y Peñas";
const SECTOR_SINGULAR = "asociación";
const KW = "camisetas asociaciones personalizadas";
const TECNICA_REC = "Serigrafía y DTF";
const RANDOM_HERO = 50;

export default function SerigrafiaAsociaciones() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Precio especial para ONGs y asociaciones sin ánimo de lucro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, apoyamos a colectivos y ONGs ofreciendo tarifas ajustadas y descuentos por volumen para ayudar a maximizar el presupuesto de la asociación en sus eventos y campañas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mínimo para una peña pequeña?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para serigrafía el pedido mínimo es de 10 unidades, ideal para peñas pequeñas o grupos de amigos que participan en fiestas locales, carnavales o eventos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podemos diseñar juntos el logo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si tenéis una idea pero no el diseño final, nuestro equipo puede ayudaros a adaptar vuestro boceto o idea para que quede perfecto al estamparlo en las camisetas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis hacer pedidos anuales con las mismas condiciones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, muchas asociaciones hacen un pedido grande al año (para fiestas patronales, por ejemplo). Guardamos vuestros diseños para que repetir el pedido al año siguiente sea rápido y sencillo."
        }
      },
      {
        "@type": "Question",
        "name": "¿DTF para pocos socios nuevos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si durante el año se incorporan nuevos socios y necesitáis unas pocas camisetas sueltas, recomendamos la impresión DTF, ya que no requiere costes fijos de pantallas y permite hacer desde 1 unidad."
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
      "name": "Serigrafía para Asociaciones"
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
              Identidad de grupo
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Camisetas para asociaciones, peñas y colectivos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Crea sentimiento de pertenencia y da visibilidad a tu causa con ropa personalizada económica y de calidad.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=asociaciones" 
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
              <Users className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Grupos</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Peñas y ONGs</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Económico</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Precios ajustados</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Calendar className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Eventos</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Fiestas y campañas</span>
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
                La fuerza del colectivo se demuestra vistiendo los mismos colores
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  Ya sea una <strong>peña</strong> preparándose para las <strong>fiestas</strong> patronales, una <strong>ONG</strong> organizando a sus <strong>voluntarios</strong>, o un <strong>colectivo</strong> vecinal en un <strong>evento anual</strong>, la ropa es el elemento que une a los <strong>socios</strong> y crea <strong>identidad de grupo</strong>.
                </p>
                <p>
                  A menudo, las asociaciones cuentan con presupuestos ajustados y necesitan soluciones económicas pero que no se deterioren al primer lavado, especialmente si se van a usar en <strong>carnaval</strong> o eventos al aire libre.
                </p>
                <p>
                  Te ofrecemos un servicio 100% online, rápido y transparente. Desde camisetas básicas para grandes tiradas hasta sudaderas cálidas para el invierno, personalizamos vuestras prendas con serigrafía duradera para que vuestro mensaje o logo destaque en cualquier multitud.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Camisetas+Asociaciones"
                  alt="Camisetas para peñas y asociaciones"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas populares para grupos</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Opciones económicas y coloridas para destacar.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Camisetas asociación", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisetas+Asociacion" },
              { title: "Sudaderas grupo", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Sudaderas+Grupo" },
              { title: "Chalecos voluntarios", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Chalecos" },
              { title: "Gorras peña", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Gorras" },
              { title: "Pañuelos fiestas", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Pañuelos" },
              { title: "Mochilas de cuerdas", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Mochilas" }
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
                  Para equipar a toda una peña o a los voluntarios de una asociación, la <strong>Serigrafía</strong> es la técnica más rentable. Permite estampar logos grandes a un coste muy bajo por unidad. Si el logo tiene muchos colores o degradados, o si sois un grupo pequeño, la impresión <strong>DTF</strong> es la alternativa perfecta.
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
                  <span className="text-white text-center font-black leading-none">TEAM<br/>SPIRIT</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Colectivos que ya visten sus colores</h2>
            <p className="text-xl text-slate">Proyectos realizados para grupos de toda España.</p>
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
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">GRUPO UNIDO</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Peña Fiestas" : idx === 1 ? "ONG Local" : idx === 2 ? "Asociación Vecinal" : idx === 3 ? "Banda de Música" : idx === 4 ? "Grupo Scout" : "Voluntariado"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Se acercan las fiestas o vuestro evento anual?</h2>
          <a 
            href="/presupuesto/?sector=asociaciones" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto para tu grupo
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Un proceso fácil para la junta directiva</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos cuentas qué necesitas</h3>
              <p className="text-slate">Dinos cuántos socios sois, qué tipo de prendas queréis y envíanos el diseño o escudo de la asociación.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Propuesta y montaje</h3>
              <p className="text-slate">Te enviamos un presupuesto claro para que lo aprobéis en asamblea, junto con un montaje digital de las prendas.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producción y entrega</h3>
              <p className="text-slate">Estampamos las prendas a tiempo para vuestro evento y las enviamos a la sede de la asociación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre ropa para grupos</h2>
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
      <SectoresRelacionados currentSectorId="asociaciones" />
    </div>
    </>
  );
}
