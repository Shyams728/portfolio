## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Skip Link for Keyboard Navigation
**Learning:** Single-page applications with fixed headers can create significant "keyboard traps" or tedious navigation for screen reader users. Adding a 'Skip to content' link as the first focusable element is a high-impact, low-complexity win for global accessibility.
**Action:** Ensure all projects include a 'Skip to content' link targeting the primary '<main>' element, ensuring the target has 'tabIndex={-1}' to receive programmatic focus.
