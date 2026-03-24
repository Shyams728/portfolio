## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/A11y] Simulation Playback Control
**Learning:** Live-updating content (like charts) can be distracting for some users or difficult to inspect for others; providing a visible Pause/Resume toggle satisfies WCAG 2.2.2 and improves the general utility of the simulation.
**Action:** Always include playback controls for auto-updating data visualizations and use 'aria-pressed' to communicate toggle states for simulation parameters (speed, intensity, state).
