"use client";

import React from 'react';
import Image from 'next/image';

export interface Prenda {
  id: string;
  nombre: string;
  imagen: string;
  gramaje: string;
  composicion: string;
  marcas: string;
  usoIdeal: string;
}

const staticPrendas: Prenda[] = [
  {
    id: 'camisetas-basica',
    nombre: 'Camiseta Básica',
    imagen: 'https://placehold.co/400x500/F8FAFC/0F2547?text=Camiseta+Basica',
    gramaje: '145 - 150 g/m²',
    composicion: '100% Algodón',
    marcas: 'Fruit of the Loom, B&C',
    usoIdeal: 'Eventos masivos, promociones, merchandising económico.'
  },
  {
    id: 'camisetas-media',
    nombre: 'Camiseta Media',
    imagen: 'https://placehold.co/400x500/F8FAFC/0F2547?text=Camiseta+Media',
    gramaje: '160 - 165 g/m²',
    composicion: '100% Algodón semi-peinado',
    marcas: 'SOL\'S, Gildan',
    usoIdeal: 'Ropa laboral, merchandising de calidad, peñas.'
  },
  {
    id: 'camisetas-premium',
    nombre: 'Camiseta Premium',
    imagen: 'https://placehold.co/400x500/F8FAFC/0F2547?text=Camiseta+Premium',
    gramaje: '180 - 190 g/m²',
    composicion: '100% Algodón orgánico peinado',
    marcas: 'Stanley/Stella, B&C',
    usoIdeal: 'Marcas de ropa, retail, merchandising premium.'
  },
  {
    id: 'camisetas-heavyweight',
    nombre: 'Camiseta Heavyweight',
    imagen: 'https://placehold.co/400x500/F8FAFC/0F2547?text=Camiseta+Heavyweight',
    gramaje: '200 - 240 g/m²',
    composicion: '100% Algodón grueso',
    marcas: 'Stanley/Stella, Build Your Brand',
    usoIdeal: 'Streetwear, marcas de moda urbana.'
  },
  {
    id: 'sudaderas',
    nombre: 'Sudaderas (Capucha / Cuello Redondo)',
    imagen: 'https://placehold.co/400x500/F8FAFC/0F2547?text=Sudaderas',
    gramaje: '280 - 350 g/m²',
    composicion: 'Algodón / Poliéster (opciones orgánicas)',
    marcas: 'Stanley/Stella, AWDis, B&C',
    usoIdeal: 'Ropa de invierno, uniformes, marcas de ropa.'
  },
  {
    id: 'polos',
    nombre: 'Polos',
    imagen: 'https://placehold.co/400x500/F8FAFC/0F2547?text=Polos',
    gramaje: '180 - 220 g/m²',
    composicion: '100% Algodón piqué / Mezcla',
    marcas: 'B&C, SOL\'S',
    usoIdeal: 'Uniformes de hostelería, ropa corporativa.'
  },
  {
    id: 'bolsas',
    nombre: 'Bolsas Tote Bag',
    imagen: 'https://placehold.co/400x500/F8FAFC/0F2547?text=Bolsas',
    gramaje: '140 - 300 g/m²',
    composicion: '100% Algodón (opciones recicladas)',
    marcas: 'Westford Mill, Stanley/Stella',
    usoIdeal: 'Merchandising ecológico, tiendas, eventos.'
  },
  {
    id: 'gorras',
    nombre: 'Gorras',
    imagen: 'https://placehold.co/400x500/F8FAFC/0F2547?text=Gorras',
    gramaje: 'Varios',
    composicion: 'Algodón / Poliéster',
    marcas: 'Beechfield, Yupoong',
    usoIdeal: 'Merchandising, uniformes, eventos deportivos.'
  }
];

interface PrendasGridProps {
  productos?: Prenda[];
}

export default function PrendasGrid({ productos }: PrendasGridProps) {
  const displayProducts = productos && productos.length > 0 ? productos : staticPrendas;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {displayProducts.map((prenda) => (
        <div key={prenda.id} className="bg-white rounded-2xl shadow-sm border border-gray-light overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative w-full aspect-[4/5]">
            <Image src={prenda.imagen} alt={prenda.nombre} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-navy mb-4">{prenda.nombre}</h3>
            <ul className="space-y-2 text-sm text-slate">
              <li><strong className="text-ink">Gramaje:</strong> {prenda.gramaje}</li>
              <li><strong className="text-ink">Composición:</strong> {prenda.composicion}</li>
              <li><strong className="text-ink">Marcas:</strong> {prenda.marcas}</li>
              <li><strong className="text-ink">Uso ideal:</strong> {prenda.usoIdeal}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
