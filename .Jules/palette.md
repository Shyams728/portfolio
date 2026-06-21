## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Gallery Keyboard Navigation and Focus Management
**Learning:** Custom galleries using non-native interactive elements (like `div` thumbnails) require explicit `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers to be accessible. Furthermore, lightboxes must manage focus by trapping it within the modal and restoring it to the trigger element upon closure to maintain a predictable tab order.
**Action:** Always implement a focus-restoration mechanism using `useRef` to store the triggering element when opening modals, and use `requestAnimationFrame` when restoring focus to ensure the modal has unmounted.
