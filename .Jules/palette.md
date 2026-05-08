## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Navigation and Focus Management
**Learning:** In SPAs with fixed headers, keyboard users experience navigation fatigue without a 'Skip to content' link. Additionally, elements that are visually hidden with 'opacity-0' but still occupy the DOM (like the 'Scroll to top' button) create 'ghost focus' traps if not explicitly removed from the tab order.
**Action:** Always implement a skip link as the first focusable element in the layout. Use Tailwind's 'invisible' and 'pointer-events-none' classes alongside 'opacity-0' to ensure hidden interactive elements are truly removed from keyboard and mouse interaction.
