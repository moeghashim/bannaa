# Bannaa — Contributor Notes

## Pre-commit checklist

Before creating **any** commit in this repo:

1. **Append an entry to `progress.md`.** Put it at the top of today's date
   section. Create a new `## YYYY-MM-DD` heading if today's date doesn't
   exist yet. Format: `- <commit subject>` (match the subject line you'll
   use for the commit; no hash — cross-reference via `git log` when needed).
2. **Stage `progress.md` alongside your other changes** so each commit is
   self-describing.
3. **Commit author** must be:
   - Name: `Moe Ghashim`
   - Email: `mohanadgh@gmail.com`

   Use inline flags so the repo's stored git config stays untouched:
   ```
   git -c user.name="Moe Ghashim" -c user.email="mohanadgh@gmail.com" commit …
   ```

## Project quick-ref

- Next.js 15 + React 19 App Router, statically exported via `generateStaticParams`
- Bilingual: `/en` + `/ar`, content hand-authored in `lib/content.ts`
- Design system is CSS-first in `app/globals.css` (tokens + components, no Tailwind)
- Theme toggle lives in `components/site/site-header.tsx` — persisted in
  `localStorage` under `bannaa.theme`, applied via `data-theme="light"` on `<html>`

## Commands

- `npm run dev` — local dev server
- `npm run build` — static production build
- `npm run lint` — ESLint (ignores `.next/**` and `PI-Starter/**`)
