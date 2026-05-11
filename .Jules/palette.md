## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-05-11 - [Accessibility] Global Navigation and Ghost Focus
**Learning:** Fixed-header SPAs without a 'Skip to content' link create a repetitive navigation burden for keyboard users. Additionally, elements hidden via opacity/transform still remain in the tab order unless explicitly removed via 'visibility: hidden' or 'display: none'.
**Action:** Always implement a 'Skip to content' link as the first DOM child and target the main content area. For elements that fade out (like 'Scroll to top' buttons), synchronize visual hiding with 'invisible' and 'pointer-events-none' to prevent ghost focus traps.
