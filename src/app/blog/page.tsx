import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blog sobre serigrafía textil: guías y consejos',
  description: 'Artículos, guías y consejos sobre serigrafía, DTF, bordado y personalización textil. Descubre técnicas, comparativas de precio y sugerencias.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/blog',
  },
  openGraph: {
    title: 'Blog sobre serigrafía textil: guías y consejos',
    description: 'Artículos, guías y consejos sobre serigrafía, DTF, bordado y personalización textil.',
    url: 'https://serigrafia-textil.es/blog',
    type: 'website',
    siteName: 'Serigrafía Textil',
    locale: 'es_ES',
    images: [
      {
        url: 'https://serigrafia-textil.es/default-og.jpg', // Recommend creating this generic image fallback
        width: 1200,
        height: 630,
        alt: 'Blog de Serigrafía Textil y Personalización Ropa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog sobre serigrafía textil: guías y consejos',
    description: 'Artículos, guías y consejos sobre serigrafía, DTF, bordado y personalización textil.',
  }
};

export default async function BlogHub() {
  const postsResponse = await getPosts();
  const posts = postsResponse?.nodes || [];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://serigrafia-textil.es/blog/#blog",
    "mainEntityOfPage": "https://serigrafia-textil.es/blog",
    "name": "Blog de Serigrafía Textil",
    "description": "Artículos, guías y consejos sobre serigrafía, DTF, bordado y personalización textil.",
    "publisher": {
      "@type": "Organization",
      "name": "Serigrafía Textil",
      "logo": {
        "@type": "ImageObject",
        "url": "https://serigrafia-textil.es/logo.png"
      }
    },
    // Dynamically generate brief schema array for posts
    "blogPost": posts.slice(0, 5).map((post: any) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "url": `https://serigrafia-textil.es/blog/${post.slug}`
    }))
  };

  return (
    <>
      <main className="bg-gray-light min-h-screen py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogSchema)
          }}
        />
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-4 text-center">Blog sobre serigrafía textil: guías y consejos</h1>
          <p className="text-slate text-center max-w-2xl mx-auto mb-12">Descubre todo lo que necesitas saber sobre personalización textil, técnicas de estampación, elección de prendas y optimización de presupuestos.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => {
              const category = post.categories?.nodes?.[0]?.name || 'Artículo';
              const imageUrl = post.featuredImage?.node?.sourceUrl || `https://picsum.photos/seed/${post.id}/600/400`;
              
              const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').replace(/\[&hellip;\]/g, '...') : '';
              
              return (
                <Link key={post.id} href={`/blog/${post.slug}`} className="bg-white rounded-2xl border border-gray-mid overflow-hidden hover:border-blue transition-all group flex flex-col">
                  <div className="h-48 bg-gray-mid relative overflow-hidden">
                    <Image src={imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm">
                      {category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                      {post.title}
                    </h3>
                    {cleanExcerpt && (
                      <p className="text-slate text-sm mb-4 line-clamp-3">
                        {cleanExcerpt}
                      </p>
                    )}
                    <div className="mt-auto text-blue font-medium text-sm flex items-center gap-1">
                      Leer artículo →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
