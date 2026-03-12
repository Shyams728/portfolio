## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Keyboard Interactivity for Visual Grid Items
**Learning:** In highly visual portfolios, grid items (like project cards) are often implemented as non-semantic 'div' or 'motion.div' elements. These are invisible to keyboard users and screen readers if they lack focusability and role definitions, even if they trigger modals on click.
**Action:** Ensure all clickable grid items have 'tabIndex={0}', 'role="button"', 'onKeyDown' listeners, and 'focus-visible' ring styles to provide a consistent experience for non-pointer users.
