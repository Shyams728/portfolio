## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip Links and Phantom Focus
**Learning:** Implementing a 'Skip to content' link requires the target element to have `tabIndex={-1}` for reliable programmatic focus. Additionally, visually hidden elements (like a Scroll to Top button) must use `invisible` or `hidden` to be removed from the keyboard tab order and avoid "phantom focus".
**Action:** Always pair `opacity-0` with `invisible` for transition-based hiding, and ensure skip link targets are focusable.
