import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
import z from "zod";

import { env } from "@/env.mjs";
import { Database } from "@/models/supabase.types";

const supabase = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SECRET_KEY,
  { auth: { persistSession: false } }
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  {
    const result = z.string().email().safeParse(email);
    if (!result.success) {
      return res.status(400).json({ error: result.error.message });
    }
  }

  {
    const result = await supabase.from("email_list").insert({ email });
    if (result.error) {
      console.error(result.error);
      return res.status(400).json({ error: result.error.message });
    }
  }

  return res.status(200).json({ success: true });
}
