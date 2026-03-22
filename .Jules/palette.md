## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Gallery and Lightbox Keyboard Navigation
**Learning:** Custom interactive elements (like gallery thumbnails and filter buttons) often miss 'tabIndex', 'role="button"', and keyboard event listeners, making them invisible to keyboard users. Lightboxes must also manage focus and body scroll states.
**Action:** Ensure all non-native interactive elements have 'tabIndex={0}', handle 'Enter'/'Space' keys, and use 'aria-pressed' for toggle states. Always use a 'useEffect' to toggle 'document.body.style.overflow' when modals/lightboxes open to prevent background scrolling.
