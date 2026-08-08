import { PageHero } from "@/components/site/page-hero";
import { SimpleForm } from "@/components/site/simple-form";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type JoinPageProps = {
  content: SiteContent;
  locale: Locale;
};

export function JoinPage({ content, locale }: JoinPageProps) {
  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.join.hero} />
      <section className="split-action wrap">
        <div className="step-grid">
          {content.join.steps.map((step, index) => (
            <article key={step.title} className="card step-card">
              <span className="corner" />
              <span className="num">{String(index + 1).padStart(2, "0")}</span>
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
        <SimpleForm
          title={content.join.form.title}
          fields={[
            { label: content.join.form.name },
            { label: content.join.form.email, type: "email" },
            { label: content.join.form.role },
            { label: content.join.form.goal, type: "textarea" }
          ]}
          button={content.join.form.button}
          note={content.join.form.note}
        />
      </section>
    </SiteShell>
  );
}
