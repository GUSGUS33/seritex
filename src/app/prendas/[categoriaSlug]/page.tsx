import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getProductsByCategoryWithFragments } from '@/lib/api';

// Forzamos a no cacheadar para pruebas
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { categoriaSlug: string } }): Promise<Metadata> {
  const categoryTitle = params.categoriaSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${categoryTitle} para Personalizar con Logo | Serigrafía Textil`,
    description: `Catálogo de ${categoryTitle} de alta calidad preparadas para estampar tu logotipo mediante serigrafía, DTF o bordado industrial. Pide presupuesto rápido.`,
    alternates: {
      canonical: `https://serigrafia-textil.es/prendas/${params.categoriaSlug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: { categoriaSlug: string } }) {
  let products: any[] = [];
  
  try {
    const data: any = await getProductsByCategoryWithFragments(params.categoriaSlug, 50);
    products = data?.products?.nodes || [];
  } catch (error) {
    console.error("Error fetching category products:", error);
  }

  const categoryTitle = params.categoriaSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `${categoryTitle} para Personalizar`,
          "description": `Catálogo de prendas en la categoría ${categoryTitle} listas para marcaje en nuestro taller de serigrafía.`,
          "url": `https://serigrafia-textil.es/prendas/${params.categoriaSlug}`
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://serigrafia-textil.es/" },
            { "@type": "ListItem", "position": 2, "name": "Ropa Personalizable", "item": "https://serigrafia-textil.es/prendas" },
            { "@type": "ListItem", "position": 3, "name": categoryTitle, "item": `https://serigrafia-textil.es/prendas/${params.categoriaSlug}` }
          ]
        }) }}
      />
      
      {/* Header Categoría */}
      <section className="bg-navy text-white pt-32 pb-20 relative">
        <div className="container-custom relative z-10">
          <nav className="flex text-sm text-white/60 mb-6 font-medium" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-blue-l transition-colors">Inicio</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight size={16} className="mx-1" />
                  <Link href="/prendas" className="hover:text-blue-l transition-colors">Catálogo</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight size={16} className="mx-1" />
                  <span className="text-white/90">{categoryTitle}</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-4">
            {categoryTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-l to-blue">para estampar</span>
          </h1>
          <p className="text-xl text-white/80 font-light max-w-2xl">
            Bases textiles seleccionadas por nuestro taller, perfectas para grabar el logotipo de tu empresa o evento.
          </p>
        </div>
      </section>

      {/* Grid de Productos reales desde GraphQL */}
      <section className="py-20">
        <div className="container-custom">
          {products.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-mid">
              <h2 className="text-2xl font-bold text-navy mb-4">Aún no hay productos en esta categoría.</h2>
              <p className="text-slate">Estamos actualizando nuestro catálogo conectado a WooCommerce.</p>
              <Link href="/prendas" className="mt-6 inline-flex items-center text-blue font-bold">
                <ChevronRight size={16} /> Ver otras categorías
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue/10 border border-gray-mid transition-all flex flex-col group">
                  <Link href={`/producto/${product.slug}`} tabIndex={-1} aria-hidden="true" className="aspect-[4/5] overflow-hidden relative bg-gray-100 p-4 flex items-center justify-center block">
                    <Image 
                      src={product.featuredImage?.node?.sourceUrl || `https://placehold.co/400x500/E2E8F0/0F2547?text=Sin+Imagen`} 
                      alt={product.featuredImage?.node?.altText || product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-navy text-lg mb-2 leading-tight">
                      <Link href={`/producto/${product.slug}`} className="hover:text-blue transition-colors" title={`Ver información de ${product.name}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <div className="text-sm text-slate mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: product.shortDescription || '' }} />
                    <div className="mt-auto flex items-start flex-col">
                      {product.price && (
                        <span className="font-bold text-lg text-ink" dangerouslySetInnerHTML={{ __html: product.price }} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
    </div>
  );
}
