## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-06-02 - [Micro-UX] Stable Focus Management in Modals
**Learning:** Programmatic focus "yanking" (moving focus back to a container) on every state change within a modal (e.g., changing images in a lightbox) disrupts keyboard users and can break focus restoration if the target is overwritten.
**Action:** Ensure focus-to-container logic in `useEffect` hooks only executes once upon the modal opening, for example by checking if body scroll is already locked. Always restore focus to the original trigger element on closure using a stable reference.
