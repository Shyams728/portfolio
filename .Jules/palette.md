## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-22 - [UX/Accessibility] Global Navigation and Modal Polish
**Learning:** Fixed headers in SPAs often trap keyboard focus and create navigation fatigue. Additionally, custom lightboxes without scroll locking or Escape key support degrade the UX for both mouse and keyboard users.
**Action:** Implement 'Skip to Content' links in all portfolio projects with fixed navigation. Ensure every modal-like overlay implements body scroll locking and Escape key listeners for consistent micro-UX.
