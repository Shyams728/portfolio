## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Robust Focus Management and Tab Order
**Learning:** Hidden elements with 'opacity-0' remain in the keyboard tab order unless explicitly hidden from visibility or pointer events. Additionally, focus restoration for modals that can update internal state (like a gallery) requires ensuring the original trigger element is captured only once per open cycle to avoid focus yanking or loss.
**Action:** Use Tailwind's 'invisible' and 'pointer-events-none' for elements that should be hidden from both visual and assistive technologies. In React, use a ref to capture the active element before a modal opens and restore focus on unmount, ensuring the capture logic is conditional on the modal's first mount.

## 2025-05-16 - [Accessibility] Consistent Modal Accessibility Patterns
**Learning:** Even high-quality visual lightboxes (like the one in Certificates.tsx) can be entirely inaccessible to keyboard and screen reader users if they lack basic ARIA roles, keyboard triggers, and focus management. Standardizing these patterns across all modal-like components ensures a predictable experience.
**Action:** Always verify that custom image-based triggers have 'role="button"', 'tabIndex={0}', and handle 'Enter'/'Space' keys. Ensure the modal container has 'role="dialog"' and focus is programmatically moved into it upon opening.
