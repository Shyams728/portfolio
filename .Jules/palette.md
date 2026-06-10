## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-14 - [UX] Decoupling Focus Initialization from State Updates
**Learning:** In interactive modals that support internal navigation (like a gallery), triggering focus-to-container logic on every state change (e.g., image change) causes "focus yanking," which disrupts keyboard users.
**Action:** Use a derived dependency (like '!!selectedItem') in 'useEffect' to ensure focus management only runs when the modal first mounts/opens, preserving the user's focus state on internal navigation elements during interaction.
