import React from 'react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="cta-block">
          <div>
            <h2 className="text-white mb-2 text-3xl md:text-4xl">¿Listo para pedir<br/>tu presupuesto?</h2>
            <p className="text-white/80 text-lg max-w-md">Cuéntanos qué necesitas y te respondemos en menos de 24 horas con un presupuesto real y personalizado.</p>
          </div>
          <a href="/presupuesto/" className="btn btn-primary text-lg px-8 py-4">
            Pedir presupuesto gratis →
          </a>
        </div>
      </div>
    </section>
  );
}
