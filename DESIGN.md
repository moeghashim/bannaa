---
version: alpha
name: Bannaa
description: Arabic-first AI community brand for the Arab world, using a clean light system with electric blue and warm human accents.
colors:
  primary: "#2563EB"
  secondary: "#596274"
  tertiary: "#EFCFCB"
  neutral: "#F5F6F8"
  charcoal: "#111111"
  white: "#FFFFFF"
  electricBlue: "#2563EB"
  lightGray: "#F5F6F8"
  warmCream: "#F6EFE5"
  softBeige: "#EDE2D3"
  peach: "#E8A48B"
  blushPink: "#EFCFCB"
  sageMist: "#DCE6DE"
  textPrimary: "#111111"
  textSecondary: "#596274"
  textMuted: "#8A94A6"
  panelCharcoal: "#111111"
  panelInk: "#FFFFFF"
typography:
  displayHero:
    fontFamily: Inter
    fontSize: 6.5rem
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  displaySection:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  displayCard:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 800
    lineHeight: 1
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

## Overview

Bannaa is an Arabic-first AI community for the Arab world. The brand should feel clean, serious, optimistic, and builder-oriented: practical enough for founders and operators, warm enough for community, and energetic enough for AI-native creation.

The new guideline replaces the previous lime terminal identity. The site should now lead with white space, light-gray structure, electric-blue actions, and warm peach/blush/cream surfaces. Charcoal is still allowed for the logo, text, and occasional functional panels, but there is no dark-mode theme.

## Logo System

Use the supplied SVG assets in [public/assets/brand](/Users/moe/bannaa/public/assets/brand):

- [icon.svg](/Users/moe/bannaa/public/assets/brand/icon.svg) is the primary standalone web mark and uses the boxy Blobatar mark.
- [arabic_logo.svg](/Users/moe/bannaa/public/assets/brand/arabic_logo.svg) is the approved Arabic lockup reference and uses the boxy Blobatar mark next to the Arabic wordmark.
- [brand_guideline.png](/Users/moe/bannaa/public/assets/brand/brand_guideline.png) is the source guideline image.
- [app/icon.svg](/Users/moe/bannaa/app/icon.svg) is the Next.js favicon and mirrors the standalone icon geometry.

The standalone icon is a black boxy Blobatar with two white capsule eyes. It is generated from `blobatar` with the boxy shape trait pinned, a black body, and white eyes. Do not add a detached square, mouth, tail, gradient, shadow, or extra facial features. Do not stretch, rotate, combine English and Arabic wordmarks into one lockup, or add effects.

Clear space around the icon should be at least one quarter of the icon width on all sides.

### Expression Square

The boxy Blobatar is the current direction for the Banna mark. The black idle boxy version is the official logo, and the wider expression set is for playful moments, social content, and product empty states.

Expression avatars should use the same pinned boxy Blobatar traits with eyes only. The official mark is black; optional expression variants may use the extended brand colors. Do not add mouths, detached squares, tails, gradients, or extra facial features.

Supported Blobatar expressions include idle, happy, sad, mad, surprised, wink, sleepy, smug, unsure, scared, love, shy, and sick. Animated versions should be CSS-only, short, subtle, and disabled by `prefers-reduced-motion`.

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

English display typography uses **Inter**. Arabic typography uses **IBM Plex Sans Arabic** for both display and body where Arabic text appears. **JetBrains Mono** is limited to small technical metadata and labels.

Arabic text must never be forced into JetBrains Mono. Keep RTL and LTR layouts symmetric through logical CSS properties.

## Layout

Use a mobile-first responsive layout with a maximum content width of `1440px` and a fixed `24px` outer gutter. Keep pages fast by preferring CSS, SVG, and structured content over heavy image dependencies.

The current site structure is:

- Homepage with hero, mission, three tracks, content preview, community, and CTA.
- Mission/about page.
- Tracks/learn page with Founder Skill Set, Building in the Age of AI, and Builder Skill Set.
- Track roadmap page with Done, Doing, and To do status columns for each track.
- Community page with simple signup and posting UI.
- Content hub with filterable videos, shorts, X threads, and newsletters.
- TikTok and YouTube channel section for sourcing short and long-form video posts.
- Resources, join/get-started, and contact/partnership pages.
- Brand guideline page displaying the supplied visual identity reference, downloadable logo assets, expression-square examples, and practical applications.

## Components

**Header:** Use the boxy Blobatar SVG mark through `BrandMark`, followed by the localized wordmark: `بنّاء` in Arabic and `Bannaa` in English. The language switcher stays visible on every page. No theme toggle.

**Buttons:** Primary buttons are electric blue with white text. Secondary buttons are white or transparent with a neutral stroke and charcoal text.

**Cards:** Cards should be light gray or warm cream with fine borders. Use flat color changes for hover states; avoid shadows and ornamental depth.

**Video Thumbnails:** Video posts in the content hub should show a thumbnail area. Use light, brand-colored generated thumbnails by default, then replace with real video stills when available.

**Video Channels:** Keep TikTok and YouTube links in the content system, not hard-coded in page markup. YouTube videos should render as lightweight fetched thumbnail cards from the public channel feed. TikTok should use the official profile embed so the account can load current public videos without a private API key.

**Expression Avatar:** Use the black boxy Blobatar as the official logo. Use other colored eye-only Blobatar expressions for playful brand moments. Keep them inline SVG/CSS where possible instead of adding heavy image files. Motion should be ambient and restrained: blink, bounce, tilt, or sleepy drift.

**Community:** Signup requires name and email at minimum and uses a signed HTTP-only cookie through Next route handlers. Production deployments must provide `COMMUNITY_AUTH_SECRET`; posts are ready to connect to a persistent database layer.

## Do's and Don'ts

Do:

- Keep bilingual content centralized in [lib/content.ts](/Users/moe/bannaa/lib/content.ts).
- Keep Arabic as the default route and preserve full English translations.
- Use [public/assets/brand/icon.svg](/Users/moe/bannaa/public/assets/brand/icon.svg) for the official boxy Blobatar web mark.
- Use electric blue for primary action and navigation emphasis.
- Keep the site light, fast, and low-bandwidth friendly.

Don't:

- Reintroduce dark mode.
- Use the old lime accent.
- Add a detached square, mouth, tail, gradient, or extra facial features to the official mark.
- Distort, rotate, shadow, or combine logo lockups incorrectly.
- Force Arabic into mono typography.
- Hard-code content directly in route components when it belongs in the content system.
