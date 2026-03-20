## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation Aids
**Learning:** In SPAs with fixed headers and extensive navigation menus, keyboard and screen reader users face "navigation fatigue" when moving between sections. A 'Skip to content' link is essential as the first focusable element.
**Action:** Always implement a visually-hidden-until-focused skip link that anchors to a '<main>' element with 'tabIndex={-1}' to ensure focus is correctly managed when the link is activated.
