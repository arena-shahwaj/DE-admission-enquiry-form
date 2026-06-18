import { createClient } from '@supabase/supabase-js'

// 🔑 APNI VALUES YAHAN DAALEIN
// ← anon public key
const supabaseUrl = "https://xahxbhrpsxlrrfyqubud.supabase.co";
      const supabaseKey = "sb_publishable_EadwlJRAR2hzhgXcC3r-Iw_rgp98PUZ";

export const supabaseClient = createClient(supabaseUrl, supabaseKey)
