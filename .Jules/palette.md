## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Gallery Keyboard Navigation and Focus Visibility
**Learning:** Visual-only interactive elements like gallery thumbnails and lightbox navigation require explicit 'role="button"', 'tabIndex={0}', and 'onKeyDown' handlers to be accessible. Additionally, elements hidden by default (like hover-triggered navigation arrows) must be made visible on focus using 'focus-visible' classes to support keyboard-only users.
**Action:** Always provide keyboard triggers ('Enter'/'Space') and visible focus states for image-based interactions, and ensure navigation controls in modals are accessible by overriding hover-only visibility with 'focus-visible:opacity-100'.
