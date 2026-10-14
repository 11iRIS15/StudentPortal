# data/: data access (mock data now, database later)

**Midterm:** your mock data lives here, as in-memory lists or JSON files. Next to it are small functions that read and write it. These functions are called a **repository**:

```
findAll(filters)    findById(id)    create(item)    update(id, changes)    remove(id)
```

**Finals:** replace the inside of these functions with database queries. Routes and services only call these functions, so nothing else has to change. That's the whole point of this layer.

Tips:

- 5–10 realistic records per resource, matching the schemas in `openapi.yaml` and `docs/data-model.md`.
- Use the ID formats agreed on in `docs/integration.md` for other modules' IDs (e.g., `studentId`).
- Data resets when the server restarts. That's fine for the midterm.
