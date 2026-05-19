## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Global Navigation and Modal Interactivity
**Learning:** For SPAs with fixed headers, a 'Skip to content' link is critical for keyboard users to bypass repetitive navigation. Additionally, modals and lightboxes require explicit body scroll locking and Escape key listeners to meet standard user expectations for interactivity.
**Action:** Implement 'Skip to content' as the first child of the root container, targeting a <main> with tabIndex={-1}. Always use useEffect hooks in modals to manage global side effects like scroll locking and keyboard event listeners.
