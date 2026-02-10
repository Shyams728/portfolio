## 2025-05-14 - Accessible Form Validation Patterns
**Learning:** Form validation errors in React applications often lack proper ARIA linkage, making them inaccessible to screen reader users even if they are visually prominent.
**Action:** When implementing forms, always ensure:
1. Labels are linked to inputs via `htmlFor` and `id`.
2. Inputs use `aria-invalid` to reflect their error state.
3. Inputs use `aria-describedby` to point to the `id` of the specific error message.
4. Error messages use `role="alert"` for immediate announcement.
5. Submission status changes are announced via an `aria-live` region.
