## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Keyboard Accessibility] Interactive Cards and Modal Escape Behavior
**Learning:** Interactive 'motion.div' cards were not focusable by default, and some modals lacked 'Escape' key support, creating navigation traps for keyboard users despite existing patterns in other parts of the app (like Gallery).
**Action:** Always add 'tabIndex={0}', 'role="button"', and 'onKeyDown' handlers to interactive Framer Motion components. Ensure all modal-like components implement a window-level 'Escape' key listener in a 'useEffect' hook.
