"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const location = usePathname();
  const TELEFONO_WA = "34600000000";

  const pathname = usePathname();

  // No mostrar en la página de presupuesto
  if (pathname?.startsWith('/presupuesto')) {
    return null;
  }

  return (
    <a
      href={`https://wa.me/${TELEFONO_WA}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
