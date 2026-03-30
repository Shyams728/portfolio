## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Pause/Resume and State Persistence in Simulations
**Learning:** For auto-updating content like the 'Live Engine Simulation', providing a pause/resume toggle is essential for WCAG 2.2.2 compliance. Additionally, separating the initial data generation from the update interval in 'useEffect' hooks is critical to prevent the visualization from resetting or flickering when users adjust simulation parameters (speed, intensity).
**Action:** Use distinct hooks for data initialization and simulation intervals; ensure any auto-updating UI has a user-controlled pause state and clearly reflects its status through both visual and ARIA-compliant indicators.
