import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeria | Serigrafía Textil',
  description: 'Información sobre galeria | serigrafía textil en Serigrafía Textil.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/galeria',
  },
};

import GaleriaClient from './GaleriaClient';

export default function Galeria() {
  return <GaleriaClient />;
}
