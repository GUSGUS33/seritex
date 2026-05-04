import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Como Funciona | Serigrafía Textil',
  description: 'Información sobre como funciona | serigrafía textil en Serigrafía Textil.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/como-funciona',
  },
};

import React from 'react';
import Image from 'next/image';
import { ClipboardList, FileCheck, Truck, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ComoFunciona() {
  

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo hacer un pedido de serigrafía textil",
    "description": "Proceso paso a paso para encargar ropa personalizada en serigrafia-textil.es",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Paso 1: Presupuesto",
        "text": "Rellena el formulario online indicando prendas, cantidades y adjuntando tu diseño."
      },
      {
        "@type": "HowToStep",
        "name": "Paso 2: Confirmación",
        "text": "Recibe tu presupuesto detallado en menos de 24 horas y confírmalo."
      },
      {
        "@type": "HowToStep",
        "name": "Paso 3: Diseño",
        "text": "Aprobación del fotomontaje digital antes de pasar a producción."
      },
      {
        "@type": "HowToStep",
        "name": "Paso 4: Producción",
        "text": "Estampación de las prendas en nuestro taller con la técnica elegida."
      },
      {
        "@type": "HowToStep",
        "name": "Paso 5: Envío",
        "text": "Entrega por mensajería urgente en la dirección indicada."
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
      "@type": "WebPage"
    }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-6">
            Así funciona serigrafia-textil.es: <br/><span className="text-blue-l">del presupuesto a la entrega</span>
          </h1>
          <p className="text-xl text-white/80 font-light">
            Hemos simplificado el proceso para que encargar ropa personalizada sea rápido, transparente y 100% online.
          </p>
        </div>
      </section>

      {/* PASOS */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <div className="space-y-24">
            
            {/* Paso 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/800x600/F8FAFC/0F2547?text=Paso+1:+Presupuesto" 
                  alt="Solicitud de presupuesto" 
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                  <h2 className="text-3xl font-bold text-navy">Solicitud de presupuesto</h2>
                </div>
                <p className="text-lg text-slate mb-6">
                  Rellena nuestro formulario online en menos de 2 minutos. Indícanos qué prendas necesitas, las cantidades aproximadas y adjunta tu diseño o logo. No te pediremos registro ni datos innecesarios.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Formulario rápido e intuitivo</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Sube tu logo en cualquier formato</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/800x600/F8FAFC/0F2547?text=Paso+2:+Confirmacion" 
                  alt="Revisión y confirmación" 
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                  <h2 className="text-3xl font-bold text-navy">Revisión y confirmación</h2>
                </div>
                <p className="text-lg text-slate mb-6">
                  En menos de 24 horas laborables recibirás un presupuesto detallado en tu email. Revisamos tu diseño para asegurar que la técnica elegida (serigrafía, DTF, bordado) es la óptima para tu proyecto.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Respuesta en menos de 24h</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Asesoramiento técnico incluido</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/800x600/F8FAFC/0F2547?text=Paso+3:+Fotomontaje" 
                  alt="Fotomontaje digital" 
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
                  <h2 className="text-3xl font-bold text-navy">Fotomontaje digital</h2>
                </div>
                <p className="text-lg text-slate mb-6">
                  Una vez aceptado el presupuesto, nuestro equipo de diseño prepara un fotomontaje digital para que veas exactamente cómo quedará tu ropa antes de estamparla. No pasamos a producción sin tu OK.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Visualización previa del resultado</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Ajustes de tamaño y posición</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/800x600/F8FAFC/0F2547?text=Paso+4:+Produccion" 
                  alt="Producción en taller" 
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">4</div>
                  <h2 className="text-3xl font-bold text-navy">Producción en taller</h2>
                </div>
                <p className="text-lg text-slate mb-6">
                  Con tu aprobación, el pedido entra en nuestro taller. Preparamos las pantallas, ajustamos los colores y estampamos tus prendas con maquinaria de última generación y estrictos controles de calidad.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Control de calidad prenda a prenda</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Tintas ecológicas y duraderas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 relative aspect-[4/3]">
                <Image 
                  src="https://placehold.co/800x600/F8FAFC/0F2547?text=Paso+5:+Envio" 
                  alt="Envío por mensajería" 
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">5</div>
                  <h2 className="text-3xl font-bold text-navy">Envío y entrega</h2>
                </div>
                <p className="text-lg text-slate mb-6">
                  Empaquetamos tu pedido de forma segura y lo enviamos mediante mensajería urgente. Recibirás un número de seguimiento para que sepas en todo momento dónde está tu mercancía.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Envío a toda la península y Baleares</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="text-blue shrink-0 mt-1" size={20} />
                    <span>Tracking en tiempo real</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gray-light border-t border-gray-mid">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">¿Listo para empezar?</h2>
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            Da el primer paso hoy mismo. Solicita tu presupuesto sin compromiso y descubre lo fácil que es trabajar con nosotros.
          </p>
          <a 
            href="/presupuesto" 
            className="inline-flex bg-orange hover:bg-orange-d text-white px-10 py-4 rounded-xl font-bold text-lg transition-all items-center gap-2 shadow-lg"
          >
            Ir al formulario de presupuesto <ChevronRight size={20} />
          </a>
        </div>
      </section>
    </div>
    </>
  );
}
