import type { Question } from './interviewEngine'
import type { SavedProfile } from './store'

/** User picked a role/level chip or applied to a job — questions follow that track. */
export function isRoleTrackExplicit(
  explicitFlag: boolean,
  hasTargetJob: boolean,
  customJd: string,
): boolean {
  if (hasTargetJob || explicitFlag) return true
  return customJd.trim().length >= 40
}

export function questionAnchorMode(explicit: boolean): 'role_track' | 'resume_first' {
  return explicit ? 'role_track' : 'resume_first'
}

export function pickResumeInterviewTopic(
  profile: SavedProfile | null,
  history: { question: Question; answer: string }[],
): { topic: string; label: string } | null {
  if (!profile) return null
  const asked = new Set(
    history.map((h) => (h.question.topic || h.question.text.slice(0, 40)).toLowerCase()),
  )

  const jobs = (profile.workExperiences || []).filter((w) => w.jobTitle || w.company)
  for (const w of jobs) {
    const topic = `${w.jobTitle || 'Role'} @ ${w.company || 'Company'}`
    const key = topic.toLowerCase()
    if (!asked.has(key)) {
      return { topic, label: topic }
    }
  }

  for (const skill of profile.skills || []) {
    const key = skill.toLowerCase()
    if (!asked.has(key)) return { topic: skill, label: skill }
  }

  for (const ach of profile.achievements || []) {
    const key = ach.slice(0, 48).toLowerCase()
    if (!asked.has(key)) return { topic: 'Resume highlight', label: ach.slice(0, 120) }
  }

  return null
}

export function roleTrackQuestion(
  role: string,
  level: string,
  name: string,
  historyLen: number,
): Question | null {
  const templates: Record<string, string[]> = {
    'Full Stack Engineer': [
      `${name}, for a ${role} at ${level} level: describe a feature you owned from UI through API and database — trade-offs, testing, and deployment.`,
      `${name}, how do you split work between frontend and backend on a ${role} team, and give an example where that split mattered?`,
    ],
    'Frontend Developer': [
      `${name}, on your resume track as ${role}: how did you improve performance or accessibility on a real page users relied on?`,
    ],
    'Backend Developer': [
      `${name}, as ${role} (${level}): walk through designing an API and data model for a high-traffic workflow you shipped.`,
    ],
  }
  const lines = templates[role]
  if (!lines?.length) return null
  const text = lines[historyLen % lines.length]
  return {
    text,
    category: 'Technical',
    keywords: [role.toLowerCase(), 'project', 'built', 'result'],
    hint: 'Tie the story to tools and measurable outcomes.',
    topic: role,
  }
}

export function claimedSkillQuestion(
  name: string,
  skill: string,
  role: string,
): Question {
  const fullStackLike = /full[\s-]?stack|mern|mean/i.test(skill)
  const mathLike = /math|statistic|calculus|algebra|geometry/i.test(skill)

  let text: string
  if (fullStackLike) {
    text = `${name}, you said you're good at ${skill}. Pick one real product feature and walk me through it end to end — client/UI, APIs or services, database, auth if any, and how you tested and shipped it.`
  } else if (mathLike) {
    text = `${name}, you said you're strong in ${skill}. Walk me through a problem you solved using ${skill} — setup, method, and how you verified the answer.`
  } else {
    text = `${name}, you mentioned ${skill}. Describe a concrete situation where you applied ${skill}${role ? ` in a ${role} context` : ''} — challenge, actions, and outcome.`
  }

  return {
    text,
    category: 'Technical',
    keywords: [skill.toLowerCase(), 'project', 'method', 'result'],
    hint: fullStackLike
      ? 'Cover frontend, backend, and data — not just one layer.'
      : 'Use a specific example with tools and metrics.',
    topic: skill,
  }
}
