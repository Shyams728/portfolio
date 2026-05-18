## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX] Synchronizing Visual and Tab Order for Hidden Elements
**Learning:** Elements that use CSS opacity for transitions (like the "Scroll to top" button) remain in the keyboard tab order even when visually 'hidden'. This creates a frustrating experience for keyboard users who may focus on an invisible element.
**Action:** Always pair 'opacity-0' with 'invisible' (visibility: hidden) and 'pointer-events-none' to ensure elements are properly removed from both the visual and interaction trees when inactive.
