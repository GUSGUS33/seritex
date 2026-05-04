import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Empresas · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Empresas. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-empresas',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, Building2, Users, Truck, ShieldCheck, ArrowRight, MessageSquare, Clock, PackageCheck } from 'lucide-react';

const SECTOR = "Empresas";
const SECTOR_SINGULAR = "empresa";
const KW = "ropa personalizada empresas";
const TECNICA_REC = "Serigrafía y Bordado";
const RANDOM_HERO = 40;

export default function SerigrafiaEmpresas() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Puedo pedir diferentes tallas para mi equipo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, por supuesto. Puedes combinar las tallas que necesites dentro de un mismo pedido sin coste adicional, siempre que el diseño y la técnica de personalización sean los mismos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis replicar el Pantone exacto de mi logo corporativo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En serigrafía textil trabajamos con el sistema de color Pantone Matching System (PMS) para asegurar que la identidad visual de tu empresa se respete al máximo en cada prenda."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué mínimo de uniformes necesito pedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro pedido mínimo para empresas es de tan solo 10 unidades. Esto permite a pequeñas empresas o departamentos específicos realizar pedidos sin necesidad de grandes stocks."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecéis descuentos para pedidos grandes de empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, disponemos de una escala de precios por volumen. Cuanto mayor sea la cantidad de prendas, menor será el coste unitario de la personalización."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podemos hacer pedidos recurrentes con las mismas condiciones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Guardamos tus diseños y especificaciones técnicas para que las reposiciones de uniformes o nuevos pedidos de merchandising mantengan la misma calidad y precio acordado."
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
      "name": "Serigrafía para Empresas"
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
            <span className="inline-block bg-blue px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Especialistas en B2B
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Serigrafía para Empresas y Ropa Laboral Personalizada
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Viste a tu equipo con ropa corporativa de alta calidad. Uniformes, ropa de trabajo y merchandising para potenciar tu imagen de marca.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=empresas" 
                className="bg-orange hover:bg-orange-d text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange/20"
              >
                Solicitar presupuesto para mi empresa <ChevronRight size={20} />
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
              <Building2 className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">+500</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Empresas clientes</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Desde 10</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Unidades por pedido</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Truck className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">España</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Entrega en toda la península</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <ShieldCheck className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Personalizado</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Asesoramiento experto</span>
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
                ¿Por qué la ropa de empresa dice más de lo que crees?
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  En el entorno <strong>corporativo</strong> actual, la <strong>identidad visual</strong> es uno de los activos más valiosos de cualquier organización. No se trata solo de vestir a los empleados; se trata de proyectar una <strong>imagen de marca</strong> coherente y profesional que genere confianza instantánea en el cliente.
                </p>
                <p>
                  Un <strong>uniforme</strong> bien diseñado y personalizado con el <strong>logotipo</strong> de la empresa actúa como una tarjeta de visita andante. Es la primera impresión que recibe un cliente potencial y, como bien sabemos, solo hay una oportunidad para causar esa primera impresión. La <strong>ropa personalizada para empresas</strong> eleva la percepción de profesionalidad y seriedad de tus servicios.
                </p>
                <p>
                  Además del impacto externo, existe un beneficio interno fundamental: la <strong>cohesión de equipo</strong>. Cuando los trabajadores visten los colores y el emblema de su compañía, se fomenta un sentimiento de pertenencia y orgullo. Esto no solo mejora el ambiente laboral, sino que alinea a todo el personal bajo una misma misión y valores.
                </p>
                <p>
                  Sabemos que los departamentos de compras y recursos humanos necesitan soluciones ágiles. Por eso, hemos diseñado un proceso <strong>100% online</strong> que ahorra tiempo: sin reuniones innecesarias, sin llamadas interminables. Obtén tu presupuesto, aprueba el diseño y recibe tu pedido de forma rápida y eficiente, garantizando siempre la máxima durabilidad en cada prenda.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Uniformes+corporativos+con+logo"
                  alt="Uniformes corporativos con logo"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B04 PRENDAS MÁS SOLICITADAS */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prendas más solicitadas por empresas</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Selección de básicos premium para tu identidad corporativa.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Polos", img: "https://placehold.co/300x400/1B4F9E/FFFFFF?text=Polos" },
              { title: "Camisas", img: "https://placehold.co/300x400/1B4F9E/FFFFFF?text=Camisas" },
              { title: "Sudaderas", img: "https://placehold.co/300x400/1B4F9E/FFFFFF?text=Sudaderas" },
              { title: "Softshells", img: "https://placehold.co/300x400/1B4F9E/FFFFFF?text=Softshells" },
              { title: "Alta visibilidad", img: "https://placehold.co/300x400/1B4F9E/FFFFFF?text=Alta+visibilidad" },
              { title: "Tote bags", img: "https://placehold.co/300x400/1B4F9E/FFFFFF?text=Tote+bags" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-mid">
                <div className="aspect-[3/4] overflow-hidden">
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

      {/* B05 TÉCNICA RECOMENDADA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-navy rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Técnica recomendada para el sector {SECTOR}</h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Para empresas recomendamos <strong>Serigrafía</strong> para tiradas medias/grandes por su excelente relación calidad-precio, y <strong>Bordado</strong> para prendas premium como polos o camisas, aportando una distinción superior y máxima durabilidad.
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
                <div className="w-48 h-48 bg-blue rounded-full flex items-center justify-center shadow-2xl shadow-blue/50 rotate-12">
                  <span className="text-6xl font-black">TOP</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Trabajos realizados para empresas</h2>
            <p className="text-xl text-slate">Calidad real para clientes reales.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[50, 51, 52, 53, 54, 55].map((id) => (
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
                  <span className="text-blue font-bold uppercase tracking-widest text-xs mb-2">{SECTOR}</span>
                  <span className="text-white font-display text-xl font-bold">Prenda Corporativa</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-slate mb-6">¿Quieres algo así para tu empresa?</p>
            <a href="/presupuesto/?sector=empresas" className="inline-flex items-center gap-2 text-blue font-bold text-xl hover:gap-4 transition-all">
              Cuéntanos tu proyecto <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* B07 CTA MID */}
      <section className="py-16 bg-blue">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Necesitas ropa corporativa para tu equipo?</h2>
          <a 
            href="/presupuesto/?sector=empresas" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Solicitar presupuesto personalizado
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Cómo trabajamos con tu empresa</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <MessageSquare size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Nos cuentas tu proyecto</h3>
              <p className="text-slate">Analizamos tus necesidades de uniformidad o merchandising y te asesoramos sobre prendas y técnicas.</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Clock size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Diseñamos y presupuestamos</h3>
              <p className="text-slate">Recibes una propuesta detallada y un montaje digital de cómo quedará tu logo en menos de 24h.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producimos y entregamos</h3>
              <p className="text-slate">Una vez aprobado, pasamos a producción con controles de calidad y enviamos a tu sede en tiempo récord.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes para empresas</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "¿Puedo pedir diferentes tallas para mi equipo?", a: "Sí, por supuesto. Puedes combinar las tallas que necesites dentro de un mismo pedido sin coste adicional, siempre que el diseño y la técnica de personalización sean los mismos." },
              { q: "¿Podéis replicar el Pantone exacto de mi logo corporativo?", a: "En serigrafía textil trabajamos con el sistema de color Pantone Matching System (PMS) para asegurar que la identidad visual de tu empresa se respete al máximo en cada prenda." },
              { q: "¿Qué mínimo de uniformes necesito pedir?", a: "Nuestro pedido mínimo para empresas es de tan solo 10 unidades. Esto permite a pequeñas empresas o departamentos específicos realizar pedidos sin necesidad de grandes stocks." },
              { q: "¿Ofrecéis descuentos para pedidos grandes de empresa?", a: "Sí, disponemos de una escala de precios por volumen. Cuanto mayor sea la cantidad de prendas, menor será el coste unitario de la personalización." },
              { q: "¿Podemos hacer pedidos recurrentes con las mismas condiciones?", a: "Absolutamente. Guardamos tus diseños y especificaciones técnicas para que las reposiciones de uniformes o nuevos pedidos de merchandising mantengan la misma calidad y precio acordado." }
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
      <SectoresRelacionados currentSectorId="empresas" />
    </div>
    </>
  );
}
