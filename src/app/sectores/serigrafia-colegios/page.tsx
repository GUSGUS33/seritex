import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Colegios · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Colegios. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-colegios',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, GraduationCap, Palette, Users, Clock, ArrowRight, MessageSquare, Calendar, PackageCheck, Zap } from 'lucide-react';

const SECTOR = "Colegios y AMPAs";
const SECTOR_SINGULAR = "colegio";
const KW = "camisetas colegio personalizadas";
const TECNICA_REC = "Serigrafía y DTF";
const RANDOM_HERO = 50;

export default function SerigrafiaColegios() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Tenéis tallas desde infantil hasta adulto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, disponemos de un amplio catálogo que cubre desde tallas para guardería e infantil (1-2 años) hasta tallas de adulto (XXL) para profesores y padres."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podemos hacer un pedido conjunto del AMPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Trabajamos habitualmente con AMPAs para gestionar pedidos conjuntos de uniformes, chándals o camisetas para excursiones, ofreciendo precios por volumen."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué técnica es mejor para el escudo del colegio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para escudos con muchos colores o detalles finos, recomendamos la impresión DTF, ya que permite una reproducción fotográfica perfecta desde 1 unidad. Para escudos a 1 o 2 colores en grandes cantidades, la serigrafía es ideal."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hacéis camisetas para el viaje de fin de curso con nombres?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es un clásico. Podemos imprimir el diseño principal en serigrafía y añadir el nombre o apodo de cada alumno en la espalda utilizando vinilo textil."
        }
      },
      {
        "@type": "Question",
        "name": "¿Trabajáis con algodón orgánico para pieles sensibles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, contamos con líneas de ropa escolar fabricadas en algodón 100% orgánico certificado, ideal para la piel sensible de los más pequeños y respetuoso con el medio ambiente."
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
      "name": "Serigrafía para Colegios"
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
              Tallas infantiles y adulto
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Uniformes y ropa deportiva para colegios y AMPAs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Equipa a tus alumnos con prendas cómodas, duraderas y personalizadas con el escudo del centro. Desde excursiones hasta fin de curso.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=colegios" 
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
              <GraduationCap className="text-success mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Tallas</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">De 1 año a XXL</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Escudos</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">A todo color (DTF)</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">AMPAs</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Gestión de grupos</span>
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
                Ropa escolar que resiste el ritmo de los más pequeños
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  Gestionar la ropa de un <strong>colegio</strong> o las iniciativas de un <strong>AMPA</strong> requiere prendas que combinen comodidad para los niños, tranquilidad para los padres y una excelente relación calidad-precio.
                </p>
                <p>
                  Ya sea el <strong>uniforme</strong> diario, el <strong>chándal</strong> para educación física, las camisetas identificativas para una <strong>excursión</strong> o las clásicas sudaderas del viaje de <strong>fin de curso</strong>, la <strong>durabilidad</strong> es innegociable.
                </p>
                <p>
                  Ofrecemos un catálogo completo con <strong>tallas infantiles</strong> y opciones en <strong>algodón orgánico</strong>. Personalizamos <strong>equipaciones deportivas</strong> y uniformes con técnicas resistentes a los lavados frecuentes, gestionando todo el proceso 100% online para facilitar el trabajo a directivos y asociaciones de padres.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Camisetas+Colegio"
                  alt="Camisetas personalizadas para colegios"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas esenciales para el curso escolar</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Desde el día a día en el aula hasta los eventos especiales.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Camisetas excursión", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Camisetas+Excursion" },
              { title: "Sudaderas fin de curso", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Sudaderas+Fin+Curso" },
              { title: "Equipaciones deportivas", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Equipaciones" },
              { title: "Polos uniforme", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Polos+Uniforme" },
              { title: "Mochilas saco", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Mochilas+Saco" },
              { title: "Petos identificativos", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Petos" }
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
                  Para grandes tiradas como camisetas de excursión o eventos del AMPA, la <strong>Serigrafía</strong> es la opción más económica y duradera. Para reproducir el escudo del colegio a todo color en uniformes o chándals, la impresión <strong>DTF</strong> ofrece un acabado impecable y resistente a los lavados.
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
                  <span className="text-white text-center font-black leading-none">KIDS<br/>PROOF</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Colegios y AMPAs que confían en nosotros</h2>
            <p className="text-xl text-slate">Proyectos escolares realizados con éxito.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[90, 91, 92, 93, 94, 95].map((id, idx) => (
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
                  <span className="text-success font-bold uppercase tracking-widest text-xs mb-2">PROYECTO ESCOLAR</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Viaje Fin de Curso" : idx === 1 ? "Equipación Deportiva" : idx === 2 ? "Uniformes Infantil" : idx === 3 ? "Camisetas Excursión" : idx === 4 ? "Festival de Navidad" : "Olimpiadas Escolares"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Preparando el próximo evento escolar o excursión?</h2>
          <a 
            href="/presupuesto/?sector=colegios" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto para tu colegio
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Un proceso sencillo para AMPAs y centros</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos cuentas qué necesitas</h3>
              <p className="text-slate">Dinos qué prendas buscas (camisetas, sudaderas), las edades de los alumnos y envíanos el escudo o diseño.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Propuesta y montaje</h3>
              <p className="text-slate">Te enviamos un presupuesto detallado y un montaje digital para que lo apruebe la dirección o el AMPA.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producción y entrega</h3>
              <p className="text-slate">Producimos con tintas seguras y te enviamos el pedido completo directamente al centro escolar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes sobre ropa escolar</h2>
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
      <SectoresRelacionados currentSectorId="colegios" />
    </div>
    </>
  );
}
