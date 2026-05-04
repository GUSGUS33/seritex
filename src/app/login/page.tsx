import Link from 'next/link';
import { login } from '../auth/actions';

export const metadata = {
  title: 'Iniciar Sesión | Serigrafía Textil',
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const resolvedParams = await searchParams;

  return (
    <div className="min-h-screen bg-gray-light py-20 font-sans text-ink flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white border border-gray-mid shadow-sm rounded-2xl">
        <h1 className="text-3xl font-extrabold font-display text-navy text-center mb-2 tracking-tight">
          Bienvenido de vuelta
        </h1>
        <p className="text-center text-slate mb-8">
          Inicia sesión para gestionar tus presupuestos
        </p>

        {resolvedParams?.error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm border border-red-100">
            {resolvedParams.error}
          </div>
        )}

        <form className="flex flex-col gap-5" action={login}>
          {/* HONEYPOT: Campo invisible para cazar bots */}
          <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
            <label htmlFor="last_name_confirm">Confirmar Apellido (No rellenar)</label>
            <input type="text" id="last_name_confirm" name="last_name_confirm" tabIndex={-1} autoComplete="off" />
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
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-8 text-center text-slate text-sm">
          ¿No tienes una cuenta?{' '}
          <Link href="/registro" className="text-blue font-bold hover:underline">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
