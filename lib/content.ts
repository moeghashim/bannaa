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
    themeDark: string;
    themeLight: string;
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
    items: HubItem[];
  };
  resources: {
    hero: PageHero;
    sections: {
      title: string;
      items: ResourceItem[];
    }[];
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
      os: "BANNA_OS // v4.0 // ACTIVE",
      region: "REGION: ARAB WORLD",
      signal: "MISSION: 10,000 MICRO-STARTUPS",
      langLabel: "LANG: العربية",
      themeDark: "DARK",
      themeLight: "LIGHT"
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
        "بنّاء يدرّب الجيل العربي القادم على تأسيس وتشغيل شركات lean مدعومة بالذكاء الاصطناعي: مهارة مؤسس، بناء منتجات، وأنظمة عمل لفِرق من شخص واحد إلى عشرة.",
      primaryCta: "انضم للمجتمع ↙",
      secondaryCta: "استكشف المسارات",
      terminal: {
        chromeTitle: "banna://micro-startup-system — live",
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
          { k: "النموذج", v: "AI-native · lean" },
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
        "نريد أن نساعد الشباب العربي على بناء شركات lean، AI-powered، صغيرة العدد وعالية الإيراد. التركيز ليس على شهادات أو محتوى عام، بل على مهارات محددة يحتاجها المؤسس والبنّاء في عصر الذكاء الاصطناعي.",
      metrics: [
        { num: "100M+", label: "طموح الإيراد الممكن", sub: "REVENUE CEILING" },
        { num: "90", label: "يوم إلى نموذج عامل", sub: "BUILD SPRINT" },
        { num: "24/7", label: "مجتمع تشغيل وتعلّم", sub: "COMMUNITY" }
      ],
      pillars: [
        {
          title: "شركات صغيرة لا منظمات ثقيلة",
          desc: "نعلّم كيف تُبنى شركة مربحة بفريق ضئيل وأنظمة تشغيل قوية بدل الاعتماد على التوظيف المبكر."
        },
        {
          title: "الذكاء الاصطناعي كطبقة تشغيل",
          desc: "كل مهارة تُترجم إلى سير عمل، وكيل، قالب، أو نظام يساعد الفريق الصغير على الإنتاج بسرعة أكبر."
        },
        {
          title: "سوق عربي بطموح عالمي",
          desc: "اللغة والسياق عربيان، لكن معايير المنتج والتوزيع والإيراد عالمية منذ اليوم الأول."
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
          outcomes: ["فرضية سوق واضحة", "عرض وسعر", "أول قناة توزيع", "مقابلات عملاء"],
          modules: [
            { title: "اختيار المشكلة", desc: "تمييز الألم المدفوع من الفضول العام." },
            { title: "العرض والتسعير", desc: "صياغة وعد واضح ونموذج إيراد مبكر." },
            { title: "التوزيع", desc: "بناء قناة قبل تضخيم المنتج." }
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
          outcomes: ["نموذج أولي", "سير عمل مؤتمت", "وكيل مساعد", "نظام قياس"],
          modules: [
            { title: "النموذج الأولي", desc: "من brief إلى واجهة قابلة للتجربة." },
            { title: "الوكلاء والأتمتة", desc: "تقسيم العمل بين الإنسان والنظام." },
            { title: "القياس والتعلّم", desc: "أرقام قليلة تكشف ما يجب بناؤه بعد ذلك." }
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
          outcomes: ["نظام محتوى", "مكتبة قوالب", "تشغيل دعم", "تسليم أسبوعي"],
          modules: [
            { title: "التنفيذ السريع", desc: "تحويل المتطلبات إلى مهام قابلة للشحن." },
            { title: "المحتوى كآلة", desc: "فيديوهات، منشورات، نشرات، وخيوط من نفس الفكرة." },
            { title: "العمليات", desc: "لوحات، قواعد قرار، ومراجعة جودة لفريق صغير." }
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
      items: [
        {
          id: "h1",
          type: "video",
          track: "founder",
          title: "كيف تختار مشكلة تدفع؟",
          desc: "إطار سريع لاختبار ألم السوق قبل بناء المنتج.",
          duration: "18 د",
          href: "#"
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
          href: "#"
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
        title: "لماذا بنّاء؟",
        accent: "لأن حجم الشركة تغيّر.",
        intro:
          "الذكاء الاصطناعي جعل شركة من شخص إلى عشرة قادرة على تنفيذ ما كان يحتاج إلى عشرات الموظفين. بنّاء يجهّز الشباب العربي لهذه اللحظة.",
        sections: [
          {
            heading: "المشكلة",
            body: [
              "الكثير من التعليم التقني ما زال منفصلاً عن بناء شركة حقيقية: محتوى كثير، ممارسة قليلة، وسياق عربي ناقص.",
              "الشباب العربي يحتاج نظاماً يربط السوق، المنتج، التوزيع، والذكاء الاصطناعي في مسار واحد."
            ]
          },
          {
            heading: "الحل",
            body: [
              "بنّاء يجمع المسارات العملية، المجتمع، والمحتوى القابل لإعادة الاستخدام كي يتعلم العضو وهو يبني.",
              "المخرجات أهم من الساعات: مقابلات عملاء، نماذج أولية، وكلاء، محتوى، وتجارب إيراد."
            ]
          },
          {
            heading: "الهدف",
            body: [
              "خلق 10,000 شركة صغيرة في العالم العربي، يقودها مؤسسون وبنّاؤون يعرفون كيف يستخدمون الذكاء الاصطناعي كقوة تشغيلية لا كزينة."
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
          "بنّاء يساعد الشباب العربي على بناء شركات lean، مدعومة بالذكاء الاصطناعي، يقودها فريق صغير عالي الإنتاجية.",
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
      title: "Banna — Lean AI-powered companies for Arab builders",
      description:
        "Banna helps Arab youth build AI-powered companies of 1 to 10 people that can reach massive revenue with lean teams."
    },
    statusBar: {
      os: "BANNA_OS // v4.0 // ACTIVE",
      region: "REGION: ARAB WORLD",
      signal: "MISSION: 10,000 MICRO-STARTUPS",
      langLabel: "LANG: EN",
      themeDark: "DARK",
      themeLight: "LIGHT"
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
        "Banna trains the next generation of Arab founders and builders to launch lean, AI-powered companies: founder skills, product building, and operating systems for teams of one to ten.",
      primaryCta: "Join the community ↙",
      secondaryCta: "Explore tracks",
      terminal: {
        chromeTitle: "banna://micro-startup-system — live",
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
        "Banna helps Arab youth build lean, AI-powered companies with tiny teams and serious revenue ambition. The work is not generic courses; it is a focused skill system for founders and builders in the age of AI.",
      metrics: [
        { num: "100M+", label: "Possible revenue ambition", sub: "REVENUE CEILING" },
        { num: "90", label: "Days to working prototype", sub: "BUILD SPRINT" },
        { num: "24/7", label: "Operator learning community", sub: "COMMUNITY" }
      ],
      pillars: [
        {
          title: "Small companies, not heavy organizations",
          desc: "We teach how to build profitable companies with small teams and strong operating systems instead of premature hiring."
        },
        {
          title: "AI as an operating layer",
          desc: "Every skill becomes a workflow, agent, template, or system that helps a tiny team produce faster."
        },
        {
          title: "Arab context, global standard",
          desc: "The language and context are Arabic-first, while product, distribution, and revenue standards are global from day one."
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
          outcomes: ["Clear market thesis", "Offer and pricing", "First distribution channel", "Customer interviews"],
          modules: [
            { title: "Problem selection", desc: "Separate paid pain from general curiosity." },
            { title: "Offer and pricing", desc: "Craft a promise and early revenue model." },
            { title: "Distribution", desc: "Build a channel before scaling the product." }
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
          outcomes: ["Working prototype", "Automated workflow", "Assistant agent", "Measurement system"],
          modules: [
            { title: "Prototype", desc: "Move from brief to a testable interface." },
            { title: "Agents and automation", desc: "Split work between humans and systems." },
            { title: "Measure and learn", desc: "A few numbers that reveal what to build next." }
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
          outcomes: ["Content system", "Template library", "Support operations", "Weekly shipping cadence"],
          modules: [
            { title: "Fast execution", desc: "Turn requirements into shippable tasks." },
            { title: "Content machine", desc: "Video, posts, newsletters, and threads from one insight." },
            { title: "Operations", desc: "Boards, decision rules, and quality review for small teams." }
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
      items: [
        {
          id: "h1",
          type: "video",
          track: "founder",
          title: "How to pick a problem people pay for",
          desc: "A fast frame for testing market pain before building.",
          duration: "18 min",
          href: "#"
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
          href: "#"
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
        title: "Why Banna?",
        accent: "Because company size changed.",
        intro:
          "AI made a company of one to ten capable of work that previously required dozens. Banna prepares Arab youth for that moment.",
        sections: [
          {
            heading: "The problem",
            body: [
              "Too much technical education is detached from building a real company: lots of content, little practice, and missing Arab context.",
              "Arab youth need a system that connects market, product, distribution, and AI in one track."
            ]
          },
          {
            heading: "The solution",
            body: [
              "Banna combines practical tracks, community, and reusable content so members learn while building.",
              "Outputs matter more than hours: customer interviews, prototypes, agents, content, and revenue experiments."
            ]
          },
          {
            heading: "The goal",
            body: [
              "Create 10,000 micro-startups across the Arab world, led by founders and builders who use AI as an operating force, not decoration."
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
        "Banna is an Arabic-first platform and community helping founders and builders create AI-powered micro-companies.",
      tags: ["Arabic-first", "AI-native", "© 2026"],
      groups: [
        {
          title: "Site",
          items: [
            { label: "Mission", href: "/en/mission" },
            { label: "Learn", href: "/en/tracks" },
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
      copyright: "Part of 10claws.com — Banna. Made for micro-company builders.",
      slogan: "BUILD SMALL / EARN BIG"
    },
    legal: {
      about: {
        eyebrow: "/ about Banna",
        title: "Banna. A platform for AI-era micro-companies.",
        intro:
          "Banna helps Arab youth build lean, AI-powered companies led by small, highly productive teams.",
        updated: "Last updated: August 8, 2026",
        sections: [
          {
            heading: "Who we are",
            body: [
              "Banna is operated by 10claws Inc., a company registered in Texas, United States.",
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
        intro: "This policy explains what we collect when you visit Banna or use join forms.",
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
        intro: "By using Banna, you agree to these terms.",
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
