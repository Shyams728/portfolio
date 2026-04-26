## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Navigation for Interactive Framer Motion Components
**Learning:** Components using `motion.div` for interaction are not focusable or triggerable by keyboard users by default. Additionally, custom modals often lack global key listeners for standard interactions like 'Escape' to close.
**Action:** Always provide `tabIndex={0}`, `role="button"`, and `onKeyDown` (handling Enter/Space) for interactive `motion` elements, and implement a window-level 'keydown' listener in a `useEffect` hook for modal components to ensure 'Escape' key functionality.
