## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Controlled Telemetry Simulations
**Learning:** Live data visualizations that auto-update should provide user control (pause/resume) to comply with WCAG 2.2.2 and prevent cognitive overload. Additionally, separating initial data generation from update logic in React prevents jarring UI resets when configuration parameters change.
**Action:** Always include a pause toggle for auto-updating content and ensure initialization logic is decoupled from update intervals to maintain UI stability.
