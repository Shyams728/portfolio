## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip to Content for SPA Navigation
**Learning:** Single Page Applications with sticky headers and multiple navigation links create high interaction friction for keyboard and screen reader users, as they must tab through the entire menu on every page load or refresh.
**Action:** Always implement a 'Skip to content' link as the first focusable element in the DOM, targeting the primary '<main>' element which should have 'tabIndex={-1}' to receive programmatic focus.
