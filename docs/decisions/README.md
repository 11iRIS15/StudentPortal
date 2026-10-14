# Architecture Decision Records (ADRs)

An **ADR** is a short note that records **one important decision**, the options you considered, and **why** you picked one. When someone asks "why did you use Flask?" during a presentation, or three months from now, the answer is written here.

## When to write one

- Choosing a framework, library, database, or hosting service
- Choosing a structure or approach (e.g., "how we get student data from the Registrar")
- Any decision the group debated, or that would be hard to undo

You don't need one for small choices that are easy to change.

## How to write one

1. Copy [0000-template.md](0000-template.md) and give it the next number: `0001-backend-framework.md`.
2. Fill it in. Half a page is enough.
3. Add it to the index below and open a pull request so the group can review it.
4. **Never delete an ADR.** If a decision changes, write a new ADR and set the old one's status to "Superseded by ADR-000X".

**Suggested first ADRs:** `0001-backend-framework.md`, `0002-frontend-framework.md`, and by finals, `0003-database.md`.

## Index

| # | Title | Status | Date |
|---|-------|--------|------|
| [0001](0001-backend-framework.md) | [Backend framework] | [Accepted] | [YYYY-MM-DD] |
