export const colorTokens = [
  { name: "background", value: "#f7f6f1", description: "Primary site canvas" },
  { name: "background-elevated", value: "#fcfbf7", description: "Raised cards" },
  { name: "background-muted", value: "#eceae0", description: "Section shifts and panels" },
  { name: "background-grid", value: "#d9d5c7", description: "Blueprint grid lines" },
  { name: "ink", value: "#181818", description: "Primary text and dark panels" },
  { name: "ink-muted", value: "#666457", description: "Technical annotations" },
  { name: "accent", value: "#bfdc00", description: "Primary brand accent" },
  { name: "accent-strong", value: "#8aa300", description: "Accent hover and progress" },
  { name: "line-ghost", value: "rgba(102, 100, 87, 0.18)", description: "Low-contrast input edges" }
] as const;

export const typographyTokens = [
  { name: "display", sample: "3.8rem / 0.92", usage: "Hero and CTA statements" },
  { name: "heading", sample: "2.6rem / 0.95", usage: "Section titles" },
  { name: "title", sample: "1.25rem / 1.1", usage: "Cards and modules" },
  { name: "body", sample: "1rem / 1.65", usage: "Supporting copy" },
  { name: "label", sample: "0.78rem / 1.1", usage: "Metadata and UI labels" }
] as const;

export const spacingTokens = [
  { name: "space-2", value: "0.5rem" },
  { name: "space-4", value: "1rem" },
  { name: "space-6", value: "1.5rem" },
  { name: "space-8", value: "2rem" },
  { name: "space-12", value: "3rem" },
  { name: "space-16", value: "4rem" }
] as const;

export const componentRecipes = [
  { name: "Primary Button", description: "Sharp neon fill, uppercase label, compact lift on hover." },
  { name: "Module Card", description: "Tonal card layering with no hard divider lines." },
  { name: "Terminal Block", description: "Dark instrumentation panel with accent output lines." },
  { name: "Ghost Input", description: "Low-contrast frame with stronger focus state only on interaction." }
] as const;
