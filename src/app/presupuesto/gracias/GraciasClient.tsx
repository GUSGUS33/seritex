"use client";

import React from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CheckCircle, Check } from 'lucide-react';

export default function GraciasClient() {
  const [formData, setFormData] = React.useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('presupuestoFormData');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  

  return (
    <div className="min-h-screen bg-gray-light flex flex-col">

      {/* NAVBAR SIMPLIFICADA */}
      <nav className="bg-white border-b border-gray-mid sticky top-0 z-50">
        <div className="container-custom py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-extrabold font-display text-ink tracking-tight no-underline">
            serigrafia-textil<span className="text-blue">.es</span>
          </a>
        </div>
      </nav>

      <>
      <main className="flex-1 container-custom py-12 flex items-center justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }}
      />
        <div className="bg-white rounded-2xl border border-gray-mid p-8 md:p-12 shadow-md max-w-2xl w-full text-center">
          
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success-l text-success rounded-full mb-6">
            <CheckCircle size={48} />
          </div>

          <h1 className="text-3xl md:text-4xl mb-4 text-navy">¡Solicitud recibida!</h1>
          
          <p className="text-lg text-slate mb-8 max-w-lg mx-auto">
            Hemos recibido los datos de tu proyecto correctamente. Tu solicitud ya está en nuestro sistema. Te enviaremos el presupuesto por email. Todo el proceso es online, no te llamaremos por teléfono.
          </p>

          {formData && (
            <div className="bg-blue-l border border-blue rounded-lg p-6 mb-8 text-left">
              <h3 className="text-navy mb-4 text-lg font-bold">Tu solicitud en resumen</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-blue shrink-0" />
                  <span className="text-slate">Prenda:</span>
                  <span className="text-navy font-bold">{formData.prenda || 'No especificada'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-blue shrink-0" />
                  <span className="text-slate">Cantidad:</span>
                  <span className="text-navy font-bold">{formData.cantidad || '0'} unidades</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-blue shrink-0" />
                  <span className="text-slate">Técnica:</span>
                  <span className="text-navy font-bold">{formData.tecnica || 'Por asesorar'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-blue shrink-0" />
                  <span className="text-slate">Uso:</span>
                  <span className="text-navy font-bold capitalize">{formData.uso || 'No especificado'}</span>
                </div>
                {formData.fechaLimite && (
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-blue shrink-0" />
                    <span className="text-slate">Fecha límite:</span>
                    <span className="text-navy font-bold">{formData.fechaLimite}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-blue shrink-0" />
                  <span className="text-slate">Urgente:</span>
                  <span className="text-navy font-bold">{formData.urgente ? 'Sí' : 'No'}</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-blue-l border border-blue/20 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-blue-d mb-2 text-lg">¿Qué pasa ahora?</h3>
            <ul className="list-disc list-inside text-slate space-y-2">
              <li>Revisaremos las cantidades, técnica y diseño (si lo has adjuntado).</li>
              <li>Calcularemos el mejor precio posible para tu pedido.</li>
              <li><strong className="text-ink">Te contactaremos en menos de 24 horas laborables</strong> con un presupuesto detallado.</li>
            </ul>
          </div>

          <div className="border-t border-gray-mid pt-8">
            <p className="text-slate mb-4">¿Tienes alguna duda urgente o quieres añadir algo a tu solicitud?</p>
            <a 
              href="https://wa.me/34600000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#20bd5a] transition-colors shadow-sm w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="mt-8">
            <a href="/" className="text-blue hover:underline font-medium">← Volver a la página principal</a>
          </div>
        </div>
      </main>
    </>
    </div>
  );
}
