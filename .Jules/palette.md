## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/A11y] Keyboard Navigation and Scroll Locking for Lightboxes
**Learning:** Custom lightboxes and filter buttons (Gallery, Certificates) often lacked keyboard support and scroll locking, allowing "scroll-behind" and making items inaccessible to non-mouse users.
**Action:** Convert clickable divs to buttons for keyboard focus, implement 'Escape' key listeners for dismissal, and use 'overflow: hidden' on the body during active modal states.
