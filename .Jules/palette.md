## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Semantic Triggers and Focus Management in Lightboxes
**Learning:** Using non-semantic elements (like `div`) for interactive cards prevents keyboard discovery. Additionally, 'icon-only' buttons in high-contrast or dark-mode overlays often lack sufficient focus indicators, making them invisible to keyboard users.
**Action:** Always use `<button>` or `motion.button` for clickable cards. Ensure all lightbox controls (close, next/prev) have explicit `aria-label` and `focus-visible` styles (e.g., `focus-visible:ring-2`) to maintain visibility during keyboard navigation.
