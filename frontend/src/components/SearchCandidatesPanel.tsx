import { useState, type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { HrIcon } from './HrIcon'
import styles from './SearchCandidatesPanel.module.css'

export interface KeywordItem {
  id: string
  text: string
  isMandatory: boolean
}

export interface CandidateSearchQuery {
  client: string
  candidateName: string
  booleanMode: boolean
  keywords: KeywordItem[]
  allMandatory: boolean
  searchScope: string
}

interface SearchCandidatesPanelProps {
  onSearch?: (query: CandidateSearchQuery) => void
  onClear?: () => void
}

const DEFAULT_KEYWORDS: KeywordItem[] = [
  { id: '1', text: 'Program Manager', isMandatory: true },
  { id: '2', text: 'Technical Program Manager', isMandatory: false },
  { id: '3', text: 'IT Program Manager', isMandatory: false },
  { id: '4', text: 'TPM', isMandatory: false },
  { id: '5', text: 'Agile', isMandatory: false },
  { id: '6', text: 'Scrum', isMandatory: false },
  { id: '7', text: 'JIRA', isMandatory: false },
  { id: '8', text: 'Confluence', isMandatory: true },
  { id: '9', text: 'AWS', isMandatory: false },
  { id: '10', text: 'Technical Project Manager', isMandatory: false },
]

export function SearchCandidatesPanel({
  onSearch,
  onClear,
}: SearchCandidatesPanelProps) {
  const [client, setClient] = useState('')
  const [candidateName, setCandidateName] = useState('')
  const [booleanMode, setBooleanMode] = useState(false)
  const [keywords, setKeywords] = useState<KeywordItem[]>(DEFAULT_KEYWORDS)
  const [allMandatory, setAllMandatory] = useState(false)
  const [searchScope, setSearchScope] = useState('Entire resume')
  const [inputVal, setInputVal] = useState('')

  function handleToggleStar(id: string) {
    setKeywords((prev) =>
      prev.map((k) => (k.id === id ? { ...k, isMandatory: !k.isMandatory } : k)),
    )
  }

  function handleRemoveKeyword(id: string) {
    setKeywords((prev) => prev.filter((k) => k.id !== id))
  }

  function handleAddKeyword() {
    const trimmed = inputVal.trim()
    if (!trimmed) return
    if (keywords.some((k) => k.text.toLowerCase() === trimmed.toLowerCase())) {
      setInputVal('')
      return
    }
    const newK: KeywordItem = {
      id: String(Date.now()),
      text: trimmed,
      isMandatory: allMandatory,
    }
    setKeywords((prev) => [...prev, newK])
    setInputVal('')
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddKeyword()
    }
  }

  function handleClearAll() {
    setKeywords([])
    onClear?.()
  }

  function handleAllMandatoryChange(checked: boolean) {
    setAllMandatory(checked)
    if (checked) {
      setKeywords((prev) => prev.map((k) => ({ ...k, isMandatory: true })))
    }
  }

  function triggerSearch() {
    onSearch?.({
      client,
      candidateName,
      booleanMode,
      keywords,
      allMandatory,
      searchScope,
    })
  }

  const mandatoryCount = allMandatory
    ? keywords.length
    : keywords.filter((k) => k.isMandatory).length

  return (
    <motion.section
      className={styles.panelCard}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <h2 className={styles.headerTitle}>Search candidates</h2>
      <p className={styles.headerSubtitle}>
        Add the role titles and skills you need. Star the ones that are must-haves.
      </p>

      {/* Top 2 Inputs Grid */}
      <div className={styles.topInputsGrid}>
        {/* Client Hiring For */}
        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label className={styles.label} htmlFor="client-input">
              Client you&apos;re hiring for
            </label>
            <span className={styles.newBadge}>New</span>
          </div>
          <input
            id="client-input"
            type="text"
            className={styles.textInput}
            placeholder="Add the client or company you're hiring for"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <div className={styles.aiHint}>
            <span className={styles.aiSparkle}>✦</span>
            <span>Get AI-powered results tailored to your client&apos;s hiring needs</span>
          </div>
        </div>

        {/* Candidate Name */}
        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label className={styles.label} htmlFor="candidate-name-input">
              Candidate name
            </label>
          </div>
          <div className={styles.searchIconWrap}>
            <span className={styles.searchIcon}>
              <HrIcon name="search" size={16} />
            </span>
            <input
              id="candidate-name-input"
              type="text"
              className={`${styles.textInput} ${styles.textInputWithIcon}`}
              placeholder="Search by candidate name"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') triggerSearch()
              }}
            />
          </div>
        </div>
      </div>

      {/* Keywords Area */}
      <div className={styles.keywordsSection}>
        <div className={styles.keywordsHeader}>
          <h3 className={styles.keywordsTitle}>Keywords</h3>
          <div
            className={styles.booleanToggle}
            onClick={() => setBooleanMode((prev) => !prev)}
            role="button"
            tabIndex={0}
          >
            <div
              className={`${styles.switchTrack} ${booleanMode ? styles.switchTrackActive : ''}`}
            >
              <div
                className={`${styles.switchThumb} ${booleanMode ? styles.switchThumbActive : ''}`}
              />
            </div>
            <span>Boolean {booleanMode ? 'on' : 'off'}</span>
          </div>
        </div>

        <div className={styles.keywordsContainer}>
          <div className={styles.tagsArea}>
            {keywords.map((k) => (
              <span
                key={k.id}
                className={`${styles.keywordPill} ${k.isMandatory || allMandatory ? styles.keywordPillStarred : ''}`}
              >
                <button
                  type="button"
                  className={`${styles.starBtn} ${k.isMandatory || allMandatory ? styles.starBtnStarred : ''}`}
                  onClick={() => handleToggleStar(k.id)}
                  title={k.isMandatory ? 'Marked as must-have' : 'Mark as must-have'}
                  aria-label="Toggle must-have star"
                >
                  {k.isMandatory || allMandatory ? '★' : '☆'}
                </button>
                <span>{k.text}</span>
                <button
                  type="button"
                  className={styles.removeTagBtn}
                  onClick={() => handleRemoveKeyword(k.id)}
                  title="Remove keyword"
                  aria-label={`Remove ${k.text}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <div className={styles.keywordInputRow}>
            <input
              type="text"
              className={styles.addKeywordInput}
              placeholder="Type another keyword and press Enter"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {keywords.length > 0 && (
              <button
                type="button"
                className={styles.clearAllBtn}
                onClick={handleClearAll}
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Options Row */}
      <div className={styles.optionsRow}>
        <label className={styles.mandatoryCheckboxLabel}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            checked={allMandatory}
            onChange={(e) => handleAllMandatoryChange(e.target.checked)}
          />
          <span>Mark all keywords as mandatory</span>
        </label>

        <div className={styles.searchScopeWrap}>
          <span>Search keywords in</span>
          <select
            className={styles.scopeSelect}
            value={searchScope}
            onChange={(e) => setSearchScope(e.target.value)}
          >
            <option value="Entire resume">Entire resume</option>
            <option value="Skills only">Skills only</option>
            <option value="Job titles only">Job titles only</option>
            <option value="Summary only">Summary only</option>
          </select>
        </div>
      </div>

      {/* Action Row */}
      <div className={styles.actionRow}>
        <button
          type="button"
          className={styles.searchBtn}
          onClick={triggerSearch}
        >
          Search candidates
        </button>
        <span className={styles.keywordCountSummary}>
          {keywords.length} keywords, {mandatoryCount} marked mandatory
        </span>
      </div>
    </motion.section>
  )
}
