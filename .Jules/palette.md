## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Gallery Interaction Patterns
**Learning:** Visual-only selection states (like active filters or hovered gallery items) create a "ghost" interface for keyboard/screen-reader users if not accompanied by ARIA states and focus management.
**Action:** Always pair visual 'active' classes with 'aria-pressed' or 'aria-selected', and ensure 'motion.div' interactive containers have 'tabIndex={0}', 'role="button"', and 'onKeyDown' handlers.
