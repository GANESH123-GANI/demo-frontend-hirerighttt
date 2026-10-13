import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/onboarding-steps.css'

export default function OnboardingStep2Page() {
  const navigate = useNavigate()

  // Skills state
  const [skills, setSkills] = useState<string[]>([
    'Python', 'JavaScript', 'React.js', 'Node.js', 'TypeScript', 
    'AWS', 'MongoDB', 'SQL', 'Git', 'Docker', 'REST APIs', 'Agile'
  ])
  const [skillInput, setSkillInput] = useState('')

  const suggestedSkills = [
    'Data Structures', 'System Design', 'PostgreSQL', 'AI / ML',
    'Kubernetes', 'CI/CD', 'Express.js', 'Next.js', 'Vue.js',
    'Angular', 'Java', 'Spring Boot', 'C++', 'C#'
  ]

  // Experience state
  const [isFresher, setIsFresher] = useState(false)
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'TechCitta Solutions Pvt. Ltd.',
      empType: 'Full-time',
      startDate: 'January 2023',
      endDate: 'Present',
      currentlyWorking: true,
      location: 'Hyderabad, India',
      responsibilities: `• Developed and maintained scalable web applications using React and Node.js
• Collaborated with cross-functional teams to deliver features on time
• Improved application performance and reduced load times by 30%`
    }
  ])

  // Total Experience
  const [totalExp, setTotalExp] = useState('2 - 3 Years')

  const handleAddSkill = (skill: string) => {
    const trimmed = skill.trim()
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed])
      setSkillInput('')
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove))
  }

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        jobTitle: '',
        company: '',
        empType: 'Full-time',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        location: '',
        responsibilities: ''
      }
    ])
  }

  const handleRemoveExperience = (id: number) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
  }

  const handleUpdateExperience = (id: number, field: string, value: any) => {
    setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp))
  }

  const handleContinue = () => {
    navigate('/onboarding/step-3')
  }

  return (
    <div className="ob-layout-container">
      {/* =====================================================================
           LEFT SIDEBAR (WHITE VARIANT - EXACT IMG 1)
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
            <img src="/assets/sidebar-dev.jpg" alt="Developer Coding" className="ob-visual-img" />
            <div className="ob-pill-badge">&lt; / &gt;</div>
            <div className="ob-status-pill">
              <span className="ob-status-dot"></span>
              AI Ingestion Active
            </div>
          </div>

          {/* Headline */}
          <h2 className="ob-sidebar-headline">
            Build Your Profile,<br />
            Unlock <span className="ob-text-red">Opportunities</span>
          </h2>
          <p className="ob-sidebar-subtext">
            Your skills and experience help us match you with the right opportunities.
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
          <h1 className="ob-page-title">Let's Add Your Skills &amp; Experience</h1>
          <p className="ob-page-subtitle">
            This helps us understand your expertise and match you with the best opportunities.
          </p>
        </div>

        {/* 5-Step Progress Stepper */}
        <div className="ob-stepper-container">
          <div className="ob-stepper-line">
            <div className="ob-stepper-progress" style={{ width: '25%' }}></div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle done">✓</div>
            <div className="ob-node-label">About You</div>
            <div className="ob-node-sub">Tell us who you are</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle active">2</div>
            <div className="ob-node-label" style={{ color: '#ef4444' }}>Skills &amp; Experience</div>
            <div className="ob-node-sub active">Showcase your expertise</div>
          </div>

          <div className="ob-step-node">
            <div className="ob-node-circle">3</div>
            <div className="ob-node-label">Performance</div>
            <div className="ob-node-sub">Highlight your impact</div>
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
             1. ADD YOUR SKILLS
             =================================================================== */}
        <div className="ob-card-section">
          <div className="ob-card-header">
            <div className="ob-card-title">1. Add Your Skills</div>
            <div className="ob-card-desc-right">Add skills relevant to the roles you're interested in.</div>
          </div>

          <div className="ob-field-group" style={{ marginBottom: 12 }}>
            <label className="ob-label">Your Skills</label>
            <input 
              type="text"
              placeholder="Type a skill (e.g. React, Python, Docker, AI)..."
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleAddSkill(skillInput)
                }
              }}
              className="ob-input-field"
            />
          </div>

          {/* Selected Chips */}
          <div className="ob-chips-container">
            {skills.map((skill) => (
              <span key={skill} className="ob-chip-badge">
                {skill}
                <span className="ob-chip-remove" onClick={() => handleRemoveSkill(skill)}>×</span>
              </span>
            ))}
          </div>

          {/* Suggested Skills */}
          <div>
            <div className="ob-suggested-label">SUGGESTED</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {suggestedSkills.map((sug) => (
                <button
                  key={sug}
                  type="button"
                  onClick={() => handleAddSkill(sug)}
                  className="ob-suggested-chip"
                >
                  + {sug}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================================
             2. WORK EXPERIENCE
             =================================================================== */}
        <div className="ob-card-section">
          <div className="ob-card-header">
            <div className="ob-card-title">2. Work Experience</div>
            <div className="ob-card-desc-right">Add your work experience details (Optional for freshers).</div>
          </div>

          {/* Fresher Checkbox */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#334155', cursor: 'pointer' }}>
              <input 
                type="checkbox"
                checked={isFresher}
                onChange={(e) => setIsFresher(e.target.checked)}
                style={{ width: 16, height: 16, accentColor: '#6366f1' }}
              />
              <strong>I am a fresher (I don't have prior work experience (0 years))</strong>
            </label>
          </div>

          {!isFresher && (
            <>
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="ob-experience-box">
                  <div className="ob-exp-top-bar">
                    <div className="ob-exp-label">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                      EXPERIENCE {idx + 1}
                    </div>
                    {experiences.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => handleRemoveExperience(exp.id)} 
                        className="ob-btn-remove-red"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  {/* Grid 1: Job Title & Company */}
                  <div className="ob-form-grid-2">
                    <div className="ob-field-group">
                      <label className="ob-label">Job Title <span className="ob-req-star">*</span></label>
                      <input 
                        type="text" 
                        value={exp.jobTitle}
                        onChange={(e) => handleUpdateExperience(exp.id, 'jobTitle', e.target.value)}
                        className="ob-input-field" 
                        placeholder="e.g. Software Engineer"
                      />
                    </div>
                    <div className="ob-field-group">
                      <label className="ob-label">Company <span className="ob-req-star">*</span></label>
                      <input 
                        type="text" 
                        value={exp.company}
                        onChange={(e) => handleUpdateExperience(exp.id, 'company', e.target.value)}
                        className="ob-input-field" 
                        placeholder="e.g. TechCitta Solutions Pvt. Ltd."
                      />
                    </div>
                  </div>

                  {/* Grid 2: Employment Type, Start Date, End Date */}
                  <div className="ob-form-grid-3">
                    <div className="ob-field-group">
                      <label className="ob-label">Employment Type</label>
                      <select 
                        value={exp.empType}
                        onChange={(e) => handleUpdateExperience(exp.id, 'empType', e.target.value)}
                        className="ob-input-field"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div className="ob-field-group">
                      <label className="ob-label">Start Date <span className="ob-req-star">*</span></label>
                      <input 
                        type="text" 
                        value={exp.startDate}
                        onChange={(e) => handleUpdateExperience(exp.id, 'startDate', e.target.value)}
                        className="ob-input-field" 
                        placeholder="e.g. January 2023"
                      />
                    </div>
                    <div className="ob-field-group">
                      <label className="ob-label">End Date</label>
                      <input 
                        type="text" 
                        value={exp.endDate}
                        disabled={exp.currentlyWorking}
                        onChange={(e) => handleUpdateExperience(exp.id, 'endDate', e.target.value)}
                        className="ob-input-field" 
                        placeholder={exp.currentlyWorking ? 'Present' : 'e.g. December 2024'}
                      />
                    </div>
                  </div>

                  {/* Currently work here */}
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: '#475569', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        checked={exp.currentlyWorking}
                        onChange={(e) => {
                          handleUpdateExperience(exp.id, 'currentlyWorking', e.target.checked)
                          if (e.target.checked) {
                            handleUpdateExperience(exp.id, 'endDate', 'Present')
                          }
                        }}
                        style={{ accentColor: '#6366f1' }}
                      />
                      I currently work here
                    </label>
                  </div>

                  {/* Location */}
                  <div className="ob-field-group" style={{ marginBottom: 14 }}>
                    <label className="ob-label">Location</label>
                    <input 
                      type="text" 
                      value={exp.location}
                      onChange={(e) => handleUpdateExperience(exp.id, 'location', e.target.value)}
                      className="ob-input-field" 
                      placeholder="e.g. Hyderabad, India"
                    />
                  </div>

                  {/* Key Responsibilities */}
                  <div className="ob-field-group">
                    <label className="ob-label">Key Responsibilities</label>
                    <textarea 
                      value={exp.responsibilities}
                      onChange={(e) => handleUpdateExperience(exp.id, 'responsibilities', e.target.value)}
                      className="ob-textarea"
                      placeholder="• Highlight key contributions and impact..."
                    />
                    <div className="ob-char-counter">
                      ({exp.responsibilities.length}/800)
                    </div>
                  </div>
                </div>
              ))}

              <button 
                type="button" 
                onClick={handleAddExperience}
                className="ob-btn-outline"
              >
                + Add Another Experience
              </button>
            </>
          )}
        </div>

        {/* ===================================================================
             3. TOTAL EXPERIENCE
             =================================================================== */}
        <div className="ob-card-section">
          <div className="ob-card-header">
            <div className="ob-card-title">3. Total Experience</div>
            <div className="ob-card-desc-right">Help us know your overall experience.</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center' }}>
            <div className="ob-field-group">
              <label className="ob-label">Total Experience</label>
              <select 
                value={totalExp} 
                onChange={(e) => setTotalExp(e.target.value)}
                className="ob-input-field"
              >
                <option value="0 - 1 Years">0 - 1 Years</option>
                <option value="1 - 2 Years">1 - 2 Years</option>
                <option value="2 - 3 Years">2 - 3 Years</option>
                <option value="3 - 5 Years">3 - 5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>

            <div className="ob-motivation-card">
              <div className="ob-motivation-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="ob-motivation-text">
                <strong>Keep going!</strong>
                <span>You're doing great. This information helps us find the best opportunities for you.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="ob-bottom-bar">
          <Link to="/onboarding" className="ob-btn-back">
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
          Step 2 of 5
        </div>
      </main>
    </div>
  )
}
