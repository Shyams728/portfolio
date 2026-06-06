## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Keyboard Navigation] Interactive motion.div requires explicit handling
**Learning:** Elements using Framer Motion's `motion.div` for interactivity are not focusable by default and do not inherit keyboard accessibility. They must be explicitly converted into buttons using `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler for 'Enter' and 'Space' keys.
**Action:** Always verify that Framer Motion interactive containers have a corresponding focusable state and keyboard event listeners to ensure accessibility for non-mouse users.
