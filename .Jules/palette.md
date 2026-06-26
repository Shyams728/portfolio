## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-06-26 - [UX/Accessibility] Synchronizing Visual and Keyboard Visibility
**Learning:** Using 'opacity-0' alone for fading out UI elements like a 'Scroll to Top' button leaves them interactive and focusable for keyboard and screen reader users even when they are visually hidden. This creates "phantom" focus stops.
**Action:** Always pair 'opacity-0' with 'invisible' (visibility: hidden) and 'pointer-events-none' to ensure elements are truly removed from the accessibility tree and interaction layer when not in use.
