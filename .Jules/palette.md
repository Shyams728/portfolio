## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Synchronizing Visual and Keyboard Visibility
**Learning:** Transitioning elements like "Scroll to top" buttons with 'opacity-0' makes them visually hidden but leaves them in the keyboard tab order. This creates a "phantom focus" where keyboard users tab into an invisible element.
**Action:** Always use Tailwind's 'invisible' class in conjunction with 'opacity-0' for transitionable elements. This ensures the element is removed from the accessibility tree and tab order when not active. Additionally, ensure 'motion.div' interactive triggers are converted to semantic buttons or provided with 'role="button"' and 'tabIndex={0}'.
