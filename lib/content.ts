import type { Locale } from "@/lib/i18n";

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
    description: string;
    tags: string[];
    groups: FooterGroup[];
    copyright: string;
    slogan: string;
  };
  legal: {
    about: LegalPageCopy;
    privacy: LegalPageCopy;
    terms: LegalPageCopy;
  };
};

const officeAddress = [
  "10claws Inc.",
  "2500 CityWest Blvd Ste. 150",
  "Houston, TX 77042",
  "United States"
];

export const siteContent: Record<Locale, SiteContent> = {
  ar: {
    metadata: {
      title: "بنّاء — شركات صغيرة بقوة الذكاء الاصطناعي",
      description:
        "بنّاء يساعد الشباب العربي على بناء شركات ذكاء اصطناعي صغيرة من 1 إلى 10 أشخاص قادرة على تحقيق إيرادات ضخمة."
    },
    statusBar: {
      os: "BANNAA_OS // v4.0 // ACTIVE",
      region: "REGION: ARAB WORLD",
      signal: "MISSION: 10,000 MICRO-STARTUPS",
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
        { id: "hub", label: "المحتوى", href: "/ar/hub" },
        { id: "resources", label: "الموارد", href: "/ar/resources" }
      ]
    },
    hero: {
      tags: [
        { label: "عربي أوّلاً" },
        { label: "شركات من 1–10 أشخاص" },
        { label: "10,000 شركة صغيرة", tone: "warn" }
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
          { k: "المهمة", v: "10,000 شركة عربية صغيرة" },
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
      title: "10,000",
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
          title: "10,000 بدل 100–200",
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
              "بدلاً من 100–200 شركة ناشئة ظهرت في العالم العربي خلال العقود الماضية، يهدف بنّاء إلى تمكين إنشاء 10,000 شركة صغيرة."
            ]
          },
          {
            heading: "كيف نستخدم المسارات",
            body: [
              "كل ما يعلّمه بنّاء وكل ما ينتجه من محتوى يعود إلى واحد أو أكثر من ثلاثة مسارات: مهارة المؤسس، البناء في عصر AI، ومهارة البنّاء.",
              "أي فيديو، خيط X، نشرة، مورد، أو نقاش مجتمعي يجب أن يدعم الهدف الأكبر: 10,000 شركة صغيرة عالية الإنتاجية في العالم العربي."
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
        title: "غرفة تشغيل",
        accent: "للمؤسسين والبنّائين.",
        intro: "مساحة بسيطة للانضمام، النشر، النقاش، ومشاركة ما يتم بناؤه."
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
      description:
        "بنّاء منصة ومجتمع عربي يساعد المؤسسين والبنّائين على إنشاء شركات صغيرة مدعومة بالذكاء الاصطناعي.",
      tags: ["عربي أوّلاً", "AI-native", "© 2026"],
      groups: [
        {
          title: "الموقع",
          items: [
            { label: "المهمة", href: "/ar/mission" },
            { label: "تعلّم", href: "/ar/tracks" },
            { label: "الخطة", href: "/ar/roadmap" },
            { label: "دليل الهوية", href: "/ar/brand" },
            { label: "المجتمع", href: "/ar/community" },
            { label: "المحتوى", href: "/ar/hub" }
          ]
        },
        {
          title: "ابدأ",
          items: [
            { label: "الموارد", href: "/ar/resources" },
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
      ],
      copyright: "جزء من 10claws.com — بنّاء. مصنوع لصنّاع الشركات الصغيرة.",
      slogan: "BUILD SMALL / EARN BIG"
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
      signal: "MISSION: 10,000 MICRO-STARTUPS",
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
        { id: "hub", label: "Content", href: "/en/hub" },
        { id: "resources", label: "Resources", href: "/en/resources" }
      ]
    },
    hero: {
      tags: [
        { label: "Arabic-first" },
        { label: "Companies of 1–10" },
        { label: "10,000 micro-startups", tone: "warn" }
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
          { k: "Mission", v: "10,000 Arab micro-startups" },
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
      title: "10,000",
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
          title: "10,000 instead of 100–200",
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
              "Instead of the 100–200 startups created in the Arab world over recent decades, Bannaa aims to enable the creation of 10,000 micro-startups."
            ]
          },
          {
            heading: "How the tracks are used",
            body: [
              "Everything Bannaa teaches and builds content around maps back to one or more of three tracks: Founder Skill Set, Building in the Age of AI, and Builder Skill Set.",
              "Every video, X thread, newsletter, resource, or community discussion should support the larger goal: 10,000 high-productivity micro-startups across the Arab world."
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
        title: "An operating room",
        accent: "for founders and builders.",
        intro: "A simple space to join, post, discuss, and share what is being built."
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
      description:
        "Bannaa is an Arabic-first platform and community helping founders and builders create AI-powered micro-companies.",
      tags: ["Arabic-first", "AI-native", "© 2026"],
      groups: [
        {
          title: "Site",
          items: [
            { label: "Mission", href: "/en/mission" },
            { label: "Learn", href: "/en/tracks" },
            { label: "Roadmap", href: "/en/roadmap" },
            { label: "Brand Guidelines", href: "/en/brand" },
            { label: "Community", href: "/en/community" },
            { label: "Content", href: "/en/hub" }
          ]
        },
        {
          title: "Start",
          items: [
            { label: "Resources", href: "/en/resources" },
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
      ],
      copyright: "Part of 10claws.com — Bannaa. Made for micro-company builders.",
      slogan: "BUILD SMALL / EARN BIG"
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
