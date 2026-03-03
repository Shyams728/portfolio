## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip to Content Link
**Learning:** Single-page applications with complex navigation often require a "Skip to content" link as the first focusable element to improve accessibility for keyboard and screen-reader users, allowing them to bypass repetitive navigation links.
**Action:** Implement a 'Skip to content' link that anchors to the primary '<main>' element (id='main-content'). Ensure the '<main>' element includes 'tabIndex={-1}' to receive focus properly when the link is activated.
