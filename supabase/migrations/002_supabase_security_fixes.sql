-- Supabase Security Advisor fixes (RLS, API exposure, auth policy perf, trigger function).
-- Run after 001_hireright_schema.sql in Dashboard → SQL Editor or via Supabase CLI.

-- ─── Node API tables (Postgres only; not for client/PostgREST) ───
create table if not exists public.hireright_kv (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.hireright_sessions (
  token text primary key,
  email text not null,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

alter table if exists public.hireright_kv enable row level security;
alter table if exists public.hireright_sessions enable row level security;

revoke all on table public.hireright_kv from anon, authenticated;
revoke all on table public.hireright_sessions from anon, authenticated;

-- No RLS policies: anon/authenticated cannot read/write via API. Node uses DATABASE_URL (postgres role).

drop index if exists public.idx_hireright_sessions_email;
drop index if exists public.idx_hireright_sessions_expires;

-- ─── RLS: use (select auth.uid()) for initplan performance ───
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  to authenticated
  with check ((select auth.uid()) = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

drop policy if exists "interview_results_select_own" on public.interview_results;
create policy "interview_results_select_own"
  on public.interview_results for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "interview_results_insert_own" on public.interview_results;
create policy "interview_results_insert_own"
  on public.interview_results for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

-- ─── Signup trigger: lock down SECURITY DEFINER ───
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role, data)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'role', 'jobseeker'),
    '{}'::jsonb
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

revoke all on function public.handle_new_user() from public;
revoke all on function public.handle_new_user() from anon, authenticated;
