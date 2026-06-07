## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation and Focus Management
**Learning:** In SPAs with fixed headers and long scrolling pages, a "Skip to content" link and proper focus management for the "Scroll to top" button significantly reduce navigation fatigue for keyboard users.
**Action:** Always include a Skip Link as the first focusable element in `App.tsx` and ensure that the "Scroll to top" button is removed from the tab order (`invisible` + `pointer-events-none`) when it is visually hidden.
