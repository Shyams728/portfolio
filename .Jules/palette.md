## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Skip-to-Content Navigation
**Learning:** For single-page applications with fixed headers, a "Skip to Content" link is critical for keyboard and screen reader efficiency. It should be the absolute first child of the root container to ensure it's the first item in the tab order.
**Action:** Implement skip links using 'sr-only focus:not-sr-only' and target a <main> element with 'tabIndex={-1}' and 'outline-none' to ensure reliable programmatic focus without visual artifacts.
