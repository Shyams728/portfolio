## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-02-17 - [UX Enhancement: Body Scroll Locking for Overlays]
**Learning:** Preventing background scrolling when a modal or lightbox is open improves focus and prevents "scroll bleeding," which can be disorienting for users.
**Action:** Implement body scroll locking using `document.body.style.overflow = 'hidden'` in a `useEffect` hook for all full-screen overlays.
