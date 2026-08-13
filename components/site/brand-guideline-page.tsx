import Image from "next/image";
import type { ReactNode } from "react";

import { BrandLogo, BrandMark } from "@/components/site/brand-mark";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type BrandGuidelinePageProps = {
  content: SiteContent;
  locale: Locale;
};

type BrandGuideCopy = {
  subtitle: string;
  sections: {
    logo: string;
    clearSpace: string;
    palette: string;
    typography: string;
    usage: string;
    rules: string;
    principles: string;
    preview: string;
  };
  labels: {
    icon: string;
    englishLockup: string;
    arabicLockup: string;
    clearSpaceBody: string;
    clearSpaceUnit: string;
    coreColors: string;
    extendedNeutrals: string;
    warmAccents: string;
    englishTypeface: string;
    arabicTypeface: string;
    headingExample: string;
    bodyExample: string;
    lightBackground: string;
    darkBackground: string;
    warmBackground: string;
    do: string;
    dont: string;
    download: string;
    downloadAll: string;
  };
  bodyExamples: {
    english: string;
    arabic: string;
  };
};

const copy: Record<Locale, BrandGuideCopy> = {
  ar: {
    subtitle: "AI Community for the Arab World",
    sections: {
      logo: "نظام الشعار",
      clearSpace: "المساحة الآمنة",
      palette: "لوحة الألوان الموسعة",
      typography: "الخطوط",
      usage: "أمثلة الاستخدام",
      rules: "افعل / لا تفعل",
      principles: "مبادئ الهوية",
      preview: "تطبيقات الهوية"
    },
    labels: {
      icon: "الأيقونة",
      englishLockup: "الأيقونة + الاسم الإنجليزي",
      arabicLockup: "الأيقونة + الاسم العربي",
      clearSpaceBody:
        "حافظ على مساحة واضحة حول الأيقونة تساوي وحدة X من كل الجهات. لا تدخل نصوص أو رسومات أو عناصر أخرى داخل هذه المساحة.",
      clearSpaceUnit: "X = وحدة القياس",
      coreColors: "الألوان الأساسية",
      extendedNeutrals: "درجات محايدة",
      warmAccents: "ألوان دافئة",
      englishTypeface: "الخط الإنجليزي",
      arabicTypeface: "الخط العربي",
      headingExample: "مثال عنوان",
      bodyExample: "مثال نص",
      lightBackground: "على خلفية فاتحة",
      darkBackground: "على خلفية داكنة",
      warmBackground: "على خلفية دافئة",
      do: "افعل",
      dont: "لا تفعل",
      download: "تحميل",
      downloadAll: "تحميل ملفات الشعار"
    },
    bodyExamples: {
      english: "Bannaa is an AI community for the Arab world. We share knowledge, build projects, and create impact together.",
      arabic: "بنّاء مجتمع لك ذكاء الاصطناعي في العالم العربي. نتشارك المعرفة، نبني المشاريع، ونصنع الأثر معاً."
    }
  },
  en: {
    subtitle: "AI Community for the Arab World",
    sections: {
      logo: "Logo system",
      clearSpace: "Clear space",
      palette: "Expanded color palette",
      typography: "Typography",
      usage: "Usage examples",
      rules: "Do / Don't",
      principles: "Brand principles",
      preview: "Application preview"
    },
    labels: {
      icon: "Icon",
      englishLockup: "Icon + English wordmark",
      arabicLockup: "Icon + Arabic wordmark",
      clearSpaceBody:
        "Maintain clear space around the icon equal to X on all sides. No text, graphics, or other elements should enter this area.",
      clearSpaceUnit: "X = unit of measurement",
      coreColors: "Core colors",
      extendedNeutrals: "Extended neutrals",
      warmAccents: "Warm accents",
      englishTypeface: "English typeface",
      arabicTypeface: "Arabic typeface",
      headingExample: "Heading example",
      bodyExample: "Body text example",
      lightBackground: "On light background",
      darkBackground: "On dark background",
      warmBackground: "On warm background",
      do: "Do",
      dont: "Don't",
      download: "Download",
      downloadAll: "Download logo files"
    },
    bodyExamples: {
      english: "Bannaa is an AI community for the Arab world. We share knowledge, build projects, and create impact together.",
      arabic: "بنّاء مجتمع لك ذكاء الاصطناعي في العالم العربي. نتشارك المعرفة، نبني المشاريع، ونصنع الأثر معاً."
    }
  }
};

const colorGroups = [
  {
    key: "coreColors",
    colors: [
      { name: "Charcoal", hex: "#111111" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Electric Blue", hex: "#2563EB" },
      { name: "Light Gray", hex: "#F5F6F8" }
    ]
  },
  {
    key: "extendedNeutrals",
    colors: [
      { name: "Warm Cream", hex: "#F6EFE5" },
      { name: "Soft Beige", hex: "#EDE2D3" }
    ]
  },
  {
    key: "warmAccents",
    colors: [
      { name: "Peach", hex: "#E8A48B" },
      { name: "Blush Pink", hex: "#EFCFCB" },
      { name: "Sage Mist", hex: "#DCE6DE" }
    ]
  }
] as const;

const principles = [
  {
    title: "Build",
    arTitle: "ابن",
    desc: "We build tools and projects that create impact.",
    arDesc: "نبني أدوات ومشاريع تصنع أثراً."
  },
  {
    title: "Learn",
    arTitle: "تعلّم",
    desc: "We learn continuously and share knowledge.",
    arDesc: "نتعلم باستمرار ونشارك المعرفة."
  },
  {
    title: "Connect",
    arTitle: "تواصل",
    desc: "We connect people, ideas, and opportunities.",
    arDesc: "نصل الناس والأفكار والفرص."
  },
  {
    title: "Launch",
    arTitle: "أطلق",
    desc: "We launch solutions that move the community forward.",
    arDesc: "نطلق حلولاً تدفع المجتمع إلى الأمام."
  }
];

const logoDownloads = {
  icon: [
    { label: "SVG", href: "/assets/brand/icon.svg", filename: "bannaa-icon.svg" },
    { label: "PNG", href: "/assets/brand/icon.png", filename: "bannaa-icon.png" }
  ],
  en: [{ label: "PNG", href: "/assets/brand/english_logo.png", filename: "bannaa-english-logo.png" }],
  ar: [
    { label: "SVG", href: "/assets/brand/arabic_logo.svg", filename: "bannaa-arabic-logo.svg" },
    { label: "PNG", href: "/assets/brand/arabic_logo.png", filename: "bannaa-arabic-logo.png" }
  ]
} as const;

const allLogoDownloads = [...logoDownloads.icon, ...logoDownloads.en, ...logoDownloads.ar];

const merchExamples = [
  {
    title: "T-shirt",
    arTitle: "تيشيرت",
    src: "/assets/brand/merch-tshirt.png",
    alt: "Banna logo t-shirt mockup"
  },
  {
    title: "Tote bag",
    arTitle: "حقيبة قماش",
    src: "/assets/brand/merch-tote.png",
    alt: "Banna logo tote bag mockup"
  },
  {
    title: "Cap",
    arTitle: "قبعة",
    src: "/assets/brand/merch-cap.png",
    alt: "Banna logo cap mockup"
  }
];

function SectionNumber({ value }: { value: number }) {
  return <span className="brand-guide__num mono">{value}.</span>;
}

function SectionTitle({ value, children }: { value: number; children: string }) {
  return (
    <h2 className="brand-guide__section-title mono">
      <SectionNumber value={value} />
      {children}
    </h2>
  );
}

function LogoLockup({ variant, locale }: { variant: "icon" | "en" | "ar"; locale: Locale }) {
  if (variant === "icon") {
    return (
      <span className="brand-guide-lockup brand-guide-lockup--icon">
        <BrandMark size={84} title="Bannaa" />
      </span>
    );
  }

  if (variant === "ar") {
    return (
      <span className="brand-guide-lockup brand-guide-lockup--ar">
        <BrandLogo locale="ar" />
      </span>
    );
  }

  return (
    <span className="brand-guide-lockup brand-guide-lockup--en" dir="ltr">
      <BrandLogo locale={locale === "ar" ? "en" : locale} />
    </span>
  );
}

function LogoDownloadLinks({
  title,
  files,
  downloadLabel
}: {
  title: string;
  files: readonly { label: string; href: string; filename: string }[];
  downloadLabel: string;
}) {
  return (
    <div className="logo-downloads" aria-label={`${downloadLabel} ${title}`}>
      {files.map((file) => (
        <a key={file.href} href={file.href} download={file.filename}>
          {downloadLabel} {file.label}
        </a>
      ))}
    </div>
  );
}

function RuleCard({
  label,
  state,
  children
}: {
  label: string;
  state: "do" | "dont";
  children: ReactNode;
}) {
  return (
    <article className={`brand-rule-card brand-rule-card--${state}`}>
      <span className="brand-rule-card__badge mono">{state === "do" ? "OK" : "NO"}</span>
      <div className="brand-rule-card__demo">{children}</div>
      <p>{label}</p>
    </article>
  );
}

export function BrandGuidelinePage({ content, locale }: BrandGuidelinePageProps) {
  const t = copy[locale];

  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.pages.brand} />
      <section className="brand-guide wrap" aria-label={content.pages.brand.title}>
        <header className="brand-guide__masthead">
          <div>
            <p className="brand-guide__eyebrow mono">Bannaa Brand Guidelines</p>
            <h1>Bannaa Brand Guidelines</h1>
            <p>{t.subtitle}</p>
          </div>
          <BrandMark size={88} title="Bannaa" />
        </header>

        <section className="brand-guide__section" aria-labelledby="brand-logo-system">
          <SectionTitle value={1}>{t.sections.logo}</SectionTitle>
          <div className="brand-logo-grid" id="brand-logo-system">
            <article>
              <LogoLockup variant="icon" locale={locale} />
              <p>{t.labels.icon}</p>
              <LogoDownloadLinks title={t.labels.icon} files={logoDownloads.icon} downloadLabel={t.labels.download} />
            </article>
            <article>
              <LogoLockup variant="en" locale={locale} />
              <p>{t.labels.englishLockup}</p>
              <LogoDownloadLinks title={t.labels.englishLockup} files={logoDownloads.en} downloadLabel={t.labels.download} />
            </article>
            <article>
              <LogoLockup variant="ar" locale={locale} />
              <p>{t.labels.arabicLockup}</p>
              <LogoDownloadLinks title={t.labels.arabicLockup} files={logoDownloads.ar} downloadLabel={t.labels.download} />
            </article>
          </div>
          <div className="brand-download-kit" aria-label={t.labels.downloadAll}>
            <strong>{t.labels.downloadAll}</strong>
            <div>
              {allLogoDownloads.map((file) => (
                <a key={file.href} href={file.href} download={file.filename}>
                  {file.filename}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="brand-guide__split">
          <section className="brand-guide__section" aria-labelledby="brand-clear-space">
            <SectionTitle value={2}>{t.sections.clearSpace}</SectionTitle>
            <div className="clear-space-demo" id="brand-clear-space">
              <div className="clear-space-demo__box">
                <span className="clear-space-demo__x clear-space-demo__x--top">X</span>
                <span className="clear-space-demo__x clear-space-demo__x--right">X</span>
                <span className="clear-space-demo__x clear-space-demo__x--bottom">X</span>
                <span className="clear-space-demo__x clear-space-demo__x--left">X</span>
                <div className="clear-space-demo__mark">
                  <BrandMark size={94} title="Bannaa" />
                </div>
              </div>
              <div>
                <p>{t.labels.clearSpaceBody}</p>
                <span className="brand-guide__unit mono">{t.labels.clearSpaceUnit}</span>
              </div>
            </div>
          </section>

          <section className="brand-guide__section" aria-labelledby="brand-palette">
            <SectionTitle value={3}>{t.sections.palette}</SectionTitle>
            <div className="palette-groups" id="brand-palette">
              {colorGroups.map((group) => (
                <div className="palette-group" key={group.key}>
                  <h3 className="mono">{t.labels[group.key]}</h3>
                  <div className="palette-grid">
                    {group.colors.map((color) => (
                      <article key={color.hex} className="palette-swatch">
                        <span style={{ backgroundColor: color.hex }} />
                        <strong>{color.name}</strong>
                        <code>{color.hex}</code>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="brand-guide__section" aria-labelledby="brand-typography">
          <SectionTitle value={4}>{t.sections.typography}</SectionTitle>
          <div className="type-specimen-grid" id="brand-typography">
            <article className="type-specimen" dir="ltr">
              <span className="mono">{t.labels.englishTypeface}</span>
              <strong className="type-specimen__name">Inter</strong>
              <b>Aa</b>
              <div>
                <h3>{t.labels.headingExample}</h3>
                <p className="type-specimen__heading">Build the future, together.</p>
              </div>
              <div>
                <h3>{t.labels.bodyExample}</h3>
                <p>{t.bodyExamples.english}</p>
              </div>
            </article>
            <article className="type-specimen type-specimen--ar" dir="rtl">
              <span className="mono">{t.labels.arabicTypeface}</span>
              <strong className="type-specimen__name">IBM Plex Sans Arabic</strong>
              <b>أب</b>
              <div>
                <h3>{t.labels.headingExample}</h3>
                <p className="type-specimen__heading">نبني المستقبل معاً.</p>
              </div>
              <div>
                <h3>{t.labels.bodyExample}</h3>
                <p>{t.bodyExamples.arabic}</p>
              </div>
            </article>
          </div>
        </section>

        <div className="brand-guide__split brand-guide__split--balanced">
          <section className="brand-guide__section" aria-labelledby="brand-usage">
            <SectionTitle value={5}>{t.sections.usage}</SectionTitle>
            <div className="usage-grid" id="brand-usage">
              <article className="usage-card usage-card--light">
                <LogoLockup variant="en" locale="en" />
                <p>{t.labels.lightBackground}</p>
              </article>
              <article className="usage-card usage-card--dark">
                <LogoLockup variant="en" locale="en" />
                <p>{t.labels.darkBackground}</p>
              </article>
              <article className="usage-card usage-card--warm">
                <LogoLockup variant="en" locale="en" />
                <p>{t.labels.warmBackground}</p>
              </article>
            </div>
          </section>

          <section className="brand-guide__section" aria-labelledby="brand-rules">
            <SectionTitle value={6}>{t.sections.rules}</SectionTitle>
            <div className="brand-rules" id="brand-rules">
              <RuleCard state="do" label="Use approved lockups only">
                <LogoLockup variant="en" locale="en" />
              </RuleCard>
              <RuleCard state="do" label="Use the Arabic lockup for Arabic contexts">
                <LogoLockup variant="ar" locale="ar" />
              </RuleCard>
              <RuleCard state="dont" label="Do not stretch or distort">
                <span className="brand-rule-card__stretch">
                  <LogoLockup variant="en" locale="en" />
                </span>
              </RuleCard>
              <RuleCard state="dont" label="Do not rotate or add effects">
                <span className="brand-rule-card__tilt">
                  <LogoLockup variant="icon" locale="en" />
                </span>
              </RuleCard>
            </div>
          </section>
        </div>

        <section className="brand-guide__section" aria-labelledby="brand-principles">
          <SectionTitle value={7}>{t.sections.principles}</SectionTitle>
          <div className="principle-grid" id="brand-principles">
            {principles.map((principle) => (
              <article key={principle.title} className="principle-card">
                <span className="principle-card__mark mono">{principle.title.slice(0, 2).toUpperCase()}</span>
                <h3>{locale === "ar" ? principle.arTitle : principle.title}</h3>
                <p>{locale === "ar" ? principle.arDesc : principle.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-guide__section" aria-labelledby="brand-preview">
          <SectionTitle value={8}>{t.sections.preview}</SectionTitle>
          <div className="application-grid" id="brand-preview">
            <article className="application-card application-card--web">
              <BrandLogo locale="ar" />
              <h3>تعلّم الذكاء الاصطناعي بالعربية.</h3>
              <span className="btn primary">ابدأ الآن</span>
              <p>Digital / Web</p>
            </article>
            <article className="application-card application-card--social">
              <BrandLogo locale="en" />
              <h3>شارك المعرفة. نبني المستقبل معاً.</h3>
              <p>Community / Social</p>
            </article>
            <article className="application-card application-card--app">
              <BrandMark size={34} title="Bannaa" />
              <h3>مرحباً</h3>
              <div className="application-card__chips">
                <span>تعلم</span>
                <span>ابن</span>
                <span>أطلق</span>
              </div>
              <p>App / UI</p>
            </article>
            {merchExamples.map((item) => (
              <article key={item.src} className="application-card application-card--merch-image">
                <Image src={item.src} alt={item.alt} width={1254} height={1254} sizes="(max-width: 980px) 50vw, 16vw" />
                <p>{locale === "ar" ? item.arTitle : item.title}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </SiteShell>
  );
}
