import Image from "next/image";
import { SiteShell } from "@/components/site/site-shell";
import { whatsappCommunityContent } from "@/lib/content";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type CommunityPageProps = {
  content: SiteContent;
  locale: Locale;
};

export function CommunityPage({ content, locale }: CommunityPageProps) {
  const community = whatsappCommunityContent[locale];
  return (
    <SiteShell content={content} locale={locale}>
      <section className="whatsapp-community wrap">
        <div>
          <span className="eyebrow">{content.pages.community.eyebrow}</span>
          <h1>{community.title}</h1>
          <p>{community.description}</p>
          <button className="btn primary" type="button" disabled aria-describedby="community-join-pending">{community.request}</button>
          <p className="whatsapp-community__note" id="community-join-pending">{community.pending}</p>
        </div>
        <figure>
          <Image src="/assets/community/whatsapp-preview.png" alt={community.alt} width={1024} height={1024} sizes="(max-width: 760px) 100vw, 50vw" />
          <figcaption>{community.caption}</figcaption>
        </figure>
      </section>
    </SiteShell>
  );
}
