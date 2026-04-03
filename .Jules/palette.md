## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - User Control for Auto-Updating Content
**Learning:** For WCAG 2.2.2 (Pause, Stop, Hide) compliance, auto-updating visualizations like the "Live Engine Simulation" must provide a mechanism for users to pause or stop the movement. This is especially important for users who are easily distracted or those using assistive technologies who need time to parse the content without it changing.
**Action:** When adding live-updating data visualizations, include a Pause/Resume toggle with clear ARIA labels and ensure the simulation can be controlled via keyboard.
