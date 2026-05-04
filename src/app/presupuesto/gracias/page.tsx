import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¡Gracias por tu solicitud! | Serigrafía Textil',
  description: 'Hemos recibido tu solicitud de presupuesto. Te contactaremos en breve.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/presupuesto/gracias',
  },
  robots: {
    index: false,
    follow: false,
  },
};

import GraciasClient from './GraciasClient';

export default function Gracias() {
  return <GraciasClient />;
}
