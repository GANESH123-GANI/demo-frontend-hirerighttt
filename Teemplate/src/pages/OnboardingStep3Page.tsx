import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/onboarding-steps.css'

export default function OnboardingStep3Page() {
  const navigate = useNavigate()

  // Achievements
  const [achievements, setAchievements] = useState<string[]>([
    'Led a team of 5 developers to build a scalable SaaS platform that increased user engagement by 40% across Q3 and reduced latency by 25%.'
  ])

  // Performance Metrics
  const [metrics, setMetrics] = useState([
    {
      id: 1,
      kpi: 'Increased Application Speed',
      contribution: 'Optimized database queries & caching',
      impact: 'Improved by 35%',
      period: 'Jan 2024 - Dec 2024'
    },
    {
      id: 2,
      kpi: 'Reduced Bug Reports',
      contribution: 'Introduced automated testing suite',
      impact: 'Decreased by 40%',
      period: 'Jan 2024 - Dec 2024'
    }
  ])

  // Awards
  const [awards, setAwards] = useState<string[]>([
    'Best Performer Award - TechCitta (Q4 2023)'
  ])

  // Certifications
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: 'AWS Solutions Architect',
      org: 'Amazon Web Services',
      date: '2023-08-15',
      credId: 'AWS-1234-XYZ'
    }
  ])

  // Rating
  const [rating, setRating] = useState<number>(4)

  const handleAddAchievement = () => {
    if (achievements.length < 5) {
      setAchievements([...achievements, ''])
    }
  }

  const handleUpdateAchievement = (idx: number, val: string) => {
    const updated = [...achievements]
    updated[idx] = val
    setAchievements(updated)
  }

  const handleAddMetric = () => {
    setMetrics([
      ...metrics,
      {
        id: Date.now(),
        kpi: '',
        contribution: '',
        impact: '',
        period: 'Jan 2024 - Dec 2024'
      }
    ])
  }

  const handleRemoveMetric = (id: number) => {
    setMetrics(metrics.filter(m => m.id !== id))
  }

  const handleUpdateMetric = (id: number, field: string, val: string) => {
    setMetrics(metrics.map(m => m.id === id ? { ...m, [field]: val } : m))
  }

  const handleAddAward = () => {
    if (awards.length < 5) {
      setAwards([...awards, ''])
    }
  }

  const handleAddCert = () => {
    if (certifications.length < 5) {
      setCertifications([
        ...certifications,
        {
          id: Date.now(),
          name: '',
          org: '',
          date: '',
          credId: ''
        }
      ])
    }
  }

  const handleContinue = () => {
    navigate('/onboarding/step-4')
  }

  return (
    <div className="ob-layout-container">
      {/* =====================================================================
           LEFT SIDEBAR (WHITE VARIANT - EXACT IMG 2)
           ===================================================================== */}
      <aside className="ob-sidebar-white">
        <div>
          {/* Brand */}
          <div className="ob-brand-header">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="ob-brand-title">
                HIRERIGHT<span className="ob-brand-ttt">TTT</span>
              </div>
              <div className="ob-brand-subtitle">
                TALENT <span className="ob-red-to">TO</span> TALENT
              </div>
            </Link>
          </div>

          {/* Visual Card */}
          <div className="ob-visual-card">
            <img src="/assets/sidebar-dev.jpg" alt="Performance Metrics" className="ob-visual-img" />
            <div className="ob-pill-badge" style={{ backgroundColor: '#ef4444' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="ob-status-pill">
              <span className="ob-status-dot" style={{ backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
              Metrics Verified
            </div>
          </div>

          {/* Headline */}
          <h2 className="ob-sidebar-headline">
            Showcase Your Impact,<br />
            Unlock More <span className="ob-text-red">Opportunities</span>
          </h2>
          <p className="ob-sidebar-subtext">
            Your achievements and performance highlight your value and help us match you with the right opportunities.
          </p>

          {/* Safe hands checklist */}
          <div className="ob-safe-box">
            <div className="ob-safe-header">
              <div className="ob-safe-shield-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              Your journey is in safe hands.
            </div>
            <ul className="ob-safe-list">
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> AI-Powered Matching
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> Verified by Top Employers Globally
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> 100% Secure &amp; Privacy-First
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> Helping talent grow, one connection at a time
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Help */}
        <div className="ob-sidebar-footer-help">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
          <div>
            Need help?<br />
            <a href="mailto:care@hirerighttt.com" className="ob-help-link">care@hirerighttt.com</a>
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Your data is safe with us</span>
          </div>
          <div className="ob-user-pill">
            <div className="ob-user-avatar">AD</div>
            <span>Hi, there</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="ob-page-heading-block">
          <h1 className="ob-page-title">Let's Highlight Your Performance</h1>
          <p className="ob-page-subtitle">
            Share your achievements and contributions that demonstrate your impact.
          </p>
        </div>

        {/* 5-Step Progress Stepper */}
        <div className="ob-stepper-container">
          <div className="ob-stepper-line">
            <div className="ob-stepper-progress" style={{ width: '50%' }}></div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle done">✓</div>
            <div className="ob-node-label">About You</div>
            <div className="ob-node-sub">Tell us who you are</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle done">✓</div>
            <div className="ob-node-label">Skills &amp; Experience</div>
            <div className="ob-node-sub">Showcase your expertise</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle active">3</div>
            <div className="ob-node-label" style={{ color: '#ef4444' }}>Performance</div>
            <div className="ob-node-sub active">Highlight your impact</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle">4</div>
            <div className="ob-node-label">AI Interview</div>
            <div className="ob-node-sub">Let AI learn about you</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle">5</div>
            <div className="ob-node-label">All Set!</div>
            <div className="ob-node-sub">Finish your journey</div>
          </div>
        </div>

        {/* ===================================================================
             1. KEY ACHIEVEMENTS
             =================================================================== */}
        <div className="ob-card-section">
          <div className="ob-card-header">
            <div className="ob-card-title">1. Key Achievements</div>
            <div className="ob-card-desc-right">Add up to 5 achievements ⓘ</div>
          </div>

          {achievements.map((ach, idx) => (
            <div key={idx} className="ob-field-group" style={{ marginBottom: 14 }}>
              <label className="ob-label">Achievement {idx + 1}</label>
              <textarea 
                value={ach}
                onChange={(e) => handleUpdateAchievement(idx, e.target.value)}
                className="ob-textarea"
                placeholder="E.g. Led a team of 5 developers to build a scalable SaaS platform that increased user engagement by 40%..."
              />
            </div>
          ))}

          {achievements.length < 5 && (
            <button 
              type="button" 
              onClick={handleAddAchievement}
              className="ob-btn-outline"
            >
              + Add Another Achievement
            </button>
          )}
        </div>

        {/* ===================================================================
             2. PERFORMANCE METRICS
             =================================================================== */}
        <div className="ob-card-section">
          <div className="ob-card-header">
            <div className="ob-card-title">2. Performance Metrics</div>
            <div className="ob-card-desc-right">Add measurable results</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
            {metrics.map((m) => (
              <div 
                key={m.id}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1.2fr 1.5fr 1fr 1fr auto', 
                  gap: 10, 
                  alignItems: 'center' 
                }}
              >
                <input 
                  type="text"
                  placeholder="Metric / KPI"
                  value={m.kpi}
                  onChange={(e) => handleUpdateMetric(m.id, 'kpi', e.target.value)}
                  className="ob-input-field"
                  style={{ fontSize: 13, padding: '9px 12px' }}
                />
                <input 
                  type="text"
                  placeholder="Your Contribution"
                  value={m.contribution}
                  onChange={(e) => handleUpdateMetric(m.id, 'contribution', e.target.value)}
                  className="ob-input-field"
                  style={{ fontSize: 13, padding: '9px 12px' }}
                />
                <input 
                  type="text"
                  placeholder="Impact / Result"
                  value={m.impact}
                  onChange={(e) => handleUpdateMetric(m.id, 'impact', e.target.value)}
                  className="ob-input-field"
                  style={{ fontSize: 13, padding: '9px 12px' }}
                />
                <input 
                  type="text"
                  placeholder="Time Period"
                  value={m.period}
                  onChange={(e) => handleUpdateMetric(m.id, 'period', e.target.value)}
                  className="ob-input-field"
                  style={{ fontSize: 13, padding: '9px 12px' }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveMetric(m.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: 6
                  }}
                  title="Delete Metric"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button 
            type="button" 
            onClick={handleAddMetric}
            className="ob-btn-outline"
          >
            + Add Another Metric
          </button>
        </div>

        {/* ===================================================================
             3. AWARDS & RECOGNITIONS
             =================================================================== */}
        <div className="ob-card-section">
          <div className="ob-card-header">
            <div className="ob-card-title">3. Awards &amp; Recognitions</div>
            <div className="ob-card-desc-right">Add up to 5 items</div>
          </div>

          {awards.map((award, idx) => (
            <div key={idx} className="ob-field-group" style={{ marginBottom: 12 }}>
              <input 
                type="text" 
                value={award}
                onChange={(e) => {
                  const updated = [...awards]
                  updated[idx] = e.target.value
                  setAwards(updated)
                }}
                className="ob-input-field"
                placeholder="E.g. Best Performer Award - TechCitta (Q4 2023)"
              />
            </div>
          ))}

          {awards.length < 5 && (
            <button 
              type="button" 
              onClick={handleAddAward}
              className="ob-btn-outline"
            >
              + Add Another Award
            </button>
          )}
        </div>

        {/* ===================================================================
             4. CERTIFICATIONS
             =================================================================== */}
        <div className="ob-card-section">
          <div className="ob-card-header">
            <div className="ob-card-title">4. Certifications</div>
            <div className="ob-card-desc-right">Add up to 5 certifications</div>
          </div>

          {certifications.map((cert, idx) => (
            <div key={cert.id} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#334155', marginBottom: 8 }}>
                Certification {idx + 1}
              </div>
              <div className="ob-form-grid-2" style={{ marginBottom: 10 }}>
                <div className="ob-field-group">
                  <label className="ob-label">Certification Name</label>
                  <input 
                    type="text" 
                    value={cert.name}
                    onChange={(e) => {
                      const updated = [...certifications]
                      updated[idx].name = e.target.value
                      setCertifications(updated)
                    }}
                    className="ob-input-field"
                    placeholder="e.g. AWS Solutions Architect"
                  />
                </div>
                <div className="ob-field-group">
                  <label className="ob-label">Issuing Organization</label>
                  <input 
                    type="text" 
                    value={cert.org}
                    onChange={(e) => {
                      const updated = [...certifications]
                      updated[idx].org = e.target.value
                      setCertifications(updated)
                    }}
                    className="ob-input-field"
                    placeholder="e.g. Amazon Web Services"
                  />
                </div>
              </div>

              <div className="ob-form-grid-2">
                <div className="ob-field-group">
                  <label className="ob-label">Date Earned</label>
                  <input 
                    type="date" 
                    value={cert.date}
                    onChange={(e) => {
                      const updated = [...certifications]
                      updated[idx].date = e.target.value
                      setCertifications(updated)
                    }}
                    className="ob-input-field"
                  />
                </div>
                <div className="ob-field-group">
                  <label className="ob-label">Credential ID (Optional)</label>
                  <input 
                    type="text" 
                    value={cert.credId}
                    onChange={(e) => {
                      const updated = [...certifications]
                      updated[idx].credId = e.target.value
                      setCertifications(updated)
                    }}
                    className="ob-input-field"
                    placeholder="e.g. AWS-1234-XYZ"
                  />
                </div>
              </div>
            </div>
          ))}

          {certifications.length < 5 && (
            <button 
              type="button" 
              onClick={handleAddCert}
              className="ob-btn-outline"
            >
              + Add Another Certification
            </button>
          )}
        </div>

        {/* ===================================================================
             5. SELF PERFORMANCE RATING (OPTIONAL)
             =================================================================== */}
        <div className="ob-card-section">
          <div className="ob-card-header">
            <div className="ob-card-title">5. Self Performance Rating (Optional)</div>
          </div>
          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 14 }}>
            How would you rate your overall performance in your current role?
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: 10, fontSize: 26, cursor: 'pointer', marginBottom: 6 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    onClick={() => setRating(star)}
                    style={{ color: star <= rating ? '#f59e0b' : '#cbd5e1', transition: 'color 0.15s' }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 170, fontSize: 11, color: '#94a3b8' }}>
                <span>Needs Improvement</span>
                <span>Excellent</span>
              </div>
            </div>

            <div className="ob-motivation-card">
              <div className="ob-motivation-icon" style={{ background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="ob-motivation-text">
                <span style={{ color: '#0f172a', fontWeight: 500 }}>
                  This helps us understand your strengths better and match you with the right opportunities.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="ob-bottom-bar">
          <Link to="/onboarding/step-2" className="ob-btn-back">
            ← Back
          </Link>

          <div className="ob-saved-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            All changes are saved automatically
          </div>

          <button 
            type="button" 
            onClick={handleContinue}
            className="ob-btn-primary-red"
          >
            Save &amp; Continue →
          </button>
        </div>

        <div className="ob-step-footer-footnote">
          Step 3 of 5
        </div>
      </main>
    </div>
  )
}
