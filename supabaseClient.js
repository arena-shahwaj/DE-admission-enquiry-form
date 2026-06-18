import { createClient } from '@supabase/supabase-js'

// 🔑 APNI VALUES YAHAN DAALEIN
const supabaseUrl = 'YOUR_SUPABASE_URL'        // ← Project URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'   // ← anon public key

export const supabase = createClient(supabaseUrl, supabaseKey)