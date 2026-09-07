# Publishing blog posts

Add a UTF-8 Markdown file to content/blog. The filename becomes the article slug.
Posts appear automatically after the next deployment; development refreshes on reload.

Required YAML frontmatter:

```yaml
---
title: "Post title"
description: "Short summary"
author: "Your name"
date: "2026-09-07"
locale: "en"
tags: ["Agents", "Evaluation"]
draft: false
---
```

Use locale ar for Arabic. Quote dates. Use a separate file for each language, for
example topic.ar.md and topic.en.md. Tags are free-form strings and automatically
populate the topic filter. Set draft: true to exclude an unfinished post.

The body supports Markdown headings, lists, links, fenced code, and GFM tables.
Raw HTML is disabled. Place images under public/assets/blog and reference them
with Markdown image syntax using /assets/blog/filename.png.

Commit and deploy through the team's normal GitHub workflow. A malformed
published post fails the build with its filename and invalid field.

## Consultation

Set CONSULTATION_BOOKING_URL to your team's HTTPS scheduling URL, or
CONSULTATION_EMAIL to your team's inbox. The consultation section uses a booking
link or opens an email request. No request is stored by this website.
