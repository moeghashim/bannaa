import type { Locale } from "@/lib/i18n";

export type NavLink = { id: string; label: string; href: string };

export type HeroStage = { key: string; status: string };
export type HeroStat = { num: string; label: string; sub: string };
export type HeroTag = { label: string; tone?: "warn" };

export type TrackKind = "foundations" | "agents" | "media";
export type TrackCard = {
  id: string;
  num: string;
  title: string;
  sub: string;
  desc: string;
  weeks: string;
  level: string;
  kind: TrackKind;
};

export type ConceptCell = {
  id: string;
  title: string;
  sub: string;
  desc: string;
};

export type TemplateKind = "prompt" | "flow";
export type TemplateCard = {
  id: string;
  kind: TemplateKind;
  tag: string;
  title: string;
  uses: string;
};

export type FooterItem = { label: string; href?: string };

export type FooterGroup = {
  title: string;
  items: FooterItem[];
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
  tracks: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    allLink: string;
    cards: TrackCard[];
  };
  concepts: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    meta: string;
    cells: ConceptCell[];
  };
  templates: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    allLink: string;
    usesSuffix: string;
    hint: string;
    cards: TemplateCard[];
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

export const siteContent: Record<Locale, SiteContent> = {
  ar: {
    metadata: {
      title: "بنّاء — ابنِ. ثم ابنِ أكثر.",
      description: "منصّة عربيّة لتعلّم الذكاء الاصطناعي: مفاهيم مُكثّفة، مسارات مُركّبة، وقوالب جاهزة للشحن."
    },
    statusBar: {
      os: "BANNAA_OS // v3.0.1 // ACTIVE",
      region: "REGION: MENA",
      signal: "SIGNAL: STABLE",
      langLabel: "LANG: العربية",
      themeDark: "DARK",
      themeLight: "LIGHT"
    },
    nav: {
      langSwitch: "AR / EN",
      ghostCta: "تسجيل الدخول",
      primaryCta: "ابدأ الآن ↙",
      links: [
        { id: "home", label: "الرئيسية", href: "#top" },
        { id: "tracks", label: "المسارات", href: "#tracks" },
        { id: "templates", label: "القوالب", href: "#templates" },
        { id: "concepts", label: "المفاهيم", href: "#concepts" },
        { id: "about", label: "عن بنّاء", href: "/ar/about" }
      ]
    },
    hero: {
      tags: [
        { label: "نُسخة البِناء 3.0" },
        { label: "منصّة عربيّة · مفتوحة" },
        { label: "قبول محدود", tone: "warn" }
      ],
      titleLine1: "ابنِ.",
      titleAccent: "ثم ابنِ",
      titleTail: " أكثر.",
      description:
        "بنّاء منصّة عربيّة لتعلّم الذكاء الاصطناعي. مفاهيم مُكثّفة، مسارات مُركّبة، وقوالب جاهزة للشحن. لا نظريّة بلا تطبيق، ولا تطبيق بلا نظام.",
      primaryCta: "ابدأ من المسارات ↙",
      secondaryCta: "معرض القوالب",
      terminal: {
        chromeTitle: "bannaa://pipeline — live",
        liveLabel: "● live",
        stages: [
          { key: "01 · PLAN", status: "drafting plan…" },
          { key: "02 · DESIGN", status: "sketching system…" },
          { key: "03 · AGENT", status: "agent thinking…" },
          { key: "04 · SITE", status: "rendering view…" }
        ],
        planHead: "// BRIEF.md",
        planRows: [
          { k: "الهدف", v: "منصّة تعلّم عربيّة" },
          { k: "الجمهور", v: "طلّاب + مهنيّون" },
          { k: "المسارات", v: "03 طبقات" },
          { k: "القوالب", v: "38 قالب" },
          { k: "اللغة", v: "العربيّة" }
        ],
        planTags: ["bold", "terminal", "rtl-first", "dark"],
        sitePreview: { head: "ابنِ.", accent: "معنا." }
      },
      stats: [
        { num: "12", label: "مسار متكامل", sub: "MODULE / PATH" },
        { num: "94", label: "مفهوم مكثّف", sub: "CONCEPT / IDEA" },
        { num: "38", label: "قالب جاهز", sub: "PROMPT / FLOW" },
        { num: "2.4k", label: "بنّاء نشط", sub: "ACTIVE / BUILDERS" }
      ]
    },
    marquee: [
      "ابنِ ما لا يُبنى",
      "AI × البناؤون",
      "مسارات حيّة",
      "قوالب مُقاتلة",
      "نتعلّم بالتصنيع",
      "لا وصفات جاهزة",
      "التجريب أوّلاً",
      "الإتقان شرط"
    ],
    tracks: {
      eyebrow: "/ 01 — المسارات",
      title: "ثلاث",
      titleAccent: "طبقات.",
      description: "مسارات موضوعيّة، مبنيّة على مفاهيم حيّة وقوالب جاهزة.",
      allLink: "كلّ المسارات →",
      cards: [
        {
          id: "foundations",
          num: "01",
          title: "الأساسيّات",
          sub: "FOUNDATIONS",
          desc: "اللبنات الأولى: نماذج، احتمالات، رموز، وتمثيل. من صفر إلى فَهم.",
          weeks: "4 أسابيع",
          level: "مبتدئ → متوسّط",
          kind: "foundations"
        },
        {
          id: "agents",
          num: "02",
          title: "الوكلاء",
          sub: "AGENTS",
          desc: "أنظمة مستقلّة تُخطِّط، تتذكّر، وتُنفِّذ. من وكيل واحد إلى شبكة.",
          weeks: "6 أسابيع",
          level: "متوسّط → متقدّم",
          kind: "agents"
        },
        {
          id: "media",
          num: "03",
          title: "الميديا",
          sub: "MEDIA",
          desc: "توليد الصورة والصوت والفيديو. من موجة إلى مَشهد.",
          weeks: "5 أسابيع",
          level: "متوسّط",
          kind: "media"
        }
      ]
    },
    concepts: {
      eyebrow: "/ 02 — المفاهيم",
      title: "مفاهيم",
      titleAccent: "في دقيقتين.",
      description: "موسوعة مُكثّفة: تعريف، مثال، ثم استخدام.",
      meta: "94 مفهوم · متجدّد أسبوعيّاً",
      cells: [
        { id: "042", title: "التَّلميح المُتَسَلسِل", sub: "Chain-of-Thought", desc: "كيف يُفكِّر النموذج بصوتٍ عالٍ قبل أن يُجيب." },
        { id: "017", title: "التضمين الدّلالي", sub: "Embeddings", desc: "تحويل المعنى إلى إحداثيّات قابلة للقياس." },
        { id: "063", title: "الاسترجاع المُعزَّز", sub: "RAG", desc: "ذاكرة خارجيّة للنموذج بدون إعادة تدريبه." },
        { id: "028", title: "حرارة النموذج", sub: "Temperature", desc: "مقبض العشوائيّة: متى نضبطه على صفر؟" },
        { id: "091", title: "الوكيل متعدّد الخطوات", sub: "Multi-step Agent", desc: "خطّة، تنفيذ، تأمُّل، إعادة." },
        { id: "005", title: "نافذة السّياق", sub: "Context Window", desc: "حدود ذاكرة النموذج العاملة، ولماذا تضيق." }
      ]
    },
    templates: {
      eyebrow: "/ 03 — القوالب",
      title: "شحن",
      titleAccent: "فوريّ.",
      description: "قوالب قتاليّة: تَنسخ، تُعدِّل، تُشغِّل.",
      allLink: "المعرض كامل →",
      usesSuffix: "استخدام",
      hint: "نسخ. عدّل. شغّل.",
      cards: [
        { id: "t1", kind: "prompt", tag: "PROMPT", title: "مُراجِع كود بعين ناقدة", uses: "1.2k" },
        { id: "t2", kind: "flow", tag: "WORKFLOW", title: "سير: بحث → ملخّص → تغريدة", uses: "840" },
        { id: "t3", kind: "prompt", tag: "PROMPT", title: "مُقابِل وظيفي بدور فنّي", uses: "612" },
        { id: "t4", kind: "flow", tag: "WORKFLOW", title: "وكيل دعم عملاء بلهجة خليجيّة", uses: "298" }
      ]
    },
    cta: {
      eyebrow: "/ READY.SET.BUILD",
      titleLine1: "ابنِ معنا.",
      titleAccent: "الآن.",
      description: "الدفعات محدودة. الدعوات بالأولويّة. لا نشرات بريديّة مُتطفّلة.",
      placeholder: "بريدك الإلكتروني",
      button: "انضمّ ↙"
    },
    footer: {
      description: "بيئة تقنيّة عربيّة للجيل القادم من البنّائين والمشغّلين وفِرق الأنظمة الإبداعيّة.",
      tags: ["مُصمّم في الرياض", "© 2026"],
      groups: [
        {
          title: "المنظومة",
          items: [
            { label: "المجتمع" },
            { label: "ديسكورد" },
            { label: "جيت‌هَب" },
            { label: "المدوّنة" }
          ]
        },
        {
          title: "الدعم",
          items: [
            { label: "التوثيق" },
            { label: "الخصوصيّة", href: "/ar/privacy" },
            { label: "الشروط", href: "/ar/terms" },
            { label: "عن بنّاء", href: "/ar/about" }
          ]
        },
        {
          title: "الإشارات",
          items: [
            { label: "X / تويتر" },
            { label: "لينكدإن" },
            { label: "يوتيوب" },
            { label: "التلغرام" }
          ]
        }
      ],
      copyright: "© 2026 10claws Inc. — بنّاء. مصنوع بعناية لصنّاع الأنظمة.",
      slogan: "ABRA CADABRA / BUILD OR PERISH"
    },
    legal: {
      about: {
        eyebrow: "/ عن بنّاء",
        title: "بنّاء. منصّة عربيّة للبنّائين.",
        intro:
          "بنّاء بيئة تقنيّة عربيّة للجيل القادم من البنّائين والمشغّلين وفِرق الأنظمة الإبداعيّة. نُصمِّم مسارات، مفاهيم، وقوالب تُشحَن.",
        updated: "آخر تحديث: 20 نيسان 2026",
        sections: [
          {
            heading: "مَن نحن",
            body: [
              "بنّاء مُشغَّل من قِبل شركة 10claws Inc.، وهي شركة مُسجَّلة في ولاية تكساس الأمريكيّة.",
              "نُركِّز على صناعة أدوات تعلُّم عربيّة-أوّلاً حول الذكاء الاصطناعي، بعقليّة الشحن لا النظريّة."
            ]
          },
          {
            heading: "أين نبني",
            body: [
              "مقرّنا الإداري في هيوستن، تكساس، مع تركيز تشغيلي على منطقة الشرق الأوسط وشمال أفريقيا."
            ]
          },
          {
            heading: "ما نصنعه",
            body: [
              "مسارات طبقيّة، مفاهيم مُكثّفة في دقيقتين، وقوالب قتاليّة جاهزة للنَسخ والتعديل والتشغيل."
            ]
          }
        ],
        contact: {
          heading: "تواصل معنا",
          lines: [
            "10claws Inc.",
            "2500 CityWest Blvd Ste. 150",
            "Houston, TX 77042",
            "United States"
          ]
        },
        backLabel: "↩ العودة للرئيسية"
      },
      privacy: {
        eyebrow: "/ سياسة الخصوصيّة",
        title: "الخصوصيّة.",
        intro:
          "تُوضِّح هذه السياسة ما نجمعه عند زيارتك لموقع بنّاء، ولماذا نجمعه، وكيف يمكنك التحكّم فيه.",
        updated: "آخر تحديث: 20 نيسان 2026",
        sections: [
          {
            heading: "المعلومات التي نجمعها",
            body: [
              "نستخدم Google Analytics لجمع إحصائيّات مجهولة الهويّة حول زيارات الموقع (الصفحات، المدّة، المصدر، نوع الجهاز).",
              "إذا أرسلت نموذج تواصل أو اشتركت في قائمة بريديّة، نحتفظ بالبيانات التي تُقدِّمها طوعاً (الاسم، البريد الإلكتروني، والرسالة)."
            ]
          },
          {
            heading: "كيف نستخدمها",
            body: [
              "لتحسين تجربة الموقع، وفهم ما يلقى تفاعلاً، وللردّ على استفساراتك. لا نبيع بياناتك لأطراف ثالثة."
            ]
          },
          {
            heading: "ملفّات تعريف الارتباط",
            body: [
              "يستخدم الموقع ملفّات تعريف ارتباط تحليليّة عبر Google Analytics. يمكنك تعطيلها من إعدادات المتصفِّح أو عبر إضافة «Google Analytics Opt-out»."
            ]
          },
          {
            heading: "حقوقك",
            body: [
              "يحقّ لك الاطِّلاع على بياناتك، أو طلب تعديلها، أو حذفها، عبر مراسلتنا على العنوان أدناه."
            ]
          },
          {
            heading: "تحديثات السياسة",
            body: [
              "قد نُحدِّث هذه السياسة من حينٍ لآخر. ستظهر التحديثات على هذه الصفحة مع تاريخ التحديث."
            ]
          }
        ],
        contact: {
          heading: "جهة الاتّصال",
          lines: [
            "10claws Inc.",
            "2500 CityWest Blvd Ste. 150",
            "Houston, TX 77042",
            "United States"
          ]
        },
        backLabel: "↩ العودة للرئيسية"
      },
      terms: {
        eyebrow: "/ شروط الاستخدام",
        title: "الشروط.",
        intro:
          "باستخدامك موقع بنّاء، فإنّك توافق على هذه الشروط. اقرأها بتأنٍّ.",
        updated: "آخر تحديث: 20 نيسان 2026",
        sections: [
          {
            heading: "استخدام الموقع",
            body: [
              "يُتاح الموقع لأغراض التعلُّم والمرجعيّة. لا يُسمح باستخدامه لأيّ نشاط غير قانوني أو ينتهك حقوق الآخرين."
            ]
          },
          {
            heading: "الملكيّة الفكريّة",
            body: [
              "جميع المحتويات (النصوص، الشعارات، التصاميم، القوالب) مملوكة لشركة 10claws Inc. ما لم يُذكر خلاف ذلك.",
              "يمكنك نَسخ واستخدام القوالب المُعلَنة كـ«قوالب مفتوحة» وفق الترخيص المُرفَق بكلّ قالب."
            ]
          },
          {
            heading: "المحتوى الذي تُقدِّمه",
            body: [
              "تحتفظ بملكيّة ما تُرسله من محتوى، وتمنحنا ترخيصاً غير حصري لاستخدامه في تشغيل الخدمة."
            ]
          },
          {
            heading: "إخلاء المسؤوليّة",
            body: [
              "يُقدَّم الموقع «كما هو» دون أيّ ضمانات. لا نتحمّل مسؤوليّة أيّ أضرار ناتجة عن استخدامه."
            ]
          },
          {
            heading: "القانون الحاكم",
            body: [
              "تخضع هذه الشروط لقوانين ولاية تكساس في الولايات المتّحدة الأمريكيّة."
            ]
          },
          {
            heading: "التعديلات",
            body: [
              "قد نُعدِّل هذه الشروط من حينٍ لآخر. الاستمرار في استخدام الموقع بعد التعديل يعني قبول الشروط الجديدة."
            ]
          }
        ],
        contact: {
          heading: "جهة الاتّصال",
          lines: [
            "10claws Inc.",
            "2500 CityWest Blvd Ste. 150",
            "Houston, TX 77042",
            "United States"
          ]
        },
        backLabel: "↩ العودة للرئيسية"
      }
    }
  },
  en: {
    metadata: {
      title: "Bannaa — Build. Then build more.",
      description: "Arabic-first AI learning platform: condensed concepts, layered tracks, and templates that ship."
    },
    statusBar: {
      os: "BANNAA_OS // v3.0.1 // ACTIVE",
      region: "REGION: MENA",
      signal: "SIGNAL: STABLE",
      langLabel: "LANG: EN",
      themeDark: "DARK",
      themeLight: "LIGHT"
    },
    nav: {
      langSwitch: "AR / EN",
      ghostCta: "Sign in",
      primaryCta: "Get started ↙",
      links: [
        { id: "home", label: "Home", href: "#top" },
        { id: "tracks", label: "Tracks", href: "#tracks" },
        { id: "templates", label: "Templates", href: "#templates" },
        { id: "concepts", label: "Concepts", href: "#concepts" },
        { id: "about", label: "About", href: "/en/about" }
      ]
    },
    hero: {
      tags: [
        { label: "Build Version 3.0" },
        { label: "Arabic-first · open" },
        { label: "Limited intake", tone: "warn" }
      ],
      titleLine1: "Build.",
      titleAccent: "Then build",
      titleTail: " more.",
      description:
        "Bannaa is an AI learning platform for Arabic builders. Condensed concepts, layered tracks, and templates that ship. No theory without practice, no practice without system.",
      primaryCta: "Start with tracks ↙",
      secondaryCta: "Template gallery",
      terminal: {
        chromeTitle: "bannaa://pipeline — live",
        liveLabel: "● live",
        stages: [
          { key: "01 · PLAN", status: "drafting plan…" },
          { key: "02 · DESIGN", status: "sketching system…" },
          { key: "03 · AGENT", status: "agent thinking…" },
          { key: "04 · SITE", status: "rendering view…" }
        ],
        planHead: "// BRIEF.md",
        planRows: [
          { k: "Goal", v: "Arabic learning OS" },
          { k: "Audience", v: "Students + pros" },
          { k: "Tracks", v: "03 layers" },
          { k: "Templates", v: "38 ready" },
          { k: "Language", v: "Arabic" }
        ],
        planTags: ["bold", "terminal", "rtl-first", "dark"],
        sitePreview: { head: "Build.", accent: "With us." }
      },
      stats: [
        { num: "12", label: "Tracks", sub: "MODULE / PATH" },
        { num: "94", label: "Concepts", sub: "CONCEPT / IDEA" },
        { num: "38", label: "Templates", sub: "PROMPT / FLOW" },
        { num: "2.4k", label: "Builders", sub: "ACTIVE / BUILDERS" }
      ]
    },
    marquee: [
      "Build the unbuildable",
      "AI × builders",
      "Live tracks",
      "Combat templates",
      "Learn by making",
      "No canned recipes",
      "Experiment first",
      "Craft is the bar"
    ],
    tracks: {
      eyebrow: "/ 01 — TRACKS",
      title: "Three",
      titleAccent: "layers.",
      description: "Thematic tracks built on live concepts and ready-to-ship templates.",
      allLink: "All tracks →",
      cards: [
        {
          id: "foundations",
          num: "01",
          title: "Foundations",
          sub: "FOUNDATIONS",
          desc: "The first primitives: models, probabilities, tokens, and representation. From zero to grasp.",
          weeks: "4 weeks",
          level: "Beginner → Mid",
          kind: "foundations"
        },
        {
          id: "agents",
          num: "02",
          title: "Agents",
          sub: "AGENTS",
          desc: "Autonomous systems that plan, remember, and execute. From one agent to a network.",
          weeks: "6 weeks",
          level: "Mid → Advanced",
          kind: "agents"
        },
        {
          id: "media",
          num: "03",
          title: "Media",
          sub: "MEDIA",
          desc: "Generating image, sound, and video. From waveform to scene.",
          weeks: "5 weeks",
          level: "Mid",
          kind: "media"
        }
      ]
    },
    concepts: {
      eyebrow: "/ 02 — CONCEPTS",
      title: "Concepts",
      titleAccent: "in two minutes.",
      description: "A dense encyclopedia: define, illustrate, then apply.",
      meta: "94 concepts · weekly drops",
      cells: [
        { id: "042", title: "Chain-of-Thought", sub: "Reasoning", desc: "How a model thinks out loud before it answers." },
        { id: "017", title: "Embeddings", sub: "Semantic", desc: "Turning meaning into coordinates you can measure." },
        { id: "063", title: "Retrieval-Augmented", sub: "RAG", desc: "External memory for the model — no retraining required." },
        { id: "028", title: "Temperature", sub: "Sampling", desc: "The randomness dial — when do you pin it to zero?" },
        { id: "091", title: "Multi-step Agent", sub: "Agentic", desc: "Plan, act, reflect, retry." },
        { id: "005", title: "Context Window", sub: "Memory", desc: "The model's working memory — and why it keeps shrinking." }
      ]
    },
    templates: {
      eyebrow: "/ 03 — TEMPLATES",
      title: "Instant",
      titleAccent: "ship.",
      description: "Combat-ready templates: copy, tweak, run.",
      allLink: "Full gallery →",
      usesSuffix: "uses",
      hint: "Copy. Edit. Run.",
      cards: [
        { id: "t1", kind: "prompt", tag: "PROMPT", title: "Code reviewer with a critical eye", uses: "1.2k" },
        { id: "t2", kind: "flow", tag: "WORKFLOW", title: "Flow: research → summary → tweet", uses: "840" },
        { id: "t3", kind: "prompt", tag: "PROMPT", title: "Job interviewer in an artist's voice", uses: "612" },
        { id: "t4", kind: "flow", tag: "WORKFLOW", title: "Gulf-dialect customer-support agent", uses: "298" }
      ]
    },
    cta: {
      eyebrow: "/ READY.SET.BUILD",
      titleLine1: "Build with us.",
      titleAccent: "Now.",
      description: "Cohorts are limited. Invites go by priority. No noisy newsletters.",
      placeholder: "your@email",
      button: "Join ↙"
    },
    footer: {
      description: "An Arabic-first technical environment for the next wave of builders, operators, and creative systems teams.",
      tags: ["Designed in Riyadh", "© 2026"],
      groups: [
        {
          title: "Ecosystem",
          items: [
            { label: "Community" },
            { label: "Discord" },
            { label: "GitHub" },
            { label: "Blog" }
          ]
        },
        {
          title: "Support",
          items: [
            { label: "Docs" },
            { label: "Privacy", href: "/en/privacy" },
            { label: "Terms", href: "/en/terms" },
            { label: "About", href: "/en/about" }
          ]
        },
        {
          title: "Signals",
          items: [
            { label: "X / Twitter" },
            { label: "LinkedIn" },
            { label: "YouTube" },
            { label: "Telegram" }
          ]
        }
      ],
      copyright: "© 2026 10claws Inc. — Bannaa. Crafted for systems builders.",
      slogan: "ABRA CADABRA / BUILD OR PERISH"
    },
    legal: {
      about: {
        eyebrow: "/ About Bannaa",
        title: "Bannaa. An Arabic-first build environment.",
        intro:
          "Bannaa is a technical environment for the next wave of Arabic-first builders, operators, and creative systems teams. We design tracks, concepts, and templates that ship.",
        updated: "Last updated: April 20, 2026",
        sections: [
          {
            heading: "Who we are",
            body: [
              "Bannaa is operated by 10claws Inc., a corporation registered in the State of Texas, USA.",
              "We focus on shipping Arabic-first AI learning tools with a build-first mindset."
            ]
          },
          {
            heading: "Where we build",
            body: [
              "Our headquarters is in Houston, Texas, with an operational focus on the MENA region."
            ]
          },
          {
            heading: "What we make",
            body: [
              "Layered tracks, two-minute condensed concepts, and battle-tested templates ready to copy, edit, and run."
            ]
          }
        ],
        contact: {
          heading: "Contact",
          lines: [
            "10claws Inc.",
            "2500 CityWest Blvd Ste. 150",
            "Houston, TX 77042",
            "United States"
          ]
        },
        backLabel: "↩ Back to home"
      },
      privacy: {
        eyebrow: "/ Privacy Policy",
        title: "Privacy.",
        intro:
          "This policy explains what we collect when you visit Bannaa, why we collect it, and how you can control it.",
        updated: "Last updated: April 20, 2026",
        sections: [
          {
            heading: "Information we collect",
            body: [
              "We use Google Analytics to collect anonymous visit statistics (pages viewed, time on page, referrer, device type).",
              "If you submit a contact form or subscribe to a mailing list, we retain the data you voluntarily provide (name, email, message)."
            ]
          },
          {
            heading: "How we use it",
            body: [
              "To improve the site experience, understand what resonates, and respond to your questions. We do not sell your data to third parties."
            ]
          },
          {
            heading: "Cookies",
            body: [
              "The site uses analytics cookies via Google Analytics. You can disable them in your browser settings or via the Google Analytics Opt-out add-on."
            ]
          },
          {
            heading: "Your rights",
            body: [
              "You may request access to, correction of, or deletion of your data by emailing us at the address below."
            ]
          },
          {
            heading: "Changes",
            body: [
              "We may update this policy from time to time. Updates will appear on this page with a new revision date."
            ]
          }
        ],
        contact: {
          heading: "Contact",
          lines: [
            "10claws Inc.",
            "2500 CityWest Blvd Ste. 150",
            "Houston, TX 77042",
            "United States"
          ]
        },
        backLabel: "↩ Back to home"
      },
      terms: {
        eyebrow: "/ Terms of Use",
        title: "Terms.",
        intro:
          "By using Bannaa, you agree to these terms. Please read them carefully.",
        updated: "Last updated: April 20, 2026",
        sections: [
          {
            heading: "Use of the site",
            body: [
              "The site is provided for learning and reference. You may not use it for any unlawful activity or in a way that infringes the rights of others."
            ]
          },
          {
            heading: "Intellectual property",
            body: [
              "All content (text, logos, designs, templates) is owned by 10claws Inc. unless otherwise stated.",
              "Templates marked as open may be copied and used under the license attached to each template."
            ]
          },
          {
            heading: "Content you submit",
            body: [
              "You retain ownership of content you submit, and grant us a non-exclusive license to use it for operating the service."
            ]
          },
          {
            heading: "Disclaimer",
            body: [
              "The site is provided \"as is\" without any warranty. We are not liable for any damages arising from its use."
            ]
          },
          {
            heading: "Governing law",
            body: [
              "These terms are governed by the laws of the State of Texas, USA."
            ]
          },
          {
            heading: "Changes",
            body: [
              "We may modify these terms from time to time. Continued use of the site after changes means acceptance of the updated terms."
            ]
          }
        ],
        contact: {
          heading: "Contact",
          lines: [
            "10claws Inc.",
            "2500 CityWest Blvd Ste. 150",
            "Houston, TX 77042",
            "United States"
          ]
        },
        backLabel: "↩ Back to home"
      }
    }
  }
};
