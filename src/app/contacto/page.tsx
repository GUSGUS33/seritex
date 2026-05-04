import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Serigrafía Textil',
  description: 'Contacta con nuestro taller de serigrafía textil. Resolvemos tus dudas y te asesoramos en tu proyecto.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/contacto',
  },
};

import React from 'react';
import { Mail, MessageCircle, Phone, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function Contacto() {
  const TELEFONO_WA = "34600000000";
  const DOMINIO = "serigrafia-textil.es";
  const TELEFONO = "600 000 000";

  

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - Serigrafía Textil",
    "description": "Página de contacto para consultas y presupuestos de serigrafía textil.",
    "url": "https://serigrafia-textil.es/contacto/",
    "mainEntity": {
      "@type": "Organization",
      "name": "Serigrafía Textil",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": TELEFONO,
          "contactType": "customer service",
          "availableLanguage": "Spanish"
        },
        {
          "@type": "ContactPoint",
          "telephone": TELEFONO_WA,
          "contactType": "WhatsApp support",
          "availableLanguage": "Spanish"
        }
      ]
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage"
    }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />

      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-6">
            Contacta · <span className="text-blue-l">Respondemos en menos de 24h</span>
          </h1>
          <p className="text-xl text-white/80 font-light">
            Estamos aquí para resolver tus dudas y ayudarte a dar forma a tu proyecto de ropa personalizada.
          </p>
        </div>
      </section>

      {/* OPCIONES DE CONTACTO */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Bloque 1: Presupuesto */}
            <div className="bg-gray-light p-8 rounded-2xl border border-gray-mid flex flex-col h-full">
              <div className="w-14 h-14 bg-blue text-white rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Solicitar presupuesto</h2>
              <p className="text-slate mb-8 flex-grow">
                Si ya sabes lo que necesitas (prendas, cantidades, diseño), la forma más rápida es usar nuestro formulario online. Te enviaremos un presupuesto detallado.
              </p>
              <a 
                href="/presupuesto" 
                className="btn btn-primary w-full"
              >
                Ir al formulario <ChevronRight size={18} />
              </a>
            </div>

            {/* Bloque 2: WhatsApp */}
            <div className="bg-gray-light p-8 rounded-2xl border border-gray-mid flex flex-col h-full">
              <div className="w-14 h-14 bg-[#25D366] text-white rounded-xl flex items-center justify-center mb-6">
                <MessageCircle size={28} />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">WhatsApp</h2>
              <p className="text-slate mb-8 flex-grow">
                ¿Tienes dudas rápidas sobre técnicas, plazos o disponibilidad? Escríbenos por WhatsApp y te contestaremos sobre la marcha durante nuestro horario comercial.
              </p>
              <a 
                href={`https://wa.me/${TELEFONO_WA}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-xl font-bold transition-colors items-center justify-center gap-2 w-full"
              >
                Escribir al {TELEFONO_WA}
              </a>
            </div>

            {/* Bloque 3: Email */}
            <div className="bg-gray-light p-8 rounded-2xl border border-gray-mid flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-l/30 text-blue rounded-xl flex items-center justify-center mb-6">
                <Mail size={28} />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Email directo</h2>
              <p className="text-slate mb-8 flex-grow">
                Para consultas generales, envío de archivos pesados o seguimiento de pedidos en curso, puedes escribirnos directamente a nuestro correo electrónico.
              </p>
              <a 
                href={`mailto:hola@${DOMINIO}`} 
                className="inline-flex bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-xl font-bold transition-colors items-center justify-center gap-2 w-full"
              >
                hola@{DOMINIO}
              </a>
            </div>

            {/* Bloque 4: Teléfono */}
            <div className="bg-gray-light p-8 rounded-2xl border border-gray-mid flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-l/30 text-blue rounded-xl flex items-center justify-center mb-6">
                <Phone size={28} />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Atención telefónica</h2>
              <p className="text-slate mb-8 flex-grow">
                Si prefieres hablar con nosotros para explicarte mejor o necesitas asesoramiento técnico complejo, llámanos. Estaremos encantados de atenderte.
              </p>
              <a 
                href={`tel:+34${TELEFONO.replace(/\s/g, '')}`} 
                className="inline-flex bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-xl font-bold transition-colors items-center justify-center gap-2 w-full"
              >
                Llamar al {TELEFONO}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INFO ADICIONAL */}
      <section className="py-16 border-t border-gray-mid">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start gap-4">
              <Clock className="text-blue shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Horario de atención</h3>
                <p className="text-slate">Lunes a Viernes:<br/>09:00h - 14:00h<br/>16:00h - 19:00h</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Envíos y logística</h3>
                <p className="text-slate">Gestionamos todo online y enviamos a toda la península y Baleares. No disponemos de tienda física para atención al público sin cita previa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
