export const tutorialSlugs = ['first-small-project', 'clearer-ai-instructions', 'first-useful-agent', 'improve-with-feedback'] as const;
export const memberSlugs = ['reading-companion-prototype', 'testing-a-shop-assistant', 'first-learning-journal'] as const;

export type CommunityEntry = { type: 'tutorial' | 'member'; index: number; stage: number };
export const communityEntries: CommunityEntry[] = [
  { type: 'tutorial', index: 0, stage: 0 }, { type: 'member', index: 0, stage: 0 },
  { type: 'tutorial', index: 1, stage: 1 }, { type: 'member', index: 1, stage: 2 },
  { type: 'tutorial', index: 2, stage: 2 }, { type: 'member', index: 2, stage: 3 },
  { type: 'tutorial', index: 3, stage: 3 }
];

export function communityEntry(slug: string) {
  return communityEntries.find(entry => (entry.type === 'tutorial' ? tutorialSlugs : memberSlugs)[entry.index] === slug) ?? null;
}
