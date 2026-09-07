import { ConsultationForm } from "@/components/site/consultation-form";
import type { Locale } from "@/lib/i18n";
export function ConsultationSection({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const booking = process.env.CONSULTATION_BOOKING_URL;
  const email = process.env.CONSULTATION_EMAIL || "request@bannaa.ai";
  return <section className="consultation wrap" id="consultation"><div><span className="eyebrow">{ar ? "اعمل مع بنّاء" : "WORK WITH BANNAA"}</span><h2>{ar ? "حوّل فكرتك إلى خطة تنفيذ." : "Turn your idea into a build plan."}</h2><p>{ar ? "ناقش فرص الأتمتة، تصميم الوكلاء، أو تطوير قدرات فريقك. أخبرنا بالمشكلة والنتيجة التي تريد تحقيقها." : "Discuss automation opportunities, agent architecture, or your team's capabilities. Tell us the problem and the outcome you want."}</p></div><div><ConsultationForm locale={locale} email={email} />{booking?.startsWith("https://") && <a href={booking}>{ar ? "أو احجز موعداً" : "Or book a meeting"}</a>}</div></section>;
}
