# Bannaa

Marketing site built with Next.js 15, React 19, and TypeScript. The repo is structured to work cleanly in Codex on any machine without committing secrets.

## Prerequisites

- Node.js 22 LTS
- npm

## Local Development

1. Clone the repository.
2. Use the pinned Node version:

```bash
nvm use
```

3. Install dependencies:

```bash
npm ci
```

4. Bootstrap the local environment:

```bash
npm run setup
```

5. Add any real values to `.env.local`.
6. Start the app:

```bash
npm run dev
```

## Environment Variables

The app currently uses:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement ID used by the root layout. If this is empty, analytics scripts are skipped.

Secrets and machine-specific values should stay in `.env.local`, not in git. The committed `.env.example` file defines the contract for new machines and for Codex sessions on other devices.

## Using Codex On Another Device

Recommended workflow:

1. Clone the repo on the other device.
2. Run `nvm use`.
3. Run `npm ci`.
4. Run `npm run setup`.
5. Restore the actual secret values in `.env.local` from a secure source.

Good ways to restore secrets:

- Use a password manager such as 1Password or Bitwarden and copy the values into `.env.local`.
- If the project is deployed on Vercel, pull the environment with:

```bash
npx vercel env pull .env.local
```

- If you manage secrets elsewhere, export them from that provider and recreate `.env.local` locally.

Avoid sending raw `.env.local` files through chat, email, or git commits. If you must transfer secrets directly between devices, use an encrypted channel you already trust.

## Codex Repo Guidance

Codex reads the repo-level [AGENTS.md](/Users/moeghashim/Bannaa/AGENTS.md). Keep that file updated when the workflow, commands, or environment contract changes.

Before merging feature work, run:

```bash
npm run check
```

## Project Structure

- `app/`: routes, layouts, and global styles
- `components/site/`: marketing sections
- `components/ui/`: UI primitives
- `lib/content.ts`: bilingual site content
- `lib/i18n.ts`: locale helpers
- `lib/env.ts`: environment access
