import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ensureApiSession } from '../lib/apiSession'
import { getUser, type UserRole } from '../lib/store'

type Props = {
  children: ReactNode
  role?: UserRole | UserRole[]
}

/** Redirects to /login when there is no active session. */
export function RequireAuth({ children, role }: Props) {
  const location = useLocation()
  const user = getUser()

  useEffect(() => {
    if (user) void ensureApiSession()
  }, [user?.email])

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  if (role) {
    const allowed = Array.isArray(role) ? role : [role]
    const current = user.role ?? 'jobseeker'
    if (!allowed.includes(current)) {
      return (
        <Navigate
          to={current === 'employer' ? '/employer/dashboard' : '/dashboard'}
          replace
        />
      )
    }
  }
  return <>{children}</>
}
