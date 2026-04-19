## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation and Keyboard Access
**Learning:** In Single Page Applications (SPAs) with fixed headers and numerous navigation links, keyboard users face navigation fatigue. A "Skip to content" link is a critical micro-UX improvement to bypass redundant navigation.
**Action:** Always implement a skip-to-content link as the first focusable element in SPAs with fixed headers, targeting the '<main>' element with 'id="main-content"' and 'tabIndex={-1}'.
