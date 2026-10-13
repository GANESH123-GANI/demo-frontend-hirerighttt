const PRINT_CLASS = 'hr-scorecard-print'

/** Print only the talent scorecard (clean A4 layout, not the whole app chrome). */
export function printScorecard(): void {
  document.documentElement.classList.add(PRINT_CLASS)
  const cleanup = () => {
    document.documentElement.classList.remove(PRINT_CLASS)
    window.removeEventListener('afterprint', cleanup)
  }
  window.addEventListener('afterprint', cleanup)
  window.print()
}
