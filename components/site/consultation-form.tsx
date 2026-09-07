"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { Locale } from "@/lib/i18n";

export function ConsultationForm({ locale, email }: { locale: Locale; email: string }) {
  const ar = locale === "ar";
  const [prepared, setPrepared] = useState(false);
  const labels = {
    name: ar ? "اسمك" : "Your name",
    email: ar ? "بريدك الإلكتروني" : "Your email",
    team: ar ? "الفريق أو الشركة (اختياري)" : "Team or company (optional)",
    goal: ar ? "ما المشكلة التي تريد حلها؟ وما النتيجة المطلوبة؟" : "What problem do you want to solve, and what outcome do you need?",
    setup: ar ? "ما الذي تستخدمه أو بنيته حتى الآن؟" : "What are you using or what have you built so far?",
    help: ar ? "ما نوع المساعدة التي تحتاجها؟" : "What kind of help do you need?",
    timeline: ar ? "متى تريد البدء؟" : "When would you like to start?"
  };
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = Object.entries(labels).map(([key, label]) => `${label}\n${String(data.get(key) || "").trim() || (ar ? "غير محدد" : "Not specified")}`).join("\n\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(ar ? "طلب استشارة من بنّاء" : "Bannaa consultation request")}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <form className="consultation-form" onSubmit={submit}>
    <h3>{ar ? "أخبرنا عن احتياجك" : "Tell us what you need"}</h3>
    <div className="consultation-form__identity">
      <label>{labels.name}<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>{labels.email}<input name="email" type="email" autoComplete="email" required maxLength={200} /></label>
    </div>
    <label>{labels.team}<input name="team" autoComplete="organization" maxLength={150} /></label>
    <label>{labels.help}<select name="help" required defaultValue="">
      <option value="" disabled>{ar ? "اختر نوع المساعدة" : "Choose a topic"}</option>
      {(ar ? ["بناء وكيل أو أتمتة", "مراجعة مشروع قائم", "تطوير مهارات الفريق", "تحديد الفرص والخطوات", "احتياج آخر"] : ["Build an agent or automation", "Review an existing project", "Develop team skills", "Identify opportunities and next steps", "Something else"]).map(option => <option key={option}>{option}</option>)}
    </select></label>
    <label>{labels.goal}<textarea name="goal" rows={3} required maxLength={1200} /></label>
    <label>{labels.setup}<textarea name="setup" rows={2} required maxLength={800} placeholder={ar ? "يمكنك كتابة: لم نبدأ بعد" : "It's fine to say: we haven't started yet"} /></label>
    <label>{labels.timeline}<select name="timeline" required defaultValue="">
      <option value="" disabled>{ar ? "اختر الموعد" : "Choose a timeframe"}</option>
      {(ar ? ["في أقرب وقت", "خلال شهر", "خلال ثلاثة أشهر", "أستكشف الخيارات"] : ["As soon as possible", "Within a month", "Within three months", "Exploring options"]).map(option => <option key={option}>{option}</option>)}
    </select></label>
    <p>{ar ? "يفتح الزر تطبيق بريدك مع الإجابات. راجع الرسالة وأرسلها لإتمام الطلب." : "This opens your email app with your answers. Review and send the message to complete your request."}</p>
    <button className="btn primary" type="submit">{ar ? "جهّز طلب الاستشارة" : "Prepare consultation request"}</button>
    {prepared && <p role="status">{ar ? "الطلب جاهز في تطبيق البريد. لم يُرسل من الموقع؛ أرسله من بريدك إلى" : "Your request is prepared in your email app. It has not been sent by this website; send it to"} <a href={`mailto:${email}`}>{email}</a>.</p>}
  </form>;
}
