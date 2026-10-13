-- HireRight Node API persistence (PostgreSQL). Mirrors db.json for production.

CREATE TABLE IF NOT EXISTS hireright_kv (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS hireright_sessions (
  token TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Lookups use token (PK). Enable RLS + revoke anon/authenticated in supabase/migrations/002_supabase_security_fixes.sql
