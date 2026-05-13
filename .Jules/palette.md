## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-01-24 - Skip Link and Hidden Element Accessibility
**Learning:** A "Skip to content" link is essential for keyboard users in apps with fixed headers. Additionally, elements only visually hidden with `opacity-0` remain in the tab order, causing "ghost focus".
**Action:** When adding a skip link, target a container with `tabIndex={-1}` and `outline-none`. For hidden interactive elements, always use Tailwind's `invisible` and `pointer-events-none` to remove them from the tab order.
