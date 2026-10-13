import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/onboarding-steps.css'

export default function OnboardingStep4Page() {
  const navigate = useNavigate()

  // Selected date & slot
  const [selectedDay, setSelectedDay] = useState(19)
  const [selectedSlot, setSelectedSlot] = useState('01:30 PM')

  const morningSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM']
  const afternoonSlots = ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM']
  const eveningSlots = ['04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM']

  const handleConfirm = () => {
    navigate('/onboarding/step-5')
  }

  return (
    <div className="ob-layout-container">
      {/* =====================================================================
           LEFT SIDEBAR (DARK NAVY VARIANT - EXACT IMG 3)
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
            <img src="/assets/character-couch.jpg" alt="Candidate with Laptop" className="ob-character-img" />
          </div>

          {/* Headline */}
          <h2 className="ob-sidebar-headline">
            You've taken<br />
            the <span className="ob-text-red">Right</span> Step!
          </h2>
          <p className="ob-sidebar-subtext">
            We're excited to learn more about you and help you connect with the right opportunities.
          </p>

          {/* Progress Card (75%) */}
          <div className="ob-progress-card">
            <div className="ob-progress-ring-box">
              <svg width="58" height="58" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3.5"
                  strokeDasharray="75, 100"
                  strokeLinecap="round"
                />
                <text x="18" y="21" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="bold">
                  75%
                </text>
              </svg>
            </div>
            <div>
              <div className="ob-progress-text">Your Progress</div>
              <div className="ob-progress-sub">Great going! Just a few more steps.</div>
            </div>
          </div>

          {/* Safe hands checklist */}
          <div className="ob-safe-box">
            <div className="ob-safe-header">
              Why HRERIGHT<span className="ob-brand-ttt">TTT</span>?
            </div>
            <ul className="ob-safe-list">
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> AI-powered matching with the right roles
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> Interview with confidence
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> Trusted by top companies globally
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> 100% secure &amp; privacy-first
              </li>
              <li className="ob-safe-item">
                <span className="ob-check-green">✓</span> Helping talent grow, one connection at a time
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

        {/* Resume uploaded celebration banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 12, 
            backgroundColor: '#ede9fe', 
            color: '#7c3aed', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: '#0b1528', marginBottom: 4 }}>
              Great! Your resume is uploaded successfully! 🎉
            </h1>
            <p style={{ fontSize: 13.5, color: '#64748b' }}>
              Let's book your 15-minute AI Interview. Choose a time that works best for you.
            </p>
          </div>
        </div>

        {/* Highlights banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', 
          border: '1px solid #ddd6fe', 
          borderRadius: 16, 
          padding: '20px 24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: 28 
        }}>
          <div style={{ maxWidth: 520 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14.5, fontWeight: 700, color: '#6d28d9', marginBottom: 4 }}>
              <span>✨</span> Just 15 minutes to open doors to endless opportunities.
            </div>
            <p style={{ fontSize: 12.5, color: '#7c3aed', lineHeight: 1.4 }}>
              Our AI Interview is designed to understand you better and match you with roles where you can shine.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 20 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, marginBottom: 2 }}>⏱️</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#6d28d9' }}>15 Min<br />Interview</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, marginBottom: 2 }}>🧠</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#6d28d9' }}>AI-Powered<br />Assessment</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, marginBottom: 2 }}>🔒</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#6d28d9' }}>Secure &amp;<br />Private</div>
            </div>
          </div>
        </div>

        {/* ===================================================================
             4. SELECT YOUR 15-MINUTE INTERVIEW SLOT
             =================================================================== */}
        <div className="ob-card-section" style={{ padding: '24px 28px' }}>
          <div className="ob-card-header" style={{ marginBottom: 8 }}>
            <div className="ob-card-title">4. Select Your 15-Minute Interview Slot</div>
            <div className="ob-card-desc-right">Interview duration: 15 minutes ⓘ</div>
          </div>
          <div style={{ fontSize: 12.5, color: '#64748b', marginBottom: 20 }}>
            All times are shown in <strong>(IST) Asia/Kolkata</strong>
          </div>

          {/* Calendar & Time Slots Grid */}
          <div className="ob-calendar-grid-wrapper">
            {/* Left: May 2025 Calendar */}
            <div className="ob-calendar-card">
              <div className="ob-cal-header">
                <div className="ob-cal-month-title">May 2025</div>
                <div className="ob-cal-nav-btns">
                  <button type="button" className="ob-cal-nav-btn">‹</button>
                  <button type="button" className="ob-cal-nav-btn">›</button>
                </div>
              </div>

              <table className="ob-cal-table">
                <thead>
                  <tr>
                    <th>SUN</th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THU</th>
                    <th>FRI</th>
                    <th>SAT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="ob-cal-day-cell other-month">27</div></td>
                    <td><div className="ob-cal-day-cell other-month">28</div></td>
                    <td><div className="ob-cal-day-cell other-month">29</div></td>
                    <td><div className="ob-cal-day-cell other-month">30</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(1)}>1</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(2)}>2</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(3)}>3</div></td>
                  </tr>
                  <tr>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(4)}>4</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(5)}>5</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(6)}>6</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(7)}>7</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(8)}>8</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(9)}>9</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(10)}>10</div></td>
                  </tr>
                  <tr>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(11)}>11</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(12)}>12</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(13)}>13</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(14)}>14</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(15)}>15</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(16)}>16</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(17)}>17</div></td>
                  </tr>
                  <tr>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(18)}>18</div></td>
                    <td>
                      <div 
                        className={`ob-cal-day-cell ${selectedDay === 19 ? 'selected' : ''}`} 
                        onClick={() => setSelectedDay(19)}
                      >
                        19
                      </div>
                    </td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(20)}>20</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(21)}>21</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(22)}>22</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(23)}>23</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(24)}>24</div></td>
                  </tr>
                  <tr>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(25)}>25</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(26)}>26</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(27)}>27</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(28)}>28</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(29)}>29</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(30)}>30</div></td>
                    <td><div className="ob-cal-day-cell" onClick={() => setSelectedDay(31)}>31</div></td>
                  </tr>
                </tbody>
              </table>

              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 16, fontSize: 11, color: '#64748b' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981' }}></span> Available
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#f59e0b' }}></span> Limited Slots
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#cbd5e1' }}></span> Unavailable
                </span>
              </div>
            </div>

            {/* Right: Time Slots */}
            <div className="ob-slots-card">
              <div className="ob-slots-date-title">
                Monday, {selectedDay} May 2025 ☀️
              </div>

              {/* Morning */}
              <div className="ob-slot-group-label">Morning</div>
              <div className="ob-slots-grid">
                {morningSlots.map((slot) => (
                  <div
                    key={slot}
                    className={`ob-slot-pill ${selectedSlot === slot ? 'active' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </div>
                ))}
              </div>

              {/* Afternoon */}
              <div className="ob-slot-group-label">Afternoon</div>
              <div className="ob-slots-grid">
                {afternoonSlots.map((slot) => (
                  <div
                    key={slot}
                    className={`ob-slot-pill ${selectedSlot === slot ? 'active' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot} {selectedSlot === slot && '✓'}
                  </div>
                ))}
              </div>

              {/* Evening */}
              <div className="ob-slot-group-label">Evening</div>
              <div className="ob-slots-grid">
                {eveningSlots.map((slot) => (
                  <div
                    key={slot}
                    className={`ob-slot-pill ${selectedSlot === slot ? 'active' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Slot Confirmation Box */}
          <div style={{ 
            marginTop: 24, 
            backgroundColor: '#f8fafc', 
            border: '1px solid #e2e8f0', 
            borderRadius: 14, 
            padding: '16px 20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: '50%', 
                backgroundColor: '#10b981', 
                color: '#fff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                ✓
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>You've selected</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#0f172a' }}>
                  Mon, {selectedDay} May 2025 &bull; {selectedSlot} (IST)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 20, fontSize: 11.5, color: '#475569' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                📩 You will receive a reminder before your interview
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                🔄 Reschedule or change time anytime
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                🛡️ Smooth, secure and distraction-free experience
              </span>
            </div>
          </div>

          {/* All Set Callout */}
          <div style={{ 
            marginTop: 18, 
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', 
            border: '1px solid #bbf7d0', 
            borderRadius: 14, 
            padding: '16px 20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 26 }}>🎉</span>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: '#065f46' }}>
                  All Set! You're Good to Go!
                </div>
                <div style={{ fontSize: 12.5, color: '#047857' }}>
                  We're looking forward to your interview. Get ready to showcase <strong>your best</strong> self.
                </div>
              </div>
            </div>

            <div style={{ 
              width: 32, 
              height: 32, 
              borderRadius: '50%', 
              backgroundColor: '#10b981', 
              color: '#fff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: 800 
            }}>
              ✓
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="ob-bottom-bar">
          <Link to="/onboarding/step-3" className="ob-btn-back">
            ← Back
          </Link>

          <button 
            type="button" 
            onClick={handleConfirm}
            className="ob-btn-primary-purple"
          >
            Confirm &amp; Continue →
          </button>
        </div>

        <div style={{ textAlign: 'center', fontSize: 11, color: '#94a3b8', marginTop: 12 }}>
          🔒 Your information is encrypted and secure
        </div>
      </main>
    </div>
  )
}
