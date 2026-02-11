## 2025-05-14 - [Accessibility] Icon-only Interactive Elements
**Learning:** Icon-only buttons and links (social icons, project links, modal close buttons) were missing `aria-label` attributes, making them inaccessible to screen reader users who would only hear "link" or "button" without context. This was a recurring pattern across `Hero`, `Projects`, `ProjectModal`, and `Gallery` components.
**Action:** Always provide descriptive `aria-label` or `title` attributes for any interactive element that doesn't contain visible text. Use dynamic labels (e.g., `aria-label={`View ${project.title} on GitHub`}`) when appropriate to provide specific context.

## 2025-05-14 - [Form UX] Accessible Error Handling
**Learning:** Form validation errors were displayed visually but not programmatically linked to their respective inputs. Screen reader users would not be notified of which field was invalid or why.
**Action:** Link error messages to inputs using `aria-describedby` pointing to the error message's ID, and use `aria-invalid` to indicate the error state. Use `aria-live="polite"` on status messages (like "Sending...") to ensure they are announced.
