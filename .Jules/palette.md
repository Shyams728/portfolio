## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Simulation Controls and Toggle State Visibility
**Learning:** Interactive visualizations with moving data (like the Live Engine Simulation) can be distracting or difficult to process for users with cognitive or visual impairments. Providing a pause mechanism (WCAG 2.2.2) and clearly communicating toggle states via `aria-pressed` significantly improves the accessibility of custom dashboard-style components.
**Action:** Always include a way to pause or stop auto-updating/moving content and ensure all toggle buttons (filters, settings) use `aria-pressed` and `focus-visible` styles.
