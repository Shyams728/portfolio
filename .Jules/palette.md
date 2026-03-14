## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity for Visual Grid Items
**Learning:** Purely visual grid items (like certificate cards or gallery thumbnails) that trigger modals/lightboxes are often implemented as non-interactive elements, making them inaccessible to keyboard users and screen readers.
**Action:** Always ensure such items have `role="button"`, `tabIndex={0}`, a descriptive `aria-label`, and `onKeyDown` handlers for 'Enter'/'Space' to provide a consistent and accessible experience.
