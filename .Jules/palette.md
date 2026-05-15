## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip to Content Link Implementation
**Learning:** In SPAs with fixed headers, a "Skip to content" link is essential for keyboard navigation. To ensure it works reliably, the target (usually `<main>`) must have `tabIndex={-1}` to receive programmatic focus and `outline-none` to prevent a visual ring on the entire container.
**Action:** Always include `tabIndex={-1}` and `outline-none` on the target element when implementing skip links to ensure cross-browser compatibility and clean UX.
