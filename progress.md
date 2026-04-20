# Progress

Chronological log of changes, grouped by date. Append-only: add new entries
at the **end** of today's section (or create a new `## YYYY-MM-DD` heading
at the bottom of the file if today's date isn't there yet). Never edit
prior entries. Format: `- <commit subject>` (cross-reference `git log` for
the exact hash).

## 2026-03-06

- Initial commit

## 2026-03-21

- Build Bannaa bilingual landing site and design system
- Restore larger header logo from preview

## 2026-03-23

- Add Google tag to root layout

## 2026-03-29

- Use logo icon as favicon

## 2026-04-19

- Redesign homepage to terminal/brutalist layout with theme toggle
- Use body font for Arabic plan-row text in pipeline terminal
- Add progress.md changelog and CLAUDE.md pre-commit instructions
- Adopt PI-Starter AGENTS conventions and switch progress.md to append-only
- Add new logo mark, DESIGN.md branding doc, and theme-aware BrandMark component
- Rewrite DESIGN.md in Stitch format and embed theme backgrounds in logo variants
- Replace logo mark with centered-block design matching deployed site, update favicon and DESIGN.md accordingly
- Add Arabic social-media profile and banner assets for TikTok, X, Facebook, Instagram, LinkedIn, and YouTube
- Rerender social assets with IBM Plex Sans Arabic via Chrome headless and bottom-align wordmark with logo
- Add dedicated Facebook page profile logo at 1080x1080
- Add dedicated YouTube channel profile logo at 1080x1080
- Swap Facebook and YouTube profile logos to icon-only (no wordmark) for circular crop legibility
- Default root redirect and html lang/dir to Arabic
- Add Arabic fallback to mono font stack so Arabic text in tags and eyebrows renders in Plex Arabic
- Explicitly switch mono-styled Arabic-bearing elements to the body font in RTL mode
- Track GA pageviews on locale navigation
- Remove PI-Starter scaffold and references
- Wrap analytics tracker in suspense
- Fix Arabic font for LANG: العربية indicator in the status bar
- Add mobile hamburger menu to collapse nav links and actions under 860px

## 2026-04-20

- Fix mobile nav overlap by raising specificity of hidden nav-right/left rules
- Add bilingual About, Privacy, and Terms pages with 10claws Inc. address and contact block
- Reframe footer copyright as "Part of 10claws.com" with a link to the parent site
