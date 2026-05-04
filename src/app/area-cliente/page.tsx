import { createClient } from '@/lib/supabase/server';
import { signout } from '../auth/actions';

export const metadata = {
  title: 'Área Privada | Serigrafía Textil',
};

export default async function AreaClientePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch quotes linked to this user's profile
  const { data: quotes } = await supabase
    .from('quotes')
    .select('*')
    .order('created_at', { ascending: false });

  // Status mapping
  const statusLabels: Record<string, string> = {
    'pending': 'Pendiente',
    'reviewed': 'En Revisión',
    'accepted': 'Aceptado',
    'rejected': 'Rechazado'
  };

  const statusColors: Record<string, string> = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'reviewed': 'bg-blue-100 text-blue-800',
    'accepted': 'bg-green-100 text-green-800',
    'rejected': 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen bg-gray-light py-12 font-sans text-ink">
      <div className="container-custom max-w-5xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display text-navy tracking-tight mb-2">
              Mis Presupuestos
            </h1>
            <p className="text-slate">Gestiona tus solicitudes y haz seguimiento.</p>
          </div>
          <form action={signout}>
            <button type="submit" className="text-sm font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors">
              Cerrar Sesión
            </button>
          </form>
        </div>

        {(!quotes || quotes.length === 0) ? (
          <div className="bg-white p-10 rounded-2xl border border-gray-mid text-center shadow-sm">
            <h2 className="text-xl font-bold text-navy mb-3">No tienes presupuestos todavía</h2>
            <p className="text-slate mb-6">Cuando pidas un presupuesto a través de la web usando tu email {user?.email}, aparecerá aquí.</p>
            <a href="/presupuesto" className="btn btn-primary inline-block">Solicitar Presupuesto</a>
          </div>
        ) : (
          <div className="grid gap-6">
            {quotes.map((quote: any) => (
              <div key={quote.id} className="bg-white p-6 rounded-2xl border border-gray-mid shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-xl text-navy">
                      {quote.garment_type || 'Presupuesto General'}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${statusColors[quote.status || 'pending']}`}>
                      {statusLabels[quote.status || 'pending']}
                    </span>
                  </div>
                  <p className="text-slate text-sm mb-1">
                    Enviado el {new Date(quote.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  <p className="text-slate text-sm">
                    {quote.quantity ? `${quote.quantity} unidades` : 'Cantidad no especificada'} • {quote.technique || 'Sin técnica designada'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
