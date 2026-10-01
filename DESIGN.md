---
version: alpha
name: Bannaa
description: Arabic-first AI learning and building community, using warm cream, forest ink, sage, and the approved character head.
colors:
  primary: "#243D31"
  secondary: "#647065"
  tertiary: "#EFCFCB"
  neutral: "#FAF8F2"
  charcoal: "#111111"
  white: "#FFFFFF"
  electricBlue: "#2563EB"
  lightGray: "#F5F6F8"
  warmCream: "#F6EFE5"
  softBeige: "#EDE2D3"
  peach: "#E8A48B"
  blushPink: "#EFCFCB"
  sageMist: "#DCE6DE"
  textPrimary: "#243D31"
  textSecondary: "#647065"
  textMuted: "#8A94A6"
  panelCharcoal: "#111111"
  panelInk: "#FFFFFF"
typography:
  displayHero:
    fontFamily: DM Sans
    fontSize: 6.5rem
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  displaySection:
    fontFamily: DM Sans
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  displayCard:
    fontFamily: DM Sans
    fontSize: 2rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  bodyMd:
    fontFamily: Baloo Bhaijaan 2
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  bodyLg:
    fontFamily: Baloo Bhaijaan 2
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  monoUi:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 56px
  heroY: 72px
components:
  page:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal}"
    typography: "{typography.bodyMd}"
  buttonPrimary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.bodyMd}"
    rounded: "{rounded.sm}"
    padding: 10px
  buttonSecondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal}"
    typography: "{typography.bodyMd}"
    rounded: "{rounded.sm}"
    padding: 10px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.sm}"
    padding: 17px
  warmCard:
    backgroundColor: "{colors.warmCream}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.md}"
    padding: 24px
  tag:
    backgroundColor: "{colors.white}"
    textColor: "{colors.secondary}"
    typography: "{typography.monoUi}"
    rounded: "{rounded.pill}"
    padding: 4px
  charcoalPanel:
    backgroundColor: "{colors.panelCharcoal}"
    textColor: "{colors.panelInk}"
    typography: "{typography.monoUi}"
    rounded: "{rounded.sm}"
    padding: 12px
  videoThumbnail:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.charcoal}"
    typography: "{typography.displayCard}"
    rounded: "{rounded.sm}"
    padding: 16px
  resourcePanel:
    backgroundColor: "{colors.softBeige}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.md}"
    padding: 24px
  communityPanel:
    backgroundColor: "{colors.sageMist}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.md}"
    padding: 24px
  warmAccent:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: 8px
  mutedText:
    backgroundColor: "{colors.white}"
    textColor: "{colors.textMuted}"
    typography: "{typography.bodyMd}"
    rounded: "{rounded.none}"
    padding: 0px
---

## Current identity

The approved sage character identity is authoritative across all routes. Use cream canvas `#FAF8F2`, forest ink `#243D31`, sage panels `#E9EDDF`, sage accent `#778768`, and muted green `#647065`. Typography is DM Sans for English and Baloo Bhaijaan 2 for Arabic.

The official mark is the character head in `public/assets/launch/logo.png`. Current icon and bilingual lockup downloads live in `public/assets/brand/`; browser icons use the simplified small-size face. The downloadable lockups match the on-site orientation: the English lockup places the character before the wordmark, and the Arabic lockup places it to the right of the wordmark. Both are cropped to their content with matching margins. Never invert the character image on dark backgrounds. Preserve its proportions, colors, and clear space. Transparent scene artwork supports content rather than occupying the main page.

Secondary routes use `app/identity.css` through `SiteShell` or the legal page wrapper. Keep content, forms, navigation, and locale switching intact. The bilingual brand guide documents current artwork, downloads, color values, typography, and usage. The former Blobatar playground and its dependencies have been removed.

### Shared homepage footer

`SiteFooter` renders the same compact logo, localized footer line, social/contact links, and grouped directory on the homepage and secondary pages. Shared styling lives in `app/site-footer.css`; keep changes centralized so both layouts remain identical.

The Spectrum overview uses the official character head through `BrandMark` in all four stages. Stage selection and capability-map nodes remain interactive; the former stage mascot SVGs have been removed.

## Historical design notes

Earlier black-mark and electric-blue rules below are retained as history and are superseded by the current identity above.


## Overview

Bannaa is an Arabic-first AI community for the Arab world. The brand should feel clean, serious, optimistic, and builder-oriented: practical enough for founders and operators, warm enough for community, and energetic enough for AI-native creation.

The new guideline replaces the previous lime terminal identity. The site should now lead with white space, light-gray structure, electric-blue actions, and warm peach/blush/cream surfaces. Charcoal is still allowed for the logo, text, and occasional functional panels, but there is no dark-mode theme.

## Logo System

Spectrum stage illustrations use transparent, black Blobatar variants in
public/assets/brand/spectrum: unsure for Prerequisites, happy for Basics,
idle for Advanced, and smug for Proficient. They share the approved round logo seed and geometry
and eye-only expression system; no white tile sits behind the character.

Use the supplied SVG assets in [public/assets/brand](/Users/moe/bannaa/public/assets/brand):

- [icon.svg](/Users/moe/bannaa/public/assets/brand/icon.svg) is the primary standalone web mark and uses the round Blobatar mark.
- [arabic_logo.svg](/Users/moe/bannaa/public/assets/brand/arabic_logo.svg) is the approved Arabic lockup reference and uses the round Blobatar mark next to the Arabic wordmark.
- [brand_guideline.png](/Users/moe/bannaa/public/assets/brand/brand_guideline.png) is the source guideline image.
- [app/icon.svg](/Users/moe/bannaa/app/icon.svg) is the Next.js SVG favicon and mirrors the standalone icon geometry. `app/favicon.ico` supplies 16px, 32px, and 48px browser fallbacks; `app/apple-icon.png` supplies the 180px Apple touch icon. All use the approved round black mark.

The standalone icon is a black round Blobatar with two white capsule eyes. It is generated from `blobatar` with the round shape trait pinned, a black body, and white eyes. Do not add a detached square, mouth, tail, gradient, shadow, or extra facial features. Do not stretch, rotate, combine English and Arabic wordmarks into one lockup, or add effects.

Clear space around the icon should be at least one quarter of the icon width on all sides.

### Expression Character

The round Blobatar is the current direction for the Banna mark. The black idle round version is the official logo, and the wider expression set is for playful moments, social content, and product empty states.

Expression avatars should use the same pinned round Blobatar traits with eyes only. The official mark is black; optional expression variants may use the extended brand colors. Do not add mouths, detached squares, tails, gradients, or extra facial features.

Supported Blobatar expressions include idle, happy, sad, mad, surprised, wink, sleepy, smug, unsure, scared, love, shy, and sick. The shared main mark uses Blobatar’s native `animate="always"` CSS motion (breathing, bobbing, blinking, and gaze) in both locales, including touch devices. Respect `prefers-reduced-motion`. Traits and colors are pinned in `lib/brand.ts`; static downloads and the favicon use matching round geometry. Spectrum stage illustrations use the approved round shape with stage-specific eye expressions.

## Colors

Use a single light palette:

- **Charcoal `#111111`** for primary text, logo, and high-contrast utility panels.
- **White `#FFFFFF`** for the page canvas and clean content areas.
- **Electric Blue `#2563EB`** for primary CTAs, active filters, links, and section markers.
- **Light Gray `#F5F6F8`** for neutral cards and low-bandwidth content surfaces.
- **Warm Cream `#F6EFE5`** and **Soft Beige `#EDE2D3`** for warm section backgrounds and subtle separators.
- **Peach `#E8A48B`**, **Blush Pink `#EFCFCB`**, and **Sage Mist `#DCE6DE`** for supporting accents, thumbnails, illustrations, and community moments.

Avoid the old electric lime and industrial orange accents. Avoid introducing a dark theme toggle.

## Typography

English display typography uses **Inter**. Arabic typography uses **Baloo Bhaijaan 2** for both display and body where Arabic text appears. **JetBrains Mono** is limited to small technical metadata and labels.

Arabic text must never be forced into JetBrains Mono. Keep RTL and LTR layouts symmetric through logical CSS properties.

## Layout

The Spectrum now uses four selectable capability stages: Prerequisites, Basics,
Advanced, and Proficient. Prerequisites remain entry requirements, not teaching.
Each stage shows concrete capabilities and evidence of readiness. A shared, interactive example illustrates message exchange, agent-produced work, tool calls and deployment, and measured improvement. Step buttons and a next-step control reveal concrete outputs; the final stage feeds evaluation back into the improvement process. Keep the flow right to left in Arabic, stack it vertically on mobile, and disable transitions for reduced motion. Proficient
focuses on operating coordinated agents and measured improvement. Use gray,
blue, green, and berry accents with keyboard-accessible stage tabs.

The primary learning journey is the Agent Spectrum: prerequisites (entry requirements, not taught), Basics (first taught stage), and Advanced (second taught stage). The homepage, curriculum, and roadmap share this progression. The bilingual /spectrum page presents expandable topics and practical readiness or project outcomes. Use a gray, blue, and green three-column progression on desktop, ordered right to left in Arabic, and a vertical sequence on mobile. Keep the official logo and Baloo Bhaijaan 2 typography.

Use a mobile-first responsive layout with a maximum content width of `1440px` and a fixed `24px` outer gutter. Keep pages fast by preferring CSS, SVG, and structured content over heavy image dependencies.

The current site structure is:

- Homepage with hero, mission, three tracks, content preview, community, and CTA.
- Mission/about page.
- Tracks/learn page with Founder Skill Set, Building in the Age of AI, and Builder Skill Set.
- Track roadmap page with Done, Doing, and To do status columns for each track.
- Community page; see "Community layout preview" below.
- Content hub with filterable videos, shorts, X threads, and newsletters.
- TikTok and YouTube channel section for sourcing short and long-form video posts.
- Resources, join/get-started, and contact/partnership pages.
- Brand guideline page displaying the supplied visual identity reference, downloadable logo assets, expression-square examples, and practical applications.

## Components

**Header:** Use the round Blobatar SVG mark through `BrandMark`, followed by the localized wordmark: `بنّاء` in Arabic and `Bannaa` in English. The language switcher stays visible on every page. No theme toggle.

**Buttons:** Primary buttons are electric blue with white text. Secondary buttons are white or transparent with a neutral stroke and charcoal text.

**Cards:** Cards should be light gray or warm cream with fine borders. Use flat color changes for hover states; avoid shadows and ornamental depth.

**Video Thumbnails:** Video posts in the content hub should show a thumbnail area. Use light, brand-colored generated thumbnails by default, then replace with real video stills when available.

**Video Channels:** Keep TikTok and YouTube links in the content system, not hard-coded in page markup. YouTube videos should render as lightweight fetched thumbnail cards from the public channel feed. TikTok should use the official profile embed so the account can load current public videos without a private API key.

**Expression Avatar:** Use the black round Blobatar as the official logo. Use other colored eye-only Blobatar expressions for playful brand moments. Keep them inline SVG/CSS where possible instead of adding heavy image files. Motion should be ambient and restrained: blink, bounce, tilt, or sleepy drift.

**Community:** The WhatsApp preview page has been replaced by the public community feed; see "Community layout preview" below. The unused demo signup panel and session APIs have been retired. The current composer stores drafts locally in IndexedDB; real membership and shared posting remain future backend work. See README.md for setup and preview limitations.

## Do's and Don'ts

Do:

- Keep bilingual content centralized in [lib/content.ts](/Users/moe/bannaa/lib/content.ts).
- Keep Arabic as the default route and preserve full English translations.
- Use [public/assets/brand/icon.svg](/Users/moe/bannaa/public/assets/brand/icon.svg) for the official round Blobatar web mark.
- Use electric blue for primary action and navigation emphasis.
- Keep the site light, fast, and low-bandwidth friendly.

Don't:

- Reintroduce dark mode.
- Use the old lime accent.
- Add a detached square, mouth, tail, gradient, or extra facial features to the official mark.
- Distort, rotate, shadow, or combine logo lockups incorrectly.
- Force Arabic into mono typography.
- Hard-code content directly in route components when it belongs in the content system.

### Builder landscape and software factory

The homepage replaces the homepage grid background with an ivory architectural landscape and a separate blue ceramic cube. Generated assets and prompts are in `public/assets/hero/`. The scene stays still while the cube gently floats and its shadow changes. A localized pause control stops the motion; reduced-motion preferences disable it. Keep the existing hero content and links readable over the scene.

The hero's terminal is replaced with a miniature illustrated software factory. A conveyor feeds a robotic assembly station, which connects to a restaurant or fleet depot. Visitors choose the business and inspect four stages; the machine, kitchen steam, and delivery vehicles animate without code or screen imagery. Pause and reduced-motion support preserve a fully readable static illustration. The original terminal component remains in the repository.

### Round mark reference settings

Use Blobatar 2.7 and its matching React renderer to match the approved editor reference. Preserve the editor seed `alain00` for unpinned axes (body size 0.367, eye size 0.937, eye squareness 0.664, separation 0.842, lean 0.002, gaze x 0.895, gaze y 0.296). Pin round shape at 0.11, body proportion at 0.095, body squareness at 0.832, and eye roundness at 0.617. Override the reference ink/hue with the requested black body and white eyes. The main mark continues to animate in always mode.

### Character playground

The bilingual brand page includes a character lab with the approved round seed and geometry, native Blobatar expressions, custom body/eye/accessory/backdrop colors, hats, laptop and thinking scenes. Accessories belong to playful character variants, not the official logo. Preview motion is optional and respects reduced motion. SVG and 1000px PNG exports share the same standalone SVG composition with an optional transparent background; exports are static. Merchandise examples use SVG illustrations with the current mark.

## Approved production redesign — 2026-09-29

This revision supersedes the white/electric-blue homepage and black official mark described above. The homepage uses the approved public concept: warm cream `#faf8f2`, forest text `#243d31`, muted green `#647065`, sage panels `#e9eddf`, pale peach/oat editorial cards, and a forest mission panel. Typography is DM Sans for English and Baloo Bhaijaan 2 for Arabic. Scoped styles in `app/launch.css` preserve the existing inner-page layouts.

The official header/footer mark and browser icons now use the sage plush character's head from `public/assets/launch/logo.png`. `BrandMark` uses the same asset on existing routes. The older Blobatar playground has since been removed; its expressions do not define the current official identity.

The compact, unboxed homepage animation uses the three-cell transparent `scenes.webp` asset for building, imagining, and vibing. React manages scene selection, timed playback, pause, reduced-motion preference, and page visibility. Keep the artwork on the cream canvas with no card background or shadow. Both locales include accessible stage tabs and native lesson dialogs.

The ambition is 100 small Arab companies. Homepage copy lives in `launchCopy` in `lib/content.ts`. Existing routes, consultation forms, analytics, and footer navigation remain available. This release does not add the proposed community platform.

### Small-size character favicon

Browser icons use a simplified sage-and-cream character face with a dark outline and larger eyes, optimized for tiny tabs. The plush on-page logo stays unchanged. `app/favicon.ico` contains 16, 32, 48, 64, 128, and 256px frames; `app/icon.svg` embeds the 256px image; `app/apple-icon.png` is 180px. Downloadable PNGs are at `public/assets/brand/favicon-character.png` (512px) and `favicon-32.png`.

### Community layout preview

The separate bilingual community page uses the homepage cream, forest green, sage, and restrained peach palette. It has a main update feed and a project sidebar, stacked on mobile, with direction mirrored for Arabic. The homepage includes a compact three-card community snapshot beneath the learning path and a Community navigation link. The current layout contains explicitly illustrative content and a device-local draft composer, not connected membership or shared posting. Posts and their attached images and videos are publicly readable. Creating posts, replies and reactions requires a signed-in invited member. Server and database write permissions must enforce active membership once the backend is connected. The local preview displays an invitation prompt for interactions and explicitly offers a non-publishing composer demonstration.

The community composer supports up to four validated raster images (5 MB each), optional image descriptions, and a validated YouTube video link. Attachment drafts are stored locally in IndexedDB. The feed-preview action is explicitly local to the browser session; it does not upload or publish content. YouTube playback begins only after a click and uses a fixed embed host. Closing the composer removes its video player.

Tutorials and member updates share one feed. Per-post stage tags use the homepage learning stages (Get ready, The basics, Build agents, Go further). Selecting a tag filters this same feed and reveals a pinned Start here guide with suggested lesson steps; All posts clears the stage selection. Bannaa-authored starter tutorials carry a distinct tutorial badge and open dedicated full lesson pages. Reading remains public; lesson participation uses the invitation prompt. Category tabs and sorting rows remain removed.

Reading now uses dedicated localized community article routes rather than dialogs, for both member posts and tutorials. Feed text, read links, project links and pinned-guide links open these pages. A learning-tag panel appears in the sidebar (left in Arabic, mirrored in English); selected stages are stored in the URL query and article tags return to the matching feed. Dialogs remain only for writing previews and invitation prompts.

The shared footer places the linked 10claws credit on the same row as the final directory links, at the outer left in Arabic and outer right in English. The retired Hub, Blog index, and Resources routes redirect to the community; legacy article routes have been removed. Sample post dates remain illustrative until publication data comes from the backend.

### Video job application preview

The bilingual jobs preview uses the shared SiteShell, cream canvas, forest ink,
sage panels, and a restrained peach accent for the second role. Each imaginary
role has a separate introduction video and a browser-local video reply with
email only. Sample videos in `public/assets/jobs/` use the approved character
head, localized typography, synthetic narration, and matching VTT captions.
All pages visibly identify the roles as samples and submissions as closed.
