## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Keyboard Interactivity for Visual Grid Items
**Learning:** Visual-heavy grid components (Gallery, Projects, Certificates) often rely on 'div' or 'motion.div' for styling, which are ignored by keyboard users and screen readers unless explicitly given 'role="button"' and 'tabIndex={0}'. Additionally, background scrolling during modal interactions is a common "jank" point that degrades the premium feel of the UI.
**Action:** Ensure all interactive grid tiles include keyboard listeners ('onKeyDown') and ARIA button roles. Implement body scroll locking ('document.body.style.overflow = "hidden"') in 'useEffect' hooks for all overlay components.
