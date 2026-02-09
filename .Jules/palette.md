## 2025-05-15 - [Form Accessibility in Portfolio]
**Learning:** Found that the ContactForm component used labels and inputs without explicit id/htmlFor association, and lacked ARIA attributes for validation states (aria-invalid, aria-describedby). This is a common pattern in this app's forms that hinders screen reader accessibility.
**Action:** Always ensure unique IDs for inputs, matching htmlFor for labels, and use aria-describedby to link error messages to their respective fields. Use sr-only text or aria-live regions for dynamic status updates (like loading spinners).
