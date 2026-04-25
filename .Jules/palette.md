## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Implementing Effective "Skip to Content" Links
**Learning:** Adding a "Skip to content" link requires the target element (usually `<main>`) to have `tabIndex={-1}` to reliably receive programmatic focus across all browsers and testing environments, even if it scrolls correctly.
**Action:** Always pair internal skip links with `tabIndex={-1}` and `outline-none` on the target container to ensure keyboard focus shifts without adding unwanted visual artifacts.
