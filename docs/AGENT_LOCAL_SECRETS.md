# Local secrets — agent / co-worker setup

**Internal team handoff only.** This file exists so another developer or coding agent can clone the repo and run the full stack without chasing the team lead for `.env` values.

> **Security:** These are live credentials. Keep the GitHub repo **private**. If this repo was ever public, rotate Supabase DB password, JWT secret, ExperientialLabs key, and `SESSION_SECRET` in Supabase / provider dashboards, then update this file.

## Quick setup

From repo root:

```bash
npm install
```

1. Create **root** `.env` — paste the block in [Root `.env`](#root-env-full-stack--node-api) below.
2. Create **`frontend/.env`** — paste the block in [Frontend `.env`](#frontend-env-vite-only) below (Vite does not read the root file).
3. Run migrations in Supabase SQL Editor: `001_hireright_schema.sql` then `002_supabase_security_fixes.sql` (see `docs/AGENT_HANDOFF.md`).
4. Start dev: `npm run dev:all` → app http://localhost:5173 , API http://localhost:8787/api/health (`llm: true` when key is set).

Node loads env from **repo root `.env` first** (`backend/node/loadEnv.mjs`). `backend/node/.env` is optional and not required if root `.env` exists.

## Supabase project

| Item | Value |
|------|--------|
| Project URL | `https://unrnsmvamchvrnddjnve.supabase.co` |
| Project ref | `unrnsmvamchvrnddjnve` |
| Auth (local) | Add redirect `http://localhost:5173` in Supabase → Authentication → URL configuration |

**Legacy JWT Secret** (Node verifies Supabase access tokens): set as `SUPABASE_JWT_SECRET` below — from Supabase Dashboard → Project Settings → API → JWT Settings → Legacy JWT Secret.

**Anon key** is public-by-design (RLS protects data); still do not expose in client bundles beyond `VITE_SUPABASE_ANON_KEY`.

## Root `.env` (full stack + Node API)

Copy everything below into `.env` at the repository root:

```env
# Frontend → API Connection
VITE_API_URL=http://localhost:8787
PORT=8787

# ExperientialLabs AI Configuration (gpt-6-luna)
OPENAI_API_KEY=xpl_d3e0caa9caf99c819e60a7e5b20407f3865074f9
OPENAI_BASE_URL=https://api.experientiallabs.ai/v1
OPENAI_MODEL=gpt-6-luna
EXPERIENTIALLABS_API_KEY=xpl_d3e0caa9caf99c819e60a7e5b20407f3865074f9

# Vite Client Environment (also mirrored in frontend/.env for dev)
VITE_EXPERIENTIALLABS_API_KEY=xpl_d3e0caa9caf99c819e60a7e5b20407f3865074f9
VITE_EXPERIENTIALLABS_BASE_URL=https://api.experientiallabs.ai/v1
VITE_EXPERIENTIALLABS_MODEL=gpt-6-luna

# ─── Supabase (Auth + Postgres + sync) ───
VITE_AUTH_PROVIDER=supabase
VITE_SUPABASE_URL=https://unrnsmvamchvrnddjnve.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucm5zbXZhbWNodnJuZGRqbnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2MjU4NzcsImV4cCI6MjEwNzIwMTg3N30._gHFIUAH6rOVYk-THvLTlDxpWnU3TR5FJxayTpKB4G0

SUPABASE_URL=https://unrnsmvamchvrnddjnve.supabase.co
SUPABASE_JWT_SECRET=HKdrTvdMJNgkxHW3hMnUPoL5HVBNErDResxXmyGoAwrbIqresTugFUjd4sEg9gdLgzA4/eZu9BVjLGqRAlbv6w==
DATABASE_URL=postgresql://postgres:Power%21123Tech@db.unrnsmvamchvrnddjnve.supabase.co:5432/postgres

SESSION_SECRET=qSBT3CrkCIVO7olqTC4zWqk3pxkcCR+amycOq3u07x8=
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

## Frontend `.env` (Vite only)

Copy into `frontend/.env`:

```env
# Frontend → API Connection
VITE_API_URL=http://localhost:8787
PORT=8787

# ExperientialLabs AI Configuration (gpt-6-luna)
OPENAI_API_KEY=xpl_d3e0caa9caf99c819e60a7e5b20407f3865074f9
OPENAI_BASE_URL=https://api.experientiallabs.ai/v1
OPENAI_MODEL=gpt-6-luna
EXPERIENTIALLABS_API_KEY=xpl_d3e0caa9caf99c819e60a7e5b20407f3865074f9

# Vite Client Environment
VITE_EXPERIENTIALLABS_API_KEY=xpl_d3e0caa9caf99c819e60a7e5b20407f3865074f9
VITE_EXPERIENTIALLABS_BASE_URL=https://api.experientiallabs.ai/v1
VITE_EXPERIENTIALLABS_MODEL=gpt-6-luna

# Supabase (client)
VITE_AUTH_PROVIDER=supabase
VITE_SUPABASE_URL=https://unrnsmvamchvrnddjnve.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucm5zbXZhbWNodnJuZGRqbnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2MjU4NzcsImV4cCI6MjEwNzIwMTg3N30._gHFIUAH6rOVYk-THvLTlDxpWnU3TR5FJxayTpKB4G0
```

## Demo login (no Supabase)

When `VITE_AUTH_PROVIDER=local` or demo allowed: `demo@hireright.com` / `password123`. See `frontend/src/lib/authDemo.ts` for employer/admin demo helpers added in the marketing UI pass.

## Production notes

- Do **not** bake `VITE_EXPERIENTIALLABS_*` into production Docker frontend builds; LLM calls go through Node only.
- Production env template: `.env.production.example` — fill from the same Supabase project; use pooler URI + `sslmode=require` when deploying.

## What changed recently (for continuing agents)

After commit `e64d5eb` on `main`:

- Interview scores drive dashboard job match % (`store.jobMatchFromInterview`, `interviewEngine.ts`).
- Scorecard print: `frontend/src/lib/printScorecard.ts` + `.hr-scorecard-print` in `index.css`.
- Sitewide marketing: `hr-marketing-ui.css`, `PlatformWorkflowSection`, `HrIcon`, 85% layout (`--hr-layout-width`).
- Login UX: `LoginGlobe.tsx` starfield; auth pages in `AuthPages.tsx`.

Full architecture and API contracts: **`docs/AGENT_HANDOFF.md`**.

---

*Last updated: local env handoff for co-worker agents. Update this file when rotating any secret above.*
