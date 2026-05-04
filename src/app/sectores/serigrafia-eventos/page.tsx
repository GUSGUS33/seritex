import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Eventos · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Eventos. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-eventos',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, Zap, Palette, Users, Clock, ArrowRight, MessageSquare, Calendar, PackageCheck } from 'lucide-react';

const SECTOR = "Eventos";
const SECTOR_SINGULAR = "evento";
const KW = "camisetas para eventos personalizadas";
const TECNICA_REC = "Serigrafía y DTF";
const RANDOM_HERO = 41;

export default function SerigrafiaEventos() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Podéis entregar en menos de una semana para un evento urgente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, disponemos de un servicio de producción express para eventos con plazos ajustados. Dependiendo de la técnica y el volumen, podemos entregar en 48-72 horas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mínimo de camisetas para un festival pequeño?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para serigrafía el mínimo es de 10 unidades. Si necesitas menos cantidad para un evento muy pequeño o staff reducido, podemos usar DTF desde tan solo 1 unidad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo mezclar camisetas de staff y merchandising en el mismo pedido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Podemos gestionar diferentes diseños (por ejemplo, 'STAFF' en la espalda para unos y el diseño del evento para otros) dentro de la misma logística de pedido."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis imprimir diseños con muchos colores para el merch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Para diseños complejos o con muchos colores (como el cartel de un festival), recomendamos la técnica DTF, que permite una calidad fotográfica sin límite de colores."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué formato de archivo necesitáis para el diseño?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Preferimos archivos vectoriales (.AI, .EPS, .PDF o .SVG). Si no dispones de ellos, un archivo .PNG de alta resolución con fondo transparente también suele ser válido."
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
      "name": "Serigrafía para Eventos"
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
              Entrega express disponible
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Serigrafía textil para eventos y festivales: merch que se recuerda
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Del staff al público: ropa que hace que tu evento se recuerde. Calidad y rapidez garantizada.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=eventos" 
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
              <Zap className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Express</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Entrega en -72h disponible</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Vivos</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Colores vivos garantizados</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Staff + Merch</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Todo en el mismo pedido</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Desde 10</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Mínimo 10 uds serigrafía</span>
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
                La ropa de tu evento es parte de la experiencia
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  En cualquier <strong>festival</strong>, <strong>concierto</strong> o <strong>feria</strong>, el <strong>merchandising</strong> no es solo un producto de venta; es el <strong>recuerdo físico</strong> que los asistentes se llevan a casa. Una camiseta de calidad se convierte en una valla publicitaria emocional que perdura años después de que el <strong>headliner</strong> haya bajado del escenario.
                </p>
                <p>
                  Para una <strong>promotora</strong>, contar con un <strong>staff uniformado</strong> es crucial para la organización y la <strong>visibilidad</strong>. Un equipo identificado transmite seguridad y profesionalidad, mejorando la <strong>experiencia de marca</strong> global del asistente.
                </p>
                <p>
                  Sabemos que en el mundo de los eventos los plazos son sagrados. No hay margen de error cuando la fecha de apertura está marcada en el calendario. Por eso, nuestra solución combina la potencia de la serigrafía para grandes tiradas de <strong>merch</strong> con la agilidad del DTF para necesidades de última hora o diseños fotográficos complejos.
                </p>
                <p>
                  Desde la camiseta oficial del festival hasta los chalecos del personal de seguridad, nos encargamos de que todo esté listo, con colores vibrantes y acabados duraderos, para que tú solo tengas que preocuparte de que el evento sea un éxito.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Camisetas+festival+personalizadas"
                  alt="Camisetas festival personalizadas"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas esenciales para eventos</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Equipamos a tu equipo y a tus fans con lo mejor.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Camisetas staff", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisetas+staff" },
              { title: "Camisetas público/merch", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Merchandising" },
              { title: "Sudaderas", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Sudaderas" },
              { title: "Bolsas (Tote bags)", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Tote+bags" },
              { title: "Gorras", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Gorras" },
              { title: "Pulseras tela", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Pulseras+tela" }
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
                  Para eventos recomendamos <strong>Serigrafía</strong> para tiradas grandes con colores vivos y máxima rentabilidad. <strong>DTF</strong> es ideal para pocas unidades, reposiciones rápidas o diseños multicolor complejos (como carteles con degradados).
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
                  <span className="text-white text-center font-black leading-none">EXPRESS<br/>READY</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Eventos que han confiado en nosotros</h2>
            <p className="text-xl text-slate">Desde festivales boutique hasta ferias internacionales.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[61, 62, 63, 64, 65, 66].map((id, idx) => (
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
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">EVENTO REALIZADO</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Rock Fest 2024" : idx === 1 ? "Tech Summit BCN" : idx === 2 ? "Indie Night" : idx === 3 ? "Gastro Fair" : idx === 4 ? "Summer Beats" : "Art Expo"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Cuándo es tu evento? Cuéntanoslo y te respondemos hoy</h2>
          <a 
            href="/presupuesto/?sector=eventos" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto urgente
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Logística garantizada para tu evento</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Calendar size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos dices fecha del evento</h3>
              <p className="text-slate">Tu fecha es nuestra prioridad absoluta. Bloqueamos capacidad de producción para cumplir tus plazos.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Presupuesto en horas</h3>
              <p className="text-slate">No pierdas tiempo esperando. Recibes tu cotización y montaje digital el mismo día para agilizar la aprobación.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Entrega garantizada</h3>
              <p className="text-slate">Producimos y enviamos con seguimiento en tiempo real para que el material llegue antes de que empiece el montaje.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre eventos</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "¿Podéis entregar en menos de una semana para un evento urgente?", a: "Sí, disponemos de un servicio de producción express para eventos con plazos ajustados. Dependiendo de la técnica y el volumen, podemos entregar en 48-72 horas." },
              { q: "¿Mínimo de camisetas para un festival pequeño?", a: "Para serigrafía el mínimo es de 10 unidades. Si necesitas menos cantidad para un evento muy pequeño o staff reducido, podemos usar DTF desde tan solo 1 unidad." },
              { q: "¿Puedo mezclar camisetas de staff y merchandising en el mismo pedido?", a: "Por supuesto. Podemos gestionar diferentes diseños (por ejemplo, 'STAFF' en la espalda para unos y el diseño del evento para otros) dentro de la misma logística de pedido." },
              { q: "¿Podéis imprimir diseños con muchos colores para el merch?", a: "Sí. Para diseños complejos o con muchos colores (como el cartel de un festival), recomendamos la técnica DTF, que permite una calidad fotográfica sin límite de colores." },
              { q: "¿Qué formato de archivo necesitáis para el diseño?", a: "Preferimos archivos vectoriales (.AI, .EPS, .PDF o .SVG). Si no dispones de ellos, un archivo .PNG de alta resolución con fondo transparente también suele ser válido." }
            ].map((item, idx) => (
              <details key={idx} className="group bg-gray-light rounded-2xl p-6 border border-gray-mid open:bg-white open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-navy text-lg">
                  {item.q}
                  <span className="text-blue group-open:rotate-180 transition-transform">
                    <ChevronRight />
                  </span>
                </summary>
                <p className="mt-4 text-slate leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

            {/* INTERLINKING DE SECTORES RELACIONADOS */}
      <SectoresRelacionados currentSectorId="eventos" />
    </div>
    </>
  );
}
