# HireRighttt

End-to-end AI hiring product: candidate onboarding, live AI video interview, ranked job matches, employer ATS, and admin pipeline.

**Continuing development (humans + AI agents):** see [docs/AGENT_HANDOFF.md](docs/AGENT_HANDOFF.md) for architecture, env setup, Ava/scorecard flow, and next tasks.

## Demo accounts

| Role | Email | Password |
|------|--------|----------|
| Job seeker | `demo@hireright.com` | `password123` |
| Employer | `employer@hireright.com` | `password123` |

## Run (submission)

```bash
npm install
npm run dev:all
```

- App: http://localhost:5173
- API: http://localhost:8787/api/health

`dev:all` starts the Vite UI and the Node API together. The UI still works offline via localStorage if the API is down.

## Product loop

1. **Candidate** signs up → builds profile → takes Ava’s AI interview → unlocks ranked jobs → applies.
2. **Employer** signs up → creates a private job → copies `/apply/{code}` → reviews AI scores, shortlists/rejects.
3. **Admin ATS** (`/admin`, employer login) → pipeline, matcher, analytics.

Private apply links work without a prior account: submitting the form creates a candidate session and opens the interview studio.

## Stack

- React 19 + TypeScript + Vite
- **Node API** (`backend/node`) — auth, profiles, **adaptive AI interview**, scorecards (default for `dev:all`)
- **FastAPI** (`backend/python`) — optional multi-tenant API + PostgreSQL (`npm run server:py`, Docker `docker-compose.yml`)

---

## Production deployment

### Requirements

| Requirement | Purpose |
|-------------|---------|
| **PostgreSQL** | Supabase (recommended), Neon, or RDS — `DATABASE_URL` with `sslmode=require` |
| **Supabase Auth** | `VITE_AUTH_PROVIDER=supabase` + URL, anon key, **Legacy JWT Secret** on API |
| **SESSION_SECRET** | 32+ random chars — API session fallback |
| **CORS_ORIGINS** | Exact live frontend URL(s) — no `*` |
| **GEMINI_API_KEY** | **Server only** — adaptive interview, resume parse, scorecard |
| **HTTPS** | TLS at Cloudflare, load balancer, or host nginx |

Production builds **never** embed LLM keys in the browser (`VITE_GEMINI_*` is dev-only unless `VITE_ALLOW_CLIENT_LLM=true`).

### Docker — Supabase (recommended)

```bash
cp .env.production.example .env
# Fill DATABASE_URL (pooler URI), SUPABASE_*, SESSION_SECRET, CORS_ORIGINS, GEMINI_API_KEY

docker compose -f docker-compose.supabase.prod.yml up -d --build
```

- UI + `/api` proxy: `http://localhost:8080` (set `WEB_PORT` if needed)
- API health: `/api/health` (container healthcheck enabled)
- `ALLOW_DEMO_ACCOUNTS=false`, `TRUST_PROXY=true` behind nginx

### Docker — self-hosted Postgres (optional)

```bash
docker compose -f docker-compose.prod.yml --profile self-hosted-db up -d --build
```

Or set `DATABASE_URL` to an external Postgres and use the Supabase compose file without a local DB.

### CI

GitHub Actions runs `lint`, production frontend `build`, and Node `assertProductionConfig()` on push/PR.

### Environment reference

- **Development:** `db.json` + in-memory sessions (optional `DATABASE_URL`)
- **Production:** `ENVIRONMENT=production` — API exits on boot if config is invalid; Node creates `hireright_*` tables on first connect

See `.env.production.example` for all variables.

### Supabase setup (Auth + sync)

1. Create a project at [supabase.com](https://supabase.com).
2. **SQL Editor** → run `supabase/migrations/001_hireright_schema.sql`.
3. Copy **Project URL**, **anon key**, and **JWT secret** (Settings → API).
4. Copy **Database connection string** (Settings → Database → URI) into `DATABASE_URL`.
5. Root `.env`:

```env
VITE_AUTH_PROVIDER=supabase
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...

SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_JWT_SECRET=your-jwt-secret
DATABASE_URL=postgresql://...
```

**What syncs automatically**

| Data | Supabase table | When |
|------|----------------|------|
| Profile + resume JSON | `profiles` | Save profile, resume upload |
| Interview scorecard | `interview_results` | Interview completes |
| Login session | Supabase Auth | Sign up / sign in |

The Node API accepts **Supabase access tokens** as `Authorization: Bearer …` for interview routes.
