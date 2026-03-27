## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Pause/Resume for Auto-updating Content
**Learning:** For users with cognitive disabilities or those using screen readers, auto-updating content like live simulations can be distracting or difficult to track. Providing a clear Pause/Resume control satisfies WCAG 2.2.2 and improves general usability by giving users control over the interface pace.
**Action:** Always include a pause mechanism for any non-essential auto-updating visualizations and ensure the "Live" state indicator visually reflects the paused state.
