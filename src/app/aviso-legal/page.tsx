import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | Serigrafía Textil',
  description: 'Página de aviso legal | serigrafía textil de Serigrafía Textil.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/aviso-legal',
  },
  robots: {
    index: false,
    follow: false,
  },
};

import React from 'react';

export default function AvisoLegal() {
  

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-black py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
        <div className="space-y-4 text-sm">
          <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), a continuación se reflejan los siguientes datos:</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">1. Datos identificativos</h2>
          <p>La empresa titular de dominio web es {'{{VARIABLE}}'} (en adelante, Serigrafía Textil), con domicilio a estos efectos en {'{{DIRECCION_EMPRESA}}'} número de C.I.F.: {'{{CIF_EMPRESA}}'} inscrita en el Registro Mercantil de {'{{CIUDAD_REGISTRO}}'}. Correo electrónico de contacto: {'{{EMAIL_EMPRESA}}'} del sitio web.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">2. Usuarios</h2>
          <p>El acceso y/o uso de este portal de Serigrafía Textil atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">3. Uso del portal</h2>
          <p>El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Serigrafía Textil o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">4. Propiedad intelectual e industrial</h2>
          <p>Serigrafía Textil por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Todos los derechos reservados.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">5. Exclusión de garantías y responsabilidad</h2>
          <p>Serigrafía Textil no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">6. Modificaciones</h2>
          <p>Serigrafía Textil se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p>
        </div>
      </div>
    </div>
    </>
  );
}
