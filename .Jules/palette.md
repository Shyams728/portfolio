## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation and Skip Links
**Learning:** In SPAs with fixed headers, keyboard users often face "navigation fatigue" when tabbing through the same header links on every page/refresh. A 'Skip to content' link is essential for bypassing this, and requires both a target ID and 'tabIndex={-1}' on the main container to ensure focus is correctly moved.
**Action:** Always implement a 'Skip to content' link as the first focusable element in the app, and ensure the target '<main>' element has 'tabIndex={-1}' and 'outline-none' for clean focus management.
