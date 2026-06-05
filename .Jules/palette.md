## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-15 - [UX/Accessibility] Focus Restoration and Ghost Tab Stops
**Learning:** Hidden interactive elements (like a "Scroll to top" button) can create "ghost" tab stops if they are only hidden with opacity; they must use 'visibility: hidden' or 'display: none' to be removed from the tab order. Additionally, custom modals must restore focus to the triggering element to maintain navigational context.
**Action:** Use Tailwind's 'invisible' and 'pointer-events-none' for elements hidden via state. Always use a ref to store the 'document.activeElement' before opening a modal and call '.focus()' on it in the cleanup or close handler.
