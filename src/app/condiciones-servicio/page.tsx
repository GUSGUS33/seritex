import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Condiciones Servicio | Serigrafía Textil',
  description: 'Página de condiciones servicio | serigrafía textil de Serigrafía Textil.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/condiciones-servicio',
  },
  robots: {
    index: false,
    follow: false,
  },
};

import React from 'react';

export default function CondicionesServicio() {
  

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-ink py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }}
      />
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight mb-8 text-navy">
          Condiciones de Servicio
        </h1>
        
        <div className="prose prose-lg max-w-none text-slate">
          <p className="mb-6">
            Las presentes Condiciones Generales de Servicio regulan la prestación de servicios de personalización textil por parte de Serigrafía Textil.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">1. Prendas aportadas por el cliente</h2>
          <p className="mb-4">
            En caso de que el cliente decida proporcionar sus propias prendas para la personalización, se aplicarán las siguientes condiciones específicas:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Porcentaje de error aceptable:</strong> El proceso de personalización textil (serigrafía, bordado, DTF, etc.) es un proceso industrial/artesanal que conlleva un riesgo inherente. El cliente acepta un margen de error o merma del <strong>3% sobre el total de prendas entregadas (con un mínimo de 1 unidad)</strong>. Serigrafía Textil no se hará responsable de reponer ni abonar el coste de las prendas que resulten dañadas dentro de este margen.
            </li>
            <li>
              <strong>Exención de responsabilidad por composición:</strong> El cliente es responsable de informar correctamente sobre la composición de las prendas. Serigrafía Textil queda eximida de cualquier responsabilidad por daños en las prendas (quemaduras, encogimiento, decoloración) o mala adherencia de la personalización si la composición real del tejido no coincide con la declarada, o si las prendas cuentan con tratamientos químicos previos (hidrófugos, antimanchas, tintes inestables, etc.) no comunicados.
            </li>
            <li>
              <strong>Estado de entrega:</strong> Las prendas deben entregarse limpias, sin arrugas excesivas y preferiblemente desembolsadas. Si las prendas requieren un proceso de desembolsado y manipulación previa, se podrá aplicar un recargo adicional que será notificado al cliente.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">2. Plazos de entrega</h2>
          <p className="mb-6">
            Los plazos de entrega son estimados y comienzan a contar desde la confirmación del diseño (mockup) y la recepción del pago o anticipo acordado. Retrasos en la aprobación del diseño por parte del cliente o en la entrega de prendas (si las aporta el cliente) modificarán la fecha de entrega final.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">3. Propiedad intelectual</h2>
          <p className="mb-6">
            El cliente declara poseer los derechos de autor, uso o explotación de los diseños, logotipos o imágenes proporcionados para su reproducción. Serigrafía Textil no se hace responsable de posibles infracciones de derechos de propiedad intelectual de terceros.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
