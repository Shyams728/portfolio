## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Keyboard Accessibility] Making Interactive Cards Accessible
**Learning:** Interactive "cards" or "thumbnails" implemented as 'div' or 'motion.div' are invisible to keyboard-only users and screen readers unless explicitly marked with interactive roles and tab indexing.
**Action:** For any non-semantic interactive element (like a card that opens a modal), always add 'tabIndex={0}', 'role="button"', an 'aria-label', and an 'onKeyDown' handler (supporting both 'Enter' and 'Space'). Include 'focus-visible' ring styles to provide essential visual feedback during keyboard navigation.
