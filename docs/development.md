# Розробка та підтримка сайту

Технічна документація сайту [TENTENS Career Matrix](../README.md). Сам фреймворк і його ідея описані в головному README, правила редагування контенту — у [CONTRIBUTING.md](../CONTRIBUTING.md).

Це повністю статичний сайт: [Nuxt 3](https://nuxt.com), пререндер через `nuxi generate`, хостинг на GitHub Pages. Бекенду немає.

## Швидкий старт

Потрібно: Node.js 22 (>= 20) і pnpm 8 (`corepack enable` підтягне потрібну версію з `package.json`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Команда | Що робить |
| --- | --- |
| `pnpm dev` | Dev-сервер (спершу валідує й збирає дані матриці) |
| `pnpm validate` | Валідація лише `data/` — швидко, запускати після правок контенту |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `vue-tsc` |
| `pnpm generate` | Статичний сайт у `.output/public` |
| `pnpm start:generate` | Локальний перегляд згенерованого сайту |

## Як локально дивитись збірку

Не відкривайте `index.html` напряму (`file://`) — буде біла сторінка. Nuxt підключає ассети абсолютними шляхами (`/_nuxt/*.js`), а вкладені роути (`/tech-career/frontend`) потребують HTTP-сервера.

- **Розробка та правка контенту:** `pnpm dev`.
- **Перевірка продакшн-збірки:** `pnpm generate && pnpm start:generate`, далі відкрити URL, який покаже `serve`.
- **Власний `dist` / іншу папку:** `cd <папка> && npx serve .` або `python3 -m http.server 8080`. Для підпапки збирайте з `NUXT_APP_BASE_URL=/subpath/`.
- **Діагностика білого екрана:** DevTools → Network; 404 на `/_nuxt/...` означає, що сторінка відкрита не через сервер або неправильний baseURL.

## Де живе контент

Матриця розбита по ролях, щоб її було легко рев'юїти й підтримувати:

```
data/
  roles/<role>.json     # по файлу на роль: backend, frontend, qa, devops, dba, so, lead, analytics, data-engineer, design
  shared/<block>.json   # блоки, спільні для кількох ролей (culture, direction, outcome, talent)
  schema.json           # дозволені грейди для ролей (використовує валідатор)
```

`scripts/build-matrix.mjs` зливає їх у `data/matrix.generated.json` (у git-ignore), який імпортує застосунок. Структура файлів, `$ref`/`$patch`, додавання ролі — у [CONTRIBUTING.md](../CONTRIBUTING.md).

## Git-хуки

Хуки ставляться автоматично при `pnpm install` (`simple-git-hooks`):

- **`pre-commit`** (`scripts/pre-commit.mjs`) — лише те, що потрібно для staged-файлів:
  - блокує коміт згенерованих/локальних файлів (`data/matrix.generated.json`, `.output/`, `dist/`, `.nuxt/`, `.env*`);
  - `pnpm validate`, якщо змінено `data/**`;
  - `eslint --fix` на staged-файлах (через `lint-staged`);
  - `pnpm typecheck`, якщо змінено `ts`/`vue`/`data`/`nuxt.config.ts`.
- **`pre-push`** (`scripts/pre-push.mjs`) — `pnpm generate` і перевірка `.output/public/{index,404}.html` та `CNAME` (як у CI).

Пропустити для WIP: `git commit --no-verify` / `git push --no-verify`. CI все одно перевірить усе.

## Перед відкриттям pull request

```bash
pnpm validate && pnpm lint && pnpm typecheck && pnpm generate
```

Хуки покривають більшість цього автоматично. `pnpm validate` докладно пояснює, що не так у даних (файл, категорія, грейд).

## Деплой

Кожен push у `main` запускає `.github/workflows/deploy.yml`: validate → lint → typecheck → `nuxi generate` → публікація на GitHub Pages. Pull request-и проходять ті самі перевірки без публікації. Кастомний домен береться з `public/CNAME`.
