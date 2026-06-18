import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xahxbhrpsxlrrfyqubud.supabase.co";
      const supabaseKey = "sb_publishable_EadwlJRAR2hzhgXcC3r-Iw_rgp98PUZ";

export const supabase = createClient(supabaseUrl, supabaseKey)
