
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dihdmznvifljsuthtczz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGRtem52aWZsanN1dGh0Y3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NzI2MzIsImV4cCI6MjA1NTU0ODYzMn0.H10crxHJj__xy_bT1IQtUyJBBtKvDDX0FsS1DqDEBTg";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    storageKey: 'dealer-auth',
    storage: window.localStorage,
    autoRefreshToken: true,
  },
});
