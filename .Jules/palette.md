## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity for Motion Components
**Learning:** Framer Motion components ('motion.div') used as interactive cards are not focusable or keyboard-accessible by default. They require explicit 'tabIndex', 'role="button"', and 'onKeyDown' handlers to support keyboard users.
**Action:** For every interactive 'motion.div' or 'div', add 'tabIndex={0}', 'role="button"', and a keydown handler for 'Enter' and 'Space' keys.
