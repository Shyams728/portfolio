## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Filter and Lightbox State Communication
**Learning:** Custom category filters and image lightboxes in this repository often lacked `aria-pressed` for selection states and standard `dialog` roles, making it impossible for screen reader users to track current views or modal context.
**Action:** Always include `aria-pressed={isActive}` on toggle buttons and full `dialog` ARIA suites on lightboxes, even when visual cues (like color changes or framer-motion animations) are present.
