## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Gallery Keyboard Interactivity and Skip Link
**Learning:** Decorative-heavy components like the Gallery (using `motion.div`) were completely inaccessible to keyboard users as they lacked tab focus and activation handlers. Additionally, the complex navigation menu lacked a 'Skip to Content' mechanism.
**Action:** Always provide `tabIndex={0}`, `role="button"`, and `onKeyDown` handlers for custom interactive elements. Implement a globally accessible Skip Link as the first element in the tab order targeting the main content area.
