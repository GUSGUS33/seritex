"use client";

import React from 'react';

export default function PrecioOrientativo() {
  return (
    <div className="bg-blue-l py-4 px-6 rounded-xl my-8 text-center border border-blue/20">
      <p className="text-sm text-slate font-medium">
        <span className="font-bold text-navy">Precio orientativo:</span> Serigrafía desde ~3€/ud · DTF desde ~6€/ud · Bordado desde ~5€/ud · <span className="italic">Precio final según prenda, colores y cantidad.</span>
      </p>
    </div>
  );
}
