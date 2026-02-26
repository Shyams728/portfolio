## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Interactive Element Semantics
**Learning:** Many interactive "cards" or "thumbnails" in this project were implemented as 'div' or 'motion.div' with 'onClick' handlers, making them inaccessible to keyboard-only users and invisible as buttons to screen readers.
**Action:** Always use 'button' or 'motion.button' for clickable thumbnails and cards. Ensure they have descriptive 'aria-label' attributes that describe the action (e.g., "View [item] details") rather than just the content.
