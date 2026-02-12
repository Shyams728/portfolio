## 2024-02-12 - Accessible Form Feedback Patterns
**Learning:** React form libraries like `react-hook-form` do not automatically manage ARIA attributes for error messages. Manual implementation of `aria-invalid` and `aria-describedby` is crucial for providing screen reader users with context about validation failures.
**Action:** Always link error message containers to their respective inputs using `aria-describedby` and toggle `aria-invalid` based on the field's error state.
