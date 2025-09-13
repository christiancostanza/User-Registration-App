import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ivxwzmcrnvfxdmlafqll.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHd6bWNybnZmeGRtbGFmcWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODM5OTYsImV4cCI6MjA3MzM1OTk5Nn0.Ekt7BJ2kQStojDR-mVm1bydUFomdQHMVXJ2JTUE4alo'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)