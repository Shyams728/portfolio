## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip Links and Lightbox Navigation
**Learning:** Implementing a "Skip to Content" link as the absolute first child of the root container is essential in SPAs with fixed headers to prevent keyboard traps. Custom lightboxes implemented with Framer Motion require explicit focus management (trapping and restoration) and ARIA attributes (`role="dialog"`, `aria-modal="true"`) to be navigable by screen readers and keyboard users.
**Action:** Always include a Skip Link in the root layout. Ensure all custom modal/lightbox components trap focus when open and restore focus to the trigger upon closing. Use `focus-visible` for consistent, non-intrusive focus indicators.
