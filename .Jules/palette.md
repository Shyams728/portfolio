## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/A11y] Body Scroll Locking and Semantic Triggers
**Learning:** Implementing body scroll locking ('overflow: hidden') on the body element is critical for UX when using full-screen overlays (Gallery, Certificates) to prevent "scroll-jacking" and background movement. Additionally, using 'motion.button' for image thumbnails instead of 'div' ensures they are keyboard-navigable and identified correctly by screen readers.
**Action:** Always toggle 'document.body.style.overflow' in a 'useEffect' hook within modal components and ensure all clickable thumbnails use semantic button elements with descriptive 'aria-label's.
