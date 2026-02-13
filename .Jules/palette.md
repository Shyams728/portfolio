## 2025-02-13 - [Accessibility Verification and Strict Mode]
**Learning:** When using Playwright's `get_by_role` or `get_by_label` to verify accessibility attributes on icon-only links, similar text content in other elements (like "View GitHub Profile" vs "GitHub Profile") can cause strict mode violations.
**Action:** Use `exact=True` or more specific locators when multiple elements share similar accessible names, and ensure all icon-only elements have unique, descriptive `aria-label` attributes.
