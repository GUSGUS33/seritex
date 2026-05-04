import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bordado Personalizado · Desde 10 uds · España',
  description: 'Servicio de bordado personalizado para ropa laboral, gorras y uniformes. Acabado premium y duradero.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/bordado-personalizado',
  },
};

import React from 'react';
import Image from 'next/image';
import { Check, X, Info } from 'lucide-react';

export default function BordadoPersonalizado() {
  

  

  const faqs = [
    {
      name: "¿Cuál es el pedido mínimo para bordado?",
      acceptedAnswer: { text: "El pedido mínimo para bordado es de 10 unidades. Esto se debe a que el proceso de preparación y picaje (digitalización del diseño) tiene un coste fijo que hace inviable pedidos más pequeños." }
    },
    {
      name: "¿Qué es el picaje y por qué se cobra?",
      acceptedAnswer: { text: "El picaje es el proceso de convertir tu logotipo (imagen o vector) en un archivo de puntadas que la máquina bordadora puede leer. Es un trabajo manual y técnico. Se cobra una sola vez por diseño; si repites pedido con el mismo logo, no lo vuelves a pagar." }
    },
    {
      name: "¿Se puede bordar cualquier diseño?",
      acceptedAnswer: { text: "No. El bordado tiene limitaciones técnicas. No se pueden bordar degradados, sombras, fotografías ni textos excesivamente pequeños (menos de 5mm de altura). Los diseños ideales son logotipos sólidos y textos claros." }
    },
    {
      name: "¿En qué prendas queda mejor el bordado?",
      acceptedAnswer: { text: "El bordado requiere tejidos con cierto cuerpo para soportar la tensión de las puntadas. Queda perfecto en polos, sudaderas, chaquetas, gorras, mochilas y ropa laboral gruesa. No lo recomendamos en camisetas básicas finas (menos de 150g/m²)." }
    },
    {
      name: "¿Cuánto dura un bordado?",
      acceptedAnswer: { text: "El bordado es la técnica más duradera. Prácticamente dura toda la vida útil de la prenda. Los hilos que utilizamos son resistentes a lavados frecuentes, roces e incluso a lavados industriales en el caso de ropa laboral." }
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
        >
          <Image src="https://picsum.photos/1400/700?random=22" alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-navy/80 z-0"></div>
          <div className="container-custom relative z-10 text-center">
            <div className="inline-block mb-6">
              <span className="badge badge-green bg-success text-white border border-white/20 px-4 py-2 text-sm">★ Acabado Premium</span>
            </div>
            <h1 className="text-white mb-6 max-w-4xl mx-auto">
              Bordado personalizado: elegancia y resistencia premium
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
              La técnica más exclusiva para uniformes corporativos, marcas de ropa y merchandising de alta gama. Aporta valor y distinción a cada prenda.
            </p>
            <p className="text-white/90 font-medium text-sm mb-10 max-w-xl mx-auto bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/presupuesto/?tecnica=bordado" className="btn btn-primary">Pedir presupuesto en 24h →</a>
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
                <div className="text-3xl mb-2">🧵</div>
                <div className="font-bold text-ink">Hasta 15 hilos</div>
                <div className="text-xs text-slate mt-1">Colores por diseño</div>
              </div>
              <div className="p-4 border-t md:border-t-0 md:border-l border-gray-mid">
                <div className="text-3xl mb-2">👕</div>
                <div className="font-bold text-ink">Prendas gruesas</div>
                <div className="text-xs text-slate mt-1">Polos, sudaderas, gorras</div>
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
                <div className="label-mono mb-2">El arte del hilo</div>
                <h2 className="mb-6">¿Qué es el bordado y cómo funciona?</h2>
                <div className="prose text-slate">
                  <p className="mb-4">
                    El bordado es una técnica de personalización que utiliza hilos de colores para coser un diseño directamente sobre el tejido de la prenda. Es el método más clásico, elegante y duradero que existe en la industria textil.
                  </p>
                  <p className="mb-4">
                    El proceso comienza con el <strong>picaje</strong>: la digitalización de tu logotipo o diseño en un archivo especial que indica a la máquina bordadora cada puntada, la densidad del hilo y los cambios de color. Una vez preparado el archivo, la prenda se fija en un bastidor y la máquina industrial borda el diseño a alta velocidad con precisión milimétrica.
                  </p>
                  <p>
                    El resultado es un relieve táctil, un brillo característico del hilo y una resistencia absoluta a los lavados. Es la técnica preferida para uniformes de empresa, ropa de hostelería, gorras y marcas que buscan un posicionamiento premium.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/600x450/111111/FAFAF8?text=Proceso+bordado+textil" 
                  alt="Proceso de bordado textil" 
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
              <h2 className="mb-4">Cuándo elegir (y cuándo no) el bordado</h2>
              <p className="text-slate max-w-2xl mx-auto">Te hablamos claro. El bordado aporta un valor incalculable, pero tiene ciertas limitaciones técnicas que debes conocer.</p>
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
                    <span className="text-charcoal"><strong>Acabado premium:</strong> Aporta un relieve y un brillo que elevan la calidad percibida de cualquier prenda.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Resistencia extrema:</strong> El hilo soporta lavados agresivos, altas temperaturas y fricción sin deteriorarse.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Multicolor sin coste extra:</strong> A diferencia de la serigrafía, añadir colores (hasta 15) no incrementa el precio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Ideal para accesorios:</strong> Es la mejor técnica para personalizar gorras, mochilas, delantales y chaquetas.</span>
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
                    <span className="text-charcoal"><strong>Detalles muy finos:</strong> Los textos menores a 5mm o los detalles minúsculos no se pueden bordar con claridad.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Prendas finas:</strong> En camisetas ligeras (menos de 150g), el peso del bordado puede deformar el tejido y resultar incómodo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Diseños muy grandes:</strong> Un bordado enorme (ej. toda la espalda) es muy costoso, pesado y rígido.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-warning shrink-0 mt-1" size={18} />
                    <span className="text-charcoal"><strong>Degradados:</strong> No es posible realizar degradados suaves o calidad fotográfica con hilos.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* B05 PRECIOS */}
        <section className="py-20 bg-gray-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">¿Cómo se calcula el precio del bordado?</h2>
              <p className="text-slate max-w-2xl mx-auto">A diferencia de otras técnicas, el bordado no se cobra por número de colores, sino por el número de puntadas (el tamaño y densidad del diseño).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-gray-mid shadow-sm">
                <div className="text-blue font-bold mb-2">1. El Picaje (Digitalización)</div>
                <p className="text-slate text-sm">
                  Es el coste de convertir tu logo en un archivo de bordado. Se paga <strong>una sola vez por diseño y tamaño</strong>. Si repites pedido en el futuro, no vuelves a pagarlo.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-mid shadow-sm">
                <div className="text-blue font-bold mb-2">2. Cantidad de Puntadas</div>
                <p className="text-slate text-sm">
                  Un logo pequeño en el pecho (aprox 8x8cm) tiene menos puntadas y es más económico que un logo grande en la espalda.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-mid shadow-sm">
                <div className="text-blue font-bold mb-2">3. Volumen del Pedido</div>
                <p className="text-slate text-sm">
                  Como en todas las técnicas, a mayor cantidad de prendas, menor es el coste unitario del servicio de bordado.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-blue-l border border-blue/20 rounded-2xl p-6 max-w-3xl mx-auto flex items-start gap-4">
              <Info className="text-blue shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-navy mb-1">Nuestro consejo</h4>
                <p className="text-sm text-slate">
                  Para uniformes de empresa, la combinación ganadora es: <strong>Bordado pequeño en el pecho</strong> (elegante y duradero) + <strong>Serigrafía o DTF grande en la espalda</strong> (económico y ligero).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B06 FAQ */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">Preguntas frecuentes sobre bordado</h2>
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
            <h2 className="text-white mb-6">¿Quieres dar un toque premium a tus prendas?</h2>
            <p className="text-white/80 text-lg mb-8">
              Cuéntanos tu idea, envíanos tu logo y te prepararemos un presupuesto personalizado sin compromiso en menos de 24 horas.
            </p>
            <a href="/presupuesto/?tecnica=bordado" className="btn btn-primary text-lg px-8 py-4">
              Solicitar presupuesto ahora
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
