## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Accessible Gallery and Focus Management
**Learning:** Custom gallery components using non-native interactive elements (like image thumbnails) require manual 'tabIndex', 'role="button"', and keyboard listeners. Additionally, focus must be programmatically moved into lightboxes and restored upon closure to maintain a logical tab order.
**Action:** Ensure all non-button triggers have 'tabIndex={0}' and 'onKeyDown' support. Implement 'useRef' based focus restoration for all modal-like interactions to prevent focus loss for keyboard users.
