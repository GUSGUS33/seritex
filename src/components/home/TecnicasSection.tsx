import React from 'react';
import Image from 'next/image';
import PrecioOrientativo from '../PrecioOrientativo';

export default function TecnicasSection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="label-mono mb-2">Técnicas de impresión</div>
          <h2>4 técnicas de personalización textil profesional</h2>
          <p className="text-slate max-w-2xl mx-auto mt-4 mb-8">Dominamos las principales técnicas de estampación para ofrecerte siempre la mejor solución según tu diseño, cantidad y presupuesto.</p>
          <a href="/tecnicas/" className="btn btn-secondary btn-sm">Ver todas las técnicas</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Técnica 1 */}
          <a href="/serigrafia-textil/" className="card flex flex-col no-underline text-ink group overflow-hidden">
            <div className="relative w-full aspect-[2/1]">
              <Image src="https://placehold.co/400x200/111111/FAFAF8?text=Serigrafía+textil" alt="Serigrafía textil" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4"><span className="badge badge-blue">★ Técnica estrella</span></div>
              <h3 className="text-lg mb-2">Serigrafía Textil</h3>
              <p className="text-sm text-slate mb-6 flex-1">Máxima durabilidad y colores vivos. Ideal para tiradas medias y altas desde 10 unidades.</p>
              <span className="text-blue font-semibold text-sm group-hover:underline">Ver detalles →</span>
            </div>
          </a>
          
          {/* Técnica 2 */}
          <a href="/impresion-dtf/" className="card flex flex-col no-underline text-ink group overflow-hidden">
            <div className="relative w-full aspect-[2/1]">
              <Image src="https://placehold.co/400x200/111111/FAFAF8?text=Impresión+DTF" alt="Impresión DTF" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4"><span className="badge badge-blue">Sin mínimo · desde 1 ud</span></div>
              <h3 className="text-lg mb-2">Impresión DTF</h3>
              <p className="text-sm text-slate mb-6 flex-1">A todo color, calidad fotográfica y tacto suave. Perfecto para diseños complejos o pocas unidades.</p>
              <span className="text-blue font-semibold text-sm group-hover:underline">Ver detalles →</span>
            </div>
          </a>

          {/* Técnica 3 */}
          <a href="/bordado-personalizado/" className="card flex flex-col no-underline text-ink group overflow-hidden">
            <div className="relative w-full aspect-[2/1]">
              <Image src="https://placehold.co/400x200/111111/FAFAF8?text=Bordado+personalizado" alt="Bordado personalizado" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4"><span className="badge badge-green">Acabado premium</span></div>
              <h3 className="text-lg mb-2">Bordado</h3>
              <p className="text-sm text-slate mb-6 flex-1">Elegancia y resistencia insuperable. La opción preferida para ropa corporativa y uniformes de alta gama.</p>
              <span className="text-blue font-semibold text-sm group-hover:underline">Ver detalles →</span>
            </div>
          </a>

          {/* Técnica 4 */}
          <a href="/vinilo-textil/" className="card flex flex-col no-underline text-ink group overflow-hidden">
            <div className="relative w-full aspect-[2/1]">
              <Image src="https://placehold.co/400x200/111111/FAFAF8?text=Vinilo+textil" alt="Vinilo textil" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4"><span className="badge badge-neutro">Nombres y números</span></div>
              <h3 className="text-lg mb-2">Vinilo Textil</h3>
              <p className="text-sm text-slate mb-6 flex-1">Corte preciso para personalización individual. Ideal para equipaciones deportivas y textos simples.</p>
              <span className="text-blue font-semibold text-sm group-hover:underline">Ver detalles →</span>
            </div>
          </a>
        </div>
        
        <PrecioOrientativo />
      </div>
    </section>
  );
}
