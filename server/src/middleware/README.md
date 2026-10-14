# middleware/: code that runs on every request

✅ **Error handler (required).** This is the **one place** where errors become HTTP responses. It returns Problem Details JSON (see [API-CONTRACT.md](../../API-CONTRACT.md#error-format-problem-details)) and never sends stack traces to the client.
✅ **Request logging:** method, path, status code, and how long the request took.
✅ **Later:** authentication (checking login tokens).

Where each framework hooks in the error handler:

| Framework | How |
|-----------|-----|
| Express | An error middleware with 4 arguments, `(err, req, res, next)`, registered **after** all routes |
| FastAPI | `@app.exception_handler(HTTPException)` and `@app.exception_handler(RequestValidationError)` |
| Flask | `@app.errorhandler(HTTPException)` and `@app.errorhandler(Exception)` |
| ASP.NET Core | Built in: `AddProblemDetails()` + `UseExceptionHandler()` (already in the setup in `server/README.md`) |
