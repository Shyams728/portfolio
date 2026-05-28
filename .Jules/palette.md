## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Overlays, Keyboard Nav, and Focus Management
**Learning:** Custom lightboxes and modals (Gallery.tsx, ProjectModal.tsx) failed to manage focus and background scroll, and image-based thumbnails were invisible to keyboard users. Additionally, "Skip to content" links are vital for SPAs with fixed headers.
**Action:** (1) Programmatically move focus to modals using `useRef`/`useEffect` + `tabIndex={-1}`. (2) Use `invisible` (not just `opacity-0`) to remove hidden elements from tab order. (3) Ensure non-native interactive elements (like gallery divs) have `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers.
