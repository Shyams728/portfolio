## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Interactive Elements and Global Key Listeners
**Learning:** High-quality visual cards implemented as 'motion.div' are not keyboard-accessible by default and require explicit 'tabIndex', 'role="button"', and 'onKeyDown' handlers. Additionally, custom lightboxes and modals often lack 'Escape' key listeners for quick closure, impacting the UX for power users and keyboard-only navigators.
**Action:** Always wrap or enhance 'motion.div' interactive containers with standard accessibility attributes and implement window-level 'keydown' listeners in a 'useEffect' hook for all modal-like components.
