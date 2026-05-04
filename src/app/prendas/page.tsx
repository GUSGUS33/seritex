import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { getProductCategories } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Catálogo de Ropa para Personalizar | Serigrafía Textil',
  description: 'Catálogo mayorista de ropa para personalizar con tu logotipo. Estampamos en nuestro taller textil camisetas, sudaderas, polos y ropa laboral en serigrafía, DTF y bordado.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/prendas',
  },
};

export default async function Prendas() {
  
  let categories: any[] = [];
  
  try {
    const data: any = await getProductCategories();
    categories = data?.productCategories?.nodes || [];
  } catch (error) {
    console.error("Error cargando categorías de WooCommerce:", error);
  }

  // Si no carga el WP, caemos en unas categorías por defecto amigables
  if (categories.length === 0) {
    categories = [
       { slug: 'camisetas', name: 'Camisetas', description: 'Básicas, premium y orgánicas para estampar.', image: { sourceUrl: 'https://placehold.co/600x400/F8FAFC/0F2547?text=Camisetas' } },
       { slug: 'sudaderas', name: 'Sudaderas', description: 'Cálidas, orgánicas y duraderas.', image: { sourceUrl: 'https://placehold.co/600x400/F8FAFC/0F2547?text=Sudaderas' } },
       { slug: 'ropa-laboral', name: 'Ropa Laboral', description: 'Uniformes resistentes para uso profesional.', image: { sourceUrl: 'https://placehold.co/600x400/F8FAFC/0F2547?text=Laboral' } },
    ];
  }

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Catálogo Textil para Marcaje Personalizado",
          "description": "Explora nuestras bases de ropa en blanco para personalizar. Listas para serigrafía, DTF o bordado.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Taller de Serigrafía Textil"
          }
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://serigrafia-textil.es/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo de Prendas", "item": "https://serigrafia-textil.es/prendas" }
          ]
        }) }}
      />
      
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/bgtextil/1920/1080')] opacity-5 mix-blend-overlay object-cover"></div>
        <div className="container-custom text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-display leading-tight mb-6 mt-16 md:mt-8">
            Catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-l to-blue">prendas lisas</span><br/>listas para tu logo
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Te ofrecemos las mejores bases textiles del mercado diseñadas específicamente para aguantar y lucir perfectas bajo nuestras tintas de serigrafía o agujas de bordado.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/presupuesto" className="inline-flex items-center justify-center gap-2 bg-blue text-white font-bold py-4 px-8 rounded-full hover:bg-blue-d transition-colors shadow-sm">
              Solicitar Presupuesto <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat: any) => (
              <Link 
                href={`/prendas/${cat.slug}`} 
                key={cat.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue/10 border border-gray-mid transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                  <Image 
                    src={cat.image?.sourceUrl || `https://placehold.co/600x400/E2E8F0/0F2547?text=${cat.name}`} 
                    alt={cat.image?.altText || cat.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {cat.count !== undefined && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm">
                      {cat.count} modelos
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-slate text-sm mb-6 flex-1" dangerouslySetInnerHTML={{ __html: cat.description || 'Línea de prendas lista para marcaje publicitario o corporativo.' }} />
                  
                  <div className="inline-flex items-center font-bold text-blue group-hover:translate-x-2 transition-transform">
                    Ver productos de esta categoría <ChevronRight size={18} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
    </>
  );
}
