import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HrIcon, type HrIconName } from '../components/HrIcon'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { fadeUp, staggerContainer } from '../motion/variants'
import styles from './WhyPage.module.css'

const COMPARISONS = [
  {
    feature: 'Candidate Evaluation Basis',
    legacy: 'Keyword matching on PDFs (easily gamed with ChatGPT)',
    hireright: 'Live spoken video screen with dynamic questions & reasoning',
  },
  {
    feature: 'Screening Turnaround',
    legacy: '7–14 business days of manual recruiter review',
    hireright: 'Instant: 12 minutes to certified multi-dimensional score',
  },
  {
    feature: 'Integrity & Anti-Cheat',
    legacy: 'Zero verification; ghostwriters and proxy interviewers',
    hireright: 'Real-time computer vision proctoring & multi-face detection',
  },
  {
    feature: 'Candidate Experience',
    legacy: 'Ghosted in 95% of applications with zero feedback',
    hireright: 'Actionable scorecard with strengths & growth areas for all',
  },
  {
    feature: 'Recruiter Time per Candidate',
    legacy: '45–60 mins per initial screening phone call',
    hireright: '3 mins reviewing AI summary & timestamped key moments',
  },
]

const PILLARS: { icon: HrIconName; title: string; desc: string }[] = [
  {
    icon: 'target',
    title: 'Capability Over Keywords',
    desc: 'Great engineers aren’t always great resume writers. Ava focuses on how you articulate architecture tradeoffs and solve problems in real-time.',
  },
  {
    icon: 'scale',
    title: 'Bias-Free Standardization',
    desc: 'Every candidate receives the exact same objective rubric across Technical Depth, Communication, Problem Solving, and System Design.',
  },
  {
    icon: 'shield-check',
    title: 'Verified Anti-Cheat Integrity',
    desc: 'Computer vision validates single-person presence and eye gaze to guarantee fairness so honest candidates rise to the top.',
  },
  {
    icon: 'lock',
    title: 'Private & Local First',
    desc: 'Candidate recordings and assessments stay private. Videos are saved securely on local storage and shared only with approved employers.',
  },
]

export function WhyPage() {
  const [candidatesPerMonth, setCandidatesPerMonth] = useState(50)

  const hoursSaved = Math.round(candidatesPerMonth * 0.75)
  const dollarsSaved = Math.round(hoursSaved * 65)

  return (
    <div className={styles.page}>
      <SiteNav />

      <main className={styles.shell}>
        <motion.div
          className={styles.hero}
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.div className={styles.badge} variants={fadeUp}>
            <HrIcon name="zap" size={14} /> THE FUTURE OF HIRING
          </motion.div>
          <motion.h1 className={styles.title} variants={fadeUp}>
            Why HireRight? <em>The Proof Is In The Interview.</em>
          </motion.h1>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            Traditional resume screening is broken: 80% of top engineers are filtered out by keyword scanners, while recruiters spend weeks on repetitive initial calls. We built a better way.
          </motion.p>
        </motion.div>

        {/* VISUAL PARADIGM COMPARISON CARDS */}
        <div className={styles.paradigmGrid}>
          <div style={{ background: '#fff', border: '1px solid #fecaca', borderRadius: '18px', padding: '28px', boxShadow: '0 4px 16px rgba(239,68,68,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span className={styles.compareIconBad} aria-hidden>
                <HrIcon name="close" size={22} />
              </span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#991b1b', fontWeight: 800 }}>The Broken Resume Funnel</h3>
                <span style={{ fontSize: '0.78rem', color: '#dc2626', fontWeight: 600 }}>Legacy Keyword ATS Filters</span>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '0.9rem', lineHeight: 1.7 }}>
              <li><strong>Easily Gamed:</strong> Keyword stuffing and ChatGPT-written bullet points trick scanners.</li>
              <li><strong>High Rejection:</strong> 80% of hands-on engineers are filtered out before an interview.</li>
              <li><strong>Zero Verification:</strong> High proxy/ghostwriter risk with unmonitored take-home tests.</li>
              <li><strong>Recruiter Drag:</strong> 45–60 minutes lost per introductory telephone screen.</li>
            </ul>
          </div>

          <div style={{ background: '#fff', border: '1px solid #bbf7d0', borderRadius: '18px', padding: '28px', boxShadow: '0 4px 16px rgba(22,163,74,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span className={styles.compareIconGood} aria-hidden>
                <HrIcon name="check" size={22} strokeWidth={2.5} />
              </span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#166534', fontWeight: 800 }}>The HireRight Advantage</h3>
                <span style={{ fontSize: '0.78rem', color: '#16a34a', fontWeight: 600 }}>Multimodal Spoken AI Studio</span>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#334155', fontSize: '0.9rem', lineHeight: 1.7 }}>
              <li><strong>Live Spoken Evaluation:</strong> Ava questions candidates dynamically based on live responses.</li>
              <li><strong>Multi-Person Proctoring:</strong> Computer vision ensures single-candidate presence & integrity.</li>
              <li><strong>Instant Certified Dossier:</strong> 360° Candidate Persona, 0–1000 career readiness score.</li>
              <li><strong>60% Time Reclaimed:</strong> Hiring teams review timestamped video moments in 3 minutes.</li>
            </ul>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className={styles.matrixCard}>
          <h2 style={{ fontSize: '1.8rem', color: '#090d16', marginBottom: 20 }}>
            Resume Boards vs. HireRight
          </h2>
          <table className={styles.matrixTable}>
            <thead>
              <tr>
                <th>Evaluation Dimension</th>
                <th>Legacy Job Boards & ATS</th>
                <th>HireRight AI Studio</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>
                    <span className={styles.tableMarkBad}>
                      <HrIcon name="close" size={14} /> {row.legacy}
                    </span>
                  </td>
                  <td>
                    <span className={styles.tableMarkGood}>
                      <HrIcon name="check" size={14} strokeWidth={2.5} /> {row.hireright}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CORE PILLARS */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            OUR CORE VALUES
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#090d16', marginTop: 8 }}>
            Built on Four Pillars of Integrity
          </h2>
        </div>

        <div className={styles.pillarsGrid}>
          {PILLARS.map((p) => (
            <div key={p.title} className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <HrIcon name={p.icon} size={26} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* RECRUITER ROI CALCULATOR */}
        <div className={styles.roiCard}>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 20px' }}>
            <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              RECRUITER TIME & COST SAVINGS
            </span>
            <h2 style={{ fontSize: '1.9rem', color: '#090d16', marginTop: 6 }}>
              Calculate Your Monthly ROI
            </h2>
          </div>

          <div className={styles.roiGrid}>
            <div className={styles.roiControl}>
              <label>Monthly Candidates Screened: {candidatesPerMonth}</label>
              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={candidatesPerMonth}
                onChange={(e) => setCandidatesPerMonth(Number(e.target.value))}
                className={styles.roiSlider}
              />
              <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
                Based on an average of 45 minutes saved per candidate screen and $65/hr recruiter cost.
              </p>
            </div>

            <div className={styles.roiDisplayBox}>
              <div className={styles.roiStat}>
                <span>Recruiter Hours Reclaimed:</span>
                <strong>{hoursSaved} hrs / mo</strong>
              </div>
              <div className={styles.roiStat}>
                <span>Estimated Cost Savings:</span>
                <strong>${dollarsSaved.toLocaleString()} / mo</strong>
              </div>
              <div className={styles.roiStat}>
                <span>Time-to-Hire Reduction:</span>
                <strong>60% faster</strong>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <h2 style={{ fontSize: '2rem', color: '#090d16', marginBottom: 12 }}>
            Experience the Difference First-Hand
          </h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 24 }}>
            <Link
              to="/interview"
              style={{
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 12,
                fontWeight: 700,
              }}
            >
              Take Sample Interview →
            </Link>
            <Link
              to="/signup"
              style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 12,
                fontWeight: 700,
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
