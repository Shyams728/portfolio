## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity for Custom Interactive Elements
**Learning:** Using `motion.div` or `div` for interactive cards (like Projects) without `tabIndex`, `role="button"`, and `onKeyDown` listeners makes them invisible to keyboard-only users. Additionally, toggle buttons (like category filters) need `aria-pressed` to communicate their active state.
**Action:** Always ensure non-native interactive elements have proper ARIA roles, tab indexing, and keyboard event handlers (supporting both Enter and Space). Use `aria-pressed` for toggle states.
