## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Interactive Cards and Keyboard Navigation
**Learning:** Custom 'motion.div' or 'div' based cards (like in the Gallery) are often perceived as buttons by mouse users but remain invisible to keyboard users and screen readers if they lack explicit ARIA roles and tab indexing.
**Action:** Always implement 'role="button"', 'tabIndex={0}', and 'onKeyDown' (supporting Enter and Space) for interactive card-like components to ensure they meet WCAG keyboard accessibility standards.
