## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Dynamic Focus Restoration in Galleries
**Learning:** In galleries where users can navigate between items inside a lightbox, restoring focus to the original thumbnail that opened the modal can be disorienting if the user ended on a different image.
**Action:** Use unique identifiers (like data-attributes) to track the currently active item and dynamically restore focus to its corresponding trigger element upon closing the modal, ensuring the user's focus context remains aligned with their navigation.
