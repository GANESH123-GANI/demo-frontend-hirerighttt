import { motion } from 'framer-motion'
import { easeOut } from '../motion/variants'
import styles from './PrivacyBanner.module.css'

export function PrivacyBanner() {
  return (
    <motion.aside
      className={styles.banner}
      aria-label="Privacy assurance"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: easeOut }}
    >
      <div className={styles.left}>
        <div className={styles.shield} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        </div>
        <div className={styles.textWrap}>
          <div className={styles.title}>We respect your privacy</div>
          <p className={styles.desc}>
            Your information is protected with industry-leading security. We never share your data without your consent.
          </p>
        </div>
      </div>

      <div className={styles.badges}>
        {['Encrypted', 'Private', 'Secure'].map((label) => (
          <span key={label} className={styles.badge}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            {label}
          </span>
        ))}
      </div>
    </motion.aside>
  )
}
