## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Global Navigation Aids and Focus Management
**Learning:** Single-page applications with fixed headers often create "keyboard traps" where users must tab through the entire navigation for every page load. Additionally, hidden interactive elements (like a "Scroll to top" button) can still receive focus if only their opacity is zeroed out.
**Action:** Always implement a "Skip to content" link as the first child of the app. For elements that fade out, use Tailwind's 'invisible' class to remove them from the tab order while maintaining transition capability.
