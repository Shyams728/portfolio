## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Interactive motion.div Requirements
**Learning:** Interactive elements implemented using Framer Motion (`motion.div`) are not focusable or interactive for keyboard users by default. In this repo, many card-style triggers (Gallery, Certificates, Projects) were mouse-only, creating a keyboard trap or navigation gap.
**Action:** Always add `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler (supporting Enter and Space keys) to any `motion.div` or `div` that acts as a trigger. Use `focus-visible` ring styles to provide visual feedback for keyboard users while maintaining visual polish for mouse users.
