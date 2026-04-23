## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation and Focus Visibility
**Learning:** In SPAs with fixed headers, keyboard users experience navigation fatigue when forced to tab through the entire menu on every page load. Additionally, dark-themed UIs often have poor default focus visibility.
**Action:** A 'Skip to content' link should be the first focusable element. For focus visibility, use 'focus-visible:ring-2 focus-visible:ring-primary-500' to provide high contrast against dark backgrounds without affecting mouse users.
