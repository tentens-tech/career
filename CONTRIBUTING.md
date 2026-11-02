# Contributing

Thanks for helping to improve the framework! Most changes are content edits in `data/`.

## Editing the matrix

Structure of a role file (`data/roles/<role>.json`):

```
category → skill → grade → description
category → grade → description          # a category without sub-skills
```

Example:

```json
{
  "Code fluency": {
    "IC1": "…",
    "IC2": "…"
  },
  "Outcome": { "$ref": "outcome" }
}
```

Rules:

- **Order matters.** Categories (and sub-skills) are shown in the order they appear in the file.
- **Grades** must be valid for the role — see `data/schema.json` (`ic` roles: `IC1`…`IC4`, `Staff Engineer`, `Senior Staff Engineer`; `lead`: `L1`, `L2`; `analytics`: `IC1`…`IC5`; `design`: `IC1`…`IC4`). A grade with no description is simply omitted, never an empty string.
- A category holds **either** grade texts **or** sub-skills, not both.
- Keys must not have leading/trailing whitespace.

### Shared blocks

A category can reuse a block from `data/shared/`:

```json
{
  "Culture": { "$ref": "culture" }
}
```

To override single cells for one role, add a `$patch` — it is deep-merged over the shared block:

```json
{
  "Culture": {
    "$ref": "culture",
    "$patch": { "Communication": { "Staff Engineer": "role-specific text" } }
  }
}
```

Editing a file in `data/shared/` changes **every** role that references it. If a block starts to differ per role, inline it into the role file (or use `$patch`).

### Adding a role

1. Create `data/roles/<role>.json` and register the role in `data/schema.json`.
2. Add its grade list to `gradesOrderMap` in `components/TheMatrix.vue` if it is not a default `ic` role (and `types/matrix.ts` for a new grade set).
3. Add `/tech-career/<role>` to `nitro.prerender.routes` in `nuxt.config.ts`, and a link/card where roles are listed.

## Before opening a pull request

```bash
pnpm validate && pnpm lint && pnpm typecheck && pnpm generate
```

CI runs the same steps. `pnpm validate` explains exactly what is wrong in the data (file, category, grade).

## Growth stories

Personal stories include names and photos of real people. Do not add a story or photo without the person's explicit consent.
