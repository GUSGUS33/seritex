import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogSectionProps {
  recentPosts: any[];
}

export default function BlogSection({ recentPosts }: BlogSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="label-mono mb-2">Blog y recursos</div>
            <h2>Aprende sobre personalización</h2>
          </div>
          <a href="/blog/" className="btn btn-secondary btn-sm">Ver todos los artículos</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post: any) => {
            const category = post.categories?.nodes?.[0]?.name || 'Blog';
            const imageUrl = post.featuredImage?.node?.sourceUrl || `https://picsum.photos/seed/${post.id}/1200/600`;
            const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').replace(/\[&hellip;\]/g, '...') : '';

            return (
              <Link key={post.id} href={`/blog/${post.slug}`} className="card no-underline text-ink group flex flex-col h-full overflow-hidden">
                <div className="relative w-full aspect-[2/1]">
                  <Image src={imageUrl} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-mono text-xs text-blue bg-blue-l px-2 py-1 rounded inline-block w-max mb-3">
                    {category}
                  </div>
                  <h3 className="text-lg mb-3 group-hover:text-blue transition-colors">
                    {post.title}
                  </h3>
                  {cleanExcerpt && (
                    <p className="text-sm text-slate mb-4 flex-1 line-clamp-3">
                      {cleanExcerpt}
                    </p>
                  )}
                  <span className="text-blue font-semibold text-sm">Leer artículo →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
