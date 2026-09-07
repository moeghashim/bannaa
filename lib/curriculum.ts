import type { Locale } from "@/lib/i18n";
import type { TrackCard } from "@/lib/content";

// Existing IDs preserve content filters and incoming links.
export function curriculum(locale: Locale): TrackCard[] {
  const ar = locale === "ar";
  const text = (en: string, arabic: string) => ar ? arabic : en;
  const modules = (rows: [string, string, string, string][]) =>
    rows.map(([en, arabic, desc, descAr]) => ({ title: text(en, arabic), desc: text(desc, descAr) }));
  return [
    {
      id: "founder", num: "01", kind: "foundations",
      title: text("Prerequisites", "المتطلبات المسبقة"), sub: "BEFORE YOU JOIN",
      desc: text("Knowledge you must already have before joining. These are entry requirements, not lessons we teach.", "معارف يجب أن تمتلكها قبل الانضمام. هذه شروط استعداد وليست دروساً ندرّسها."),
      weeks: text("Entry requirements", "شروط الانضمام"), level: text("Before Basics", "قبل الأساسيات"),
      outcomes: [text("Explain a task and its inputs", "اشرح مهمة ومدخلاتها"), text("Define a correct result", "حدّد النتيجة الصحيحة"), text("Make a small webpage change", "أجرِ تعديلاً بسيطاً على صفحة ويب")],
      modules: modules([
        ["HTML, CSS & JavaScript", "HTML وCSS وJavaScript", "Recognize structure, styling, and behavior; make a simple edit.", "ميّز بين البنية والتنسيق والسلوك، وأجرِ تعديلاً بسيطاً."],
        ["Express an idea clearly", "التعبير الواضح عن الفكرة", "Describe the user, problem, desired result, and constraints.", "صف المستخدم والمشكلة والنتيجة المطلوبة والقيود."],
        ["Web versus mobile", "الويب مقابل تطبيقات الجوال", "Understand browser-based apps and installed mobile apps.", "افهم الفرق بين تطبيق يعمل في المتصفح وتطبيق مثبّت على الجوال."],
        ["Break a task into steps", "تقسيم المهمة إلى خطوات", "Identify inputs, outputs, and examples of a successful result.", "حدّد المدخلات والمخرجات وأمثلة على نتيجة ناجحة."],
        ["Programming literacy", "مبادئ البرمجة", "Understand variables, conditions, loops, files, and folders at a basic level.", "افهم المتغيرات والشروط والحلقات والملفات والمجلدات على مستوى أولي."],
        ["Check the result", "التحقق من النتيجة", "Compare an answer with evidence and explain what is missing.", "قارن الإجابة بالأدلة واشرح ما ينقصها."]
      ])
    },
    {
      id: "ai-building", num: "02", kind: "agents",
      title: text("Basics", "الأساسيات"), sub: "LEARN THE FOUNDATIONS",
      desc: text("Understand the tools and systems behind agents. Build and deploy a small app that uses a model or a tool.", "افهم الأدوات والأنظمة التي تقوم عليها الوكلاء. ابنِ وانشر تطبيقاً صغيراً يستخدم نموذجاً أو أداة."),
      weeks: text("Taught stage 1", "المرحلة التعليمية الأولى"), level: text("Understand → deploy", "افهم ← انشر"),
      outcomes: [text("Publish a working app", "انشر تطبيقاً يعمل"), text("Connect a model or tool", "اربط نموذجاً أو أداة"), text("Debug and test outcomes", "شخّص الأخطاء واختبر النتائج")],
      modules: modules([
        ["Prompts & context", "التوجيهات والسياق", "Write clear prompts; supply relevant context and understand model limitations.", "اكتب توجيهات واضحة ووفّر السياق المناسب وافهم حدود النماذج."],
        ["Local & remote development", "التطوير المحلي والجلسات البعيدة", "Use a terminal, run locally, and understand remote sessions and environments.", "استخدم الطرفية وشغّل المشروع محلياً وافهم الجلسات والبيئات البعيدة."],
        ["Git & GitHub", "Git وGitHub", "Track changes, use branches, review a diff, and collaborate through pull requests.", "تتبّع التغييرات واستخدم الفروع وراجع الفروقات وتعاون عبر طلبات الدمج."],
        ["Frontend, backend & data", "الواجهة والخادم والبيانات", "Trace a request from the interface through an API to a database.", "تتبّع الطلب من الواجهة عبر واجهة برمجية إلى قاعدة البيانات."],
        ["Models, tools & agents", "النماذج والأدوات والوكلاء", "Distinguish a model response, a fixed workflow, and an agent choosing its next action.", "ميّز بين إجابة النموذج وسير عمل ثابت ووكيل يختار خطوته التالية."],
        ["Skills & hooks", "المهارات والخطّافات", "Package reusable skills and trigger actions at defined lifecycle events.", "جهّز مهارات قابلة لإعادة الاستخدام وشغّل إجراءات عند أحداث محددة."],
        ["APIs & structured data", "الواجهات البرمجية والبيانات المنظمة", "Connect tools, read JSON, and handle credentials and permissions.", "اربط الأدوات واقرأ JSON وتعامل مع بيانات الاعتماد والصلاحيات."],
        ["Deploy, debug & evaluate", "النشر والتشخيص والتقييم", "Publish an app, read logs, test expected outputs, and measure usage costs.", "انشر تطبيقاً واقرأ السجلات واختبر المخرجات المتوقعة وقِس تكلفة الاستخدام."]
      ])
    },
    {
      id: "builder", num: "03", kind: "media",
      title: text("Advanced", "المتقدم"), sub: "BUILD AGENT SYSTEMS",
      desc: text("Build one reliable agent, then loops, a complete service, and coordinated agents. Improve the system through measured experiments.", "ابنِ وكيلاً موثوقاً ثم حلقات عمل وخدمة متكاملة ووكلاء منسّقة. حسّن النظام بتجارب قابلة للقياس."),
      weeks: text("Taught stage 2", "المرحلة التعليمية الثانية"), level: text("One agent → a system", "وكيل واحد ← نظام"),
      outcomes: [text("Deploy a complete agent service", "انشر خدمة وكلاء متكاملة"), text("Coordinate agents and recover failures", "نسّق الوكلاء وتعافَ من الأخطاء"), text("Demonstrate measured improvement", "أثبت تحسّناً قابلاً للقياس")],
      modules: modules([
        ["A single agent", "وكيل واحد", "Give an agent a goal, tools, memory, permissions, and an observable result.", "زوّد الوكيل بهدف وأدوات وذاكرة وصلاحيات ونتيجة يمكن التحقق منها."],
        ["Agent loops", "حلقات الوكلاء", "Plan, act, evaluate, and repeat with explicit stop conditions and budgets.", "خطّط ونفّذ وقيّم وكرّر مع شروط توقف وحدود تكلفة واضحة."],
        ["A complete service", "خدمة متكاملة", "Connect interface, backend, storage, authentication, deployment, and monitoring.", "اربط الواجهة والخادم والتخزين والمصادقة والنشر والمراقبة."],
        ["Coordinated agents & swarms", "تنسيق الوكلاء والأسراب", "Delegate work, exchange context, run tasks in parallel, and resolve conflicting results.", "فوّض العمل وشارك السياق ونفّذ المهام بالتوازي وعالج تعارض النتائج."],
        ["Reliability & evaluation", "الاعتمادية والتقييم", "Use test sets, traces, retries, queues, and recovery; compare quality and cost with a single agent.", "استخدم مجموعات اختبار وتتبعاً وإعادة محاولة وطوابير وتعافياً، وقارن الجودة والتكلفة بوكيل واحد."],
        ["Measured self-improvement", "التحسين الذاتي المقاس", "Propose prompt, skill, or code changes; test on held-out cases, then keep or roll back.", "اقترح تغييرات للتوجيهات أو المهارات أو الكود واختبرها بحالات مستقلة ثم اعتمدها أو تراجع عنها."],
        ["Recursive improvement: experimental", "التحسين التكراري: تجريبي", "Explore improving the improvement process itself. Require independent evaluation; progress is not guaranteed.", "استكشف تحسين عملية التحسين نفسها مع تقييم مستقل؛ التقدم ليس مضموناً."]
      ])
    }
  ];
}
