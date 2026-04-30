## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX] Global Navigation and Modal Polish
**Learning:** Keyboard users experience friction in SPAs with fixed headers and many interactive elements. "Skip to content" links and proactive "ghost focus" prevention (using `invisible` class) are essential for a smooth tabbing experience. Additionally, modal UX is significantly improved by body scroll locking and Escape key support, ensuring the background doesn't move and the user can easily exit.
**Action:** Implement 'Skip to content' links in all portfolio projects. Always use `invisible` alongside `opacity-0` for elements that transition visibility to maintain a clean tab order. Standardize modal components with `Escape` listeners and scroll-locking effects.
