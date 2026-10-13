export const OPEN_SIGNOUT_EVENT = 'hireright-open-signout'

/**
 * Triggers the global sign-out confirmation modal popup (Image 3)
 * without navigating to the dedicated logout page.
 */
export function openSignOutModal() {
  window.dispatchEvent(new CustomEvent(OPEN_SIGNOUT_EVENT))
}
