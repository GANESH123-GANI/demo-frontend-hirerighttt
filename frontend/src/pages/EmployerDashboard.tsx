import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { VideoProctorTimeline } from '../components/VideoProctorTimeline'
import {
  deleteEmployerJob,
  getEmployerApplicants,
  getEmployerJobs,
  getUser,
  saveEmployerApplicant,
  saveEmployerJob,
  updateEmployerApplicantStatus,
  type EmployerApplicant,
  type EmployerJob,
} from '../lib/store'
import { HrIcon } from '../components/HrIcon'
import { SearchCandidatesPanel, type CandidateSearchQuery } from '../components/SearchCandidatesPanel'
import styles from './EmployerDashboard.module.css'

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function EmployerDashboard() {
  const user = getUser()
  const [jobs, setJobs] = useState<EmployerJob[]>(() => getEmployerJobs(user?.email))
  const [applicants, setApplicants] = useState<EmployerApplicant[]>(() => getEmployerApplicants())

  // Filters State
  const [searchFilter, setSearchFilter] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [jobFilter, setJobFilter] = useState('')
  const [expFilter, setExpFilter] = useState('')
  const [scoreFilter, setScoreFilter] = useState('')
  const [integrityFilter, setIntegrityFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  // Modals
  const [showAddModal, setShowAddModal] = useState(false)
  const [showCreateJobModal, setShowCreateJobModal] = useState(false)
  const [selectedApplicant, setSelectedApplicant] = useState<EmployerApplicant | null>(null)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  // New Candidate Form State
  const [candName, setCandName] = useState('')
  const [candEmail, setCandEmail] = useState('')
  const [candPhone, setCandPhone] = useState('')
  const [candRole, setCandRole] = useState('Frontend Developer')
  const [candTargetJob, setCandTargetJob] = useState('Senior Frontend Developer')
  const [candExp, setCandExp] = useState('3 years')
  const [candScore, setCandScore] = useState(85)
  const [candStatus, setCandStatus] = useState<EmployerApplicant['status']>('New')

  // New Job Form State
  const [newJobTitle, setNewJobTitle] = useState('')
  const [newJobRoleTrack, setNewJobRoleTrack] = useState('Frontend Developer')
  const [newJobExp, setNewJobExp] = useState('3-5 years')
  const [newJobLocation, setNewJobLocation] = useState('Hyderabad / Remote')
  const [newJobDescription, setNewJobDescription] = useState('')

  // Advanced Search Candidates Query (Image 2)
  const [candidateSearchQuery, setCandidateSearchQuery] = useState<CandidateSearchQuery | null>(null)

  function handleClearFilters() {
    setSearchFilter('')
    setRoleFilter('')
    setJobFilter('')
    setExpFilter('')
    setScoreFilter('')
    setIntegrityFilter('')
    setStatusFilter('')
    setCandidateSearchQuery(null)
  }

  const filteredApplicants = useMemo(() => {
    return applicants.filter((app) => {
      // Image 2 Search Candidates Panel filters
      if (candidateSearchQuery) {
        if (candidateSearchQuery.candidateName.trim()) {
          const q = candidateSearchQuery.candidateName.trim().toLowerCase()
          const match =
            app.candidateName.toLowerCase().includes(q) ||
            app.candidateEmail.toLowerCase().includes(q)
          if (!match) return false
        }

        if (candidateSearchQuery.client.trim()) {
          const q = candidateSearchQuery.client.trim().toLowerCase()
          if (!app.company.toLowerCase().includes(q)) return false
        }

        const activeKeywords = candidateSearchQuery.keywords.filter((k) =>
          candidateSearchQuery.allMandatory ? true : k.isMandatory,
        )
        if (activeKeywords.length > 0) {
          const appText = `${app.role || ''} ${app.jobTitle} ${app.resumeName || ''}`.toLowerCase()
          const hasKeyword = activeKeywords.some((k) =>
            appText.includes(k.text.toLowerCase()),
          )
          if (!hasKeyword) return false
        }
      }

      // Search: name, email, or phone
      if (searchFilter.trim()) {
        const q = searchFilter.trim().toLowerCase()
        const matchesName = app.candidateName.toLowerCase().includes(q)
        const matchesEmail = app.candidateEmail.toLowerCase().includes(q)
        const matchesPhone = app.candidatePhone.toLowerCase().includes(q)
        if (!matchesName && !matchesEmail && !matchesPhone) return false
      }

      // Role text search
      if (roleFilter.trim()) {
        const q = roleFilter.trim().toLowerCase()
        if (!app.role?.toLowerCase().includes(q)) return false
      }

      // Target Job text search
      if (jobFilter.trim()) {
        const q = jobFilter.trim().toLowerCase()
        const matchesJob = app.jobTitle.toLowerCase().includes(q)
        const matchesCompany = app.company.toLowerCase().includes(q)
        if (!matchesJob && !matchesCompany) return false
      }

      // Experience text search
      if (expFilter.trim()) {
        const q = expFilter.trim().toLowerCase()
        if (!app.experienceYears.toLowerCase().includes(q)) return false
      }

      // Score text search
      if (scoreFilter.trim()) {
        const q = scoreFilter.trim().toLowerCase()
        const score = String(app.aiScore ?? app.interviewResult?.overall ?? '')
        if (!score.includes(q) && !`${score}%`.includes(q)) return false
      }

      // Integrity text search
      if (integrityFilter.trim()) {
        const q = integrityFilter.trim().toLowerCase()
        const integ = app.integrityStatus ?? (app.interviewResult?.integrity?.faceViolations ? 'pending' : 'verified')
        const label = integ === 'verified' ? 'verified candidate' : integ === 'pending' ? 'verification pending' : 'not verified'
        if (!label.includes(q) && !integ.includes(q)) return false
      }

      // Status text search
      if (statusFilter.trim()) {
        const q = statusFilter.trim().toLowerCase()
        if (!app.status.toLowerCase().includes(q)) return false
      }

      return true
    })
  }, [applicants, candidateSearchQuery, searchFilter, roleFilter, jobFilter, expFilter, scoreFilter, integrityFilter, statusFilter])

  function handleStatusChange(id: string, newStatus: EmployerApplicant['status']) {
    updateEmployerApplicantStatus(id, newStatus)
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a)),
    )
  }

  function handleAddCandidate(e: React.FormEvent) {
    e.preventDefault()
    if (!candName.trim() || !candEmail.trim()) return

    const created = saveEmployerApplicant({
      jobId: jobs[0]?.id || 'job-demo-1',
      jobTitle: candTargetJob,
      company: user?.companyName || 'TechCitta Solutions',
      candidateName: candName.trim(),
      candidateEmail: candEmail.trim(),
      candidatePhone: candPhone.trim() || '+91 90000 00000',
      role: candRole,
      experienceYears: candExp,
      resumeName: `${candName.trim().replace(/\s+/g, '_')}_Resume.pdf`,
      aiScore: candScore,
      integrityStatus: 'verified',
    })

    setApplicants([created, ...applicants])
    setShowAddModal(false)
    setCandName('')
    setCandEmail('')
    setCandPhone('')
  }

  function handleCreateJob(e: React.FormEvent) {
    e.preventDefault()
    if (!newJobTitle.trim() || !newJobDescription.trim()) return

    const created = saveEmployerJob({
      title: newJobTitle.trim(),
      company: user?.companyName || 'TechCitta Solutions',
      roleTrack: newJobRoleTrack,
      experienceLevel: newJobExp,
      location: newJobLocation.trim(),
      jobDescription: newJobDescription.trim(),
      requiredSkills: ['React', 'TypeScript', 'Node.js'],
      createdByEmail: user?.email || 'employer@hireright.com',
    })

    setJobs([created, ...jobs])
    setShowCreateJobModal(false)
    setNewJobTitle('')
    setNewJobDescription('')
  }

  function handleDeleteJob(id: string) {
    deleteEmployerJob(id)
    setJobs(jobs.filter((j) => j.id !== id))
  }

  async function handleCopyLink(code: string) {
    const url = `${window.location.origin}/apply/${code}`
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      window.prompt('Copy this application link', url)
    }
    setCopiedCode(code)
    window.setTimeout(() => setCopiedCode(null), 2500)
  }

  return (
    <div className={styles.page}>
      <SiteNav />

      <div className={styles.shell}>
        {/* Top Hero Section */}
        <motion.div
          className={styles.heroCard}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.heroBadge}>
            <HrIcon name="building" size={13} /> EMPLOYER & RECRUITER PORTAL ·{' '}
            {user?.companyName || 'TECHCITTA SOLUTIONS'}
          </span>
          <h1 className={styles.heroTitle}>Employer AI Hiring Studio</h1>
          <p className={styles.heroDesc}>
            Create exclusive private job openings, generate unique assessment links, and
            inspect candidates AI interview scores & video assessments.
          </p>
        </motion.div>

        {/* Private Job Openings Management Section (Image 1) */}
        <motion.div
          className={styles.jobsSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.03 }}
        >
          <div className={styles.jobsHeader}>
            <h3 className={styles.jobsTitle}>
              <HrIcon name="briefcase" size={20} /> Active Job Openings &amp; Shareable Assessment Links
            </h3>
            <button
              type="button"
              className={styles.createJobBtn}
              onClick={() => setShowCreateJobModal(true)}
            >
              <HrIcon name="plus" size={14} /> Create New Job Opening
            </button>
          </div>

          <div className={styles.jobsGrid}>
            {jobs.map((job) => {
              const count = applicants.filter((a) => a.jobId === job.id).length
              const isCopied = copiedCode === job.shareableCode

              return (
                <div key={job.id} className={styles.jobCard}>
                  <div>
                    <h4 className={styles.jobCardTitle}>{job.title}</h4>
                    <div className={styles.jobCardMeta}>
                      <span className={styles.metaBadge}>{job.roleTrack}</span>
                      <span className={styles.metaBadge}>{job.experienceLevel}</span>
                      <span className={styles.metaBadge}>{job.location}</span>
                    </div>

                    <div className={styles.linkBox}>
                      <span className={styles.linkUrl}>
                        {`${window.location.origin}/apply/${job.shareableCode}`}
                      </span>
                      <button
                        type="button"
                        className={styles.copyBtn}
                        onClick={() => handleCopyLink(job.shareableCode)}
                      >
                        {isCopied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className={styles.jobFooter}>
                    <span>{count} Applicant(s)</span>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.8rem' }}
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Search Candidates Component (Image 2) */}
        <SearchCandidatesPanel
          onSearch={(query) => {
            setCandidateSearchQuery(query)
            if (query.candidateName) {
              setSearchFilter(query.candidateName)
            }
          }}
          onClear={() => {
            setCandidateSearchQuery(null)
          }}
        />

        {/* IN BETWEEN: All-Column Search & Filter Row */}
        <motion.div
          className={styles.filterBarCard}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.04 }}
        >
          {/* Candidate Search (Name, Email, Phone) */}
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>
              <HrIcon name="search" size={15} />
            </span>
            <input
              type="text"
              className={styles.filterSearchInput}
              placeholder="Search name, email or phone..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>

          {/* Role Search */}
          <input
            type="text"
            className={styles.filterColInput}
            placeholder="Search role..."
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          />

          {/* Target Job Search */}
          <input
            type="text"
            className={styles.filterColInput}
            placeholder="Search job..."
            value={jobFilter}
            onChange={(e) => setJobFilter(e.target.value)}
          />

          {/* Experience Search */}
          <input
            type="text"
            className={styles.filterColInput}
            placeholder="Search experience..."
            value={expFilter}
            onChange={(e) => setExpFilter(e.target.value)}
          />

          {/* AI Score Search */}
          <input
            type="text"
            className={styles.filterColInput}
            placeholder="Search score..."
            value={scoreFilter}
            onChange={(e) => setScoreFilter(e.target.value)}
          />

          {/* Integrity Search */}
          <input
            type="text"
            className={styles.filterColInput}
            placeholder="Search integrity..."
            value={integrityFilter}
            onChange={(e) => setIntegrityFilter(e.target.value)}
          />

          {/* Status Search */}
          <input
            type="text"
            className={styles.filterColInput}
            placeholder="Search status..."
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />

          {/* Clear Filters Button if any active */}
          {(searchFilter || roleFilter || jobFilter || expFilter || scoreFilter || integrityFilter || statusFilter) && (
            <button
              type="button"
              className={styles.filterClearBtn}
              onClick={handleClearFilters}
              title="Clear all filters"
            >
              <HrIcon name="close" size={13} /> Clear
            </button>
          )}
        </motion.div>

        {/* Candidates Section Card */}
        <motion.div
          className={styles.candidatesCard}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <div className={styles.candidatesHeader}>
            <div className={styles.titleGroup}>
              <h2>Candidates</h2>
              <div className={styles.countText}>
                Showing {filteredApplicants.length} of {applicants.length} candidates
              </div>
            </div>

            <div className={styles.headerActions}>
              <button
                type="button"
                className={styles.clearFiltersBtn}
                onClick={handleClearFilters}
              >
                Clear filters
              </button>
              <button
                type="button"
                className={styles.addCandidateBtn}
                onClick={() => setShowAddModal(true)}
              >
                <HrIcon name="plus" size={14} /> Add candidate
              </button>
            </div>
          </div>

          {/* Candidates Table */}
          <div className={styles.tableContainer}>
            <table className={styles.candidatesTable}>
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>CANDIDATE ▲</th>
                  <th style={{ width: '13%' }}>ROLE</th>
                  <th style={{ width: '16%' }}>TARGET JOB</th>
                  <th style={{ width: '9%' }}>EXPERIENCE</th>
                  <th style={{ width: '14%' }}>AI SCORE & FIT</th>
                  <th style={{ width: '12%' }}>INTEGRITY</th>
                  <th style={{ width: '10%' }}>STATUS</th>
                  <th style={{ width: '11%' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplicants.length === 0 ? (
                  <tr>
                    <td colSpan={8}>
                      <div className={styles.emptyState}>
                        <h3>No candidates found</h3>
                        <p>Try clearing filters or search criteria.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredApplicants.map((cand) => {
                    const initials = getInitials(cand.candidateName)
                    const score = cand.aiScore ?? cand.interviewResult?.overall ?? 85
                    const scoreStyle =
                      score >= 85
                        ? styles.scoreGreen
                        : score >= 70
                          ? styles.scorePurple
                          : styles.scoreAmber

                    const integ = cand.integrityStatus ?? (cand.interviewResult?.integrity?.faceViolations ? 'pending' : 'verified')

                    return (
                      <tr key={cand.id}>
                        {/* CANDIDATE */}
                        <td>
                          <div className={styles.candidateCell}>
                            <div className={styles.avatar}>{initials}</div>
                            <div>
                              <div className={styles.candidateName}>{cand.candidateName}</div>
                              <div className={styles.candidateContact}>
                                {cand.candidateEmail} · {cand.candidatePhone}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* ROLE */}
                        <td>
                          <span className={styles.roleTag}>
                            {cand.role || 'Frontend Developer'}
                          </span>
                        </td>

                        {/* TARGET JOB */}
                        <td>
                          <div className={styles.targetJobTitle}>{cand.jobTitle}</div>
                          <div className={styles.targetJobCompany}>{cand.company}</div>
                        </td>

                        {/* EXPERIENCE */}
                        <td>
                          <span className={styles.experienceText}>{cand.experienceYears}</span>
                        </td>

                        {/* AI SCORE & FIT */}
                        <td>
                          <span className={`${styles.scorePill} ${scoreStyle}`}>
                            ✦ {score}% Overall Fit
                          </span>
                        </td>

                        {/* INTEGRITY */}
                        <td>
                          {integ === 'verified' && (
                            <span className={`${styles.integrityText} ${styles.integrityVerified}`}>
                              <HrIcon name="shield-check" size={14} /> Verified Candidate
                            </span>
                          )}
                          {integ === 'pending' && (
                            <span className={`${styles.integrityText} ${styles.integrityPending}`}>
                              <HrIcon name="shield-check" size={14} /> Verification pending
                            </span>
                          )}
                          {integ === 'unverified' && (
                            <span className={`${styles.integrityText} ${styles.integrityUnverified}`}>
                              <HrIcon name="close" size={13} /> Not verified
                            </span>
                          )}
                        </td>

                        {/* STATUS */}
                        <td>
                          <select
                            className={styles.statusDropdown}
                            value={cand.status}
                            onChange={(e) =>
                              handleStatusChange(
                                cand.id,
                                e.target.value as EmployerApplicant['status'],
                              )
                            }
                          >
                            <option value="New">New</option>
                            <option value="Shortlisted">Shortlisted</option>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>

                        {/* ACTIONS */}
                        <td>
                          <button
                            type="button"
                            className={styles.inspectBtn}
                            onClick={() => setSelectedApplicant(cand)}
                          >
                            Inspect AI Report →
                          </button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Add Candidate Modal */}
        {showAddModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h2>
                  <HrIcon name="plus" size={18} /> Add New Candidate
                </h2>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setShowAddModal(false)}
                >
                  <HrIcon name="close" size={16} />
                </button>
              </div>

              <form onSubmit={handleAddCandidate}>
                <div className={styles.formGroup}>
                  <label>Candidate Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={candName}
                    onChange={(e) => setCandName(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={candEmail}
                      onChange={(e) => setCandEmail(e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="+91 90000 00120"
                      value={candPhone}
                      onChange={(e) => setCandPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Target Job Opening</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Frontend Developer"
                    value={candTargetJob}
                    onChange={(e) => setCandTargetJob(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className={styles.formGroup}>
                    <label>Role</label>
                    <select
                      value={candRole}
                      onChange={(e) => setCandRole(e.target.value)}
                    >
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="QA Engineer">QA Engineer</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="Data Analyst">Data Analyst</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="Product Manager">Product Manager</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 5 years"
                      value={candExp}
                      onChange={(e) => setCandExp(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className={styles.formGroup}>
                    <label>AI Fit Score (%)</label>
                    <input
                      type="number"
                      min={40}
                      max={100}
                      value={candScore}
                      onChange={(e) => setCandScore(Number(e.target.value))}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Initial Status</label>
                    <select
                      value={candStatus}
                      onChange={(e) => setCandStatus(e.target.value as EmployerApplicant['status'])}
                    >
                      <option value="New">New</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Interviewing">Interviewing</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>

                <div className={styles.modalFooter}>
                  <button
                    type="button"
                    className={styles.cancelBtn}
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitBtn}>
                    Save Candidate
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Create Job Opening Modal */}
        {showCreateJobModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h2>
                  <HrIcon name="plus" size={18} /> Create Private Job Opening
                </h2>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setShowCreateJobModal(false)}
                >
                  <HrIcon name="close" size={16} />
                </button>
              </div>

              <form onSubmit={handleCreateJob}>
                <div className={styles.formGroup}>
                  <label>Job Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Frontend Developer"
                    value={newJobTitle}
                    onChange={(e) => setNewJobTitle(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className={styles.formGroup}>
                    <label>Role Track</label>
                    <select
                      value={newJobRoleTrack}
                      onChange={(e) => setNewJobRoleTrack(e.target.value)}
                    >
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Full Stack Engineer">Full Stack Engineer</option>
                      <option value="Backend Engineer">Backend Engineer</option>
                      <option value="QA Engineer">QA Engineer</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="Product Manager">Product Manager</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Experience Level</label>
                    <select
                      value={newJobExp}
                      onChange={(e) => setNewJobExp(e.target.value)}
                    >
                      <option value="0-2 years">0-2 years (Junior)</option>
                      <option value="3-5 years">3-5 years (Mid-Level)</option>
                      <option value="6+ years">6+ years (Senior / Lead)</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="Hyderabad / Remote"
                    value={newJobLocation}
                    onChange={(e) => setNewJobLocation(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Job Description</label>
                  <textarea
                    required
                    placeholder="Paste job description requirements and expectations..."
                    value={newJobDescription}
                    onChange={(e) => setNewJobDescription(e.target.value)}
                  />
                </div>

                <div className={styles.modalFooter}>
                  <button
                    type="button"
                    className={styles.cancelBtn}
                    onClick={() => setShowCreateJobModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitBtn}>
                    Generate Shareable Job Link →
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Detailed Applicant AI Evaluation Report Modal */}
        {selectedApplicant && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal} style={{ maxWidth: '780px' }}>
              <div className={styles.modalHeader}>
                <div>
                  <h2>
                    <HrIcon name="document" size={18} /> {selectedApplicant.candidateName} — AI Assessment Report
                  </h2>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '4px' }}>
                    Applied for {selectedApplicant.jobTitle} ({selectedApplicant.company})
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setSelectedApplicant(null)}
                >
                  <HrIcon name="close" size={16} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>CANDIDATE DETAILS</div>
                  <div style={{ marginTop: '6px', fontWeight: 700, fontSize: '1rem', color: '#0f172a' }}>{selectedApplicant.candidateName}</div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '2px' }}>{selectedApplicant.candidateEmail}</div>
                  <div style={{ fontSize: '0.85rem', color: '#475569' }}>Phone: {selectedApplicant.candidatePhone}</div>
                  <div style={{ fontSize: '0.85rem', color: '#475569' }}>Experience: {selectedApplicant.experienceYears}</div>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>AI EVALUATION SCORE</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#4f46e5', marginTop: '2px' }}>
                    {selectedApplicant.aiScore ?? selectedApplicant.interviewResult?.overall ?? 85}%
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <HrIcon name="check" size={14} /> Overall Fit Assessment Verified
                  </div>
                </div>
              </div>

              {selectedApplicant.resumeText && (
                <div className={styles.formGroup}>
                  <label>Extracted Resume Summary</label>
                  <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '10px', fontSize: '0.85rem', color: '#334155', border: '1px solid #e2e8f0', lineHeight: 1.5 }}>
                    {selectedApplicant.resumeText}
                  </div>
                </div>
              )}

              {selectedApplicant.interviewResult && (
                <div>
                  <h4 style={{ margin: '18px 0 10px 0', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700 }}>Category Breakdown</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {selectedApplicant.interviewResult.categories?.map((cat) => (
                      <div key={cat.label} style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '10px 14px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600, color: '#475569', fontSize: '0.85rem' }}>{cat.label}</span>
                        <span style={{ fontWeight: 800, color: '#4f46e5', fontSize: '0.95rem' }}>{cat.score}%</span>
                      </div>
                    ))}
                  </div>

                  <h4 style={{ margin: '20px 0 10px 0', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700 }}>Candidate Answer Transcripts & Scores</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedApplicant.interviewResult.answers?.map((ans, idx) => (
                      <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '14px', borderRadius: '10px' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px', fontSize: '0.88rem' }}>
                          Q{idx + 1}: {ans.question}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#334155', fontStyle: 'italic', marginBottom: '6px' }}>
                          "{ans.answer}"
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748b' }}>
                          <span>Score: <strong style={{ color: '#0f172a' }}>{ans.score}%</strong></span>
                          <span>Words: <strong style={{ color: '#0f172a' }}>{ans.wordCount}</strong></span>
                          <span>Keywords: <strong style={{ color: '#0f172a' }}>{ans.keywordsHit?.join(', ') || 'N/A'}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <VideoProctorTimeline logs={selectedApplicant.interviewResult.integrity?.logs} />
                  </div>
                </div>
              )}

              <div className={styles.modalFooter}>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setSelectedApplicant(null)}
                >
                  Close Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  )
}
