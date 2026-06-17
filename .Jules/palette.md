## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX] Robust Focus Management for Interactive Overlays
**Learning:** When opening a Lightbox or Modal, focus must be programmatically moved to the modal container. To prevent 'focus yanking' during internal state changes (like navigating images), ensure the focus-to-container logic only executes once per open cycle, for example by checking if the body scroll is already locked or if the triggering element reference is already set.
**Action:** Store the element that triggered a modal in a 'useRef' and restore focus to it upon modal closure using `requestAnimationFrame` to ensure the modal has fully unmounted. Nullifying the ref immediately after restoration prevents redundant focus calls.
