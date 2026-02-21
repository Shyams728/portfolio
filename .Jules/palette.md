## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Interactive Thumbnails and Toggle States
**Learning:** Found a recurring pattern where interactive image thumbnails (Gallery, Certificates) were implemented as `div` elements, and filter/simulation controls lacked `aria-pressed` states, making them inaccessible to keyboard and screen reader users.
**Action:** Always use semantic `<button type="button">` for interactive thumbnail elements and include descriptive `aria-label`s. Use `aria-pressed` for all toggleable filter or control buttons to provide feedback on their active state.
