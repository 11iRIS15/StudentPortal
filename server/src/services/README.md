# services/: business logic

The "brain" of your module: **the rules**. Examples:

- "A student with unpaid fines can't borrow a book."
- "An archived announcement can't be edited."
- "A payment can't be larger than the remaining balance."

✅ **Belongs here:** rules, calculations, calls to `data/`, and later, calls to other modules' APIs.
❌ **Does not belong here:** anything about HTTP (`req`, `res`, status codes, headers). A service should still work if it were called from a script.

When a rule is broken, throw or raise a clear error (e.g., `NotFoundError`, `ConflictError`). The error handler in `middleware/` turns it into the right HTTP response.
