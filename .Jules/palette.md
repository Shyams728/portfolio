## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-02-24 - [Accessibility] Skip Links and Interactive State
**Learning:** Foundational accessibility features like "Skip to content" links and 'aria-pressed' attributes for stateful filters were missing, impacting keyboard-only navigation and screen reader clarity in a highly interactive portfolio.
**Action:** Always include a Skip Link in the root component (App.tsx) and ensure all toggle/filter buttons reflect their active state via 'aria-pressed'.
