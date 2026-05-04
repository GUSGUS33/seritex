import Link from 'next/link';
import { signup } from '../auth/actions';

export const metadata = {
  title: 'Crear Cuenta | Serigrafía Textil',
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const resolvedParams = await searchParams;

  return (
    <div className="min-h-screen bg-gray-light py-20 font-sans text-ink flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white border border-gray-mid shadow-sm rounded-2xl">
        <h1 className="text-3xl font-extrabold font-display text-navy text-center mb-2 tracking-tight">
          Crea tu cuenta
        </h1>
        <p className="text-center text-slate mb-8">
          Haz seguimiento de tus presupuestos y repite pedidos fácilmente.
        </p>

        {resolvedParams?.error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm border border-red-100">
            {resolvedParams.error}
          </div>
        )}

        {resolvedParams?.message && (
          <div className="bg-blue-50 text-blue-600 p-4 rounded-xl mb-6 text-sm border border-blue-100">
            {resolvedParams.message}
          </div>
        )}

        <form className="flex flex-col gap-5" action={signup}>
          {/* HONEYPOT: Campo invisible para cazar bots. Los humanos no lo ven, los bots lo rellenan automáticamente. */}
          <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
            <label htmlFor="last_name_confirm">Confirmar Apellido (No rellenar)</label>
            <input type="text" id="last_name_confirm" name="last_name_confirm" tabIndex={-1} autoComplete="none" />
          </div>

          <div>
            <label className="block text-sm font-bold text-navy mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              className="w-full border border-gray-mid bg-gray-light p-3 rounded-xl focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
              required
            />
            <p className="text-xs text-slate mt-2">
              Usa el mismo correo con el que has pedido presupuestos.
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-navy mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-mid bg-gray-light p-3 rounded-xl focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
              required
              minLength={6}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Registrarme
          </button>
        </form>

        <div className="mt-8 text-center text-slate text-sm">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/login" className="text-blue font-bold hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
