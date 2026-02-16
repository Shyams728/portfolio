## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/A11y] Custom Overlay Management
**Learning:** Custom overlays (ProjectModal, Gallery lightbox) lacked consistent keyboard dismissal (Escape key) and background scroll containment, leading to a fragmented user experience on long pages.
**Action:** Always implement a manual 'Escape' key listener and toggle 'document.body.style.overflow = "hidden"' for custom modal components to ensure proper focus containment and interaction flow.
