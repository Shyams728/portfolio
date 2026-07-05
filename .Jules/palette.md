## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Robust Focus Management and Tab Order
**Learning:** Hidden elements with 'opacity-0' remain in the keyboard tab order unless explicitly hidden from visibility or pointer events. Additionally, focus restoration for modals that can update internal state (like a gallery) requires ensuring the original trigger element is captured only once per open cycle to avoid focus yanking or loss.
**Action:** Use Tailwind's 'invisible' and 'pointer-events-none' for elements that should be hidden from both visual and assistive technologies. In React, use a ref to capture the active element before a modal opens and restore focus on unmount, ensuring the capture logic is conditional on the modal's first mount.

## 2025-05-16 - [Accessibility] Global Navigation Aids and Interactive States
**Learning:** High-impact UX improvements like 'Skip to content' links and ARIA state indicators (aria-pressed) provide essential context for keyboard and screen-reader users without altering the visual design for sighted users. The lack of these cues in interactive filters and simulation toggles makes the UI functionally opaque to assistive technologies.
**Action:** Always include a Skip Link as the first focusable child of the root container. Use 'aria-pressed' for toggle-like buttons (filters, state switches) to explicitly communicate active status beyond visual color changes. Ensure icon-only buttons always have a descriptive 'aria-label'.
