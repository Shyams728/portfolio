## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-06-24 - [Accessibility] Gallery Navigation and Focus Management
**Learning:** Custom gallery lightboxes often lack essential keyboard support and focus management. Adding `tabIndex={0}` and keyboard handlers to thumbnails makes them accessible to non-mouse users. Furthermore, preserving and restoring focus to the trigger element when the lightbox closes is crucial for a seamless experience.
**Action:** Always implement `role="button"` and `tabIndex={0}` on interactive non-native elements, and use a `useRef` to manage focus restoration for modals/lightboxes.
