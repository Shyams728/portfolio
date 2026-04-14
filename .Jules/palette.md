## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-04-14 - [Accessibility] Global Skip Link Implementation
**Learning:** Single-page applications with fixed headers often create "keyboard traps" where users must tab through every navigation item to reach the main content. Implementing a "Skip to content" link as the first focusable element significantly improves efficiency for keyboard and screen reader users.
**Action:** Implement a skip link in `App.tsx` targeting the `<main>` element (with `id="main-content"` and `tabIndex={-1}`) as a standard practice for all SPAs in this repository. Use Tailwind's `sr-only focus:not-sr-only` to keep it visually hidden until focused.
