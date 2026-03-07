## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity for Visual Grid Items
**Learning:** Visual grid items (Project cards, Gallery thumbnails) implemented as 'div' elements require explicit keyboard accessibility (tabIndex, role="button", and Enter/Space listeners) to be usable by non-mouse users.
**Action:** Always add 'tabIndex={0}', 'role="button"', and an 'onKeyDown' listener for Enter/Space to any interactive 'div' elements that function as buttons.
