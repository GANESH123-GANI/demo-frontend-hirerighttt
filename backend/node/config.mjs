/**
 * Production-safe runtime configuration for the Node interview API.
 */
import { loadEnv } from './loadEnv.mjs'

loadEnv()

const env = process.env.ENVIRONMENT || process.env.NODE_ENV || 'development'
export const isProduction = env === 'production'
export const isStaging = env === 'staging'
export const isProdLike = isProduction || isStaging

export const config = {
  environment: env,
  port: Number(process.env.PORT) || 8787,
  corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:5173')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  databaseUrl: process.env.DATABASE_URL || '',
  sessionSecret: process.env.SESSION_SECRET || process.env.SECRET_KEY || '',
  allowDemoAccounts: process.env.ALLOW_DEMO_ACCOUNTS === 'true' || !isProdLike,
  signupEnabled: process.env.SIGNUP_ENABLED !== 'false',
  maxBodyBytes: Number(process.env.MAX_REQUEST_BYTES) || 2_000_000,
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseJwtSecret: process.env.SUPABASE_JWT_SECRET || '',
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  trustProxy: process.env.TRUST_PROXY === 'true' || isProdLike,
}

export function assertProductionConfig() {
  if (!isProdLike) return

  const errors = []
  if (!config.databaseUrl) {
    errors.push(
      'DATABASE_URL is required in production (Supabase: Project Settings → Database → connection string URI).',
    )
  }
  if (config.supabaseUrl && !config.supabaseJwtSecret) {
    errors.push('SUPABASE_JWT_SECRET is required when SUPABASE_URL is set (Project Settings → API → JWT Secret).')
  }
  if (!config.sessionSecret || config.sessionSecret.length < 32) {
    errors.push('SESSION_SECRET (or SECRET_KEY) must be at least 32 random characters in production.')
  }
  if (config.corsOrigins.length === 0 || config.corsOrigins.includes('*')) {
    errors.push('Set CORS_ORIGINS to your exact frontend URL(s) — no wildcards in production.')
  }
  const hasLlm =
    process.env.GEMINI_API_KEY ||
    process.env.OPENAI_API_KEY ||
    process.env.OPENROUTER_API_KEY ||
    process.env.LLM_API_KEY
  if (!hasLlm) {
    errors.push(
      'GEMINI_API_KEY (or OPENAI_API_KEY / OPENROUTER_API_KEY) is required in production.',
    )
  }

  if (errors.length) {
    if (process.env.STRICT_PRODUCTION_CONFIG === 'true') {
      console.error('[config] Production configuration errors (strict mode):\n', errors.map((e) => `  - ${e}`).join('\n'))
      process.exit(1)
    } else {
      console.warn('[config] ⚠️ Production notices / recommendations:\n', errors.map((e) => `  - ${e}`).join('\n'))
      console.warn('[config] Continuing with built-in fallbacks (local storage & local AI agent). To enforce strict failure, set STRICT_PRODUCTION_CONFIG=true.\n')
    }
  }
}
