import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pide tu presupuesto de serigrafía textil | Respuesta en 24h',
  description: 'Calcula el precio de tu pedido de ropa personalizada. Presupuesto rápido y sin compromiso para serigrafía, DTF o bordado.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/presupuesto',
  },
};

import PresupuestoClient from './PresupuestoClient';
import { Suspense } from 'react';

export default function Presupuesto() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <PresupuestoClient />
    </Suspense>
  );
}
