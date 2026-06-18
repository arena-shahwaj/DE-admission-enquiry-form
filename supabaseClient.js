import { createClient } from '@supabase/supabase-js'

// 🔑 APNI VALUES YAHAN DAALEIN
const supabaseUrl = 'https://xahxbhrpsxlrrfyqubud.supabase.co'        // ← Project URL
const supabaseKey = 'sb_publishable_EadwlJRAR2hzhgXcC3r-Iw_rgp98PUZ'   // ← anon public key

export const supabase = createClient(supabaseUrl, supabaseKey)
