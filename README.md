# TENTENS Career Matrix

Open-source source code of the TENTENS Tech engineering career framework:
**https://carier.tentens.tech**

The site shows, for every role, the skills expected at each grade (IC1 → Senior Staff Engineer, L1/L2 for leads, …) and a few growth stories. It is a fully static site: [Nuxt 3](https://nuxt.com) pre-rendered with `nuxi generate`, hosted on GitHub Pages. There is no backend.

> The framework content itself (role descriptions) is written in Ukrainian.

## Quick start

Requirements: Node.js 22 (>= 20) and pnpm 8 (`corepack enable` picks the right version from `package.json`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server (validates and builds the matrix data first) |
| `pnpm validate` | Validates `data/` only — fast, run it after editing content |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `vue-tsc` |
| `pnpm generate` | Static site into `.output/public` |
| `pnpm start:generate` | Preview the generated site locally |

## Where the content lives

The matrix is split by role so it is easy to review and maintain:

```
data/
  roles/<role>.json     # one file per role: backend, frontend, qa, devops, dba, so, lead, analytics, design
  shared/<block>.json   # blocks reused by several roles (culture, direction, outcome, talent)
  schema.json           # allowed grades per role (used by the validator)
```

`scripts/build-matrix.mjs` merges them into `data/matrix.generated.json` (git-ignored) which the app imports. Details and editing rules: [CONTRIBUTING.md](./CONTRIBUTING.md).

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: validate → lint → typecheck → `nuxi generate` → publish to GitHub Pages. Pull requests run the same checks without publishing. The custom domain comes from `public/CNAME`.

## License

[MIT](./LICENSE). Originally bootstrapped from [Vitesse for Nuxt 3](https://github.com/antfu/vitesse-nuxt3) by Anthony Fu.
