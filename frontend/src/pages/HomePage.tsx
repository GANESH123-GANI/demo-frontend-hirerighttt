import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HrIcon, type HrIconName } from '../components/HrIcon'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { HOME_TRUST_LOGOS } from '../lib/brandLogos'
import styles from './HomePage.module.css'

const HERO_WOMAN = '/hero-candidate-new-cutout.png'
const HERO_CITY_BG = '/hero-office-bg.png'
const SHOW_CUTOUT_WOMAN = false

/** Hero logo strip matches reference (6 marks). */
const HERO_LOGOS = HOME_TRUST_LOGOS

const WHY: { title: string; desc: string; icon: HrIconName; tone: string }[] = [
  {
    title: 'Trusted & Reliable',
    desc: 'Fair AI interviews with clear scores you can understand and share.',
    icon: 'shield',
    tone: styles.bubbleRed,
  },
  {
    title: 'Faster Opportunities',
    desc: 'One interview unlocks matched roles — less waiting, more clarity.',
    icon: 'zap',
    tone: styles.bubblePurple,
  },
  {
    title: 'Secure & Private',
    desc: 'Your data stays in your account. You control when employers see your report.',
    icon: 'lock',
    tone: styles.bubbleGreen,
  },
  {
    title: 'Stay Job-Ready',
    desc: 'Ava asks from your résumé — practice that mirrors real hiring conversations.',
    icon: 'user',
    tone: styles.bubbleBlue,
  },
  {
    title: 'Global Standards',
    desc: 'Scorecards and feedback designed for teams hiring across industries.',
    icon: 'star',
    tone: styles.bubbleAmber,
  },
]

const HOW_STEPS = [
  {
    num: '1',
    title: 'Create Your Profile',
    desc: 'Sign up in minutes and share the necessary details.',
    icon: 'user' as const,
    numTone: styles.stepNumRed,
    iconTone: styles.stepIconRed,
    ring: styles.stepRingRed,
  },
  {
    num: '2',
    title: 'We Run Secure Checks',
    desc: 'Our technology verifies your information quickly & accurately.',
    icon: 'clipboard' as const,
    numTone: styles.stepNumPurple,
    iconTone: styles.stepIconPurple,
    ring: styles.stepRingPurple,
  },
  {
    num: '3',
    title: 'Results Delivered',
    desc: 'Reports are shared with employers seamlessly.',
    icon: 'check' as const,
    numTone: styles.stepNumGreen,
    iconTone: styles.stepIconGreen,
    ring: styles.stepRingGreen,
  },
  {
    num: '4',
    title: 'You Move Forward',
    desc: 'More trust. More confidence. More opportunities.',
    icon: 'briefcase' as const,
    numTone: styles.stepNumAmber,
    iconTone: styles.stepIconAmber,
    ring: styles.stepRingAmber,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export function HomePage() {
  return (
    <div className={styles.page}>
      <SiteNav variant="home" />

      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <img src={HERO_CITY_BG} alt="" />
        </div>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroCopy}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.h1 variants={fadeUp}>
                Your Dream Job Deserves the <span className={styles.accent}>Right</span> Start.
              </motion.h1>
              <motion.p variants={fadeUp}>
                Background screening you can trust.
                <br />
                Confidence you can carry into your future.
              </motion.p>
              <motion.div className={styles.heroBtns} variants={fadeUp}>
                <Link to="/signup" className={styles.btnPrimary}>
                  Get Started
                  <span className={styles.btnIconCircle} aria-hidden>
                    <HrIcon name="arrow-right" size={11} strokeWidth={3} />
                  </span>
                </Link>
                <Link to="/how-it-works" className={styles.btnGhost}>
                  How It Works
                  <span className={styles.btnPlayCircle} aria-hidden>
                    <HrIcon name="video" size={10} />
                  </span>
                </Link>
              </motion.div>
              <motion.div className={styles.socialProof} variants={fadeUp}>
                <div className={styles.avatarStack}>
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`/avatars/avatar${i}.jpg`} alt="" />
                  ))}
                </div>
                <p>
                  <strong>Trusted by 1000+ employers</strong>
                  <br />
                  and millions of job seekers worldwide.
                </p>
              </motion.div>
            </motion.div>

            {SHOW_CUTOUT_WOMAN && (
              <motion.div
                className={styles.heroVisual}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                <div className={styles.heroCharacterStage}>
                  <img
                    className={styles.heroWoman}
                    src={HERO_WOMAN}
                    alt="Professional giving a thumbs-up"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.logoCard} aria-label="Companies hiring with HireRight">
        <div className={styles.shell}>
          <div className={styles.logoCardInner}>
            <h2>Powering Confident Hiring Decisions for Top Companies</h2>
            <div className={styles.logoRow}>
              {HERO_LOGOS.map((l) => (
                <div
                  key={l.name}
                  className={`${styles.logoItem} ${(styles as Record<string, string>)[l.logoClass] ?? ''}`}
                >
                  <img src={l.src} alt={l.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Job Seekers Choose HireRight</h2>
            <div className={styles.sectionAccent} aria-hidden />
          </div>
          <div className={styles.whyGrid}>
            {WHY.map((card) => (
              <article key={card.title} className={styles.whyCard}>
                <span className={`${styles.whyIcon} ${card.tone}`}>
                  <HrIcon name={card.icon} size={22} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.howDark}>
        <div className={styles.shell}>
          <div className={styles.sectionHeaderLight}>
            <h2 className={styles.howTitle}>How It Works</h2>
            <div className={styles.sectionAccent} aria-hidden />
          </div>
          <div className={styles.howFlow}>
            <div className={styles.stepsConnector} aria-hidden />
            <div className={styles.howTrack}>
              {HOW_STEPS.map((step) => (
                <div key={step.num} className={styles.howStep}>
                  <div className={`${styles.stepIconOuter} ${step.ring}`}>
                    <div className={styles.stepIconInner}>
                      <HrIcon
                        name={step.icon}
                        size={26}
                        className={step.iconTone}
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>
                  <h3>
                    <span className={step.numTone}>{step.num}</span> {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className={styles.shell}>
          <div className={styles.ctaCard}>
            <img className={styles.ctaRocket} src="/rocket.png" alt="" />
            <div className={styles.ctaCopy}>
              <h2>
                Take the <span className={styles.accent}>Right</span> Step Today
              </h2>
              <p>A trusted screening today can open doors to endless tomorrows.</p>
              <Link to="/signup" className={styles.btnCta}>
                Get Started Now
                <span className={styles.btnCtaIcon} aria-hidden>
                  <HrIcon name="arrow-right" size={12} />
                </span>
              </Link>
            </div>
            <div className={styles.ratings}>
              <div className={styles.ratingBox}>
                <div className={styles.ratingScore}>
                  4.8 <span>/5</span>
                </div>
                <div className={styles.stars} aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HrIcon key={i} name="star" size={14} />
                  ))}
                </div>
                <span className={styles.ratingLabel}>Job Seeker Rating</span>
              </div>
              <div className={styles.ratingBox}>
                <div className={styles.ratingScore}>
                  4.7 <span>/5</span>
                </div>
                <div className={styles.stars} aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HrIcon key={i} name="star" size={14} />
                  ))}
                </div>
                <span className={styles.ratingLabel}>Employer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter showWorkflow={false} />
    </div>
  )
}
