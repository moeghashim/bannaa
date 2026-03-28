# AGENTS.md

## Project Overview
- Framework: Next.js 15 App Router with TypeScript and React 19.
- Package manager: `npm` using `package-lock.json`.
- Primary goal: keep the marketing site bilingual (`en`, `ar`) and maintain the existing visual direction unless a task explicitly changes it.

## Local Setup
- Install dependencies with `npm ci`.
- Run `npm run setup` to create `.env.local` from `.env.example` if needed.
- Start local development with `npm run dev`.
- Validate changes with `npm run check`.

## Environment
- Local secrets live in `.env.local`.
- The committed template is `.env.example`.
- Public browser-safe variables must use the `NEXT_PUBLIC_` prefix.
- Current public env contract:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement ID. Leave blank locally if analytics is not needed.

## Code Structure
- `app/`: route segments, layouts, and global CSS.
- `components/site/`: marketing page sections and page composition.
- `components/ui/`: reusable UI primitives.
- `lib/content.ts`: bilingual content source.
- `lib/i18n.ts`: locale definitions and direction helpers.
- `lib/design-system/`: shared token definitions.

## Editing Guidance
- Prefer small, isolated changes.
- Keep content changes centralized in `lib/content.ts` unless the task is structural.
- Keep locale behavior symmetric between English and Arabic routes.
- Do not hard-code secrets or environment-specific IDs in source files.

## Verification
- For UI or content changes, run `npm run lint`.
- For routing, config, or environment changes, run both `npm run lint` and `npm run build`.
- Prefer `npm run check` when you want the full verification pass.
