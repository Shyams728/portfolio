## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] State Feedback for Category Filters
**Learning:** Visual-only active states on category filters (e.g., changing background color) are invisible to screen reader users. Using 'aria-pressed' on these buttons allows assistive technology to communicate the current selection state in real-time.
**Action:** For all filter-based navigation components in this portfolio (Gallery, Projects, etc.), implement 'aria-pressed' to synchronize visual and semantic selection states.
