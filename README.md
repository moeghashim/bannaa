# Bannaa

Bilingual Next.js site with Arabic (`/ar`) and English (`/en`) routes.

## Development

```sh
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` before releasing changes. Use
`npm run start` to serve a completed production build locally.

## Consultation configuration

Set these optional variables in `.env.local` for local development or in the
hosting provider's environment settings for deployments:

| Variable | Behavior |
| --- | --- |
| `CONSULTATION_BOOKING_URL` | Adds a scheduling link to the consultation dialog. Only values beginning with `https://` are accepted; other values are ignored. |
| `CONSULTATION_EMAIL` | Recipient for consultation requests. Defaults to `request@bannaa.ai` when unset. |

The consultation form opens the visitor's email application with a prepared
message. The visitor must send it themselves. The website neither sends nor
stores consultation requests. Rebuild and redeploy after changing configuration
so the statically rendered consultation pages receive the new values.

## Community preview

Community posts and tutorials are publicly readable. Posting, replying, and
reactions currently open an invitation prompt; membership and shared posting
are not connected to a backend yet. Sample member activity is labeled as
illustrative.

The composer demonstration saves drafts and attachments in the browser's
IndexedDB. Previewing a draft does not upload or publish it. The obsolete demo
signup/session API and its `COMMUNITY_AUTH_SECRET` setting are no longer used.
Real membership must enforce invitation access on the server when implemented.

## Project guidance

- [AGENTS.md](AGENTS.md): development and contribution rules.
- [DESIGN.md](DESIGN.md): brand assets, bilingual layout, and visual conventions.
- `lib/content.ts`: shared bilingual copy.
