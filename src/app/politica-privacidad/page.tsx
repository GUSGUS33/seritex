import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica Privacidad | Serigrafía Textil',
  description: 'Página de politica privacidad | serigrafía textil de Serigrafía Textil.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/politica-privacidad',
  },
  robots: {
    index: false,
    follow: false,
  },
};

import React from 'react';

export default function PoliticaPrivacidad() {
  

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-black py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
        <div className="space-y-4 text-sm">
          <p>De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD), le informamos de lo siguiente:</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">1. Responsable del tratamiento</h2>
          <p>El responsable del tratamiento de sus datos es {'{{NOMBRE_EMPRESA}}'}, con CIF {'{{CIF_EMPRESA}}'} y domicilio en {'{{DIRECCION_EMPRESA}}'}.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">2. Finalidad del tratamiento</h2>
          <p>Los datos personales que nos proporcione a través de los formularios de contacto o solicitud de presupuesto serán tratados con la única finalidad de:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gestionar la solicitud de presupuesto de servicios de personalización textil.</li>
            <li>Atender sus dudas, consultas o peticiones de información.</li>
            <li>Mantener la relación comercial en caso de contratación de nuestros servicios.</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-6 mb-2">3. Legitimación</h2>
          <p>La base legal para el tratamiento de sus datos es el consentimiento expreso que nos otorga al marcar la casilla de aceptación de esta política de privacidad antes de enviar el formulario, así como la necesidad del tratamiento para la ejecución de un contrato o medidas precontractuales.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">4. Conservación de los datos</h2>
          <p>Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">5. Destinatarios</h2>
          <p>Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal o sea estrictamente necesario para la prestación del servicio (por ejemplo, empresas de mensajería para el envío de los pedidos).</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">6. Derechos ARCO</h2>
          <p>Usted tiene derecho a obtener confirmación sobre si en {'{{NOMBRE_EMPRESA}}'} estamos tratando sus datos personales. Por tanto, tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios. Podrá ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) dirigiendo un escrito a {'{{EMAIL_EMPRESA}}'}.</p>
        </div>
      </div>
    </div>
    </>
  );
}
