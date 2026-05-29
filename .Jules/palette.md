## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Keyboard Parity for Custom Interactive Elements
**Learning:** Visual-only interactive elements (like the Gallery thumbnails implemented as `motion.div`) create keyboard traps or dead-ends for non-mouse users if `tabIndex`, `role`, and `onKeyDown` are omitted. Furthermore, purely visual hide/show transitions (like `opacity-0`) don't remove elements from the tab order.
**Action:** Always pair `opacity-0` with `invisible` for elements that should not be focusable when hidden. Ensure all custom interactive containers have explicit keyboard handlers and roles.
