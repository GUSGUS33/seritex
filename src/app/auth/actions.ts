'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  // HONEYPOT: Si el bot rellena este campo oculto, cortamos la ejecución silenciosamente
  const honeypot = formData.get('last_name_confirm') as string;
  if (honeypot) {
    // Simulamos un error genérico o lo redirigimos silenciosamente para despistar al bot
    redirect('/login?error=Credenciales incorrectas');
  }

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect('/login?error=Credenciales incorrectas');
  }

  // Redirect to dashboard after successful login
  redirect('/area-cliente');
}

export async function signup(formData: FormData) {
  // HONEYPOT: Trampa para bots
  const honeypot = formData.get('last_name_confirm') as string;
  if (honeypot) {
    // Simulamos un registro exitoso para que el bot no sepa que ha fallado
    redirect('/registro?message=Revisa tu correo para confirmar tu cuenta');
  }

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    redirect('/registro?error=No se pudo registrar la cuenta. Inténtalo de nuevo.');
  }

  // Supabase sends an email confirmation by default, so we tell the user.
  redirect('/registro?message=Revisa tu correo para confirmar tu cuenta');
}

export async function signout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}
