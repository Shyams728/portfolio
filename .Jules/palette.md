## 2025-05-14 - [Accessibility] Enhanced Modal and Form Semantics
**Learning:** The application's interactive components (ContactForm, ProjectModal) were missing essential ARIA attributes (id/htmlFor, aria-invalid, role="dialog"), which hindered screen reader navigation despite a high-quality visual design.
**Action:** When working with custom modals in this design system, always ensure 'role="dialog"', 'aria-modal="true"', and 'aria-labelledby' are present, and verify form labels are programmatically linked to inputs.

## 2025-05-14 - [Accessibility] Missing Keyboard Interactivity on Interactive Cards
**Learning:** Multiple components (Projects, Gallery, Certificates) use 'motion.div' with 'onClick' for major interactions but lack keyboard support (tabIndex, role, onKeyDown) and focus indicators. This creates a significant barrier for non-pointer users.
**Action:** Ensure all clickable 'div' or 'motion.div' elements are promoted to accessible buttons using 'tabIndex={0}', 'role="button"', and 'onKeyDown' (handling Enter/Space), paired with 'focus-visible' ring styles.
