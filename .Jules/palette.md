## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-14 - [Accessibility] Keyboard Accessibility for Interactive Motion Components
**Learning:** High-fidelity UI often uses `motion.div` for interactive elements (like project cards), which are not focusable or keyboard-navigable by default, creating a significant accessibility gap for users who don't use a mouse.
**Action:** Always audit Framer Motion elements that have `onClick` handlers. Ensure they include `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler to support Enter and Space keys.
