-- Run in Supabase Dashboard → SQL Editor (or via Supabase CLI).
-- Enables synced profiles + interview scorecards for HireRighttt.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  full_name text,
  role text default 'jobseeker',
  company_name text,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.interview_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  email text not null,
  overall int not null default 0,
  data jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_interview_results_user on public.interview_results (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.interview_results enable row level security;

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

-- Optional: keep profiles.email in sync on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
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

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

revoke all on function public.handle_new_user() from public;
revoke all on function public.handle_new_user() from anon, authenticated;
