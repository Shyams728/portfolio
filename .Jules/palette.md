## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Gallery Keyboard Interactivity and Lightbox Semantics
**Learning:** In projects using `motion.div` for interactive elements (like gallery thumbnails), explicit `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers are required to support keyboard users. Furthermore, lightboxes should use `role="dialog"` and `aria-modal="true"` to provide a better screen reader experience.
**Action:** When using `div` or `motion.div` as buttons, always include `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler. Ensure lightboxes/modals have appropriate ARIA attributes and focusable elements like navigation buttons are visible on focus even if they are normally hidden on hover.
