import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
  let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

  if (!supabaseUrl.startsWith('http')) {
    supabaseUrl = 'https://placeholder.supabase.co';
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
}
