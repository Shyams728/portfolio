## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation Aids and Focus States
**Learning:** In single-page applications with fixed headers, keyboard users face navigation fatigue from tabbing through repetitive menu items. Additionally, the default focus indicators were often too subtle or missing on social icons.
**Action:** Implement a 'Skip to content' link as the first focusable element (sr-only, focus:not-sr-only) targeting a named anchor with tabIndex={-1}. Consistently apply 'focus-visible:ring-2' with appropriate rounding ('rounded-sm' for text, 'rounded-full' for icons) to ensure high-visibility focus states.
