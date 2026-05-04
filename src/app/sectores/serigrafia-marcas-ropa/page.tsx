import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía para Marcas de Ropa · Presupuesto 24h',
  description: 'Especialistas en serigrafía textil y ropa personalizada para Marcas de Ropa. Calidad profesional y entrega rápida.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/sectores/serigrafia-marcas-ropa',
  },
};

import React from 'react';
import Image from 'next/image';
import SectoresRelacionados from '@/components/SectoresRelacionados';
import { Check, ChevronRight, Rocket, Palette, ShieldCheck, Clock, ArrowRight, MessageSquare, PackageCheck, Lightbulb } from 'lucide-react';

const SECTOR = "Marcas de Ropa";
const SECTOR_SINGULAR = "marca";
const KW = "fabricar ropa marca propia";
const TECNICA_REC = "DTF y Serigrafía";
const RANDOM_HERO = 42;

export default function SerigrafiaMarcasRopa() {
  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Puedo empezar con pocas unidades para probar si funciona mi diseño?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, gracias a la técnica DTF puedes empezar con tan solo 1 unidad. Esto te permite testear el mercado o lanzar ediciones limitadas sin riesgo de stock."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecéis etiquetado personalizado con mi marca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, disponemos de servicios de personalización de etiquetas de cuello (impresas o tejidas) y etiquetas exteriores para que tu marca luzca 100% profesional."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué gramaje de camiseta recomendáis para una marca premium?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para marcas de streetwear premium recomendamos gramajes de entre 180g y 240g (Heavyweight). Aportan un 'fit' más estructurado y una mayor durabilidad percibida."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo pedir muestras antes de hacer la tirada completa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, recomendamos pedir una muestra en DTF para validar el diseño, colores y posición antes de pasar a una producción mayor en serigrafía."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis ayudarme si no tengo el diseño listo en alta calidad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro equipo de diseño puede ayudarte a vectorizar tus logos o adaptar tus archivos para que el resultado de impresión sea óptimo para tu marca."
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
      "name": "Serigrafía para Marcas de Ropa"
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
              Desde 1 unidad con DTF
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              Crea tu marca de ropa con serigrafía profesional: de la idea al producto
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-2xl">
              Fabricamos tu colección con la calidad que tu marca merece. Sin mínimos con DTF.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/presupuesto/?sector=marcas-ropa" 
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
              <Rocket className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">DTF 1 ud</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Sin mínimos para empezar</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Palette className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Serigrafía</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Desde 10 uds para escalar</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <ShieldCheck className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Etiquetado</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Personalización total</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Lightbulb className="text-blue mb-2" size={32} />
              <span className="text-2xl font-bold text-navy">Asesoría</span>
              <span className="text-sm text-slate uppercase tracking-wide font-medium">Apoyo experto incluido</span>
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
                Montar una marca de ropa ya no requiere grandes inversiones
              </h2>
              <div className="prose prose-lg text-slate max-w-none">
                <p>
                  El ecosistema de las marcas de ropa <strong>indie</strong> y el <strong>streetwear</strong> ha cambiado radicalmente. Ya no es necesario fabricar miles de unidades para lanzar tu primer <strong>drop</strong>. Hoy en día, la clave está en la agilidad y la <strong>calidad de producto</strong>.
                </p>
                <p>
                  Muchos creadores cometen el error de pedir grandes volúmenes sin testear sus diseños. Nosotros proponemos un camino más inteligente: empezar con <strong>DTF</strong> para <strong>tiradas</strong> cortas o incluso unidades sueltas. Esto te permite validar el <strong>fit</strong> de la prenda, el <strong>gramaje</strong> y el <strong>tacto</strong> de la impresión sin riesgo financiero.
                </p>
                <p>
                  Una vez que tu diseño tiene tracción, el paso natural es escalar a la <strong>serigrafía</strong> para producciones de mayor volumen, donde el coste por unidad se reduce drásticamente manteniendo un acabado profesional.
                </p>
                <p>
                  Entendemos que tu <strong>colección</strong> es tu visión artística. Por eso, no solo imprimimos; te asesoramos sobre qué prendas elegir (desde camisetas básicas hasta <strong>heavyweight tees</strong> premium) para que tu marca se posicione donde tú quieres.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-4 bg-blue/10 rounded-2xl -rotate-2"></div>
                <Image
                  src="https://placehold.co/600x450/0F2547/FFFFFF?text=Colección+streetwear+personalizada"
                  alt="Colección streetwear personalizada"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Básicos para tu próxima colección</h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">Prendas seleccionadas por su calidad y durabilidad.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Heavyweight Tees", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Heavyweight+Tees" },
              { title: "Hoodies (Oversized)", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Hoodies" },
              { title: "Crewnecks", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Crewnecks" },
              { title: "Gorras 5 panel", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=5+Panel+Caps" },
              { title: "Tote bags premium", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Tote+bags" },
              { title: "Calcetines personalizados", img: "https://placehold.co/400x300/1B4F9E/FFFFFF?text=Calcetines" }
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">DTF vs Serigrafía: ¿Qué elegir para tu marca?</h2>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-mid shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-4 font-bold">Característica</th>
                  <th className="p-4 font-bold">DTF (Direct to Film)</th>
                  <th className="p-4 font-bold">Serigrafía Tradicional</th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-b border-gray-mid">
                  <td className="p-4 font-bold text-navy">Pedido Mínimo</td>
                  <td className="p-4">Desde 1 unidad</td>
                  <td className="p-4">Desde 10 unidades</td>
                </tr>
                <tr className="border-b border-gray-mid bg-gray-light/30">
                  <td className="p-4 font-bold text-navy">Colores</td>
                  <td className="p-4">Ilimitados (Fotográfico)</td>
                  <td className="p-4">Limitados (Por pantallas)</td>
                </tr>
                <tr className="border-b border-gray-mid">
                  <td className="p-4 font-bold text-navy">Coste Inicial</td>
                  <td className="p-4">Bajo (Sin pantallas)</td>
                  <td className="p-4">Medio (Coste de pantallas)</td>
                </tr>
                <tr className="border-b border-gray-mid bg-gray-light/30">
                  <td className="p-4 font-bold text-navy">Ideal para...</td>
                  <td className="p-4">Muestras y drops cortos</td>
                  <td className="p-4">Colecciones y volumen</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate mb-6">Para marcas nuevas: DTF sin mínimo para probar diseños. Para colecciones: Serigrafía desde 10 uds con mejor precio/unidad.</p>
          </div>
        </div>
      </section>

      {/* B06 GALERÍA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Marcas que hemos ayudado a lanzar</h2>
            <p className="text-xl text-slate">De la habitación al mercado global.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[70, 71, 72, 73, 74, 75].map((id, idx) => (
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
                  <span className="text-blue font-bold uppercase tracking-widest text-xs mb-2">MARCA INDIE</span>
                  <span className="text-white font-display text-xl font-bold">
                    {idx === 0 ? "Urban Soul" : idx === 1 ? "Neo Vintage" : idx === 2 ? "Minimalist Co" : idx === 3 ? "Street Vision" : idx === 4 ? "Eco Wear" : "Future Past"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Tienes un diseño en mente? Cuéntanos tu proyecto</h2>
          <a 
            href="/presupuesto/?sector=marcas-ropa" 
            className="inline-block bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-d transition-all shadow-xl"
          >
            Empezar mi marca ahora
          </a>
        </div>
      </section>

      {/* B08 PROCESO */}
      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Tu marca, paso a paso</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Palette size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">1. Compartes tu concepto</h3>
              <p className="text-slate">Analizamos tus diseños y el estilo que buscas para tu marca (streetwear, minimal, etc.).</p>
            </div>
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6 relative z-10">
                <Lightbulb size={32} />
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-mid z-0"></div>
              <h3 className="text-xl font-bold text-navy">2. Te asesoramos</h3>
              <p className="text-slate">Elegimos juntos la técnica (DTF o Serigrafía), la prenda y el gramaje ideal para tu posicionamiento.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto text-blue mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">3. Producimos tu colección</h3>
              <p className="text-slate">Pasamos a producción con acabados profesionales y etiquetas personalizadas. ¡Lista para vender!</p>
            </div>
          </div>
        </div>
      </section>

      {/* B09 FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Preguntas frecuentes para marcas</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "¿Puedo empezar con pocas unidades para probar si funciona mi diseño?", a: "Sí, gracias a la técnica DTF puedes empezar con tan solo 1 unidad. Esto te permite testear el mercado o lanzar ediciones limitadas sin riesgo de stock." },
              { q: "¿Ofrecéis etiquetado personalizado con mi marca?", a: "Sí, disponemos de servicios de personalización de etiquetas de cuello (impresas o tejidas) y etiquetas exteriores para que tu marca luzca 100% profesional." },
              { q: "¿Qué gramaje de camiseta recomendáis para una marca premium?", a: "Para marcas de streetwear premium recomendamos gramajes de entre 180g y 240g (Heavyweight). Aportan un 'fit' más estructurado y una mayor durabilidad percibida." },
              { q: "¿Puedo pedir muestras antes de hacer la tirada completa?", a: "Sí, recomendamos pedir una muestra en DTF para validar el diseño, colores y posición antes de pasar a una producción mayor en serigrafía." },
              { q: "¿Podéis ayudarme si no tengo el diseño listo en alta calidad?", a: "Nuestro equipo de diseño puede ayudarte a vectorizar tus logos o adaptar tus archivos para que el resultado de impresión sea óptimo para tu marca." }
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
      <SectoresRelacionados currentSectorId="marcas" />
    </div>
    </>
  );
}
