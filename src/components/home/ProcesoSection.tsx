import React from 'react';

export default function ProcesoSection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="label-mono mb-2">Proceso</div>
          <h2>¿Cómo funciona el proceso?</h2>
          <p className="text-slate max-w-2xl mx-auto mt-4">Un sistema optimizado para que recibas tu ropa personalizada rápido y sin complicaciones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Línea conectora desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gray-mid z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm border-4 border-gray-light mb-6">📝</div>
            <h3 className="text-xl mb-3">1. Pides presupuesto</h3>
            <p className="text-slate text-sm">Rellenas nuestro configurador online en 2 minutos indicando prendas, cantidades y subiendo tu diseño.</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm border-4 border-gray-light mb-6">⚡</div>
            <h3 className="text-xl mb-3">2. Confirmamos en 24h</h3>
            <p className="text-slate text-sm">Te enviamos un presupuesto exacto y un boceto digital para que veas cómo quedará antes de imprimir.</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm border-4 border-gray-light mb-6">📦</div>
            <h3 className="text-xl mb-3">3. Producción y envío</h3>
            <p className="text-slate text-sm">Imprimimos con la máxima calidad y te enviamos el pedido a cualquier punto de España en el plazo acordado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
