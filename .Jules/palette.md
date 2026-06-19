## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Interactive Framer Motion Components
**Learning:** Interactive elements built using `motion.div` from Framer Motion are not focusable or keyboard-triggerable by default. They lack the semantic roles and event handlers necessary for accessibility, making them invisible to keyboard and screen reader users.
**Action:** Always add `tabIndex={0}`, `role="button"`, and an `onKeyDown` handler (supporting Enter and Space) to interactive `motion.div` elements. Additionally, implement focus restoration using `useRef` and `requestAnimationFrame` when these elements trigger modals or lightboxes.
