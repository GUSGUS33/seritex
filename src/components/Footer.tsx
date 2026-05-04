import React from 'react';
import Link from 'next/link';
import { MessageCircle, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  const TELEFONO_WA = "34600000000";
  const DOMINIO = "serigrafia-textil.es";
  const TELEFONO = "600 000 000";

  return (
    <footer className="footer bg-navy text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-extrabold font-display text-white tracking-tight mb-6">
              serigrafia-textil<span className="text-blue-400">.es</span>
            </div>
            <p className="text-sm text-white/50 mb-8">
              Especialistas en serigrafía textil, DTF, bordado y vinilo. Personalizamos ropa para empresas, eventos y marcas con envíos a toda España.
            </p>
            
            {/* JERARQUÍA DE CONTACTO */}
            <div className="flex flex-col gap-4">
              {/* PRIMERO: Botón azul grande */}
              <Link href="/presupuesto/" className="btn btn-primary px-6 py-3 rounded-xl font-bold text-center transition-all flex items-center justify-between shadow-lg">
                <span>Pedir presupuesto</span>
                <ChevronRight size={20} />
              </Link>
              
              {/* SEGUNDO: Botón verde WhatsApp */}
              <a href={`https://wa.me/${TELEFONO_WA}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded-xl font-bold text-center transition-all flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </div>
                <ChevronRight size={20} />
              </a>
              
              {/* TERCERO: Enlace email */}
              <a href={`mailto:hola@${DOMINIO}`} className="text-white/80 hover:text-white flex items-center gap-2 text-sm transition-colors mt-2">
                <Mail size={16} />
                <span>hola@{DOMINIO}</span>
              </a>
              
              {/* CUARTO: Teléfono como texto plano */}
              <div className="text-slate text-xs mt-2">
                Tel: {TELEFONO} (preferimos WhatsApp)
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6"><Link href="/tecnicas/" className="hover:text-blue-400 transition-colors">Técnicas</Link></h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/serigrafia-textil/" className="text-white/70 hover:text-white transition-colors">Serigrafía Textil</Link></li>
              <li><Link href="/impresion-dtf/" className="text-white/70 hover:text-white transition-colors">Impresión DTF</Link></li>
              <li><Link href="/bordado-personalizado/" className="text-white/70 hover:text-white transition-colors">Bordado Personalizado</Link></li>
              <li><Link href="/vinilo-textil/" className="text-white/70 hover:text-white transition-colors">Vinilo Textil</Link></li>
              <li className="mt-2 pt-2 border-t border-white/5"><Link href="/tecnicas/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">Ver todas las técnicas →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6"><Link href="/sectores/" className="hover:text-blue-400 transition-colors">Sectores</Link></h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/sectores/serigrafia-empresas/" className="text-white/70 hover:text-white transition-colors">Empresas y Corporativo</Link></li>
              <li><Link href="/sectores/serigrafia-eventos/" className="text-white/70 hover:text-white transition-colors">Eventos y Festivales</Link></li>
              <li><Link href="/sectores/serigrafia-marcas-ropa/" className="text-white/70 hover:text-white transition-colors">Marcas de Ropa</Link></li>
              <li><Link href="/sectores/serigrafia-hosteleria/" className="text-white/70 hover:text-white transition-colors">Hostelería</Link></li>
              <li className="mt-2 pt-2 border-t border-white/5"><Link href="/sectores/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">Ver todos los sectores →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/como-funciona/" className="text-white/70 hover:text-white transition-colors">Cómo funciona</Link></li>
              <li><Link href="/sobre-nosotros/" className="text-white/70 hover:text-white transition-colors">Sobre nosotros</Link></li>
              <li><Link href="/galeria/" className="text-white/70 hover:text-white transition-colors">Galería de trabajos</Link></li>
              <li><Link href="/blog/" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contacto/" className="text-white/70 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>&copy; {new Date().getFullYear()} Serigrafía Textil.es. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <Link href="/condiciones-servicio/" className="hover:text-white transition-colors">Condiciones de Servicio</Link>
            <Link href="/aviso-legal/" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="/politica-privacidad/" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/politica-cookies/" className="hover:text-white transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
