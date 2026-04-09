## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-04-09 - [Accessibility] Global Navigation and Interactive Elements
**Learning:** Single Page Applications with fixed headers often create navigation fatigue for keyboard users. Additionally, many visually interactive elements (like project cards) in this repo are implemented as divs, making them inaccessible to keyboard users.
**Action:** Always implement a 'Skip to content' link as the first focusable element. For interactive div-based cards, explicitly add `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers to ensure they are discoverable and usable by everyone.
