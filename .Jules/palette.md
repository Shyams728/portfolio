## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/A11y] User Control for Auto-Updating Content
**Learning:** The "Live Engine Simulation" was an auto-updating element without a pause mechanism, violating WCAG 2.2.2. Adding a Pause/Resume toggle not only meets accessibility standards but also improves UX by allowing users to inspect specific data points without them moving away.
**Action:** Ensure all auto-updating or moving content (simulations, carousels, marquees) has a visible pause control and reflects its state via ARIA attributes like 'aria-pressed'.
