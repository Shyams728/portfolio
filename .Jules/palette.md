## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity for Custom Grid Items
**Learning:** Visual grid items (Project cards, Gallery thumbnails, Certificates) implemented with 'motion.div' are not keyboard-accessible by default. Screen readers and keyboard users cannot interact with them unless they have an explicit role, tabIndex, and key event handlers.
**Action:** Convert interactive 'div' elements to 'role="button"' with 'tabIndex={0}', add 'onKeyDown' for Enter/Space, and ensure 'focus-visible' styles are applied for visual feedback.
