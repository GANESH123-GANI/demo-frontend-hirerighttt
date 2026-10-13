import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/onboarding-steps.css'

export default function OnboardingStep5Page() {
  return (
    <div className="ob-layout-container">
      {/* =====================================================================
           LEFT SIDEBAR (DARK NAVY VARIANT - EXACT IMG 4)
           ===================================================================== */}
      <aside className="ob-sidebar-dark">
        <div>
          {/* Brand */}
          <div className="ob-brand-header">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="ob-brand-title">
                HRERIGHT<span className="ob-brand-ttt">TTT</span>
              </div>
              <div className="ob-brand-subtitle">
                TALENT <span className="ob-red-to">TO</span> TALENT
              </div>
            </Link>
          </div>

          {/* 3D Character Sitting on Couch */}
          <div className="ob-character-box">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img src="/assets/character-couch.jpg" alt="Candidate with Laptop" className="ob-character-img" />
              <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 28,
                height: 28,
                borderRadius: '50%',
                backgroundColor: '#10b981',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: 14,
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}>
                ✓
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="ob-sidebar-headline">
            You're on the<br />
            <span className="ob-text-red">Right</span> Path!
          </h2>
          <p className="ob-sidebar-subtext">
            We're excited to have you with us. Our AI Interview will help you showcase your skills and connect you with the best opportunities.
          </p>

          {/* Safe hands checklist */}
          <div className="ob-safe-box">
            <div className="ob-safe-header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Your journey is in safe hands.
            </div>
            <ul className="ob-safe-list">
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> AI-Powered Matching
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> Fair &amp; Unbiased
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> Trusted by Top Companies
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> 100% Secure &amp; Private
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Help */}
        <div className="ob-sidebar-footer-help">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
          <div>
            Need help?<br />
            <a href="mailto:care@hreright.com" className="ob-help-link" style={{ color: '#38bdf8' }}>care@hreright.com</a>
          </div>
        </div>
      </aside>

      {/* =====================================================================
           RIGHT MAIN CONTENT AREA
           ===================================================================== */}
      <main className="ob-main-content">
        {/* Top Header */}
        <div className="ob-top-header">
          <div className="ob-security-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Your data is safe with us</span>
          </div>
          <div className="ob-user-pill">
            <div className="ob-user-avatar">
              <img src="/assets/avatars/avatar1.jpg" alt="Arjun" />
            </div>
            <span>Hi, Arjun</span>
          </div>
        </div>

        {/* 6-Step Stepper Bar */}
        <div className="ob-stepper-container" style={{ marginBottom: 28 }}>
          <div className="ob-stepper-line">
            <div className="ob-stepper-progress" style={{ width: '80%', backgroundColor: '#6366f1' }}></div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle done">✓</div>
            <div className="ob-node-label" style={{ fontSize: 11.5 }}>Profile</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle done">✓</div>
            <div className="ob-node-label" style={{ fontSize: 11.5 }}>Resume</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle done">✓</div>
            <div className="ob-node-label" style={{ fontSize: 11.5 }}>About You</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle done">✓</div>
            <div className="ob-node-label" style={{ fontSize: 11.5 }}>Availability</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle" style={{ backgroundColor: '#6366f1', color: '#fff', borderColor: '#6366f1' }}>5</div>
            <div className="ob-node-label" style={{ fontSize: 11.5, color: '#6366f1' }}>AI Interview</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle">6</div>
            <div className="ob-node-label" style={{ fontSize: 11.5 }}>All Set!</div>
          </div>
        </div>

        {/* ===================================================================
             TOP CELEBRATION ROBOT BANNER
             =================================================================== */}
        <div className="ob-confirmed-banner">
          <div className="ob-confirmed-left">
            <div className="ob-confirmed-check-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h1 className="ob-confirmed-title">
                All Set, Arjun! 🎉<br />
                Your 15-Minute AI Interview is Confirmed!
              </h1>
              <p className="ob-confirmed-sub">
                We're excited to connect with you and help you take the next step in your career journey.
              </p>
            </div>
          </div>

          <div>
            <img src="/assets/robot-celebration.jpg" alt="AI Robot Mascot" className="ob-confirmed-robot-img" style={{ borderRadius: 16 }} />
          </div>
        </div>

        {/* ===================================================================
             INTERVIEW DETAILS CARD
             =================================================================== */}
        <div className="ob-card-section">
          <div style={{ fontSize: 16, fontWeight: 800, color: '#0b1528', marginBottom: 20 }}>
            Your Interview Details
          </div>

          <div className="ob-details-grid">
            {/* Left Column: Details */}
            <div>
              {/* Date */}
              <div className="ob-detail-item">
                <div className="ob-detail-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div className="ob-detail-content">
                  <strong>Date</strong>
                  <span>Monday, 19 May 2025</span>
                </div>
              </div>

              {/* Time */}
              <div className="ob-detail-item">
                <div className="ob-detail-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="ob-detail-content">
                  <strong>Time</strong>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>01:30 PM (IST)</span>
                    <span style={{ 
                      fontSize: 10.5, 
                      backgroundColor: '#ede9fe', 
                      color: '#7c3aed', 
                      padding: '2px 8px', 
                      borderRadius: 4, 
                      fontWeight: 700 
                    }}>
                      15 Min Interview
                    </span>
                  </div>
                </div>
              </div>

              {/* Mode */}
              <div className="ob-detail-item">
                <div className="ob-detail-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7"/>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                </div>
                <div className="ob-detail-content">
                  <strong>Interview Mode</strong>
                  <span>AI Video Interview</span>
                </div>
              </div>

              {/* Type */}
              <div className="ob-detail-item">
                <div className="ob-detail-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                </div>
                <div className="ob-detail-content">
                  <strong>Interview Type</strong>
                  <span>Technical + Behavioral Assessment</span>
                </div>
              </div>
            </div>

            {/* Right Column: What's Next Card */}
            <div style={{ 
              backgroundColor: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: 14, 
              padding: 20 
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 14 }}>
                What's Next?
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12.5, color: '#334155' }}>
                  <span style={{ color: '#6366f1', fontWeight: 800 }}>✓</span>
                  Our AI will conduct a fair and personalized conversation to understand you better
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12.5, color: '#334155' }}>
                  <span style={{ color: '#6366f1', fontWeight: 800 }}>✓</span>
                  Showcase your skills, experiences and problem-solving approach
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12.5, color: '#334155' }}>
                  <span style={{ color: '#6366f1', fontWeight: 800 }}>✓</span>
                  Get matched with opportunities that are the right fit for you
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 14, paddingTop: 10, borderTop: '1px solid #f1f5f9' }}>
            <button 
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '11px 22px',
                border: '1px solid #cbd5e1',
                borderRadius: 9999,
                background: '#fff',
                fontSize: 13.5,
                fontWeight: 600,
                color: '#334155',
                cursor: 'pointer'
              }}
            >
              📅 Add to Calendar
            </button>
            <button 
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '11px 24px',
                border: 'none',
                borderRadius: 9999,
                backgroundColor: '#6366f1',
                color: '#fff',
                fontSize: 13.5,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              View Interview Guide →
            </button>
          </div>
        </div>

        {/* ===================================================================
             CONFIRMATION SENT NOTIFICATIONS (EMAIL & WHATSAPP)
             =================================================================== */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#0b1528', marginBottom: 4 }}>
            We've Sent You a Confirmation!
          </div>
          <div style={{ fontSize: 13, color: '#64748b', marginBottom: 16 }}>
            Check your email and WhatsApp for all the details.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {/* Email Sent Card */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e2e8f0', 
              borderRadius: 14, 
              padding: 20 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: '#0f172a' }}>
                  <span>✉️</span> Email Sent
                </div>
                <span style={{ fontSize: 11, backgroundColor: '#dcfce7', color: '#16a34a', padding: '3px 8px', borderRadius: 6, fontWeight: 700 }}>
                  ✓ Sent
                </span>
              </div>
              <div style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>
                To: arjun.kumar@gmail.com
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: '#1e293b', marginBottom: 10 }}>
                Subject: Your AI Interview is Confirmed – Mon, 19 May 2025
              </div>
              <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.45, backgroundColor: '#f8fafc', padding: 12, borderRadius: 8, marginBottom: 14 }}>
                Hi Arjun,<br />
                Great news! Your 15-minute AI Interview is confirmed.<br />
                🗓️ Date: Monday, 19 May 2025<br />
                ⏰ Time: 01:30 PM (IST)<br />
                We look forward to meeting you!<br />
                ~ Team HRERIGHTTT
              </div>
              <button
                type="button"
                style={{
                  width: '100%',
                  padding: '9px 16px',
                  border: '1px solid #cbd5e1',
                  borderRadius: 8,
                  backgroundColor: '#ffffff',
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer'
                }}
              >
                Open Email
              </button>
            </div>

            {/* WhatsApp Sent Card */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e2e8f0', 
              borderRadius: 14, 
              padding: 20 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: '#0f172a' }}>
                  <span>💬</span> WhatsApp Sent
                </div>
                <span style={{ fontSize: 11, backgroundColor: '#dcfce7', color: '#16a34a', padding: '3px 8px', borderRadius: 6, fontWeight: 700 }}>
                  ✓ Sent
                </span>
              </div>
              <div style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>
                To: +91 98765 43210
              </div>
              <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.45, backgroundColor: '#f0fdf4', padding: 12, borderRadius: 8, marginBottom: 14 }}>
                Hi Arjun! 🎉<br />
                Your 15-minute AI Interview is confirmed.<br />
                🗓️ Mon, 19 May 2025<br />
                ⏰ 01:30 PM (IST)<br />
                We're excited to connect with you and help you find the right opportunities.<br />
                ~ Team HRERIGHTTT <span style={{ float: 'right', fontSize: 10, color: '#16a34a' }}>10:42 AM ✔✔</span>
              </div>
              <button
                type="button"
                style={{
                  width: '100%',
                  padding: '9px 16px',
                  border: '1px solid #cbd5e1',
                  borderRadius: 8,
                  backgroundColor: '#ffffff',
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer'
                }}
              >
                Open WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================================
             WE'LL REMIND YOU TIMELINE
             =================================================================== */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#0b1528', marginBottom: 4 }}>
            We'll Remind You!
          </div>
          <div style={{ fontSize: 12.5, color: '#64748b', marginBottom: 16 }}>
            You'll get reminders so you never miss your interview.
          </div>

          <div style={{ 
            backgroundColor: '#ffffff', 
            border: '1px solid #e2e8f0', 
            borderRadius: 14, 
            padding: '20px 24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>🔔</span>
              <div>
                <strong style={{ display: 'block', fontSize: 13, color: '#0f172a' }}>24 Hours Before</strong>
                <span style={{ fontSize: 11.5, color: '#64748b' }}>We'll send you a reminder via Email &amp; WhatsApp</span>
              </div>
            </div>

            <span style={{ color: '#cbd5e1' }}>→</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>⏱️</span>
              <div>
                <strong style={{ display: 'block', fontSize: 13, color: '#0f172a' }}>1 Hour Before</strong>
                <span style={{ fontSize: 11.5, color: '#64748b' }}>Quick reminder with interview instructions.</span>
              </div>
            </div>

            <span style={{ color: '#cbd5e1' }}>→</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>🔔</span>
              <div>
                <strong style={{ display: 'block', fontSize: 13, color: '#0f172a' }}>15 Minutes Before</strong>
                <span style={{ fontSize: 11.5, color: '#64748b' }}>Final reminder to help you get ready</span>
              </div>
            </div>

            <span style={{ color: '#cbd5e1' }}>→</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>📹</span>
              <div>
                <strong style={{ display: 'block', fontSize: 13, color: '#6366f1' }}>Interview Time</strong>
                <span style={{ fontSize: 11.5, color: '#64748b' }}>Join and ace your AI interview!</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
             BOTTOM BANNER: YOU'VE TAKEN THE RIGHT STEP
             =================================================================== */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)', 
          border: '1px solid #c7d2fe', 
          borderRadius: 16, 
          padding: '24px 32px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: 20
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: '#fef08a', 
              color: '#ca8a04', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: 24,
              boxShadow: '0 4px 12px rgba(234, 179, 8, 0.3)'
            }}>
              ★
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#1e1b4b', marginBottom: 4 }}>
                You've Taken the <span style={{ color: '#ef4444' }}>Right</span> Step!
              </div>
              <div style={{ fontSize: 13, color: '#4338ca', marginBottom: 2 }}>
                Believe in yourself. Showcase your best. Opportunities are waiting for you!
              </div>
              <div style={{ fontSize: 12, color: '#6366f1' }}>
                We're with you, every step of the way. If you need any help, reach out to us at <a href="mailto:care@hireright.com" style={{ color: '#4f46e5', fontWeight: 600 }}>care@hireright.com</a>
              </div>
            </div>
          </div>

          <div style={{ fontSize: 44, paddingRight: 10 }}>
            🏆
          </div>
        </div>

        {/* Return to home link */}
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Link to="/" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 13.5 }}>
            ← Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  )
}
