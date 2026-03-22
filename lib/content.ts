import type { Locale } from "@/lib/i18n";

export type ModuleItem = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export type ToolCard = {
  id: string;
  title: string;
  description: string;
  label: string;
  featured?: boolean;
  accent?: boolean;
};

export type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    brand: string;
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    accentLine: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    terminalLabel: string;
    terminalLines: string[];
  };
  curriculum: {
    title: string;
    accent: string;
    description: string;
    meta: string[];
    modules: ModuleItem[];
  };
  tools: {
    title: string;
    cards: ToolCard[];
  };
  cta: {
    title: string;
    accent: string;
    description: string;
    placeholder: string;
    button: string;
    hint: string;
  };
  footer: {
    brand: string;
    description: string;
    socialTitle: string;
    social: string[];
    linkGroups: {
      title: string;
      links: string[];
    }[];
    copyright: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    metadata: {
      title: "Bannaa",
      description: "A bilingual architectural blueprint landing page for builders, creators, and modern production teams."
    },
    header: {
      brand: "Bannaa",
      links: [
        { label: "Curriculum", href: "#curriculum" },
        { label: "Tools", href: "#tools" },
        { label: "About", href: "#footer" }
      ],
      cta: "Join Now"
    },
    hero: {
      eyebrow: "System Version 2.0.4 // Active",
      titleLines: ["BUILD"],
      accentLine: "OR DIE.",
      description:
        "The definitive operating system for modern builders. Move beyond theory into production environments with discipline, clarity, and speed.",
      primaryCta: "Initialize Protocol",
      secondaryCta: "View Specs",
      terminalLabel: "terminal_os_v1",
      terminalLines: [
        ">> architect_init --force",
        "[SUCCESS] Grid system established.",
        "[SUCCESS] Material tokens injected.",
        "[WARNING] High performance detected."
      ]
    },
    curriculum: {
      title: "Curriculum",
      accent: "Structure",
      description:
        "A technical learning path engineered as four focused modules, each designed to move from design theory into applied production.",
      meta: ["Total Modules: 04", "Core Competency: Master"],
      modules: [
        {
          id: "01",
          title: "Foundation Theory",
          description: "Master geometry, proportion, and the brutalist constraints that keep systems coherent.",
          bullets: ["Grid Logic", "Optic Balance", "Spatial Math"]
        },
        {
          id: "02",
          title: "Token Engineering",
          description: "Convert visual language into reusable variables, scales, and predictable components.",
          bullets: ["Theme Logic", "Type Scales", "Token Maps"]
        },
        {
          id: "03",
          title: "Interface Physics",
          description: "Shape interaction, motion, and density so interfaces feel structural rather than decorative.",
          bullets: ["Kinetic Motion", "Layer Stacking", "Input Logic"]
        },
        {
          id: "04",
          title: "Full Stack OS",
          description: "Assemble the final system from infrastructure through interface without losing visual discipline.",
          bullets: ["Env Config", "Shell Design", "Deployment"]
        }
      ]
    },
    tools: {
      title: "Builder Tools",
      cards: [
        {
          id: "engine",
          title: "The Blueprint Engine",
          description: "A featured command surface for drafting system primitives and rendering structural decisions fast.",
          label: "Explore Engine",
          featured: true
        },
        {
          id: "type",
          title: "Typography Lab",
          description: "Tune headline weight, annotation rhythm, and technical readability across scripts.",
          label: "Aa"
        },
        {
          id: "surface",
          title: "Accent Panel",
          description: "A live accent block that demonstrates how urgency and hierarchy are encoded in the system.",
          label: "Live Protocol",
          accent: true
        },
        {
          id: "assets",
          title: "Asset Manager",
          description: "Route references, specs, and release surfaces without fragmenting the design language.",
          label: "Go"
        }
      ]
    },
    cta: {
      title: "READY TO",
      accent: "CONSTRUCT?",
      description: "Limited access cohorts for builders who want a sharper operating system for modern production work.",
      placeholder: "ENTER_EMAIL_PROTOCOL",
      button: "ACCESS NOW",
      hint: "Priority invites only. No generic newsletter noise."
    },
    footer: {
      brand: "Bannaa",
      description: "A technical environment for the next generation of builders, operators, and creative systems teams.",
      socialTitle: "Signals",
      social: ["X", "GitHub", "LinkedIn"],
      linkGroups: [
        { title: "Ecosystem", links: ["Community", "Discord", "GitHub"] },
        { title: "Support", links: ["Documentation", "Privacy", "Contact"] }
      ],
      copyright: "© 2026 ARCHITECT_OS. Built for production-minded teams."
    }
  },
  ar: {
    metadata: {
      title: "بناء",
      description: "واجهة هبوط ثنائية اللغة بطابع مخطط معماري موجهة للبنّائين والمبدعين وفرق الإنتاج الحديثة."
    },
    header: {
      brand: "بنّاء",
      links: [
        { label: "المنهج", href: "#curriculum" },
        { label: "الأدوات", href: "#tools" },
        { label: "حول", href: "#footer" }
      ],
      cta: "انضم الآن"
    },
    hero: {
      eyebrow: "نسخة النظام 2.0.4 // نشط",
      titleLines: ["البناء"],
      accentLine: "أو الفناء.",
      description:
        "نظام تشغيل حاسم للبنّائين المعاصرين. انتقل من النظرية إلى بيئات إنتاج منضبطة وسريعة وواضحة.",
      primaryCta: "بدء البروتوكول",
      secondaryCta: "عرض المواصفات",
      terminalLabel: "terminal_os_v1",
      terminalLines: [
        ">> architect_init --force",
        "[SUCCESS] Grid system established.",
        "[SUCCESS] Material tokens injected.",
        "[WARNING] High performance detected."
      ]
    },
    curriculum: {
      title: "هيكل",
      accent: "المنهج",
      description:
        "مسار تعليمي تقني مكوّن من أربع وحدات مركزة، صُمم لينقل الفكرة من النظرية البصرية إلى التطبيق الإنتاجي.",
      meta: ["إجمالي الوحدات: 04", "الكفاءة الأساسية: خبير"],
      modules: [
        {
          id: "01",
          title: "نظرية التأسيس",
          description: "إتقان الهندسة والنسب والقيود البصرية التي تجعل النظام متماسكاً.",
          bullets: ["منطق الشبكة", "التوازن البصري", "رياضيات المكان"]
        },
        {
          id: "02",
          title: "هندسة الرموز",
          description: "تحويل اللغة البصرية إلى متغيرات قابلة لإعادة الاستخدام ومقاييس واضحة ومكونات ثابتة.",
          bullets: ["منطق السمة", "مقاييس الخط", "خرائط الرموز"]
        },
        {
          id: "03",
          title: "فيزياء الواجهة",
          description: "صياغة التفاعل والحركة والكثافة لتبدو الواجهة بنيوية لا زخرفية.",
          bullets: ["الحركة الحركية", "رص الطبقات", "منطق الإدخال"]
        },
        {
          id: "04",
          title: "نظام التشغيل المتكامل",
          description: "تركيب النظام النهائي من البنية الأساسية حتى الواجهة دون فقدان الانضباط البصري.",
          bullets: ["إعداد البيئة", "تصميم الغلاف", "النشر"]
        }
      ]
    },
    tools: {
      title: "أدوات البناء",
      cards: [
        {
          id: "engine",
          title: "محرك المخططات",
          description: "واجهة أوامر رئيسية لصياغة اللبنات الأساسية ورسم القرارات الهيكلية بسرعة.",
          label: "استكشف المحرك",
          featured: true
        },
        {
          id: "type",
          title: "مختبر الخطوط",
          description: "ضبط ثقل العناوين وإيقاع الشروح وسهولة القراءة عبر اللغات.",
          label: "أب"
        },
        {
          id: "surface",
          title: "لوحة الإشارة",
          description: "لوحة Accent حية توضّح كيف تُبنى الأولوية والحدة داخل النظام.",
          label: "بروتوكول",
          accent: true
        },
        {
          id: "assets",
          title: "مدير الأصول",
          description: "تنظيم المراجع والمواصفات ونقاط الإصدار من دون كسر اللغة البصرية.",
          label: "اذهب"
        }
      ]
    },
    cta: {
      title: "هل أنت مستعد",
      accent: "للبناء؟",
      description: "دفعات محدودة للبنّائين الذين يريدون نظام تشغيل أكثر دقة للعمل الإنتاجي الحديث.",
      placeholder: "ادخل_بريدك_الآن",
      button: "احصل على الوصول",
      hint: "دعوات أولوية فقط. لا رسائل عامة بلا قيمة."
    },
    footer: {
      brand: "بنّاء",
      description: "بيئة تقنية للجيل القادم من البنّائين والمشغلين وفرق الأنظمة الإبداعية.",
      socialTitle: "الإشارات",
      social: ["X", "GitHub", "LinkedIn"],
      linkGroups: [
        { title: "المنظومة", links: ["المجتمع", "ديسكورد", "غيت هاب"] },
        { title: "الدعم", links: ["الوثائق", "الخصوصية", "تواصل"] }
      ],
      copyright: "© 2026 ARCHITECT_OS. صُمم لفرق الإنتاج الجادة."
    }
  }
};
