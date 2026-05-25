## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX] Global Navigation and Gallery Accessibility
**Learning:** Fixed headers can create keyboard traps if a "Skip to content" link isn't provided. Additionally, custom gallery lightboxes often neglect focus management and ARIA roles, making them inaccessible to screen readers and keyboard-only users.
**Action:** Always implement a skip link as the first focusable element. For galleries, ensure filters use 'aria-pressed', thumbnails are keyboard-triggerable, and lightboxes function as accessible 'dialog' components with proper focus rings.
