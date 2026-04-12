## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-06-25 - [Accessibility] Global Keyboard Navigation & Focus Management
**Learning:** Interactive elements implemented using non-semantic tags (like Framer Motion 'motion.div') require explicit role assignment, tab indexing, and keyboard event listeners to be accessible. Consistent use of 'focus-visible' utility classes ensures accessibility without compromising visual aesthetics for mouse users.
**Action:** Implement 'role="button"', 'tabIndex={0}', and 'onKeyDown' handlers for all custom interactive components. Always include a 'Skip to content' link in SPAs with fixed headers to improve navigation efficiency for keyboard/screen reader users.
