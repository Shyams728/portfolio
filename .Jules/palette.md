## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Interactive State and Control
**Learning:** Real-time simulations or auto-updating content (like the telemetry chart) can be distracting or difficult to track for some users. Providing a clear Pause/Resume control satisfies WCAG 2.2.2 and enhances general UX.
**Action:** Implement 'isPaused' states for all auto-updating UI elements and ensure they are accompanied by 'aria-pressed' attributes and descriptive 'aria-label's.

## 2025-05-15 - [Accessibility] Keyboard Navigation Patterns
**Learning:** Custom 'motion.div' cards and gallery thumbnails often lack keyboard parity in this repo. Users expect 'Enter' or 'Space' to trigger the same action as a click, and 'Escape' to dismiss overlays.
**Action:** For all non-button interactive elements, add 'tabIndex={0}', 'role="button"', 'onKeyDown' handlers (Enter/Space), and global 'Escape' listeners for active overlays. Always toggle 'document.body.style.overflow' to 'hidden' when an overlay is active to prevent background scrolling.
