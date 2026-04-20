# AGENTS.md

> Mirror of [CLAUDE.md](CLAUDE.md). When editing either file, update both.

## Project Overview

- Framework: Next.js 15 App Router with TypeScript and React 19.
- Package manager: `npm` (using `package-lock.json`).
- Primary goal: keep the marketing site bilingual (`/en`, `/ar`) and maintain the existing visual direction unless a task explicitly changes it.

## Local Setup

- Install dependencies with `npm ci`.
- Start local development with `npm run dev`.
- Static production build with `npm run build`.

## Code Structure

- `app/` — route segments, layouts, and `globals.css` (CSS-first design system).
- `app/[locale]/` — bilingual `/en` and `/ar` routes validated via `lib/i18n.ts`.
- `components/site/` — marketing page sections and page composition.
- `lib/content.ts` — single source of truth for bilingual copy.
- `lib/i18n.ts` — locale definitions and direction helpers.

## Design

All branding (logo files, color tokens, typography, theme system, RTL
rules, iconography) is documented in [`DESIGN.md`](DESIGN.md). Keep it in
sync when you add or replace brand assets.

## Code Quality

- No `any` types unless absolutely necessary.
- No dynamic or inline imports (no `await import(…)`, no `import(pkg).Type` in type positions). Always use top-level imports.
- Check `node_modules` for external API type definitions instead of guessing.
- Never remove functionality to silence type errors — upgrade dependencies instead.
- Always ask before removing functionality that appears intentional.

## Style

- No emojis in commit messages or code comments.
- Keep changes small and isolated.
- Keep content changes centralized in `lib/content.ts` unless the task is structural.
- Keep locale behavior symmetric between English and Arabic routes.
- Do not hard-code secrets or environment-specific IDs in source files.

## Verification

- Run `npm run lint` after any code change.
- Run `npm run build` for routing, config, or environment changes.
- Fix all errors before committing.

## Git

- Never commit unless explicitly requested.
- Keep commit subjects as normal, human-readable summaries (e.g. `Add theme toggle to status bar`).
- Do not replace commit messages with prompt text.
- `progress.md` is **append-only**: only add new entries at the end of today's section (or create a new `## YYYY-MM-DD` heading at the bottom of the file if today's date isn't there yet). Never edit prior entries.

## Pre-commit checklist

Before creating **any** commit in this repo:

1. **Append an entry to `progress.md`** at the end of today's section. Format: `- <commit subject>` (match the commit subject you're about to use; no hash — cross-reference via `git log` when needed).
2. **Stage `progress.md` alongside your other changes** so each commit is self-describing.
3. **Commit author** must be:
   - Name: `Moe Ghashim`
   - Email: `mohanadgh@gmail.com`

   Use inline flags so the repo's stored git config stays untouched:
   ```
   git -c user.name="Moe Ghashim" -c user.email="mohanadgh@gmail.com" commit …
   ```

## Commands

- `npm run dev` — local dev server
- `npm run build` — static production build
- `npm run lint` — ESLint (ignores `.next/**`)
