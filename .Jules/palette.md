## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-17 - [Accessibility] Global Skip Link and Focus Management
**Learning:** In SPAs with fixed navigation headers, keyboard users must tab through every nav link on every page load. A "Skip to content" link as the first focusable element is essential. To work reliably, the target (usually `<main>`) must have `tabIndex={-1}` and `outline-none` to allow programmatic focus without visual artifacts.
**Action:** Always implement a skip link in the root layout of large-page applications. Ensure hidden interactive elements (like a "Scroll to top" button) use `invisible` and `pointer-events-none` to avoid "ghost focus" in the tab order.
