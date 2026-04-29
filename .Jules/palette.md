## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Keyboard Navigation & Tab Order
**Learning:** Fixed-header SPAs can create keyboard navigation fatigue for power users. Additionally, using only `opacity-0` to hide elements (like 'Scroll to Top' buttons) leaves them in the tab order, creating "ghost focus" traps.
**Action:** Always include a 'Skip to content' link as the first focusable element. For UI elements that transition visibility, synchronize `opacity-0` with Tailwind's `invisible` class to properly manage the accessibility tree and tab order.
