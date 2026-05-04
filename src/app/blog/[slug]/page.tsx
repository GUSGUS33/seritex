import type { Metadata } from 'next';
import React from 'react';
import { getPostBySlug, getAllPostsSlugs } from '@/lib/api';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Helper component for lucide icons in dynamic server components 
const AuthorIcon = () => (
  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center font-bold text-xl text-white">
    S
  </div>
);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  const postTitle = post.title || 'Sin título';
  const postExcerpt = post.excerpt || '';
  const postDate = post.date || new Date().toISOString();
  
  // Clean HTML from excerpt for meta description
  const cleanDescription = postExcerpt 
    ? postExcerpt.replace(/<[^>]+>/g, '').replace(/\[&hellip;\]/g, '...').trim() 
    : `Lee nuestro artículo sobre ${postTitle} en Serigrafía Textil.`;
    
  const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://placehold.co/1200x630/F8FAFC/0F2547?text=Serigrafia+Textil';

  return {
    title: postTitle,
    description: cleanDescription,
    alternates: {
      canonical: `https://serigrafia-textil.es/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: postTitle,
      description: cleanDescription,
      url: `https://serigrafia-textil.es/blog/${resolvedParams.slug}`,
      type: 'article',
      publishedTime: postDate,
      authors: [post.author?.node?.name || 'Serigrafía Textil'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: postTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: cleanDescription,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const postsResponse = await getAllPostsSlugs();
  const posts = postsResponse?.nodes || [];

  return posts.map((post: any) => ({
    slug: post.slug || '',
  })).filter(p => p.slug !== '');
}

export default async function SingleBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const postTitle = post.title || 'Sin título';
  const postExcerpt = post.excerpt || '';
  const postDate = post.date || new Date().toISOString();
  const postContent = post.content || '';

  const category = post.categories?.nodes?.[0]?.name || 'Artículo';
  const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://placehold.co/1200x630/F8FAFC/0F2547?text=Serigrafia+Textil';
  const authorName = post.author?.node?.name || 'Equipo de Producción';
  
  // Format date nicely
  const dateObj = new Date(postDate);
  const formattedDate = dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });

  const cleanDescription = postExcerpt ? postExcerpt.replace(/<[^>]+>/g, '').replace(/\[&hellip;\]/g, '...').trim() : '';

  // Comprehensive schema.org for BlogPosting
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://serigrafia-textil.es/blog/${resolvedParams.slug}`
    },
    "headline": postTitle,
    "description": cleanDescription,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": "https://serigrafia-textil.es/sobre-nosotros"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Serigrafía Textil",
      "logo": {
        "@type": "ImageObject",
        "url": "https://serigrafia-textil.es/logo.png"
      }
    },
    "datePublished": postDate,
    "dateModified": postDate // Normally we'd use modified date if available from GraphQL
  };

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* HERO BLOG */}
      <section className="bg-navy text-white pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-blue-l text-sm font-bold uppercase tracking-wider">
            <span>{category}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-8" dangerouslySetInnerHTML={{ __html: postTitle }} />
          <div className="flex items-center gap-4">
            <AuthorIcon />
            <div>
              <div className="font-bold">{authorName}</div>
              <div className="text-white/60 text-sm">Serigrafía Textil</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl shadow-lg mb-12 overflow-hidden">
            <Image 
              src={imageUrl} 
              alt={postTitle} 
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Render the WordPress HTML Content safely using standard React */}
          <div 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: postContent }}
          />

          <div className="bg-navy text-white p-8 rounded-2xl mt-16 text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4 font-display">¿Listo para dar vida a tu diseño?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Analizamos tu proyecto gráficamente y te presupuestamos automáticamente la técnica más rentable (DTF, Serigrafía o Bordado).
            </p>
            <Link 
              href="/presupuesto" 
              className="inline-flex bg-orange hover:bg-orange-d text-white px-8 py-4 rounded-xl font-bold text-lg transition-all items-center gap-2"
            >
              Pedir presupuesto asesorado <ChevronRight size={20} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
