## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation and Skip Links
**Learning:** For single-page applications with fixed headers and extensive navigation menus, keyboard and screen reader users face high interaction fatigue without a mechanism to bypass repeated links.
**Action:** Always implement a 'Skip to content' link as the first focusable element in the DOM and ensure the primary content container is focusable via 'tabIndex={-1}' to manage focus transition smoothly.
