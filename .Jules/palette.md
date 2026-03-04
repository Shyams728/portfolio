## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-22 - [Accessibility] Interactive State and Keyboard Navigation
**Learning:** Category filters and simulation controls lacked state communication (aria-pressed) and visible focus indicators, making them difficult for screen reader and keyboard users to navigate. Additionally, clickable cards using 'onClick' on divs were inaccessible to keyboard-only users.
**Action:** Always include 'aria-pressed' on toggle buttons, add 'focus-visible' utility classes for all interactive elements, and ensure clickable cards have 'role="button"', 'tabIndex={0}', and key listeners (Enter/Space).
