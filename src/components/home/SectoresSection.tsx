import React from 'react';

export default function SectoresSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="label-mono mb-2">Especialistas</div>
          <h2>Soluciones para cada sector</h2>
          <p className="text-slate max-w-2xl mx-auto mt-4">No vendemos camisetas genéricas. Entendemos las necesidades de tu negocio y te asesoramos con la mejor opción para tu imagen corporativa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/sectores/serigrafia-empresas/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🏢</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Empresas y Corporativo</div>
              <div className="text-xs text-slate mt-1">Ropa laboral y uniformes</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-eventos/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🎪</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Eventos y Festivales</div>
              <div className="text-xs text-slate mt-1">Merchandising y staff</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-marcas-ropa/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">👕</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Marcas Independientes</div>
              <div className="text-xs text-slate mt-1">Streetwear y colecciones</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-hosteleria/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🍽️</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Hostelería</div>
              <div className="text-xs text-slate mt-1">Uniformes y delantales</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-deportes/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">⚽</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Clubs Deportivos</div>
              <div className="text-xs text-slate mt-1">Equipaciones y chándals</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-construccion/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🏗️</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Construcción</div>
              <div className="text-xs text-slate mt-1">Ropa de trabajo y EPIs</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-colegios/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🎓</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Colegios</div>
              <div className="text-xs text-slate mt-1">Uniformes y fin de curso</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-sanidad/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🏥</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Sanidad y Clínicas</div>
              <div className="text-xs text-slate mt-1">Pijamas sanitarios y batas</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-musica-cultura/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🎵</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Música y Cultura</div>
              <div className="text-xs text-slate mt-1">Merch para bandas</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-retail/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🛍️</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Retail y Tiendas</div>
              <div className="text-xs text-slate mt-1">Uniformes de dependientes</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-asociaciones/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">🤝</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Asociaciones y Peñas</div>
              <div className="text-xs text-slate mt-1">Camisetas para grupos</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
          <a href="/sectores/serigrafia-despachos/" className="sector-card group">
            <div className="text-2xl w-10 text-center shrink-0">💼</div>
            <div className="flex-1">
              <div className="font-bold text-sm text-ink">Despachos y Servicios</div>
              <div className="text-xs text-slate mt-1">Merchandising premium</div>
            </div>
            <div className="text-stone text-lg transition-transform group-hover:translate-x-1 group-hover:text-blue">›</div>
          </a>
        </div>
        <div className="mt-12 text-center">
          <a href="/sectores/" className="btn btn-secondary">Ver todos los sectores profesionales</a>
        </div>
      </div>
    </section>
  );
}
