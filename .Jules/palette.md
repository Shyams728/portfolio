## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-14 - [Accessibility] Skip Links and Keyboard-Accessible Galleries
**Learning:** In SPAs with fixed headers and lazy-loaded content, a 'Skip to Content' link is vital for keyboard navigation. Additionally, custom-built gallery components using `motion.div` are not focusable by default and require explicit `tabIndex`, `role="button"`, and keyboard event listeners to be accessible.
**Action:** Always include a 'Skip to Content' link as the first focusable element. For any custom interactive component that isn't a native `<button>` or `<a>`, ensure keyboard support (Enter/Space) and focus management are implemented.
