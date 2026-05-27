## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Gallery Keyboard Interactivity and Focus Management
**Learning:** Custom image galleries often overlook keyboard users by using non-interactive elements as triggers and failing to manage focus or scroll state when a lightbox is active.
**Action:** Convert image thumbnails into accessible buttons using 'role="button"', 'tabIndex={0}', and keyboard event handlers. Implement 'useRef' to programmatically focus modals upon opening and use 'useEffect' to lock background scrolling and restore focus upon closing.
