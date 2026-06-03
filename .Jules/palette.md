## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Robust Modal Focus and Hidden Elements
**Learning:** Programmatic focus in React modals often fails if executed too early in the render cycle. Using 'requestAnimationFrame' ensures the DOM is ready. Additionally, Tailwind's 'opacity-0' alone doesn't remove elements from the tab order; 'invisible' (visibility: hidden) is required for accessible fading elements like 'Scroll to Top' buttons.
**Action:** Use 'requestAnimationFrame' for modal focus and 'invisible' for visually hidden interactive elements.
