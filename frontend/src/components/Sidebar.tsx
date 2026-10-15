import type { WizardStep } from '../data/wizard'
import { BrandLogo } from './BrandLogo'
import styles from './Sidebar.module.css'

const WHY_ITEMS = ['AI-powered matching with the right roles', 'Verified by top employers globally', '100% secure & privacy-first', 'Helping talent grow, one connection at a time']
const CONFIRM_ITEMS = ['AI-Powered Matching', 'Fair & Unbiased', 'Trusted by Top Companies', '100% Secure & Private']
export function Sidebar({ step = 1 }: { step?: WizardStep }) {
  const later = step >= 4
  return <aside className={`${styles.sidebar} ${later ? styles.later : ''}`} aria-label="HireRight introduction">
    <div style={{ marginBottom: '0.75rem' }}>
      <BrandLogo dark size="lg" />
    </div>
    {later && <div className={`${styles.character} ${step === 5 ? styles.confirmCharacter : ''}`} role="img" aria-label="A professional with a laptop sitting in a purple chair" />}
    <div className={styles.hero}>
      <h2>{step === 5 ? <>You're on the<br /><em>Right</em> Path!</> : step === 4 ? <>You've taken<br />the <em>Right</em> Step!</> : <>Your Journey<br />to the <em>Right</em><br />Opportunity<br />Starts Here.</>}</h2>
      <p>{step === 5 ? "We're excited to have you with us. Our AI interview will help you showcase your skills and connect you with the best opportunities." : step === 4 ? "We're excited to learn more about you and help you connect with the right opportunities." : "We're here to understand you better, so we can connect you with opportunities that truly fit your potential."}</p>
    </div>
    {!later && <><div className={styles.wave} aria-hidden="true" /><div className={styles.featureCard}><strong>One profile.<br />Unlimited<br />possibilities.</strong><small>Built on trust. Powered by AI.</small></div></>}
    {step === 4 && <div className={styles.progressCard}><strong>Your Progress</strong><div className={styles.ring}><span>75%</span></div><p>Great going! Just a<br />few more steps.</p></div>}
    <div className={`${styles.why} ${step === 5 ? styles.trustCard : ''}`}>
      <h3>{step === 5 ? '♧  Your journey is in safe hands.' : <>Why HireRight{step === 4 ? ' ?' : ''}</>}</h3>
      <ul>{(step === 5 ? CONFIRM_ITEMS : step === 4 ? [WHY_ITEMS[0], 'Interview with confidence', 'Trusted by top companies globally', ...WHY_ITEMS.slice(2)] : WHY_ITEMS).map(item => <li key={item}><span className={styles.check}>✓</span><span>{item}</span></li>)}</ul>
    </div>
    <div className={styles.help}><span aria-hidden="true">♧</span><div><strong>Need help?</strong><a href="mailto:care@hireright.com">care@hireright.com</a></div></div>
  </aside>
}

