## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity for Visual Grid Items
**Learning:** Interactive grid elements (Projects, Gallery, Certificates) implemented as 'motion.div' were missing keyboard listeners and focus indicators, preventing non-mouse users from accessing detailed views or lightboxes.
**Action:** Always include 'tabIndex={0}', 'role="button"', 'onKeyDown' handlers (Enter/Space), and 'focus-visible' ring styles when creating interactive card or thumbnail components.
