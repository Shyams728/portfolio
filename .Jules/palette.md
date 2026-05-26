## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-14 - [UX] Keyboard Accessibility and Body Scroll Management
**Learning:** Micro-interactions like 'Scroll to Top' buttons can create keyboard traps if they are only visually hidden (opacity: 0) but remain focusable. Similarly, custom gallery thumbnails and lightboxes often lack keyboard focus support and background scroll locking, leading to a disconnected experience for keyboard users.
**Action:** Use 'invisible' and 'pointer-events-none' to truly hide elements from the tab order. Ensure all custom interactive elements have 'tabIndex={0}' and keyboard handlers. Always implement body scroll locking ('overflow: hidden') when modals or lightboxes are active to maintain focus on the modal content.
