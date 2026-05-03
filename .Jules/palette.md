## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation and Focus Management
**Learning:** In SPAs with fixed headers, a "Skip to Content" link is essential to prevent keyboard navigation fatigue. Additionally, visually hidden interactive elements (like a "Scroll to Top" button) must be removed from the tab order using the `invisible` class to prevent "ghost focus."
**Action:** Always implement a skip link as the first child of the root container and synchronize the visibility of animated UI elements with their keyboard accessibility state.
