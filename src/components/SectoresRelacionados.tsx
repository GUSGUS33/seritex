import React from 'react';
import Link from 'next/link';
import { Building2, Calendar, ShoppingBag, Coffee, Trophy, HardHat, GraduationCap, Stethoscope, Music, Store, Users, Briefcase, ArrowRight } from 'lucide-react';

const allSectors = [
  { id: 'empresas', title: 'Empresas y Oficinas', desc: 'Uniformes corporativos, polos bordados y merchandising.', icon: <Building2 className="mb-4" size={28} />, url: '/sectores/serigrafia-empresas/' },
  { id: 'eventos', title: 'Eventos y Congresos', desc: 'Camisetas promocionales y tote bags para ferias.', icon: <Calendar className="mb-4" size={28} />, url: '/sectores/serigrafia-eventos/' },
  { id: 'marcas', title: 'Marcas de Ropa', desc: 'Producción textil premium y etiquetas personalizadas.', icon: <ShoppingBag className="mb-4" size={28} />, url: '/sectores/serigrafia-marcas-ropa/' },
  { id: 'hosteleria', title: 'Hostelería', desc: 'Delantales, camisas y uniformes resistentes.', icon: <Coffee className="mb-4" size={28} />, url: '/sectores/serigrafia-hosteleria/' },
  { id: 'deportes', title: 'Clubs Deportivos', desc: 'Equipaciones técnicas y merchandising para equipos.', icon: <Trophy className="mb-4" size={28} />, url: '/sectores/serigrafia-deportes/' },
  { id: 'construccion', title: 'Construcción', desc: 'Ropa laboral de alta visibilidad y resistencia.', icon: <HardHat className="mb-4" size={28} />, url: '/sectores/serigrafia-construccion/' },
  { id: 'colegios', title: 'Colegios y Universidades', desc: 'Uniformes escolares y sudaderas de graduación.', icon: <GraduationCap className="mb-4" size={28} />, url: '/sectores/serigrafia-colegios/' },
  { id: 'sanidad', title: 'Clínicas y Sanidad', desc: 'Pijamas sanitarios y batas médicas.', icon: <Stethoscope className="mb-4" size={28} />, url: '/sectores/serigrafia-sanidad/' },
  { id: 'musica', title: 'Música y Cultura', desc: 'Merchandising para bandas, artistas y giras.', icon: <Music className="mb-4" size={28} />, url: '/sectores/serigrafia-musica-cultura/' },
  { id: 'retail', title: 'Comercio y Retail', desc: 'Uniformes para dependientes y promociones.', icon: <Store className="mb-4" size={28} />, url: '/sectores/serigrafia-retail/' },
  { id: 'asociaciones', title: 'Asociaciones y ONGs', desc: 'Camisetas para causas solidarias y voluntariado.', icon: <Users className="mb-4" size={28} />, url: '/sectores/serigrafia-asociaciones/' },
  { id: 'despachos', title: 'Despachos y Agencias', desc: 'Ropa corporativa elegante y welcome packs.', icon: <Briefcase className="mb-4" size={28} />, url: '/sectores/serigrafia-despachos/' }
];

export default function SectoresRelacionados({ currentSectorId }: { currentSectorId: string }) {
  // Filtramos el sector actual para no recomendarlo a sí mismo
  const siblings = allSectors.filter(s => s.id !== currentSectorId);
  
  // Seleccionamos 3 aleatorios consistentes basados en el largo del string o simplemente los 3 primeros de la lista desplazada
  // Usamos una lógica pseudo-aleatoria estable para evitar problemas de hidratación en SSR
  const startIndex = currentSectorId.length % siblings.length;
  const related = [...siblings.slice(startIndex), ...siblings.slice(0, startIndex)].slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-mid">
      <div className="container-custom">
        <div className="text-center mb-10 text-navy">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Otros sectores en los que trabajamos</h2>
          <p className="text-slate max-w-2xl mx-auto">
            Nuestra experiencia abarca multitud de industrias. Descubre soluciones de estampación textil adaptadas a otras áreas profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {related.map((sector) => (
            <Link 
              href={sector.url} 
              key={sector.id}
              className="bg-white rounded-xl p-6 border border-gray-mid hover:border-blue-l shadow-sm hover:shadow-md transition-all group flex flex-col items-start block"
            >
              <div className="text-blue bg-blue-l/30 p-3 rounded-lg group-hover:bg-blue group-hover:text-white transition-colors">
                {sector.icon}
              </div>
              <h3 className="font-bold text-navy text-lg mb-2 mt-2 group-hover:text-blue transition-colors">
                {sector.title}
              </h3>
              <p className="text-sm text-slate mb-4 flex-grow">
                {sector.desc}
              </p>
              <span className="text-blue font-semibold text-sm flex items-center group-hover:underline">
                Ver sector <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/sectores/" className="text-slate hover:text-navy text-sm font-semibold underline underline-offset-4 transition-colors">
            Ver todos los sectores
          </Link>
        </div>
      </div>
    </section>
  );
}
