## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2026-06-13 - [Accessibility] Gallery Keyboard Interactivity and Focus Management
**Learning:** Custom image galleries implemented as simple click-to-expand grids often lack keyboard support and focus restoration, creating keyboard traps and confusing navigation paths.
**Action:** Ensure all interactive elements in a gallery have 'tabIndex={0}', 'role="button"', and 'onKeyDown' handlers. Use a 'useRef' to capture the triggering element and 'requestAnimationFrame' to restore focus upon closing the lightbox for a seamless user experience.
