import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ypkdvjxvbkiuzlxwogzn.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwa2R2anh2YmtpdXpseHdvZ3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NjgzMjMsImV4cCI6MjA3MDA0NDMyM30.bMKQGAp4X_M7V6g5Jp0WlUCIb6WfQl7gFQhtTlyQKt8'

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 