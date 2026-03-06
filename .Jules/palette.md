## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity for Visual Grids
**Learning:** Purely visual grids (like image galleries) often lack keyboard accessibility because developers rely on 'onClick' handlers on 'div' or 'img' elements. This excludes keyboard and screen reader users from accessing the content.
**Action:** Always implement 'role="button"', 'tabIndex={0}', and 'onKeyDown' handlers (for Enter/Space) on interactive grid items. Ensure focus-visible rings are prominent and filters use 'aria-pressed' to communicate state.
