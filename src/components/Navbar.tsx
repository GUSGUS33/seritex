"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    
    // Check current session
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <nav className="navbar bg-white border-b border-gray-mid sticky top-0 z-50">
        <div className="container-custom py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold font-display text-ink tracking-tight no-underline">
            serigrafia-textil<span className="text-blue">.es</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium text-ink">
              <Link href="/tecnicas/" className="hover:text-blue transition-colors">Técnicas</Link>
              <Link href="/prendas/" className="hover:text-blue transition-colors">Prendas</Link>
              <Link href="/sectores/" className="hover:text-blue transition-colors">Sectores</Link>
              <Link href="/contacto/" className="hover:text-blue transition-colors">Contacto</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/presupuesto/" className="btn btn-primary btn-sm">Pedir presupuesto</Link>
              {user ? (
                <Link href="/area-cliente" className="text-sm font-bold text-navy hover:text-blue transition-colors flex items-center gap-2 border-l border-gray-mid pl-4 ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Mis Presupuestos
                </Link>
              ) : (
                <Link href="/login" className="text-sm font-bold text-slate hover:text-navy transition-colors flex items-center gap-2 border-l border-gray-mid pl-4 ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="15" y1="3" x2="15" y2="21"/><path d="M10 17l5-5-5-5"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                  Entrar
                </Link>
              )}
            </div>
          </div>

          <button className="md:hidden flex flex-col gap-[4px] bg-transparent border-none cursor-pointer p-2" onClick={() => setIsMobileMenuOpen(true)}>
            <span className="w-6 h-[2px] bg-ink rounded-full"></span>
            <span className="w-6 h-[2px] bg-ink rounded-full"></span>
            <span className="w-6 h-[2px] bg-ink rounded-full"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black/50 flex justify-end">
          <div className="bg-white w-[80%] max-w-sm h-full p-6 flex flex-col shadow-2xl animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-extrabold font-display text-ink tracking-tight">serigrafia-textil<span className="text-blue">.es</span></span>
              <button className="bg-transparent border-none text-2xl text-ink cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
            </div>
            <div className="flex flex-col gap-6 mt-4 border-b border-gray-mid pb-6 mb-6">
              <Link href="/tecnicas/" className="text-lg font-medium text-ink" onClick={() => setIsMobileMenuOpen(false)}>Técnicas</Link>
              <Link href="/prendas/" className="text-lg font-medium text-ink" onClick={() => setIsMobileMenuOpen(false)}>Prendas</Link>
              <Link href="/sectores/" className="text-lg font-medium text-ink" onClick={() => setIsMobileMenuOpen(false)}>Sectores</Link>
              <Link href="/ciudades/" className="text-lg font-medium text-ink" onClick={() => setIsMobileMenuOpen(false)}>Ciudades</Link>
              <Link href="/contacto/" className="text-lg font-medium text-ink" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              {user ? (
                <Link href="/area-cliente" className="font-bold text-navy flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Mis Presupuestos
                </Link>
              ) : (
                <Link href="/login" className="font-bold text-slate flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="15" y1="3" x2="15" y2="21"/><path d="M10 17l5-5-5-5"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                  Iniciar Sesión
                </Link>
              )}
            </div>

            <div className="mt-auto">
              <Link href="/presupuesto/" className="btn btn-primary w-full text-center block" onClick={() => setIsMobileMenuOpen(false)}>Pedir presupuesto</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
