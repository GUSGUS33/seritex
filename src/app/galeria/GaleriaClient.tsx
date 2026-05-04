"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { Search, ZoomIn, X, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos los trabajos' },
  { id: 'serigrafia', name: 'Serigrafía' },
  { id: 'dtf', name: 'Impresión DTF' },
  { id: 'bordado', name: 'Bordado' },
  { id: 'empresas', name: 'Empresas' },
  { id: 'deportes', name: 'Deportes' }
];

const galleryImages = [
  { id: 1, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=Serigrafia+1', category: 'serigrafia', title: 'Camisetas para festival', desc: 'Serigrafía a 3 colores' },
  { id: 2, src: 'https://placehold.co/800x1000/0F2547/FFFFFF?text=Bordado+1', category: 'bordado', title: 'Polos corporativos', desc: 'Bordado en pecho izquierdo' },
  { id: 3, src: 'https://placehold.co/800x600/0F2547/FFFFFF?text=DTF+1', category: 'dtf', title: 'Sudaderas marca de ropa', desc: 'Impresión DTF a todo color' },
  { id: 4, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=Empresas+1', category: 'empresas', title: 'Uniformes logística', desc: 'Serigrafía alta visibilidad' },
  { id: 5, src: 'https://placehold.co/800x1200/0F2547/FFFFFF?text=Deportes+1', category: 'deportes', title: 'Equipación fútbol', desc: 'Dorsales y escudos DTF' },
  { id: 6, src: 'https://placehold.co/800x600/0F2547/FFFFFF?text=Serigrafia+2', category: 'serigrafia', title: 'Tote bags evento', desc: 'Serigrafía 1 color' },
  { id: 7, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=Bordado+2', category: 'bordado', title: 'Gorras personalizadas', desc: 'Bordado 3D frontal' },
  { id: 8, src: 'https://placehold.co/800x1000/0F2547/FFFFFF?text=DTF+2', category: 'dtf', title: 'Camisetas peña', desc: 'DTF gran formato espalda' },
  { id: 9, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=Empresas+2', category: 'empresas', title: 'Batas farmacia', desc: 'Bordado nombre y logo' },
  { id: 10, src: 'https://placehold.co/800x600/0F2547/FFFFFF?text=Deportes+2', category: 'deportes', title: 'Camisetas running', desc: 'Serigrafía transpirable' },
  { id: 11, src: 'https://placehold.co/800x1200/0F2547/FFFFFF?text=Serigrafia+3', category: 'serigrafia', title: 'Merch banda música', desc: 'Serigrafía descarga' },
  { id: 12, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=Bordado+3', category: 'bordado', title: 'Chaquetas softshell', desc: 'Bordado alta definición' },
  { id: 13, src: 'https://placehold.co/800x600/0F2547/FFFFFF?text=DTF+3', category: 'dtf', title: 'Ropa laboral', desc: 'DTF resistente a lavados' },
  { id: 14, src: 'https://placehold.co/800x1000/0F2547/FFFFFF?text=Empresas+3', category: 'empresas', title: 'Delantales hostelería', desc: 'Serigrafía 2 colores' },
  { id: 15, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=Deportes+3', category: 'deportes', title: 'Sudaderas club', desc: 'Bordado escudo grande' },
  { id: 16, src: 'https://placehold.co/800x600/0F2547/FFFFFF?text=Serigrafia+4', category: 'serigrafia', title: 'Camisetas promo', desc: 'Serigrafía económica' },
  { id: 17, src: 'https://placehold.co/800x1200/0F2547/FFFFFF?text=Bordado+4', category: 'bordado', title: 'Polos colegio', desc: 'Bordado escudo escolar' },
  { id: 18, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=DTF+4', category: 'dtf', title: 'Bolsas algodón', desc: 'Impresión DTF fotográfica' },
  { id: 19, src: 'https://placehold.co/800x600/0F2547/FFFFFF?text=Empresas+4', category: 'empresas', title: 'Chalecos obra', desc: 'Serigrafía reflectante' },
  { id: 20, src: 'https://placehold.co/800x1000/0F2547/FFFFFF?text=Deportes+4', category: 'deportes', title: 'Mochilas equipo', desc: 'DTF sobre nylon' },
  { id: 21, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=Serigrafia+5', category: 'serigrafia', title: 'Camisetas staff', desc: 'Serigrafía pecho y espalda' },
  { id: 22, src: 'https://placehold.co/800x600/0F2547/FFFFFF?text=Bordado+5', category: 'bordado', title: 'Parches bordados', desc: 'Parches termoadhesivos' },
  { id: 23, src: 'https://placehold.co/800x1200/0F2547/FFFFFF?text=DTF+5', category: 'dtf', title: 'Sudaderas universidad', desc: 'DTF diseño complejo' },
  { id: 24, src: 'https://placehold.co/800x800/0F2547/FFFFFF?text=Empresas+5', category: 'empresas', title: 'Camisas corporativas', desc: 'Bordado cuello' }
];

export default function GaleriaClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImage !== null) {
      setCurrentImage((currentImage + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImage !== null) {
      setCurrentImage((currentImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Galería de trabajos de Serigrafía Textil",
    "description": "Ejemplos de trabajos realizados en serigrafía, bordado y DTF.",
    "image": galleryImages.map(img => ({
      "@type": "ImageObject",
      "contentUrl": img.src,
      "name": img.title,
      "description": img.desc
    }))
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage"
    }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />

      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-6">
            Galería de trabajos · <span className="text-blue-l">Serigrafía textil profesional</span>
          </h1>
          <p className="text-xl text-white/80 font-light">
            Echa un vistazo a algunos de nuestros últimos proyectos. Calidad, detalle y acabados impecables en cada prenda.
          </p>
        </div>
      </section>

      {/* FILTROS Y GALERÍA */}
      <section className="py-16">
        <div className="container-custom">
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-blue text-white shadow-md' 
                    : 'bg-gray-light text-slate hover:bg-gray-mid'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid Masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((img, index) => (
              <div 
                key={img.id} 
                className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">{img.title}</h3>
                    <p className="text-blue-l text-sm mb-3">{img.desc}</p>
                    <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center text-white">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-slate">No hay imágenes en esta categoría.</p>
            </div>
          )}

        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && currentImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={closeLightbox}
          >
            <X size={36} />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 bg-navy/50 rounded-full hover:bg-blue"
            onClick={prevImage}
          >
            <ChevronRight size={36} className="rotate-180" />
          </button>

          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredImages[currentImage].src} 
              alt={filteredImages[currentImage].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-white font-bold text-2xl mb-2">{filteredImages[currentImage].title}</h3>
              <p className="text-blue-l text-lg">{filteredImages[currentImage].desc}</p>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 bg-navy/50 rounded-full hover:bg-blue"
            onClick={nextImage}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}

      {/* CTA FLOTANTE */}
      <section className="py-20 bg-gray-light border-t border-gray-mid">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">¿Te gusta lo que ves?</h2>
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            Podemos hacer esto y mucho más por tu marca o empresa. Solicita un presupuesto y empecemos a trabajar juntos.
          </p>
          <a 
            href="/presupuesto" 
            className="inline-flex bg-orange hover:bg-orange-d text-white px-10 py-4 rounded-xl font-bold text-lg transition-all items-center gap-2 shadow-lg"
          >
            Solicitar presupuesto <ChevronRight size={20} />
          </a>
        </div>
      </section>
    </div>
    </>
  );
}
