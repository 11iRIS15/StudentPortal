# routes/: HTTP layer

Connects each **URL + method** to a handler. A handler does four things:

1. Reads the request (path parameters, query parameters, body)
2. Validates it (bad input → `400`)
3. Calls a **service**
4. Sends the response with the correct status code

✅ **Belongs here:** route definitions, input validation, turning results into HTTP responses.
❌ **Does not belong here:** business rules or reading mock data directly. Call a service for those.

Use one file per resource: `announcements.routes.js`, `announcements.py`, and so on.
Every route here must match [`../../openapi.yaml`](../../openapi.yaml) (same path, method, fields, and status codes).

> Other names for this layer: `controllers/` (Express, ASP.NET Core `Controllers/`), routers (FastAPI `APIRouter`), blueprints (Flask).
