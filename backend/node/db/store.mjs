import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '..', 'data')
const DB_PATH = join(DATA_DIR, 'db.json')
const SCHEMA_PATH = join(__dirname, 'schema.sql')

const KV_ID = 'main'

/** @typedef {{
 *   users: import('../index.mjs').User[],
 *   profiles: Record<string, unknown>,
 *   interviews: Record<string, unknown>,
 *   applications: Record<string, unknown[]>,
 *   interviewSessions: Record<string, unknown>,
 *   confidentialVault: unknown[],
 * }} DbShape */

export function emptyDb() {
  return {
    users: [],
    profiles: {},
    interviews: {},
    applications: {},
    interviewSessions: {},
    confidentialVault: [],
  }
}

let pool = null

function pgSsl(databaseUrl) {
  if (/sslmode=require|supabase\.co|neon\.tech|amazonaws\.com/i.test(databaseUrl)) {
    return { rejectUnauthorized: false }
  }
  return undefined
}

function getPool(databaseUrl) {
  if (!pool) {
    pool = new pg.Pool({
      connectionString: databaseUrl,
      ssl: pgSsl(databaseUrl),
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    })
  }
  return pool
}

async function ensurePgSchema(databaseUrl) {
  const client = await getPool(databaseUrl).connect()
  try {
    const sql = readFileSync(SCHEMA_PATH, 'utf8')
    await client.query(sql)
  } finally {
    client.release()
  }
}

async function loadFromPg(databaseUrl) {
  await ensurePgSchema(databaseUrl)
  const res = await getPool(databaseUrl).query(
    'SELECT data FROM hireright_kv WHERE id = $1',
    [KV_ID],
  )
  if (!res.rows[0]?.data) return emptyDb()
  return { ...emptyDb(), ...res.rows[0].data }
}

async function saveToPg(databaseUrl, db) {
  await getPool(databaseUrl).query(
    `INSERT INTO hireright_kv (id, data, updated_at)
     VALUES ($1, $2::jsonb, NOW())
     ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()`,
    [KV_ID, JSON.stringify(db)],
  )
}

function loadFromFile() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
  if (!existsSync(DB_PATH)) {
    writeFileSync(DB_PATH, JSON.stringify(emptyDb(), null, 2))
  }
  try {
    return /** @type {DbShape} */ (JSON.parse(readFileSync(DB_PATH, 'utf8')))
  } catch {
    return emptyDb()
  }
}

function saveToFile(db) {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
  writeFileSync(DB_PATH, JSON.stringify(db, null, 2))
}

/**
 * @param {string} [databaseUrl]
 * @returns {Promise<DbShape>}
 */
export async function loadDb(databaseUrl) {
  if (databaseUrl) return loadFromPg(databaseUrl)
  return loadFromFile()
}

/**
 * @param {DbShape} db
 * @param {string} [databaseUrl]
 */
export async function saveDb(db, databaseUrl) {
  if (databaseUrl) return saveToPg(databaseUrl, db)
  saveToFile(db)
}

/** Persistent API sessions (survive restarts in production). */
export async function saveSessionToken(databaseUrl, token, email, ttlMs = 7 * 24 * 60 * 60 * 1000) {
  if (!databaseUrl) return
  const expires = new Date(Date.now() + ttlMs)
  await getPool(databaseUrl).query(
    `INSERT INTO hireright_sessions (token, email, expires_at) VALUES ($1, $2, $3)
     ON CONFLICT (token) DO UPDATE SET email = EXCLUDED.email, expires_at = EXCLUDED.expires_at`,
    [token, email, expires.toISOString()],
  )
}

export async function resolveSessionEmail(databaseUrl, token) {
  if (!token) return null
  if (!databaseUrl) return null
  const res = await getPool(databaseUrl).query(
    'SELECT email FROM hireright_sessions WHERE token = $1 AND expires_at > NOW()',
    [token],
  )
  return res.rows[0]?.email || null
}

export async function deleteSessionToken(databaseUrl, token) {
  if (!databaseUrl || !token) return
  await getPool(databaseUrl).query('DELETE FROM hireright_sessions WHERE token = $1', [token])
}

export async function closeStore() {
  if (pool) await pool.end()
}
