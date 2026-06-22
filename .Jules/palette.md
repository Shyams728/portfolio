## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX] Keyboard Accessibility for Interactive Grids
**Learning:** In image-heavy galleries, thumbnails are often visually interactive but keyboard-inaccessible. Adding `tabIndex={0}` and `onKeyDown` handlers is necessary, but providing focus restoration to the triggering thumbnail is equally vital for maintaining the user's spatial context after closing a lightbox.
**Action:** Always capture `document.activeElement` before opening a modal and use a `useEffect` cleanup or a close handler to restore focus. Use `focus-visible` to ensure navigation controls (like Prev/Next chevrons) are visible to keyboard users even if they are normally hidden on hover.
