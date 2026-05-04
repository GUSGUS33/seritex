"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Upload, Check, ChevronRight, ChevronLeft, Info } from 'lucide-react';

export default function PresupuestoClient() {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  // Form state
  const [formData, setFormData] = useState({
    // Step 1
    prenda: '',
    cantidad: '',
    uso: searchParams.get('sector') || '',
    tecnica: searchParams.get('tecnica') || '',
    
    // Step 2
    archivo: null as File | null,
    colores: '',
    posicion: '',
    necesitaDiseno: false,
    
    // Step 3
    materialPropio: false,
    condicionesAceptadas: false,
    tallas: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    colorPrenda: '',
    calidad: '',
    
    // Step 4
    fechaLimite: '',
    urgente: false,
    recurrente: false,
    
    // Step 5
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    comoNosConociste: ''
  });

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/presupuesto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        sessionStorage.setItem('presupuestoFormData', JSON.stringify(formData));
        navigate.push('/presupuesto/gracias');
      } else {
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    }
  };

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const updateTalla = (talla: keyof typeof formData.tallas, qty: number) => {
    setFormData(prev => ({
      ...prev,
      tallas: { ...prev.tallas, [talla]: Math.max(0, qty) }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-light flex flex-col">
      <div className="flex-1 container-custom py-6 lg:py-10 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* SIDEBAR (Top bar on mobile, sticky sidebar on desktop) */}
        <aside className="w-full lg:w-[280px] lg:sticky lg:top-[100px] shrink-0 order-2 lg:order-1 pt-2">
          <div className="p-2 lg:p-4 opacity-90">
            <h1 className="text-xl mb-4 text-navy font-extrabold tracking-tight">Solicitar Presupuesto</h1>
            
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-xl">⭐</span>
                <div>
                  <div className="font-bold text-ink">4.9/5 en Google</div>
                  <div className="text-xs text-slate">Más de 500 reseñas reales</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <div className="font-bold text-ink">+15 años experiencia</div>
                  <div className="text-xs text-slate">Expertos en personalización</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">⏱️</span>
                <div>
                  <div className="font-bold text-ink">Respuesta en 24h</div>
                  <div className="text-xs text-slate">Presupuesto sin compromiso</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🚚</span>
                <div>
                  <div className="font-bold text-ink">Envíos a toda España</div>
                  <div className="text-xs text-slate">Entregas rápidas y seguras</div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 border border-gray-mid rounded-lg p-4 mb-4">
              <p className="text-sm text-ink font-medium m-0 flex items-start gap-2">
                <Info size={16} className="shrink-0 mt-0.5 text-blue" />
                <span>Gestionamos tu pedido 100% online. Sin llamadas, sin esperas.</span>
              </p>
            </div>

            <div className="border-t border-gray-mid pt-6 mt-4">
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-sm text-slate italic mb-3">"Rápidos, profesionales y con una calidad de impresión brutal. Repetiremos seguro."</p>
              <div className="text-xs font-bold text-ink">— Carlos M., Agencia de Eventos</div>
            </div>
          </div>
        </aside>

        {/* MAIN FORM AREA */}
        <>
      <main className="w-full flex-1 order-1 lg:order-2 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage"
    }) }}
      />
          <div className="bg-white rounded-2xl shadow-xl border border-gray-mid/50 overflow-hidden min-h-[600px] flex flex-col justify-between ring-1 ring-black/[0.03]">
            
            {/* PROGRESS BAR */}
            <div className="bg-gray-light/50 border-b border-gray-mid p-4 sm:p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-navy uppercase tracking-wider">Paso {step} de {totalSteps}</span>
                <span className="text-sm text-blue font-bold">{Math.round((step / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-mid h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue h-full transition-all duration-300 ease-in-out"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between">
              
              {/* HONEYPOT: Campo oculto antispam (los humanos no lo ven) */}
              <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="_honey">Página web de tu empresa (Dejar en blanco)</label>
                <input 
                  type="text" 
                  name="_honey" 
                  id="_honey" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  onChange={(e) => updateForm('_honey', e.target.value)}
                />
              </div>

              {/* STEP 1: ¿Qué necesitas? */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl mb-6 font-bold text-navy tracking-tight">¿Qué necesitas personalizar?</h2>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-ink mb-3">Tipo de prenda principal</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {[
                        { name: 'Camiseta', img: 'https://picsum.photos/seed/tshirt/400/400' },
                        { name: 'Sudadera', img: 'https://picsum.photos/seed/hoodie/400/400' },
                        { name: 'Polo', img: 'https://picsum.photos/seed/polo/400/400' },
                        { name: 'Bolsas', img: 'https://picsum.photos/seed/totebag/400/400' },
                        { name: 'Otras prendas', img: 'https://picsum.photos/seed/apparel/400/400' }
                      ].map(item => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => updateForm('prenda', item.name)}
                          className={`relative overflow-hidden rounded-xl border-2 transition-all p-1 text-left ${formData.prenda === item.name ? 'border-blue bg-blue-l/30 shadow-md' : 'border-transparent bg-white shadow-sm hover:shadow-md hover:border-blue/30'}`}
                        >
                           {/* Checkmark circular */}
                           {formData.prenda === item.name && (
                             <div className="absolute top-2 right-2 bg-blue text-white rounded-full p-1 z-10 shadow-sm animate-fade-in">
                               <Check size={14} strokeWidth={3} />
                             </div>
                           )}
                           <img src={item.img} alt={item.name} className={`w-full aspect-[4/5] object-cover rounded-lg mb-2 transition-opacity ${formData.prenda && formData.prenda !== item.name ? 'opacity-60' : 'opacity-100'}`} loading="lazy" />
                           <div className={`text-center text-sm font-bold pb-1 transition-colors ${formData.prenda === item.name ? 'text-blue' : 'text-slate'}`}>
                             {item.name}
                           </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Cantidad aproximada</label>
                      <input 
                        type="number" 
                        min="1"
                        value={formData.cantidad}
                        onChange={(e) => updateForm('cantidad', e.target.value)}
                        placeholder="Ej: 50"
                        className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Uso principal</label>
                      <select 
                        value={formData.uso}
                        onChange={(e) => updateForm('uso', e.target.value)}
                        className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none bg-white"
                      >
                        <option value="">Selecciona un uso...</option>
                        <option value="empresa">Empresa / Ropa laboral</option>
                        <option value="evento">Evento / Festival</option>
                        <option value="marca">Marca de ropa / Retail</option>
                        <option value="particular">Particular / Asociación</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-ink mb-3">Técnica preferida (opcional)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Serigrafía', 'DTF', 'Bordado', 'Vinilo', 'No lo sé, asesoradme'].map(item => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => updateForm('tecnica', item)}
                          className={`p-3 rounded-lg border text-sm text-center transition-all ${formData.tecnica === item ? 'border-blue bg-blue-l text-blue font-bold' : 'border-gray-mid hover:border-blue/50 text-slate'}`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Tu diseño */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl mb-6">Tu diseño</h2>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-ink mb-3">Sube tu logo o diseño (opcional)</label>
                    <div className="border-2 border-dashed border-gray-mid rounded-xl p-8 text-center hover:bg-gray-light transition-colors cursor-pointer relative">
                      <input 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.ai,.png,.svg,.jpg,.jpeg"
                        onChange={(e) => updateForm('archivo', e.target.files?.[0] || null)}
                      />
                      <Upload className="mx-auto text-stone mb-3" size={32} />
                      <div className="text-ink font-medium mb-1">
                        {formData.archivo ? formData.archivo.name : 'Haz clic o arrastra tu archivo aquí'}
                      </div>
                      <div className="text-xs text-slate">PDF, AI, PNG, SVG (Máx. 20MB)</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center gap-3 cursor-pointer p-4 border border-gray-mid rounded-lg hover:bg-gray-light transition-colors">
                      <input 
                        type="checkbox" 
                        checked={formData.necesitaDiseno}
                        onChange={(e) => updateForm('necesitaDiseno', e.target.checked)}
                        className="w-5 h-5 text-blue rounded border-gray-mid focus:ring-blue"
                      />
                      <span className="text-ink font-medium">No tengo diseño todavía, necesito ayuda para crearlo o adaptarlo.</span>
                    </label>
                  </div>

                  {!formData.necesitaDiseno && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Número de colores del diseño</label>
                        <select 
                          value={formData.colores}
                          onChange={(e) => updateForm('colores', e.target.value)}
                          className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none bg-white"
                        >
                          <option value="">Selecciona...</option>
                          <option value="1">1 color</option>
                          <option value="2">2 colores</option>
                          <option value="3">3 colores</option>
                          <option value="4+">4 o más colores</option>
                          <option value="fotografia">A todo color / Fotografía</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Posición de impresión</label>
                        <select 
                          value={formData.posicion}
                          onChange={(e) => updateForm('posicion', e.target.value)}
                          className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none bg-white"
                        >
                          <option value="">Selecciona...</option>
                          <option value="pecho-izq">Pecho izquierdo (logo pequeño)</option>
                          <option value="pecho-centro">Pecho centro (grande)</option>
                          <option value="espalda">Espalda centro</option>
                          <option value="pecho-espalda">Pecho + Espalda</option>
                          <option value="mangas">Mangas</option>
                          <option value="otro">Otra posición / Múltiples</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 3: Detalles */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl mb-6">Detalles de las prendas</h2>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-ink mb-3">¿Quién proporciona las prendas? <span className="text-warning">*</span></label>
                    <div className="flex flex-col gap-3">
                      <label className={`flex items-start gap-3 cursor-pointer p-4 border rounded-lg transition-colors ${!formData.materialPropio ? 'border-blue bg-blue-l' : 'border-gray-mid hover:bg-gray-light'}`}>
                        <input 
                          type="radio" 
                          name="materialPropio"
                          checked={!formData.materialPropio}
                          onChange={() => updateForm('materialPropio', false)}
                          className="w-5 h-5 mt-0.5 text-blue focus:ring-blue"
                        />
                        <div>
                          <div className="text-ink font-bold">Nosotros proporcionamos las prendas</div>
                          <div className="text-sm text-slate mt-1">Te asesoramos y ofrecemos nuestro catálogo con más de 50 referencias.</div>
                        </div>
                      </label>
                      
                      <label className={`flex items-start gap-3 cursor-pointer p-4 border rounded-lg transition-colors ${formData.materialPropio ? 'border-blue bg-blue-l' : 'border-gray-mid hover:bg-gray-light'}`}>
                        <input 
                          type="radio" 
                          name="materialPropio"
                          checked={formData.materialPropio}
                          onChange={() => updateForm('materialPropio', true)}
                          className="w-5 h-5 mt-0.5 text-blue focus:ring-blue"
                        />
                        <div>
                          <div className="text-ink font-bold">Yo traigo mis propias prendas</div>
                          <div className="text-sm text-slate mt-1">Solo necesitas el servicio de estampación.</div>
                        </div>
                      </label>
                    </div>

                    {formData.materialPropio && (
                      <div className="mt-4 border border-warning/30 bg-warning-l/30 rounded-lg overflow-hidden">
                        <details className="group">
                          <summary className="flex items-center justify-between p-4 font-bold text-navy cursor-pointer list-none">
                            Condiciones para prendas aportadas por el cliente
                            <span className="transition group-open:rotate-180">
                              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                          </summary>
                          <div className="p-4 pt-0 text-sm text-slate border-t border-warning/20 mt-2">
                            <p className="mb-2">Al aportar tus propias prendas, aceptas las siguientes condiciones:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4">
                              <li><strong>Margen de error:</strong> Aceptas un margen de error del 3% (mínimo 1 unidad) inherente al proceso de personalización. No nos hacemos responsables de reponer prendas dentro de este margen.</li>
                              <li><strong>Composición:</strong> Eximes a Serigrafía Textil de responsabilidad por daños si la composición real no coincide con la declarada o si tienen tratamientos químicos no comunicados.</li>
                              <li><strong>Estado:</strong> Las prendas deben entregarse limpias y desembolsadas.</li>
                            </ul>
                            <label className="flex items-start gap-2 cursor-pointer mt-4 p-3 bg-white rounded border border-warning/30">
                              <input 
                                type="checkbox" 
                                checked={formData.condicionesAceptadas}
                                onChange={(e) => updateForm('condicionesAceptadas', e.target.checked)}
                                className="mt-1"
                                required
                              />
                              <span className="text-ink font-medium">He leído y acepto las condiciones sobre prendas aportadas. <span className="text-warning">*</span></span>
                            </label>
                          </div>
                        </details>
                      </div>
                    )}
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-bold text-ink mb-3">Distribución de tallas (opcional)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                      {Object.entries(formData.tallas).map(([talla, qty]) => (
                        <div key={talla} className="border border-gray-mid rounded-lg p-3 flex flex-col items-center">
                          <span className="font-bold text-navy mb-2">{talla}</span>
                          <input 
                            type="number" 
                            min="0"
                            value={qty || ''}
                            onChange={(e) => updateTalla(talla as any, parseInt(e.target.value) || 0)}
                            placeholder="0"
                            className="w-full text-center p-2 border border-gray-mid rounded focus:ring-2 focus:ring-blue outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Color principal de la prenda</label>
                      <input 
                        type="text" 
                        value={formData.colorPrenda}
                        onChange={(e) => updateForm('colorPrenda', e.target.value)}
                        placeholder="Ej: Negro, Blanco, Azul marino..."
                        className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Calidad deseada</label>
                      <select 
                        value={formData.calidad}
                        onChange={(e) => updateForm('calidad', e.target.value)}
                        className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none bg-white"
                      >
                        <option value="">Selecciona...</option>
                        <option value="basica">Básica (Promocional / Eventos puntuales)</option>
                        <option value="media">Media (Uso frecuente / Merchandising)</option>
                        <option value="premium">Premium (Marcas de ropa / Alta durabilidad)</option>
                        <option value="eco">Ecológica (Algodón orgánico / Reciclado)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Cuándo */}
              {step === 4 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl mb-6">Plazos y entrega</h2>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-ink mb-2">¿Para cuándo lo necesitas?</label>
                    <input 
                      type="date" 
                      value={formData.fechaLimite}
                      onChange={(e) => updateForm('fechaLimite', e.target.value)}
                      className="w-full sm:w-1/2 p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none"
                    />
                    <p className="text-xs text-slate mt-2">Nuestro plazo estándar es de 7-10 días laborables.</p>
                  </div>

                  <div className="flex flex-col gap-4 mb-8">
                    <label className={`flex items-start gap-3 cursor-pointer p-4 border rounded-lg transition-colors ${formData.urgente ? 'border-warning bg-warning-l' : 'border-gray-mid hover:bg-gray-light'}`}>
                      <input 
                        type="checkbox" 
                        checked={formData.urgente}
                        onChange={(e) => updateForm('urgente', e.target.checked)}
                        className="w-5 h-5 mt-0.5 text-warning rounded border-gray-mid focus:ring-warning"
                      />
                      <div>
                        <div className="text-ink font-bold">Pedido Urgente (Menos de 72h)</div>
                        <div className="text-sm text-slate mt-1">Selecciona esta opción si necesitas las prendas con extrema urgencia. Sujeto a disponibilidad y recargo express.</div>
                      </div>
                    </label>

                    <label className={`flex items-start gap-3 cursor-pointer p-4 border rounded-lg transition-colors ${formData.recurrente ? 'border-blue bg-blue-l' : 'border-gray-mid hover:bg-gray-light'}`}>
                      <input 
                        type="checkbox" 
                        checked={formData.recurrente}
                        onChange={(e) => updateForm('recurrente', e.target.checked)}
                        className="w-5 h-5 mt-0.5 text-blue rounded border-gray-mid focus:ring-blue"
                      />
                      <div>
                        <div className="text-ink font-bold">Es un pedido recurrente</div>
                        <div className="text-sm text-slate mt-1">Haremos pedidos similares en el futuro. Nos ayuda a optimizar los costes de pantallas y preparaciones para ti.</div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 5: Tus datos */}
              {step === 5 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl mb-6">Tus datos de contacto</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Nombre completo *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.nombre}
                        onChange={(e) => updateForm('nombre', e.target.value)}
                        className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Empresa / Marca (Opcional)</label>
                      <input 
                        type="text" 
                        value={formData.empresa}
                        onChange={(e) => updateForm('empresa', e.target.value)}
                        className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => updateForm('email', e.target.value)}
                        className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Teléfono *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.telefono}
                        onChange={(e) => updateForm('telefono', e.target.value)}
                        className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-bold text-ink mb-2">¿Cómo nos conociste?</label>
                    <select 
                      value={formData.comoNosConociste}
                      onChange={(e) => updateForm('comoNosConociste', e.target.value)}
                      className="w-full p-3 border border-gray-mid rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none bg-white"
                    >
                      <option value="">Selecciona...</option>
                      <option value="google">Búsqueda en Google</option>
                      <option value="instagram">Instagram</option>
                      <option value="recomendacion">Recomendación de un amigo/empresa</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>
                  
                  <div className="text-xs text-slate mb-8">
                    Al enviar este formulario, aceptas nuestra <a href="/politica-privacidad" className="text-blue underline">Política de Privacidad</a>. Tus datos solo se usarán para enviarte el presupuesto solicitado.
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-mid mt-4">
                {step > 1 ? (
                  <button 
                    type="button" 
                    onClick={handlePrev}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <ChevronLeft size={18} /> Anterior
                  </button>
                ) : <div></div>}

                {step < totalSteps ? (
                  <button 
                    type="button" 
                    onClick={handleNext}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    Siguiente <ChevronRight size={18} />
                  </button>
                ) : (
                  <button 
                    type="submit"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    Enviar solicitud de presupuesto <Check size={18} />
                  </button>
                )}
              </div>

            </form>
          </div>
        </main>
    </>
      </div>
    </div>
  );
}
