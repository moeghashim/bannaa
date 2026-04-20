import { BrandMark } from "@/components/site/brand-mark";
import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/content";

type SiteFooterProps = {
  content: SiteContent["footer"];
  locale: Locale;
};

export function SiteFooter({ content, locale }: SiteFooterProps) {
  return (
    <footer className="footer wrap" id="footer">
      <div className="footer__grid">
        <div className="footer__brand-col">
          <div className="brand" style={{ marginBottom: 16 }}>
            <BrandMark size={28} />
            <span>{locale === "ar" ? "بنّاء" : "Bannaa"}</span>
          </div>
          <p>{content.description}</p>
          <div className="tags">
            {content.tags.map((t, i) => (
              <span key={t} className="tag">
                {i === 0 ? <span className="pip" /> : null}
                {t}
              </span>
            ))}
          </div>
        </div>
        {content.groups.map((g) => (
          <div className="footer__col" key={g.title}>
            <h4>{g.title}</h4>
            <ul>
              {g.items.map((it) => (
                <li key={it}>
                  <a href="#">{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer__coords">
          LAT 24.71
          <br />
          LNG 46.67
          <br />
          v3.0.1
        </div>
      </div>
      <hr className="hairline" style={{ margin: "32px 0 16px" }} />
      <div className="footer__bottom">
        <span>{content.copyright}</span>
        <span>{content.slogan}</span>
      </div>
    </footer>
  );
}
