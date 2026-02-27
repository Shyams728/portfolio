## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Standardizing Modal Behavior
**Learning:** Custom lightboxes and modals in this repo (Gallery, Certificates, Projects) frequently lacked keyboard 'Escape' key support and background scroll locking, creating a disconnected experience for keyboard and mobile users.
**Action:** Implement a standard `useEffect` pattern for all overlays: toggle `document.body.style.overflow = 'hidden'` on mount/unmount and add a `keydown` listener for the 'Escape' key to ensure consistent, accessible modal behavior across the site.
