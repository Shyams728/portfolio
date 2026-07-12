## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Robust Focus Management and Tab Order
**Learning:** Hidden elements with 'opacity-0' remain in the keyboard tab order unless explicitly hidden from visibility or pointer events. Additionally, focus restoration for modals that can update internal state (like a gallery) requires ensuring the original trigger element is captured only once per open cycle to avoid focus yanking or loss.
**Action:** Use Tailwind's 'invisible' and 'pointer-events-none' for elements that should be hidden from both visual and assistive technologies. In React, use a ref to capture the active element before a modal opens and restore focus on unmount, ensuring the capture logic is conditional on the modal's first mount.

## 2025-05-16 - [UX/Accessibility] Reusable Modal Interactivity Pattern
**Learning:** For custom modals that don't use a library, a consistent interactivity pattern in this codebase involves: 1) Capturing 'document.activeElement' in a ref before opening, 2) Moving focus to the close button within 'requestAnimationFrame' to ensure the DOM is ready, 3) Restoring focus to the trigger element on unmount, 4) Using 'Escape' key listeners, and 5) Locking 'document.body.style.overflow'.
**Action:** Apply this 5-point checklist to any new modal or lightbox component added to the portfolio to ensure a seamless keyboard and screen reader experience.
