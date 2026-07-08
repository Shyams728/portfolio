## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Robust Focus Management and Tab Order
**Learning:** Hidden elements with 'opacity-0' remain in the keyboard tab order unless explicitly hidden from visibility or pointer events. Additionally, focus restoration for modals that can update internal state (like a gallery) requires ensuring the original trigger element is captured only once per open cycle to avoid focus yanking or loss.
**Action:** Use Tailwind's 'invisible' and 'pointer-events-none' for elements that should be hidden from both visual and assistive technologies. In React, use a ref to capture the active element before a modal opens and restore focus on unmount, ensuring the capture logic is conditional on the modal's first mount.

## 2025-05-16 - [UX/Accessibility] Keyboard Interactivity for Custom Cards
**Learning:** In this portfolio, project cards were styled as interactive elements (hover effects, cursor-pointer) but lacked the necessary semantics and event listeners for keyboard users. Adding role="button", tabIndex={0}, and an onKeyDown handler for Enter/Space is essential for bridging the gap between visual and functional interactivity.
**Action:** Always verify that elements with cursor-pointer or hover transitions are either native interactive elements or have been augmented with keyboard-accessible roles and listeners.
