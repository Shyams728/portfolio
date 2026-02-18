## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/A11y] Scroll Locking and Interactive States
**Learning:** Overlays (modals and lightboxes) without body scroll locking lead to "scroll leak" which disorients users. Additionally, filter buttons visually indicated by color need 'aria-pressed' to communicate state to assistive technologies.
**Action:** Implement body scroll locking via 'useEffect' on all overlay components. Use 'aria-pressed' for toggle-like filter buttons and ensure 'aria-label' on download links includes context (e.g., file title).
