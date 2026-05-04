import { fetchGraphQL } from '@/lib/graphql';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight, Truck, Palette, ShieldCheck, Clock, Medal } from 'lucide-react';
import { getProductsByCategoryWithFragments } from '@/lib/api';

export const revalidate = 0; // Forzamos refresco completo para leer la base de datos de WooCommerce

// Consulta específica para construir toda la ficha técnica de un producto individual (Sea Simple o Variable)
const GET_PRODUCT_BY_SLUG = `
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      name
      slug
      description
      shortDescription
      productCategories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      galleryImages {
        nodes {
          sourceUrl
        }
      }
      ... on SimpleProduct {
        price
        regularPrice
        stockStatus
      }
      ... on VariableProduct {
        price
        regularPrice
        stockStatus
      }
    }
  }
`;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  let title = "Producto no encontrado";
  let description = "Prenda lista para marcaje";
  try {
    const data: any = await fetchGraphQL(GET_PRODUCT_BY_SLUG, { slug: params.slug });
    if (data?.product) {
      title = data.product.name;
      // Tratar de sacar descripción corta sin HTML para los metas
      if (data.product.shortDescription) {
        description = data.product.shortDescription.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';
      }
    }
  } catch (e) {}

  return {
    title: `${title} para Personalizar | Taller Textil`,
    description: `${description} Pide tu presupuesto de marcaje en serigrafía, bordado o DTF.`,
    alternates: {
      canonical: `https://serigrafia-textil.es/producto/${params.slug}`,
    },
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  try {
    const data: any = await fetchGraphQL(GET_PRODUCT_BY_SLUG, { slug: params.slug });
    const product = data?.product;

    if (!product) {
      return (
         <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl font-bold text-navy mb-4">Producto no encontrado</h1>
            <p className="text-slate mb-8">El artículo que buscas puede haber sido descatalogado o movido en el inventario.</p>
            <Link href="/prendas" className="bg-blue hover:bg-blue-d text-white px-6 py-3 rounded-full font-bold">
               Volver al catálogo web
            </Link>
         </div>
      );
    }

    const imagenPrincipal = product.featuredImage?.node?.sourceUrl || 'https://placehold.co/600x600/E2E8F0/0F2547?text=Sin+Imagen';
    const firstCategory = product.productCategories?.nodes?.[0];

    let relatedProducts: any[] = [];
    if (firstCategory) {
      try {
        const relData: any = await getProductsByCategoryWithFragments(firstCategory.slug, 5);
        relatedProducts = relData?.products?.nodes?.filter((p: any) => p.slug !== params.slug).slice(0, 4) || [];
      } catch (e) {}
    }

    // Preparar campos para el JSON-LD de Producto
    const cleanShortDesc = product.shortDescription ? product.shortDescription.replace(/<[^>]*>?/gm, '') : 'Prenda en blanco ideal para estampar tu logotipo mediante las mejores técnicas de marcaje.';

    return (
      <div className="min-h-screen bg-gray-light pb-20 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${product.name} (Para Personalizar)`,
            "image": imagenPrincipal,
            "description": cleanShortDesc,
            "sku": product.id,
            "brand": {
              "@type": "Brand",
              "name": "Catálogo Serigrafía Textil"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": (product.stockStatus === "IN_STOCK" || product.stockStatus === "instock") ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              "priceCurrency": "EUR",
              "offerCount": "1",
              "lowPrice": "0",
              "url": `https://serigrafia-textil.es/producto/${product.slug}`
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
              { "@type": "ListItem", "position": 2, "name": "Prendas", "item": "https://serigrafia-textil.es/prendas" },
              ...(firstCategory ? [{ "@type": "ListItem", "position": 3, "name": firstCategory.name, "item": `https://serigrafia-textil.es/prendas/${firstCategory.slug}` }] : []),
              { "@type": "ListItem", "position": firstCategory ? 4 : 3, "name": product.name, "item": `https://serigrafia-textil.es/producto/${product.slug}` }
            ]
          }) }}
        />
        
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-24">
          
          {/* Navegación Breadcrumb Visual */}
          <nav className="flex text-sm text-slate mb-6 font-medium bg-white px-6 py-3 rounded-full shadow-sm border border-gray-mid w-fit" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-blue transition-colors">Inicio</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight size={16} className="mx-1 text-slate/50" />
                  <Link href="/prendas" className="hover:text-blue transition-colors">Prendas</Link>
                </div>
              </li>
              {firstCategory && (
                <li>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="mx-1 text-slate/50" />
                    <Link href={`/prendas/${firstCategory.slug}`} className="hover:text-blue transition-colors">{firstCategory.name}</Link>
                  </div>
                </li>
              )}
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight size={16} className="mx-1 text-slate/50" />
                  <span className="text-navy">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <div className="bg-white rounded-3xl shadow-sm border border-gray-mid overflow-hidden p-6 md:p-12 relative">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
               
               {/* -------------------- COLUMNA IZQUIERDA: IMÁGENES -------------------- */}
               <div>
                  <div className="aspect-[4/5] bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-mid/50 mb-4 sticky top-32">
                    <img src={imagenPrincipal} alt={product.featuredImage?.node?.altText || product.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  {product.galleryImages?.nodes?.length > 0 && (
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {product.galleryImages.nodes.map((img: any, idx: number) => (
                        <div key={idx} className="w-24 h-24 shrink-0 rounded-xl bg-gray-50 border border-gray-mid/50 flex items-center justify-center p-2 cursor-pointer hover:border-blue transition-colors">
                           <img src={img.sourceUrl} className="w-full h-full object-contain mix-blend-multiply" alt="Galería" />
                        </div>
                      ))}
                    </div>
                  )}
               </div>

               {/* -------------------- COLUMNA DERECHA: INFORMACIÓN -------------------- */}
               <div className="flex flex-col">
                  <div className="mb-6">
                    <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-navy leading-tight mb-4">
                      {product.name}
                    </h1>
                    {product.price && (
                      <div className="text-3xl font-bold text-ink" dangerouslySetInnerHTML={{ __html: product.price }} />
                    )}
                    {(product.stockStatus === "IN_STOCK" || product.stockStatus === "instock") && (
                       <span className="inline-flex items-center gap-1 text-success text-sm font-bold mt-2">
                         <div className="w-2 h-2 rounded-full bg-success"></div> Stock Disponible en Almacén
                       </span>
                    )}
                  </div>

                  <div className="prose prose-blue text-slate mb-8 leading-relaxed max-w-none" dangerouslySetInnerHTML={{ __html: product.shortDescription || '' }} />

                  {/* BLOQUE CONFIANZA / TALLER */}
                  <div className="bg-blue-l/30 rounded-2xl p-6 mb-8 border border-blue-l">
                     <h3 className="font-bold text-navy flex items-center gap-2 mb-4">
                        <Palette className="text-blue" size={20} /> Técnicas de marcaje recomendadas
                     </h3>
                     <ul className="space-y-3 text-sm text-slate list-none pl-0 m-0">
                       <li className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-white/50 shadow-sm m-0">
                         <CheckCircle2 size={18} className="text-success shrink-0" /> 
                         <span><span className="font-bold text-navy">Serigrafía</span> (Rentable a partir de 50 uds)</span>
                       </li>
                       <li className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-white/50 shadow-sm m-0">
                         <CheckCircle2 size={18} className="text-success shrink-0" /> 
                         <span><span className="font-bold text-navy">DTF a Todo Color</span> (Ideal logotipos vívidos)</span>
                       </li>
                       <li className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-white/50 shadow-sm m-0">
                         <CheckCircle2 size={18} className="text-success shrink-0" /> 
                         <span><span className="font-bold text-navy">Bordado Industrial</span> (Durabilidad y distinción)</span>
                       </li>
                     </ul>
                  </div>

                  {/* BOTTOM ACTION / CTA COMPRA MARKETING */}
                  <div className="mt-10 pt-8 border-t border-gray-mid bg-gray-50/80 -mx-6 md:-mx-12 -mb-6 md:-mb-12 p-6 md:p-12">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-navy mb-2 font-display">¿Listo para personalizar este modelo?</h3>
                      <p className="text-slate">Te asesoramos y enviamos una propuesta a medida sin compromiso.</p>
                    </div>
                    <Link 
                      href={`/presupuesto?prenda=${product.slug}`}
                      className="bg-orange hover:bg-orange-d text-white text-center rounded-2xl font-extrabold py-5 px-8 w-full flex items-center justify-center gap-3 shadow-xl shadow-orange/30 transition-all text-xl group"
                    >
                      Pedir Presupuesto Ahora <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-l/30 flex items-center justify-center text-blue"><ShieldCheck size={24} /></div>
                        <span className="text-sm font-bold text-navy leading-tight">Diseño Previo Gratuito</span>
                      </div>
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-l/30 flex items-center justify-center text-blue"><Clock size={24} /></div>
                        <span className="text-sm font-bold text-navy leading-tight">Producción Expres</span>
                      </div>
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-l/30 flex items-center justify-center text-blue"><Medal size={24} /></div>
                        <span className="text-sm font-bold text-navy leading-tight">Marcaje Premium</span>
                      </div>
                    </div>
                  </div>

               </div>
            </div>

            {/* SECCIÓN DESCRIPCIÓN LARGA (Composición Técnica) */}
            {product.description && (
              <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-mid">
                <div className="max-w-4xl">
                  <h2 className="text-2xl font-bold text-navy mb-6 font-display">Especificaciones Técnicas</h2>
                  <div className="prose prose-lg prose-blue text-slate max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
              </div>
            )}
          </div>

          {/* PRODUCTOS RELACIONADOS */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-10">
              <h2 className="text-3xl font-bold text-navy mb-8 font-display text-center">Otras opciones en {firstCategory.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((rel: any) => (
                  <div key={rel.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue/10 border border-gray-mid transition-all flex flex-col group">
                    <Link href={`/producto/${rel.slug}`} tabIndex={-1} aria-hidden="true" className="aspect-[4/5] overflow-hidden relative bg-gray-100 p-4 flex items-center justify-center block">
                      <img src={rel.featuredImage?.node?.sourceUrl || 'https://placehold.co/400x500/E2E8F0/0F2547?text=Sin+Imagen'} alt={rel.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
                    </Link>
                    <div className="p-6">
                      <h3 className="font-bold text-navy text-lg mb-1 leading-tight"><Link href={`/producto/${rel.slug}`} className="hover:text-blue transition-colors line-clamp-2" title={`Ver información de ${rel.name}`}>{rel.name}</Link></h3>
                      {rel.price && <div className="text-ink font-bold mt-2" dangerouslySetInnerHTML={{__html: rel.price}} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-center">
         <div>
           <h1 className="text-3xl font-bold text-navy mb-4">Ups, ocurrió un error</h1>
           <p className="text-slate">No pudimos conectar con los almacenes. Inténtalo recargando la página.</p>
         </div>
      </div>
    );
  }
}
