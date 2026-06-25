## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-06-25 - [Accessibility] Global Navigation and Focus Management
**Learning:** Standard global accessibility aids like "Skip to content" links and visible focus indicators for brand logos were absent. Interactive elements that fade out (like the 'Scroll to top' button) remain in the tab order if only `opacity-0` is used, creating "ghost" focus stops.
**Action:** Implement a skip link as the first child of the app root. Use `invisible pointer-events-none` in conjunction with `opacity-0` for fading elements. Mark purely decorative scrolling text with `aria-hidden="true"`.
