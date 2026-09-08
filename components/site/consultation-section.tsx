import { ConsultationOptions } from "@/components/site/consultation-options";
import { consultationContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function ConsultationSection({ locale }: { locale: Locale }) {
  const content = consultationContent[locale];
  const booking = process.env.CONSULTATION_BOOKING_URL;
  const email = process.env.CONSULTATION_EMAIL || "request@bannaa.ai";
  return (
    <section className="consultation wrap" id="consultation">
      <header>
        <span className="eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </header>
      <ConsultationOptions locale={locale} email={email} booking={booking?.startsWith("https://") ? booking : undefined} />
    </section>
  );
}
