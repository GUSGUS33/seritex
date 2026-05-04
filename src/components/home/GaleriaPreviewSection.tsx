import React from 'react';
import Image from 'next/image';

export default function GaleriaPreviewSection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="label-mono mb-2">Nuestro trabajo</div>
            <h2>Calidad que se ve y se toca</h2>
          </div>
          <a href="/galeria/" className="btn btn-secondary btn-sm">Ver galería completa</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
            <Image src="https://picsum.photos/600/450?random=10" alt="trabajo de serigrafía textil · camisetas corporativas" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
            <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold">Ropa Corporativa</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
            <Image src="https://picsum.photos/600/450?random=11" alt="trabajo de serigrafía textil · merchandising eventos" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
            <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold">Eventos y Festivales</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
            <Image src="https://picsum.photos/600/450?random=12" alt="trabajo de serigrafía textil · marca de ropa" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
            <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold">Marcas de Ropa</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
            <Image src="https://picsum.photos/600/450?random=13" alt="trabajo de serigrafía textil · uniformes hostelería" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
            <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold">Hostelería</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
            <Image src="https://picsum.photos/600/450?random=14" alt="trabajo de serigrafía textil · equipaciones deportivas" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
            <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold">Clubs Deportivos</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
            <Image src="https://picsum.photos/600/450?random=15" alt="trabajo de serigrafía textil · ropa laboral" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
            <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold">Ropa Laboral</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
