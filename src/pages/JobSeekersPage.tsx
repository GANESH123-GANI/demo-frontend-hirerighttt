import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HrIcon } from '../components/HrIcon'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { fadeUp, staggerContainer } from '../motion/variants'
import styles from './JobSeekersPage.module.css'

const TRACKS = [
  { id: 'frontend', name: 'Frontend Engineer', baseScore: 89, salaryBoost: '+28%', timeToOffer: '7 days' },
  { id: 'backend', name: 'Backend Systems', baseScore: 91, salaryBoost: '+32%', timeToOffer: '5 days' },
  { id: 'fullstack', name: 'Full Stack Developer', baseScore: 90, salaryBoost: '+30%', timeToOffer: '6 days' },
  { id: 'devops', name: 'DevOps & Cloud', baseScore: 93, salaryBoost: '+35%', timeToOffer: '5 days' },
  { id: 'ai', name: 'AI / ML Engineer', baseScore: 94, salaryBoost: '+40%', timeToOffer: '4 days' },
]

const LEVELS = [
  { id: 'entry', label: '1–2 years (Junior)', multiplier: 0.95 },
  { id: 'mid', label: '3–5 years (Mid-Level)', multiplier: 1.0 },
  { id: 'senior', label: '5+ years (Senior / Lead)', multiplier: 1.05 },
]

const TESTIMONIALS = [
  {
    quote:
      'I applied to 120 companies on traditional job boards without a single response. With HireRight, I did one 12-minute AI interview with Ava, scored 92, and received two direct recruiter reach-outs in 48 hours.',
    name: 'Devika Sharma',
    role: 'Senior React Engineer',
    company: 'Hired at TechCita Solutions',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop',
  },
  {
    quote:
      'The ability to practice and immediately see my category breakdown (Technical Depth vs Communication) helped me fix my pacing. It completely removes the black-box anxiety of tech recruiting.',
    name: 'Rohan Mehra',
    role: 'Cloud Architect',
    company: 'Hired at CloudScale',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop',
  },
  {
    quote:
      'As a self-taught engineer without an Ivy League degree, resumes always filtered me out. Ava evaluated my actual system design skills and code structure. The score spoke for itself.',
    name: 'Priya Nambiar',
    role: 'Full Stack Engineer',
    company: 'Hired at FinTech Labs',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop',
  },
]

export function JobSeekersPage() {
  const [selectedTrack, setSelectedTrack] = useState(TRACKS[0].id)
  const [selectedLevel, setSelectedLevel] = useState(LEVELS[1].id)

  const currentTrack = TRACKS.find((t) => t.id === selectedTrack) || TRACKS[0]
  const currentLevel = LEVELS.find((l) => l.id === selectedLevel) || LEVELS[1]
  const calculatedScore = Math.min(99, Math.round(currentTrack.baseScore * currentLevel.multiplier))

  return (
    <div className={styles.page}>
      <SiteNav />

      <main className={styles.shell}>
        {/* HERO */}
        <motion.div
          className={styles.hero}
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.div className={styles.badge} variants={fadeUp}>
            <HrIcon name="zap" size={14} /> FOR SERIOUS CANDIDATES & BUILDERS
          </motion.div>
          <motion.h1 className={styles.title} variants={fadeUp}>
            Your Resume Isn&apos;t Enough. <em>Your Interview Score Is.</em>
          </motion.h1>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            Skip the 200-applicant resume black hole. Take Ava’s 12-minute AI video interview, get an instant verified scorecard, and unlock direct recruiter offers.
          </motion.p>
          <motion.div className={styles.heroCtaRow} variants={fadeUp}>
            <Link to="/interview" className={styles.primaryCta}>
              Start AI Interview Free →
            </Link>
            <Link to="/signup" className={styles.secondaryCta}>
              Build Candidate Profile
            </Link>
          </motion.div>
        </motion.div>

        {/* METRICS RIBBON */}
        <div className={styles.statsRibbon}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>12 min</div>
            <div className={styles.statLabel}>Average Interview Duration</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4.2x</div>
            <div className={styles.statLabel}>Higher Recruiter Callback Rate</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>0 sec</div>
            <div className={styles.statLabel}>Wait Time for AI Scoring</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Free for Job Seekers Forever</div>
          </div>
        </div>

        {/* INTERACTIVE SCORE & SALARY CALCULATOR */}
        <div className={styles.calcCard}>
          <div className={styles.calcHeader}>
            <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              TALENT VALUE ESTIMATOR
            </span>
            <h2 style={{ fontSize: '2rem', color: '#090d16', marginTop: 6 }}>
              See Your Earning & Hiring Potential
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Select your primary engineering discipline and experience tier to see benchmark hiring metrics.
            </p>
          </div>

          <div className={styles.calcGrid}>
            <div className={styles.calcControls}>
              <div className={styles.controlGroup}>
                <label>1. Select Your Specialization Track</label>
                <div className={styles.pillsRow}>
                  {TRACKS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={`${styles.pillBtn} ${selectedTrack === t.id ? styles.pillBtnActive : ''}`}
                      onClick={() => setSelectedTrack(t.id)}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.controlGroup}>
                <label>2. Select Your Experience Level</label>
                <div className={styles.pillsRow}>
                  {LEVELS.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      className={`${styles.pillBtn} ${selectedLevel === l.id ? styles.pillBtnActive : ''}`}
                      onClick={() => setSelectedLevel(l.id)}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.calcResults}>
              <div className={styles.scoreDialBox}>
                <div className={styles.scoreCircle}>
                  <span>{calculatedScore}</span>
                </div>
                <div className={styles.scoreDetails}>
                  <h3>Target AI Score</h3>
                  <p>Certified Top 8% in {currentTrack.name}</p>
                </div>
              </div>

              <div className={styles.calcMetricRows}>
                <div className={styles.metricRow}>
                  <span>Estimated Comp Premium</span>
                  <span>{currentTrack.salaryBoost} vs resume applicants</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Average Time to Offer</span>
                  <span>{currentTrack.timeToOffer}</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Top Hiring Companies</span>
                  <span style={{ color: '#090d16', fontWeight: 600 }}>TechCita, Infosys, Wipro, CloudScale</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-STEP CANDIDATE JOURNEY */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            HOW IT WORKS
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#090d16', marginTop: 8 }}>
            The 4-Step Path from Candidate to Hired
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNum}>01</div>
            <h3>Upload or Build Profile</h3>
            <p>
              Upload your PDF resume or let our smart wizard extract your skills, past companies, and achievements in under 60 seconds.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNum}>02</div>
            <h3>12-Min Video Screen</h3>
            <p>
              Join the live AI studio. Ava asks dynamic, resume-aware technical and behavioral questions calibrated to your chosen role.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNum}>03</div>
            <h3>Verified Talent Score</h3>
            <p>
              Receive instant breakdown across Technical Depth, Communication, Problem Solving, and System Design with actionable tips.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNum}>04</div>
            <h3>Ranked Matches & Apply</h3>
            <p>
              Unlock ranked company openings. Apply with 1 click using your certified score and stand out at the top of the recruiter’s pipeline.
            </p>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            VERIFIED SUCCESS STORIES
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#090d16', marginTop: 8 }}>
            Engineers Who Landed Offers
          </h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.candidateMeta}>
                <img src={t.avatar} alt={t.name} className={styles.candidateAvatar} />
                <div className={styles.candidateInfo}>
                  <h4>{t.name}</h4>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
