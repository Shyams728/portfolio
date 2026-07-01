## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip Links and Keyboard-Interactive Custom Components
**Learning:** Custom components like image galleries often miss keyboard accessibility because they use non-native interactive elements (like `div` thumbnails). Additionally, long navigation headers can be frustrating for keyboard users without a "Skip to content" link.
**Action:** Always add 'role="button"' and 'tabIndex={0}' with 'onKeyDown' handlers to non-native interactive elements. Ensure a visually-hidden (until focused) skip link is the first tab-stop in the application to allow bypassing navigation.
