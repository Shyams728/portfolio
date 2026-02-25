## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Skip-to-Content Implementation
**Learning:** For single-page applications with extensive navigation bars, a "Skip to content" link is critical for keyboard accessibility. However, simply anchoring to an ID is often insufficient for older browsers; adding 'tabIndex={-1}' to the target `<main>` element ensures focus is correctly shifted.
**Action:** Always include a 'tabIndex={-1}' on skip-link targets to guarantee consistent focus behavior across all browsing environments.
