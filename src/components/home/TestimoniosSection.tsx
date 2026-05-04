import React from 'react';
import Image from 'next/image';

export default function TestimoniosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="label-mono mb-2">Reseñas</div>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-8">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-charcoal italic mb-6">"Necesitábamos uniformes urgentes para la apertura del nuevo local. Nos asesoraron con la técnica (bordado para los polos, DTF para los delantales) y cumplieron el plazo a la perfección. Calidad de 10."</p>
            <div className="flex items-center gap-4">
              <Image src="https://placehold.co/48x48/F1F4F9/111111?text=M" alt="Avatar" width={48} height={48} className="rounded-full object-cover block" loading="lazy" />
              <div>
                <div className="font-bold text-ink">María G.</div>
                <div className="text-xs text-slate">Restaurante El Puerto · Sector Hostelería</div>
              </div>
            </div>
          </div>
          
          <div className="card p-8">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-charcoal italic mb-6">"Llevamos 3 años confiando en ellos para el merchandising de nuestro festival. La serigrafía aguanta lavado tras lavado y los colores son súper vivos. El trato es muy cercano y profesional."</p>
            <div className="flex items-center gap-4">
              <Image src="https://placehold.co/48x48/F1F4F9/111111?text=L" alt="Avatar" width={48} height={48} className="rounded-full object-cover block" loading="lazy" />
              <div>
                <div className="font-bold text-ink">Carlos R.</div>
                <div className="text-xs text-slate">Festival IndieSur · Sector Eventos</div>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-charcoal italic mb-6">"Empecé mi marca de ropa haciendo tiradas pequeñas en DTF y ahora hacemos cientos en serigrafía. Me han acompañado en todo el crecimiento. La calidad de las prendas base que ofrecen es top."</p>
            <div className="flex items-center gap-4">
              <Image src="https://placehold.co/48x48/F1F4F9/111111?text=P" alt="Avatar" width={48} height={48} className="rounded-full object-cover block" loading="lazy" />
              <div>
                <div className="font-bold text-ink">Laura M.</div>
                <div className="text-xs text-slate">Urban Wear Co. · Marca de Ropa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
