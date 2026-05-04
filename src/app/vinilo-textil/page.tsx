import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vinilo Textil Personalizado · Desde 1 ud · España',
  description: 'Personalización con vinilo textil. Ideal para nombres, números y diseños sencillos desde 1 unidad.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/vinilo-textil',
  },
};

import React from 'react';
import Image from 'next/image';
import { Check, X, Info } from 'lucide-react';
import Link from 'next/link';

export default function ViniloTextil() {
  

  

  const faqs = [
    {
      name: "¿Cuál es el pedido mínimo para vinilo textil?",
      acceptedAnswer: { text: "El vinilo textil es la única técnica que permite pedidos desde 1 sola unidad. Es ideal para personalizaciones individuales." }
    },
    {
      name: "¿Qué tipo de diseños se pueden hacer?",
      acceptedAnswer: { text: "El vinilo es perfecto para diseños de colores planos y sólidos: textos, números, siluetas y logotipos sencillos a 1 o 2 colores. No se pueden imprimir fotografías ni degradados." }
    },
    {
      name: "¿Cuánto dura el vinilo en la prenda?",
      acceptedAnswer: { text: "Utilizamos vinilo de poliuretano de alta calidad. Con los cuidados adecuados (lavar del revés, máximo 30º, no usar secadora ni planchar directamente sobre el diseño), el vinilo durará tanto como la propia prenda." }
    },
    {
      name: "¿Se nota al tacto?",
      acceptedAnswer: { text: "Sí, el vinilo textil tiene un ligero relieve al tacto, ya que es una capa de material adherida sobre el tejido. Sin embargo, los vinilos modernos son muy finos y flexibles, integrándose muy bien en la prenda." }
    },
    {
      name: "¿En qué prendas se puede aplicar?",
      acceptedAnswer: { text: "Se puede aplicar en casi cualquier tejido: algodón, poliéster, mezclas e incluso nylon (con vinilos especiales). Es muy popular en camisetas, sudaderas, equipaciones deportivas y mochilas." }
    }
  ];

  return (
    <>
      <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.acceptedAnswer.text
        }
      }))
    }) }}
      />
        {/* B01 HERO */}
        <section 
          className="bg-cover bg-center relative py-20 md:py-32"
          style={{ backgroundImage: 'url("https://picsum.photos/1400/700?random=23")' }}
        >
          <div className="absolute inset-0 bg-navy/80 z-0"></div>
          <div className="container-custom relative z-10 text-center">
            <div className="inline-block mb-6">
              <span className="badge badge-green bg-success text-white border border-white/20 px-4 py-2 text-sm">★ Desde 1 unidad</span>
            </div>
            <h1 className="text-white mb-6 max-w-4xl mx-auto">
              Vinilo textil: personalización con nombres y números desde 1 unidad
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
              La técnica perfecta para equipaciones deportivas, despedidas y diseños de colores planos sin pedido mínimo.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl mx-auto bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/presupuesto/?tecnica=vinilo" className="btn btn-primary">Pedir presupuesto en 24h →</Link>
            </div>
          </div>
        </section>

        {/* B02 SPECS */}
        <section className="py-8 bg-white border-b border-gray-mid">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">📦</div>
                <div className="font-bold text-ink">Desde 1 ud</div>
                <div className="text-xs text-slate mt-1">Sin pedido mínimo</div>
              </div>
              <div className="p-4 border-l border-gray-mid">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-bold text-ink">1-3 colores</div>
                <div className="text-xs text-slate mt-1">Colores planos</div>
              </div>
              <div className="p-4 border-t md:border-t-0 md:border-l border-gray-mid">
                <div className="text-3xl mb-2">✂️</div>
                <div className="font-bold text-ink">Corte preciso</div>
                <div className="text-xs text-slate mt-1">Acabado nítido y opaco</div>
              </div>
              <div className="p-4 border-t md:border-t-0 border-l border-gray-mid">
                <div className="text-3xl mb-2">⚽</div>
                <div className="font-bold text-ink">Ideal deportes</div>
                <div className="text-xs text-slate mt-1">Nombres y números</div>
              </div>
              <div className="p-4 border-t md:border-t-0 md:border-l border-gray-mid col-span-2 md:col-span-1">
                <div className="text-3xl mb-2">💻</div>
                <div className="font-bold text-ink">100% online</div>
                <div className="text-xs text-slate mt-1">Sin llamadas</div>
              </div>
            </div>
          </div>
        </section>

        {/* B03 ¿QUÉ ES? */}
        <section className="py-20 bg-gray-light">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="label-mono mb-2">Precisión y opacidad</div>
                <h2 className="mb-6">¿Qué es el vinilo textil y cómo funciona?</h2>
                <div className="prose text-slate">
                  <p className="mb-4">
                    El vinilo textil es una técnica de estampación que utiliza bobinas de material termoadhesivo de colores sólidos. Un plóter de corte traza el diseño (vectorial) sobre el vinilo. Posteriormente, se retira manualmente el material sobrante (proceso conocido como "pelado") y el diseño resultante se transfiere a la prenda mediante una plancha térmica industrial.
                  </p>
                  <p className="mb-4">
                    A diferencia de la <Link href="/serigrafia-textil/" className="text-blue hover:underline">Serigrafía Textil</Link> o la <Link href="/impresion-dtf/" className="text-blue hover:underline">Impresión DTF</Link>, el vinilo no utiliza tintas líquidas. Esto garantiza una opacidad total, incluso en prendas oscuras, y permite acabados especiales como flúor, metalizados o reflectantes.
                  </p>
                  <p>
                    Es la técnica estrella para la personalización individual. Si necesitas poner un nombre y un número distinto en cada camiseta, el vinilo es la opción más rápida y económica. Si buscas un acabado con relieve y máxima resistencia para uniformes, te recomendamos explorar el <Link href="/bordado-personalizado/" className="text-blue hover:underline">Bordado Personalizado</Link>.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/600x450/111111/FAFAF8?text=Proceso+vinilo+textil" 
                  alt="Proceso de vinilo textil" 
                  fill
                  className="object-cover rounded-2xl shadow-lg border border-gray-mid"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* B04 VENTAJAS Y DESVENTAJAS */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Cuándo elegir (y cuándo no) el vinilo textil</h2>
              <p className="text-slate max-w-2xl mx-auto">Te hablamos claro. El vinilo es imbatible para ciertos usos, pero tiene limitaciones técnicas importantes en diseños complejos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Ventajas */}
              <div className="bg-success-l border border-success/20 rounded-2xl p-8">
                <h3 className="text-success flex items-center gap-2 mb-6 text-xl">
                  <Check size={24} /> Ventajas y cuándo usarlo
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Personalización individual:</strong> Perfecto para dorsales, nombres y variaciones en cada prenda sin coste extra de pantallas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Desde 1 unidad:</strong> Al no requerir preparación compleja, es muy rentable para pedidos pequeños o unidades sueltas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Opacidad perfecta:</strong> Los colores son 100% sólidos y cubrientes, destacando perfectamente sobre prendas oscuras.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Acabados especiales:</strong> Permite usar vinilos reflectantes, dorados, plateados, flúor o aterciopelados (flock).</span>
                  </li>
                </ul>
              </div>

              {/* Desventajas */}
              <div className="bg-warning-l border border-warning/20 rounded-2xl p-8">
                <h3 className="text-warning flex items-center gap-2 mb-6 text-xl">
                  <X size={24} /> Limitaciones y cuándo NO usarlo
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Sin degradados:</strong> Solo admite colores planos. No se pueden imprimir fotografías ni sombras.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Detalles minúsculos:</strong> Las líneas muy finas (menos de 2mm) o textos muy pequeños son imposibles de pelar y fijar correctamente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Transpirabilidad:</strong> Es un material plástico. En diseños muy grandes (bloques sólidos), la prenda no transpirará en esa zona.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Tiradas largas:</strong> Para más de 50 prendas con el mismo diseño, la serigrafía es mucho más económica y rápida.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* B05 SECTORES Y PRECIOS */}
        <section className="py-20 bg-gray-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Sectores ideales para el Vinilo Textil</h2>
              <p className="text-slate max-w-2xl mx-auto">Por sus características únicas, esta técnica es la solución preferida en multitud de ámbitos donde la personalización individual es clave.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <Link href="/sectores/serigrafia-deportes/" className="bg-white p-6 rounded-2xl border border-gray-mid shadow-sm hover:border-blue transition-colors group">
                <div className="text-3xl mb-4">⚽</div>
                <h3 className="text-lg text-navy font-bold mb-2 group-hover:text-blue">Clubs Deportivos</h3>
                <p className="text-slate text-sm">
                  Dorsales, nombres de jugadores y escudos a un color en equipaciones técnicas.
                </p>
              </Link>
              <Link href="/sectores/serigrafia-colegios/" className="bg-white p-6 rounded-2xl border border-gray-mid shadow-sm hover:border-blue transition-colors group">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-lg text-navy font-bold mb-2 group-hover:text-blue">Colegios</h3>
                <p className="text-slate text-sm">
                  Nombres de alumnos en babis, mochilas y camisetas de excursión o fin de curso.
                </p>
              </Link>
              <Link href="/sectores/serigrafia-eventos/" className="bg-white p-6 rounded-2xl border border-gray-mid shadow-sm hover:border-blue transition-colors group">
                <div className="text-3xl mb-4">🎪</div>
                <h3 className="text-lg text-navy font-bold mb-2 group-hover:text-blue">Eventos y Despedidas</h3>
                <p className="text-slate text-sm">
                  Camisetas con frases personalizadas, apodos o roles ("El Novio", "Staff") para grupos.
                </p>
              </Link>
              <Link href="/sectores/serigrafia-asociaciones/" className="bg-white p-6 rounded-2xl border border-gray-mid shadow-sm hover:border-blue transition-colors group">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg text-navy font-bold mb-2 group-hover:text-blue">Asociaciones</h3>
                <p className="text-slate text-sm">
                  Identificación de voluntarios, peñas festivas y agrupaciones culturales.
                </p>
              </Link>
            </div>

            <div className="bg-blue-l border border-blue/20 rounded-2xl p-6 max-w-3xl mx-auto flex items-start gap-4">
              <Info className="text-blue shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-navy mb-1">¿Cómo se calcula el precio?</h4>
                <p className="text-sm text-slate">
                  El coste del vinilo textil depende de los <strong>centímetros cuadrados de material</strong> utilizado y del <strong>tiempo de pelado</strong> (diseños con muchos huecos pequeños tardan más en prepararse). No hay costes fijos de pantallas, por lo que es ideal para unidades sueltas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B06 FAQ */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">Preguntas frecuentes sobre vinilo textil</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-gray-mid rounded-lg bg-white overflow-hidden">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-5 text-navy hover:bg-gray-light transition-colors">
                    {faq.name}
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-slate p-5 pt-0 border-t border-gray-mid mt-2">
                    <p>{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* B07 CTA */}
        <section className="py-20 bg-navy text-white text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-white mb-6">¿Necesitas personalizar prendas con nombres o números?</h2>
            <p className="text-white/80 text-lg mb-8">
              Cuéntanos tu idea y te prepararemos un presupuesto personalizado sin compromiso en menos de 24 horas. ¡Desde 1 unidad!
            </p>
            <Link href="/presupuesto/?tecnica=vinilo" className="btn btn-primary text-lg px-8 py-4">
              Solicitar presupuesto ahora
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
