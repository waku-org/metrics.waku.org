import { createClient } from "@supabase/supabase-js";

export default function initiateDb(): any {
  const supabaseUrl: string = process.env.SUPABASE_URL;
  const supabaseKey: string = process.env.SUPABASE_KEY;

  return createClient(supabaseUrl, supabaseKey);
}
