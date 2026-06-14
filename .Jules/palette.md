## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Gallery Interaction & Lightbox Management
**Learning:** In a media-heavy portfolio, thumbnails often lack interactive semantics for keyboard users. Additionally, "scroll-through" (background scrolling while a lightbox is open) disrupts the user's focus and perceived stability of the interface.
**Action:** Ensure all interactive media items have `role="button"` and keyboard handlers. Use `useEffect` hooks to lock background scroll when modals/lightboxes are active, and provide clear `focus-visible` states for navigation controls within the lightbox.
