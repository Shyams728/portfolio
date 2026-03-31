## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-03-31 - [Accessibility] Keyboard Interactivity and Scroll Locking
**Learning:** Interactive elements implemented as 'motion.div' (like certificate cards) are invisible to keyboard users and screen readers unless explicitly given 'role="button"', 'tabIndex={0}', and 'onKeyDown' handlers. Additionally, modals and lightboxes should consistently implement 'Escape' key support and 'body' scroll locking to meet basic UX expectations.
**Action:** Always include 'role="button"', 'tabIndex={0}', and 'onKeyDown' for non-native interactive elements. Implement a 'useEffect' hook for all overlays to handle 'Escape' and toggle 'document.body.style.overflow'.
