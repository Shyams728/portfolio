## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-04-10 - [UX/Accessibility] Keyboard Navigation and Global Interactivity
**Learning:** Interactive cards implemented as 'div's require explicit keyboard handling ('tabIndex', 'role', 'onKeyDown') and global navigation aids like 'Skip to content' links to be accessible. Modals must also handle 'Escape' and scroll-locking for a polished micro-UX.
**Action:** Always verify keyboard focusability and ARIA roles for custom interactive elements, and implement skip links as the first focusable element in SPAs.
