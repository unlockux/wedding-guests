import { createClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment or window object
// For GitHub Pages (static hosting), we'll use window object
// For Vercel or other platforms, use environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || window.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || window.SUPABASE_ANON_KEY || '';

// Create and export the Supabase client
export const supabase = SUPABASE_URL && SUPABASE_ANON_KEY 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// Helper function to check if Supabase is configured
export function isSupabaseConfigured() {
  return SUPABASE_URL && SUPABASE_ANON_KEY;
}
