## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Global Navigation & Keyboard Focus
**Learning:** A 'Skip to content' link and explicit focus-visible rings are essential for keyboard navigation in single-page applications with fixed headers. Additionally, using 'invisible' and 'pointer-events-none' alongside 'opacity-0' for floating buttons ensures they are removed from the tab order when hidden.
**Action:** Always implement a skip link as the first focusable element and ensure hidden interactive elements are genuinely removed from the accessibility tree.
