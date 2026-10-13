import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HrIcon } from '../components/HrIcon'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { fadeUp, staggerContainer } from '../motion/variants'
import styles from './WhyPage.module.css'

const TEAM = [
  {
    name: 'Aarav Patel',
    role: 'Co-Founder & CEO',
    bio: 'Former VP of Talent at hypergrowth scale-ups. Passionate about removing resume friction and building meritocratic hiring.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'Chief AI Scientist',
    bio: 'PhD in Multimodal AI & NLP from Carnegie Mellon. Architect of Ava’s conversational reasoning and anti-bias scoring algorithms.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
  },
  {
    name: 'Karthik Raman',
    role: 'Head of Engineering',
    bio: 'Ex-Google infrastructure lead. Built low-latency video streaming pipelines, real-time WebRTC proctoring, and OpenATS integrations.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
]

const COMPLIANCE_ITEMS = [
  {
    badge: 'SOC 2 TYPE II',
    title: 'Enterprise Data Security',
    desc: 'All candidate data, profiles, and interview sessions are encrypted at rest (AES-256) and in transit (TLS 1.3).',
  },
  {
    badge: 'EEOC COMPLIANT',
    title: 'Algorithmic Fairness',
    desc: 'Our scoring models undergo continuous disparate impact audits to ensure zero demographic, gender, or accent bias.',
  },
  {
    badge: 'GDPR & PRIVACY',
    title: 'Candidate Right to Deletion',
    desc: 'Candidates retain full ownership of their recordings and scorecards with 1-click data export and complete purging.',
  },
]

export function AboutPage() {
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
            <HrIcon name="sparkle" size={14} /> ABOUT HIRERIGHT
          </motion.div>
          <motion.h1 className={styles.title} variants={fadeUp}>
            Reinventing the Initial Screen — <em>Through Real Conversation.</em>
          </motion.h1>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            We believe hiring should begin with genuine capability, not resume formatting. We built HireRight to give every candidate a fair stage to showcase their engineering mastery.
          </motion.p>
        </motion.div>

        {/* MISSION & ARCHITECTURE */}
        <div
          className={styles.matrixCard}
          style={{
            marginBottom: 60,
            background: 'linear-gradient(135deg, #07122a 0%, #141638 100%)',
            border: '1px solid rgba(112, 71, 255, 0.25)',
            boxShadow: '0 12px 36px rgba(7, 18, 42, 0.15)',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: 16 }}>
            Our Mission &amp; Technological Architecture
          </h2>
          <p style={{ color: '#e2e8f0', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: 20 }}>
            Every year, millions of qualified engineers are filtered out by outdated keyword ATS bots before a human ever speaks to them. HireRight solves this by putting an empathetic, intelligent conversational agent — Ava — at the front of the hiring funnel.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Powered by high-throughput LLM reasoning, on-device computer vision proctoring via MediaPipe, and real-time speech recognition, Ava conducts structured 12-minute technical screens that replace two weeks of manual recruiter calls.
          </p>
        </div>

        {/* LEADERSHIP */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            LEADERSHIP
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#090d16', marginTop: 8 }}>
            Meet the Builders Behind Ava
          </h2>
        </div>

        <div className={styles.pillarsGrid} style={{ marginBottom: 60 }}>
          {TEAM.map((member) => (
            <div key={member.name} className={styles.pillarCard} style={{ textAlign: 'center' }}>
              <img
                src={member.avatar}
                alt={member.name}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  margin: '0 auto 16px',
                  objectFit: 'cover',
                  border: '3px solid #38bdf8',
                }}
              />
              <h3>{member.name}</h3>
              <div style={{ color: '#2563eb', fontSize: '0.88rem', fontWeight: 600, marginBottom: 10 }}>
                {member.role}
              </div>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>

        {/* TRUST & COMPLIANCE */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            ENTERPRISE TRUST
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#090d16', marginTop: 8 }}>
            Security, Ethics & Compliance
          </h2>
        </div>

        <div className={styles.pillarsGrid} style={{ marginBottom: 60 }}>
          {COMPLIANCE_ITEMS.map((item) => (
            <div key={item.title} className={styles.pillarCard}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: 'rgba(37, 99, 235, 0.1)',
                  color: '#2563eb',
                  display: 'inline-block',
                  marginBottom: 14,
                }}
              >
                {item.badge}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#090d16', marginBottom: 16 }}>
            Ready to Build With HireRight?
          </h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link
              to="/signup"
              style={{
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 12,
                fontWeight: 700,
              }}
            >
              Get Started Free →
            </Link>
            <Link
              to="/how-it-works"
              style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 12,
                fontWeight: 700,
              }}
            >
              See How It Works
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
