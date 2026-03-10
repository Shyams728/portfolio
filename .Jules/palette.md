## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Interactive Card and Scroll Management Patterns
**Learning:** Visual-only interactive cards (Projects, Gallery) and lightboxes lacked keyboard focusability and background scroll containment, which are common UX friction points in this React portfolio.
**Action:** Always implement 'role="button"', 'tabIndex={0}', and 'onKeyDown' (Enter/Space) for non-native interactive elements, and use 'useEffect' to manage 'document.body.style.overflow = "hidden"' during overlay states to ensure a focused, accessible experience.
