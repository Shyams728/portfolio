## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-20 - [Accessibility] Skip Links and Visual Focus Indicators
**Learning:** "Skip to content" links are critical for SPAs with fixed headers to prevent keyboard navigation fatigue. Visible focus indicators are often overlooked in dark themes but are essential for keyboard accessibility (WCAG).
**Action:** Always implement a 'Skip to content' link as the first focusable element and ensure all interactive elements have 'focus-visible' ring styles to support keyboard users without affecting the visual experience for mouse users.
