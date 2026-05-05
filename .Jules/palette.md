## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-05-05 - [Accessibility] Global Navigation and Skip Links
**Learning:** A "Skip to content" link is essential for SPAs with fixed headers to prevent keyboard traps. Additionally, elements that fade out visually (like Scroll to Top buttons) must be explicitly removed from the tab order using 'invisible' or 'pointer-events-none' to prevent ghost focus.
**Action:** Always implement a skip link as the first child of the root container and synchronize visual visibility with keyboard accessibility for all floating UI elements.
