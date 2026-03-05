## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity for Visual Grids
**Learning:** Gallery thumbnails and certificate previews implemented as `div` elements with `onClick` are inaccessible to keyboard users. Simply adding `tabIndex={0}` is insufficient; they also require `role="button"` and `onKeyDown` listeners for 'Enter' and 'Space' keys.
**Action:** When creating interactive grid items, always wrap or convert them to keyboard-accessible elements with appropriate ARIA roles and key event handlers.
