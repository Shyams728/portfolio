## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Semantic Interactive Elements in Grids
**Learning:** Interactive grid items (Gallery, Certificates) were using non-semantic `motion.div` with `onClick` handlers, making them inaccessible to keyboard users and screen readers.
**Action:** Always use `motion.button` with `type="button"` and a descriptive `aria-label` for interactive items that trigger modals or lightboxes, ensuring they are focusable and properly identified.
