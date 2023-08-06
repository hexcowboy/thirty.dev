import { createClient } from "@supabase/supabase-js";

import { env } from "@/env.mjs";
import { Database } from "@/models/supabase.types";

export const supabase = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SECRET_KEY,
  { auth: { persistSession: false } }
);
