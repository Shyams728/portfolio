## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Ghost Focus and Global Navigation
**Learning:** Elements that transition visibility (like a 'Scroll to top' button) can still receive keyboard focus if only their opacity is changed. This creates 'ghost focus' where the focus ring is invisible or appears in an unexpected location. Additionally, SPAs with fixed headers require an explicit 'Skip to content' link to allow efficient keyboard navigation.
**Action:** Use Tailwind's 'invisible' class (visibility: hidden) in conjunction with 'opacity-0' to remove hidden elements from the tab order. Ensure every SPA has a skip link as the absolute first focusable element.

## 2025-05-15 - [UX] Standardized Overlay Interactivity
**Learning:** Custom lightboxes and modals in this repository lacked uniform keyboard support and scroll management, leading to inconsistent user expectations and 'double scroll' issues.
**Action:** Implement body scroll locking (overflow: hidden) and global 'Escape' key listeners in a 'useEffect' hook for all overlay components to ensure a predictable and accessible experience.
