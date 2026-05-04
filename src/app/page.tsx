// Server action fetch logic added here

import type { Metadata } from 'next';
import React from 'react';
import { getPosts } from '@/lib/api';

import HeroSection from '@/components/home/HeroSection';
import TrustBarSection from '@/components/home/TrustBarSection';
import TecnicasSection from '@/components/home/TecnicasSection';
import SectoresSection from '@/components/home/SectoresSection';
import GaleriaPreviewSection from '@/components/home/GaleriaPreviewSection';
import CtaSection from '@/components/home/CtaSection';
import ProcesoSection from '@/components/home/ProcesoSection';
import TestimoniosSection from '@/components/home/TestimoniosSection';
import FaqSection from '@/components/home/FaqSection';
import BlogSection from '@/components/home/BlogSection';

export const metadata: Metadata = {
  title: 'Serigrafía Textil y Ropa Personalizada | Envíos España',
  description: 'Taller especializado en serigrafía textil, impresión DTF y bordado. Ropa personalizada para empresas, eventos y marcas.',
  alternates: {
    canonical: 'https://serigrafia-textil.es/',
  },
};

export default async function Home() {
  // Fetch latest 3 posts for the homepage blog section
  const postsResponse = await getPosts();
  const recentPosts = postsResponse?.nodes?.slice(0, 3) || [];

  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "WebSite"]
          }) }}
        />
        
        <HeroSection />
        <TrustBarSection />
        <TecnicasSection />
        <SectoresSection />
        <GaleriaPreviewSection />
        <CtaSection />
        <ProcesoSection />
        <TestimoniosSection />
        <FaqSection />
        <BlogSection recentPosts={recentPosts} />

      </main>
    </>
  );
}
