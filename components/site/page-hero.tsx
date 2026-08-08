import type { PageHero as PageHeroCopy } from "@/lib/content";

type PageHeroProps = {
  copy: PageHeroCopy;
};

export function PageHero({ copy }: PageHeroProps) {
  return (
    <section className="page-hero wrap">
      <p className="page-hero__eyebrow mono">{copy.eyebrow}</p>
      <h1 className="page-hero__title display">
        {copy.title}
        <br />
        <span className="accent">{copy.accent}</span>
      </h1>
      <p className="page-hero__intro">{copy.intro}</p>
    </section>
  );
}
