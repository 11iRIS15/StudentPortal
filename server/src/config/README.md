# config/: settings from environment variables

Read environment variables **once**, here, and export them. The rest of the code then uses `config.port` instead of reading `process.env.PORT` or `os.getenv("PORT")` all over the place.

```js
// config/index.js (Express example)
export const config = {
  port: Number(process.env.PORT) || 8000,
  corsOrigins: (process.env.CORS_ORIGINS || '').split(','),
};
```

```python
# config/__init__.py (FastAPI / Flask example)
import os

PORT = int(os.getenv("PORT", "8000"))
CORS_ORIGINS = os.getenv("CORS_ORIGINS", "").split(",")
```

Every variable you read here must also be listed in [`../../.env.example`](../../.env.example) with a safe example value.
