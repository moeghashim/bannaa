import type { Locale } from "@/lib/i18n";
import { curriculum } from "@/lib/curriculum";

export type NavLink = { id: string; label: string; href: string };
export type FooterItem = { label: string; href?: string };
export type FooterGroup = { title: string; items: FooterItem[] };

export type HeroStage = { key: string; status: string };
export type HeroStat = { num: string; label: string; sub: string };
export type HeroTag = { label: string; tone?: "warn" };

export type TrackId = "founder" | "ai-building" | "builder";
export type TrackKind = "foundations" | "agents" | "media";

export type TrackModule = {
  title: string;
  desc: string;
};

export type TrackCard = {
  id: TrackId;
  num: string;
  title: string;
  sub: string;
  desc: string;
  weeks: string;
  level: string;
  kind: TrackKind;
  outcomes: string[];
  modules: TrackModule[];
};

export type ContentType = "video" | "short" | "thread" | "newsletter";

export type HubItem = {
  id: string;
  type: ContentType;
  track: TrackId;
  title: string;
  desc: string;
  duration: string;
  href: string;
  thumbnail?: {
    label: string;
    meta: string;
  };
};

export type VideoChannel = {
  platform: string;
  handle: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  formats: string[];
};

export type ExternalVideo = {
  id: string;
  platform: "youtube";
  title: string;
  href: string;
  thumbnail: string;
  published: string;
  channelTitle: string;
  views?: string;
};

export type ResourceItem = {
  title: string;
  desc: string;
  href: string;
  tag: string;
};

export type MissionPillar = {
  title: string;
  desc: string;
};

export type RoadmapStatus = "done" | "doing" | "todo";

export type RoadmapItem = {
  title: string;
  desc?: string;
};

export type RoadmapColumn = {
  status: RoadmapStatus;
  label: string;
  summary: string;
  items: RoadmapItem[];
};

export type RoadmapTrack = {
  id: TrackId;
  columns: RoadmapColumn[];
};

export type PageHero = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
};

export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  contact: {
    heading: string;
    lines: string[];
  };
  backLabel: string;
};

export type SiteContent = {
  metadata: { title: string; description: string };
  statusBar: {
    os: string;
    region: string;
    signal: string;
    langLabel: string;
  };
  nav: {
    langSwitch: string;
    ghostCta: string;
    primaryCta: string;
    menuLabel: string;
    links: NavLink[];
  };
  hero: {
    tags: HeroTag[];
    titleLine1: string;
    titleAccent: string;
    titleTail: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    terminal: {
      chromeTitle: string;
      liveLabel: string;
      stages: HeroStage[];
      planHead: string;
      planRows: { k: string; v: string }[];
      planTags: string[];
      sitePreview: { head: string; accent: string };
    };
    stats: HeroStat[];
  };
  marquee: string[];
  mission: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    metrics: HeroStat[];
    pillars: MissionPillar[];
  };
  tracks: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    allLink: string;
    cards: TrackCard[];
  };
  community: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    bullets: string[];
    signupTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    postLabel: string;
    postPlaceholder: string;
    joinButton: string;
    postButton: string;
    signedInPrefix: string;
    emptyState: string;
    demoNote: string;
  };
  hub: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    filterAll: string;
    typeLabels: Record<ContentType, string>;
    videoChannels: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      channels: VideoChannel[];
    };
    items: HubItem[];
  };
  resources: {
    hero: PageHero;
    sections: {
      title: string;
      items: ResourceItem[];
    }[];
  };
  roadmap: {
    hero: PageHero;
    sourceLabel: string;
    sourceHref: string;
    legend: Record<RoadmapStatus, string>;
    tracks: RoadmapTrack[];
  };
  join: {
    hero: PageHero;
    steps: MissionPillar[];
    form: {
      title: string;
      name: string;
      email: string;
      role: string;
      goal: string;
      button: string;
      note: string;
    };
  };
  contact: {
    hero: PageHero;
    options: MissionPillar[];
    form: {
      title: string;
      name: string;
      email: string;
      org: string;
      message: string;
      button: string;
    };
  };
  pages: {
    mission: PageHero & { sections: LegalSection[] };
    tracks: PageHero;
    roadmap: PageHero;
    brand: PageHero;
    community: PageHero;
    hub: PageHero;
  };
  cta: {
    eyebrow: string;
    titleLine1: string;
    titleAccent: string;
    description: string;
    placeholder: string;
    button: string;
  };
  footer: {
    groups: FooterGroup[];
  };
  legal: {
    about: LegalPageCopy;
    privacy: LegalPageCopy;
    terms: LegalPageCopy;
  };
};

function stageContent(locale: Locale, base: SiteContent): SiteContent {
  const ar = locale === "ar";
  const t = (en: string, arabic: string) => ar ? arabic : en;
  const cards = curriculum(locale);
  const homeIntro = t("Build useful AI agents, turn ideas into services, and share what works with a community of Arab builders.", "ابنِ وكلاء ذكاء اصطناعي مفيدة، وحوّل الأفكار إلى خدمات، وشارك ما ينجح مع مجتمع من البنّائين العرب.");
  const intro = t("Check your prerequisites, learn the basics, then build reliable agents and coordinated systems.", "تحقق من استعدادك، تعلّم الأساسيات، ثم ابنِ وكلاء موثوقة وأنظمة منسّقة.");
  const stageHero = { eyebrow: t("THE AGENT SPECTRUM", "طيف بناء الوكلاء"), title: t("From readiness", "من الاستعداد"), accent: t("to agent systems.", "إلى أنظمة الوكلاء."), intro };
  return {
    ...base,
    metadata: { title: t("Bannaa — Learn to build AI agents", "بنّاء — تعلّم بناء وكلاء الذكاء الاصطناعي"), description: intro },
    nav: { ...base.nav, links: [...base.nav.links.filter(link => !["tracks", "roadmap", "resources"].includes(link.id)), { id: "spectrum", label: t("Agent Spectrum", "طيف الوكلاء"), href: `/${locale}/spectrum` }, { id: "consultation", label: t("Consultation", "استشارة"), href: `/${locale}/consultation` }] },
    hero: base.hero,
    tracks: { ...base.tracks, eyebrow: t("YOUR PROGRESSION", "رحلتك"), title: t("Ready. Build.", "استعد. ابنِ."), titleAccent: t("Improve.", "حسّن."), description: intro, allLink: t("View the curriculum", "عرض المنهج"), cards },
    marquee: t("PROMPTS|CONTEXT|TOOLS|SKILLS|HOOKS|AGENT LOOPS|EVALUATION|COORDINATION", "التوجيهات|السياق|الأدوات|المهارات|الخطافات|حلقات الوكلاء|التقييم|التنسيق").split("|"),
    mission: { ...base.mission, title: t("AI talent.", "مهارات الذكاء الاصطناعي."), titleAccent: t("Built through practice.", "تُبنى بالممارسة."), description: t("Our ambition remains 100 small Arab companies. The path starts with people who can build, deploy, evaluate, and improve agent systems.", "طموحنا يبقى 100 شركة عربية صغيرة. الطريق يبدأ بأشخاص يستطيعون بناء أنظمة الوكلاء ونشرها وتقييمها وتحسينها."), pillars: [{ title: t("Build useful services", "ابنِ خدمات مفيدة"), desc: homeIntro }, { title: t("Share your experience", "شارك تجربتك"), desc: t("Publish experiments and lessons from real projects.", "انشر التجارب والدروس من مشاريع حقيقية.") }, { title: t("Get expert input", "استفد من الاستشارة"), desc: t("Discuss your next agent project with the team.", "ناقش مشروع الوكيل القادم مع الفريق.") }] },
    pages: { ...base.pages, tracks: stageHero, roadmap: stageHero, mission: { ...stageHero, sections: [
      { heading: t("Practical AI talent", "مهارات عملية في الذكاء الاصطناعي"), body: [intro, t("We help Arab builders develop the skills to create useful agent services and small, productive companies.", "نساعد البنّائين العرب على اكتساب مهارات إنشاء خدمات وكلاء مفيدة وشركات صغيرة عالية الإنتاجية.")] },
      ...cards.map(c => ({ heading: c.title, body: [c.desc, ...c.outcomes] }))
    ] } },
    join: { ...base.join, hero: { ...stageHero, title: t("Ready to build?", "جاهز للبناء؟"), accent: t("Start with the prerequisites.", "ابدأ بالمتطلبات المسبقة.") }, steps: cards.map(c => ({ title: c.title, desc: c.desc })) },
    cta: { ...base.cta, titleLine1: t("Your next idea", "فكرتك القادمة"), titleAccent: t("starts here.", "تبدأ هنا."), description: homeIntro },
    footer: { ...base.footer, groups: base.footer.groups.map((g, i) => i === 0 ? { ...g, items: [...g.items, { label: t("Agent Spectrum", "طيف الوكلاء"), href: `/${locale}/spectrum` }, { label: t("Consultation", "استشارة"), href: `/${locale}/consultation` }] } : g) },
    legal: { ...base.legal, about: { ...base.legal.about, intro, sections: cards.map(c => ({ heading: c.title, body: [c.desc] })) } }
  };
}

const officeAddress = [
  "10claws Inc.",
  "2500 CityWest Blvd Ste. 150",
  "Houston, TX 77042",
  "United States"
];

const baseContent: Record<Locale, SiteContent> = {
  ar: {
    metadata: {
      title: "بنّاء — شركات صغيرة بقوة الذكاء الاصطناعي",
      description:
        "بنّاء يساعد الشباب العربي على بناء شركات ذكاء اصطناعي صغيرة من 1 إلى 10 أشخاص قادرة على تحقيق إيرادات ضخمة."
    },
    statusBar: {
      os: "BANNAA_OS // v4.0 // ACTIVE",
      region: "REGION: ARAB WORLD",
      signal: "MISSION: 100 MICRO-STARTUPS",
      langLabel: "LANG: العربية"
    },
    nav: {
      langSwitch: "EN",
      ghostCta: "المجتمع",
      primaryCta: "انضم الآن ↙",
      menuLabel: "القائمة",
      links: [
        { id: "home", label: "الرئيسية", href: "/ar" },
        { id: "mission", label: "المهمة", href: "/ar/mission" },
        { id: "tracks", label: "تعلّم", href: "/ar/tracks" },
        { id: "roadmap", label: "الخطة", href: "/ar/roadmap" },
        { id: "community", label: "المجتمع", href: "/ar/community" },
      ]
    },
    hero: {
      tags: [
        { label: "عربي أوّلاً" },
        { label: "شركات من 1–10 أشخاص" },
        { label: "100 شركة صغيرة", tone: "warn" }
      ],
      titleLine1: "ابنِ شركة",
      titleAccent: "صغيرة.",
      titleTail: " كبيرة الأثر.",
      description:
        "بنّاء يدرّب الجيل العربي القادم على تأسيس وتشغيل شركات صغيرة عالية الإنتاجية مدعومة بالذكاء الاصطناعي: مهارة مؤسس، بناء منتجات، وأنظمة عمل لفِرق من شخص واحد إلى عشرة.",
      primaryCta: "انضم للمجتمع ↙",
      secondaryCta: "استكشف المسارات",
      terminal: {
        chromeTitle: "bannaa://micro-startup-system — live",
        liveLabel: "● live",
        stages: [
          { key: "01 · FOUNDER", status: "validating problem…" },
          { key: "02 · AI BUILD", status: "shipping prototype…" },
          { key: "03 · BUILDER", status: "automating workflow…" },
          { key: "04 · SCALE", status: "finding revenue loops…" }
        ],
        planHead: "// COMPANY_OF_10.md",
        planRows: [
          { k: "المهمة", v: "100 شركة عربية صغيرة" },
          { k: "الفريق", v: "1–10 أشخاص" },
          { k: "النموذج", v: "AI-native · فريق صغير" },
          { k: "المخرجات", v: "منتج + توزيع + إيراد" },
          { k: "اللغة", v: "العربية أوّلاً" }
        ],
        planTags: ["founder", "ai-native", "operator", "revenue"],
        sitePreview: { head: "شركة صغيرة.", accent: "نتيجة كبيرة." }
      },
      stats: [
        { num: "10k", label: "شركة صغيرة مستهدفة", sub: "MICRO-STARTUPS" },
        { num: "1–10", label: "حجم الفريق", sub: "PEOPLE" },
        { num: "3", label: "مسارات مهارية", sub: "TRACKS" },
        { num: "MENA", label: "مجتمع عربي", sub: "MARKET" }
      ]
    },
    marquee: [
      "مؤسسون لا متفرجون",
      "منتج قبل العرض",
      "توزيع قبل الضجيج",
      "ذكاء اصطناعي في صميم الشركة",
      "شركة من عشرة أشخاص",
      "إيراد لا انطباعات",
      "ابنِ ثم قِس",
      "مجتمع يشارك ما يتعلّمه"
    ],
    mission: {
      eyebrow: "/ المهمة",
      title: "100",
      titleAccent: "شركة عربية صغيرة.",
      description:
        "بنّاء موجود ليجهّز الشباب العربي لطفرة الذكاء الاصطناعي: شركات صغيرة من 1 إلى 10 أشخاص، عالية الإنتاجية، قادرة على بناء منتجات محددة بسرعة وتستهدف إيرادات كبيرة.",
      metrics: [
        { num: "1–10", label: "أشخاص في الشركة", sub: "TEAM MODEL" },
        { num: "$10M+", label: "إيراد مستهدف", sub: "REVENUE AMBITION" },
        { num: "10k", label: "شركة صغيرة", sub: "MICRO-STARTUPS" }
      ],
      pillars: [
        {
          title: "الشباب العربي أمام نافذة جديدة",
          desc: "المنطقة شابة، لكن التجزئة والأنظمة المختلفة وعدم الاستقرار أخّرت ظهور شركات بالسرعة والحجم الممكنين."
        },
        {
          title: "AI يغيّر اقتصاد البناء",
          desc: "المنتجات أصبحت أسهل وأرخص في الإنشاء، والتمويل لم يعد العائق الأول عندما يستطيع فريق صغير الشحن بسرعة."
        },
        {
          title: "100 بدل 100–200",
          desc: "الهدف ليس زيادة طفيفة في عدد الشركات، بل مضاعفة قدرة المنطقة على إنتاج آلاف الشركات الصغيرة عالية الأداء."
        }
      ]
    },
    tracks: {
      eyebrow: "/ 01 — المسارات",
      title: "ثلاث مهارات",
      titleAccent: "لبناء شركة AI.",
      description: "المسارات قابلة للتوسعة: كل مسار يحتوي موضوعات، تمارين، قوالب، ومخرجات عملية.",
      allLink: "ادخل صفحة التعلّم →",
      cards: [
        {
          id: "founder",
          num: "01",
          title: "مهارة المؤسس",
          sub: "FOUNDER SKILL SET",
          desc: "اختيار السوق، فهم الألم، بناء عرض لا يُقاوم، التسعير، البيع، والتوزيع قبل كتابة كود زائد.",
          weeks: "6 أسابيع",
          level: "مبتدئ → مؤسس عامل",
          kind: "foundations",
          outcomes: ["نظام مؤسس فردي", "فريق أقل من عشرة", "قرار تمويل أو ربحية", "تحكم بالرؤية والنمو"],
          modules: [
            { title: "عقلية المؤسس الفردي", desc: "كيف تفكر كبيراً وتبقى خفيف الحركة في شركة من 1 إلى 10 أشخاص." },
            { title: "فريق عالي الأداء", desc: "توظيف AI-native للسرعة والثقافة والمهارة بدل الحجم." },
            { title: "متطلبات المنتج في عصر AI", desc: "تعريف المنتج عندما يستطيع AI شحن مزايا خلال ليلة." },
            { title: "التمويل مقابل الربحية", desc: "فهم حوافز المستثمر، التحكم، وضغط المجلس عندما لا يكون النمو VC-style." },
            { title: "قرارات التوسع", desc: "كيف تحافظ على الرؤية عندما تتجاوز الشركة فريق التأسيس." }
          ]
        },
        {
          id: "ai-building",
          num: "02",
          title: "البناء في عصر AI",
          sub: "BUILDING IN THE AGE OF AI",
          desc: "تحويل الفكرة إلى منتج سريع: نماذج أولية، وكلاء، أتمتة، محتوى، وتحليلات باستخدام أدوات حديثة.",
          weeks: "8 أسابيع",
          level: "مؤسس → مشغّل AI",
          kind: "agents",
          outcomes: ["شحن خلال أيام", "LLM harness", "Agent coding", "مراقبة وتكلفة وأمان"],
          modules: [
            { title: "السرعة كميزة تنافسية", desc: "اختصار دورة البناء من أشهر إلى أيام بدون فقدان الجودة." },
            { title: "فهم LLMs و harnesses", desc: "كيف تعمل النماذج عملياً، وكيف تُحاط بقياس وتحكم وتجارب." },
            { title: "Agent coding", desc: "كتابة الكود مع الوكلاء وللوكلاء، وتقسيم العمل بينهم وبين البشر." },
            { title: "النشر والتطوير المحلي/البعيد", desc: "اختيار بنية تطوير ونشر تناسب فريقاً صغيراً." },
            { title: "المراقبة والاقتصاد والأمان", desc: "Observability، تكلفة التوكن، الاعتمادية، والأمان عندما يكون AI في المسار الحرج." }
          ]
        },
        {
          id: "builder",
          num: "03",
          title: "مهارة البنّاء",
          sub: "BUILDER SKILL SET",
          desc: "مهارات التنفيذ للفريق الصغير: كتابة، تصميم، برمجة بمساعدة AI، عمليات، دعم، ومحتوى قابل للتكرار.",
          weeks: "6 أسابيع",
          level: "متوسط → بنّاء مستقل",
          kind: "media",
          outcomes: ["جنراليست قوي", "تصميم وكتابة وكود", "اختبار ونشر", "Moat لفريق صغير"],
          modules: [
            { title: "من التخصص إلى الجنراليست", desc: "لماذا يجب أن يفهم كل عضو التصميم والمنتج والكود والتجارة." },
            { title: "الوثائق والمواصفات", desc: "كتابة docs و product specs واضحة بمساعدة AI." },
            { title: "البناء والاختبار والنشر", desc: "امتلاك المنتج الحي، اختباره بعمق، وتشغيله بعد الإطلاق." },
            { title: "التغيير بدون احتراق", desc: "ثقافة تقبل تغيّر المنتج كل ثلاثة أشهر وربما إعادة اختراعه كل ستة أشهر." },
            { title: "الموات ومسارات التعلم", desc: "كيف يبني الفريق الصغير دفاعه، وما الذي يتعلمه التقني أو المصمم أو التجاري لسد الفجوات." }
          ]
        }
      ]
    },
    community: {
      eyebrow: "/ المجتمع",
      title: "ادخل غرفة",
      titleAccent: "البنّائين.",
      description:
        "المجتمع هو طبقة التنفيذ: أعضاء ينشرون التقدّم، يسألون، يشاركون قوالب، ويجدون شركاء بناء.",
      bullets: ["انضم باسم وبريد فقط", "انشر تقدّمك أو سؤالك", "ناقش أفكار المسارات والمحتوى", "المحتوى العام يبقى مفتوحاً للجميع"],
      signupTitle: "حساب مجتمع بسيط",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      postLabel: "منشور جديد",
      postPlaceholder: "ما الذي تبنيه أو تحتاج مساعدة فيه؟",
      joinButton: "إنشاء حساب",
      postButton: "نشر",
      signedInPrefix: "مسجّل كـ",
      emptyState: "لا توجد منشورات بعد. ابدأ النقاش الأول.",
      demoNote:
        "هذا نموذج واجهة جاهز للربط بمزوّد auth وقاعدة بيانات. لا تُرسل البيانات إلى خادم حالياً."
    },
    hub: {
      eyebrow: "/ المحتوى",
      title: "آلة محتوى",
      titleAccent: "قابلة للتصفية.",
      description: "فيديوهات، مقاطع قصيرة، خيوط X، ونشرات مرتبة حسب المسار حتى يسهل تحويل فكرة واحدة إلى عدة صيغ.",
      filterAll: "الكل",
      typeLabels: {
        video: "فيديو",
        short: "قصير",
        thread: "خيط X",
        newsletter: "نشرة"
      },
      videoChannels: {
        eyebrow: "/ قنوات الفيديو",
        title: "فيديوهات بنّاء",
        titleAccent: "من TikTok و YouTube.",
        description:
          "أضف فيديوهات قصيرة وطويلة من القناتين، ثم اربط كل فيديو بالمسار المناسب داخل مركز المحتوى.",
        channels: [
          {
            platform: "TikTok",
            handle: "@bannaahq",
            title: "مقاطع قصيرة وسريعة",
            desc: "أفضل مكان للقطات التنفيذ، الأفكار المختصرة، والتجارب السريعة التي تقود الناس إلى المسارات.",
            href: "https://www.tiktok.com/@bannaahq",
            cta: "افتح TikTok",
            formats: ["Shorts", "Founder clips", "AI build clips"]
          },
          {
            platform: "YouTube",
            handle: "@bannaateam",
            title: "فيديوهات شرح أطول",
            desc: "مساحة للفيديوهات التعليمية، شروحات المسارات، والمحادثات العميقة مع مؤسسين وبنّائين.",
            href: "https://www.youtube.com/@bannaateam",
            cta: "افتح YouTube",
            formats: ["Long-form", "Tutorials", "Founder talks"]
          }
        ]
      },
      items: [
        {
          id: "h1",
          type: "video",
          track: "founder",
          title: "كيف تختار مشكلة تدفع؟",
          desc: "إطار سريع لاختبار ألم السوق قبل بناء المنتج.",
          duration: "18 د",
          href: "#",
          thumbnail: {
            label: "PROBLEM / MARKET",
            meta: "FOUNDATION VIDEO"
          }
        },
        {
          id: "h2",
          type: "thread",
          track: "founder",
          title: "خيط: العرض الذي يبيع قبل المنتج",
          desc: "صياغة الوعد، الجمهور، والاعتراضات.",
          duration: "7 تغريدات",
          href: "#"
        },
        {
          id: "h3",
          type: "short",
          track: "ai-building",
          title: "من prompt إلى prototype",
          desc: "لقطة تنفيذية لتحويل brief إلى شاشة أولى.",
          duration: "58 ث",
          href: "#"
        },
        {
          id: "h4",
          type: "newsletter",
          track: "ai-building",
          title: "وكيل أسبوعي لفريق من شخص واحد",
          desc: "نظام تخطيط ومراجعة يختصر اجتماعاً يومياً.",
          duration: "قراءة 5 د",
          href: "#"
        },
        {
          id: "h5",
          type: "video",
          track: "builder",
          title: "آلة المحتوى للمؤسس البنّاء",
          desc: "تحويل بحث واحد إلى فيديو، خيط، ونشرة.",
          duration: "22 د",
          href: "#",
          thumbnail: {
            label: "CONTENT MACHINE",
            meta: "BUILDER VIDEO"
          }
        },
        {
          id: "h6",
          type: "short",
          track: "builder",
          title: "قالب مراجعة أسبوعية",
          desc: "ثلاثة أسئلة تمنع الفريق الصغير من التشتت.",
          duration: "41 ث",
          href: "#"
        }
      ]
    },
    resources: {
      hero: {
        eyebrow: "/ الموارد",
        title: "قوالب وأدوات",
        accent: "للبناء السريع.",
        intro: "موارد عملية قابلة للإضافة: قوالب قرار، دفاتر عمل، قوائم فحص، ومكتبات prompts."
      },
      sections: [
        {
          title: "قوالب المؤسس",
          items: [
            { title: "لوحة اختيار المشكلة", desc: "مقارنة الألم، القدرة على الدفع، وسهولة الوصول.", href: "#", tag: "FOUNDER" },
            { title: "سكريبت مقابلة العميل", desc: "أسئلة تكشف الحاجة بدون قيادة العميل.", href: "#", tag: "SALES" }
          ]
        },
        {
          title: "قوالب البناء",
          items: [
            { title: "Brief منتج AI", desc: "تحويل الفكرة إلى متطلبات واضحة للوكيل أو الفريق.", href: "#", tag: "AI BUILD" },
            { title: "قائمة إطلاق أسبوعية", desc: "ما يجب شحنه وقياسه كل أسبوع.", href: "#", tag: "OPS" }
          ]
        }
      ]
    },
    roadmap: {
      hero: {
        eyebrow: "/ الخطة",
        title: "خارطة المسارات",
        accent: "من الفكرة إلى الشركة.",
        intro:
          "خطة تنفيذية للمحتوى والمهارات داخل المسارات الثلاثة. كل عمود يوضّح ما تم تثبيته، ما يتم بناؤه الآن، وما سيأتي لاحقاً."
      },
      sourceLabel: "مبنية على ملف الهدف والمسارات",
      sourceHref: "/assets/banna-goal-and-tracks.md",
      legend: {
        done: "تم تثبيته كأساس للمسار",
        doing: "قيد التحويل إلى دروس وتمارين وقوالب",
        todo: "قادم في توسعة المنهج والمحتوى"
      },
      tracks: [
        {
          id: "founder",
          columns: [
            {
              status: "done",
              label: "تم",
              summary: "الأساس الفكري والتشغيلي للمؤسس الفردي.",
              items: [
                { title: "ما يعنيه أن تكون مؤسساً فردياً في عصر الذكاء الاصطناعي" },
                { title: "التفكير بشكل كبير مع البقاء خفيف الحركة (شركات من 1 إلى 10 أشخاص تستهدف عشرات أو مئات الملايين)" },
                { title: "عقلية المؤسس الفردي ونظام التشغيل اليومي" },
                { title: "بناء فريق عالي الأداء من أقل من عشرة أشخاص" }
              ]
            },
            {
              status: "doing",
              label: "قيد العمل",
              summary: "تحويل مهارات القيادة الأولى إلى مواد عملية.",
              items: [
                { title: "التوظيف لشركات AI-native (المهارات، الثقافة، السرعة)" },
                { title: "تعريف متطلبات المنتج عندما يستطيع AI شحن المزايا خلال ليلة" },
                { title: "التمويل مقابل البناء الذاتي والبقاء مربحاً" },
                { title: "فهم حوافز المستثمر مقابل حوافز المؤسس" }
              ]
            },
            {
              status: "todo",
              label: "لاحقاً",
              summary: "موضوعات النمو والتمويل والحوكمة عند ظهور النتائج.",
              items: [
                { title: "التعامل مع المجلس في شركات تنمو بأسلوب غير VC" },
                { title: "ماذا يحدث عندما يكون النمو حقيقياً لكنه غير مقبول لدى صناديق رأس المال الجريء" },
                { title: "ضغط المجلس لتغيير الاتجاه نحو معدلات نمو أعلى" },
                { title: "توسيع اتخاذ القرار بعد تجاوز فريق التأسيس" },
                { title: "الحفاظ على سيطرة المؤسس ورؤيته داخل فرق صغيرة عالية الإنتاجية" }
              ]
            }
          ]
        },
        {
          id: "ai-building",
          columns: [
            {
              status: "done",
              label: "تم",
              summary: "إطار البناء السريع وفهم أدوات AI الأساسية.",
              items: [
                { title: "السرعة كميزة تنافسية" },
                { title: "فهم LLMs وكيف تعمل فعلياً للبنّائين" },
                { title: "LLM harnesses: ما هي وكيف تستخدمها" },
                { title: "المنتجات متعددة اللاعبين وخصائص التعاون اللحظي" }
              ]
            },
            {
              status: "doing",
              label: "قيد العمل",
              summary: "تشغيل الوكلاء والنشر والتكرار المستمر.",
              items: [
                { title: "Agent coding: كتابة الكود مع وكلاء AI وللوكلاء" },
                { title: "استراتيجيات نشر المنتجات المدعومة بالذكاء الاصطناعي" },
                { title: "التطوير والاستدلال محلياً مقابل عن بُعد" },
                { title: "حلقات التحديث والاختبار والتكرار المستمر" }
              ]
            },
            {
              status: "todo",
              label: "لاحقاً",
              summary: "موضوعات المنتج المتقدمة عندما يصبح AI في المسار الحرج.",
              items: [
                { title: "الشحن خلال أيام بدلاً من أشهر" },
                { title: "المراقبة والـ observability لأنظمة الوكلاء" },
                { title: "ضبط التكلفة واقتصاد التوكن للفرق الصغيرة" },
                { title: "الأمان والاعتمادية عندما يكون AI في المسار الحرج" }
              ]
            }
          ]
        },
        {
          id: "builder",
          columns: [
            {
              status: "done",
              label: "تم",
              summary: "تعريف مهارة البنّاء الجنراليست في فريق صغير.",
              items: [
                { title: "التحول من الأدوار المتخصصة إلى البنّائين عامّي المهارات" },
                { title: "لماذا يجب أن يكون كل فرد في الفريق جيداً في التصميم" },
                { title: "كتابة وثائق ومواصفات منتج واضحة باستخدام AI" },
                { title: "بناء المنتج بنفسك" },
                { title: "اختبار المنتج بعمق" },
                { title: "نشر النظام الحي وامتلاكه" }
              ]
            },
            {
              status: "doing",
              label: "قيد العمل",
              summary: "تحويل مهارة التنفيذ إلى مسار تطبيقي.",
              items: [
                { title: "التكرار بسرعة بدون احتراق" },
                { title: "ما الذي تغيّر: المهارة الجديدة المتوقعة من كل عضو في الفريق" },
                { title: "صناعة ثقافة فريق مريحة مع التغيير السريع المستمر" },
                { title: "تقبّل أن المنتج قد يتغير بشكل كبير كل ثلاثة أشهر" },
                { title: "تقبّل أن المنتج قد يُعاد اختراعه بالكامل كل ستة أشهر" },
                { title: "منع الاحتراق في بيئات AI عالية السرعة" },
                { title: "كيف يبني كل فريق صغير خندقه التنافسي ويدافع عنه" }
              ]
            },
            {
              status: "todo",
              label: "لاحقاً",
              summary: "الخنادق التنافسية ومسارات التعلم حسب نقطة البداية.",
              items: [
                { title: "أنواع الخنادق التنافسية المناسبة لشركات AI من 1 إلى 10 أشخاص" },
                { title: "كيف تختار ما تتعلمه لاحقاً كصاحب مهارات عامة" },
                { title: "إذا كنت تقنياً: مهارات الأعمال والتصميم التي تتعلمها لسد الفجوات" },
                { title: "إذا كنت مصمماً: المهارات التقنية والتجارية التي تتعلمها لسد الفجوات" },
                { title: "إذا كنت تجارياً: المهارات التقنية والتصميمية التي تتعلمها لسد الفجوات" },
                { title: "مسارات تعلم عملية لكل نقطة بداية" },
                { title: "الموازنة بين العمق والاتساع عندما يكون الوقت محدوداً" }
              ]
            }
          ]
        }
      ]
    },
    join: {
      hero: {
        eyebrow: "/ ابدأ",
        title: "انضم إلى",
        accent: "دفعة البنّائين.",
        intro: "ابدأ بالمجتمع، اختر مسارك، وانشر تقدّمك أسبوعياً حتى تتحول الفكرة إلى شركة صغيرة عاملة."
      },
      steps: [
        { title: "عرّف نفسك", desc: "من أنت، ما السوق الذي تفهمه، وما المهارة التي تريد تقويتها؟" },
        { title: "اختر المسار", desc: "ابدأ بمهارة المؤسس، البناء بالذكاء الاصطناعي، أو مهارة البنّاء." },
        { title: "اشحن علناً", desc: "انشر تقدّمك، اطلب مراجعة، وشارك ما تعلّمته مع المجتمع." }
      ],
      form: {
        title: "طلب انضمام",
        name: "الاسم",
        email: "البريد الإلكتروني",
        role: "مؤسس، بنّاء، طالب، مشغّل؟",
        goal: "ما الشركة أو المهارة التي تريد بناءها؟",
        button: "إرسال الطلب",
        note: "النموذج جاهز للربط بخدمة بريد أو CRM عند الإطلاق."
      }
    },
    contact: {
      hero: {
        eyebrow: "/ تواصل",
        title: "شراكات",
        accent: "وتعاون.",
        intro: "للمؤسسات، الجامعات، الشركات، والمجتمعات التي تريد تمكين جيل عربي يبني شركات AI صغيرة."
      },
      options: [
        { title: "شراكات تعليمية", desc: "تصميم برامج ودفعات للمؤسسين والطلاب والبنّائين." },
        { title: "رعاية محتوى", desc: "دعم فيديوهات، نشرات، أو تحديات بناء مرتبطة بالمسارات." },
        { title: "مجتمع وشبكات", desc: "فتح قنوات تعاون بين المدن، الجامعات، والمجتمعات التقنية." }
      ],
      form: {
        title: "رسالة سريعة",
        name: "الاسم",
        email: "البريد الإلكتروني",
        org: "الجهة",
        message: "كيف يمكن أن نتعاون؟",
        button: "إرسال"
      }
    },
    pages: {
      mission: {
        eyebrow: "/ المهمة",
        title: "مهمة بنّاء",
        accent: "تجهيز الشباب العربي لطفرة AI.",
        intro:
          "العالم العربي شاب، لكن بناء الشركات فيه لم يحدث بالسرعة والحجم الممكنين. الذكاء الاصطناعي يغيّر المعادلة، وبنّاء يحوّل هذه اللحظة إلى نظام تعلّم وبناء.",
        sections: [
          {
            heading: "لماذا الآن؟",
            body: [
              "العالم العربي مليء بالشباب، ومعظم المنطقة تحت سن الخامسة والعشرين. تاريخياً، لم تنتج المنطقة شركات بالسرعة أو الحجم الذي يفترض أن تنتجه.",
              "التجزئة بين الأسواق، اختلاف البيئات القانونية والحكومية، وعدم الاستقرار الإقليمي تركت جيلاً يستخدم منتجات وحلولاً بُنيت لعصور سابقة."
            ]
          },
          {
            heading: "ما الذي غيّره الذكاء الاصطناعي؟",
            body: [
              "AI جعل توليد المنتجات أسهل وأرخص بكثير. المنتجات المحددة جداً يمكن الآن بناؤها وشحنها بواسطة فرق صغيرة.",
              "التمويل، الذي كان عائقاً رئيسياً سابقاً، لم يعد القيد الأول. القيد الجديد هو المهارة: من يعرف ماذا يبني، كيف يشحن، وكيف يشغّل شركة صغيرة بكفاءة استثنائية."
            ]
          },
          {
            heading: "الهدف الأساسي",
            body: [
              "مساعدة الشباب العربي على بناء شركات صغيرة مدعومة بالذكاء الاصطناعي من 1 إلى 10 أشخاص، تعمل بإنتاجية عالية ويمكنها تحقيق عشرات إلى مئات الملايين من الدولارات في الإيراد.",
              "بدلاً من 100–200 شركة ناشئة ظهرت في العالم العربي خلال العقود الماضية، يهدف بنّاء إلى تمكين إنشاء 100 شركة صغيرة."
            ]
          },
          {
            heading: "كيف نستخدم المسارات",
            body: [
              "كل ما يعلّمه بنّاء وكل ما ينتجه من محتوى يعود إلى واحد أو أكثر من ثلاثة مسارات: مهارة المؤسس، البناء في عصر AI، ومهارة البنّاء.",
              "أي فيديو، خيط X، نشرة، مورد، أو نقاش مجتمعي يجب أن يدعم الهدف الأكبر: 100 شركة صغيرة عالية الإنتاجية في العالم العربي."
            ]
          }
        ]
      },
      tracks: {
        eyebrow: "/ تعلّم",
        title: "المناهج",
        accent: "قابلة للتوسعة.",
        intro: "كل مسار يبدأ بإطار واضح، ثم تمارين، محتوى، قوالب، ومخرجات يمكن قياسها."
      },
      roadmap: {
        eyebrow: "/ الخطة",
        title: "خارطة المسارات",
        accent: "تم، قيد العمل، لاحقاً.",
        intro: "عرض واضح لما أصبح أساساً في المنهج، وما يتم تحويله إلى محتوى الآن، وما ينتظر توسعة لاحقة."
      },
      brand: {
        eyebrow: "/ الهوية",
        title: "دليل هوية بنّاء",
        accent: "الشعار، الألوان، والاستخدام.",
        intro: "المرجع البصري المختصر لهوية بنّاء: نظام الشعار، المساحات، الألوان، الخطوط، وأمثلة الاستخدام."
      },
      community: {
        eyebrow: "/ المجتمع",
        title: "مجتمع بنّاء",
        accent: "على واتساب.",
        intro: "شارك ما تبنيه، ناقش تجاربك، وتعلّم مع مجتمع من البنّائين العرب."
      },
      hub: {
        eyebrow: "/ المحتوى",
        title: "كل فكرة",
        accent: "بعدة صيغ.",
        intro: "مركز محتوى مصمم ليكبر: فيديوهات، shorts، خيوط X، ونشرات قابلة للتصفية حسب المسار."
      }
    },
    cta: {
      eyebrow: "/ JOIN.THE.BUILDERS",
      titleLine1: "ابدأ ببناء",
      titleAccent: "شركة صغيرة.",
      description: "انضم للمجتمع واختر مسارك الأول. لا تحتاج فريقاً كبيراً؛ تحتاج نظاماً واضحاً.",
      placeholder: "بريدك الإلكتروني",
      button: "انضم ↙"
    },
    footer: {
      groups: [
        {
          title: "الموقع",
          items: [
            { label: "المهمة", href: "/ar/mission" },
            { label: "تعلّم", href: "/ar/tracks" },
            { label: "الخطة", href: "/ar/roadmap" },
            { label: "دليل الهوية", href: "/ar/brand" },
            { label: "المجتمع", href: "/ar/community" },
          ]
        },
        {
          title: "ابدأ",
          items: [
            { label: "انضم", href: "/ar/join" },
            { label: "الشراكات", href: "/ar/contact" },
            { label: "عن بنّاء", href: "/ar/about" }
          ]
        },
        {
          title: "قانوني",
          items: [
            { label: "الخصوصية", href: "/ar/privacy" },
            { label: "الشروط", href: "/ar/terms" }
          ]
        }
      ]
    },
    legal: {
      about: {
        eyebrow: "/ عن بنّاء",
        title: "بنّاء. منصة للشركات الصغيرة في عصر AI.",
        intro:
          "بنّاء يساعد الشباب العربي على بناء شركات صغيرة مدعومة بالذكاء الاصطناعي، يقودها فريق صغير عالي الإنتاجية.",
        updated: "آخر تحديث: 8 أغسطس 2026",
        sections: [
          {
            heading: "مَن نحن",
            body: [
              "بنّاء مُشغَّل من قِبل شركة 10claws Inc.، وهي شركة مُسجَّلة في ولاية تكساس الأمريكيّة.",
              "نُركّز على مهارات المؤسسين والبنّائين في عصر الذكاء الاصطناعي: السوق، المنتج، التوزيع، التشغيل، والمحتوى."
            ]
          },
          {
            heading: "ما نصنعه",
            body: [
              "مسارات تعليمية، مجتمع نقاش، مركز محتوى، وموارد عملية تساعد الفرق الصغيرة على الشحن والتعلّم بسرعة."
            ]
          }
        ],
        contact: { heading: "تواصل معنا", lines: officeAddress },
        backLabel: "↩ العودة للرئيسية"
      },
      privacy: {
        eyebrow: "/ سياسة الخصوصيّة",
        title: "الخصوصيّة.",
        intro: "تُوضِّح هذه السياسة ما نجمعه عند زيارة موقع بنّاء أو استخدام نماذج الانضمام.",
        updated: "آخر تحديث: 8 أغسطس 2026",
        sections: [
          {
            heading: "المعلومات التي نجمعها",
            body: [
              "قد نجمع بيانات تحليلية مجهولة حول الصفحات والأجهزة ومصادر الزيارة لتحسين الموقع.",
              "عند إرسال نموذج، نجمع البيانات التي تقدمها طوعاً مثل الاسم والبريد الإلكتروني والرسالة."
            ]
          },
          {
            heading: "كيف نستخدمها",
            body: [
              "نستخدم البيانات لتحسين تجربة الموقع، إدارة طلبات الانضمام، والرد على الشراكات والاستفسارات. لا نبيع بياناتك."
            ]
          },
          {
            heading: "حقوقك",
            body: ["يمكنك طلب تعديل بياناتك أو حذفها عبر مراسلتنا على بيانات الاتصال أدناه."]
          }
        ],
        contact: { heading: "جهة الاتصال", lines: officeAddress },
        backLabel: "↩ العودة للرئيسية"
      },
      terms: {
        eyebrow: "/ شروط الاستخدام",
        title: "الشروط.",
        intro: "باستخدامك موقع بنّاء، فإنك توافق على هذه الشروط.",
        updated: "آخر تحديث: 8 أغسطس 2026",
        sections: [
          {
            heading: "استخدام الموقع",
            body: ["الموقع مخصص للتعلم، بناء المجتمع، واكتشاف الموارد. لا يُسمح باستخدامه لنشاط غير قانوني."]
          },
          {
            heading: "المحتوى والملكية",
            body: [
              "المحتوى والشعارات والتصاميم مملوكة لشركة 10claws Inc. ما لم يُذكر خلاف ذلك.",
              "تحتفظ بملكية ما تنشره في المجتمع، وتمنحنا حق عرضه داخل الخدمة."
            ]
          },
          {
            heading: "إخلاء المسؤولية",
            body: ["الموقع يقدم كما هو دون ضمانات. أنت مسؤول عن قراراتك التجارية والتنفيذية."]
          }
        ],
        contact: { heading: "جهة الاتصال", lines: officeAddress },
        backLabel: "↩ العودة للرئيسية"
      }
    }
  },
  en: {
    metadata: {
      title: "Bannaa — Lean AI-powered companies for Arab builders",
      description:
        "Bannaa helps Arab youth build AI-powered companies of 1 to 10 people that can reach massive revenue with lean teams."
    },
    statusBar: {
      os: "BANNAA_OS // v4.0 // ACTIVE",
      region: "REGION: ARAB WORLD",
      signal: "MISSION: 100 MICRO-STARTUPS",
      langLabel: "LANG: EN"
    },
    nav: {
      langSwitch: "AR",
      ghostCta: "Community",
      primaryCta: "Join now ↙",
      menuLabel: "Menu",
      links: [
        { id: "home", label: "Home", href: "/en" },
        { id: "mission", label: "Mission", href: "/en/mission" },
        { id: "tracks", label: "Learn", href: "/en/tracks" },
        { id: "roadmap", label: "Roadmap", href: "/en/roadmap" },
        { id: "community", label: "Community", href: "/en/community" },
      ]
    },
    hero: {
      tags: [
        { label: "Arabic-first" },
        { label: "Companies of 1–10" },
        { label: "100 micro-startups", tone: "warn" }
      ],
      titleLine1: "Build a",
      titleAccent: "small company.",
      titleTail: " Big outcome.",
      description:
        "Bannaa trains the next generation of Arab founders and builders to launch lean, AI-powered companies: founder skills, product building, and operating systems for teams of one to ten.",
      primaryCta: "Join the community ↙",
      secondaryCta: "Explore tracks",
      terminal: {
        chromeTitle: "bannaa://micro-startup-system — live",
        liveLabel: "● live",
        stages: [
          { key: "01 · FOUNDER", status: "validating problem…" },
          { key: "02 · AI BUILD", status: "shipping prototype…" },
          { key: "03 · BUILDER", status: "automating workflow…" },
          { key: "04 · SCALE", status: "finding revenue loops…" }
        ],
        planHead: "// COMPANY_OF_10.md",
        planRows: [
          { k: "Mission", v: "100 Arab micro-startups" },
          { k: "Team", v: "1–10 people" },
          { k: "Model", v: "AI-native · lean" },
          { k: "Outputs", v: "Product + distribution + revenue" },
          { k: "Language", v: "Arabic-first" }
        ],
        planTags: ["founder", "ai-native", "operator", "revenue"],
        sitePreview: { head: "Small company.", accent: "Large result." }
      },
      stats: [
        { num: "10k", label: "Target micro-startups", sub: "MICRO-STARTUPS" },
        { num: "1–10", label: "Team size", sub: "PEOPLE" },
        { num: "3", label: "Skill tracks", sub: "TRACKS" },
        { num: "MENA", label: "Arab community", sub: "MARKET" }
      ]
    },
    marquee: [
      "Founders, not spectators",
      "Product before pitch",
      "Distribution before noise",
      "AI at the operating core",
      "A company of ten",
      "Revenue over impressions",
      "Build then measure",
      "A community that ships in public"
    ],
    mission: {
      eyebrow: "/ mission",
      title: "100",
      titleAccent: "Arab micro-startups.",
      description:
        "Bannaa exists to get Arab youth ready for the AI boom: small companies of 1 to 10 people, operating with exceptional productivity, building specific products quickly, and aiming at serious revenue.",
      metrics: [
        { num: "1–10", label: "People per company", sub: "TEAM MODEL" },
        { num: "$10M+", label: "Revenue ambition", sub: "REVENUE AMBITION" },
        { num: "10k", label: "Micro-startups", sub: "MICRO-STARTUPS" }
      ],
      pillars: [
        {
          title: "Arab youth have a new window",
          desc: "The region is young, but fragmentation, legal differences, government complexity, and instability slowed company creation."
        },
        {
          title: "AI changes the economics of building",
          desc: "Products are easier and cheaper to create, and funding is no longer the primary constraint when small teams can ship fast."
        },
        {
          title: "100 instead of 100–200",
          desc: "The goal is not a marginal increase in startups; it is a step-change in the region's ability to produce high-output micro-companies."
        }
      ]
    },
    tracks: {
      eyebrow: "/ 01 — tracks",
      title: "Three skills",
      titleAccent: "for building AI companies.",
      description: "Expandable tracks with topics, exercises, templates, and measurable outputs.",
      allLink: "Open learn page →",
      cards: [
        {
          id: "founder",
          num: "01",
          title: "Founder Skill Set",
          sub: "FOUNDER SKILL SET",
          desc: "Market selection, customer pain, irresistible offers, pricing, sales, and distribution before writing too much code.",
          weeks: "6 weeks",
          level: "Beginner → operating founder",
          kind: "foundations",
          outcomes: ["Solo founder operating system", "Team under ten", "Funding or profitability decision", "Founder control and vision"],
          modules: [
            { title: "Solo founder mindset", desc: "Think big while staying lean in a company of 1 to 10 people." },
            { title: "High-performance small teams", desc: "Hire for AI-native speed, culture, and capability instead of headcount." },
            { title: "Product requirements in the AI era", desc: "Define products when AI can ship features overnight." },
            { title: "Fundraising versus profitability", desc: "Understand investor incentives, control, board pressure, and non-VC-style growth." },
            { title: "Scaling decisions", desc: "Maintain vision as the company grows past the founding team." }
          ]
        },
        {
          id: "ai-building",
          num: "02",
          title: "Building in the Age of AI",
          sub: "BUILDING IN THE AGE OF AI",
          desc: "Turn an idea into a fast product: prototypes, agents, automation, content, and analytics with modern tools.",
          weeks: "8 weeks",
          level: "Founder → AI operator",
          kind: "agents",
          outcomes: ["Ship in days", "LLM harness", "Agent coding", "Monitoring, cost, and security"],
          modules: [
            { title: "Speed as advantage", desc: "Compress build cycles from months to days without giving up quality." },
            { title: "LLMs and harnesses", desc: "Understand how models work for builders and how to wrap them with tests and control." },
            { title: "Agent coding", desc: "Write code with agents and for agents, dividing work between humans and systems." },
            { title: "Deployment and local/remote development", desc: "Choose a development, inference, and deployment setup that fits a tiny team." },
            { title: "Observability, economics, and security", desc: "Monitor reliability, token cost, and risk when AI sits in the critical path." }
          ]
        },
        {
          id: "builder",
          num: "03",
          title: "Builder Skill Set",
          sub: "BUILDER SKILL SET",
          desc: "Execution skills for tiny teams: writing, design, AI-assisted coding, operations, support, and repeatable content.",
          weeks: "6 weeks",
          level: "Intermediate → independent builder",
          kind: "media",
          outcomes: ["Strong generalists", "Design, docs, and code", "Testing and deployment", "Moat for a small team"],
          modules: [
            { title: "From specialist to generalist", desc: "Why every team member must understand design, product, code, and business." },
            { title: "Documents and specs", desc: "Write clear documents and product specs with AI." },
            { title: "Build, test, deploy", desc: "Own the live product, test it deeply, and operate it after launch." },
            { title: "Change without burnout", desc: "Build a culture that accepts major product change every three months and reinvention every six." },
            { title: "Moats and learning paths", desc: "Choose what to learn next based on whether you start technical, design-oriented, or business-oriented." }
          ]
        }
      ]
    },
    community: {
      eyebrow: "/ community",
      title: "Enter the",
      titleAccent: "builder room.",
      description:
        "The community is the execution layer: members post progress, ask questions, share templates, and find building partners.",
      bullets: ["Join with name and email", "Post progress or questions", "Discuss track ideas and content", "Public pages remain open to everyone"],
      signupTitle: "Simple community account",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      postLabel: "New post",
      postPlaceholder: "What are you building or where do you need help?",
      joinButton: "Create account",
      postButton: "Post",
      signedInPrefix: "Signed in as",
      emptyState: "No posts yet. Start the first discussion.",
      demoNote:
        "This is a production UI stub ready to connect to an auth provider and database. It does not send data to a server yet."
    },
    hub: {
      eyebrow: "/ content",
      title: "A filterable",
      titleAccent: "content machine.",
      description: "Videos, shorts, X threads, and newsletters organized by track so one idea can become many formats.",
      filterAll: "All",
      typeLabels: {
        video: "Video",
        short: "Short",
        thread: "X thread",
        newsletter: "Newsletter"
      },
      videoChannels: {
        eyebrow: "/ video channels",
        title: "Bannaa videos",
        titleAccent: "from TikTok and YouTube.",
        description:
          "Add short and long-form videos from both channels, then map each video back to the right learning track in the content hub.",
        channels: [
          {
            platform: "TikTok",
            handle: "@bannaahq",
            title: "Short execution clips",
            desc: "The place for quick ideas, build clips, and fast experiments that pull people into the tracks.",
            href: "https://www.tiktok.com/@bannaahq",
            cta: "Open TikTok",
            formats: ["Shorts", "Founder clips", "AI build clips"]
          },
          {
            platform: "YouTube",
            handle: "@bannaateam",
            title: "Longer explainers",
            desc: "The home for teaching videos, track explainers, and deeper conversations with founders and builders.",
            href: "https://www.youtube.com/@bannaateam",
            cta: "Open YouTube",
            formats: ["Long-form", "Tutorials", "Founder talks"]
          }
        ]
      },
      items: [
        {
          id: "h1",
          type: "video",
          track: "founder",
          title: "How to pick a problem people pay for",
          desc: "A fast frame for testing market pain before building.",
          duration: "18 min",
          href: "#",
          thumbnail: {
            label: "PROBLEM / MARKET",
            meta: "FOUNDATION VIDEO"
          }
        },
        {
          id: "h2",
          type: "thread",
          track: "founder",
          title: "Thread: the offer that sells before product",
          desc: "Promise, audience, and objections.",
          duration: "7 posts",
          href: "#"
        },
        {
          id: "h3",
          type: "short",
          track: "ai-building",
          title: "Prompt to prototype",
          desc: "An execution clip for turning a brief into a first screen.",
          duration: "58 sec",
          href: "#"
        },
        {
          id: "h4",
          type: "newsletter",
          track: "ai-building",
          title: "A weekly agent for a company of one",
          desc: "A planning and review system that replaces a daily meeting.",
          duration: "5 min read",
          href: "#"
        },
        {
          id: "h5",
          type: "video",
          track: "builder",
          title: "The founder-builder content machine",
          desc: "Turn one research pass into video, thread, and newsletter.",
          duration: "22 min",
          href: "#",
          thumbnail: {
            label: "CONTENT MACHINE",
            meta: "BUILDER VIDEO"
          }
        },
        {
          id: "h6",
          type: "short",
          track: "builder",
          title: "Weekly review template",
          desc: "Three questions that keep tiny teams focused.",
          duration: "41 sec",
          href: "#"
        }
      ]
    },
    resources: {
      hero: {
        eyebrow: "/ resources",
        title: "Templates and tools",
        accent: "for fast building.",
        intro: "Practical resources designed to grow: decision templates, workbooks, checklists, and prompt libraries."
      },
      sections: [
        {
          title: "Founder templates",
          items: [
            { title: "Problem selection board", desc: "Compare pain, willingness to pay, and reach.", href: "#", tag: "FOUNDER" },
            { title: "Customer interview script", desc: "Questions that reveal need without leading the customer.", href: "#", tag: "SALES" }
          ]
        },
        {
          title: "Build templates",
          items: [
            { title: "AI product brief", desc: "Turn an idea into clear requirements for an agent or team.", href: "#", tag: "AI BUILD" },
            { title: "Weekly launch checklist", desc: "What to ship and measure every week.", href: "#", tag: "OPS" }
          ]
        }
      ]
    },
    roadmap: {
      hero: {
        eyebrow: "/ roadmap",
        title: "Track roadmap",
        accent: "from idea to company.",
        intro:
          "An execution map for the three tracks. Each column shows what is already framed, what is being turned into lessons and templates now, and what comes next."
      },
      sourceLabel: "Based on the goal and tracks file",
      sourceHref: "/assets/banna-goal-and-tracks.md",
      legend: {
        done: "Established as the track foundation",
        doing: "Being turned into lessons, exercises, and templates",
        todo: "Coming in curriculum and content expansion"
      },
      tracks: [
        {
          id: "founder",
          columns: [
            {
              status: "done",
              label: "Done",
              summary: "The mindset and operating base for a solo founder.",
              items: [
                { title: "What it means to be a solo founder in the AI era" },
                { title: "Thinking big while staying lean (1–10 person companies targeting tens or hundreds of millions)" },
                { title: "Solo founder mindset and daily operating system" },
                { title: "Building a highly performative team of under ten people" }
              ]
            },
            {
              status: "doing",
              label: "Doing",
              summary: "Turning early leadership skills into practical material.",
              items: [
                { title: "Hiring for AI-native companies (skills, culture, speed)" },
                { title: "Defining product requirements when AI can ship features overnight" },
                { title: "Fundraising versus bootstrapping and staying profitable" },
                { title: "Understanding investor incentives versus founder incentives" }
              ]
            },
            {
              status: "todo",
              label: "To do",
              summary: "Growth, funding, and governance topics once results appear.",
              items: [
                { title: "Dealing with the board in non-VC-style growth companies" },
                { title: "What happens when growth is real but not “VC acceptable”" },
                { title: "Board pressure to change direction for higher growth rates" },
                { title: "Scaling decision-making as the company grows past the founding team" },
                { title: "Maintaining founder control and vision in small high-output teams" }
              ]
            }
          ]
        },
        {
          id: "ai-building",
          columns: [
            {
              status: "done",
              label: "Done",
              summary: "The fast-building frame and core AI tooling basics.",
              items: [
                { title: "Speed as a competitive advantage" },
                { title: "Understanding LLMs and how they actually work for builders" },
                { title: "LLM harnesses: what they are and how to use them" },
                { title: "Multiplayer products and real-time collaboration features" }
              ]
            },
            {
              status: "doing",
              label: "Doing",
              summary: "Operating agents, deployment, and continuous iteration.",
              items: [
                { title: "Agent coding: writing code with and for AI agents" },
                { title: "Deployment strategies for AI-powered products" },
                { title: "Local versus remote development and inference" },
                { title: "Continuous update, test, and iterate loops" }
              ]
            },
            {
              status: "todo",
              label: "To do",
              summary: "Advanced product topics once AI sits in the critical path.",
              items: [
                { title: "Shipping in days instead of months" },
                { title: "Observability and monitoring for agent-based systems" },
                { title: "Cost control and token economics for small teams" },
                { title: "Security and reliability when AI is in the critical path" }
              ]
            }
          ]
        },
        {
          id: "builder",
          columns: [
            {
              status: "done",
              label: "Done",
              summary: "The definition of the generalist builder on a tiny team.",
              items: [
                { title: "The shift from specialized roles to generalist builders" },
                { title: "Why everyone on the team must be good at design" },
                { title: "Writing clear documents and product specs with AI" },
                { title: "Building the product yourself" },
                { title: "Testing the product thoroughly" },
                { title: "Deploying and owning the live system" }
              ]
            },
            {
              status: "doing",
              label: "Doing",
              summary: "Turning execution skill into an applied learning path.",
              items: [
                { title: "Iterating rapidly without burnout" },
                { title: "What changed: the new expected skill set for every team member" },
                { title: "Creating a team culture comfortable with continuous fast change" },
                { title: "Accepting that the product can change significantly every three months" },
                { title: "Accepting that the product can be reinvented entirely every six months" },
                { title: "Preventing burnout in high-velocity AI environments" },
                { title: "How each small team builds and defends its own moat" }
              ]
            },
            {
              status: "todo",
              label: "To do",
              summary: "Moats and learning paths based on each builder's starting point.",
              items: [
                { title: "Moat types that work for 1–10 person AI companies" },
                { title: "How to choose what to learn next as a generalist" },
                { title: "If you are technical: what business and design skills to learn to cover the gaps" },
                { title: "If you are design-oriented: what technical and business skills to learn to cover the gaps" },
                { title: "If you are business-oriented: what technical and design skills to learn to cover the gaps" },
                { title: "Practical learning paths for each starting point" },
                { title: "Balancing depth versus breadth when time is limited" }
              ]
            }
          ]
        }
      ]
    },
    join: {
      hero: {
        eyebrow: "/ get started",
        title: "Join the",
        accent: "builder cohort.",
        intro: "Start with the community, choose your track, and publish progress weekly until the idea becomes a working micro-company."
      },
      steps: [
        { title: "Introduce yourself", desc: "Who are you, what market do you understand, and which skill do you want to strengthen?" },
        { title: "Choose a track", desc: "Start with Founder Skill Set, Building in the Age of AI, or Builder Skill Set." },
        { title: "Ship in public", desc: "Post progress, request review, and share what you learn with the community." }
      ],
      form: {
        title: "Join request",
        name: "Name",
        email: "Email",
        role: "Founder, builder, student, operator?",
        goal: "What company or skill do you want to build?",
        button: "Send request",
        note: "The form is ready to connect to email or CRM infrastructure at launch."
      }
    },
    contact: {
      hero: {
        eyebrow: "/ contact",
        title: "Partnerships",
        accent: "and collaboration.",
        intro: "For institutions, universities, companies, and communities that want to enable an Arab generation of AI micro-company builders."
      },
      options: [
        { title: "Education partnerships", desc: "Design cohorts and programs for founders, students, and builders." },
        { title: "Content sponsorship", desc: "Support videos, newsletters, or build challenges tied to the tracks." },
        { title: "Community networks", desc: "Connect cities, universities, and technical communities." }
      ],
      form: {
        title: "Quick message",
        name: "Name",
        email: "Email",
        org: "Organization",
        message: "How can we collaborate?",
        button: "Send"
      }
    },
    pages: {
      mission: {
        eyebrow: "/ mission",
        title: "Bannaa's mission",
        accent: "Get Arab youth ready for the AI boom.",
        intro:
          "The Arab world is young, but company creation has not happened at the speed or scale it should. AI changes the equation, and Bannaa turns this moment into a learning and building system.",
        sections: [
          {
            heading: "Why now?",
            body: [
              "The Arab world is full of young people, with the majority under 25. Historically, the region has not produced companies at the speed or scale it should have.",
              "Fragmentation across markets, different legal and government environments, and regional instability left a generation using products and solutions built for previous generations."
            ]
          },
          {
            heading: "What AI changed",
            body: [
              "AI makes generating products dramatically easier and cheaper. Highly specific products can now be created and shipped by small teams.",
              "Funding, previously a major barrier, is no longer the primary constraint. The new constraint is skill: knowing what to build, how to ship, and how to operate a tiny company with exceptional productivity."
            ]
          },
          {
            heading: "The core goal",
            body: [
              "Help Arab youth build lean, AI-powered companies of 1 to 10 people that operate with exceptional productivity and can generate tens of millions to hundreds of millions of dollars in revenue.",
              "Instead of the 100–200 startups created in the Arab world over recent decades, Bannaa aims to enable the creation of 100 micro-startups."
            ]
          },
          {
            heading: "How the tracks are used",
            body: [
              "Everything Bannaa teaches and builds content around maps back to one or more of three tracks: Founder Skill Set, Building in the Age of AI, and Builder Skill Set.",
              "Every video, X thread, newsletter, resource, or community discussion should support the larger goal: 100 high-productivity micro-startups across the Arab world."
            ]
          }
        ]
      },
      tracks: {
        eyebrow: "/ learn",
        title: "Curriculum",
        accent: "built to expand.",
        intro: "Each track starts with a clear frame, then exercises, content, templates, and measurable outputs."
      },
      roadmap: {
        eyebrow: "/ roadmap",
        title: "Track roadmap",
        accent: "Done, doing, to do.",
        intro: "A clear view of what is already established, what is being converted into content now, and what waits for later expansion."
      },
      brand: {
        eyebrow: "/ brand",
        title: "Bannaa brand guide",
        accent: "Logo, colors, and usage.",
        intro: "The compact visual reference for Bannaa: logo system, clear space, color palette, typography, and usage examples."
      },
      community: {
        eyebrow: "/ community",
        title: "The Bannaa community",
        accent: "on WhatsApp.",
        intro: "Share what you are building, discuss your experiments, and learn alongside Arab builders."
      },
      hub: {
        eyebrow: "/ content",
        title: "Every idea",
        accent: "in multiple formats.",
        intro: "A content hub designed to grow: videos, shorts, X threads, and newsletters filterable by track."
      }
    },
    cta: {
      eyebrow: "/ JOIN.THE.BUILDERS",
      titleLine1: "Start building",
      titleAccent: "a micro-company.",
      description: "Join the community and choose your first track. You do not need a large team; you need a clear system.",
      placeholder: "Your email",
      button: "Join ↙"
    },
    footer: {
      groups: [
        {
          title: "Site",
          items: [
            { label: "Mission", href: "/en/mission" },
            { label: "Learn", href: "/en/tracks" },
            { label: "Roadmap", href: "/en/roadmap" },
            { label: "Brand Guidelines", href: "/en/brand" },
            { label: "Community", href: "/en/community" },
          ]
        },
        {
          title: "Start",
          items: [
            { label: "Join", href: "/en/join" },
            { label: "Partnerships", href: "/en/contact" },
            { label: "About", href: "/en/about" }
          ]
        },
        {
          title: "Legal",
          items: [
            { label: "Privacy", href: "/en/privacy" },
            { label: "Terms", href: "/en/terms" }
          ]
        }
      ]
    },
    legal: {
      about: {
        eyebrow: "/ about Bannaa",
        title: "Bannaa. A platform for AI-era micro-companies.",
        intro:
          "Bannaa helps Arab youth build lean, AI-powered companies led by small, highly productive teams.",
        updated: "Last updated: August 8, 2026",
        sections: [
          {
            heading: "Who we are",
            body: [
              "Bannaa is operated by 10claws Inc., a company registered in Texas, United States.",
              "We focus on founder and builder skills in the age of AI: market, product, distribution, operations, and content."
            ]
          },
          {
            heading: "What we make",
            body: [
              "Learning tracks, a discussion community, a content hub, and practical resources that help tiny teams ship and learn quickly."
            ]
          }
        ],
        contact: { heading: "Contact", lines: officeAddress },
        backLabel: "↩ Back home"
      },
      privacy: {
        eyebrow: "/ privacy policy",
        title: "Privacy.",
        intro: "This policy explains what we collect when you visit Bannaa or use join forms.",
        updated: "Last updated: August 8, 2026",
        sections: [
          {
            heading: "Information we collect",
            body: [
              "We may collect anonymous analytics about pages, devices, and traffic sources to improve the site.",
              "When you submit a form, we collect the information you voluntarily provide, such as name, email, and message."
            ]
          },
          {
            heading: "How we use it",
            body: [
              "We use data to improve the site, manage join requests, and respond to partnership or contact inquiries. We do not sell your data."
            ]
          },
          {
            heading: "Your rights",
            body: ["You can request corrections or deletion by contacting us using the details below."]
          }
        ],
        contact: { heading: "Contact", lines: officeAddress },
        backLabel: "↩ Back home"
      },
      terms: {
        eyebrow: "/ terms of use",
        title: "Terms.",
        intro: "By using Bannaa, you agree to these terms.",
        updated: "Last updated: August 8, 2026",
        sections: [
          {
            heading: "Use of the site",
            body: ["The site is for learning, community building, and resource discovery. Illegal use is not allowed."]
          },
          {
            heading: "Content and ownership",
            body: [
              "Content, logos, and designs are owned by 10claws Inc. unless stated otherwise.",
              "You keep ownership of what you post in the community and grant us the right to display it within the service."
            ]
          },
          {
            heading: "Disclaimer",
            body: ["The site is provided as is without warranties. You are responsible for your business and execution decisions."]
          }
        ],
        contact: { heading: "Contact", lines: officeAddress },
        backLabel: "↩ Back home"
      }
    }
  }
};

export const siteContent: Record<Locale, SiteContent> = {
  ar: stageContent("ar", baseContent.ar),
  en: stageContent("en", baseContent.en)
};

export const consultationContent = {
  en: {
    eyebrow: "WORK WITH BANNAA",
    title: "Turn your idea into a build plan.",
    description: "Get focused advice in a single session or ongoing guidance throughout your project.",
    request: "Request consultation",
    close: "Close request",
    planLabel: "Consultation option",
    booking: "Or book a meeting",
    plans: [
      { id: "hour", title: "One-hour consultation", price: "$400", duration: "1 hour", includes: ["Discuss your challenge, review your approach, and define your next steps."] },
      { id: "project", title: "Project consultation", price: "$2,500/mo", duration: "10 hours per month", includes: ["Architecture", "Implementation supervision", "Post-implementation support"] }
    ]
  },
  ar: {
    eyebrow: "اعمل مع بنّاء",
    title: "حوّل فكرتك إلى خطة تنفيذ.",
    description: "احصل على استشارة مركّزة في جلسة واحدة أو متابعة مستمرة لمشروعك.",
    request: "اطلب استشارة",
    close: "إغلاق الطلب",
    planLabel: "خيار الاستشارة",
    booking: "أو احجز موعداً",
    plans: [
      { id: "hour", title: "استشارة لمدة ساعة", price: "$400", duration: "ساعة واحدة", includes: ["ناقش التحدي، وراجع نهجك، وحدّد خطواتك القادمة."] },
      { id: "project", title: "استشارة مشروع", price: "$2,500", duration: "شهرياً · 10 ساعات في الشهر", includes: ["تصميم البنية المعمارية", "الإشراف على التنفيذ", "دعم ما بعد التنفيذ"] }
    ]
  }
};


export function spectrumInteractionContent(locale: Locale) {
  const t = (en: string, ar: string) => locale === "ar" ? ar : en;
  const step = (en: string, ar: string, detail: string, detailAr: string, output: string, outputAr: string) => ({ label: t(en, ar), detail: t(detail, detailAr), output: t(output, outputAr) });
  return {
    eyebrow: t("HOW YOU INTERACT WITH AI", "كيف تتفاعل مع الذكاء الاصطناعي"),
    example: t("One example: a registration page for your event.", "مثال واحد: صفحة تسجيل لفعاليتك."),
    next: t("Next step", "الخطوة التالية"),
    replay: t("Walk through again", "استعرض من البداية"),
    hint: t("Select a step to see what happens.", "اختر خطوة لترى ما يحدث."),
    result: t("WHAT YOU GET", "ما الذي تحصل عليه"),
    stages: [
      {
        title: t("A message in. A message back.", "رسالة منك. ورسالة إليك."),
        mode: t("Chat example · ChatGPT", "مثال محادثة · ChatGPT"),
        role: t("You ask, read, and carry out the instructions yourself.", "أنت تسأل وتقرأ وتنفّذ التعليمات بنفسك."),
        outcome: t("An answer to use", "إجابة تستفيد منها"),
        steps: [
          step("You ask", "أنت تسأل", "You describe what you need in a single message.", "تصف ما تحتاجه في رسالة واحدة.", "How do I build an event registration page?", "كيف أبني صفحة تسجيل لفعالية؟"),
          step("AI responds", "الذكاء الاصطناعي يجيب", "In this chat-only example, the model generates text; it does not change your project.", "في مثال المحادثة النصية هذا، يولّد النموذج نصاً دون تعديل مشروعك.", "Add a name field, an email field, and a submit button.", "أضف حقلاً للاسم وحقلاً للبريد وزر إرسال."),
          step("You act", "أنت تنفّذ", "You turn the answer into a working page and check it.", "تحوّل الإجابة إلى صفحة تعمل وتتحقق منها.", "A written explanation. Building the page is still your next step.", "شرح مكتوب. بناء الصفحة لا يزال خطوتك التالية.")
        ]
      },
      {
        title: t("A goal in. A working result out.", "هدف منك. ونتيجة تعمل."),
        mode: t("Coding-agent example · Codex", "مثال وكيل برمجي · Codex"),
        role: t("You define the outcome, give context, and review the work.", "تحدّد النتيجة وتوفّر السياق وتراجع العمل."),
        outcome: t("A reviewable artifact", "عمل جاهز للمراجعة"),
        steps: [
          step("Set the goal", "حدّد الهدف", "Give the agent your project and a clear definition of done.", "زوّد الوكيل بمشروعك وتعريف واضح للإنجاز.", "Build a registration form. Validate email and show a confirmation.", "ابنِ نموذج تسجيل. تحقّق من البريد واعرض تأكيداً."),
          step("Agent works", "الوكيل يعمل", "With project access, the agent reads files, edits code, and runs checks using tools.", "مع إتاحة المشروع، يقرأ الوكيل الملفات ويعدّل الكود ويشغّل الفحوصات بالأدوات.", "Form added → validation implemented → checks run.", "إضافة النموذج ← تنفيذ التحقق ← تشغيل الفحوصات."),
          step("Review the result", "راجع النتيجة", "Inspect the running page and code changes; request corrections if needed.", "افحص الصفحة وتغييرات الكود واطلب التصحيح عند الحاجة.", "A working local page and a code diff you can review.", "صفحة محلية تعمل وتغييرات كود يمكنك مراجعتها.")
        ]
      },
      {
        title: t("Tools turn intent into action.", "الأدوات تحوّل النية إلى تنفيذ."),
        mode: t("Connected agent workflow", "سير عمل لوكيل متصل بالأدوات"),
        role: t("You connect tools, set permissions, and approve the release.", "تربط الأدوات وتحدّد الصلاحيات وتعتمد النشر."),
        outcome: t("A deployed service", "خدمة منشورة"),
        steps: [
          step("Plan", "خطّط", "The agent breaks the goal into actions across connected systems.", "يقسّم الوكيل الهدف إلى إجراءات عبر الأنظمة المتصلة.", "Save registrations, test the flow, and publish the page.", "احفظ التسجيلات واختبر التجربة وانشر الصفحة."),
          step("Call tools", "استدعِ الأدوات", "The agent invokes a database tool and a terminal, then reads their results.", "يستدعي الوكيل أداة قاعدة البيانات والطرفية ثم يقرأ نتائجهما.", "Database: registration saved. Terminal: app built.", "قاعدة البيانات: حُفظ التسجيل. الطرفية: اكتمل البناء."),
          step("Verify", "تحقّق", "A browser tool checks the real flow. Failures return to the agent for correction.", "تفحص أداة المتصفح التجربة الفعلية. تعود الأخطاء إلى الوكيل لإصلاحها.", "Valid email → saved. Invalid email → useful error.", "بريد صحيح ← حفظ. بريد غير صالح ← رسالة واضحة."),
          step("Approve", "اعتمد", "You inspect the preview before authorizing publication.", "تفحص المعاينة قبل السماح بالنشر.", "Preview reviewed. Release approved.", "تمت مراجعة المعاينة واعتماد النشر."),
          step("Deploy", "انشر", "The deployment tool publishes the approved version and returns its status.", "تنشر أداة النشر النسخة المعتمدة وتعيد حالتها.", "A live registration page with persistent storage.", "صفحة تسجيل منشورة مع تخزين دائم.")
        ]
      },
      {
        title: t("Results feed the next improvement.", "النتائج تغذّي التحسين التالي."),
        mode: t("Measured improvement · recursive extension", "تحسين مقاس · امتداد تكراري"),
        role: t("You set the objective and independent tests. Keep changes only when the evidence supports them.", "تحدّد الهدف والاختبارات المستقلة. تعتمد التغييرات حين تدعمها الأدلة."),
        outcome: t("An evaluated enhancement", "تحسين خضع للتقييم"),
        loop: t("Feed results back into the next cycle. Improving the evaluator itself is the recursive step; independent checks still decide whether to keep it.", "أعد النتائج إلى الدورة التالية. تحسين المُقيِّم نفسه هو الخطوة التكرارية؛ وتبقى الاختبارات المستقلة أساس اعتماد التغيير."),
        steps: [
          step("Observe", "راقب", "The system reads test results and feedback from the deployed service.", "يقرأ النظام نتائج الاختبار والملاحظات من الخدمة المنشورة.", "Feedback: some visitors do not understand the email error.", "ملاحظة: بعض الزوار لا يفهمون رسالة خطأ البريد."),
          step("Propose a change", "اقترح تغييراً", "An agent proposes a specific change to code, prompts, or skills.", "يقترح وكيل تغييراً محدّداً في الكود أو التوجيهات أو المهارات.", "Candidate: clearer validation text and an example email.", "مقترح: رسالة تحقق أوضح ومثال للبريد."),
          step("Evaluate", "قيّم", "Compare the candidate with the current version on independent cases. Improvement is not assumed.", "قارن المقترح بالنسخة الحالية على حالات مستقلة. التحسّن ليس مفترضاً.", "Check clarity, successful submissions, and regressions.", "افحص الوضوح ونجاح التسجيل وأي تراجع في الوظائف."),
          step("Keep or revert", "اعتمد أو تراجع", "Keep a change only if it meets the criteria; otherwise restore the previous version.", "اعتمد التغيير إذا حقّق المعايير، وإلا فاستعد النسخة السابقة.", "Evidence supports the change → release. Otherwise → revert.", "الأدلة تدعم التغيير ← نشر. وإلا ← تراجع."),
          step("Improve the loop", "حسّن الحلقة", "Experiment with better evaluation criteria or improvement instructions. Validate that process change independently too.", "جرّب معايير تقييم أو تعليمات تحسين أفضل. تحقّق من تغيير العملية بشكل مستقل أيضاً.", "Add a missing accessibility check to future evaluations, then repeat.", "أضف فحص إتاحة مفقوداً للتقييمات القادمة، ثم كرّر.")
        ]
      }
    ]
  };
}

export const whatsappCommunityContent = {
  ar: {
    title: "مجتمع بنّاء على واتساب",
    description: "شارك ما تبنيه، ناقش تجاربك، وتعلّم مع مجتمع من البنّائين العرب.",
    caption: "تصوّر توضيحي مؤقت للمجتمع، وليس لقطة من المحادثات الفعلية.",
    alt: "تصوّر لمجموعة بنّاء على واتساب مع رسائل عن بناء الوكلاء ومشاركة التجارب",
    request: "اطلب الانضمام",
    pending: "سيتوفر رابط طلب الانضمام قريباً."
  },
  en: {
    title: "The Bannaa community on WhatsApp",
    description: "Share what you are building, discuss your experiments, and learn alongside Arab builders.",
    caption: "Temporary community illustration, not a screenshot of real conversations.",
    alt: "Illustration of a Bannaa WhatsApp group discussing agents and sharing projects",
    request: "Request to join",
    pending: "The join-request link will be available soon."
  }
};

export const heroLandscapeContent = {
  ar: { pause: "إيقاف حركة الخلفية", resume: "تشغيل حركة الخلفية" },
  en: { pause: "Pause background motion", resume: "Resume background motion" }
};

export const codeFactoryContent = {
  ar: {
    title: "من فكرة إلى شركة تعمل", eyebrow: "مصنع البرمجيات", restaurant: "مطعم", fleet: "خدمات الأسطول",
    pause: "إيقاف الحركة", play: "تشغيل الحركة", idea: "فكرتك", factory: "نبني ونربط", business: "مشروعك يعمل",
    stages: ["نفهم العمل", "نبني النظام", "نربط العمليات", "نُشغّل المشروع"],
    restaurantDetails: ["مطعم يحتاج إلى تنظيم الطلبات والمخزون.", "وكلاء تبني نظام الحجز والطلبات والمطبخ.", "الطلب يصل إلى المطبخ، والمخزون يتحدّث.", "وجبات جاهزة، توصيل منظم، وتجربة أفضل للعميل."],
    fleetDetails: ["شركة خدمات تحتاج إلى إدارة المركبات والمهام.", "وكلاء تبني نظام الجدولة والتوزيع والصيانة.", "المهمة تصل إلى المركبة المناسبة والمسار يتحدّث.", "مركبات تتحرك، مهام تُنجز، وصيانة في موعدها."],
    illustration: "توضيح لكيف تتحول البرمجيات إلى عمليات حقيقية"
  },
  en: {
    title: "An idea becomes a working business", eyebrow: "THE SOFTWARE FACTORY", restaurant: "Restaurant", fleet: "Fleet services",
    pause: "Pause animation", play: "Play animation", idea: "Your idea", factory: "Build & connect", business: "Business in motion",
    stages: ["Understand", "Build", "Connect", "Operate"],
    restaurantDetails: ["A restaurant needs to organize orders and stock.", "Agents build bookings, ordering, and kitchen workflows.", "Orders reach the kitchen. Inventory updates with every meal.", "Meals ready, deliveries coordinated, customers looked after."],
    fleetDetails: ["A service company needs to coordinate vehicles and jobs.", "Agents build scheduling, dispatch, and maintenance workflows.", "The right vehicle receives the job and an updated route.", "Vehicles moving, jobs completed, maintenance on schedule."],
    illustration: "An illustration of software becoming real operations"
  }
};


/** Approved bilingual homepage design. */
export const launchCopy = {
  "en": {
    "brand": "Bannaa",
    "title": "Bannaa — Learn. Build. Launch.",
    "desc": "Learn AI, build useful things, and turn your ideas into a small business. A space for Arab builders.",
    "skip": "Skip to content",
    "nav": [
      "Your path",
      "Our purpose",
      "Field notes"
    ],
    "start": "Start building",
    "lang": "العربية",
    "eyebrow": "AI skills. Real projects. Small businesses.",
    "headline": [
      "Learn AI.",
      "Build what’s next."
    ],
    "intro": "Learn AI. Build something useful. Turn your ideas into a small business — one thoughtful step at a time.",
    "explore": "Find your starting point",
    "about": "Meet Bannaa",
    "note": "Arabic-first. Hands-on. Built for the curious.",
    "artLabel": "It starts with “what if?”",
    "artCaption": "A small idea, taking shape.",
    "artSub": "Your next chapter starts here.",
    "principles": [
      "Learn by making",
      "Build with purpose",
      "Grow together"
    ],
    "pathEye": "A path, not a shortcut",
    "pathTitle": "Where will you begin?",
    "pathIntro": "Start where you are. Build your confidence through real projects, then take the next step.",
    "tabs": [
      "Get ready",
      "The basics",
      "Build agents",
      "Go further"
    ],
    "pathLabel": "YOUR NEXT SMALL STEP",
    "curriculum": "Explore the full curriculum",
    "outcome": "SOMETHING TO SHOW FOR IT",
    "stages": [
      [
        "Make room for a new skill.",
        "A few foundations make the journey easier. Check your starting point before the taught stages.",
        [
          "Explain an idea and the result you want",
          "Make small HTML, CSS, and JavaScript changes",
          "Break a problem into steps and check the answer"
        ],
        "Describe a real task and edit a simple webpage."
      ],
      [
        "From a good prompt to a real project.",
        "Learn how to work with AI, connect the pieces, and put your first useful app into the world.",
        [
          "Give AI clear instructions and useful context",
          "Connect a frontend, backend, and an API",
          "Use GitHub and learn to diagnose errors"
        ],
        "A live app that calls a model or tool, with tests and error logs."
      ],
      [
        "Give your ideas a little independence.",
        "Build agents that use tools, remember context, and complete a real task reliably.",
        [
          "Connect tools and memory to your agent",
          "Design action loops with clear stopping points",
          "Test, monitor, and recover from failures"
        ],
        "A complete agent service with memory, tools, and evaluations."
      ],
      [
        "Build systems that get better.",
        "Coordinate agents, measure what matters, and improve the work with confidence.",
        [
          "Choose the right architecture for a real problem",
          "Measure quality, time, and cost",
          "Test improvements independently and roll back safely"
        ],
        "A coordinated system that improves on a single-agent baseline."
      ]
    ],
    "missionEye": "Small teams. Meaningful impact.",
    "missionTitle": "The future can be built by a few good people.",
    "missionBody": "We believe a small team with the right skills can make something that matters. Bannaa helps Arab builders turn AI knowledge into useful services and productive businesses.",
    "ambition": "THE AMBITION WE’RE BUILDING TOWARD",
    "missionLabel": "small Arab companies. More people creating their own possibilities.",
    "notesEye": "A little something to start with",
    "notesTitle": "Ideas for your next small step.",
    "notesIntro": "Short, practical starting points. Open one, try it, and see where it takes you.",
    "read": "Try this idea",
    "notes": [
      [
        "LEARN",
        "5 MIN READ",
        "Give your prompt a purpose.",
        "A clearer brief is the first step toward a more useful answer."
      ],
      [
        "BUILD",
        "A SMALL EXPERIMENT",
        "Your first useful AI workflow.",
        "Start with one task you repeat. Make the next time easier."
      ],
      [
        "GROW",
        "A QUESTION TO ASK",
        "Find a problem worth solving.",
        "A small business starts with a real person who needs a hand."
      ]
    ],
    "promptLabel": "A BETTER STARTING POINT",
    "prompt": "“Help me do this one thing.<br>Here’s what good looks like.”",
    "flow": [
      "An input",
      "An agent",
      "A result"
    ],
    "ideaLabel": "A NOTE TO YOUR FUTURE SELF",
    "idea": "Start with<br>someone.<br>Not something.",
    "closeEye": "Curiosity looks good on you",
    "closeTitle": "Your next idea deserves a first step.",
    "closeBody": "You don’t need to have it all figured out. Bring a little curiosity. We’ll help you find a place to start.",
    "closeCta": "Explore your path",
    "consult": "Talk about your project",
    "footer": "Built for curious minds. Made for the Arab world.",
    "close": "Close",
    "lessons": [
      [
        "Choose a real task, such as writing a reply to a customer.",
        "Give the model the relevant facts, your audience, and a clear example of the tone you want.",
        "Describe what a successful answer must include. Check the result against those requirements."
      ],
      [
        "Pick a repetitive task, such as turning meeting notes into a list of actions.",
        "Define the input and expected output. Try it manually with three different examples before automating.",
        "Check for missing details and invented facts. Keep human review in the workflow until the results are reliable."
      ],
      [
        "Speak to someone about a task that regularly takes too much time. Ask how they do it today.",
        "Look for a repeated, specific frustration. Describe the problem without proposing your product.",
        "Make the smallest useful version and ask them to try it. Use their response to decide what to build next."
      ]
    ],
    "navigationLabel": "Main navigation",
    "studioLabel": "From idea to finished work",
    "studioTitle": "THE BANNAA STUDIO",
    "play": "Play animation",
    "pause": "Pause animation",
    "sceneAlt": "Bannaa character learning, building, and enjoying the process",
    "chooseScene": "Choose a scene",
    "sceneLabels": [
      "Building",
      "Imagining",
      "Vibing"
    ],
    "scenes": [
      [
        "Making an idea real.",
        "Try. Tweak. Make progress."
      ],
      [
        "What if we tried this?",
        "Every project starts with a question."
      ],
      [
        "Find your own rhythm.",
        "Enjoy the process of making."
      ]
    ],
    "contact": "Say hello",
    "moreLinks": "Explore Bannaa"
  },
  "ar": {
    "brand": "بنّاء",
    "title": "بنّاء — تعلّم. ابنِ. انطلق.",
    "desc": "تعلّم الذكاء الاصطناعي، وابنِ منتجات مفيدة، وحوّل أفكارك إلى شركة صغيرة. مساحة للبنّائين العرب.",
    "skip": "انتقل إلى المحتوى",
    "nav": [
      "رحلتك",
      "لماذا بنّاء",
      "أفكار عملية"
    ],
    "start": "ابدأ البناء",
    "lang": "English",
    "eyebrow": "مهارات الذكاء الاصطناعي. مشاريع حقيقية.",
    "headline": [
      "تعلّم الذكاء الاصطناعي.",
      "وابنِ ما تتخيّله."
    ],
    "intro": "تعلّم الذكاء الاصطناعي. ابنِ شيئاً مفيداً. وحوّل أفكارك إلى شركة صغيرة، خطوة مدروسة في كل مرة.",
    "explore": "اكتشف نقطة البداية",
    "about": "تعرّف على بنّاء",
    "note": "بالعربي أولاً. بالممارسة دائماً. لكل فضولي.",
    "artLabel": "البداية بسؤال: «ماذا لو؟»",
    "artCaption": "فكرة صغيرة، بدأت تتشكّل.",
    "artSub": "خطوتك القادمة تبدأ هنا.",
    "principles": [
      "تعلّم بالممارسة",
      "ابنِ لهدف",
      "نكبر معاً"
    ],
    "pathEye": "رحلة تعلّم، خطوة بخطوة",
    "pathTitle": "من أين تبدأ رحلتك؟",
    "pathIntro": "ابدأ من مستواك اليوم. ابنِ ثقتك بمشاريع حقيقية، ثم انتقل إلى الخطوة التالية.",
    "tabs": [
      "استعد",
      "الأساسيات",
      "بناء الوكلاء",
      "التمكّن"
    ],
    "pathLabel": "خطوتك الصغيرة القادمة",
    "curriculum": "استكشف المنهج كاملاً",
    "outcome": "نتيجة تقدر تشاركها",
    "stages": [
      [
        "أساس واضح لبداية أقوى.",
        "بعض المعارف تجعل الرحلة أسهل. تأكّد من استعدادك قبل البدء بالمراحل التعليمية.",
        [
          "اشرح فكرتك والنتيجة التي تريدها",
          "عدّل صفحة بسيطة باستخدام HTML وCSS وJavaScript",
          "قسّم المشكلة إلى خطوات وتحقّق من الإجابة"
        ],
        "وصف مهمة حقيقية وتعديل صفحة ويب بسيطة."
      ],
      [
        "من توجيه واضح إلى مشروع حقيقي.",
        "تعلّم العمل مع الذكاء الاصطناعي، واربط الأجزاء، وأطلق أول تطبيق مفيد لك.",
        [
          "اكتب توجيهات واضحة وقدّم سياقاً مفيداً",
          "اربط واجهة وخادماً وواجهة برمجية",
          "استخدم GitHub وتعلّم تشخيص الأخطاء"
        ],
        "تطبيق منشور يستدعي نموذجاً أو أداة، مع اختبارات وسجلات أخطاء."
      ],
      [
        "امنح أفكارك قدرة على العمل.",
        "ابنِ وكلاء تستخدم الأدوات، وتتذكّر السياق، وتنجز مهمة حقيقية بموثوقية.",
        [
          "اربط الأدوات والذاكرة بالوكيل",
          "صمّم حلقات عمل بشروط توقف واضحة",
          "اختبر الأداء وراقبه وتعافَ من الإخفاقات"
        ],
        "خدمة وكيل متكاملة بذاكرة وأدوات واختبارات تقييم."
      ],
      [
        "ابنِ أنظمة تتحسّن باستمرار.",
        "نسّق بين الوكلاء، وقِس ما يهم، وطوّر العمل بثقة.",
        [
          "اختر البنية المناسبة لمشكلة حقيقية",
          "قِس الجودة والوقت والتكلفة",
          "اختبر التحسينات بشكل مستقل وتراجع عنها بأمان"
        ],
        "نظام منسّق يحقق تحسّناً مقارنة بوكيل واحد."
      ]
    ],
    "missionEye": "فرق صغيرة. أثر يستحق.",
    "missionTitle": "المستقبل قد يبنيه فريق صغير يؤمن بفكرته.",
    "missionBody": "نؤمن أن فريقاً صغيراً يمتلك المهارات المناسبة يستطيع صنع شيء له قيمة. بنّاء يساعد البنّائين العرب على تحويل معرفة الذكاء الاصطناعي إلى خدمات مفيدة وشركات منتجة.",
    "ambition": "الطموح الذي نعمل لأجله",
    "missionLabel": "شركة عربية صغيرة. وأشخاص أكثر يصنعون فرصهم بأنفسهم.",
    "notesEye": "شيء بسيط تبدأ به اليوم",
    "notesTitle": "أفكار لخطوتك القادمة.",
    "notesIntro": "بدايات قصيرة وعملية. اختر فكرة، جرّبها، واكتشف إلى أين تأخذك.",
    "read": "جرّب هذه الفكرة",
    "notes": [
      [
        "تعلّم",
        "قراءة ٥ دقائق",
        "امنح توجيهك هدفاً واضحاً.",
        "طلب أوضح هو أول خطوة نحو إجابة أكثر فائدة."
      ],
      [
        "ابنِ",
        "تجربة صغيرة",
        "أول سير عمل مفيد لك.",
        "ابدأ بمهمة تكررها. واجعل المرة القادمة أسهل."
      ],
      [
        "انطلق",
        "سؤال يستحق",
        "ابحث عن مشكلة تستحق الحل.",
        "الشركة الصغيرة تبدأ بشخص حقيقي يحتاج مساعدة."
      ]
    ],
    "promptLabel": "بداية أفضل",
    "prompt": "«ساعدني في هذه المهمة.<br>وهذه هي النتيجة التي أريدها.»",
    "flow": [
      "مدخلات",
      "وكيل",
      "نتيجة"
    ],
    "ideaLabel": "ملاحظة لنفسك",
    "idea": "ابدأ بإنسان.<br>ثم ابحث<br>عن الفكرة.",
    "closeEye": "الفضول بداية جميلة",
    "closeTitle": "فكرتك القادمة تستحق خطوة أولى.",
    "closeBody": "لا تحتاج كل الإجابات الآن. تعال بفضولك، وسنساعدك على اكتشاف نقطة البداية.",
    "closeCta": "اكتشف رحلتك",
    "consult": "لنتحدّث عن مشروعك",
    "footer": "للعقول الفضولية. ولعالم عربي يبني.",
    "close": "إغلاق",
    "lessons": [
      [
        "اختر مهمة حقيقية، مثل كتابة ردّ على أحد العملاء.",
        "قدّم الحقائق المهمة، وحدّد الجمهور، وأضف مثالاً واضحاً على الأسلوب المطلوب.",
        "اشرح ما الذي يجب أن تتضمّنه الإجابة الناجحة، ثم راجع النتيجة بناءً على هذه الشروط."
      ],
      [
        "اختر مهمة متكررة، مثل تحويل ملاحظات اجتماع إلى قائمة إجراءات.",
        "حدّد المدخلات والنتيجة المطلوبة. جرّبها يدوياً مع ثلاثة أمثلة مختلفة قبل أتمتتها.",
        "راجع التفاصيل الناقصة والمعلومات المختلقة. أبقِ المراجعة البشرية حتى تصبح النتائج موثوقة."
      ],
      [
        "تحدّث إلى شخص عن مهمة تستهلك وقته باستمرار. اسأله كيف ينجزها اليوم.",
        "ابحث عن صعوبة محددة ومتكررة. صِف المشكلة قبل أن تقترح منتجك.",
        "ابنِ أصغر نسخة مفيدة واطلب منه تجربتها. استخدم ملاحظاته لتقرّر ما تبنيه بعدها."
      ]
    ],
    "navigationLabel": "التنقل الرئيسي",
    "studioLabel": "من الفكرة إلى الإنجاز",
    "studioTitle": "داخل ورشة بنّاء",
    "play": "تشغيل الحركة",
    "pause": "إيقاف الحركة",
    "sceneAlt": "شخصية بنّاء تتعلّم وتبني وتستمتع بالعمل",
    "chooseScene": "اختر مشهداً",
    "sceneLabels": [
      "نبني",
      "نفكّر",
      "نستمتع"
    ],
    "scenes": [
      [
        "فكرة تتحوّل إلى واقع.",
        "تجربة. تعديل. تقدّم."
      ],
      [
        "وماذا لو جرّبنا هذا؟",
        "كل مشروع يبدأ بسؤال."
      ],
      [
        "على إيقاعك الخاص.",
        "استمتع بالرحلة وأنت تبني."
      ]
    ],
    "contact": "تواصل معنا",
    "moreLinks": "استكشف بنّاء"
  }
} as const;

type BrandGuideCopy = {
  scenes: string[];
  rules: string[];
  subtitle: string;
  sections: {
    logo: string;
    expressions: string;
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
    expressionIntro: string;
    sceneGuidance: string;
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

export const brandGuideCopy: Record<Locale, BrandGuideCopy> = {
  ar: {
    scenes: ["البناء", "التخيّل", "الاستمتاع"],
    rules: ["استخدم ملفات الشعار المعتمدة فقط", "استخدم الشعار العربي في المحتوى العربي", "لا تمدّد الشعار أو تشوّهه", "لا تدوّر الشعار أو تضف مؤثرات"],
    subtitle: "AI Community for the Arab World",
    sections: {
      logo: "نظام الشعار",
      expressions: "شخصية بنّاء التعبيرية",
      clearSpace: "المساحة الآمنة",
      palette: "لوحة الألوان",
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
      expressionIntro:
        "تعتمد الهوية على رأس أخضر ناعم بوجه كريمي وعينين سوداويين وابتسامة. الرأس الأخضر هو الشعار الرسمي. استخدم الرسوم الشفافة للبناء والتخيّل والاستمتاع كعناصر مساندة، دون أن تطغى على المحتوى.",
      sceneGuidance: "تأتي مشاهد البناء والتخيّل والاستمتاع كرسوم شفافة. ضعها على الخلفية الكريمية دون بطاقة أو خلفية أو ظل، وحافظ على نسبها وألوانها، ودعها تساند المحتوى بدل أن تتصدره.",
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
      arabic: "بنّاء مجتمع للذكاء الاصطناعي في العالم العربي. نتشارك المعرفة، نبني المشاريع، ونصنع الأثر معاً."
    }
  },
  en: {
    scenes: ["Building", "Imagining", "Vibing"],
    rules: ["Use approved lockups only", "Use the Arabic lockup for Arabic contexts", "Do not stretch or distort", "Do not rotate or add effects"],
    subtitle: "AI Community for the Arab World",
    sections: {
      logo: "Logo system",
      expressions: "Bannaa expressions",
      clearSpace: "Clear space",
      palette: "Color palette",
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
      expressionIntro:
        "The official mark is a soft sage head with a cream face, black eyes, and a smile. Transparent building, imagining, and vibing scenes support the content without dominating it.",
      sceneGuidance: "The building, imagining, and vibing scenes ship as transparent artwork. Place them on the cream canvas without a card, background, or shadow, keep their proportions and colors, and let them support the content rather than lead it.",
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
      arabic: "بنّاء مجتمع للذكاء الاصطناعي في العالم العربي. نتشارك المعرفة، نبني المشاريع، ونصنع الأثر معاً."
    }
  }
};
export const communitySpaceCopy = {
  en: {
    sorts: ["Newest", "Unanswered", "Popular"], replies: "replies", introductions: "New introductions", streaks: "Building streaks", streakNote: "Illustrative activity · consecutive days", days: "days", memberNote: "Getting started with their first project", write: "Write an update",
    brand: "Bannaa", home: "Back to Bannaa", title: "The community", eyebrow: "THE BUILDERS’ COMMUNITY",
    intro: "A space to build in public, ask good questions, and help each other move forward.",
    preview: "Community preview", notice: "These are illustrative updates. Accounts and shared posting are not connected yet.",
    filters: ["All updates", "Progress", "Questions", "Launches"], search: "Search updates or projects", empty: "No updates match your search.",
    composer: "What did you move forward today?", composerNote: "Try writing an update. Your draft stays in this browser until you clear it.", draft: "Your private draft", save: "Save draft", saved: "Draft saved on this device", clear: "Clear draft", type: "Update type",
    join: "Build alongside us", joinBody: "Bring an idea, a question, or a work in progress. You don’t need a finished product to belong here.", joinAction: "Read freely · Participate by invitation",
    projects: "Projects in the making", challenge: "This week’s small step", challengeBody: "Show one person what you’re building. Ask what would make it more useful.", principle: "Be curious. Be generous. Share what you learn.",
    like: "Encourage", liked: "Encouraged", detail: "Read update", close: "Close", example: "Example update", projectLabel: "Project", sample: "Illustrative projects", replyNote: "Replies will open when member access is available.",
    homeTitle: "Build something. Grow together.", homeBody: "Explore questions, small wins, and projects. Join by invitation to participate.", homeAction: "Explore the community",
    posts: [
      { name: "Sara", initials: "S", kind: 1, project: "Arabic reading companion", body: "My first working prototype can now turn an article into a short reading exercise. Today’s small win: making the instructions clearer.", detail: "Next step: ask three learners to try one exercise and tell me where they get stuck. I’m learning that a smaller feature can lead to better feedback.", color: "sage" },
      { name: "Omar", initials: "O", kind: 2, project: "An assistant for small shops", body: "How would you test an AI assistant with shop owners before building the whole product?", detail: "I’m starting with stock questions and daily summaries. I’d love to understand which task costs owners the most time before deciding what to automate.", color: "peach" },
      { name: "Lina", initials: "L", kind: 3, project: "My first learning journal", body: "Published the first version of my learning journal. A simple page, three lessons, and a place to share what I try next.", detail: "The most useful lesson so far: publish something small enough that you can improve it this week. Next, I want to make the reading experience better on mobile.", color: "oat" }
    ]
  },
  ar: {
    sorts: ["الأحدث", "بلا ردود", "الأكثر تفاعلاً"], replies: "ردود", introductions: "تعارف جديد", streaks: "نواصل البناء", streakNote: "نشاط توضيحي · أيام متتالية", days: "أيام", memberNote: "تبدأ رحلتها مع مشروعها الأول", write: "اكتب مشاركة",
    brand: "بنّاء", home: "العودة إلى بنّاء", title: "المجتمع", eyebrow: "مجتمع البنّائين",
    intro: "مساحة نشارك فيها ما نبنيه، ونطرح أسئلتنا، ونساعد بعضنا على التقدّم.",
    preview: "معاينة المجتمع", notice: "هذه مشاركات توضيحية. الحسابات والنشر المشترك غير متاحين بعد.",
    filters: ["كل المشاركات", "خطوات تقدّم", "أسئلة", "إطلاقات"], search: "ابحث في المشاركات أو المشاريع", empty: "لا توجد مشاركات تطابق بحثك.",
    composer: "ما الخطوة التي أنجزتها اليوم؟", composerNote: "جرّب كتابة مشاركة. تبقى مسودتك في هذا المتصفح حتى تحذفها.", draft: "مسودتك الخاصة", save: "احفظ المسودة", saved: "حُفظت المسودة على هذا الجهاز", clear: "احذف المسودة", type: "نوع المشاركة",
    join: "ابنِ معنا", joinBody: "تعال بفكرة، أو سؤال، أو مشروع تعمل عليه. لا تحتاج إلى منتج مكتمل لتكون بيننا.", joinAction: "القراءة للجميع · المشاركة بالدعوة",
    projects: "مشاريع تتشكّل", challenge: "خطوتك الصغيرة هذا الأسبوع", challengeBody: "اعرض ما تبنيه على شخص واحد. واسأله: ما الذي يجعله أكثر فائدة؟", principle: "كن فضولياً. شارك بسخاء. انقل ما تتعلّمه.",
    like: "شجّع", liked: "تم التشجيع", detail: "اقرأ المشاركة", close: "إغلاق", example: "مشاركة توضيحية", projectLabel: "المشروع", sample: "مشاريع توضيحية", replyNote: "ستتاح الردود عند فتح العضوية.",
    homeTitle: "نبني شيئاً. ونكبر معاً.", homeBody: "استكشف الأسئلة والإنجازات الصغيرة والمشاريع. انضم بالدعوة لتشارك.", homeAction: "استكشف المجتمع",
    posts: [
      { name: "سارة", initials: "س", kind: 1, project: "رفيق القراءة بالعربية", body: "أصبح نموذجي الأول يحوّل المقال إلى تمرين قراءة قصير. إنجاز اليوم الصغير: جعل التعليمات أوضح.", detail: "الخطوة القادمة: أطلب من ثلاثة متعلّمين تجربة تمرين واحد وإخباري أين واجهوا صعوبة. أكتشف أن الميزة الأصغر قد تعطينا ملاحظات أفضل.", color: "sage" },
      { name: "عمر", initials: "ع", kind: 2, project: "مساعد للمتاجر الصغيرة", body: "كيف تختبرون فكرة مساعد ذكي مع أصحاب المتاجر قبل بناء المنتج كاملاً؟", detail: "أبدأ بأسئلة المخزون والملخّصات اليومية. أريد معرفة المهمة التي تستهلك وقت أصحاب المتاجر قبل اختيار ما سأعمل على أتمتته.", color: "peach" },
      { name: "لينا", initials: "ل", kind: 3, project: "دفتر تعلّمي الأول", body: "أطلقت النسخة الأولى من دفتر تعلّمي. صفحة بسيطة، وثلاثة دروس، ومساحة أشارك فيها تجربتي القادمة.", detail: "أهم درس حتى الآن: انشر شيئاً صغيراً تستطيع تحسينه هذا الأسبوع. خطوتي القادمة تحسين تجربة القراءة على الجوال.", color: "oat" }
    ]
  }
} as const;

export const communityMediaCopy = {
  en: {
    addImages: "Add images", imageHint: "Up to 4 images · JPG, PNG, WebP or GIF · 5 MB each", youtube: "YouTube video", youtubePlaceholder: "Paste a YouTube video link", invalidYoutube: "Enter a valid YouTube video link (watch, Shorts, live or youtu.be).", invalidImages: "Choose up to 4 valid JPG, PNG, WebP or GIF images, no larger than 5 MB each.", remove: "Remove image", description: "Image description", removeVideo: "Remove video", play: "Play video", videoTitle: "YouTube video player", openYoutube: "Watch on YouTube", preview: "Preview in feed", local: "Your local post preview", localNote: "Visible only in this browser session. Nothing has been published.", draftNote: "Text and attachments are saved on this device when you save your draft.", storageError: "Could not save or clear the draft on this device. Your current edits are still here.", loading: "Loading attachments…"
  },
  ar: {
    addImages: "أضف صوراً", imageHint: "حتى 4 صور · JPG أو PNG أو WebP أو GIF · 5 ميغابايت للصورة", youtube: "فيديو يوتيوب", youtubePlaceholder: "ألصق رابط فيديو يوتيوب", invalidYoutube: "أدخل رابط فيديو يوتيوب صالحاً، بما في ذلك Shorts أو البث أو youtu.be.", invalidImages: "اختر حتى 4 صور صالحة بصيغة JPG أو PNG أو WebP أو GIF، لا تتجاوز 5 ميغابايت للصورة.", remove: "حذف الصورة", description: "وصف الصورة", removeVideo: "حذف الفيديو", play: "شغّل الفيديو", videoTitle: "مشغّل فيديو يوتيوب", openYoutube: "شاهد على يوتيوب", preview: "عاين في المشاركات", local: "معاينة مشاركتك المحلية", localNote: "تظهر في جلسة المتصفح هذه فقط. لم تُنشر المشاركة.", draftNote: "يُحفظ النص والمرفقات على هذا الجهاز عند حفظ المسودة.", storageError: "تعذّر حفظ المسودة أو حذفها على هذا الجهاز. تعديلاتك الحالية ما زالت هنا.", loading: "جارٍ تحميل المرفقات…"
  }
} as const;

export const communityAccessCopy = {
  en: { title: "Join the conversation by invitation", body: "Anyone can read posts and watch their videos. Posting, replying and reacting require an invited member account.", pending: "Member sign-in is not connected in this layout preview.", preview: "Preview the composer", previewNote: "Try the layout locally. This does not publish a post or grant membership.", reply: "Reply" },
  ar: { title: "انضم إلى الحوار بالدعوة", body: "يمكن للجميع قراءة المشاركات ومشاهدة فيديوهاتها. النشر والردود والتفاعلات تتطلب حساب عضو انضم بالدعوة.", pending: "تسجيل دخول الأعضاء غير متصل في معاينة التصميم هذه.", preview: "جرّب تصميم محرّر المشاركة", previewNote: "جرّب التصميم محلياً. لن تُنشر مشاركة ولن تحصل على عضوية.", reply: "ردّ" }
} as const;

export const communityLearningCopy = {
  en: {
    tags: "Learning tags", official: "Bannaa tutorial", author: "Bannaa", back: "All posts", pinned: "Pinned · Start here", guide: "Your suggested learning order", read: "Read tutorial", practice: "Try it, then share what you built", stages: ["Get ready", "The basics", "Build agents", "Go further"],
    tutorials: [
      { title: "Turn an idea into a small first project", intro: "Start with one person, one problem, and one useful outcome.", steps: [ ["Choose a real problem", "Write down who you are helping and one task they struggle with. Ask them how they handle it today."], ["Make the first version smaller", "Pick one outcome you can demonstrate on a single page. Set aside accounts, payments and extra features until you test the idea."], ["Show someone", "Sketch the page, show it to the person you chose, and ask them to explain what they would do next. Share what surprised you."] ] },
      { title: "Write a clearer instruction for AI", intro: "Give the model a task, useful context, and a way to check the result.", steps: [ ["Describe the outcome", "Explain what you want to produce and who it is for. For example: a short welcome message for a first-time learner."], ["Add context and boundaries", "Provide relevant facts, a tone example and a length limit. Leave out personal or confidential information you do not need."], ["Check and improve", "Compare the result with your requirements. Identify one specific problem and revise the instruction. Share the before and after."] ] },
      { title: "Plan your first useful agent", intro: "Start with one bounded task and a clear point for human review.", steps: [ ["Define one job", "Choose a task such as turning your own notes into a draft weekly summary. Describe what a good result looks like."], ["Choose inputs and tools", "List exactly what the agent needs to read and which tools it needs. Start with read-only access and prepared sample inputs."], ["Test before taking action", "Try normal, incomplete and misleading inputs. Require a person to approve any message or external change. Share one failure and your fix."] ] },
      { title: "Improve a project with real feedback", intro: "Make one measurable improvement instead of adding more features.", steps: [ ["Watch someone use it", "Give a volunteer a concrete task and observe where they hesitate. Avoid explaining the interface before they try it."], ["Choose one improvement", "Pick the biggest obstacle and define a simple measure, such as completing the task without help."], ["Repeat the same task", "Make the change and test again. Compare what happened and publish the lesson, including anything that is still unclear."] ] }
    ]
  },
  ar: {
    tags: "وسوم التعلّم", official: "درس من بنّاء", author: "بنّاء", back: "كل المشاركات", pinned: "مثبّت · ابدأ هنا", guide: "ترتيب مقترح للتعلّم", read: "اقرأ الدرس", practice: "جرّب، ثم شارك ما بنيته", stages: ["استعد", "الأساسيات", "بناء الوكلاء", "التمكّن"],
    tutorials: [
      { title: "حوّل فكرتك إلى مشروع أول صغير", intro: "ابدأ بشخص واحد، ومشكلة واحدة، ونتيجة مفيدة.", steps: [ ["اختر مشكلة حقيقية", "حدّد من تساعده ومهمة واحدة تصعب عليه. اسأله كيف ينجزها اليوم."], ["صغّر النسخة الأولى", "اختر نتيجة تستطيع توضيحها في صفحة واحدة. أجّل الحسابات والدفع والمزايا الإضافية حتى تختبر الفكرة."], ["اعرضها على شخص", "ارسم الصفحة واعرضها على الشخص الذي اخترته. اطلب منه شرح ما سيفعله بعدها، وشارك ما فاجأك."] ] },
      { title: "اكتب توجيهاً أوضح للذكاء الاصطناعي", intro: "حدّد المهمة والسياق المفيد وطريقة مراجعة النتيجة.", steps: [ ["صف النتيجة المطلوبة", "اشرح ما تريد إنتاجه ولمن. مثلاً: رسالة ترحيب قصيرة لشخص يبدأ التعلّم لأول مرة."], ["أضف السياق والحدود", "قدّم المعلومات المناسبة ومثالاً على الأسلوب وحدّاً للطول. لا تضف بيانات شخصية أو سرية لا تحتاج إليها."], ["راجع وحسّن", "قارن النتيجة بمتطلباتك. حدّد مشكلة واحدة وعدّل التوجيه لمعالجتها. شارك المقارنة قبل التعديل وبعده."] ] },
      { title: "خطّط لوكيلك المفيد الأول", intro: "ابدأ بمهمة محدودة ونقطة واضحة للمراجعة البشرية.", steps: [ ["حدّد مهمة واحدة", "اختر مهمة مثل تحويل ملاحظاتك إلى مسودة ملخّص أسبوعي. صف النتيجة الجيدة التي تتوقعها."], ["اختر المدخلات والأدوات", "اكتب ما يحتاج الوكيل إلى قراءته والأدوات اللازمة فقط. ابدأ بصلاحيات القراءة ومدخلات تجريبية جاهزة."], ["اختبر قبل التنفيذ", "جرّب مدخلات عادية وناقصة ومضلّلة. اشترط مراجعة بشرية لأي رسالة أو تغيير خارجي. شارك خطأً اكتشفته وكيف عالجته."] ] },
      { title: "حسّن مشروعك بملاحظات حقيقية", intro: "حقّق تحسّناً واحداً يمكن ملاحظته بدلاً من إضافة مزايا أكثر.", steps: [ ["راقب شخصاً يستخدمه", "اطلب من متطوّع إنجاز مهمة محدّدة وراقب أين يتردّد. لا تشرح الواجهة قبل أن يجرّبها."], ["اختر تحسيناً واحداً", "اختر أكبر عائق وحدّد مقياساً بسيطاً، مثل إكمال المهمة دون مساعدة."], ["أعد تجربة المهمة", "نفّذ التغيير واختبر من جديد. قارن النتيجة وشارك ما تعلّمته، بما في ذلك ما يزال غير واضح."] ] }
    ]
  }
} as const;

// Fixed dates for the current illustrative feed; live posts will use persisted publication timestamps.
export const communityPublicationDates = {
  'first-small-project': '2026-09-29',
  'clearer-ai-instructions': '2026-09-29',
  'first-useful-agent': '2026-09-29',
  'improve-with-feedback': '2026-09-29',
  'reading-companion-prototype': '2026-09-28',
  'testing-a-shop-assistant': '2026-09-27',
  'first-learning-journal': '2026-09-26'
} as const;

export const parentBrandCopy = {
  en: "Part of",
  ar: "جزء من"
} as const;
