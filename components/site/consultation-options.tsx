"use client";

import { useEffect, useRef, useState } from "react";
import { ConsultationForm } from "@/components/site/consultation-form";
import { consultationContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function ConsultationOptions({ locale, email, booking }: { locale: Locale; email: string; booking?: string }) {
  const content = consultationContent[locale];
  const dialog = useRef<HTMLDialogElement>(null);
  const [planId, setPlanId] = useState<string | null>(null);

  useEffect(() => {
    if (!planId) return;
    const modal = dialog.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modal?.showModal();
    return () => {
      modal?.close();
      document.body.style.overflow = overflow;
    };
  }, [planId]);

  return (
    <>
      <div className="consultation-options">
        {content.plans.map(plan => (
          <article className="card consultation-option" key={plan.id}>
            <h2>{plan.title}</h2>
            <div className="consultation-option__price"><bdi dir="ltr">{plan.price}</bdi></div>
            <p>{plan.duration}</p>
            <ul>{plan.includes.map(item => <li key={item}>{item}</li>)}</ul>
            <button className="btn primary" onClick={() => setPlanId(plan.id)}>{content.request}</button>
          </article>
        ))}
      </div>
      <dialog ref={dialog} className="consultation-modal" aria-labelledby="consultation-modal-title" onClose={() => setPlanId(null)} onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
      }}>
        <header className="consultation-modal__header">
          <h2 id="consultation-modal-title">{content.request}</h2>
          <button className="btn" type="button" onClick={() => dialog.current?.close()} aria-label={content.close}>{content.close}</button>
        </header>
        {planId && <ConsultationForm key={planId} locale={locale} email={email} planId={planId} />}
        {booking && <a className="consultation-modal__booking" href={booking}>{content.booking}</a>}
      </dialog>
    </>
  );
}
