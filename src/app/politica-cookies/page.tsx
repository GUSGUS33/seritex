import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica Cookies | Serigrafía Textil',
  description: 'Página de politica cookies | serigrafía textil de Serigrafía Textil.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/politica-cookies',
  },
  robots: {
    index: false,
    follow: false,
  },
};

import React from 'react';

export default function PoliticaCookies() {
  

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-black py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>
        <div className="space-y-4 text-sm">
          <p>Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">1. Tipos de cookies que utilizamos</h2>
          <p>En este sitio web utilizamos los siguientes tipos de cookies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookies técnicas (Propias):</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan. Son esenciales para el funcionamiento de la web.</li>
            <li><strong>Cookies de análisis (De terceros):</strong> Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos. Utilizamos Google Analytics 4 (GA4) para este propósito.</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-6 mb-2">2. Cookies de terceros (Google Analytics 4)</h2>
          <p>Este sitio web utiliza Google Analytics 4, un servicio analítico de web prestado por Google, Inc. GA4 utiliza "cookies" para ayudar al website a analizar el uso que hacen los usuarios del sitio web. La información que genera la cookie acerca de su uso del website (incluyendo su dirección IP anonimizada) será directamente transmitida y archivada por Google en los servidores de Estados Unidos.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">3. Cómo desactivar las cookies</h2>
          <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Chrome:</strong> Configuración - Privacidad y seguridad - Cookies y otros datos de sitios.</li>
            <li><strong>Firefox:</strong> Opciones - Privacidad y seguridad - Cookies y datos del sitio.</li>
            <li><strong>Safari:</strong> Preferencias - Privacidad - Bloquear todas las cookies.</li>
            <li><strong>Edge:</strong> Configuración - Permisos del sitio - Cookies y datos del sitio.</li>
          </ul>
          <p>Tenga en cuenta que si desactiva las cookies técnicas, es posible que algunas funcionalidades de la web no operen correctamente.</p>
        </div>
      </div>
    </div>
    </>
  );
}
