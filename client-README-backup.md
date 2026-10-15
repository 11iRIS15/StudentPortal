# Client (Frontend)

The user interface for this module. **Owner:** the Frontend member.

> ⚠️ **Before running a project generator** (like `npm create vite@latest`), **move this `README.md` and `.env.example` out of the `client/` folder.** Some generators refuse to run in a folder that isn't empty, and others overwrite `README.md`. Move both files back afterward. Keep this README and delete the one the generator created.

## 1. Choose your framework

Use any framework. Record your choice in an ADR: `docs/decisions/0002-frontend-framework.md`.

| Option | Create the project (run inside `client/`) | Start it | Default URL |
|--------|-------------------------------------------|----------|-------------|
| React, Vue, Svelte, or plain JS (with Vite) | `npm create vite@latest .` | `npm run dev` | `http://localhost:5173` |
| Angular | `npx @angular/cli new [app-name] --directory .` | `npm start` | `http://localhost:4200` |
| Next.js | `npx create-next-app@latest .` | `npm run dev` | `http://localhost:3000` |
| Plain HTML/CSS/JS | No generator. Create `index.html` yourself | VS Code "Live Server" extension | `http://127.0.0.1:5500` |

Whatever URL your app runs on, the backend member must add it to `CORS_ORIGINS` in `server/.env`.

## 2. Folder structure

The generator creates `src/`. Organize it like this, and only create a folder when you need it:

```
src/
├── pages/        # One file or folder per screen (Next.js uses app/ instead)
├── components/   # Reusable UI pieces: Button, Modal, DataTable, StatusBadge
├── layouts/      # Page shells: navbar, sidebar, footer
├── services/     # ALL API calls live here, and nowhere else
├── hooks/        # Reusable logic (React). Vue uses composables/. Angular puts this in services
├── styles/       # Global CSS and design tokens (colors, spacing) from docs/design-system.md
├── assets/       # Images, icons, fonts
└── utils/        # Small helpers: formatDate(), formatCurrency()
```

## 3. Connecting to the backend

- **Know the API:** read `server/openapi.yaml`, or open Swagger UI at `http://localhost:<server-port>/docs`.
- **Never hardcode the API URL** in components. Put it in an environment variable (see [`.env.example`](.env.example)).
- **Keep every API call in `src/services/`.** Components call `listAnnouncements()`, not `fetch(...)`. When an endpoint changes, you only fix one file.

Example (Vite; adapt the env variable name for your framework):

```js
// src/services/api.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function api(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (res.status === 204) return null;
  const body = await res.json();
  if (!res.ok) throw new Error(body.detail || body.title || 'Request failed');
  return body;
}
```

```js
// src/services/announcements.js
import { api } from './api';

export const listAnnouncements = (page = 1) => api(`/announcements?page=${page}`);
export const createAnnouncement = (data) =>
  api('/announcements', { method: 'POST', body: JSON.stringify(data) });
```

**Getting a CORS error in the browser console?** The server isn't allowing your app's URL yet. Ask the backend member to add it to `CORS_ORIGINS`.

## 4. Working before the backend is ready

Don't wait for the backend. Start a **mock server** from the contract:

```bash
npx @stoplight/prism-cli mock ../server/openapi.yaml
```

It runs at `http://127.0.0.1:4010`. Set your API base URL to exactly that, **without** `/api/v1` at the end (e.g., `VITE_API_BASE_URL=http://127.0.0.1:4010`). The mock server responds with the `example` values from the contract, and it even returns `400` errors when you send bad data. When the real backend is ready, switch the URL back.

If you need data that isn't in the contract, **ask the backend member to add it to `openapi.yaml`**. Don't invent fields.

## 5. Best practices

1. **Follow `docs/design-system.md`.** Use tokens (CSS variables like `var(--color-primary)`) instead of hex codes typed directly into components.
2. **Every screen that loads data has 4 states:** loading, success, empty ("No records yet"), and error (message plus a "Try again" button).
3. **Validate forms** so users get fast feedback. The server still does the real validation, so show its error messages too (the `errors` field in the Problem Details response).
4. **Accessibility basics:** a label on every input, alt text on images, everything usable with the keyboard, enough color contrast.
5. **Responsive:** test at phone width (about 375px) as well as desktop.
6. **Naming:** components in PascalCase (`AnnouncementCard.jsx`), everything else in camelCase or kebab-case. Pick one and stay consistent.
7. **No secrets in frontend code or `client/.env`.** Anything in the frontend can be seen by anyone who opens the browser's developer tools.
8. **Commit the lockfile** (`package-lock.json`) so everyone installs the same versions.

## 6. Checklist before each presentation

- [ ] A fresh clone runs with the steps in the root README
- [ ] Every screen gets its data from the API (or the Prism mock), not from data hardcoded in components
- [ ] Loading, empty, and error states are handled
- [ ] Screens follow the design system
- [ ] Works at phone width
- [ ] `.env.example` lists every variable the client uses
