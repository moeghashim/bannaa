---
version: alpha
name: Banna
description: Bilingual Arabic-first platform for building lean AI-powered micro-companies, with a dense terminal-brutalist visual identity.
colors:
  primary: "#0a0a0a"
  secondary: "#9a9a93"
  tertiary: "#d4ff3a"
  neutral: "#f2f2ef"
  darkBg: "#0a0a0a"
  darkSurface: "#111111"
  darkSurfaceRaised: "#161616"
  darkLine: "#242424"
  darkLineStrong: "#2e2e2e"
  darkText: "#f2f2ef"
  darkTextDim: "#9a9a93"
  darkTextMuted: "#6b6b66"
  darkAccent: "#d4ff3a"
  darkAccentInk: "#0a0a0a"
  lightBg: "#ffffff"
  lightSurface: "#f6f6f4"
  lightSurfaceRaised: "#eeece6"
  lightLine: "#e6e4dc"
  lightLineStrong: "#c9c6bb"
  lightText: "#0e0e0c"
  lightTextDim: "#4a4740"
  lightTextMuted: "#8a8677"
  lightAccent: "#ff6a3d"
  lightAccentInk: "#ffffff"
  warning: "#ff6a3d"
  warningLight: "#c94a1f"
  ok: "#8ae66e"
  okLight: "#2f6d2d"
  terminalBg: "#0d0d0d"
  terminalInk: "#f2f2ef"
typography:
  displayHero:
    fontFamily: Rubik
    fontSize: 8rem
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  displaySection:
    fontFamily: Rubik
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  displayCard:
    fontFamily: Rubik
    fontSize: 2.25rem
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  bodyMd:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  bodyLg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0px
  monoUi:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
  monoCaps:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: 0px
  sm: 2px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 56px
  heroY: 72px
  ctaY: 80px
components:
  pageDark:
    backgroundColor: "{colors.darkBg}"
    textColor: "{colors.darkText}"
    typography: "{typography.bodyMd}"
  pageLight:
    backgroundColor: "{colors.lightBg}"
    textColor: "{colors.lightText}"
    typography: "{typography.bodyMd}"
  buttonPrimaryDark:
    backgroundColor: "{colors.darkAccent}"
    textColor: "{colors.darkAccentInk}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 10px
  buttonPrimaryLight:
    backgroundColor: "{colors.lightAccent}"
    textColor: "{colors.lightAccentInk}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 10px
  buttonOutlineDark:
    backgroundColor: "{colors.darkBg}"
    textColor: "{colors.darkText}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 10px
  cardDark:
    backgroundColor: "{colors.darkSurface}"
    textColor: "{colors.darkText}"
    rounded: "{rounded.sm}"
    padding: 17px
  cardLight:
    backgroundColor: "{colors.lightSurface}"
    textColor: "{colors.lightText}"
    rounded: "{rounded.sm}"
    padding: 17px
  tagDark:
    backgroundColor: "{colors.darkBg}"
    textColor: "{colors.darkTextDim}"
    typography: "{typography.monoUi}"
    rounded: "{rounded.pill}"
    padding: 4px
  tagLight:
    backgroundColor: "{colors.lightBg}"
    textColor: "{colors.lightTextDim}"
    typography: "{typography.monoUi}"
    rounded: "{rounded.pill}"
    padding: 4px
  terminalPanel:
    backgroundColor: "{colors.terminalBg}"
    textColor: "{colors.terminalInk}"
    typography: "{typography.monoUi}"
    rounded: "{rounded.sm}"
    padding: 12px
---

## Overview

Banna is a bilingual, Arabic-first platform and community for helping Arab youth build lean, AI-powered micro-companies of 1 to 10 people. Its visual identity is Terminal Brutalism: a dense operator-console interface with hard edges, high-contrast panels, visible grid structure, monospace metadata, and a single forceful accent per theme.

The site should feel functional, sharp, and engineered. It is a marketing surface, but not a soft landing page. The first impression is a live system: status ribbons, route-like terminal chrome, pipeline stages, hard rules, compact spacing, and bilingual content that mirrors cleanly between `/ar` and `/en`.

Preserve this direction unless a task explicitly asks for a brand change. New screens should look like they belong beside the existing hero terminal, mission metrics, track cards, content hub, community console, CTA form, and sticky status bar.

## Colors

The palette uses two theme maps with matching roles. Dark mode is the default; light mode is enabled by setting `data-theme="light"` on the `html` element. All runtime values live in [app/globals.css](/Users/moe/bannaa/app/globals.css).

Dark theme:

- **Primary / darkBg (`#0a0a0a`)** is the page canvas and dark accent ink.
- **darkSurface (`#111111`)** is the raised surface for cards, strips, nav states, and CTA bands.
- **darkSurfaceRaised (`#161616`)** is the recessed art well behind track glyphs.
- **darkLine (`#242424`)** and **darkLineStrong (`#2e2e2e`)** define structure with 1px hairlines and interactive borders.
- **darkText (`#f2f2ef`)**, **darkTextDim (`#9a9a93`)**, and **darkTextMuted (`#6b6b66`)** are the three text levels.
- **darkAccent (`#d4ff3a`)** is electric lime. It is the only dark-mode accent and should be reserved for primary actions, active terminal phases, accent pips, logo block fill, hero emphasis, and key data marks.

Light theme:

- **lightBg (`#ffffff`)** is the page canvas.
- **lightSurface (`#f6f6f4`)** and **lightSurfaceRaised (`#eeece6`)** replace dark surfaces without changing layout behavior.
- **lightLine (`#e6e4dc`)** and **lightLineStrong (`#c9c6bb`)** are warm structural borders.
- **lightText (`#0e0e0c`)**, **lightTextDim (`#4a4740`)**, and **lightTextMuted (`#8a8677`)** carry the same text hierarchy as dark mode.
- **lightAccent (`#ff6a3d`)** is industrial orange. It replaces lime in light mode and should remain the only light-mode page accent.

Terminal panels keep **terminalBg (`#0d0d0d`)** and **terminalInk (`#f2f2ef`)** in both themes because they represent machinery, not normal page content. **warning**, **warningLight**, **ok**, and **okLight** are terminal indicators only; do not promote them into general accent colors.

## Typography

The app loads Rubik, IBM Plex Sans Arabic, and JetBrains Mono through `next/font/google` in [app/layout.tsx](/Users/moe/bannaa/app/layout.tsx). CSS exposes them as `--f-display`, `--f-body`, and `--f-mono`.

- **Rubik** is the display face. Use it for hero headlines, section titles, oversized statistics, and prominent card headings. Keep it heavy, compact, and tightly tracked. Current headline treatments use `font-weight: 800`, `letter-spacing: -0.02em`, and line heights around `0.9` to `0.95`.
- **IBM Plex Sans Arabic** is the body and UI face. It is mandatory for Arabic copy and safe for bilingual text. Use it for paragraphs, buttons, form inputs, navigation labels, legal pages, and any monospace-styled container that may receive Arabic content.
- **JetBrains Mono** is for technical metadata only: status bars, terminal chrome, stat sublabels, labels, timestamps, coordinates, and English-only eyebrow text. It should be small, often uppercase, and tracked at `0.1em` to `0.14em`.

RTL routes must not force JetBrains Mono onto Arabic strings. The stylesheet already overrides several mono-styled elements under `[dir="rtl"]`; keep that behavior symmetric when adding new bilingual elements.

## Layout

Use a maximum content width of `1440px` with a fixed `24px` outer gutter. The layout should feel compact and systematic, not spacious or editorial.

The hero uses a 12-column grid with a 7/5 split between copy and the pipeline terminal. Content sections use simple 3-column or 4-column grids, then collapse to one column under `860px`. Use CSS logical properties such as `border-inline-start`, `inset-inline-end`, and `margin-inline-start` so English and Arabic routes mirror without duplicate styles.

Section headers follow the established structure: a small technical eyebrow, a heavy two-line display heading, and a compact right-side support block with optional underlined link. Separate major regions with explicit 1px rules rather than relying on empty whitespace.

Spacing is intentionally dense:

- Page gutter: `24px`.
- Grid gaps: usually `16px`, with `32px` in the hero and footer.
- Section header top padding: `56px`.
- Hero vertical padding: `72px` top and `100px` bottom.
- CTA vertical padding: `80px`.
- Card padding: `calc(20px * var(--density))`, where density is `0.85`.

## Elevation & Depth

Avoid shadows, glass, soft blurs, neumorphism, and layered floating cards. Banna expresses hierarchy through flat color steps and stroke contrast:

- Page canvas: `--bg`.
- Raised surface: `--bg-2`.
- Recessed/art surface: `--bg-3`.
- Hairline border: `--line`.
- Interactive border: `--line-2`.

Hover states should be mechanical: border color steps up, text brightens, or accent glow appears around a primary button. Do not lift, scale, or rotate cards on hover.

The only ambient depth is the page-level radial accent wash behind the hero. Keep it subtle and tied to `--accent`; do not introduce decorative blobs, extra gradients, or atmospheric imagery.

## Shapes

The default corner radius is `2px`. Treat most UI as squared-off: buttons, cards, terminal panels, nav states, form fields, art frames, icon boxes, and number tiles.

Pills are allowed only for tag chips and tiny metadata badges. They use `999px` radius with a 1px border and usually include a 5px accent pip.

The logo mark is a geometric 40x40 SVG: a 36-unit square frame with 4-unit stroke and a centered 12-unit accent block. The mark must remain square, flat, and two-color.

## Components

**Status Bar:** A sticky utilitarian ribbon at the top of the page. It uses 11px mono text, dimmed foreground, a live clock, theme toggle, and a small accent dot with a subtle halo.

**Navigation:** A flat bar beneath the status bar with brand mark, localized wordmark, anchor links, language switch, ghost CTA, and primary CTA. Active or hovered links use surface fill and a stronger border.

**Buttons:** Primary buttons are filled with the active accent and use the matching accent-ink color. Outline buttons stay transparent with a 1px border. Ghost buttons are tertiary and use dim text. Keep all button corners at `2px`; do not create rounded or pill CTAs.

**Cards:** Cards are flat `--bg-2` surfaces with 1px borders, `2px` radius, compact padding, and a bracket-style accent corner notch. On hover, only the border color changes.

**Terminal Panels:** Terminals are dark in both themes. They use a chrome row, traffic-light dots, four pipeline labels, crossfading absolute stages, and a status row. Keep terminal Arabic text in the body face when needed.

**Track Glyphs:** Track cards use simple SVG diagrams inside a 4:3 art well. The visuals are abstract but functional: bars for foundations, node networks for agents, waveform bars for media. Use `--accent` sparingly for the key mark in each glyph.

**Content Hub:** Filter controls are compact segmented buttons, not large tabs. Content cards must expose format, duration, title, description, and track tag so videos, shorts, X threads, and newsletters can grow from the same structured content source.

**Community Console:** Community signup and posts use a terminal panel, not a social-feed aesthetic. The simple signup requires name and email at minimum and creates a signed HTTP-only session cookie through Next route handlers. Production deployments must provide `COMMUNITY_AUTH_SECRET`; the post composer should remain compact and is ready to connect to a persistent database layer.

**CTA Form:** The email field and submit button form one stroked rectangle. The input is transparent, borderless inside the shared outline, and compact. Do not split it into separate floating controls.

**Legal Pages:** Legal/about pages are narrower and calmer, but still inherit the same type, color, and rule system. They should not become a separate editorial template.

## Do's and Don'ts

Do:

- Keep content changes centralized in [lib/content.ts](/Users/moe/bannaa/lib/content.ts) unless the task is structural.
- Keep `/ar` and `/en` behavior symmetric.
- Use logical CSS properties so RTL and LTR layouts mirror naturally.
- Use a single accent per theme and make it mean interaction, state, or identity.
- Preserve the terminal-console density: visible rules, compact type, explicit metadata, and flat surfaces.
- Keep brand assets in [public/](/Users/moe/bannaa/public) and update this file when adding or replacing them.
- Keep the three learning tracks expandable: Founder Skill Set, Building in the Age of AI, and Builder Skill Set.

Don't:

- Add extra accent colors, soft gradients, decorative blobs, heavy shadows, rounded marketing cards, or glass effects.
- Use JetBrains Mono for Arabic strings.
- Use pill shapes for primary controls.
- Introduce stock imagery or decorative illustration in place of the current system diagrams.
- Create English-only layout assumptions; every new section must work in RTL.
- Hard-code theme colors outside the existing CSS token system.

## Brand Assets

Logo and social assets are part of the design system even though they are file assets rather than token values. Existing filenames still use the historical `bannaa` spelling; the visible English wordmark is now `Banna`, while Arabic remains `بنّاء`.

| File | Purpose |
| --- | --- |
| [public/bannaa-logo-dark.svg](/Users/moe/bannaa/public/bannaa-logo-dark.svg) | Standalone dark-theme logo preview. |
| [public/bannaa-logo-dark.png](/Users/moe/bannaa/public/bannaa-logo-dark.png) | 512x512 raster dark logo. |
| [public/bannaa-logo-light.svg](/Users/moe/bannaa/public/bannaa-logo-light.svg) | Standalone light-theme logo preview. |
| [public/bannaa-logo-light.png](/Users/moe/bannaa/public/bannaa-logo-light.png) | 512x512 raster light logo. |
| [app/icon.svg](/Users/moe/bannaa/app/icon.svg) | Next.js favicon, using the dark variant. |
| [components/site/brand-mark.tsx](/Users/moe/bannaa/components/site/brand-mark.tsx) | Inline SVG brand mark that inherits `currentColor` for the frame and `var(--accent)` for the center block. |

Minimum rendered logo size is `20px`. Clear space should be at least one inner-block height on every side. Do not distort the mark, recolor the center block outside the two defined theme accents, add outlines, add shadows, or introduce a third color.

Social media PNGs live in [public/social/](/Users/moe/bannaa/public/social). They share the dark canvas, faint grid, logo mark, Arabic wordmark, and technical metadata. Treat them as generated outputs; if the brand changes, regenerate the whole set instead of manually editing one platform in isolation.
