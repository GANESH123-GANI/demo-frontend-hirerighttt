import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/about-us.css'

export default function OnboardingStep1Page() {
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Form state
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [whoAreYou, setWhoAreYou] = useState('')
  const [whatDrivesYou, setWhatDrivesYou] = useState('')
  const [keyStrengths, setKeyStrengths] = useState('')
  
  const [currentRole, setCurrentRole] = useState('')
  const [totalExperience, setTotalExperience] = useState('')
  const [currentLocation, setCurrentLocation] = useState('')
  const [noticePeriod, setNoticePeriod] = useState('')
  
  const [whyModalOpen, setWhyModalOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setResumeFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleRemoveFile = () => {
    setResumeFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      navigate('/onboarding/step-2')
    }, 400)
  }

  return (
    <div className="onboarding-page-container" style={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      
      {/* =====================================================================
           1. LEFT SIDEBAR (EXACT IMG1)
           ===================================================================== */}
      <aside className="onboarding-sidebar">
        
        {/* Brand */}
        <Link to="/" className="sidebar-brand">
          <div className="brand-main">
            <span className="brand-name">HRERIGHT</span>
            <span className="brand-ttt">TTT</span>
          </div>
          <span className="brand-tagline">TALENT <span className="red-to">TO</span> TALENT</span>
        </Link>

        {/* Headline */}
        <h2 className="sidebar-headline">
          Your Journey<br />
          to the <span className="text-red">Right</span><br />
          Opportunity<br />
          Starts Here.
        </h2>

        <p className="sidebar-desc">
          We're here to understand you better, so we can connect you with opportunities that truly fit your potential.
        </p>

        {/* Feature Summit Card */}
        <div className="sidebar-feature-card">
          <img src="/assets/climber-card.jpg" alt="One profile unlimited possibilities" />
          <div className="feature-card-overlay">
            <div className="feature-card-title">
              One profile.<br />
              Unlimited possibilities.
            </div>
            <div className="feature-card-sub">
              Built on trust. Powered by AI.
            </div>
          </div>
        </div>

        {/* "Why HRERIGHTTT" */}
        <div className="sidebar-why">
          <div className="why-heading">
            Why HRERIGHT<span className="red-sup">TTT</span>
          </div>
          <ul className="why-list">
            <li className="why-item">
              <div className="why-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>AI-powered matching with the right roles</span>
            </li>
            <li className="why-item">
              <div className="why-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Verified by top employers globally</span>
            </li>
            <li className="why-item">
              <div className="why-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>100% secure &amp; privacy-first</span>
            </li>
            <li className="why-item">
              <div className="why-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Helping talent grow, one connection at a time</span>
            </li>
          </ul>
        </div>

        {/* Support Footer */}
        <div className="sidebar-footer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <div>
            Need help?<br />
            <a href="mailto:care@hreright.com">care@hreright.com</a>
          </div>
        </div>

      </aside>

      {/* =====================================================================
           2. MAIN CONTENT AREA (EXACT IMG1)
           ===================================================================== */}
      <main className="onboarding-main">
        
        {/* Top Bar */}
        <header className="main-topbar">
          <div className="data-safe-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <span>Your data is safe with us</span>
          </div>

          <div className="user-profile-chip" title="Account settings">
            <img src="/assets/avatars/avatar1.jpg" alt="Arjun Profile" className="user-avatar" />
            <span className="user-name">Hi, Arjun</span>
            <svg className="chevron-down" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </header>

        {/* Form Body Container */}
        <div className="main-content-inner">
          
          {/* 5-Step Stepper */}
          <nav className="stepper-container" aria-label="Onboarding Progress">
            <ol className="stepper-list">
              
              {/* Step 1: Active */}
              <li className="step-item active">
                <div className="step-circle" aria-current="step">1</div>
                <div className="step-title">About You</div>
                <div className="step-desc">Tell us who you are</div>
              </li>

              {/* Step 2 */}
              <li className="step-item">
                <div className="step-circle">2</div>
                <div className="step-title">Skills &amp; Experience</div>
                <div className="step-desc">Your expertise</div>
              </li>

              {/* Step 3 */}
              <li className="step-item">
                <div className="step-circle">3</div>
                <div className="step-title">Preferences</div>
                <div className="step-desc">What you're looking for</div>
              </li>

              {/* Step 4 */}
              <li className="step-item">
                <div className="step-circle">4</div>
                <div className="step-title">AI Interview</div>
                <div className="step-desc">Let's get you ready</div>
              </li>

              {/* Step 5 */}
              <li className="step-item">
                <div className="step-circle">5</div>
                <div className="step-title">Complete</div>
                <div className="step-desc">You're all set!</div>
              </li>

            </ol>
          </nav>

          {/* Form Header */}
          <div className="form-header">
            <h1 className="form-title">
              Let's Build Your Profile
              <span style={{ display: 'inline-block' }}>👋</span>
            </h1>
            <p className="form-subtitle">
              The more we know about you, the better we can match you with the right opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            
            {/* ===============================================================
                 CARD 1: UPLOAD YOUR RESUME
                 =============================================================== */}
            <section className="form-card">
              <div className="card-top">
                <h2 className="card-title">1. Upload Your Resume</h2>
                <button 
                  type="button" 
                  className="why-upload-link" 
                  onClick={() => setWhyModalOpen(true)}
                >
                  Why upload?
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </button>
              </div>

              <div className="resume-upload-wrapper">
                {/* Purple Document Badge */}
                <div className="resume-icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 18v-6"></path>
                    <path d="M9 15l3-3 3 3"></path>
                  </svg>
                </div>

                <div className="resume-drop-content">
                  <div className="drop-prompt-title">Upload your latest resume to get started</div>
                  <div className="drop-prompt-desc">We'll use it to understand your background and make the process easier.</div>

                  {/* Dropzone */}
                  {!resumeFile ? (
                    <div 
                      className={`resume-dropzone ${isDragOver ? 'dragover' : ''}`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <svg className="dropzone-upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      <div className="dropzone-text">Drag &amp; drop your resume here</div>
                      <div className="dropzone-or">or</div>
                      <span className="btn-browse">Browse Files</span>
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="file-input-hidden" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <div className="dropzone-hint">Supports PDF, DOC, DOCX (Max 5MB)</div>
                    </div>
                  ) : (
                    /* Uploaded preview */
                    <div className="file-uploaded-preview active">
                      <div className="file-info">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span>{resumeFile.name}</span>
                      </div>
                      <button type="button" className="btn-remove-file" onClick={handleRemoveFile}>
                        Remove
                      </button>
                    </div>
                  )}

                  <div className="resume-security-note">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Your resume is secure and only visible to you.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ===============================================================
                 CARD 2: TELL US ABOUT YOURSELF
                 =============================================================== */}
            <section className="form-card">
              <div className="card-top" style={{ marginBottom: '8px' }}>
                <h2 className="card-title">2. Tell Us About Yourself</h2>
              </div>
              <p className="card-subtitle">Help us know you better in a few words.</p>

              <div className="two-col-grid">
                {/* Who are you? */}
                <div className="input-group">
                  <label htmlFor="whoAreYou" className="field-label">Who are you?</label>
                  <span className="field-sublabel">Introduce yourself in a few lines.</span>
                  <div className="textarea-wrapper">
                    <textarea 
                      id="whoAreYou" 
                      className="form-textarea" 
                      maxLength={300}
                      rows={4}
                      value={whoAreYou}
                      onChange={(e) => setWhoAreYou(e.target.value)}
                      placeholder="E.g. I'm a passionate software engineer with 3+ years of experience in building scalable web applications..."
                    />
                    <span className="char-counter">{whoAreYou.length}/300</span>
                  </div>
                </div>

                {/* What drives you? */}
                <div className="input-group">
                  <label htmlFor="whatDrivesYou" className="field-label">What drives you?</label>
                  <span className="field-sublabel">What motivates you in your career?</span>
                  <div className="textarea-wrapper">
                    <textarea 
                      id="whatDrivesYou" 
                      className="form-textarea" 
                      maxLength={300}
                      rows={4}
                      value={whatDrivesYou}
                      onChange={(e) => setWhatDrivesYou(e.target.value)}
                      placeholder="E.g. I love solving complex problems, learning new technologies and creating impact through my work..."
                    />
                    <span className="char-counter">{whatDrivesYou.length}/300</span>
                  </div>
                </div>
              </div>

              {/* What are your key strengths? */}
              <div className="input-group">
                <label htmlFor="keyStrengths" className="field-label">What are your key strengths?</label>
                <span className="field-sublabel">Share your top 3-5 strengths.</span>
                <div className="textarea-wrapper">
                  <textarea 
                    id="keyStrengths" 
                    className="form-textarea" 
                    maxLength={250}
                    rows={3}
                    value={keyStrengths}
                    onChange={(e) => setKeyStrengths(e.target.value)}
                    placeholder="E.g. Problem solving, Team collaboration, Attention to detail, Adaptability..."
                  />
                  <span className="char-counter">{keyStrengths.length}/250</span>
                </div>
              </div>
            </section>

            {/* ===============================================================
                 CARD 3: YOUR CURRENT SNAPSHOT
                 =============================================================== */}
            <section className="form-card">
              <div className="card-top" style={{ marginBottom: '16px' }}>
                <h2 className="card-title">3. Your Current Snapshot</h2>
              </div>

              <div className="snapshot-grid">
                
                {/* Current Role */}
                <div className="input-group">
                  <label htmlFor="currentRole" className="field-label" style={{ fontSize: '13px', marginBottom: '6px' }}>Current Role</label>
                  <div className="select-wrapper">
                    <select 
                      id="currentRole" 
                      className="form-select"
                      value={currentRole}
                      onChange={(e) => setCurrentRole(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="software-engineer">Software Engineer</option>
                      <option value="frontend-dev">Frontend Developer</option>
                      <option value="backend-dev">Backend Developer</option>
                      <option value="fullstack-dev">Full Stack Developer</option>
                      <option value="data-scientist">Data Scientist / AI</option>
                      <option value="product-manager">Product Manager</option>
                      <option value="devops-engineer">DevOps Engineer</option>
                      <option value="uiux-designer">UI/UX Designer</option>
                      <option value="qa-engineer">QA Engineer</option>
                      <option value="other">Other</option>
                    </select>
                    <svg className="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Total Experience */}
                <div className="input-group">
                  <label htmlFor="totalExperience" className="field-label" style={{ fontSize: '13px', marginBottom: '6px' }}>Total Experience</label>
                  <div className="select-wrapper">
                    <select 
                      id="totalExperience" 
                      className="form-select"
                      value={totalExperience}
                      onChange={(e) => setTotalExperience(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select experience</option>
                      <option value="fresher">Fresher (0 years)</option>
                      <option value="1-2">1 - 2 years</option>
                      <option value="3-5">3 - 5 years</option>
                      <option value="5-8">5 - 8 years</option>
                      <option value="8+">8+ years</option>
                    </select>
                    <svg className="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Current Location */}
                <div className="input-group">
                  <label htmlFor="currentLocation" className="field-label" style={{ fontSize: '13px', marginBottom: '6px' }}>Current Location</label>
                  <div className="select-wrapper">
                    <select 
                      id="currentLocation" 
                      className="form-select"
                      value={currentLocation}
                      onChange={(e) => setCurrentLocation(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select location</option>
                      <option value="bengaluru">Bengaluru, India</option>
                      <option value="hyderabad">Hyderabad, India</option>
                      <option value="pune">Pune, India</option>
                      <option value="mumbai">Mumbai, India</option>
                      <option value="delhi-ncr">Delhi NCR, India</option>
                      <option value="chennai">Chennai, India</option>
                      <option value="remote">Remote / Anywhere</option>
                    </select>
                    <svg className="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Notice Period */}
                <div className="input-group">
                  <label htmlFor="noticePeriod" className="field-label" style={{ fontSize: '13px', marginBottom: '6px' }}>Notice Period</label>
                  <div className="select-wrapper">
                    <select 
                      id="noticePeriod" 
                      className="form-select"
                      value={noticePeriod}
                      onChange={(e) => setNoticePeriod(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select notice period</option>
                      <option value="immediate">Immediate</option>
                      <option value="15-days">15 Days</option>
                      <option value="30-days">30 Days</option>
                      <option value="60-days">60 Days</option>
                      <option value="90-days">90 Days</option>
                    </select>
                    <svg className="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

              </div>
            </section>

            {/* Privacy Card */}
            <div className="privacy-banner-card">
              <div className="privacy-left">
                <div className="privacy-shield-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div className="privacy-text">
                  <strong>We respect your privacy</strong>
                  <p>Your information is protected with industry-leading security. We never share your data without your consent.</p>
                </div>
              </div>

              <div className="privacy-badges">
                <span className="privacy-pill">
                  <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Encrypted
                </span>
                <span className="privacy-pill">
                  <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Private
                </span>
                <span className="privacy-pill">
                  <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Secure
                </span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="onboarding-actions">
              <Link to="/" className="btn-save-exit">Save &amp; Exit</Link>
              
              <button type="submit" className="btn-save-continue" disabled={isSaving}>
                <span>{isSaving ? 'Saving...' : 'Save & Continue'}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

          </form>

        </div>
      </main>

      {/* Modal for Why Upload */}
      {whyModalOpen && (
        <div className="modal-overlay active" onClick={() => setWhyModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Why Upload Your Resume?</h3>
            <p>
              Uploading your resume allows our AI engine to parse your work history, skills, and accomplishments automatically. This saves you from having to type everything manually and increases your match accuracy with top employers by up to 85%.
            </p>
            <button type="button" className="btn-close-modal" onClick={() => setWhyModalOpen(false)}>
              Got it
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
