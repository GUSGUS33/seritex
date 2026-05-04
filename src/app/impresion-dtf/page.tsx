import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impresión DTF Personalizada · Desde 1 ud · España',
  description: 'Servicio de impresión DTF textil. A todo color, sin límite de colores y desde 1 unidad. Envíos a toda España.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/impresion-dtf',
  },
};

import React from 'react';
import Image from 'next/image';
import { Check, X, Info } from 'lucide-react';

export default function ImpresionDtf() {
  

  

  return (
    <>
      <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Impresión DTF"
    }) }}
      />
        {/* B01 HERO */}
        <section 
          className="bg-cover bg-center relative py-20 md:py-32"
        >
          <Image src="https://picsum.photos/1400/700?random=21" alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-navy/80 z-0"></div>
          <div className="container-custom relative z-10 text-center">
            <div className="inline-block mb-6">
              <span className="badge badge-green bg-success-l text-success border border-success/20 px-4 py-2 text-sm font-bold">Sin mínimo · desde 1 ud</span>
            </div>
            <h1 className="text-white mb-6 max-w-4xl mx-auto">
              Impresión DTF: personalización textil desde 1 prenda
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
              La revolución digital. Diseños a todo color, calidad fotográfica y máxima versatilidad en cualquier tipo de tejido.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl mx-auto bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/presupuesto/?tecnica=dtf" className="btn btn-primary">Pedir presupuesto en 24h →</a>
            </div>
          </div>
        </section>

        {/* B02 SPECS */}
        <section className="py-8 bg-white border-b border-gray-mid">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">👕</div>
                <div className="font-bold text-ink">Desde 1 unidad</div>
                <div className="text-xs text-slate mt-1">Sin pedido mínimo</div>
              </div>
              <div className="p-4 border-l border-gray-mid">
                <div className="text-3xl mb-2">🌈</div>
                <div className="font-bold text-ink">Colores ilimitados</div>
                <div className="text-xs text-slate mt-1">Calidad fotográfica</div>
              </div>
              <div className="p-4 border-t md:border-t-0 md:border-l border-gray-mid">
                <div className="text-3xl mb-2">🌑</div>
                <div className="font-bold text-ink">Prendas oscuras</div>
                <div className="text-xs text-slate mt-1">Base blanca opaca</div>
              </div>
              <div className="p-4 border-t md:border-t-0 border-l border-gray-mid">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-bold text-ink">Entrega rápida</div>
                <div className="text-xs text-slate mt-1">Producción ágil</div>
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
                <div className="label-mono mb-2">La revolución digital</div>
                <h2 className="mb-6">¿Qué es la impresión DTF y cómo funciona?</h2>
                <div className="prose text-slate">
                  <p className="mb-4">
                    El DTF (Direct to Film) es la técnica de impresión digital que ha revolucionado la personalización textil en los últimos años. A diferencia de otras técnicas, el diseño no se imprime directamente sobre la prenda, sino sobre un film transparente especial.
                  </p>
                  <p className="mb-4">
                    El proceso consta de tres pasos: primero, impresoras de alta resolución imprimen el diseño a todo color sobre el film, añadiendo una capa final de tinta blanca. Segundo, se aplica un polvo adhesivo termofusible sobre la tinta húmeda y se cura en un horno. Tercero, este film (transfer) se aplica sobre la prenda mediante una plancha térmica profesional.
                  </p>
                  <p>
                    El resultado es un estampado de colores vibrantes, con una definición fotográfica increíble y una elasticidad sorprendente. Al no requerir pantallas ni preparación previa como la serigrafía, permite imprimir desde una sola unidad a un coste muy competitivo, sobre casi cualquier tipo de tejido (algodón, poliéster, nylon) y color de prenda.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/600x450/111111/FAFAF8?text=Proceso+impresi%C3%B3n+DTF" 
                  alt="Proceso de impresión DTF" 
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
              <h2 className="mb-4">Cuándo elegir (y cuándo no) el DTF</h2>
              <p className="text-slate max-w-2xl mx-auto">El DTF es increíblemente versátil, pero es importante conocer sus puntos fuertes y sus limitaciones frente a otras técnicas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Ventajas */}
              <div className="bg-success-l border border-success/20 rounded-2xl p-8">
                <h3 className="text-success flex items-center gap-2 mb-6 text-xl">
                  <Check size={24} /> Ventajas y cuándo usarla
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Sin pedido mínimo:</strong> Rentable desde la primera unidad al no tener costes fijos de preparación (pantallas).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Multicolor y fotográfico:</strong> Permite imprimir fotografías, degradados y diseños con infinitos colores sin coste extra.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Prendas oscuras:</strong> Gracias a su base de tinta blanca, los colores destacan perfectamente sobre fondos negros o muy oscuros.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Versatilidad de tejidos:</strong> Se adhiere a algodón, poliéster, mezclas, nylon e incluso cuero o madera.</span>
                  </li>
                </ul>
              </div>

              {/* Desventajas */}
              <div className="bg-warning-l border border-warning/20 rounded-2xl p-8">
                <h3 className="text-warning flex items-center gap-2 mb-6 text-xl">
                  <X size={24} /> Limitaciones y cuándo NO usarla
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Precio en grandes tiradas:</strong> Para pedidos de más de 50-100 unidades (con pocos colores), la serigrafía es mucho más económica.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Transpirabilidad:</strong> En diseños muy grandes y macizos (tipo bloque), el estampado puede sentirse un poco "plástico" y menos transpirable.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Colores Pantone exactos:</strong> Al ser impresión digital CMYK, no se pueden garantizar colores Pantone exactos como en la serigrafía.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* B05 COMPARATIVA VISUAL */}
        <section className="py-20 bg-navy text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="label-mono text-blue-400 mb-2">Comparativa</div>
              <h2 className="text-white mb-4">DTF vs Serigrafía</h2>
              <p className="text-white/70 max-w-2xl mx-auto">Las dos técnicas más populares frente a frente para que elijas la mejor opción.</p>
            </div>

            <div className="overflow-x-auto pb-6">
              <table className="w-full text-left border-collapse min-w-[600px] max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4 font-bold text-lg w-1/3">Característica</th>
                    <th className="p-4 font-bold text-lg text-success bg-white/5 rounded-t-lg w-1/3">Impresión DTF</th>
                    <th className="p-4 font-bold text-lg w-1/3">Serigrafía Textil</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Cantidad ideal</td>
                    <td className="p-4 bg-white/5 text-white font-bold">1 a 50 unidades</td>
                    <td className="p-4">+50 unidades</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Complejidad del diseño</td>
                    <td className="p-4 bg-white/5 text-success-l font-bold">Alta (Fotos, gradientes)</td>
                    <td className="p-4">Baja/Media (Colores planos)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Costes de preparación</td>
                    <td className="p-4 bg-white/5 text-success-l font-bold">Ninguno (0€)</td>
                    <td className="p-4">Altos (Pantallas y fotolitos)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Precio por unidad (tirada corta)</td>
                    <td className="p-4 bg-white/5 text-success-l font-bold">Bajo</td>
                    <td className="p-4">Muy alto</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Precio por unidad (tirada larga)</td>
                    <td className="p-4 bg-white/5">Medio</td>
                    <td className="p-4 text-white font-bold">Muy bajo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* B06 SECTORES */}
        <section className="py-20 bg-gray-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Sectores que aprovechan el DTF</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/sectores/serigrafia-marcas-ropa/" className="card p-6 no-underline text-ink group hover:border-blue">
                <div className="text-4xl mb-4">👕</div>
                <h3 className="text-lg mb-2 group-hover:text-blue transition-colors">Marcas Independientes</h3>
                <p className="text-sm text-slate mb-4">Ideal para lanzar colecciones cápsula o testear diseños sin stock.</p>
                <span className="text-blue font-semibold text-sm">Ver sector →</span>
              </a>
              <a href="/sectores/serigrafia-eventos/" className="card p-6 no-underline text-ink group hover:border-blue">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-lg mb-2 group-hover:text-blue transition-colors">Eventos Pequeños</h3>
                <p className="text-sm text-slate mb-4">Despedidas, cumpleaños o reuniones familiares desde 1 unidad.</p>
                <span className="text-blue font-semibold text-sm">Ver sector →</span>
              </a>
              <a href="/sectores/serigrafia-colegios/" className="card p-6 no-underline text-ink group hover:border-blue">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg mb-2 group-hover:text-blue transition-colors">Colegios</h3>
                <p className="text-sm text-slate mb-4">Mochilas, estuches y prendas difíciles de estampar con otras técnicas.</p>
                <span className="text-blue font-semibold text-sm">Ver sector →</span>
              </a>
              <a href="/sectores/serigrafia-asociaciones/" className="card p-6 no-underline text-ink group hover:border-blue">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg mb-2 group-hover:text-blue transition-colors">Asociaciones</h3>
                <p className="text-sm text-slate mb-4">Merchandising a todo color para pequeños grupos o peñas.</p>
                <span className="text-blue font-semibold text-sm">Ver sector →</span>
              </a>
            </div>
          </div>
        </section>

        {/* B07 GALERÍA */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="label-mono mb-2">Portfolio</div>
              <h2 className="mb-4">Trabajos recientes en DTF</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[38, 39, 40, 41, 42, 43, 44, 45].map((num) => (
                <div key={num} className="relative group overflow-hidden rounded-lg aspect-square">
                  <Image 
                    src={`https://picsum.photos/600/600?random=${num}`} 
                    alt={`Ejemplo impresión DTF ${num}`} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-sm tracking-wider uppercase border border-white/50 px-4 py-2 rounded">Ver detalle</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B08 CTA */}
        <section className="py-20 bg-blue text-white text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-white mb-6 text-3xl md:text-5xl">¿Necesitas menos de 10 unidades o un diseño multicolor?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10">
              El DTF es tu mejor opción. Pide presupuesto ahora y recibe una valoración exacta en menos de 24 horas.
            </p>
            <a href="/presupuesto/?tecnica=dtf" className="btn btn-primary shadow-xl text-lg px-10 py-4">
              Solicitar presupuesto gratis
            </a>
          </div>
        </section>

        {/* B09 FAQ */}
        <section className="py-20 bg-gray-light">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">Preguntas frecuentes sobre DTF</h2>
            </div>

            <div className="bg-white border border-gray-mid rounded-xl p-6 md:p-10">
              <details className="faq-details" open>
                <summary className="faq-summary">
                  ¿Qué es la impresión DTF?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  El DTF (Direct to Film) es una técnica de impresión digital donde el diseño se imprime sobre un film especial, se le aplica polvo adhesivo y luego se transfiere a la prenda mediante calor y presión.
                </div>
              </details>
              
              <details className="faq-details">
                <summary className="faq-summary">
                  ¿Cuál es la diferencia entre DTF y serigrafía?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  La principal diferencia es que el DTF es digital, lo que permite imprimir a todo color (fotografías, degradados) sin costes de preparación (pantallas), siendo ideal para tiradas cortas o desde 1 unidad. La serigrafía requiere pantallas por color y es más rentable para grandes cantidades.
                </div>
              </details>

              <details className="faq-details">
                <summary className="faq-summary">
                  ¿Desde cuántas unidades puedo hacer un pedido?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  Con la técnica DTF no hay pedido mínimo. Puedes personalizar desde 1 sola prenda con un diseño a todo color a un precio muy competitivo.
                </div>
              </details>

              <details className="faq-details">
                <summary className="faq-summary">
                  ¿Qué tipo de prendas admite el DTF?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  El DTF es extremadamente versátil. Se puede aplicar sobre algodón, poliéster, mezclas, nylon, cuero y casi cualquier tejido, tanto en prendas claras como oscuras, gracias a su base de tinta blanca.
                </div>
              </details>

              <details className="faq-details" style={{ borderBottom: 'none' }}>
                <summary className="faq-summary">
                  ¿Cómo debo enviar el diseño?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  Para DTF, necesitamos el diseño en formato PNG con fondo transparente, a tamaño real de impresión y con una resolución mínima de 300 ppp para garantizar la máxima calidad y nitidez.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* B10 INTERLINKING */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Otras técnicas de personalización</h2>
              <p className="text-slate max-w-2xl mx-auto">Si el DTF no es lo que buscas, descubre nuestras otras opciones profesionales.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/serigrafia-textil/" className="card flex flex-col no-underline text-ink group overflow-hidden">
                <div className="relative w-full aspect-[2/1]">
                  <Image src="https://placehold.co/400x200/111111/FAFAF8?text=Serigraf%C3%ADa+textil" alt="Serigrafía textil" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4"><span className="badge badge-blue">★ Técnica estrella</span></div>
                  <h3 className="text-lg mb-2">Serigrafía Textil</h3>
                  <p className="text-sm text-slate mb-6 flex-1">Máxima durabilidad y colores vivos. Ideal para tiradas medias y altas desde 10 unidades.</p>
                  <span className="text-blue font-semibold text-sm group-hover:underline">Ver detalles →</span>
                </div>
              </a>

              <a href="/bordado-personalizado/" className="card flex flex-col no-underline text-ink group overflow-hidden">
                <div className="relative w-full aspect-[2/1]">
                  <Image src="https://placehold.co/400x200/111111/FAFAF8?text=Bordado+personalizado" alt="Bordado personalizado" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4"><span className="badge badge-green">Acabado premium</span></div>
                  <h3 className="text-lg mb-2">Bordado</h3>
                  <p className="text-sm text-slate mb-6 flex-1">Elegancia y resistencia insuperable. La opción preferida para ropa corporativa y uniformes de alta gama.</p>
                  <span className="text-blue font-semibold text-sm group-hover:underline">Ver detalles →</span>
                </div>
              </a>

              <a href="/vinilo-textil/" className="card flex flex-col no-underline text-ink group overflow-hidden">
                <div className="relative w-full aspect-[2/1]">
                  <Image src="https://placehold.co/400x200/111111/FAFAF8?text=Vinilo+textil" alt="Vinilo textil" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4"><span className="badge badge-neutro">Nombres y números</span></div>
                  <h3 className="text-lg mb-2">Vinilo Textil</h3>
                  <p className="text-sm text-slate mb-6 flex-1">Corte preciso para personalización individual. Ideal para equipaciones deportivas y textos simples.</p>
                  <span className="text-blue font-semibold text-sm group-hover:underline">Ver detalles →</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
