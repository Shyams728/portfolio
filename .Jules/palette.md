## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Motion Button for Interactive Elements
**Learning:** Using `motion.div` for interactive elements (like Gallery and Certificate thumbnails) prevents keyboard navigation and screen reader interaction because `div` is not a naturally focusable element. Framer Motion components must use semantic HTML tags like `motion.button` to be natively accessible.
**Action:** Always use `motion.button` (with `type="button"`) for interactive Framer Motion elements that are not links, and ensure they have descriptive `aria-label` attributes and visible `focus-visible` styles.
