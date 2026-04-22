## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX] Focus Management in Lightboxes
**Learning:** For a truly accessible lightbox experience, it's not enough to just add ARIA roles; proactive focus management (focusing the close button on open and restoring focus to the trigger on close) is critical for keyboard users to maintain their context within the page.
**Action:** Always implement a 'useEffect' hook in modal components to capture the active element, focus the primary action on mount, and restore the captured element on unmount.
