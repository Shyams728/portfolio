## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Global Focus Management and Navigation Semantics
**Learning:** In a single-page application with many sections, keyboard users can be overwhelmed by the number of navigation links they must tab through to reach the content. A "Skip to content" link combined with `aria-current="page"` and `id="main-content"` significantly improves the efficiency and clarity of navigation.
**Action:** Always implement a "Skip to content" link and use `aria-current` on active navigation links in SPA layouts to enhance screen reader and keyboard-only experiences.
