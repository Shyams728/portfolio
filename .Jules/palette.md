## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - Accessible Navigation with Skip Links
**Learning:** When implementing a 'Skip to Content' link in a React SPA with a fixed header, the target element (usually <main>) must have `tabIndex={-1}` and `outline-none` to allow programmatic focus to work reliably across browsers while suppressing unwanted visual focus rings on the container itself.
**Action:** Always ensure the target of a skip link is programmatically focusable but visually clean when focused.
