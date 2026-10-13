import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [isSignUp, setIsSignUp] = useState(false)
  const [identifier, setIdentifier] = useState('arjun.sharma@example.com')
  const [password, setPassword] = useState('password123')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      navigate('/about-us')
    }, 450)
  }

  const handleSocialClick = () => {
    navigate('/about-us')
  }

  return (
    <div className="auth-split-layout">
      
      {/* =====================================================================
           1. LEFT SIDE: 3D TECH GLOBE ON SOLID BLACK (EXACT IMG2)
           ===================================================================== */}
      <div className="auth-left-visual">
        
        {/* Top Brand Logo */}
        <Link to="/" className="auth-brand-logo" title="Back to HireRight Homepage">
          <div className="brand-icon-box">
            <span>H</span>
          </div>
          <span className="brand-text-logo">HIRERIGHT</span>
        </Link>

        {/* Bottom Community Welcome Copy */}
        <div className="auth-left-content">
          <div className="left-welcome-prefix">Welcome to</div>
          <h2 className="left-welcome-title">HireRight Community</h2>
          <p className="left-welcome-sub">Home to 30 Million job seekers worldwide</p>
          <a 
            href="#community" 
            className="green-know-more"
            onClick={(e) => {
              e.preventDefault()
              alert('HireRight Community empowers over 30 Million job seekers worldwide with AI talent matching, credential screening, and interview readiness.')
            }}
          >
            Know more &rarr;
          </a>
        </div>

      </div>

      {/* =====================================================================
           2. RIGHT SIDE: AUTHENTICATION FORM (EXACT IMG2)
           ===================================================================== */}
      <div className="auth-right-form">
        <div className="form-inner-box">

          {!isSignUp ? (
            /* --- LOGIN MODE --- */
            <div>
              <div className="auth-subhead">Welcome back!</div>
              <h1 className="auth-headline">Login to your account</h1>
              <p className="auth-desc">It's nice to see you again. Ready to get hired?</p>

              <form onSubmit={handleSubmit}>
                <div className="auth-form-fields">
                  <div className="auth-input-wrapper">
                    <input 
                      type="text" 
                      className="auth-input" 
                      placeholder="Your username or email" 
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="auth-input-wrapper">
                    <input 
                      type="password" 
                      className="auth-input" 
                      placeholder="Your password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`btn-auth-submit ${identifier && password ? 'active' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Log In'}
                </button>

                {/* Remember me & Forgot password */}
                <div className="auth-remember-row">
                  <label className="remember-label">
                    <input 
                      type="checkbox" 
                      className="remember-checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="#forgot" className="forgot-password-link" onClick={(e) => { e.preventDefault(); alert('Password reset instructions sent to your email.'); }}>
                    Forgot password?
                  </a>
                </div>

                {/* Divider */}
                <div className="auth-divider">
                  <span>or</span>
                </div>

                {/* Google OAuth Button */}
                <button type="button" className="btn-social-google" onClick={handleSocialClick}>
                  <svg viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>

                {/* LinkedIn & GitHub */}
                <div className="social-two-grid">
                  <button type="button" className="btn-social-item" onClick={handleSocialClick}>
                    <svg viewBox="0 0 24 24" fill="#0A66C2">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </button>

                  <button type="button" className="btn-social-item" onClick={handleSocialClick}>
                    <svg viewBox="0 0 24 24" fill="#181717">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>GitHub</span>
                  </button>
                </div>

                {/* Switch to Sign Up */}
                <div className="auth-switch-footer">
                  Don't have an account?{' '}
                  <button 
                    type="button" 
                    className="auth-switch-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* --- SIGN UP MODE --- */
            <div>
              <div className="auth-subhead">Join the community!</div>
              <h1 className="auth-headline">Create an account</h1>
              <p className="auth-desc">Start your journey to the right opportunity today.</p>

              <form onSubmit={handleSubmit}>
                <div className="auth-form-fields">
                  <div className="auth-input-wrapper">
                    <input 
                      type="text" 
                      className="auth-input" 
                      placeholder="Full Name (e.g. Arjun Sharma)" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="auth-input-wrapper">
                    <input 
                      type="email" 
                      className="auth-input" 
                      placeholder="Your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="auth-input-wrapper">
                    <input 
                      type="password" 
                      className="auth-input" 
                      placeholder="Create a strong password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-auth-submit active"
                  disabled={loading}
                >
                  {loading ? 'Creating account...' : 'Create Account \u2192'}
                </button>

                <div className="auth-divider">
                  <span>or sign up with</span>
                </div>

                <button type="button" className="btn-social-google" onClick={handleSocialClick}>
                  <svg viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  <span>Sign up with Google</span>
                </button>

                <div className="auth-switch-footer" style={{ marginTop: '24px' }}>
                  Already have an account?{' '}
                  <button 
                    type="button" 
                    className="auth-switch-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                    onClick={() => setIsSignUp(false)}
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>

    </div>
  )
}
