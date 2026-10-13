import jwt from 'jsonwebtoken'
import { config } from './config.mjs'

/**
 * Verify Supabase access token (HS256) and return user email.
 * @param {string} token
 * @returns {string | null}
 */
export function emailFromSupabaseToken(token) {
  if (!token || !config.supabaseJwtSecret) return null
  try {
    const payload = jwt.verify(token, config.supabaseJwtSecret, {
      algorithms: ['HS256'],
    })
    if (typeof payload === 'object' && payload !== null) {
      const email = payload.email
      if (typeof email === 'string' && email.includes('@')) return email.toLowerCase()
      const meta =
        payload.user_metadata?.email ||
        payload.app_metadata?.email
      if (typeof meta === 'string' && meta.includes('@')) return meta.toLowerCase()
    }
    return null
  } catch {
    return null
  }
}
