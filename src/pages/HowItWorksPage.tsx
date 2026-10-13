import { useState } from 'react'
import { motion } from 'framer-motion'
import { HrIcon } from '../components/HrIcon'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import {
  PlatformWorkflowSection,
  type WorkflowRoleMode,
} from '../components/PlatformWorkflowSection'
import { fadeUp, staggerContainer } from '../motion/variants'
import styles from './JobSeekersPage.module.css'

export function HowItWorksPage() {
  const [roleMode, setRoleMode] = useState<WorkflowRoleMode>('candidate')

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
            <HrIcon name="sparkle" size={14} /> THE COMPLETE HIRING JOURNEY
          </motion.div>
          <motion.h1 className={styles.title} variants={fadeUp}>
            How HireRight Works: <em>From Screening to Hired.</em>
          </motion.h1>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            See how our AI video interview platform transforms hiring for both ambitious job
            seekers and forward-thinking engineering recruiters.
          </motion.p>
        </motion.div>

        <PlatformWorkflowSection
          roleMode={roleMode}
          onRoleModeChange={setRoleMode}
          showRoleToggle
        />
      </main>

      <SiteFooter showWorkflow={false} />
    </div>
  )
}
