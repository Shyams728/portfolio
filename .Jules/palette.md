## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [A11y] Keyboard Nav & State Communication
**Learning:** Interactive containers (like gallery thumbnails or project cards) were mouse-only 'div' elements, and filter states lacked ARIA markers, making features invisible to keyboard and screen reader users.
**Action:** Always use semantic 'button' elements for clickable items, and use 'aria-pressed' to communicate active filter/toggle states to Assistive Technology.
