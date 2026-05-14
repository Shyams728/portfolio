## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [Accessibility] Skip Links and Keyboard Visibility
**Learning:** Fixed headers can obscure 'Skip to content' links if they use standard 'absolute' positioning with 'not-sr-only'. Additionally, hidden interactive elements (like 'Scroll to top') can create ghost focus if not properly removed from the tab order.
**Action:** Use 'focus:fixed' for skip links in apps with fixed navigation. Use 'invisible' and 'pointer-events-none' to ensure hidden elements are not focusable. Always add 'focus-visible' rings to interactive elements for keyboard users.
