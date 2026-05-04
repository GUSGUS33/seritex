import React from 'react';

export default function TrustBarSection() {
  return (
    <section className="py-8 bg-white border-b border-gray-mid">
      <div className="container-custom">
        <div className="trust-bar flex flex-wrap justify-center gap-8 lg:gap-12">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <div className="font-display text-xl font-extrabold text-navy leading-none">4.9</div>
              <div className="text-xs text-slate mt-1">Google · +500 reseñas</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <div className="font-display text-xl font-extrabold text-navy leading-none">+15</div>
              <div className="text-xs text-slate mt-1">Años de experiencia</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <div>
              <div className="font-display text-xl font-extrabold text-navy leading-none">24h</div>
              <div className="text-xs text-slate mt-1">Respuesta presupuesto</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚚</span>
            <div>
              <div className="font-display text-xl font-extrabold text-navy leading-none">ES</div>
              <div className="text-xs text-slate mt-1">Envíos a toda España</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <div className="font-display text-xl font-extrabold text-navy leading-none">100% online</div>
              <div className="text-xs text-slate mt-1">Sin llamadas necesarias</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
