# models/: data shapes

Code versions of the shapes in `components/schemas` of [`../../openapi.yaml`](../../openapi.yaml). Usually three per resource:

| Model | Used for |
|-------|----------|
| `Announcement` | What the server returns |
| `AnnouncementCreate` | The request body for `POST` |
| `AnnouncementUpdate` | The request body for `PATCH` (all fields optional) |

| Framework | What to use |
|-----------|-------------|
| Express | JSDoc `@typedef`s, or a validation library's schemas |
| FastAPI | Pydantic models. These also validate input and create the Swagger docs |
| Flask | dataclasses, or Pydantic models for validation |
| ASP.NET Core | C# `record` DTOs with attributes like `[Required]` and `[MaxLength(150)]` |
