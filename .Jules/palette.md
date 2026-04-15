## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-04-18 - [Accessibility] Global Navigation and Interactive Card Support
**Learning:** Single-page applications with fixed headers create navigation fatigue for keyboard users. Additionally, interactive cards implemented with non-semantic elements (like 'motion.div') are invisible to keyboard navigation without explicit focus management.
**Action:** Always implement a 'Skip to content' link as the first focusable element. For any interactive card, ensure 'role="button"', 'tabIndex={0}', and 'onKeyDown' (Enter/Space) are added to provide a consistent experience across all input methods.
