## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation and Gallery Interactivity
**Learning:** Fixed headers without a 'Skip to content' link create repetitive navigation hurdles for keyboard users. Additionally, using motion.div for interactive gallery elements without explicit button roles or keyboard handlers makes them invisible to assistive technology and keyboard-only users.
**Action:** Always implement a skip link as the first focusable element in projects with fixed navbars, and ensure any div-based interactive components include role="button", tabIndex={0}, and onKeyDown handlers for Enter/Space.
