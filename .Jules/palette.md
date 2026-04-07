## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Gallery Navigation and Global Focus States
**Learning:** Image grids implemented as decorative elements often overlook keyboard accessibility. Adding 'role="button"' and 'tabIndex={0}' alongside 'onKeyDown' handlers (Enter/Space) is essential for inclusive navigation. A "Skip to content" link is a critical yet simple addition for keyboard users to bypass redundant navigation menus.
**Action:** Always verify that interactive image grids are keyboard-accessible and ensure all SPAs with navigation menus include a functional "Skip to content" link as the first focusable element.
