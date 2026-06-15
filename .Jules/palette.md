## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip Links and Hidden Interactive Elements
**Learning:** In projects with complex layouts, a "Skip to content" link is essential for keyboard efficiency. Additionally, elements that are visually hidden (like "Scroll to top" buttons) must be programmatically hidden using 'invisible' or 'display: none' to prevent them from intercepting keyboard focus when inactive.
**Action:** Always implement a Skip Link as the first child of the root container and synchronize visual/programmatic visibility for floating UI elements.

## 2025-05-15 - [UX] Keyboard Accessibility for Image Triggers
**Learning:** Using 'motion.div' or 'div' for interactive image thumbnails (e.g., in a Gallery) requires explicit 'role="button"', 'tabIndex={0}', and 'onKeyDown' handlers to support keyboard users. Standard hover-only focus rings are insufficient for accessibility.
**Action:** Apply 'focus-visible' rings and keyboard event listeners (Enter/Space) to all non-native interactive elements.
