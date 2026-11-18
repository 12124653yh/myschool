import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://yusfnfptfawvcvcxvdmq.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1c2ZuZnB0ZmF3dmN2Y3h2ZG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ5NzM0OTgsImV4cCI6MjExMDU0OTQ5OH0.311W1db8ZRHL7vfkhRg1geqyJ2mAe52cQ_mWiQBIHks";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
