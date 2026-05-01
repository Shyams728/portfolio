## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-05-01 - [UX/Accessibility] Global Navigation and Modal Interactivity
**Learning:** Elements that transition visibility (like Scroll-to-Top buttons) must be removed from the tab order using 'visibility: hidden' (Tailwind 'invisible') to prevent "ghost focus". Additionally, 'Skip to content' links are critical for SPA accessibility to bypass fixed headers.
**Action:** Always use 'invisible' alongside 'opacity-0' for hidden interactive elements. Implement Escape key listeners and body scroll locking (using empty string to reset) for all custom modal/lightbox components.
