## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip Links and Focus Management
**Learning:** Single Page Applications with fixed headers and hidden-until-scrolled elements (like "Scroll to Top" buttons) create keyboard traps and navigation fatigue. A "Skip to content" link is essential for bypassing navigation, and hidden elements must use `invisible` or `pointer-events-none` to be removed from the tab order.
**Action:** Implement a global "Skip to content" link in the root layout and ensure all visually hidden interactive elements are also hidden from screen readers and keyboard navigation using Tailwind's `invisible` or `sr-only` as appropriate.
