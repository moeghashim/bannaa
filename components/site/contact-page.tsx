import { PageHero } from "@/components/site/page-hero";
import { SimpleForm } from "@/components/site/simple-form";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ContactPageProps = {
  content: SiteContent;
  locale: Locale;
};

export function ContactPage({ content, locale }: ContactPageProps) {
  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.contact.hero} />
      <section className="split-action wrap">
        <div className="step-grid">
          {content.contact.options.map((option, index) => (
            <article key={option.title} className="card step-card">
              <span className="corner" />
              <span className="num">{String(index + 1).padStart(2, "0")}</span>
              <h2>{option.title}</h2>
              <p>{option.desc}</p>
            </article>
          ))}
        </div>
        <SimpleForm
          title={content.contact.form.title}
          fields={[
            { label: content.contact.form.name },
            { label: content.contact.form.email, type: "email" },
            { label: content.contact.form.org },
            { label: content.contact.form.message, type: "textarea" }
          ]}
          button={content.contact.form.button}
        />
      </section>
    </SiteShell>
  );
}
