## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX] Decoupled Data Initialization in Live Simulations
**Learning:** Placing initial data generation within the same 'useEffect' as the update interval causes the entire visualization to reset whenever interval-related dependencies (speed, intensity) change.
**Action:** Always separate mount-time data initialization from interval-based update logic into distinct 'useEffect' hooks to ensure smooth transitions when adjusting simulation settings.

## 2025-05-15 - [Accessibility] User Control for Auto-Updating Content
**Learning:** Real-time simulations without a pause mechanism violate WCAG 2.2.2 (Pause, Stop, Hide) and can be a significant distraction for users with cognitive disabilities.
**Action:** Implement a Pause/Resume toggle for all auto-updating visualizations and ensure the "Live" status indicator visually and semantically (via 'aria-live' or 'aria-pressed') reflects the state change.
