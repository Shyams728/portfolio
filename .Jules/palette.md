## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-05-31 - [Accessibility] Global Navigation Aids and Tab Order Management
**Learning:** Fixed a common accessibility oversight where a "Scroll to Top" button remained in the keyboard tab order while visually hidden. Using Tailwind's 'invisible' utility (visibility: hidden) in conjunction with 'opacity-0' allows for smooth transitions while correctly removing the element from the accessibility tree when not in use. Additionally, implementing a "Skip to Content" link as the first child of the root container is essential for keyboard users to bypass global navigation in SPAs with many links.
**Action:** Always verify that elements with 'opacity-0' are also removed from the tab order using 'invisible' or 'hidden', and ensure every project has a functional skip-to-content link targeting a properly attributed <main> element.
