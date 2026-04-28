## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Focus Management and Interactive Nesting
**Learning:** Hidden elements (like a "Scroll to top" button) that use `opacity-0` still remain in the keyboard tab order, creating "ghost focus" traps. Additionally, applying `role="button"` to card containers that host child links creates an ARIA nesting violation.
**Action:** Use `visibility: hidden` (Tailwind `invisible`) to remove hidden items from tab order. Avoid `role="button"` on containers with nested interactives; instead, provide a dedicated focusable trigger for the container's primary action.
