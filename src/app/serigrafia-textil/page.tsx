import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serigrafía Personalizada · Desde 10 uds · España',
  description: 'Servicio profesional de serigrafía textil. Alta calidad, durabilidad y los mejores precios para pedidos a partir de 10 unidades.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/serigrafia-textil',
  },
};

import React from 'react';
import Image from 'next/image';
import { Check, X, Info } from 'lucide-react';

export default function SerigrafiaTextil() {
  

  

  return (
    <>
      <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Serigrafía Textil"
    }) }}
      />
        {/* B01 HERO */}
        <section 
          className="bg-cover bg-center relative py-20 md:py-32"
        >
          <Image
            src="https://picsum.photos/1400/700?random=20"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/80 z-0"></div>
          <div className="container-custom relative z-10 text-center">
            <div className="inline-block mb-6">
              <span className="badge badge-blue bg-blue text-white border border-white/20 px-4 py-2 text-sm">★ Técnica estrella</span>
            </div>
            <h1 className="text-white mb-6 max-w-4xl mx-auto">
              Serigrafía textil: servicio profesional para empresas y marcas
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
              La técnica reina de la personalización. Máxima durabilidad, colores vibrantes y el mejor precio para tiradas medias y grandes.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl mx-auto bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/presupuesto/?tecnica=serigrafia" className="btn btn-primary">Pedir presupuesto en 24h →</a>
            </div>
          </div>
        </section>

        {/* B02 SPECS */}
        <section className="py-8 bg-white border-b border-gray-mid">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">📦</div>
                <div className="font-bold text-ink">Desde 10 uds</div>
                <div className="text-xs text-slate mt-1">Pedido mínimo</div>
              </div>
              <div className="p-4 border-l border-gray-mid">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-bold text-ink">Hasta 6 colores</div>
                <div className="text-xs text-slate mt-1">Colores planos (Pantone)</div>
              </div>
              <div className="p-4 border-t md:border-t-0 md:border-l border-gray-mid">
                <div className="text-3xl mb-2">👕</div>
                <div className="font-bold text-ink">Todos los tejidos</div>
                <div className="text-xs text-slate mt-1">Algodón, poliéster, mezclas</div>
              </div>
              <div className="p-4 border-t md:border-t-0 border-l border-gray-mid">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="font-bold text-ink">7-10 días</div>
                <div className="text-xs text-slate mt-1">Plazo de entrega estándar</div>
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
                <div className="label-mono mb-2">La técnica tradicional</div>
                <h2 className="mb-6">¿Qué es la serigrafía textil y cómo funciona?</h2>
                <div className="prose text-slate">
                  <p className="mb-4">
                    La serigrafía textil es una técnica de impresión milenaria que consiste en transferir tinta a través de una malla tensada en un marco (pantalla). Para cada color del diseño, se necesita una pantalla diferente, donde las áreas que no deben imprimirse se bloquean con una emulsión fotosensible.
                  </p>
                  <p className="mb-4">
                    Una vez preparadas las pantallas, la tinta se presiona a través de la malla abierta utilizando una racleta, depositándose directamente sobre las fibras de la prenda. Finalmente, la tinta se cura en un horno a alta temperatura para garantizar su fijación permanente.
                  </p>
                  <p>
                    Este proceso artesanal, combinado con maquinaria moderna, permite aplicar capas gruesas de tinta que penetran en el tejido, resultando en estampados de colores extremadamente vivos, opacos y con una durabilidad que ninguna otra técnica puede igualar. Es el estándar de oro para marcas de ropa, merchandising de bandas y uniformes corporativos que requieren resistencia al lavado intensivo.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/600x450/111111/FAFAF8?text=Proceso+serigraf%C3%ADa+textil" 
                  alt="Proceso de serigrafía textil" 
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
              <h2 className="mb-4">Cuándo elegir (y cuándo no) la serigrafía</h2>
              <p className="text-slate max-w-2xl mx-auto">Te hablamos claro. La serigrafía es increíble, pero no es la solución mágica para absolutamente todos los proyectos.</p>
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
                    <span className="text-charcoal"><strong>Durabilidad extrema:</strong> La tinta se funde con el tejido, resistiendo cientos de lavados sin agrietarse.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Tiradas medias y grandes:</strong> A partir de 50 unidades, el precio por prenda cae drásticamente, siendo la opción más económica.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Colores Pantone exactos:</strong> Podemos replicar el color corporativo exacto de tu marca mezclando tintas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Acabado profesional:</strong> El tacto y la integración con la prenda es el estándar de la industria de la moda.</span>
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
                    <span className="text-charcoal"><strong>Pocas unidades:</strong> Por debajo de 10 unidades, los costes de preparación (pantallas y fotolitos) hacen que sea muy caro.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Fotografías o degradados:</strong> No es apta para diseños a todo color, fotos o gradientes complejos (para esto usamos DTF).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Diseños con muchos colores:</strong> Cada color requiere una pantalla nueva. Diseños de más de 6 colores encarecen mucho el proceso.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Nombres/números individuales:</strong> No sirve para personalizar cada prenda con un dato distinto (para esto usamos Vinilo).</span>
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
              <h2 className="text-white mb-4">Serigrafía vs Otras Técnicas</h2>
              <p className="text-white/70 max-w-2xl mx-auto">Descubre cómo se compara la serigrafía con el resto de opciones de personalización textil.</p>
            </div>

            <div className="overflow-x-auto pb-6">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4 font-bold text-lg w-1/5">Característica</th>
                    <th className="p-4 font-bold text-lg text-blue-400 bg-white/5 rounded-t-lg w-1/5">Serigrafía</th>
                    <th className="p-4 font-bold text-lg w-1/5">Impresión DTF</th>
                    <th className="p-4 font-bold text-lg w-1/5">Bordado</th>
                    <th className="p-4 font-bold text-lg w-1/5">Vinilo Textil</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Pedido mínimo</td>
                    <td className="p-4 bg-white/5 text-white font-bold">10 unidades</td>
                    <td className="p-4">1 unidad</td>
                    <td className="p-4">10 unidades</td>
                    <td className="p-4">1 unidad</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Colores</td>
                    <td className="p-4 bg-white/5">Hasta 6 (planos)</td>
                    <td className="p-4">Ilimitados / Fotos</td>
                    <td className="p-4">Hasta 15 hilos</td>
                    <td className="p-4">1-3 colores planos</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Durabilidad</td>
                    <td className="p-4 bg-white/5 text-success-l">★★★★★ (Máxima)</td>
                    <td className="p-4">★★★★☆ (Alta)</td>
                    <td className="p-4 text-success-l">★★★★★ (Eterna)</td>
                    <td className="p-4">★★★☆☆ (Media)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Tacto</td>
                    <td className="p-4 bg-white/5">Integrado en tejido</td>
                    <td className="p-4">Ligero relieve (goma)</td>
                    <td className="p-4">Relieve (hilo)</td>
                    <td className="p-4">Relieve plástico</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Precio tiradas largas</td>
                    <td className="p-4 bg-white/5 text-success-l font-bold">Muy económico</td>
                    <td className="p-4">Medio</td>
                    <td className="p-4">Alto</td>
                    <td className="p-4">Alto</td>
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
              <h2 className="mb-4">Sectores que confían en la serigrafía</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/sectores/serigrafia-empresas/" className="card p-6 no-underline text-ink group hover:border-blue">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg mb-2 group-hover:text-blue transition-colors">Empresas</h3>
                <p className="text-sm text-slate mb-4">Ropa laboral y uniformes corporativos resistentes al trabajo diario.</p>
                <span className="text-blue font-semibold text-sm">Ver sector →</span>
              </a>
              <a href="/sectores/serigrafia-eventos/" className="card p-6 no-underline text-ink group hover:border-blue">
                <div className="text-4xl mb-4">🎪</div>
                <h3 className="text-lg mb-2 group-hover:text-blue transition-colors">Eventos</h3>
                <p className="text-sm text-slate mb-4">Merchandising para festivales, conciertos y ferias al mejor precio.</p>
                <span className="text-blue font-semibold text-sm">Ver sector →</span>
              </a>
              <a href="/sectores/serigrafia-deportes/" className="card p-6 no-underline text-ink group hover:border-blue">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-lg mb-2 group-hover:text-blue transition-colors">Deportes</h3>
                <p className="text-sm text-slate mb-4">Equipaciones de entrenamiento, chándals y ropa para peñas.</p>
                <span className="text-blue font-semibold text-sm">Ver sector →</span>
              </a>
              <a href="/sectores/serigrafia-colegios/" className="card p-6 no-underline text-ink group hover:border-blue">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg mb-2 group-hover:text-blue transition-colors">Colegios</h3>
                <p className="text-sm text-slate mb-4">Uniformes escolares, ropa deportiva y camisetas de fin de curso.</p>
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
              <h2 className="mb-4">Trabajos recientes en serigrafía</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[30, 31, 32, 33, 34, 35, 36, 37].map((num) => (
                <div key={num} className="relative group overflow-hidden rounded-lg aspect-square">
                  <Image 
                    src={`https://picsum.photos/600/600?random=${num}`} 
                    alt={`Ejemplo serigrafía textil ${num}`} 
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
            <h2 className="text-white mb-6 text-3xl md:text-5xl">¿Es la serigrafía lo que necesitas?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10">
              Pide presupuesto ahora. Te asesoramos sin compromiso y te enviamos una valoración exacta en menos de 24 horas.
            </p>
            <a href="/presupuesto/?tecnica=serigrafia" className="btn btn-primary shadow-xl text-lg px-10 py-4">
              Solicitar presupuesto gratis
            </a>
          </div>
        </section>

        {/* B09 FAQ */}
        <section className="py-20 bg-gray-light">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">Preguntas frecuentes sobre serigrafía</h2>
            </div>

            <div className="bg-white border border-gray-mid rounded-xl p-6 md:p-10">
              <details className="faq-details" open>
                <summary className="faq-summary">
                  ¿Cuál es el mínimo de unidades para serigrafía?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  El pedido mínimo para serigrafía es de 10 unidades por diseño. Esto se debe a los costes fijos de preparación de pantallas y fotolitos, que hacen que no sea rentable para cantidades menores.
                </div>
              </details>
              
              <details className="faq-details">
                <summary className="faq-summary">
                  ¿Cuántos colores se pueden imprimir en serigrafía?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  Podemos imprimir hasta 6 colores planos por diseño. Para diseños a todo color, fotografías o degradados complejos, recomendamos nuestra técnica de impresión DTF.
                </div>
              </details>

              <details className="faq-details">
                <summary className="faq-summary">
                  ¿Cuánto dura el estampado en serigrafía?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  La serigrafía es la técnica más duradera. Con un lavado adecuado (del revés, agua fría, sin secadora), el estampado puede durar toda la vida útil de la prenda sin agrietarse ni perder color.
                </div>
              </details>

              <details className="faq-details">
                <summary className="faq-summary">
                  ¿Qué tipo de archivos necesitáis para el diseño?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  Necesitamos el diseño vectorizado en formato .AI, .EPS, .SVG o .PDF. Si no dispones de estos formatos, también aceptamos imágenes .PNG o .JPG en alta resolución (mínimo 300 ppp) a tamaño real de impresión.
                </div>
              </details>

              <details className="faq-details" style={{ borderBottom: 'none' }}>
                <summary className="faq-summary">
                  ¿Cuál es el plazo de entrega?
                  <span className="faq-icon"></span>
                </summary>
                <div className="faq-content">
                  Nuestro plazo de entrega estándar es de 7 a 10 días laborables desde la confirmación del diseño y el pago. Para pedidos urgentes, disponemos de un servicio express con entrega en menos de 72 horas.
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
              <p className="text-slate max-w-2xl mx-auto">Si la serigrafía no encaja con tu proyecto, descubre nuestras otras opciones profesionales.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/impresion-dtf/" className="card flex flex-col no-underline text-ink group overflow-hidden">
                <div className="relative w-full aspect-[2/1]">
                  <Image src="https://placehold.co/400x200/111111/FAFAF8?text=Impresión+DTF" alt="Impresión DTF" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4"><span className="badge badge-blue">Sin mínimo · desde 1 ud</span></div>
                  <h3 className="text-lg mb-2">Impresión DTF</h3>
                  <p className="text-sm text-slate mb-6 flex-1">A todo color, calidad fotográfica y tacto suave. Perfecto para diseños complejos o pocas unidades.</p>
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
