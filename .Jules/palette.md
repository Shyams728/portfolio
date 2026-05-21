## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-14 - [UX/Accessibility] Global Navigation and Overlays
**Learning:** Essential micro-interactions like 'Skip to content' links and body scroll locking for overlays were absent. Implementing these improves focus management and prevents background scroll-jacking, which is critical for accessible navigation in single-page applications with fixed headers and modal-heavy content.
**Action:** Include a 'Skip to content' link as the first focusable element. Use `document.body.style.overflow = 'hidden'` in `useEffect` for all modals/lightboxes to lock background scrolling, and ensure `Escape` key support for all overlays.
