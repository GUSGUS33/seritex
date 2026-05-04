import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      className="hero-section bg-cover bg-center relative"
    >
      <Image
        src="https://picsum.photos/1400/700?random=1"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/90 md:bg-gradient-to-r md:from-navy/95 md:via-navy/80 md:to-navy/40 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
          <div className="flex-1 z-10">
            <div className="font-mono text-xs tracking-[3px] uppercase text-white mb-4 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-white block"></span>
              Serigrafía Textil · España
            </div>
            <h1 className="text-white mb-6">
              Serigrafía textil<br/>
              <em className="text-white not-italic">para tu sector</em>
            </h1>
            <p className="text-white/80 text-lg mb-4 max-w-xl">
              Empresa de personalización textil con más de 15 años de experiencia. Serigrafía, DTF, bordado y vinilo para empresas, eventos y marcas en toda España.
            </p>
            <p className="text-white/90 font-medium text-sm mb-8 max-w-xl bg-white/10 p-3 rounded-lg border border-white/20 inline-block">
              Plataforma 100% online · Presupuesto previo · Sin llamadas necesarias
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/presupuesto/" className="btn btn-primary">Pedir presupuesto →</a>
              <a href="/como-funciona/" className="btn btn-ghost">Ver cómo funciona</a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 z-10 relative">
            <div className="relative w-full max-w-[500px] aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="https://picsum.photos/seed/printing/800/600" 
                alt="Taller de serigrafía textil" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute bottom-6 left-6 bg-navy/80 border border-white/20 rounded-xl p-4 backdrop-blur-md text-center inline-block shadow-lg">
                <div className="font-display text-4xl font-extrabold text-white leading-none">24h</div>
                <div className="font-mono text-[10px] text-white/70 mt-1 tracking-widest uppercase">Respuesta<br/>garantizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
