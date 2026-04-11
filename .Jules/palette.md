## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Keyboard Interactivity in Motion Components
**Learning:** Interactive cards implemented with 'motion.div' are invisible to keyboard users by default. Adding 'tabIndex={0}' and 'role="button"' makes them focusable, but they require explicit 'onKeyDown' handlers for 'Enter' and 'Space' to match expected button behavior.
**Action:** Always pair 'tabIndex={0}' with 'onKeyDown' handlers and visual focus indicators (e.g., 'focus-visible:ring-2') for non-native interactive elements.

## 2025-05-15 - [UX] Navigation Efficiency with Skip Links
**Learning:** In SPAs with fixed headers and many navigation links, keyboard users must tab through the entire menu on every page load. A "Skip to content" link as the first focusable element significantly improves navigation efficiency.
**Action:** Implement a 'Skip to content' link targeting the main content area (with 'tabIndex={-1}' for programmatic focus) in all projects with fixed navigation.
