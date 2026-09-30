export const tutorialSlugs = ['first-small-project', 'clearer-ai-instructions', 'first-useful-agent', 'improve-with-feedback'] as const;
export const memberSlugs = ['reading-companion-prototype', 'testing-a-shop-assistant', 'first-learning-journal'] as const;

export function communityEntry(slug: string) {
  const tutorial = tutorialSlugs.findIndex(item => item === slug);
  if (tutorial !== -1) return { type: 'tutorial' as const, index: tutorial, stage: tutorial };
  const member = memberSlugs.findIndex(item => item === slug);
  return member === -1 ? null : { type: 'member' as const, index: member, stage: [0, 2, 3][member] };
}
